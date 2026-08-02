import { Suspense } from 'react'
import { type Paper } from '../lib/writing'
import { Link } from '../lib/router'
import { ArticleToc } from './ArticleToc'

export function PaperPage({ paper }: { paper: Paper }) {
  const Article = paper.article
  return (
    <section className="paper-page">
      <Link to="/research" className="back-link">&larr; Research</Link>
      <h1 className="page-title">{paper.title}</h1>
      {paper.subtitle && <p className="page-subtitle">{paper.subtitle}</p>}
      <p className="thesis-desc">{paper.year}</p>

      {paper.abstract && (
        <section className="abstract">
          <h2>Abstract</h2>
          <p>{paper.abstract}</p>
        </section>
      )}

      {paper.note && (
        <aside className="paper-note">
          <p>{paper.note}</p>
        </aside>
      )}

      {Article && (
        <Suspense fallback={<p className="article-loading">Loading article…</p>}>
          <ArticleToc slug={paper.slug} />
          <Article />
        </Suspense>
      )}
    </section>
  )
}
