/**
 * Endless horizontal text strip. The list is rendered twice and the track
 * slides by exactly half its width, so the loop never visibly jumps.
 */
export default function Marquee({ items, separator = '•' }) {
  const renderHalf = (hidden) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex items-center whitespace-nowrap font-display font-bold text-4xl sm:text-6xl md:text-7xl"
        >
          <span className={i % 2 === 0 ? 'text-white' : 'text-outline'}>{item}</span>
          <span className="mx-6 sm:mx-10 text-amber-400">{separator}</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee-wrapper overflow-hidden border-y border-neutral-800 py-8 sm:py-10">
      <div className="marquee-track">
        {renderHalf(false)}
        {renderHalf(true)}
      </div>
    </div>
  )
}
