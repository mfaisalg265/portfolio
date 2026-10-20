import { useEffect, useState } from 'react'
import { ArrowDownRight } from 'lucide-react'
import RotatingWords from '../ui/RotatingWords'
import { heroWords } from '../../data/heroWords'
import { contact } from '../../data/contact'

// Fades an element in on page load, optionally delayed.
const enter = (loaded, delay = '') =>
  `transition-all duration-700 ease-out motion-reduce:transition-none ${delay} ${
    loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  // Dark parts of the photo blend into the page; the bottom and both sides fade out.
  const fade =
    'linear-gradient(to bottom, #000 70%, transparent 100%), linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)'
  const portraitStyle = {
    mixBlendMode: 'lighten',
    WebkitMaskImage: fade,
    maskImage: fade,
    WebkitMaskComposite: 'source-in',
    maskComposite: 'intersect',
  }

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[32rem] w-[32rem] rounded-full bg-amber-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="pb-6 lg:pb-20">
          <p className={`font-mono text-sm text-amber-400 ${enter(loaded)}`}>Hi there! this is</p>

          <h1
            className={`mt-3 font-display font-bold tracking-tight text-white leading-[0.95] text-5xl sm:text-7xl xl:text-8xl ${enter(
              loaded,
              'delay-100',
            )}`}
          >
            {contact.name}
          </h1>

          <p
            className={`mt-8 font-display font-bold uppercase tracking-tight leading-[0.95] text-4xl sm:text-6xl xl:text-7xl ${enter(
              loaded,
              'delay-200',
            )}`}
          >
            <span className="block text-outline">Full Stack</span>
            <span className="block text-white">Web Developer</span>
            <span className="block min-h-[1em] text-amber-400">
              <RotatingWords words={heroWords} />
            </span>
          </p>

          <p className={`mt-8 max-w-xl text-lg leading-relaxed text-neutral-400 ${enter(loaded, 'delay-300')}`}>
            I build fast, full-stack web applications with React, Node.js, Express and MongoDB, from
            the database to a finished UI.
          </p>

          <div className={`mt-10 flex flex-wrap items-center gap-5 ${enter(loaded, 'delay-500')}`}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-300"
            >
              View projects <ArrowDownRight size={16} />
            </a>
            <a href="#contact" className="underline-hover text-sm text-neutral-200">
              Get in touch →
            </a>
          </div>
        </div>

        <div className={`relative mx-auto w-full max-w-md lg:max-w-none ${enter(loaded, 'delay-300')}`}>
          <img
            src="/images/hero.jpg"
            alt="Muhammad Faisal sitting in a leather armchair"
            width="1300"
            height="975"
            fetchPriority="high"
            style={portraitStyle}
            className="relative w-full select-none"
          />
          <div className="absolute bottom-10 left-2 sm:left-6 flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <div>
              <p className="text-sm font-medium text-white">Available for work</p>
              <p className="text-xs text-neutral-500">Freelance &amp; full-time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
