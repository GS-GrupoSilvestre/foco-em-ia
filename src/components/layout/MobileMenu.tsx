'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { navLinks } from '@/lib/site-config'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  // Fecha ao pressionar Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Foca o menu quando abre
  useEffect(() => {
    if (isOpen) {
      menuRef.current?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Painel lateral */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        tabIndex={-1}
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-72 max-w-[calc(100vw-3rem)]',
          'shadow-2xl overflow-y-auto'
        )}
        style={{ backgroundColor: 'var(--clr-surface)' }}
      >
        {/* Cabeçalho do menu */}
        <div
          className="flex items-center justify-between p-4 border-b"
          style={{ borderColor: 'var(--clr-border)' }}
        >
          <span
            className="font-semibold text-sm"
            style={{ color: 'var(--clr-text-2)' }}
          >
            Navegação
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            style={{ color: 'var(--clr-text-2)' }}
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="p-4">
          <ul className="space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'block px-4 py-3 rounded-lg font-medium text-sm',
                    'transition-colors duration-150',
                    'hover:bg-slate-100'
                  )}
                  style={{ color: 'var(--clr-text)' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Rodapé do menu */}
        <div
          className="p-4 border-t mt-auto"
          style={{ borderColor: 'var(--clr-border)' }}
        >
          <Link
            href="/buscar"
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm w-full"
            style={{
              background: 'var(--clr-primary-light)',
              color: 'var(--clr-primary)',
            }}
          >
            Buscar artigos
          </Link>
        </div>
      </div>
    </>
  )
}
