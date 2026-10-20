import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import useReveal from '../../hooks/useReveal'
import { contact, whatsappLink } from '../../data/contact'

// Rows with an empty `href` are hidden, so unfilled links never show up.
const rows = [
  { label: 'Direct Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'WhatsApp', value: contact.phoneDisplay, href: contact.whatsappNumber ? whatsappLink : '' },
  { label: 'Telegram', value: 'Message on Telegram', href: contact.telegram },
  { label: 'Fiverr', value: 'Hire on Fiverr', href: contact.fiverr },
  { label: 'GitHub', value: 'mfaisalg265', href: contact.github },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: contact.linkedin },
].filter((row) => row.href)

const inputClass =
  'w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3.5 text-white placeholder-neutral-600 transition-colors focus:border-amber-400 focus:outline-none'

export default function Contact() {
  const listRef = useReveal()
  const formRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  // No server needed: this opens the visitor's email app with the message filled in.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 sm:pb-32">
      <SectionHeading label="Get In Touch" first="Let's Work" second="Together" />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <ul ref={listRef} className="reveal-stagger border-t border-neutral-800">
          {rows.map((row, i) => (
            <li key={row.label} style={{ '--stagger-i': i }}>
              <a
                href={row.href}
                target={row.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-neutral-800 py-5"
              >
                <span>
                  <span className="block font-mono text-xs text-neutral-500">{row.label}</span>
                  <span className="mt-1 block break-all text-lg text-white transition-colors group-hover:text-amber-400">
                    {row.value}
                  </span>
                </span>
                <ArrowUpRight
                  size={22}
                  className="shrink-0 text-neutral-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400"
                />
              </a>
            </li>
          ))}
        </ul>

        <form ref={formRef} onSubmit={handleSubmit} className="reveal space-y-4">
          <label className="sr-only" htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" required placeholder="Your Name" value={form.name} onChange={handleChange} className={inputClass} />

          <label className="sr-only" htmlFor="email">Your email</label>
          <input id="email" name="email" type="email" required placeholder="Your Email" value={form.email} onChange={handleChange} className={inputClass} />

          <label className="sr-only" htmlFor="message">Your message</label>
          <textarea id="message" name="message" rows="5" required placeholder="Your Message" value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />

          <button
            type="submit"
            className="w-full rounded-full bg-amber-400 px-6 py-4 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-300"
          >
            Send Message
          </button>
          {sent && (
            <p role="status" className="text-sm text-neutral-500">
              Your email app should open with the message ready to send.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
