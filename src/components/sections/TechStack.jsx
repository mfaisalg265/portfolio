import SectionHeading from '../ui/SectionHeading'
import useReveal from '../../hooks/useReveal'
import { techStack } from '../../data/techStack'

export default function TechStack() {
  const gridRef = useReveal()

  return (
    <section id="tech" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
      <SectionHeading label="Skills & Tools" first="Technology" second="Stack" />

      <div
        ref={gridRef}
        className="reveal-stagger grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        {techStack.map((tech, i) => (
          <div
            key={tech.name}
            style={{ '--stagger-i': i }}
            className="group flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:bg-neutral-900"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 p-2.5">
              <img src={tech.logo} alt="" width="28" height="28" loading="lazy" className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-medium text-white">{tech.name}</span>
              <span className="block font-mono text-xs text-neutral-500">{tech.category}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
