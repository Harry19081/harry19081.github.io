import { useState } from 'react'
import WorldMap, {
  type CountryContext,
  type DataItem,
  type ISOCode,
} from 'react-svg-worldmap'
import { useReveal } from '../hooks/useReveal'

type RegionId = 'all' | 'europe' | 'north-america' | 'south-america' | 'africa' | 'asia' | 'oceania'
type TravelCountryCode = ISOCode | 'sg'

type Region = {
  id: Exclude<RegionId, 'all'>
  label: string
  countries: TravelCountryCode[]
}

const REGIONS: Region[] = [
  {
    id: 'europe',
    label: 'Europe',
    countries: [
      'al', 'at', 'ba', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi', 'fr', 'de',
      'gr', 'hu', 'is', 'ie', 'it', 'xk', 'lv', 'lt', 'md', 'me', 'mk', 'nl', 'no',
      'pl', 'pt', 'ro', 'rs', 'ru', 'sk', 'si', 'es', 'se', 'ch', 'tr', 'ua', 'gb',
    ],
  },
  {
    id: 'north-america',
    label: 'North America',
    countries: ['ca', 'us', 'mx'],
  },
  {
    id: 'south-america',
    label: 'South America',
    countries: ['cl', 'ar', 'br', 'pe'],
  },
  {
    id: 'africa',
    label: 'Africa',
    countries: ['eg', 'gh', 'et'],
  },
  {
    id: 'asia',
    label: 'Asia',
    countries: [
      'jo', 'sa', 'ir', 'kz', 'uz', 'in', 'np', 'th', 'vn', 'la', 'sg', 'ph',
      'id', 'cn', 'tw', 'kr', 'jp',
    ],
  },
  {
    id: 'oceania',
    label: 'Oceania',
    countries: ['au', 'nz'],
  },
]

const VISITED_COUNTRIES = new Set(
  REGIONS.flatMap((region) => region.countries).map((country) => country.toLowerCase()),
)

function getCountryStyle(context: CountryContext<number>) {
  const visited = context.countryValue !== undefined
  const active = context.countryValue === 2
  const countryCode = context.countryCode.toLowerCase()
  const mainlandClip = countryCode === 'ca'
    ? 'polygon(0 27%, 100% 27%, 100% 100%, 0 100%)'
    : countryCode === 'ru'
      ? 'polygon(0 24%, 100% 24%, 100% 100%, 0 100%)'
      : undefined

  return {
    fill: !visited
      ? 'transparent'
      : active
        ? 'var(--accent)'
        : 'color-mix(in srgb, var(--accent) 22%, var(--chip-bg))',
    stroke: 'var(--card-bg)',
    strokeWidth: 0.65,
    opacity: visited && !active ? 0.45 : 1,
    clipPath: mainlandClip,
    transformBox: mainlandClip ? 'fill-box' as const : undefined,
    transition: 'fill 160ms ease, opacity 160ms ease',
  }
}

function getBaseCountryStyle() {
  return {
    fill: 'var(--chip-bg)',
    stroke: 'var(--card-bg)',
    strokeWidth: 0.6,
  }
}

export function TravelMap() {
  const ref = useReveal<HTMLElement>()
  const [activeRegion, setActiveRegion] = useState<RegionId>('all')
  const selectedRegion = REGIONS.find((region) => region.id === activeRegion)
  const activeCountries = selectedRegion
    ? new Set(selectedRegion.countries.map((country) => country.toLowerCase()))
    : VISITED_COUNTRIES
  const mapData: DataItem<number>[] = REGIONS.flatMap((region) => region.countries)
    .filter((country): country is ISOCode => country !== 'sg')
    .map((country) => ({
      country,
      value: activeCountries.has(country.toLowerCase()) ? 2 : 1,
    }))
  const singaporeActive = activeCountries.has('sg')
  const singaporeLabels = (width: number) => [{
    label: '\u25cf',
    x: width * 0.789,
    y: width * 0.507,
    fill: singaporeActive
      ? 'var(--accent)'
      : 'color-mix(in srgb, var(--accent) 22%, var(--chip-bg))',
    opacity: singaporeActive ? 1 : 0.45,
    fontSize: Math.max(7, width * 0.014),
    textAnchor: 'middle' as const,
    className: 'singapore-map-marker',
    role: 'img',
    'aria-label': 'Singapore — visited',
  }]

  return (
    <section className="travel reveal" ref={ref} aria-labelledby="travel-title">
      <div className="travel-heading">
        <div>
          <p className="section-kicker">A life in motion</p>
          <h2 id="travel-title">Around the world, still counting.</h2>
        </div>
        <p className="travel-intro">
          I travel to understand how places remember, build, and change.
        </p>
      </div>

      <div className="travel-map-card">
        <div className="travel-map-toolbar">
          <div className="travel-stats" aria-label="Travel totals">
            <span><strong>6</strong> continents</span>
          </div>
          <div className="travel-legend">
            <span className="travel-legend-dot" aria-hidden="true" />
            Visited
          </div>
        </div>

        <div className="travel-map-shell">
          <div className="travel-map-layers">
            <div aria-hidden="true">
              <WorldMap
                data={[]}
                size="responsive"
                backgroundColor="transparent"
                strokeOpacity={1}
                containerClassName="travel-map-drawing travel-map-base"
                regionClassName="travel-country"
                styleFunction={getBaseCountryStyle}
              />
            </div>
            <WorldMap
              data={mapData}
              title="Countries Harry has visited"
              size="responsive"
              color="var(--accent)"
              backgroundColor="transparent"
              borderColor="transparent"
              strokeOpacity={1}
              containerClassName="travel-map-drawing travel-map-overlay"
              regionClassName="travel-country"
              styleFunction={getCountryStyle}
              tooltipBgColor="var(--text)"
              tooltipTextColor="var(--card-bg)"
              tooltipTextFunction={({ countryName }) => `${countryName} — visited`}
              textLabelFunction={singaporeLabels}
            />
          </div>
        </div>

        <div className="travel-region-tabs" role="group" aria-label="Highlight a travel region">
          <button
            type="button"
            className={activeRegion === 'all' ? 'active' : undefined}
            aria-pressed={activeRegion === 'all'}
            onClick={() => setActiveRegion('all')}
          >
            All
          </button>
          {REGIONS.map((region) => (
            <button
              key={region.id}
              type="button"
              className={activeRegion === region.id ? 'active' : undefined}
              aria-pressed={activeRegion === region.id}
              onClick={() => setActiveRegion(region.id)}
            >
              {region.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
