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

  // Redireciona URLs sem trailing slash
  trailingSlash: false,

  // Configuração para pacotes ESM externos
  serverExternalPackages: ['gray-matter'],
}

export default nextConfig
