import { Suspense } from 'react'
import { type Paper } from '../lib/writing'
import { Link } from '../lib/router'
import { ArticleToc } from './ArticleToc'
import { PdfViewer } from './PdfViewer'

export function PaperPage({ paper }: { paper: Paper }) {
  const Article = paper.article
  return (
    <section className="paper-page">
      <Link to="/research" className="back-link">&larr; Research</Link>
      <h1 className="page-title">{paper.title}</h1>
      {paper.subtitle && <p className="page-subtitle">{paper.subtitle}</p>}
      <p className="thesis-desc">
        {paper.year}
        {paper.pdf && (
          <>
            {' '}&middot;{' '}
            <a href={paper.pdf} target="_blank" rel="noreferrer">
              Open the PDF <span aria-hidden="true">&#8599;</span>
            </a>
          </>
        )}
      </p>

      {paper.abstract && (
        <section className="abstract">
          <h2>Abstract</h2>
          <p>{paper.abstract}</p>
        </section>
      )}

      {Article ? (
        <Suspense fallback={<p className="article-loading">Loading article…</p>}>
          <ArticleToc slug={paper.slug} />
          <Article />
        </Suspense>
      ) : paper.pdf ? (
        <PdfViewer src={paper.pdf} label={`${paper.title} — PDF`} />
      ) : null}
    </section>
  )
}
