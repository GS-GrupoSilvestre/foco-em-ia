import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Termos de Uso — ${siteConfig.name}`,
  description: 'Termos e condições de uso do portal Foco em IA.',
  alternates: {
    canonical: '/termos-de-uso',
  },
}

export default function TermosDeUsoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--clr-text)' }}
        >
          Termos de Uso
        </h1>
        <p className="text-sm" style={{ color: 'var(--clr-text-3)' }}>
          Última atualização: 1 de janeiro de 2025
        </p>
      </header>

      <div className="space-y-8" style={{ color: 'var(--clr-text-2)', lineHeight: '1.8' }}>
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            1. Aceitação dos termos
          </h2>
          <p>
            Ao acessar e utilizar o site <strong style={{ color: 'var(--clr-text)' }}>Foco em IA</strong> ({siteConfig.url}), você concorda com estes Termos de Uso. Se não concordar com algum dos termos, pedimos que não utilize nosso site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            2. Sobre o conteúdo
          </h2>
          <p>
            O conteúdo publicado no Foco em IA tem caráter informativo e educacional. Fazemos nosso melhor para manter as informações atualizadas e precisas, mas não garantimos a completude, exatidão ou adequação do conteúdo para fins específicos.
          </p>
          <p className="mt-3">
            O mundo da inteligência artificial evolui rapidamente. Informações sobre ferramentas e modelos podem ficar desatualizadas. Sempre verifique as fontes originais das ferramentas que você pretende utilizar.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            3. Propriedade intelectual
          </h2>
          <p>
            Todo o conteúdo original publicado no Foco em IA — incluindo textos, imagens produzidas pela equipe e código — é protegido por direitos autorais. É proibida a reprodução total ou parcial sem autorização expressa.
          </p>
          <p className="mt-3">
            Você pode compartilhar trechos curtos com devida atribuição e link para o artigo original. Para uso comercial ou reprodução extensa, entre em contato.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            4. Links externos
          </h2>
          <p>
            Nossos artigos podem conter links para sites externos. Esses links são fornecidos para conveniência e não constituem endosso do conteúdo de terceiros. Não nos responsabilizamos pelo conteúdo de sites externos.
          </p>
          <p className="mt-3">
            Eventualmente, podemos incluir links de afiliados. Quando isso acontecer, indicaremos claramente. Isso não afeta o preço pago pelo usuário.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            5. Limitação de responsabilidade
          </h2>
          <p>
            O Foco em IA não se responsabiliza por danos diretos ou indiretos decorrentes do uso das informações publicadas no site, incluindo decisões de negócio ou técnicas baseadas em nosso conteúdo. Use as informações como ponto de partida e consulte profissionais qualificados quando necessário.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            6. Conduta do usuário
          </h2>
          <p>Ao utilizar este site, você concorda em não:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Tentar acessar áreas restritas do sistema</li>
            <li>Usar bots ou scrapers de forma abusiva</li>
            <li>Reproduzir conteúdo sem autorização</li>
            <li>Compartilhar informações falsas sobre o site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            7. Alterações nos termos
          </h2>
          <p>
            Reservamos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação. O uso continuado do site após alterações constitui aceitação dos novos termos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            8. Lei aplicável
          </h2>
          <p>
            Estes termos são regidos pelas leis brasileiras. Qualquer disputa será submetida ao foro da comarca de São Paulo — SP, Brasil.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            9. Contato
          </h2>
          <p>
            Dúvidas sobre estes termos? Entre em contato:{' '}
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
