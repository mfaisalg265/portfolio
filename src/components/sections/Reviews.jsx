import { useState } from 'react'
import { Play, Star } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import useReveal from '../../hooks/useReveal'
import { reviews } from '../../data/reviews'

function Stars({ count = 5, muted = false }) {
  return (
    <div className="flex gap-1" aria-label={muted ? undefined : `${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          fill="currentColor"
          className={muted ? 'text-neutral-800' : i < count ? 'text-amber-400' : 'text-neutral-700'}
        />
      ))}
    </div>
  )
}

function ComingSoon() {
  return (
    <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="relative flex aspect-video flex-col items-center justify-center gap-5 rounded-3xl border border-dashed border-neutral-800 bg-neutral-900/30 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-800 text-neutral-700">
          <Play size={22} fill="currentColor" />
        </span>
        <Stars muted />
        <div>
          <p className="font-display text-2xl font-semibold text-neutral-500">Coming soon</p>
          <p className="mx-auto mt-2 max-w-xs text-sm text-neutral-600">
            Client reviews will appear here once my first freelance projects wrap up.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="aspect-video rounded-2xl border border-dashed border-neutral-800 bg-neutral-900/20"
          />
        ))}
      </div>
    </div>
  )
}

function ReviewSlider() {
  const [active, setActive] = useState(0)
  const review = reviews[active]

  return (
    <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="relative flex aspect-video flex-col justify-end overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">
        {review.thumbnail && (
          <img src={review.thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />

        {review.videoUrl && (
          <a
            href={review.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${review.name}'s review`}
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 text-neutral-950 transition-transform hover:scale-110"
          >
            <Play size={22} fill="currentColor" />
          </a>
        )}

        <div className="relative p-6 sm:p-8">
          <Stars count={review.rating} />
          {review.quote && <p className="mt-4 max-w-xl text-lg text-neutral-200">&ldquo;{review.quote}&rdquo;</p>}
          <p className="mt-4 font-display text-xl font-semibold text-white">
            {review.flag} {review.name}
          </p>
          <p className="text-sm text-neutral-400">{review.company}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
        {reviews.map((r, i) => (
          <button
            key={r.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show review from ${r.name}`}
            aria-pressed={i === active}
            className={`relative aspect-video overflow-hidden rounded-2xl border bg-neutral-900 text-left transition-colors ${
              i === active ? 'border-amber-400' : 'border-neutral-800 hover:border-neutral-600'
            }`}
          >
            {r.thumbnail && <img src={r.thumbnail} alt="" className="h-full w-full object-cover" />}
            <span className="absolute bottom-2 left-3 font-display text-sm font-semibold text-white">
              {r.name.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Reviews() {
  const bodyRef = useReveal()

  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 sm:pb-32">
      <SectionHeading label="Testimonials" first="Client" second="Reviews" />
      <div ref={bodyRef} className="reveal">
        {reviews.length === 0 ? <ComingSoon /> : <ReviewSlider />}
      </div>
    </section>
  )
}
