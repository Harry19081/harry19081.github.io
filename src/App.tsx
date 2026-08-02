import { lazy, Suspense, useEffect } from 'react'
import { navigate, usePath } from './lib/router'
import { resolveLegacyPath } from './lib/redirects'
import { PAPERS } from './lib/writing'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { HobbiesTeaser } from './components/HobbiesTeaser'
import { Work } from './components/Work'
import { GitHubActivity } from './components/GitHubActivity'
import { Research } from './components/Research'
import { WritingIndex } from './components/WritingIndex'
import { PaperPage } from './components/PaperPage'
import { Footer } from './components/Footer'

const HobbiesPage = lazy(() =>
  import('./components/HobbiesPage').then((module) => ({ default: module.HobbiesPage })),
)

const ResonancePage = lazy(() =>
  import('./components/ResonancePage').then((module) => ({ default: module.ResonancePage })),
)

export default function App() {
  const path = usePath()
  const paper = PAPERS.find((p) => `/research/${p.slug}` === path)
  const legacy = resolveLegacyPath(path)

  // Old /writing URLs shared before the rename still resolve.
  useEffect(() => {
    if (legacy) navigate(legacy)
  }, [legacy])

  useEffect(() => {
    document.title = paper
      ? `${paper.title} · Harry He`
      : path === '/research'
        ? 'Research · Harry He'
        : path === '/hobbies'
          ? 'Hobbies · Harry He'
        : path === '/resonance'
          ? 'Resonance Music Festival · Harry He'
        : 'Harry He'
  }, [path, paper])

  return (
    <>
      <Header />
      <main>
        {paper ? (
          <PaperPage paper={paper} />
        ) : path === '/research' ? (
          <WritingIndex />
        ) : path === '/hobbies' ? (
          <Suspense fallback={<div className="page-loading" aria-hidden="true" />}>
            <HobbiesPage />
          </Suspense>
        ) : path === '/resonance' ? (
          <Suspense fallback={<div className="page-loading" aria-hidden="true" />}>
            <ResonancePage />
          </Suspense>
        ) : (
          <>
            <Hero />
            <About />
            <Work />
            <GitHubActivity />
            <Research />
            <HobbiesTeaser />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
