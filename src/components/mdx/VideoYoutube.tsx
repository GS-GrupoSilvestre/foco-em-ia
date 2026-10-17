'use client'

import { useState } from 'react'

interface VideoYoutubeProps {
  /** ID do vídeo (o trecho depois de v= no link do YouTube). */
  id: string
  titulo: string
}

/** Só carrega o player do YouTube (modo sem cookies) quando a pessoa clica em reproduzir. */
export function VideoYoutube({ id, titulo }: VideoYoutubeProps) {
  const [ativo, setAtivo] = useState(false)

  return (
    <div
      className="my-8 relative w-full overflow-hidden rounded-xl border bg-black"
      style={{ aspectRatio: '16 / 9', borderColor: 'var(--clr-border)' }}
    >
      {ativo ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setAtivo(true)}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 text-white"
          aria-label={`Reproduzir vídeo: ${titulo}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            loading="lazy"
          />
          <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-black text-2xl pl-1">
            ▶
          </span>
          <span className="relative px-4 text-sm font-medium text-center">{titulo}</span>
        </button>
      )}
    </div>
  )
}
