import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArticleCard } from '@/components/article/ArticleCard'
import { getArticlesByCategory, getAllCategorySlugs } from '@/lib/articles'
import { getCategoryBySlug, siteConfig } from '@/lib/site-config'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return { title: 'Categoria não encontrada' }
  }

  return {
    title: `${category.name} — ${siteConfig.name}`,
    description: `Artigos sobre ${category.name}: ${category.description}`,
    alternates: {
      canonical: `/categoria/${slug}`,
    },
    openGraph: {
      title: `${category.name} — ${siteConfig.name}`,
      description: `Artigos sobre ${category.name}: ${category.description}`,
    },
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) notFound()

  const articles = getArticlesByCategory(slug)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} — ${siteConfig.name}`,
    description: category.description,
    url: `${siteConfig.url}/categoria/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Cabeçalho da categoria */}
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: 'var(--clr-surface-2)' }}
              aria-hidden="true"
            >
              {category.icon}
            </div>
            <div>
              <h1
                className="text-3xl sm:text-4xl font-bold tracking-tight"
                style={{ color: 'var(--clr-text)' }}
              >
                {category.name}
              </h1>
            </div>
          </div>

          <p className="text-lg max-w-2xl" style={{ color: 'var(--clr-text-2)' }}>
            {category.description}
          </p>

          <p className="mt-2 text-sm" style={{ color: 'var(--clr-text-3)' }}>
            {articles.length} artigo{articles.length !== 1 ? 's' : ''} nesta categoria
          </p>
        </header>

        {articles.length === 0 ? (
          <div
            className="text-center py-20 rounded-2xl border"
            style={{
              backgroundColor: 'var(--clr-surface)',
              borderColor: 'var(--clr-border)',
            }}
          >
            <p className="text-5xl mb-4">{category.icon}</p>
            <p className="text-lg font-medium mb-2" style={{ color: 'var(--clr-text)' }}>
              Nenhum artigo nesta categoria ainda
            </p>
            <p style={{ color: 'var(--clr-text-2)' }}>
              Em breve teremos conteúdo sobre {category.name}!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
