import Link from 'next/link'
import { Logo } from './Logo'
import { siteConfig, footerLinks } from '@/lib/site-config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="mt-20 border-t"
      style={{
        backgroundColor: 'var(--clr-surface)',
        borderColor: 'var(--clr-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Coluna da marca */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="footer" />
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: 'var(--clr-text-2)' }}
            >
              Guias, ferramentas e novidades sobre inteligência artificial de
              forma simples e prática para o dia a dia e os negócios.
            </p>
            <p className="text-xs" style={{ color: 'var(--clr-text-3)' }}>
              Conteúdo em português do Brasil.
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: 'var(--clr-text-3)' }}
            >
              Categorias
            </h3>
            <ul className="space-y-2">
              {footerLinks.categorias.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:underline"
                    style={{ color: 'var(--clr-text-2)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links institucionais */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: 'var(--clr-text-3)' }}
            >
              Institucional
            </h3>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:underline"
                    style={{ color: 'var(--clr-text-2)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'var(--clr-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--clr-text-3)' }}>
            &copy; {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: 'var(--clr-text-3)' }}>
            Conteúdo sobre inteligência artificial de forma simples e prática.
          </p>
        </div>
      </div>
    </footer>
  )
}
