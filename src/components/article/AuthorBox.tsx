import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export function AuthorBox() {
  return (
    <aside
      className="rounded-xl border p-6 mt-10"
      style={{
        backgroundColor: 'var(--clr-surface)',
        borderColor: 'var(--clr-border)',
      }}
      aria-label="Sobre o autor"
    >
      <div className="flex items-start gap-4">
        {/* Avatar da equipe */}
        <div
          className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center text-2xl font-bold text-white"
          style={{ background: 'var(--gradient-primary)' }}
          aria-hidden="true"
        >
          FI
        </div>

        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: 'var(--clr-text-3)' }}
          >
            Escrito por
          </p>
          <Link
            href={`/autor/${siteConfig.authorSlug}`}
            className="font-bold text-base hover:underline"
            style={{ color: 'var(--clr-text)' }}
          >
            {siteConfig.authorName}
          </Link>
          <p className="text-sm mt-1.5 leading-relaxed" style={{ color: 'var(--clr-text-2)' }}>
            A equipe do Foco em IA pesquisa e publica conteúdo sobre
            inteligência artificial com o objetivo de tornar o tema mais
            acessível para pessoas e empresas brasileiras.
          </p>
          <Link
            href={`/autor/${siteConfig.authorSlug}`}
            className="inline-block mt-2 text-sm font-medium hover:underline"
            style={{ color: 'var(--clr-primary)' }}
          >
            Ver todos os artigos →
          </Link>
        </div>
      </div>
    </aside>
  )
}
