import type { Metadata } from 'next'
import { Mail, MessageSquare, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Contato — ${siteConfig.name}`,
  description: 'Entre em contato com a equipe do Foco em IA. Sugestões de pauta, parcerias, dúvidas e colaborações.',
  alternates: {
    canonical: '/contato',
  },
}

export default function ContatoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: 'var(--clr-text)' }}
        >
          Fale com a gente
        </h1>
        <p className="text-lg" style={{ color: 'var(--clr-text-2)' }}>
          Tem uma sugestão, dúvida, ou quer colaborar com o Foco em IA? Adoramos ouvir dos nossos leitores.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          {
            icon: <Mail size={20} />,
            title: 'E-mail',
            text: 'Para assuntos gerais, sugestões de pauta e parcerias',
          },
          {
            icon: <MessageSquare size={20} />,
            title: 'Sugestões',
            text: 'Quer ver um tema específico? Nos conte o que você precisa aprender',
          },
          {
            icon: <Clock size={20} />,
            title: 'Tempo de resposta',
            text: 'Respondemos em até 3 dias úteis na maioria dos casos',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="p-5 rounded-xl border"
            style={{
              backgroundColor: 'var(--clr-surface)',
              borderColor: 'var(--clr-border)',
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
              style={{
                backgroundColor: 'var(--clr-primary-light)',
                color: 'var(--clr-primary)',
              }}
            >
              {item.icon}
            </div>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--clr-text)' }}>
              {item.title}
            </h3>
            <p className="text-sm" style={{ color: 'var(--clr-text-2)' }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl border p-6 sm:p-8"
        style={{
          backgroundColor: 'var(--clr-surface)',
          borderColor: 'var(--clr-border)',
        }}
      >
        <h2
          className="text-xl font-bold mb-6"
          style={{ color: 'var(--clr-text)' }}
        >
          Enviar mensagem
        </h2>

        <form
          action={`mailto:${siteConfig.email}`}
          method="get"
          className="space-y-5"
          aria-label="Formulário de contato"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1.5"
                style={{ color: 'var(--clr-text-2)' }}
              >
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: 'var(--clr-bg)',
                  borderColor: 'var(--clr-border)',
                  color: 'var(--clr-text)',
                  '--tw-ring-color': 'var(--clr-primary)',
                } as React.CSSProperties}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5"
                style={{ color: 'var(--clr-text-2)' }}
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: 'var(--clr-bg)',
                  borderColor: 'var(--clr-border)',
                  color: 'var(--clr-text)',
                  '--tw-ring-color': 'var(--clr-primary)',
                } as React.CSSProperties}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-1.5"
              style={{ color: 'var(--clr-text-2)' }}
            >
              Assunto
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
              style={{
                backgroundColor: 'var(--clr-bg)',
                borderColor: 'var(--clr-border)',
                color: 'var(--clr-text)',
                '--tw-ring-color': 'var(--clr-primary)',
              } as React.CSSProperties}
            >
              <option value="sugestao">Sugestão de pauta</option>
              <option value="parceria">Parceria comercial</option>
              <option value="correcao">Correção de conteúdo</option>
              <option value="duvida">Dúvida técnica</option>
              <option value="outro">Outro assunto</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1.5"
              style={{ color: 'var(--clr-text-2)' }}
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="body"
              required
              rows={6}
              placeholder="Escreva sua mensagem aqui..."
              className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all resize-y"
              style={{
                backgroundColor: 'var(--clr-bg)',
                borderColor: 'var(--clr-border)',
                color: 'var(--clr-text)',
                '--tw-ring-color': 'var(--clr-primary)',
              } as React.CSSProperties}
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5 shadow-md"
            style={{ background: 'var(--gradient-primary)' }}
          >
            Enviar mensagem
          </button>
        </form>

        <p className="mt-4 text-xs" style={{ color: 'var(--clr-text-3)' }}>
          Ao enviar, você será redirecionado para o seu cliente de e-mail padrão. Alternativamente, escreva diretamente para{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            style={{ color: 'var(--clr-primary)' }}
            className="hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </div>
  )
}
