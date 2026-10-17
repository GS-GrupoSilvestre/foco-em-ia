import type { ReactNode } from 'react'
import { brands, type BrandKey } from '@/lib/brands'
import { cn } from '@/lib/utils'

interface BrandMarkProps {
  brands: BrandKey[]
  /** Altura/largura de cada logo, em px. */
  size: number
  /** Mostrado quando não há logo ou há logos demais para o espaço. */
  fallback: ReactNode
  /** Máximo de logos que cabem no espaço; acima disso usa o fallback. */
  maxBrands?: number
  /** Mantém as cores originais mesmo no modo escuro (para fundos claros fixos). */
  keepColors?: boolean
  className?: string
}

/**
 * Logo(s) da(s) marca(s) do assunto; se não houver, o ícone genérico.
 * Decorativo: o nome da categoria/artigo já está no texto ao lado.
 */
export function BrandMark({
  brands: keys,
  size,
  fallback,
  maxBrands = 3,
  keepColors = false,
  className,
}: BrandMarkProps) {
  if (keys.length === 0 || keys.length > maxBrands) return <>{fallback}</>

  const each = keys.length > 1 ? Math.round(size * 0.8) : size

  return (
    <span className={cn('inline-flex items-center justify-center gap-2', className)}>
      {keys.map((key) => {
        const brand = brands[key]
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={key}
            src={brand.src}
            alt=""
            width={each}
            height={each}
            loading="lazy"
            decoding="async"
            className={cn(
              'object-contain select-none',
              brand.invertOnDark && !keepColors && 'dark:invert'
            )}
            style={{ width: each, height: each }}
          />
        )
      })}
    </span>
  )
}
