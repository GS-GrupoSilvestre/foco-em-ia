import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import type { ArticleMeta } from '@/types/article'
import { formatDate, cn } from '@/lib/utils'
import { getCategoryByName } from '@/lib/site-config'

interface FeaturedArticleProps {
  article: ArticleMeta
  priority?: 'primary' | 'secondary'
  className?: string
}

export function FeaturedArticle({
  article,
  priority = 'secondary',
  className,
}: FeaturedArticleProps) {
  const { frontmatter, slug, readingTime } = article
  const category = getCategoryByName(frontmatter.category)

  if (priority === 'primary') {
    return (
      <article
        className={cn(
          'group relative rounded-2xl overflow-hidden',
          'min-h-72',
          className
        )}
        style={{ background: 'var(--gradient-primary)' }}
      >
        {/* Padrão de fundo abstrato */}
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, white 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 h-full flex flex-col justify-end p-7">
          {/* Ícone da categoria */}
          <div className="mb-4" aria-hidden="true">
            <span className="text-4xl">{category?.icon ?? '🤖'}</span>
          </div>

          <Link
            href={`/categoria/${
              frontmatter.category
                .toLowerCase()
                .normalize('NFD')
                .replace(/[̀-ͯ]/g, '')
                .replace(/\s+/g, '-')
            }`}
            className="inline-block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2 hover:text-white"
          >
            {frontmatter.category}
          </Link>

          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
            <Link
              href={`/artigos/${slug}`}
              className="hover:underline"
            >
              {frontmatter.title}
            </Link>
          </h2>

          <p className="text-white/75 text-sm line-clamp-2 mb-4">
            {frontmatter.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <Clock size={12} aria-hidden="true" />
              <span>{readingTime} min de leitura</span>
              <span aria-hidden="true">·</span>
              <span>{formatDate(frontmatter.publishedAt)}</span>
            </div>

            <Link
              href={`/artigos/${slug}`}
              className="flex items-center gap-1 text-white text-sm font-medium hover:gap-2 transition-all duration-150"
              aria-label={`Ler artigo: ${frontmatter.title}`}
            >
              Ler
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    )
  }

  // Variante secundária
  return (
    <article
      className={cn(
        'group flex flex-col rounded-xl border overflow-hidden',
        'transition-all duration-200 hover:shadow-md',
        className
      )}
      style={{
        backgroundColor: 'var(--clr-surface)',
        borderColor: 'var(--clr-border)',
      }}
    >
      {/* Visual */}
      <div
        className="h-36 flex items-center justify-center relative overflow-hidden"
        style={{ background: 'var(--gradient-subtle)' }}
        aria-hidden="true"
      >
        <span className="text-4xl">{category?.icon ?? '📄'}</span>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <Link
          href={`/categoria/${
            frontmatter.category
              .toLowerCase()
              .normalize('NFD')
              .replace(/[̀-ͯ]/g, '')
              .replace(/\s+/g, '-')
          }`}
          className="text-xs font-semibold uppercase tracking-wider mb-2 hover:underline"
          style={{ color: 'var(--clr-primary)' }}
        >
          {frontmatter.category}
        </Link>

        <h3 className="font-semibold leading-snug mb-2" style={{ color: 'var(--clr-text)' }}>
          <Link
            href={`/artigos/${slug}`}
            className="group-hover:underline line-clamp-2"
          >
            {frontmatter.title}
          </Link>
        </h3>

        <p
          className="text-sm flex-1 line-clamp-2 mb-4"
          style={{ color: 'var(--clr-text-2)' }}
        >
          {frontmatter.description}
        </p>

        <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--clr-text-3)' }}>
          <Clock size={12} aria-hidden="true" />
          <span>{readingTime} min de leitura</span>
        </div>
      </div>
    </article>
  )
}
