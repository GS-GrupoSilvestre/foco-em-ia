import type { ArticleMeta } from '@/types/article'
import { ArticleCard } from './ArticleCard'

interface RelatedArticlesProps {
  articles: ArticleMeta[]
  currentSlug: string
}

export function RelatedArticles({ articles, currentSlug }: RelatedArticlesProps) {
  const filtered = articles.filter((a) => a.slug !== currentSlug).slice(0, 3)

  if (filtered.length === 0) return null

  return (
    <section className="mt-12" aria-labelledby="related-articles-heading">
      <div
        className="border-t pt-10"
        style={{ borderColor: 'var(--clr-border)' }}
      >
        <h2
          id="related-articles-heading"
          className="text-xl font-bold mb-6"
          style={{ color: 'var(--clr-text)' }}
        >
          Artigos relacionados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
