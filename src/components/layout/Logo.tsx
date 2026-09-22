import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'default' | 'footer'
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  const isFooter = variant === 'footer'

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2 group', className)}
      aria-label="Foco em IA — página inicial"
    >
      {/* Símbolo do logotipo */}
      <div
        aria-hidden="true"
        className={cn(
          'flex items-center justify-center rounded-lg font-black text-white shrink-0',
          'transition-transform duration-200 group-hover:scale-105',
          isFooter ? 'w-8 h-8 text-xs' : 'w-9 h-9 text-sm'
        )}
        style={{ background: 'var(--gradient-primary)' }}
      >
        FI
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            'font-bold tracking-tight',
            isFooter ? 'text-base' : 'text-lg',
          )}
          style={{ color: 'var(--clr-text)' }}
        >
          Foco em{' '}
          <span style={{ color: 'var(--clr-primary)' }}>IA</span>
        </span>
        {!isFooter && (
          <span
            className="text-xs font-normal"
            style={{ color: 'var(--clr-text-3)' }}
          >
            IA sem complicação.
          </span>
        )}
      </div>
    </Link>
  )
}
