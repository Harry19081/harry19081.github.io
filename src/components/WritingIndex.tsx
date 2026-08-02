import { PAPERS } from '../lib/writing'
import { Link } from '../lib/router'
import { useReveal } from '../hooks/useReveal'

export function WritingIndex() {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="writing reveal" ref={ref}>
      <h1 className="page-title">Research</h1>
      <div className="paper-list">
        {PAPERS.map((paper) => (
          <Link key={paper.slug} to={`/research/${paper.slug}`} className="paper-row">
            <span className="paper-row-body">
              <span className="paper-row-title">{paper.title}</span>
              <span className="paper-row-desc">{paper.description}</span>
            </span>
            <span className="card-arrow" aria-hidden="true">&#8594;</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
