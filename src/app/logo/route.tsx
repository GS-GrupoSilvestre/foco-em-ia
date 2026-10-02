import { ImageResponse } from 'next/og'

// Logo quadrado (512x512) usado como "publisher.logo" nos dados estruturados.
// Gerado em build/primeiro acesso e cacheado, como o /og e o /icon do site.
export const dynamic = 'force-static'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          fontSize: 220,
          fontWeight: 800,
          color: 'white',
          letterSpacing: '-8px',
        }}
      >
        FI
      </div>
    ),
    { width: 512, height: 512 }
  )
}
