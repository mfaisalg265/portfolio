import { useEffect, useRef } from 'react'

/**
 * Adds the `is-visible` class to the referenced element once it scrolls into
 * view, which triggers the .reveal / .reveal-stagger transitions in index.css.
 * Runs once per element.
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
