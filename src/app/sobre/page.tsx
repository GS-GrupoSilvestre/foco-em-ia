import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Sobre — ${siteConfig.name}`,
  description: 'Conheça o Foco em IA, portal brasileiro de inteligência artificial com guias, tutoriais e análises práticas para trabalho, negócios e vida cotidiana.',
  alternates: {
    canonical: '/sobre',
  },
}

export default function SobrePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: 'var(--clr-text)' }}
        >
          Sobre o Foco em IA
        </h1>
        <p className="text-xl" style={{ color: 'var(--clr-text-2)' }}>
          Inteligência artificial sem complicação — em português do Brasil.
        </p>
      </header>

      <div
        className="prose-like space-y-6"
        style={{ color: 'var(--clr-text-2)', lineHeight: '1.8' }}
      >
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            O que é o Foco em IA?
          </h2>
          <p>
            O <strong style={{ color: 'var(--clr-text)' }}>Foco em IA</strong> é um portal de conteúdo dedicado à inteligência artificial, criado para o público brasileiro. Nossa missão é traduzir o mundo complexo da IA em guias práticos, tutoriais acessíveis e análises honestas — sem jargão técnico desnecessário.
          </p>
          <p>
            Acreditamos que a inteligência artificial já está transformando a forma como as pessoas trabalham, criam e tomam decisões. Nosso objetivo é garantir que qualquer brasileiro possa acompanhar essa revolução e tirar proveito real das ferramentas disponíveis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            O que você encontra aqui
          </h2>
          <p>Cobrimos as principais ferramentas e tópicos da inteligência artificial:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li><strong style={{ color: 'var(--clr-text)' }}>ChatGPT</strong> — prompts, casos de uso, atualizações e comparativos</li>
            <li><strong style={{ color: 'var(--clr-text)' }}>Gemini</strong> — como usar o AI do Google no dia a dia</li>
            <li><strong style={{ color: 'var(--clr-text)' }}>Claude</strong> — o modelo da Anthropic e seus diferenciais</li>
            <li><strong style={{ color: 'var(--clr-text)' }}>Geração de imagens</strong> — Midjourney, DALL-E, Stable Diffusion e outros</li>
            <li><strong style={{ color: 'var(--clr-text)' }}>Vídeos com IA</strong> — ferramentas emergentes e casos de uso</li>
            <li><strong style={{ color: 'var(--clr-text)' }}>IA para negócios</strong> — como aplicar IA em empresas de todos os tamanhos</li>
            <li><strong style={{ color: 'var(--clr-text)' }}>Ferramentas e produtividade</strong> — o melhor do ecossistema de IA</li>
            <li><strong style={{ color: 'var(--clr-text)' }}>Guias para iniciantes</strong> — começando do zero com inteligência artificial</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            Nossa abordagem editorial
          </h2>
          <p>
            Todo conteúdo publicado no Foco em IA segue princípios claros: precisão técnica, linguagem acessível e utilidade prática. Não publicamos conteúdo especulativo sem embasamento, não fazemos hype de tecnologias não testadas e sempre indicamos nossas fontes.
          </p>
          <p>
            Leia nossa{' '}
            <Link href="/politica-editorial" style={{ color: 'var(--clr-primary)' }} className="hover:underline">
              Política Editorial
            </Link>{' '}
            para entender os critérios que guiam nossa produção de conteúdo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            Transparência e monetização
          </h2>
          <p>
            O Foco em IA é sustentado por publicidade (Google AdSense) e pode eventualmente incluir links de afiliados. Quando isso acontecer, indicaremos claramente. Nossa política é não deixar que parcerias comerciais influenciem a qualidade ou neutralidade do nosso conteúdo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--clr-text)' }}>
            Entre em contato
          </h2>
          <p>
            Tem sugestões de pauta, dúvidas ou quer colaborar conosco?{' '}
            <Link href="/contato" style={{ color: 'var(--clr-primary)' }} className="hover:underline">
              Fale com a gente
            </Link>
            . Respondemos a todos os contatos, mesmo que demore um pouco.
          </p>
        </section>
      </div>
    </div>
  )
}
