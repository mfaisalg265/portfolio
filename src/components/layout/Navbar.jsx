import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#tech', label: 'Tech' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-white">
          Faisal<span className="text-amber-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="underline-hover text-neutral-300 transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-300"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-200"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-neutral-800 bg-neutral-950 px-6 py-4 space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block rounded-lg px-3 py-3 text-neutral-200 hover:bg-neutral-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
