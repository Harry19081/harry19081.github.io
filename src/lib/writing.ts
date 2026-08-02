import { lazy, type ComponentType } from 'react'
import { MythsOfTheFez } from '../articles/MythsOfTheFez'
import { NoIncentiveToWorkHard } from '../articles/NoIncentiveToWorkHard'
import { IstanbulArtWorld } from '../articles/IstanbulArtWorld'
import { ConsumingAncientEgyptians } from '../articles/ConsumingAncientEgyptians'
import { UnwalledBeijing } from '../articles/UnwalledBeijing'

const BytesDanceWithBureaucracy = lazy(() =>
  import('../articles/BytesDanceWithBureaucracy').then((module) => ({
    default: module.BytesDanceWithBureaucracy,
  })),
)

const WhoTrainsTheFilter = lazy(() =>
  import('../articles/WhoTrainsTheFilter').then((module) => ({
    default: module.WhoTrainsTheFilter,
  })),
)

export type Paper = {
  slug: string
  title: string
  /** Full academic subtitle, shown under the title on the paper's own page. */
  subtitle?: string
  description: string
  year: number
  /** Shown above the paper itself, in the manner of a journal abstract. */
  abstract?: string
  /** Full-text article component. Papers are read online, never downloaded. */
  article?: ComponentType
}

