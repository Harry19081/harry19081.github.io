/**
 * Old URLs kept alive after the /writing → /research rename. Anything shared
 * before the move — CVs, applications, other people's links — still lands.
 */

const OLD_SLUGS: Record<string, string> = {
  'when-bytes-dance-with-bureaucracy': 'db-history',
  'the-making-of-the-unwalled-beijing': 'beijing-walls',
  'revolutions-of-the-istanbul-art-world': 'istanbul-art',
  'consuming-ancient-egyptians': 'egypt',
  'myths-of-the-fez': 'fez',
  'no-incentive-to-work-hard': 'work-incentives',
}

/** Returns the current path for a legacy one, or null if it isn't legacy. */
export function resolveLegacyPath(path: string): string | null {
  if (path === '/writing') return '/research'

  const match = path.match(/^\/writing\/(.+?)\/?$/)
  if (!match) return null

  const slug = match[1]
  // Old long slug, or a slug that was already short and only moved section.
  return `/research/${OLD_SLUGS[slug] ?? slug}`
}
