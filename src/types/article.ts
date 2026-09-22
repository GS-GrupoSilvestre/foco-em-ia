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
