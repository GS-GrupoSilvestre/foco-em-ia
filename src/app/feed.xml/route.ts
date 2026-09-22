import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/lib/site-config'

export const dynamic = 'force-static'
export const revalidate = 3600 // 1 hora

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const articles = getAllArticles().slice(0, 20) // últimos 20 artigos
  const baseUrl = siteConfig.url

  const rssItems = articles
    .map((article) => {
      const { frontmatter, slug } = article
      const url = `${baseUrl}/artigos/${slug}`
      const pubDate = new Date(frontmatter.publishedAt).toUTCString()

      return `
    <item>
      <title>${escapeXml(frontmatter.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(frontmatter.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(frontmatter.category)}</category>
      <author>${escapeXml(siteConfig.email)} (${escapeXml(frontmatter.author)})</author>
      ${frontmatter.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
    </item>`
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>pt-BR</language>
    <managingEditor>${escapeXml(siteConfig.email)}</managingEditor>
    <webMaster>${escapeXml(siteConfig.email)}</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/icon.png</url>
      <title>${escapeXml(siteConfig.name)}</title>
      <link>${baseUrl}</link>
    </image>${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
