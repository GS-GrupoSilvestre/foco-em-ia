import type { ArticleFrontmatter } from '@/types/article'

/**
 * Logos das marcas citadas nos artigos. Os arquivos ficam em public/marcas/.
 * As marcas pertencem aos seus respectivos proprietários (ver aviso no rodapé).
 */
export type BrandKey = 'chatgpt' | 'gemini' | 'claude' | 'perplexity'

export interface Brand {
  name: string
  src: string
  /** Logo preto: no modo escuro é invertido para branco. */
  invertOnDark: boolean
}

export const brands: Record<BrandKey, Brand> = {
  chatgpt: { name: 'ChatGPT', src: '/marcas/chatgpt.webp', invertOnDark: true },
  gemini: { name: 'Gemini', src: '/marcas/gemini.webp', invertOnDark: false },
  claude: { name: 'Claude', src: '/marcas/claude.webp', invertOnDark: false },
  perplexity: { name: 'Perplexity', src: '/marcas/perplexity.webp', invertOnDark: true },
}

const categoryBrand: Record<string, BrandKey> = {
  chatgpt: 'chatgpt',
  gemini: 'gemini',
  claude: 'claude',
}

function isBrandKey(value: unknown): value is BrandKey {
  return typeof value === 'string' && value in brands
}

/** Marca da categoria (só ChatGPT, Gemini e Claude têm logo próprio). */
export function getBrandsForCategory(categorySlug: string): BrandKey[] {
  const key = categoryBrand[categorySlug]
  return key ? [key] : []
}

/**
 * Marcas de um artigo. O campo `marca` do frontmatter manda: uma marca, uma
 * lista (comparativos) ou lista vazia (nenhum logo). Sem o campo, vale a marca
 * da categoria.
 */
export function getBrandsForArticle(
  frontmatter: Pick<ArticleFrontmatter, 'category' | 'marca'>
): BrandKey[] {
  const { marca, category } = frontmatter
  if (marca !== undefined) {
    const list = Array.isArray(marca) ? marca : [marca]
    return list.filter(isBrandKey)
  }
  const slug = category
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-')
  return getBrandsForCategory(slug)
}
