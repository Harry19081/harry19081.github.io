import { useReveal } from '../hooks/useReveal'

export function About() {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="about reveal" ref={ref}>
      <h2>About</h2>
      <p>
        My work sits where software infrastructure meets institutional memory. ORG2 is a system
        of record for how agents build software; before that, my research at Harvard traced
        databases and statecraft in late twentieth-century China. Different century, same
        question: how organizations remember.
      </p>
    </section>
  )
}
