import type { Metadata } from 'next'
import { ArticleCard } from '@/components/article/ArticleCard'
import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Todos os Artigos — ${siteConfig.name}`,
  description: 'Todos os artigos sobre inteligência artificial, ChatGPT, Gemini, ferramentas de IA e muito mais. Guias práticos em português do Brasil.',
  alternates: {
    canonical: '/artigos',
  },
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <header className="mb-10">
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--clr-text)' }}
        >
          Todos os artigos
        </h1>
        <p className="text-lg" style={{ color: 'var(--clr-text-2)' }}>
          {articles.length} artigo{articles.length !== 1 ? 's' : ''} publicado{articles.length !== 1 ? 's' : ''} sobre inteligência artificial
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
          <p className="text-5xl mb-4">📝</p>
          <p className="text-lg font-medium mb-2" style={{ color: 'var(--clr-text)' }}>
            Nenhum artigo encontrado
          </p>
          <p style={{ color: 'var(--clr-text-2)' }}>
            Em breve novos conteúdos por aqui!
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
  )
}
