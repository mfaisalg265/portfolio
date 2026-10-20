import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import useReveal from '../../hooks/useReveal'
import { projects } from '../../data/projects'

export default function Projects() {
  const listRef = useReveal()

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 sm:pb-32">
      <SectionHeading label="Work & Projects" first="Selected" second="Projects" />

      <div ref={listRef} className="reveal-stagger border-t border-neutral-800">
        {projects.map((project, i) => {
          const hasLink = Boolean(project.link)
          const Row = hasLink ? 'a' : 'div'
          const linkProps = hasLink
            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <Row
              key={project.title}
              {...linkProps}
              style={{ '--stagger-i': i }}
              className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-neutral-800 px-2 py-8 transition-colors duration-300 hover:bg-neutral-900/50 sm:gap-10 sm:px-6 sm:py-10"
            >
              <div className="pt-1 font-mono text-sm leading-6">
                <span className="text-amber-400">{String(i + 1).padStart(2, '0')}</span>
                <span className="block text-neutral-500">{project.year}</span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-400 sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-2xl text-neutral-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-700 px-3 py-1 font-mono text-xs text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-1">
                {hasLink ? (
                  <ArrowUpRight
                    size={28}
                    className="text-neutral-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-400"
                  />
                ) : (
                  <span className="font-mono text-xs text-neutral-600">soon</span>
                )}
              </div>
            </Row>
          )
        })}
      </div>
    </section>
  )
}
