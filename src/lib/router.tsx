import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'

let subscribers: Array<() => void> = []

export function navigate(to: string) {
  history.pushState(null, '', to)
  for (const notify of subscribers) notify()
  window.scrollTo(0, 0)
}

export function usePath(): string {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    subscribers.push(update)
    window.addEventListener('popstate', update)
    return () => {
      subscribers = subscribers.filter((notify) => notify !== update)
      window.removeEventListener('popstate', update)
    }
  }, [])

  return path.replace(/\/+$/, '') || '/'
}

type LinkProps = {
  to: string
  className?: string
  'aria-current'?: 'page'
  children: ReactNode
}

export function Link({ to, children, ...rest }: LinkProps) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    // Let modified clicks (new tab, download, …) behave like a normal link.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={onClick} {...rest}>
      {children}
    </a>
  )
}
