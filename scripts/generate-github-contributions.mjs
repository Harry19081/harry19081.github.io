#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const username = process.env.GITHUB_USERNAME || 'Harry19081'
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN

if (!token) {
  throw new Error('Set GITHUB_TOKEN or GH_TOKEN before generating the contribution graph.')
}

const to = new Date()
const from = new Date(to)
from.setUTCFullYear(from.getUTCFullYear() - 1)

const query = `
  query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          months {
            firstDay
            name
          }
          weeks {
            contributionDays {
              contributionCount
              contributionLevel
              date
              weekday
            }
          }
        }
      }
    }
  }
`

const response = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'User-Agent': 'harry19081.github.io contribution graph',
    'X-GitHub-Api-Version': '2022-11-28',
  },
  body: JSON.stringify({
    query,
    variables: {
      login: username,
      from: from.toISOString(),
      to: to.toISOString(),
    },
  }),
})

if (!response.ok) {
  throw new Error(`GitHub API returned ${response.status}: ${await response.text()}`)
}

const payload = await response.json()
if (payload.errors?.length) {
  throw new Error(payload.errors.map((error) => error.message).join('; '))
}

const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar
if (!calendar) {
  throw new Error(`No contribution calendar returned for ${username}.`)
}

const themes = {
  light: {
    label: '#6d6a64',
    levels: {
      NONE: '#ebe8e2',
      FIRST_QUARTILE: '#c7d2fe',
      SECOND_QUARTILE: '#818cf8',
      THIRD_QUARTILE: '#6366f1',
      FOURTH_QUARTILE: '#4338ca',
    },
  },
  dark: {
    label: '#9b988f',
    levels: {
      NONE: '#292932',
      FIRST_QUARTILE: '#3730a3',
      SECOND_QUARTILE: '#4f46e5',
      THIRD_QUARTILE: '#818cf8',
      FOURTH_QUARTILE: '#c4b5fd',
    },
  },
}

const outputDir = fileURLToPath(new URL('../public/', import.meta.url))
await mkdir(outputDir, { recursive: true })

for (const [themeName, theme] of Object.entries(themes)) {
  const svg = renderCalendar(calendar, theme)
  await writeFile(
    `${outputDir}github-contributions-${themeName}.svg`,
    svg,
    'utf8',
  )
}

console.log(
  `Generated GitHub contribution graphs for ${username}: ` +
    `${calendar.totalContributions.toLocaleString('en-US')} contributions.`,
)

function renderCalendar(data, theme) {
  const cellSize = 9
  const gap = 3
  const step = cellSize + gap
  const chartLeft = 39
  const chartTop = 42
  const chartWidth = data.weeks.length * step - gap
  const width = chartLeft + chartWidth + 12
  const height = chartTop + 7 * step + 12

  const cells = data.weeks.flatMap((week, weekIndex) =>
    week.contributionDays.map((day) => {
      const x = chartLeft + weekIndex * step
      const y = chartTop + day.weekday * step
      const fill = theme.levels[day.contributionLevel] ?? theme.levels.NONE
      const countLabel =
        day.contributionCount === 1 ? '1 contribution' : `${day.contributionCount} contributions`

      return [
        `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" fill="${fill}">`,
        `<title>${day.date}: ${countLabel}</title>`,
        '</rect>',
      ].join('')
    }),
  )

  const monthPositions = data.months
    .map((month) => {
      const weekIndex = data.weeks.findIndex((week) =>
        week.contributionDays.some((day) => day.date >= month.firstDay),
      )
      if (weekIndex < 0) return null
      return {
        label: month.name.slice(0, 3),
        x: chartLeft + weekIndex * step,
      }
    })
    .filter(Boolean)

  const visibleMonths = []
  for (const month of monthPositions) {
    const previous = visibleMonths.at(-1)
    if (previous && month.x - previous.x < 28) {
      visibleMonths[visibleMonths.length - 1] = month
    } else {
      visibleMonths.push(month)
    }
  }

  const monthLabels = visibleMonths
    .map(
      (month) =>
        `<text x="${month.x}" y="33">${escapeXml(month.label)}</text>`,
    )
    .join('')

  const dayLabels = [
    ['Mon', 1],
    ['Wed', 3],
    ['Fri', 5],
  ]
    .map(
      ([label, weekday]) =>
        `<text x="0" y="${chartTop + Number(weekday) * step + 8}">${label}</text>`,
    )
    .join('')

  const total = data.totalContributions.toLocaleString('en-US')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title description">`,
    `<title id="title">${escapeXml(username)} GitHub contributions</title>`,
    `<desc id="description">${total} public contributions in the past year.</desc>`,
    '<style>',
    `text { fill: ${theme.label}; font: 10px ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; }`,
    '.summary { font-size: 12px; font-weight: 600; }',
    '</style>',
    `<text class="summary" x="0" y="13">${total} contributions in the past year</text>`,
    monthLabels,
    dayLabels,
    cells.join(''),
    '</svg>',
    '',
  ].join('\n')
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}
