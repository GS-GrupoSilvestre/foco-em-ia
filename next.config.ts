import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Habilita compressão de imagens e outros assets
  compress: true,

  // Configuração de headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },

  // Redirects permanentes (301/308) de artigos consolidados.
  // Cada URL antiga aponta DIRETO para a URL final — sem cadeias.
  // Histórico e motivos: docs/content-audit.md
  async redirects() {
    return [
      { source: '/artigos/gemini-vs-chatgpt-comparacao', destination: '/artigos/chatgpt-vs-gemini', permanent: true },
      { source: '/artigos/claude-vs-chatgpt-vs-gemini', destination: '/artigos/chatgpt-vs-gemini-vs-claude', permanent: true },
      { source: '/artigos/melhores-ferramentas-ia-2025', destination: '/artigos/melhores-ferramentas-ia-2026', permanent: true },
      { source: '/artigos/gemini-guia-completo-iniciantes', destination: '/artigos/como-usar-gemini-google', permanent: true },
      { source: '/artigos/claude-ai-guia-completo-2026', destination: '/artigos/o-que-e-claude-anthropic', permanent: true },
      { source: '/artigos/prompt-engineering-guia-iniciantes', destination: '/artigos/como-melhorar-seus-prompts', permanent: true },
    ]
  },

  // Redireciona URLs sem trailing slash
  trailingSlash: false,

  // Configuração para pacotes ESM externos
  serverExternalPackages: ['gray-matter'],
}

export default nextConfig
