import Link from 'next/link'
import { Calendar, Clock, RefreshCw, User } from 'lucide-react'
import type { ArticleFrontmatter } from '@/types/article'
import { formatDate } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

interface ArticleMetaProps {
  frontmatter: ArticleFrontmatter
  readingTime: number
}

export function ArticleMeta({ frontmatter, readingTime }: ArticleMetaProps) {
  return (
    <div
      className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
      style={{ color: 'var(--clr-text-3)' }}
    >
      {/* Autor */}
      <Link
        href={`/autor/${siteConfig.authorSlug}`}
        className="flex items-center gap-1.5 hover:underline"
        style={{ color: 'var(--clr-text-2)' }}
      >
        <User size={14} aria-hidden="true" />
        <span className="font-medium">{frontmatter.author}</span>
      </Link>

      <span aria-hidden="true" className="hidden sm:block">·</span>

      {/* Data de publicação */}
      <time
        dateTime={frontmatter.publishedAt}
        className="flex items-center gap-1.5"
      >
        <Calendar size={14} aria-hidden="true" />
        <span>{formatDate(frontmatter.publishedAt)}</span>
      </time>

      {/* Última atualização */}
      {frontmatter.updatedAt && frontmatter.updatedAt !== frontmatter.publishedAt && (
        <>
          <span aria-hidden="true" className="hidden sm:block">·</span>
          <time
            dateTime={frontmatter.updatedAt}
            className="flex items-center gap-1.5"
            title="Última atualização"
          >
            <RefreshCw size={13} aria-hidden="true" />
            <span>Atualizado em {formatDate(frontmatter.updatedAt)}</span>
          </time>
        </>
      )}

      <span aria-hidden="true" className="hidden sm:block">·</span>

      {/* Tempo de leitura */}
      <span className="flex items-center gap-1.5">
        <Clock size={14} aria-hidden="true" />
        <span>{readingTime} min de leitura</span>
      </span>
    </div>
  )
}
