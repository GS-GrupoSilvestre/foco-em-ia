import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Política Editorial — ${siteConfig.name}`,
  description: 'Conheça os princípios editoriais que guiam a produção de conteúdo do Foco em IA.',
  alternates: {
    canonical: '/politica-editorial',
  },
}

export default function PoliticaEditorialPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: 'var(--clr-text)' }}
        >
          Política Editorial
        </h1>
        <p className="text-lg" style={{ color: 'var(--clr-text-2)' }}>
          Como criamos, revisamos e publicamos conteúdo no Foco em IA.
        </p>
      </header>

      <div className="space-y-8" style={{ color: 'var(--clr-text-2)', lineHeight: '1.8' }}>
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            Nossa missão editorial
          </h2>
          <p>
            O Foco em IA existe para tornar a inteligência artificial acessível ao público brasileiro. Acreditamos que informação de qualidade — precisa, prática e honesta — é a melhor forma de ajudar as pessoas a tomarem decisões informadas sobre quais ferramentas usar e como usá-las.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            Princípios que guiam nosso trabalho
          </h2>

          <div className="space-y-5 mt-4">
            {[
              {
                title: 'Precisão antes de velocidade',
                body: 'Preferimos publicar um artigo bem pesquisado a ser o primeiro a cobrir um assunto. Verificamos afirmações técnicas antes de publicar e indicamos quando algo ainda é incerto ou experimental.',
              },
              {
                title: 'Linguagem acessível, sem simplificação excessiva',
                body: 'Escrevemos para um público inteligente que nem sempre tem formação técnica. Explicamos conceitos complexos em linguagem clara sem tratar o leitor como iniciante absoluto quando o contexto não exige isso.',
              },
              {
                title: 'Utilidade prática',
                body: 'Todo artigo deve ter aplicação real. Nos perguntamos sempre: "depois de ler isso, o leitor consegue fazer algo diferente ou melhor?" Se a resposta for não, revisamos o conteúdo.',
              },
              {
                title: 'Transparência sobre limitações',
                body: 'Quando algo está em evolução, quando testamos apenas parte de uma ferramenta, ou quando nossas conclusões têm limitações, dizemos isso claramente.',
              },
              {
                title: 'Independência editorial',
                body: 'Parcerias comerciais e anúncios não influenciam quais produtos cobrimos ou como os avaliamos. Análises negativas são publicadas quando os fatos justificam.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border-l-4"
                style={{
                  backgroundColor: 'var(--clr-surface)',
                  borderLeftColor: 'var(--clr-primary)',
                }}
              >
                <h3 className="font-semibold mb-2" style={{ color: 'var(--clr-text)' }}>
                  {item.title}
                </h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            Processo de criação de conteúdo
          </h2>
          <p>
            Nossos artigos seguem um processo editorial que inclui: pesquisa e verificação de fontes, teste prático das ferramentas quando aplicável, redação com foco na clareza, revisão técnica e de linguagem, e publicação com metadados completos de SEO.
          </p>
          <p className="mt-3">
            Artigos são atualizados quando informações relevantes mudam — a data de última atualização é sempre exibida.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            Uso de inteligência artificial na produção
          </h2>
          <p>
            Usamos ferramentas de IA como auxiliares no processo editorial: para brainstorming, revisão gramatical e pesquisa inicial. Todo conteúdo final é revisado, editado e validado por humanos antes de ser publicado. Não publicamos conteúdo gerado por IA sem revisão editorial significativa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            Correções e atualizações
          </h2>
          <p>
            Erros acontecem. Quando identificamos ou recebemos notificação de um erro, corrigimos o mais rápido possível e indicamos que o artigo foi atualizado. Para reportar um erro, use nosso{' '}
            <a href="/contato" style={{ color: 'var(--clr-primary)' }} className="hover:underline">
              formulário de contato
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            Monetização e conflitos de interesse
          </h2>
          <p>
            O Foco em IA é monetizado por publicidade (Google AdSense) e pode incluir links de afiliados. Quando um artigo contiver link de afiliado, indicaremos de forma clara. A remuneração de afiliado nunca determina quais produtos cobrimos ou como os avaliamos — nossa recomendação sempre reflete nossa opinião honesta.
          </p>
        </section>
      </div>
    </div>
  )
}
