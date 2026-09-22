import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Política de Privacidade — ${siteConfig.name}`,
  description: 'Saiba como o Foco em IA coleta, usa e protege seus dados pessoais.',
  alternates: {
    canonical: '/politica-de-privacidade',
  },
}

export default function PoliticaPrivacidadePage() {
  const lastUpdated = '2025-01-01'

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--clr-text)' }}
        >
          Política de Privacidade
        </h1>
        <p className="text-sm" style={{ color: 'var(--clr-text-3)' }}>
          Última atualização: {new Date(lastUpdated).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </header>

      <div className="space-y-8" style={{ color: 'var(--clr-text-2)', lineHeight: '1.8' }}>
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            1. Quem somos
          </h2>
          <p>
            O <strong style={{ color: 'var(--clr-text)' }}>Foco em IA</strong> ({siteConfig.url}) é um portal de conteúdo sobre inteligência artificial, operado de forma independente com sede no Brasil. Esta Política de Privacidade descreve como tratamos informações dos visitantes do nosso site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            2. Dados coletados
          </h2>
          <p>O Foco em IA coleta os seguintes tipos de dados:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li><strong style={{ color: 'var(--clr-text)' }}>Dados de uso</strong> — páginas visitadas, tempo de permanência, origem do tráfego, dispositivo e navegador (via Google Analytics 4, de forma agregada e anonimizada)</li>
            <li><strong style={{ color: 'var(--clr-text)' }}>Preferências do site</strong> — tema (claro/escuro) salvo localmente no seu dispositivo via localStorage</li>
            <li><strong style={{ color: 'var(--clr-text)' }}>Dados de contato</strong> — nome e e-mail fornecidos voluntariamente através do formulário de contato</li>
          </ul>
          <p className="mt-3">
            <strong style={{ color: 'var(--clr-text)' }}>Não coletamos</strong> dados sensíveis como CPF, informações de pagamento ou dados de saúde.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            3. Como usamos os dados
          </h2>
          <p>Usamos as informações coletadas para:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Entender quais conteúdos são mais úteis para nossos leitores</li>
            <li>Melhorar a navegação e a experiência no site</li>
            <li>Responder mensagens enviadas pelo formulário de contato</li>
            <li>Exibir anúncios relevantes via Google AdSense</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            4. Google Analytics e AdSense
          </h2>
          <p>
            Utilizamos o <strong style={{ color: 'var(--clr-text)' }}>Google Analytics 4</strong> para analisar o tráfego do site com dados anonimizados. O IP dos visitantes é truncado antes de ser processado pelo Google.
          </p>
          <p className="mt-3">
            O <strong style={{ color: 'var(--clr-text)' }}>Google AdSense</strong> pode exibir anúncios personalizados com base no histórico de navegação. Você pode desativar a personalização de anúncios em{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--clr-primary)' }}
              className="hover:underline"
            >
              adssettings.google.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            5. Cookies
          </h2>
          <p>
            Usamos apenas cookies necessários para o funcionamento do site e os cookies do Google Analytics e AdSense. Não usamos cookies de rastreamento de terceiros para fins de marketing direto próprio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            6. Seus direitos (LGPD)
          </h2>
          <p>
            De acordo com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018), você tem direito a:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Solicitar acesso aos dados pessoais que temos sobre você</li>
            <li>Solicitar a correção de dados incorretos</li>
            <li>Solicitar a exclusão dos seus dados</li>
            <li>Retirar o consentimento para o uso dos seus dados a qualquer momento</li>
          </ul>
          <p className="mt-3">
            Para exercer esses direitos, entre em contato pelo e-mail{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              style={{ color: 'var(--clr-primary)' }}
              className="hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            7. Alterações nesta política
          </h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. A data de última atualização sempre estará indicada no topo desta página. Recomendamos que você revise este documento regularmente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            8. Contato
          </h2>
          <p>
            Dúvidas sobre esta política? Entre em contato:{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              style={{ color: 'var(--clr-primary)' }}
              className="hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
