import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Category } from '@/types/article'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  category: Category
  articleCount?: number
  className?: string
}

export function CategoryCard({ category, articleCount, className }: CategoryCardProps) {
  return (
    <Link
      href={`/categoria/${category.slug}`}
      className={cn(
        'group flex flex-col p-5 rounded-xl border',
        'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5',
        className
      )}
      style={{
        backgroundColor: 'var(--clr-surface)',
        borderColor: 'var(--clr-border)',
      }}
    >
      {/* Ícone */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
        style={{ backgroundColor: 'var(--clr-surface-2)' }}
        aria-hidden="true"
      >
        {category.icon}
      </div>

      {/* Nome da categoria */}
      <h3
        className="font-semibold mb-1.5 group-hover:underline"
        style={{ color: 'var(--clr-text)' }}
      >
        {category.name}
      </h3>

      {/* Descrição */}
      <p
        className="text-sm flex-1 line-clamp-2 mb-3"
        style={{ color: 'var(--clr-text-2)' }}
      >
        {category.description}
      </p>

      {/* Rodapé */}
      <div className="flex items-center justify-between">
        {articleCount !== undefined && (
          <span className="text-xs" style={{ color: 'var(--clr-text-3)' }}>
            {articleCount} {articleCount === 1 ? 'artigo' : 'artigos'}
          </span>
        )}
        <span
          className="flex items-center gap-1 text-sm font-medium ml-auto transition-all duration-150 group-hover:gap-2"
          style={{ color: 'var(--clr-primary)' }}
          aria-hidden="true"
        >
          Ver
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}
