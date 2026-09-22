import type { Category } from '@/types/article'

export const siteConfig = {
  name: 'Foco em IA',
  shortName: 'FI',
  tagline: 'IA sem complicação.',
  description:
    'Guias, ferramentas e novidades para você usar inteligência artificial no dia a dia e nos negócios.',
  longDescription:
    'O Foco em IA ensina pessoas e empresas a entender e usar ferramentas de inteligência artificial de forma simples e prática.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://focoemia.com.br',
  email: 'contato@focoemia.com.br',
  locale: 'pt_BR',
  language: 'pt-BR',
  authorName: 'Equipe Foco em IA',
  authorSlug: 'equipe-foco-em-ia',
  twitterHandle: '@focoemia',
} as const

export const categories: Category[] = [
  {
    name: 'ChatGPT',
    slug: 'chatgpt',
    description: 'Guias, tutoriais e dicas para aproveitar o ChatGPT no trabalho e no cotidiano.',
    icon: '💬',
    color: '#10A37F',
  },
  {
    name: 'Gemini',
    slug: 'gemini',
    description: 'Tudo sobre o Gemini, o assistente de IA do Google integrado ao ecossistema Google.',
    icon: '✨',
    color: '#4285F4',
  },
  {
    name: 'Claude',
    slug: 'claude',
    description: 'Como usar o Claude da Anthropic para análise de textos, documentos e código.',
    icon: '🔮',
    color: '#7C3AED',
  },
  {
    name: 'Guias',
    slug: 'guias',
    description: 'Conteúdos completos para entender inteligência artificial do zero.',
    icon: '📖',
    color: '#0F172A',
  },
  {
    name: 'Imagens',
    slug: 'imagens',
    description: 'Crie imagens com IA: ferramentas, técnicas e exemplos práticos.',
    icon: '🎨',
    color: '#F59E0B',
  },
  {
    name: 'Vídeos',
    slug: 'videos',
    description: 'Ferramentas de IA para criar, editar e transformar vídeos.',
    icon: '🎬',
    color: '#EF4444',
  },
  {
    name: 'IA para Negócios',
    slug: 'ia-para-negocios',
    description: 'Como usar IA para crescer no e-commerce, marketing digital e produtividade.',
    icon: '💼',
    color: '#4F46E5',
  },
  {
    name: 'Ferramentas',
    slug: 'ferramentas',
    description: 'Comparativos e análises das melhores ferramentas de IA disponíveis.',
    icon: '🛠️',
    color: '#059669',
  },
]

export const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'ChatGPT', href: '/categoria/chatgpt' },
  { label: 'Gemini', href: '/categoria/gemini' },
  { label: 'Claude', href: '/categoria/claude' },
  { label: 'Imagens', href: '/categoria/imagens' },
  { label: 'Vídeos', href: '/categoria/videos' },
  { label: 'IA para Negócios', href: '/categoria/ia-para-negocios' },
  { label: 'Ferramentas', href: '/categoria/ferramentas' },
] as const

export const footerLinks = {
  categorias: categories.map((c) => ({ label: c.name, href: `/categoria/${c.slug}` })),
  institucional: [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Política Editorial', href: '/politica-editorial' },
    { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { label: 'Termos de Uso', href: '/termos-de-uso' },
    { label: 'Contato', href: '/contato' },
  ],
} as const

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getCategoryByName(name: string): Category | undefined {
  return categories.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  )
}
