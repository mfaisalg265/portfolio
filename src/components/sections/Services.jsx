import { ArrowUpRight, Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import useReveal from '../../hooks/useReveal'
import { serviceList } from '../../data/serviceList'

export default function Services() {
  const listRef = useReveal()

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 sm:pb-32">
      <SectionHeading label="What I Do" first="My" second="Services" />

      <ul ref={listRef} className="reveal-stagger border-t border-neutral-800">
        {serviceList.map((service, i) => (
          <li
            key={service.title}
            style={{ '--stagger-i': i }}
            className="group grid gap-6 border-b border-neutral-800 px-2 py-8 transition-colors duration-300 hover:bg-neutral-900/50 sm:px-6 sm:py-10 lg:grid-cols-[1fr_1.3fr_auto] lg:items-start lg:gap-12"
          >
            <div>
              <span className="font-mono text-sm text-amber-400">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-400 sm:text-3xl">
                {service.title}
              </h3>
            </div>

            <div>
              <p className="max-w-xl text-neutral-400">{service.description}</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {service.includes.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-neutral-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-amber-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-700 px-5 py-2.5 text-sm text-neutral-200 transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-neutral-950"
            >
              Get a quote <ArrowUpRight size={16} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
