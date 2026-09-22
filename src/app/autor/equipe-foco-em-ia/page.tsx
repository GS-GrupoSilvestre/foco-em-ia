import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleCard } from '@/components/article/ArticleCard'
import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Equipe Foco em IA — ${siteConfig.name}`,
  description: 'Conheça a equipe editorial do Foco em IA, portal brasileiro de inteligência artificial.',
  alternates: {
    canonical: '/autor/equipe-foco-em-ia',
  },
}

export default function AutorPage() {
  const articles = getAllArticles().slice(0, 6)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Perfil do autor */}
      <div
        className="rounded-2xl border p-6 sm:p-8 mb-10"
        style={{
          backgroundColor: 'var(--clr-surface)',
          borderColor: 'var(--clr-border)',
        }}
      >
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Avatar */}
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold text-white flex-shrink-0"
            style={{ background: 'var(--gradient-primary)' }}
            aria-hidden="true"
          >
            FI
          </div>

          <div className="flex-1">
            <h1
              className="text-2xl sm:text-3xl font-bold mb-1"
              style={{ color: 'var(--clr-text)' }}
            >
              Equipe Foco em IA
            </h1>
            <p className="text-sm mb-4" style={{ color: 'var(--clr-text-3)' }}>
              Autores e editores do portal
            </p>

            <p className="mb-4" style={{ color: 'var(--clr-text-2)', lineHeight: '1.7' }}>
              A Equipe Foco em IA é formada por profissionais apaixonados por tecnologia e comunicação, com foco em tornar o mundo da inteligência artificial mais acessível ao público brasileiro. Reunimos especialistas em IA, redatores técnicos e entusiastas da tecnologia para entregar conteúdo de qualidade em português do Brasil.
            </p>

            <p style={{ color: 'var(--clr-text-2)', lineHeight: '1.7' }}>
              Nossa equipe testa ferramentas na prática, acompanha as principais novidades do setor e transforma informações complexas em guias úteis para profissionais, empreendedores e curiosos.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              <Link
                href="/sobre"
                className="px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--clr-bg)',
                  borderColor: 'var(--clr-border)',
                  color: 'var(--clr-text)',
                }}
              >
                Sobre o Foco em IA
              </Link>
              <Link
                href="/contato"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'var(--gradient-primary)' }}
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: 'Artigos publicados', value: String(getAllArticles().length) },
          { label: 'Categorias cobertas', value: '8' },
          { label: 'Foco', value: 'IA prática' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-5 rounded-xl border"
            style={{
              backgroundColor: 'var(--clr-surface)',
              borderColor: 'var(--clr-border)',
            }}
          >
            <p
              className="text-2xl font-bold mb-1"
              style={{ color: 'var(--clr-primary)' }}
            >
              {stat.value}
            </p>
            <p className="text-xs" style={{ color: 'var(--clr-text-3)' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Últimos artigos */}
      {articles.length > 0 && (
        <section aria-labelledby="author-articles-heading">
          <div className="flex items-center justify-between mb-6">
            <h2
              id="author-articles-heading"
              className="text-xl font-bold"
              style={{ color: 'var(--clr-text)' }}
            >
              Últimos artigos
            </h2>
            <Link
              href="/artigos"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--clr-primary)' }}
            >
              Ver todos
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
