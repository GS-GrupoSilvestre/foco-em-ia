'use client'

import { useEffect, useRef } from 'react'

interface AdSlotProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  className?: string
  label?: string
}

export function AdSlot({
  slot,
  format = 'auto',
  className = '',
  label = 'Publicidade',
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null)
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

  useEffect(() => {
    if (!clientId || !slot) return

    try {
      // @ts-expect-error — adsbygoogle é injetado pelo script externo
      const adsbygoogle = window.adsbygoogle
      if (adsbygoogle) {
        adsbygoogle.push({})
      }
    } catch {
      // silencia erros se o AdSense ainda não carregou
    }
  }, [clientId, slot])

  // Não renderiza nada se o AdSense não estiver configurado
  if (!clientId || !slot) return null

  return (
    <div className={`ad-container ${className}`}>
      <p
        className="text-xs text-center mb-1"
        style={{ color: 'var(--clr-text-3)' }}
      >
        {label}
      </p>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
