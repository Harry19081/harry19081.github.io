import { Fragment } from 'react'
import { bytesDanceChapters, type BytesDanceBlock } from './bytesDanceData'

const NOTE_TOKEN = /(\{\{note:\d+\}\})/g
const NOTE_NUMBER = /^\{\{note:(\d+)\}\}$/

function InlineText({ text }: { text: string }) {
  return text.split(NOTE_TOKEN).map((part, index) => {
    const match = part.match(NOTE_NUMBER)
    if (!match) return <Fragment key={index}>{part}</Fragment>

    const note = Number(match[1])
    return (
      <sup key={index}>
        <a
          href={`#bytes-note-${note}`}
          id={`bytes-ref-${note}`}
          aria-label={`Note ${note}`}
        >
          {note}
        </a>
      </sup>
    )
  })
}

function ArticleBlock({
  block,
  chapterSlug,
  index,
}: {
  block: BytesDanceBlock
  chapterSlug: string
  index: number
}) {
  if (block.kind === 'heading') {
    return (
      <h3>
        <InlineText text={block.text} />
      </h3>
    )
  }

  if (block.kind === 'figure') {
    return (
      <figure className="article-figure" id={`${chapterSlug}-figure-${index}`}>
        <img src={block.src} alt={block.alt} loading="lazy" />
        <figcaption>
          <InlineText text={block.caption} />
        </figcaption>
      </figure>
    )
  }

  if (block.kind === 'table') {
    return (
      <figure className="article-table" id={`${chapterSlug}-table-${index}`}>
        <figcaption>{block.caption}</figcaption>
        <div className="article-table-scroll">
          <table>
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header} scope="col">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </figure>
    )
  }

  return (
    <p className="bytes-block-paragraph">
      <InlineText text={block.text} />
    </p>
  )
}

export function BytesDanceWithBureaucracy() {
  return (
    <div className="article bytes-article">
      {bytesDanceChapters.map((chapter) => (
        <section
          className={`bytes-chapter bytes-chapter--${chapter.slug}`}
          key={chapter.slug}
        >
          <h2>{chapter.title}</h2>
          {chapter.subtitle && (
            <p className="chapter-subtitle">{chapter.subtitle}</p>
          )}

          {chapter.blocks.map((block, index) => (
            <ArticleBlock
              block={block}
              chapterSlug={chapter.slug}
              index={index}
              key={`${chapter.slug}-${index}`}
            />
          ))}

          {chapter.notes.length > 0 && (
            <aside className="notes bytes-notes" aria-label={`Notes for ${chapter.title}`}>
              <h4>Notes</h4>
              <ol>
                {chapter.notes.map((note) => (
                  <li value={note.n} id={`bytes-note-${note.n}`} key={note.n}>
                    <InlineText text={note.text} />{' '}
                    <a
                      className="note-backlink"
                      href={`#bytes-ref-${note.n}`}
                      aria-label={`Return to note ${note.n} reference`}
                    >
                      ↩
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          )}
        </section>
      ))}
    </div>
  )
}
