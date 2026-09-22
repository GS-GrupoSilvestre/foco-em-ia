import Link from 'next/link'
import { Clock, Calendar } from 'lucide-react'
import type { ArticleMeta } from '@/types/article'
import { formatDateShort, cn } from '@/lib/utils'
import { getCategoryByName } from '@/lib/site-config'

interface ArticleCardProps {
  article: ArticleMeta
  className?: string
  variant?: 'default' | 'compact' | 'horizontal'
}

export function ArticleCard({
  article,
  className,
  variant = 'default',
}: ArticleCardProps) {
  const { frontmatter, slug, readingTime } = article
  const category = getCategoryByName(frontmatter.category)

  if (variant === 'compact') {
    return (
      <Link
        href={`/artigos/${slug}`}
        className={cn(
          'group flex items-start gap-3 py-3',
          'border-b last:border-b-0',
          'transition-opacity duration-150 hover:opacity-80',
          className
        )}
        style={{ borderColor: 'var(--clr-border)' }}
      >
        <div
          className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center text-lg"
          style={{ backgroundColor: 'var(--clr-surface-2)' }}
          aria-hidden="true"
        >
          {category?.icon ?? '📄'}
        </div>
        <div className="min-w-0">
          <p
            className="text-sm font-medium line-clamp-2 group-hover:underline"
            style={{ color: 'var(--clr-text)' }}
          >
            {frontmatter.title}
          </p>
          <p className="text-xs mt-0.5" style={{ color: 'var(--clr-text-3)' }}>
            {readingTime} min de leitura
          </p>
        </div>
      </Link>
    )
  }

  if (variant === 'horizontal') {
    return (
      <Link
        href={`/artigos/${slug}`}
        className={cn(
          'group flex gap-4 p-4 rounded-xl border',
          'transition-all duration-150 hover:shadow-md',
          className
        )}
        style={{
          backgroundColor: 'var(--clr-surface)',
          borderColor: 'var(--clr-border)',
        }}
      >
        {/* Visual da categoria */}
        <div
          className="w-16 h-16 rounded-xl shrink-0 flex items-center justify-center text-2xl"
          style={{ backgroundColor: 'var(--clr-surface-2)' }}
          aria-hidden="true"
        >
          {category?.icon ?? '📄'}
        </div>

        <div className="min-w-0 flex flex-col justify-center">
          <span
            className="text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: 'var(--clr-primary)' }}
          >
            {frontmatter.category}
          </span>
          <h3
            className="text-sm font-semibold line-clamp-2 group-hover:underline"
            style={{ color: 'var(--clr-text)' }}
          >
            {frontmatter.title}
          </h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs flex items-center gap-1" style={{ color: 'var(--clr-text-3)' }}>
              <Clock size={11} />
              {readingTime} min
            </span>
          </div>
        </div>
      </Link>
    )
  }

  // Variante padrão — card vertical
  return (
    <article
      className={cn(
        'group rounded-xl border overflow-hidden',
        'transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5',
        className
      )}
      style={{
        backgroundColor: 'var(--clr-surface)',
        borderColor: 'var(--clr-border)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Hero visual do artigo */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: 'var(--gradient-subtle)' }}
        aria-hidden="true"
      >
        <span className="text-5xl">{category?.icon ?? '📄'}</span>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 80%, var(--clr-primary) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="p-5">
        {/* Categoria */}
        <Link
          href={`/categoria/${
            frontmatter.category
              .toLowerCase()
              .normalize('NFD')
              .replace(/[̀-ͯ]/g, '')
              .replace(/\s+/g, '-')
          }`}
          className="inline-block text-xs font-semibold uppercase tracking-wider mb-2 hover:underline"
          style={{ color: 'var(--clr-primary)' }}
        >
          {frontmatter.category}
        </Link>

        {/* Título */}
        <h3 className="mb-2" style={{ color: 'var(--clr-text)' }}>
          <Link
            href={`/artigos/${slug}`}
            className="font-semibold text-base leading-snug group-hover:underline line-clamp-3"
          >
            {frontmatter.title}
          </Link>
        </h3>

        {/* Descrição */}
        <p
          className="text-sm line-clamp-2 mb-4"
          style={{ color: 'var(--clr-text-2)' }}
        >
          {frontmatter.description}
        </p>

        {/* Metadados */}
        <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--clr-text-3)' }}>
          <span className="flex items-center gap-1">
            <Calendar size={12} aria-hidden="true" />
            {formatDateShort(frontmatter.publishedAt)}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock size={12} aria-hidden="true" />
            {readingTime} min de leitura
          </span>
        </div>
      </div>
    </article>
  )
}
