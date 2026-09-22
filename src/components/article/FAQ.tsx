'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQ as FAQType } from '@/types/article'
import { cn } from '@/lib/utils'

interface FAQProps {
  items: FAQType[]
}

function FAQItem({ question, answer }: FAQType) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: 'var(--clr-border)' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full text-left py-4 flex items-center justify-between gap-4',
          'font-medium text-sm transition-colors duration-150'
        )}
        style={{ color: 'var(--clr-text)' }}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: 'var(--clr-text-3)',
          }}
        />
      </button>

      {isOpen && (
        <div
          className="pb-4 text-sm leading-relaxed"
          style={{ color: 'var(--clr-text-2)' }}
        >
          {answer}
        </div>
      )}
    </div>
  )
}

export function FAQ({ items }: FAQProps) {
  if (items.length === 0) return null

  // Dados estruturados FAQPage para SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <section className="mt-10" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div
        className="rounded-xl border overflow-hidden"
        style={{
          backgroundColor: 'var(--clr-surface)',
          borderColor: 'var(--clr-border)',
        }}
      >
        <div className="p-5 border-b" style={{ borderColor: 'var(--clr-border)' }}>
          <h2
            id="faq-heading"
            className="text-lg font-bold"
            style={{ color: 'var(--clr-text)' }}
          >
            Perguntas frequentes
          </h2>
        </div>

        <div className="px-5">
          {items.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
