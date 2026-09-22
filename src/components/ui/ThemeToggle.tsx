'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    // Lê o tema atual do atributo no <html>
    const current =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'dark'
        : 'light'
    setTheme(current)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // localStorage pode não estar disponível
    }
  }

  if (theme === null) {
    // Evita flash enquanto lê o tema — renderiza um placeholder de mesma dimensão
    return (
      <div
        className="w-9 h-9 rounded-lg"
        aria-hidden="true"
      />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'p-2 rounded-lg transition-colors duration-150',
        'hover:bg-slate-100'
      )}
      style={{ color: 'var(--clr-text-2)' }}
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
