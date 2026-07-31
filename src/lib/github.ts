export type Project = {
  title: string
  description: string
  url: string
  owner: string
  repo: string
  languages: string[]
  stars: number | null
}

export const FEATURED: Project[] = [
  {
    title: 'ORG2',
    description:
      'System of record for how agents build software — built-in Rust harness and support for 20+ coding CLIs.',
    url: 'https://github.com/org2AI/ORG2',
    owner: 'org2AI',
    repo: 'ORG2',
    languages: ['Rust', 'TypeScript'],
    stars: 2175,
  },
]

/**
 * Refreshes star counts from the GitHub API. Everything else is curated
 * copy and always wins over repo metadata; on any failure (offline, rate
 * limit) the baked-in data renders unchanged.
 */
export async function hydrateProjects(): Promise<Project[]> {
  return Promise.all(
    FEATURED.map(async (project) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${project.owner}/${project.repo}`)
        if (!res.ok) return project
        const data: { stargazers_count?: number } = await res.json()
        return {
          ...project,
          stars: typeof data.stargazers_count === 'number' ? data.stargazers_count : project.stars,
        }
      } catch {
        return project
      }
    }),
  )
}
