'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu } from 'lucide-react'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { navLinks } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-30 w-full',
          'transition-all duration-200',
          isScrolled ? 'shadow-md' : 'border-b'
        )}
        style={{
          backgroundColor: 'var(--clr-surface)',
          borderColor: 'var(--clr-border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo />

            {/* Navegação desktop */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegação principal">
              {navLinks.slice(0, 7).map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150',
                      isActive
                        ? 'text-primary-clr bg-slate-100'
                        : 'hover:bg-slate-50'
                    )}
                    style={{
                      color: isActive ? 'var(--clr-primary)' : 'var(--clr-text-2)',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Ações */}
            <div className="flex items-center gap-2">
              <Link
                href="/buscar"
                className={cn(
                  'p-2 rounded-lg transition-colors duration-150',
                  'hover:bg-slate-100'
                )}
                style={{ color: 'var(--clr-text-2)' }}
                aria-label="Buscar"
              >
                <Search size={20} />
              </Link>

              <ThemeToggle />

              {/* Botão hamburguer — mobile */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors duration-150',
                  'hover:bg-slate-100'
                )}
                style={{ color: 'var(--clr-text-2)' }}
                aria-label="Abrir menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
