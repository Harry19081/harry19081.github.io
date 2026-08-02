import { Link } from '../lib/router'
import { useReveal } from '../hooks/useReveal'

export function HobbiesTeaser() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="hobbies-teaser reveal" ref={ref}>
      <h2>Beyond software</h2>
      <div className="hobby-cards">
        <Link className="hobby-card" to="/resonance">
          <div>
            <p className="section-kicker">Music</p>
            <h3>Resonance Music Festival</h3>
            <p>
              Cofounded in 2016 — the first and largest student-run music festival in
              South China, still run by students eleven years on.
            </p>
          </div>
          <span className="hobby-card-link">
            See the archive <span aria-hidden="true">&rarr;</span>
          </span>
        </Link>

        <Link className="hobby-card" to="/hobbies">
          <div>
            <p className="section-kicker">Travel</p>
            <h3>Around the world, still counting.</h3>
            <p>
              A drawn atlas of the places I&rsquo;ve been, from nearly all of Europe to China,
              South America, Africa, Australia, and New Zealand.
            </p>
          </div>
          <span className="hobby-card-link">
            Explore the map <span aria-hidden="true">&rarr;</span>
          </span>
        </Link>
      </div>
    </section>
  )
}
