import useReveal from '../../hooks/useReveal'

/**
 * Small "(Label)" above a big two-tone heading, e.g.
 * <SectionHeading label="Skills & Tools" first="Technology" second="Stack" />
 */
export default function SectionHeading({ label, first, second }) {
  const ref = useReveal()

  return (
    <div ref={ref} className="reveal mb-12 sm:mb-16">
      <p className="font-mono text-sm text-amber-400 mb-4">({label})</p>
      <h2 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-5xl sm:text-6xl md:text-7xl">
        <span className="text-white">{first}</span>{' '}
        <span className="text-outline-amber">{second}</span>
      </h2>
    </div>
  )
}
