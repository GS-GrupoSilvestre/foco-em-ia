import { siteConfig } from '@/lib/site-config'
import { absoluteUrl } from '@/lib/utils'

interface ArticleJsonLdProps {
  title: string
  description: string
  /** URL absoluta da página do artigo (a mesma do canonical). */
  url: string
  /** URL absoluta da imagem de capa (idealmente 1200x630). */
  image: string
  /** Data ISO 8601, ex.: 2026-09-10T00:00:00.000Z */
  datePublished: string
  /** Se não houver atualização, use a própria data de publicação. */
  dateModified?: string
  category?: string
  keywords?: string[]
}

/**
 * Dados estruturados (JSON-LD) do tipo Article para páginas de artigo.
 * Server Component: não envia JavaScript ao navegador, então não pesa no
 * Core Web Vitals. O Google lê o script direto do HTML.
 */
export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  category,
  keywords,
}: ArticleJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [image],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Person',
      name: siteConfig.schemaAuthor.name,
      url: absoluteUrl(siteConfig.schemaAuthor.path),
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo'),
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    inLanguage: siteConfig.language,
    ...(category ? { articleSection: category } : {}),
    ...(keywords?.length ? { keywords: keywords.join(', ') } : {}),
  }

  // Troca "<" por <: impede que um título com "</script>" feche a tag.
  const json = JSON.stringify(data).replace(/</g, '\\u003c')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
