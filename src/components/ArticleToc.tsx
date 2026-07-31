import { useToc } from '../hooks/useToc'

export function ArticleToc({ slug }: { slug: string }) {
  const { items, activeId } = useToc(slug)

  if (items.length < 2) return null

  return (
    <nav className="article-toc" aria-label="Table of contents">
      <p className="article-toc-title">Contents</p>
      <ol>
        {items.map((item) => (
          <li key={item.id} className={`toc-level-${item.level}`}>
            <a
              href={`#${item.id}`}
              className={item.id === activeId ? 'active' : undefined}
              aria-current={item.id === activeId ? 'location' : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
