'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav aria-label="Sumário do artigo">
      <div
        className="rounded-xl border p-5"
        style={{
          backgroundColor: 'var(--clr-surface)',
          borderColor: 'var(--clr-border)',
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: 'var(--clr-text-3)' }}
        >
          Neste artigo
        </p>
        <ol className="space-y-1">
          {headings.map(({ id, text, level }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  'block text-sm py-1 transition-colors duration-150',
                  'hover:underline',
                  level === 3 ? 'pl-3' : '',
                  activeId === id ? 'font-semibold' : ''
                )}
                style={{
                  color: activeId === id ? 'var(--clr-primary)' : 'var(--clr-text-2)',
                }}
              >
                {text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
