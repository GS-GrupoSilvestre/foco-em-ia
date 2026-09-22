'use client'

import { useCallback, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchInputProps {
  className?: string
  placeholder?: string
  autoFocus?: boolean
}

export function SearchInput({
  className,
  placeholder = 'Buscar artigos sobre IA…',
  autoFocus = false,
}: SearchInputProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)
  const currentQuery = searchParams.get('q') ?? ''

  const handleSearch = useCallback(
    (query: string) => {
      const params = new URLSearchParams()
      if (query) {
        params.set('q', query)
      }
      const queryString = params.toString()
      router.push(queryString ? `/buscar?${queryString}` : '/buscar')
    },
    [router]
  )

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSearch(e.currentTarget.value)
    }
    if (e.key === 'Escape') {
      if (inputRef.current) inputRef.current.blur()
    }
  }

  function handleClear() {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }
    handleSearch('')
  }

  return (
    <div className={cn('relative', className)}>
      <label htmlFor="search-input" className="sr-only">
        Buscar artigos
      </label>
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: 'var(--clr-text-3)' }}
        aria-hidden="true"
      />
      <input
        ref={inputRef}
        id="search-input"
        type="search"
        role="searchbox"
        aria-label="Buscar artigos sobre inteligência artificial"
        defaultValue={currentQuery}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        autoFocus={autoFocus}
        className={cn(
          'w-full pl-11 pr-10 py-3 rounded-xl border text-sm',
          'transition-all duration-150',
          'focus:outline-none focus:ring-2',
          'placeholder:text-sm'
        )}
        style={{
          backgroundColor: 'var(--clr-surface)',
          borderColor: 'var(--clr-border)',
          color: 'var(--clr-text)',
          '--tw-ring-color': 'var(--clr-primary)',
        } as React.CSSProperties}
      />
      {currentQuery && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded"
          style={{ color: 'var(--clr-text-3)' }}
          aria-label="Limpar busca"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
