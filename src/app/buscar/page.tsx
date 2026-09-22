import { Suspense } from 'react'
import type { Metadata } from 'next'
import { SearchInput } from '@/components/search/SearchInput'
import { ArticleCard } from '@/components/article/ArticleCard'
import { searchArticles, getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Buscar — ${siteConfig.name}`,
  description: 'Pesquise artigos sobre inteligência artificial, ChatGPT, Gemini, ferramentas de IA e muito mais.',
  robots: { index: false },
  alternates: {
    canonical: '/buscar',
  },
}

interface SearchResultsProps {
  query: string
}

function SearchResults({ query }: SearchResultsProps) {
  if (!query) {
    const latest = getAllArticles().slice(0, 6)
    return (
      <div>
        <p className="text-sm mb-6" style={{ color: 'var(--clr-text-3)' }}>
          Mostrando artigos recentes. Digite algo para buscar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    )
  }

  const results = searchArticles(query)

  if (results.length === 0) {
    return (
      <div
        className="text-center py-20 rounded-2xl border"
        style={{
          backgroundColor: 'var(--clr-surface)',
          borderColor: 'var(--clr-border)',
        }}
      >
        <p className="text-5xl mb-4">🔍</p>
        <p className="text-lg font-medium mb-2" style={{ color: 'var(--clr-text)' }}>
          Nenhum resultado para &ldquo;{query}&rdquo;
        </p>
        <p style={{ color: 'var(--clr-text-2)' }}>
          Tente palavras diferentes ou mais gerais.
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-sm mb-6" style={{ color: 'var(--clr-text-3)' }}>
        {results.length} resultado{results.length !== 1 ? 's' : ''} para &ldquo;{query}&rdquo;
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {results.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams
  const query = q?.trim() ?? ''

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <header className="mb-8">
        <h1
          className="text-3xl font-bold tracking-tight mb-6"
          style={{ color: 'var(--clr-text)' }}
        >
          Buscar artigos
        </h1>

        <Suspense fallback={null}>
          <SearchInput
            className="max-w-xl"
            autoFocus
          />
        </Suspense>
      </header>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border h-64 animate-pulse"
                style={{
                  backgroundColor: 'var(--clr-surface)',
                  borderColor: 'var(--clr-border)',
                }}
              />
            ))}
          </div>
        }
      >
        <SearchResults query={query} />
      </Suspense>
    </div>
  )
}
