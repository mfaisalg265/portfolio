import { useEffect, useState } from 'react'

/** Cycles through `words`, fading each one in. */
export default function RotatingWords({ words, interval = 2200 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span key={words[index]} className="inline-block animate-word-in">
      {words[index]}
    </span>
  )
}