// To add a paper: add a component under src/articles/ and set `article`.
// Newest first — the list page renders in this order.
export const PAPERS: Paper[] = [
  {
    slug: 'db-history',
    title: 'When Bytes Dance with Bureaucracy',
    description:
      'The interwoven development of databases and statecraft in the late twentieth century.',
    year: 2025,
    abstract:
      'Late twentieth-century China saw a transformative leap in database technology and infrastructure, marked by significant shifts in how data on the economy, society, and demographics was collected, processed, and stored. These changes were fueled by transnational transfers of hardware, software, and expertise, and unfolded amidst both geopolitical challenges and domestic bureaucratic hurdles. Drawing on technical and government documents, oral histories, and material artifacts, this thesis conceptualizes technological transfer as a form of “epistemological engineering,” in which interest groups — the state, universities, and technology companies — shaped how database systems were imagined, used, remembered, and aligned with political and intellectual agendas. Those dynamics complicate the conventional Mao–Deng periodization, revealing an ongoing negotiation between technological development and political ideology that extends well beyond the traditional framework of China’s reform era.',
    article: BytesDanceWithBureaucracy,
  },
  {
    slug: 'work-incentives',
    title: 'No Incentive to Work Hard?',
    description:
      'Competing economic and behavioral accounts of worker motivation in Mao-era state-owned enterprises.',
    year: 2023,
    abstract:
      'Did workers in Mao-era state-owned enterprises have any reason to work hard? Reform-era economists answer no: with wages set administratively, differentials compressed, and bonuses abolished, effort had nothing to attach itself to. Behavioral scholars answer yes: the political and social institutions of the Maoist system generated status, identity, and reputational incentives that economistic accounts cannot see. This essay argues that the disagreement is not, at bottom, about evidence — the two camps diverge on what counts as an incentive, what counts as evidence of motivation, and over what time horizon motivation should be assessed. It proposes abandoning the yes-or-no question for a tractable one: which incentives bound, on whom, where, and when.',
    article: NoIncentiveToWorkHard,
  },
  {
    slug: 'censors',
    title: 'Who Trains the Filter',
    subtitle:
      'Human Reviewers and Automated Censorship in China, 2004–2021',
    description:
      'The people who decide what counts as obscene — and what happens to them when the algorithms arrive.',
    year: 2022,
    abstract:
      'Automated content moderation is usually described as machines replacing people. This paper argues close to the opposite: the machines are made out of the people. Tracing two decades of obscenity censorship in mainland China — from the BitTorrent forums of the mid-2000s through livestreaming apps to machine-learning filters — it follows the jianhuangshi (鉴黄师), the reviewers who decide what counts as obscene, as the job moves from a small group of police officers to moderators employed by private platforms and finally to unpaid volunteers recruited through disability associations, some reviewing five thousand images a day. Along the way it explains the apparatus in plain terms: what the Great Firewall can and cannot see, why search engines and cloud storage pose different problems than websites, and how keyword filters are defeated by homophones. When Chinese technology companies announced in 2015 that AI would “liberate” these reviewers, they left out the mechanism — it was the reviewers’ own labeling that trained the models. Human judgment and algorithmic censorship are co-constitutive: the reviewers built the thing said to be replacing them.',
    article: WhoTrainsTheFilter,
  },
  {
    slug: 'fez',
    title: 'The Myths of the Fez',
    description:
      'A genealogy of the fez in the Ottoman Empire, against three myths of linear progression.',
    year: 2020,
    abstract:
      'Standard accounts describe a hat made modern by decree: the fez introduced to the Ottoman core by Mahmud II’s clothing reform of 1829, mechanized by the state factory that followed, and assigned its meanings by the law that mandated it. This essay argues that the account rests on three myths of linear progression — of introduction, of mechanization, and of modern homogeneity — each casting the state as the sole author of the fez’s history and the hat itself as a blank surface for reformers to inscribe. Reconstructing the fez’s genealogy reverses the causal arrow: its transnational trade networks, hybrid modes of production, and contested meanings preceded the reform, enabled it, and continually escaped it.',
    article: MythsOfTheFez,
  },
  {
    slug: 'beijing-walls',
    title: 'The Making of The Unwalled Beijing',
    subtitle: 'Revolutionaries and Legacy Infrastructures (1949–1959)',
    description:
      'Why a capital’s walls came down: revolutionaries, scholar-officials, and the politics of destruction.',
    year: 2020,
    abstract:
      'The defortification of Beijing was a controversial issue among scholar-officials and senior cadres of the Chinese Communist Party during the 1950s. This thesis takes a closer look at the genealogy of thoughts that informed how revolutionaries and intellectuals perceived, portrayed, and interacted with Beijing’s city walls and gates between 1949 and 1959, with the goal of understanding the decision of defortification through their lens. It argues that the Party used Beijing’s city walls and gates to communicate and exercise its political visions, and that underpinning the decision to demolish legacy infrastructures was the equation of destruction with production.',
    article: UnwalledBeijing,
  },
  {
    slug: 'istanbul-art',
    title: 'The Revolutions of the Istanbul Art World',
    description:
      'How private capital displaced the Turkish state in Istanbul’s art world — and produced the Biennial.',
    year: 2019,
    abstract:
      'Istanbul had virtually no commercial galleries or private museums in the 1970s; today they line the Golden Horn. Most scholarship credits the Istanbul Biennial with the transformation. This essay argues the causation runs the other way: the Biennial was the product of an organizational revolution, not its cause. Reading Howard Becker’s Art Worlds alongside Bourdieu’s Manet, it traces how the Turkish state’s withdrawal — censorship after the coups, then defunding — destabilized the conventions it had underwritten, and how students, private foundations, and commercial galleries assembled the cooperative networks that replaced it. The revolution delivered not autonomy but a change of patron: dependency itself, rather than dependency on the state, was always the source of the leverage.',
    article: IstanbulArtWorld,
  },
  {
    slug: 'egypt',
    title: '“Consuming Ancient Egyptians”',
    subtitle:
      'The Mazes of Time and Space for Seventeenth Century English Travelers and Intellects',
    description:
      'How seventeenth-century English travelers and scholars read the pyramids through scripture and the classics.',
    year: 2019,
    abstract:
      'In 1586 an agent of the Levant Company shipped five hundredweight of mummy fragments to the apothecaries of London. Ancient Egypt was consumed in seventeenth-century England as medicine, as curiosity, and as evidence. This essay reconstructs the conditions under which English travelers reached Egypt at all — the expense, the bandits, the hired janissaries, the borrowed hospitality of French and Venetian consuls — and then argues that their reports and the scholarship built on them operated inside a single classic-scriptural paradigm, in which the ancients could be corrected but scripture could not. Metrology and Reformation theology, not curiosity alone, drove the inquiry: John Greaves measured the Great Pyramid hoping to recover a standard that might discipline England’s chaotic weights and measures. The paradigm held because its central evidence, the hieroglyphs, could not yet be read.',
    article: ConsumingAncientEgyptians,
  },
]
