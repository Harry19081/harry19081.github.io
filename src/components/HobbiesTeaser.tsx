import { Link } from '../lib/router'
import { useReveal } from '../hooks/useReveal'

export function HobbiesTeaser() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="hobbies-teaser reveal" ref={ref}>
      <h2>Hobbies</h2>
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
    </section>
  )
}
