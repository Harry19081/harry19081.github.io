import { Link } from '../lib/router'
import { TravelMap } from './TravelMap'

export function HobbiesPage() {
  return (
    <div className="hobbies-page">
      <Link className="back-link" to="/">
        &larr; Home
      </Link>
      <header className="hobbies-page-header">
        <p className="section-kicker">Outside the work</p>
        <h1 className="page-title">Hobbies</h1>
        <p className="page-subtitle">
          Travel is how I collect questions, stories, and new ways of seeing familiar problems.
        </p>
      </header>
      <TravelMap />
    </div>
  )
}
