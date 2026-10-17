import type { BrandKey } from '@/lib/brands'

export interface FAQ {
  question: string
  answer: string
}

export interface Source {
  name: string
  url: string
}

export interface ArticleFrontmatter {
  title: string
  description: string
  slug: string
  category: string
  tags: string[]
  publishedAt: string
  updatedAt?: string
  author: string
  featured?: boolean
  popular?: boolean
  keywords?: string[]
  faq?: FAQ[]
  sources?: Source[]
  /** Slugs escolhidos manualmente para "Artigos relacionados" (têm prioridade sobre o cálculo automático). */
  related?: string[]
  /** Logo(s) exibido(s) no lugar do ícone: uma marca, várias (comparativos) ou [] para nenhum. Sem o campo, vale a marca da categoria. */
  marca?: BrandKey | BrandKey[]
  /** Foto de capa (arquivo em /public). Aparece no topo do artigo, no card e no compartilhamento. Exige crédito/licença. */
  capa?: { src: string; alt: string; credito?: string }
}

export interface ArticleMeta {
  frontmatter: ArticleFrontmatter
  slug: string
  readingTime: number
}

export interface Article extends ArticleMeta {
  content: string
}

export interface Category {
  name: string
  slug: string
  description: string
  icon: string
  color: string
  /** Slugs dos artigos-pilar exibidos em "Comece por aqui" na página da categoria. */
  pillars?: string[]
}

export interface SearchResult {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  publishedAt: string
  readingTime: number
}
