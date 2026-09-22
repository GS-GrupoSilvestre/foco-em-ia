import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'
import { ArticleCard } from '@/components/article/ArticleCard'
import { FeaturedArticle } from '@/components/article/FeaturedArticle'
import { CategoryCard } from '@/components/home/CategoryCard'
import {
  getAllArticles,
  getFeaturedArticles,
  getArticlesByCategory,
} from '@/lib/articles'
import { categories, siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
}

function SectionTitle({
  title,
  href,
  label = 'Ver todos',
}: {
  title: string
  href?: string
  label?: string
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold tracking-tight" style={{ color: 'var(--clr-text)' }}>
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all duration-150"
          style={{ color: 'var(--clr-primary)' }}
        >
          {label}
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}

export default function HomePage() {
  const allArticles = getAllArticles()
  const featuredArticles = getFeaturedArticles(3)
  const latestArticles = allArticles.slice(0, 6)
  const chatgptArticles = getArticlesByCategory('chatgpt').slice(0, 3)
  const businessArticles = getArticlesByCategory('ia-para-negocios').slice(0, 3)
  const guiasArticles = getArticlesByCategory('guias').slice(0, 2)
  const popularArticles = allArticles.filter((a) => a.frontmatter.popular).slice(0, 4)

  // Dados estruturados da home
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/buscar?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ============ HERO ============ */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 px-4"
        style={{ background: 'var(--clr-bg)' }}
        aria-labelledby="hero-heading"
      >
        {/* Fundo decorativo */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(79,70,229,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(124,58,237,0.06) 0%, transparent 50%)',
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{
              background: 'var(--clr-primary-light)',
              color: 'var(--clr-primary)',
            }}
          >
            <Sparkles size={14} aria-hidden="true" />
            Conteúdo em português do Brasil
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight"
            style={{ color: 'var(--clr-text)' }}
          >
            Inteligência artificial{' '}
            <span style={{ color: 'var(--clr-primary)' }}>sem complicação.</span>
          </h1>

          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--clr-text-2)' }}
          >
            Guias, ferramentas, comparativos e tutoriais para você usar IA de
            verdade no trabalho, nos negócios e no dia a dia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/categoria/guias"
              className="px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5 shadow-md"
              style={{ background: 'var(--gradient-primary)' }}
            >
              Comece por aqui
            </Link>
            <Link
              href="/artigos"
              className="px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-150 hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--clr-surface)',
                borderColor: 'var(--clr-border)',
                color: 'var(--clr-text)',
              }}
            >
              Ver últimos artigos
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">

        {/* ============ DESTAQUES ============ */}
        {featuredArticles.length > 0 && (
          <section className="mb-14" aria-labelledby="featured-heading">
            <SectionTitle
              title="Destaques"
              href="/artigos"
              label="Ver todos os artigos"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featuredArticles[0] && (
                <div className="md:col-span-1">
                  <FeaturedArticle
                    article={featuredArticles[0]}
                    priority="primary"
                    className="h-full"
                  />
                </div>
              )}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {featuredArticles.slice(1, 3).map((article) => (
                  <FeaturedArticle
                    key={article.slug}
                    article={article}
                    priority="secondary"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============ COMECE POR AQUI ============ */}
        {guiasArticles.length > 0 && (
          <section className="mb-14" aria-labelledby="start-heading">
            <SectionTitle
              title="Comece por aqui"
              href="/categoria/guias"
              label="Ver guias"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {guiasArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* ============ ÚLTIMOS ARTIGOS ============ */}
        {latestArticles.length > 0 && (
          <section className="mb-14" aria-labelledby="latest-heading">
            <SectionTitle
              title="Últimos artigos"
              href="/artigos"
              label="Ver todos"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {latestArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* ============ CHATGPT ============ */}
        {chatgptArticles.length > 0 && (
          <section className="mb-14" aria-labelledby="chatgpt-heading">
            <SectionTitle
              title="ChatGPT"
              href="/categoria/chatgpt"
              label="Ver mais"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {chatgptArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* ============ IA PARA NEGÓCIOS ============ */}
        {businessArticles.length > 0 && (
          <section className="mb-14" aria-labelledby="business-heading">
            <SectionTitle
              title="IA para Negócios"
              href="/categoria/ia-para-negocios"
              label="Ver mais"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {businessArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* ============ EXPLORE POR CATEGORIA ============ */}
        <section className="mb-14" aria-labelledby="categories-heading">
          <SectionTitle title="Explore por categoria" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
              const count = allArticles.filter(
                (a) =>
                  a.frontmatter.category
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[̀-ͯ]/g, '')
                    .replace(/\s+/g, '-') === category.slug
              ).length
              return (
                <CategoryCard
                  key={category.slug}
                  category={category}
                  articleCount={count}
                />
              )
            })}
          </div>
        </section>

        {/* ============ MAIS LIDOS ============ */}
        {popularArticles.length > 0 && (
          <section className="mb-8" aria-labelledby="popular-heading">
            <SectionTitle title="Mais lidos" />
            <div
              className="rounded-xl border overflow-hidden"
              style={{
                backgroundColor: 'var(--clr-surface)',
                borderColor: 'var(--clr-border)',
              }}
            >
              <div className="divide-y" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
                {popularArticles.map((article) => (
                  <div
                    key={article.slug}
                    className="divide-y"
                    style={{ borderColor: 'var(--clr-border)' }}
                  >
                    <ArticleCard
                      article={article}
                      variant="horizontal"
                      className="border-0 rounded-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}
