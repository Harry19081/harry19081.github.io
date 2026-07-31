import { useReveal } from '../hooks/useReveal'

export function Hero() {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="hero reveal" ref={ref}>
      <h1>
        Hi, I&rsquo;m <span className="accent">Harry</span>.
      </h1>
      <p className="lede">
        Orchestrator of <a href="https://github.com/org2AI">ORG2 AI</a> &mdash; building agent
        development environments your agents love to use. Previously at Swarthmore and Harvard.
      </p>
    </section>
  )
}
