import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { calculateReadingTime } from '@/lib/utils'
import type { Article, ArticleFrontmatter, ArticleMeta } from '@/types/article'

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles')

function parseArticleFile(filename: string): ArticleMeta | null {
  try {
    const filePath = path.join(ARTICLES_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    const frontmatter = data as ArticleFrontmatter
    const slug = filename.replace(/\.mdx?$/, '')

    // Validação mínima do frontmatter
    if (!frontmatter.title || !frontmatter.publishedAt) return null

    return {
      frontmatter,
      slug,
      readingTime: calculateReadingTime(content),
    }
  } catch {
    return null
  }
}

export function getAllArticles(): ArticleMeta[] {
  try {
    if (!fs.existsSync(ARTICLES_DIR)) return []

    const filenames = fs
      .readdirSync(ARTICLES_DIR)
      .filter((name) => name.endsWith('.mdx') || name.endsWith('.md'))

    return filenames
      .map(parseArticleFile)
      .filter((a): a is ArticleMeta => a !== null)
      .sort(
        (a, b) =>
          new Date(b.frontmatter.publishedAt).getTime() -
          new Date(a.frontmatter.publishedAt).getTime()
      )
  } catch {
    return []
  }
}

export function getArticleBySlug(slug: string): Article | null {
  const extensions = ['mdx', 'md']

  for (const ext of extensions) {
    const filePath = path.join(ARTICLES_DIR, `${slug}.${ext}`)
    if (!fs.existsSync(filePath)) continue

    try {
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)

      return {
        frontmatter: data as ArticleFrontmatter,
        slug,
        content,
        readingTime: calculateReadingTime(content),
      }
    } catch {
      return null
    }
  }

  return null
}

export function getArticlesByCategory(categorySlug: string): ArticleMeta[] {
  return getAllArticles().filter((article) => {
    const catSlug = article.frontmatter.category
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/\s+/g, '-')
    return catSlug === categorySlug
  })
}

export function getRelatedArticles(
  currentSlug: string,
  category: string,
  tags: string[],
  limit = 3
): ArticleMeta[] {
  const allArticles = getAllArticles().filter((a) => a.slug !== currentSlug)

  return allArticles
    .map((article) => {
      let score = 0
      if (article.frontmatter.category === category) score += 3
      const commonTags = article.frontmatter.tags.filter((tag) =>
        tags.includes(tag)
      )
      score += commonTags.length
      return { article, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ article }) => article)
    .slice(0, limit)
}

export function searchArticles(query: string): ArticleMeta[] {
  if (!query.trim()) return []
  const q = query.toLowerCase().trim()

  return getAllArticles().filter(({ frontmatter }) => {
    const { title, description, tags, category, keywords } = frontmatter
    const searchableText = [
      title,
      description,
      category,
      ...tags,
      ...(keywords ?? []),
    ]
      .join(' ')
      .toLowerCase()
    return searchableText.includes(q)
  })
}

export function getFeaturedArticles(limit = 3): ArticleMeta[] {
  return getAllArticles()
    .filter((a) => a.frontmatter.featured)
    .slice(0, limit)
}

export function getPopularArticles(limit = 5): ArticleMeta[] {
  return getAllArticles()
    .filter((a) => a.frontmatter.popular)
    .slice(0, limit)
}

export function getLatestArticles(limit = 8): ArticleMeta[] {
  return getAllArticles().slice(0, limit)
}

export function getArticlesByTag(tag: string): ArticleMeta[] {
  return getAllArticles().filter((a) =>
    a.frontmatter.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllSlugs(): string[] {
  return getAllArticles().map((a) => a.slug)
}

export function getAllCategorySlugs(): string[] {
  const articles = getAllArticles()
  const slugSet = new Set(
    articles.map((a) =>
      a.frontmatter.category
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/\s+/g, '-')
    )
  )
  return Array.from(slugSet)
}
