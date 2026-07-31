import { Link } from '../lib/router'

/**
 * Resonance Music Festival — founded 2016, now in its eleventh year.
 *
 * Copy here is original. The WeChat write-up is linked as the primary
 * archive rather than reproduced, so the page stays ours and the source
 * stays credited.
 */

const FACTS: Array<{ label: string; value: string }> = [
  { label: 'Founded', value: '2016' },
  { label: 'Editions', value: '11th year' },
  { label: 'Run by', value: 'Students, entirely' },
  { label: 'Region', value: 'South China' },
]

const PHOTOS: Array<{ src: string; alt: string }> = [
  {
    src: '/resonance/atrium-banner.jpg',
    alt: 'A full-height Resonance banner hanging through a shopping-mall atrium, a student band playing on the stage at its base',
  },
  {
    src: '/resonance/main-stage.jpg',
    alt: 'A night crowd in front of the Resonance main stage, lit banners either side',
  },
  {
    src: '/resonance/street-stage.jpg',
    alt: 'A student band playing a street stage at night, LED wall behind them, crowd at the barrier',
  },
  {
    src: '/resonance/plaza-set.jpg',
    alt: 'A three-piece student band performing on a plaza stage in front of a painted backdrop',
  },
  {
    src: '/resonance/iron-man.jpg',
    alt: 'A guitarist in school uniform playing beside a full Iron Man costume on a plaza stage',
  },
  {
    src: '/resonance/load-in.jpg',
    alt: 'A drum kit loaded into the back of a van at night during load-in',
  },
  {
    src: '/resonance/mall-atrium.jpg',
    alt: 'A band playing to a mall atrium, audience watching from the escalators and balconies above',
  },
  {
    src: '/resonance/graffiti-stage.jpg',
    alt: 'A full stage rig with a graffiti backdrop, crowd filming from the floor',
  },
  {
    src: '/resonance/livehouse.jpg',
    alt: 'Two vocalists under red and blue stage wash at a livehouse, silhouetted crowd in front',
  },
]

export function ResonancePage() {
  return (
    <section className="resonance-page">
      <Link className="back-link" to="/">
        &larr; Home
      </Link>

      <header className="resonance-header">
        <p className="section-kicker">Cofounded &middot; 2016</p>
        <h1 className="page-title">Resonance Music Festival</h1>
        <p className="page-subtitle">
          The first and largest student-run music festival in South China, now
          in its eleventh year.
        </p>
      </header>

      <video
        className="resonance-titles"
        src="/resonance/titles.mp4"
        poster="/resonance/titles-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Resonance title animation — hand-drawn line art"
      />

      <dl className="resonance-facts">
        {FACTS.map((f) => (
          <div key={f.label} className="resonance-fact">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="resonance-gallery">
        {PHOTOS.map((p) => (
          <img key={p.src} src={p.src} alt={p.alt} loading="lazy" />
        ))}
      </div>

      <div className="resonance-body">
        <p>
          We were high schoolers who cared about music more than was
          reasonable. There was no venue, no money, and no particular reason
          for anyone to take a bunch of teenagers seriously. We asked anyway —
          malls, cafés, instrument shops, anyone with a wall, a stage, or a
          power outlet.
        </p>
        <p>
          Fundraising was most of the work. We were told no well past a hundred
          times: by venues that wanted permits we didn&rsquo;t have, by
          sponsors that wanted numbers we couldn&rsquo;t show, by adults who
          were kind about it and adults who weren&rsquo;t. Every yes arrived at
          the end of a long line of no&rsquo;s, and the yeses are what paid for
          the stage, the PA, and the van the drum kit went in.
        </p>
        <p>
          Eleven years on it&rsquo;s still going, still run by students, and
          the bands playing it now were small children when we started. I
          don&rsquo;t think we were unusually good at any of it. We just wanted
          the show to exist badly enough to keep asking after the hundredth no.
        </p>
      </div>

      <section className="resonance-design">
        <h2>Design</h2>
        <p>
          Everything the festival puts out is drawn by hand — the wordmark, the
          posters, the animated titles, and the zines we hand out at the door,
          which argue about what a song is for and ask the reader what music
          means to them.
        </p>
        <img
          className="resonance-wordmark"
          src="/resonance/wordmark.jpg"
          alt="The Resonance wordmark beside a line drawing of a seated guitarist"
          loading="lazy"
        />
        <div className="resonance-zines">
          <img
            src="/resonance/zine-1.jpg"
            alt="A hand-drawn zine page: line illustrations of a reclining figure and a play button, set beside Chinese text about what a song can be"
            loading="lazy"
          />
          <img
            src="/resonance/zine-2.jpg"
            alt="A hand-drawn zine page: a heart wired to earphones, and the character for life with water running beneath it"
            loading="lazy"
          />
        </div>
      </section>

      <aside className="resonance-archive">
        <h2>Archive</h2>
        <p>
          <a
            href="https://mp.weixin.qq.com/s/vTyLfCMAx75XIFEub2dYYQ"
            target="_blank"
            rel="noreferrer"
          >
            An early edition, written up on WeChat{' '}
            <span aria-hidden="true">&#8599;</span>
          </a>{' '}
          <span className="resonance-note">(in Chinese)</span>
        </p>
      </aside>
    </section>
  )
}
