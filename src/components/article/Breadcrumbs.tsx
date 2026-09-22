import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: 'Início', href: '/' }, ...items]

  return (
    <nav aria-label="Localização na página" className="mb-6">
      <ol
        className="flex items-center gap-1 text-sm flex-wrap"
        style={{ color: 'var(--clr-text-3)' }}
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1

          return (
            <li key={item.href ?? item.label} className="flex items-center gap-1">
              {index === 0 && (
                <Home size={14} aria-hidden="true" />
              )}
              {isLast || !item.href ? (
                <span
                  className="font-medium"
                  style={{ color: 'var(--clr-text-2)' }}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="hover:underline transition-colors"
                    style={{ color: 'var(--clr-text-3)' }}
                  >
                    {index > 0 ? item.label : null}
                  </Link>
                  <ChevronRight size={14} aria-hidden="true" />
                </>
              )}
            </li>
          )
        })}
      </ol>

      {/* Dados estruturados para breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: allItems.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.label,
              ...(item.href ? { item: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://focoemia.com.br'}${item.href}` } : {}),
            })),
          }),
        }}
      />
    </nav>
  )
}
