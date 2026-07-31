import { useReveal } from '../hooks/useReveal'

const PROFILE_URL = 'https://github.com/Harry19081'

export function GitHubActivity() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="github-activity reveal" ref={ref}>
      <h2>GitHub activity</h2>
      <a
        className="github-activity-card"
        href={PROFILE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="View Harry He’s contribution activity on GitHub"
      >
        <span className="github-activity-scroll">
          <img
            className="github-activity-graph github-activity-graph--light"
            src="/github-contributions-light.svg"
            alt="Harry He’s public GitHub contributions over the past year"
          />
          <img
            className="github-activity-graph github-activity-graph--dark"
            src="/github-contributions-dark.svg"
            alt="Harry He’s public GitHub contributions over the past year"
          />
        </span>
        <span className="github-activity-footer">
          <span>Public contributions, updated daily</span>
          <span className="github-activity-link">
            View @Harry19081 <span aria-hidden="true">&#8599;</span>
          </span>
        </span>
      </a>
    </section>
  )
}
