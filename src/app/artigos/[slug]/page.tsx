import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { Breadcrumbs } from '@/components/article/Breadcrumbs'
import { ArticleMeta } from '@/components/article/ArticleMeta'
import { TableOfContents } from '@/components/article/TableOfContents'
import { ShareButtons } from '@/components/article/ShareButtons'
import { AuthorBox } from '@/components/article/AuthorBox'
import { RelatedArticles } from '@/components/article/RelatedArticles'
import { FAQ } from '@/components/article/FAQ'
import { AdSlot } from '@/components/ads/AdSlot'
import {
  getArticleBySlug,
  getAllSlugs,
  getRelatedArticles,
} from '@/lib/articles'
import { siteConfig } from '@/lib/site-config'
import { extractHeadings, absoluteUrl } from '@/lib/utils'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Artigo não encontrado',
    }
  }

  const { frontmatter } = article
  const url = absoluteUrl(`/artigos/${slug}`)
  const publishedTime = new Date(frontmatter.publishedAt).toISOString()
  const modifiedTime = frontmatter.updatedAt
    ? new Date(frontmatter.updatedAt).toISOString()
    : publishedTime

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.keywords ?? frontmatter.tags,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      url,
      publishedTime,
      modifiedTime,
      authors: [frontmatter.author],
      tags: frontmatter.tags,
      images: [
        {
          url: absoluteUrl(`/og?title=${encodeURIComponent(frontmatter.title)}&category=${encodeURIComponent(frontmatter.category)}`),
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: [absoluteUrl(`/og?title=${encodeURIComponent(frontmatter.title)}&category=${encodeURIComponent(frontmatter.category)}`)],
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  const { frontmatter, content, readingTime } = article
  const relatedArticles = getRelatedArticles(slug, frontmatter.category, frontmatter.tags)
  const headings = extractHeadings(content)
  const articleUrl = absoluteUrl(`/artigos/${slug}`)
  const publishedTime = new Date(frontmatter.publishedAt).toISOString()
  const modifiedTime = frontmatter.updatedAt
    ? new Date(frontmatter.updatedAt).toISOString()
    : publishedTime

  // JSON-LD Article structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    url: articleUrl,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Organization',
      name: frontmatter.author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/icon.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    image: absoluteUrl(`/og?title=${encodeURIComponent(frontmatter.title)}&category=${encodeURIComponent(frontmatter.category)}`),
    keywords: (frontmatter.keywords ?? frontmatter.tags).join(', '),
    articleSection: frontmatter.category,
    inLanguage: 'pt-BR',
  }

  const breadcrumbItems = [
    { label: 'Artigos', href: '/artigos' },
    { label: frontmatter.category, href: `/categoria/${frontmatter.category.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-')}` },
    { label: frontmatter.title },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-start">
          {/* ── Conteúdo principal ── */}
          <article>
            {/* Cabeçalho do artigo */}
            <header className="mb-8">
              <Link
                href={`/categoria/${frontmatter.category.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-')}`}
                className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                style={{
                  backgroundColor: 'var(--clr-primary-light)',
                  color: 'var(--clr-primary)',
                }}
              >
                {frontmatter.category}
              </Link>

              <h1
                className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4"
                style={{ color: 'var(--clr-text)' }}
              >
                {frontmatter.title}
              </h1>

              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: 'var(--clr-text-2)' }}
              >
                {frontmatter.description}
              </p>

              <ArticleMeta frontmatter={frontmatter} readingTime={readingTime} />
            </header>

            {/* Hero visual */}
            <div
              className="w-full h-48 sm:h-64 rounded-2xl mb-8 flex items-center justify-center"
              style={{
                background: 'var(--gradient-subtle)',
                border: '1px solid var(--clr-border)',
              }}
              aria-hidden="true"
            >
              <span className="text-6xl">
                {frontmatter.category === 'ChatGPT' ? '🤖' :
                 frontmatter.category === 'Gemini' ? '✨' :
                 frontmatter.category === 'Claude' ? '🧠' :
                 frontmatter.category === 'Imagens' ? '🎨' :
                 frontmatter.category === 'Vídeos' ? '🎬' :
                 frontmatter.category === 'Ferramentas' ? '🛠️' :
                 frontmatter.category === 'IA para Negócios' ? '💼' : '📖'}
              </span>
            </div>

            {/* AdSense – topo do artigo */}
            <AdSlot
              slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_TOP ?? ''}
              format="horizontal"
              className="mb-8"
            />

            {/* Sumário no mobile */}
            {headings.length > 0 && (
              <div className="lg:hidden mb-8">
                <TableOfContents headings={headings} />
              </div>
            )}

            {/* Corpo do artigo */}
            <div className="article-prose">
              <MDXRemote
                source={content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                    ],
                  },
                }}
              />
            </div>

            {/* AdSense – fim do conteúdo */}
            <AdSlot
              slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT ?? ''}
              format="rectangle"
              className="my-8"
            />

            {/* Fontes */}
            {frontmatter.sources && frontmatter.sources.length > 0 && (
              <section className="mt-8" aria-labelledby="sources-heading">
                <div
                  className="rounded-xl border p-5"
                  style={{
                    backgroundColor: 'var(--clr-surface)',
                    borderColor: 'var(--clr-border)',
                  }}
                >
                  <h2
                    id="sources-heading"
                    className="text-sm font-semibold mb-3"
                    style={{ color: 'var(--clr-text-2)' }}
                  >
                    Fontes e referências
                  </h2>
                  <ul className="space-y-1">
                    {frontmatter.sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:underline"
                          style={{ color: 'var(--clr-primary)' }}
                        >
                          {source.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* FAQ */}
            {frontmatter.faq && frontmatter.faq.length > 0 && (
              <FAQ items={frontmatter.faq} />
            )}

            {/* Tags */}
            {frontmatter.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: 'var(--clr-surface-2)',
                      color: 'var(--clr-text-2)',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Compartilhamento */}
            <ShareButtons title={frontmatter.title} url={articleUrl} />

            {/* Bloco do autor */}
            <AuthorBox />

            {/* Artigos relacionados */}
            {relatedArticles.length > 0 && (
              <RelatedArticles articles={relatedArticles} currentSlug={slug} />
            )}
          </article>

          {/* ── Sidebar desktop ── */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            {headings.length > 0 && (
              <TableOfContents headings={headings} />
            )}

            <AdSlot
              slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? ''}
              format="vertical"
              label="Publicidade"
            />
          </aside>
        </div>
      </div>
    </>
  )
}
