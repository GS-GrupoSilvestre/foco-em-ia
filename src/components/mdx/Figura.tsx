interface FiguraProps {
  /** Caminho em /public (ex.: /imagens/meu-artigo/foto.webp). */
  src: string
  /** Descrição da imagem para leitores de tela e buscadores. */
  alt: string
  /** Legenda visível abaixo da imagem. */
  legenda?: string
  /** Crédito/licença (ex.: "Foto: Fulano / Wikimedia Commons, CC BY 4.0"). */
  credito?: string
  width: number
  height: number
}

export function Figura({ src, alt, legenda, credito, width, height }: FiguraProps) {
  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-xl border"
        style={{ borderColor: 'var(--clr-border)' }}
      />
      {(legenda || credito) && (
        <figcaption className="mt-2 text-sm" style={{ color: 'var(--clr-text-3)' }}>
          {legenda}
          {legenda && credito ? ' ' : ''}
          {credito && <span className="text-xs">({credito})</span>}
        </figcaption>
      )}
    </figure>
  )
}
