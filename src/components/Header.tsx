import { Link, usePath } from '../lib/router'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const path = usePath()
  const onResearch = path === '/research' || path.startsWith('/research/')
  const onHobbies = path === '/hobbies'

  return (
    <header className="site-header">
      <Link className="wordmark" to="/">Harry He</Link>
      <nav className="site-nav" aria-label="Site">
        <Link to="/research" className={onResearch ? 'active' : undefined} aria-current={onResearch ? 'page' : undefined}>
          Research
        </Link>
        <Link to="/hobbies" className={onHobbies ? 'active' : undefined} aria-current={onHobbies ? 'page' : undefined}>
          Hobbies
        </Link>
        <a className="nav-secondary" href="https://github.com/Harry19081">GitHub</a>
        <a className="nav-secondary" href="mailto:houyihe@g.harvard.edu">Email</a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
