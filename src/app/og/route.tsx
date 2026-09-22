import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Foco em IA'
  const category = searchParams.get('category') ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '48px',
          background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Padrão decorativo */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '30%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: 'absolute',
            top: '48px',
            left: '48px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              fontWeight: 800,
            }}
          >
            FI
          </div>
          <span
            style={{
              color: 'white',
              fontSize: '20px',
              fontWeight: 700,
              letterSpacing: '-0.5px',
            }}
          >
            Foco em IA
          </span>
        </div>

        {/* Categoria */}
        {category && (
          <div
            style={{
              display: 'flex',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                background: 'rgba(79,70,229,0.3)',
                border: '1px solid rgba(79,70,229,0.5)',
                color: '#a5b4fc',
                fontSize: '14px',
                fontWeight: 600,
                padding: '4px 14px',
                borderRadius: '100px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              {category}
            </span>
          </div>
        )}

        {/* Título */}
        <h1
          style={{
            color: 'white',
            fontSize: title.length > 60 ? '36px' : title.length > 40 ? '44px' : '52px',
            fontWeight: 800,
            lineHeight: 1.15,
            margin: 0,
            maxWidth: '900px',
            letterSpacing: '-1px',
          }}
        >
          {title}
        </h1>

        {/* Rodapé */}
        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '16px',
            marginTop: '24px',
            marginBottom: 0,
          }}
        >
          focoemia.com.br · Inteligência artificial em português
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
