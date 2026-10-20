import SectionHeading from '../ui/SectionHeading'
import useReveal from '../../hooks/useReveal'
import { aboutLines } from '../../data/about'
import { contact } from '../../data/contact'

// Turns "**bold**" markers into highlighted text.
function renderLine(line) {
  return line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? (
      <strong key={i} className="font-semibold text-white">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export default function About() {
  const textRef = useReveal()
  const imageRef = useReveal()

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
      <SectionHeading label="Who I Am" first="About" second="Me" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div ref={textRef} className="reveal">
          <div className="space-y-4 text-lg leading-relaxed text-neutral-400 sm:text-xl">
            {aboutLines.map((line) => (
              <p key={line}>{renderLine(line)}</p>
            ))}
          </div>

          <p className="mt-10 -rotate-3 font-script text-5xl text-amber-400 sm:text-6xl">{contact.name}</p>
        </div>

        <div ref={imageRef} className="reveal mx-auto w-full max-w-md lg:max-w-none lg:translate-y-10">
          <div className="group overflow-hidden rounded-3xl border border-neutral-800">
            <img
              src="/images/about.jpg"
              alt={`${contact.name}, portrait with an orange backlight`}
              width="1100"
              height="1320"
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
