import { useEffect, useState } from 'react'
import { FEATURED, hydrateProjects, type Project } from '../lib/github'
import { useReveal } from '../hooks/useReveal'

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Rust: '#dea584',
  Python: '#3572a5',
  Go: '#00add8',
}

function formatStars(count: number): string {
  return count >= 1000 ? `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(count)
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="card" href={project.url} target="_blank" rel="noreferrer">
      <h3>
        {project.title}
        <span className="card-arrow" aria-hidden="true">&#8599;</span>
      </h3>
      <p>{project.description}</p>
      <div className="meta">
        {project.languages.map((language) => (
          <span className="chip" key={language}>
            <span
              className="lang-dot"
              style={{ background: LANGUAGE_COLORS[language] ?? 'currentColor' }}
            />
            {language}
          </span>
        ))}
        {project.stars != null && project.stars > 0 && (
          <span className="chip">&#9733; {formatStars(project.stars)}</span>
        )}
      </div>
    </a>
  )
}

export function Work() {
  const ref = useReveal<HTMLElement>()
  const [projects, setProjects] = useState<Project[]>(FEATURED)

  useEffect(() => {
    let cancelled = false
    hydrateProjects().then((hydrated) => {
      if (!cancelled) setProjects(hydrated)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="work reveal" ref={ref}>
      <h2>Software Building</h2>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard key={project.url} project={project} />
        ))}
      </div>
    </section>
  )
}
