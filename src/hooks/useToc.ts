import { useEffect, useState } from 'react'

export type TocItem = { id: string; text: string; level: number }

/** Offset from the viewport top at which a heading counts as "current". */
const ACTIVE_LINE = 140

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

/**
 * Reads the rendered article's headings into a table of contents and tracks
 * which one the reader is currently in. Headings are given ids on first pass,
 * so articles don't have to declare them.
 */
export function useToc(key: string) {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('.paper-page h2, .paper-page h3'),
    )

    const taken = new Set<string>()
    const next: TocItem[] = headings.map((heading) => {
      // A heading may carry a footnote marker; keep it out of the contents label.
      const label = heading.cloneNode(true) as HTMLElement
      label.querySelectorAll('sup').forEach((s) => s.remove())
      const text = (label.textContent ?? '').trim()
      if (!heading.id) {
        const base = slugify(text) || 'section'
        let id = base
        for (let n = 2; taken.has(id); n++) id = `${base}-${n}`
        heading.id = id
      }
      taken.add(heading.id)
      return { id: heading.id, text, level: heading.tagName === 'H3' ? 3 : 2 }
    })
    setItems(next)

    let frame = 0
    function measure() {
      frame = 0
      let current: string | null = null
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > ACTIVE_LINE) break
        current = heading.id
      }
      // At the very bottom the last section may never cross the line.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = next[next.length - 1]?.id ?? current
      }
      setActiveId(current)
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [key])

  return { items, activeId }
}
