import { PAPERS } from '../lib/writing'
import { Link } from '../lib/router'
import { useReveal } from '../hooks/useReveal'

export function Research() {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="research reveal" ref={ref}>
      <h2>Research</h2>
      <div className="cards">
        {PAPERS.map((paper) => (
          <Link key={paper.slug} className="card" to={`/research/${paper.slug}`}>
            <h3>
              {paper.title}
              <span className="card-arrow" aria-hidden="true">&#8594;</span>
            </h3>
            <p>{paper.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
