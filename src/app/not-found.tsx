import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Página não encontrada — Foco em IA',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div
          className="inline-flex items-center justify-center w-24 h-24 rounded-full text-4xl mb-6"
          style={{ backgroundColor: 'var(--clr-surface-2)' }}
          aria-hidden="true"
        >
          🤖
        </div>

        <h1
          className="text-6xl font-bold mb-3"
          style={{ color: 'var(--clr-primary)' }}
        >
          404
        </h1>

        <h2
          className="text-2xl font-bold mb-3"
          style={{ color: 'var(--clr-text)' }}
        >
          Página não encontrada
        </h2>

        <p className="text-lg mb-8" style={{ color: 'var(--clr-text-2)' }}>
          A página que você procura não existe ou foi movida. Mas temos muito conteúdo sobre IA para você explorar!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5 shadow-md"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <Home size={16} aria-hidden="true" />
            Página inicial
          </Link>
          <Link
            href="/artigos"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-150 hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--clr-surface)',
              borderColor: 'var(--clr-border)',
              color: 'var(--clr-text)',
            }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Ver artigos
          </Link>
        </div>
      </div>
    </div>
  )
}
