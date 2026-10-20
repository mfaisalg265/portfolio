import { contact } from '../../data/contact'

const year = new Date().getFullYear()

export default function Footer() {
  const links = [
    { label: 'Email', href: `mailto:${contact.email}` },
    { label: 'GitHub', href: contact.github },
    { label: 'Fiverr', href: contact.fiverr },
    { label: 'Telegram', href: contact.telegram },
    { label: 'LinkedIn', href: contact.linkedin },
  ].filter((l) => l.href)

  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-neutral-500">
          © {year} {contact.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-6 text-sm text-neutral-400">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="transition-colors hover:text-amber-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
