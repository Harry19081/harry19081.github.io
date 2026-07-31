import { type ReactNode } from 'react'

function Ref({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#egypt-note-${n}`} id={`egypt-ref-${n}`} aria-label={`Note ${n}`}>{n}</a>
    </sup>
  )
}

function Figure({ n, src, alt, children }: { n: number; src: string; alt: string; children: ReactNode }) {
  return (
    <figure className="article-figure" id={`egypt-figure-${n}`}>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{children}</figcaption>
    </figure>
  )
}

export function ConsumingAncientEgyptians() {
  return (
    <div className="article">
      <blockquote className="epigraph">
        <p>
          Hope not for mind in women; at their best<br />
          Sweetness and wit, they&rsquo;are but mummy, possest.
        </p>
        <footer>&mdash; John Donne (1572&ndash;1631), &ldquo;Love&rsquo;s Alchemy&rdquo;<Ref n={1} /></footer>
      </blockquote>

      <p>
        In 1586 John Sanderson, an employee of the Levant Company, recorded the import of
        &ldquo;five hundredweight of mummy fragments for sale to the apothecaries of
        London.&rdquo;<Ref n={2} /> What these two passages disclose is a world in which the
        mummified bodies of ancient Egyptians were consumed as an ingredient of
        medicine.<Ref n={3} /> Mummies were not, however, always merely powdered pharmacy. Like
        Egyptian monuments and artifacts, they were objects of curiosity consumed by European
        travelers and intellectuals, linking them to a mysterious pharaonic civilization whose
        wisdom and chronology those travelers found worthy of serious scrutiny.<Ref n={4} />
      </p>
      <p>
        Within the confines of Western history, Egyptomania &mdash; the fascination with Egypt
        &mdash; was not a product of the Campagne d&rsquo;Égypte but a cultural and intellectual
        phenomenon traceable to the classical period.<Ref n={5} /> Greek and Roman travel writers
        set foot in Egypt and wrote about it extensively. After the Byzantines lost control of the
        province in the seventh century, few Europeans other than a handful of crusaders and
        merchants traveled there voluntarily. The land of the Nile accordingly remained a
        mysterious space existing in legend and tale until the growth of commerce and missionary
        activity in the fourteenth and fifteenth centuries and the circulation of Arabic books in
        the sixteenth. Italian humanists, well versed in the newly translated texts of Herodotus,
        Diodorus Siculus, and Pliny the Elder, were the pioneer travelers, studying flora, fauna,
        and artifacts unfamiliar to European eyes. Yet despite this increasing interest in
        antiquities, no European before the seventeenth century traveled to Egypt solely to see
        ancient structures. The seventeenth century therefore marks a turning point: Europeans
        began to travel with the sole desire of visiting and studying the ancient wonders, and to
        spend enormous quantities of enthusiasm, curiosity, and in many cases money doing
        so.<Ref n={6} /> It would be natural to assume that such travelers, formed against the
        backdrop of the Renaissance, were interested in antiquities alone. The curious sensibility
        of early modern travelers was not so narrow.
      </p>
      <p>
        Though they came from the geographical periphery of the Mediterranean world, English
        travel writers and intellectuals were self-consciously active participants in European
        discourse on ancient Egypt. Travelers routinely found themselves mingling with other
        European travelers, scholars, and settled locals, and the totality of these encounters
        constituted a far-reaching network. English scholarship and travel reports on Egypt were
        published in the major European intellectual centers, and European work was published in
        London. A study of English interest in ancient Egypt therefore cannot isolate the English
        from their Continental counterparts. As Rhoads Murphey reminds us, a successful
        resurrection of the habitus and thought of the early modern English demands not only a
        comprehensive examination of literary artifacts but an understanding of the contemporary
        geopolitical context and intellectual climate.<Ref n={7} />
      </p>
      <p>
        With the aid of Thomas Kuhn&rsquo;s notion of the paradigm, I treat these mentalities as
        the habits of an individual held in common with other men of his time, and situate travel
        reports and scholarship within a broader and more enduring paradigm of problem and
        solution, which I will call the classic-scriptural paradigm. This essay is concerned not
        with the truth or validity of seventeenth-century statements about Egypt but with their
        goals and commitments. It has three purposes: to understand the conditions of
        seventeenth-century travel to Egypt; to reconstruct the classic-scriptural paradigm with
        which travel books and scholarship identified; and to understand, preliminarily, both the
        motivations for studying ancient Egypt and the impediments to a paradigm shift. I argue
        that travel to Egypt was unusual for reasons ranging from safety to expense, and that a
        European travelers&rsquo; network was essential to the English traveler&rsquo;s survival
        and socialization. I then propose that the travel of men and of books together constituted
        a multinational and multigenerational discursive field in which each travel book and each
        work of scholarship creates a discursive statement. After examining the sources of rising
        demand for travel books &mdash; a flourishing culture of wonder and a shifting conception
        of travel &mdash; I reconstruct the classic-scriptural paradigm, trace the origin of its
        chronological puzzles, and examine the solutions proposed. Finally I argue that
        contemporary concerns with metrology and Reformation theology drove seventeenth-century
        Englishmen to probe the mazes of space and time. The essay makes no pretense to a
        comprehensive evaluation of the seventeenth-century English literature on ancient
        Egypt.<Ref n={8} />
      </p>

      <h2>Act I: The Travel of Men</h2>
      <p>
        Both men and books traveled, and the conditions of their journeys have their own history.
        Both kinds of travel required material and political clearance, and the existence of both
        was embedded in complex social networks and discursive fields. At the dawn of the
        seventeenth century the English Levant Company emerged from the Venice and Turkey
        Companies. Istanbul was a major center for English diplomats and merchants, and permanent
        resident ambassadors replaced temporary emissaries, strengthening the connection between
        the British monarchy and the Ottoman sultanate. Considerable quantities of English cloth,
        along with lead, tin, furs, and drugs, were shipped to Constantinople and Aleppo, where
        merchants bought raw silk, carpets, drugs, pigments, and spices.<Ref n={9} /> Many
        Englishmen gained familiarity with local affairs and customs through long service and
        residence,<Ref n={10} /> and yet, as MacLean notes, it remained relatively unusual for
        seventeenth-century Europeans to travel through the Ottoman Empire.<Ref n={11} /> The
        Gennadius Library catalogue of pre-nineteenth-century travel literature confirms his
        observation: only a small proportion of travel writers who reached the Ottoman Empire set
        foot in Egypt.<Ref n={12} /> Unless those who did had a systematic tendency to hide their
        journals from the public, it is safe to conclude that few Europeans actually went.
      </p>
      <p>
        For early modern Europeans, travel was &ldquo;at best perilous, at worst fatal,&rdquo; and
        a sense of insecurity was common to travelers.<Ref n={13} /> Travel and travail, as Evi
        Mitsi notes, were cognate terms.<Ref n={14} /> To conceive seventeenth-century travel as
        an imposition of modern technological power and intellectual will upon the peoples of the
        Middle East is pure anachronism. It is equally risky, however, to assume Ottoman
        exceptionalism &mdash; that the empire was uniquely dangerous. Europe, in the midst of its
        own religious wars, was no safer than the Ottoman Empire, which was more benign and
        tolerant toward travelers than the Mamluk sultanate from which it had taken the province
        of Egypt.<Ref n={15} /> Egypt would witness no full-scale warfare until Napoleon
        arrived.<Ref n={16} /> Preaching the idea of a <em>pax Ottomanica</em>, Murphey asserts
        that &ldquo;as the 17th century advanced, signs of the former hesitancy and fearfulness
        became increasingly faint in travel writing.&rdquo;<Ref n={17} /> A careful reader should
        be skeptical of that generalization. Rebellion did not disappear from Egypt&rsquo;s
        political landscape: at the beginning of the century the sipahi regiments renounced their
        loyalty to the sultan and revolted against the governor, who responded brutally, and in
        the 1660s a large number of soldiers ran amok in Cairo.<Ref n={18} /> Even before arrival,
        travelers ran the risk of harassment and enslavement by pirates &mdash; which is to say
        they might arrive in a foreign land they had never intended to reach.<Ref n={19} /> The
        adventures of Mr. T. S., an unnamed English merchant enslaved by the Turks for two
        decades, were well known to contemporary English readers.<Ref n={20} /> Travelers might
        also suffer from poor health, to say nothing of fatal disease; bubonic plague was no
        distant reality in the seventeenth century, for traveler and local alike.<Ref n={21} />
      </p>
      <p>
        While safety concerns discouraged many wealthy and aspiring Englishmen from traveling at
        all, a pervading sense of insecurity heavily shaped the mentality and practice of those
        who did. Travel outside the towns was believed dangerous, and a combination of bodyguards
        and weapons was thought essential to safe passage. Sir Henry Blount found himself ambushed
        by bandits who backed down once he and his company &mdash; one janissary and several other
        European travelers &mdash; discharged their arms; the bandits, in other words, were
        interested only in the unarmed.<Ref n={22} /> Expressing his concern over safety
        repeatedly, George Sandys traveled to the pyramids, believed to be surrounded by
        countryside bandits, with an armed local guide, a bodyguard, and several other Europeans.
        Sandys discloses few details about his companions beyond the presence of a &ldquo;Moor
        guide,&rdquo; but one engraving in his travel report offers a rare visualization of a
        European traveler&rsquo;s tour group.<Ref n={23} /> Two men in keffiyeh, presumably the
        local guide and an armed janissary, are followed by five men in European attire. Except
        for the two donkey handlers, the adventurers are mounted, which gave them both comfort
        over the course of the trip and mobility in moments of danger, and they hold arquebuses in
        their hands.
      </p>

      <Figure
        n={1}
        src="/writing/egypt/fig1.jpg"
        alt="Seventeenth-century engraving of the Giza pyramids and Sphinx with a mounted, armed traveling party in the foreground"
      >
        Illustration 1. George Sandys&rsquo;s traveling party, from <em>A Relation of a Journey
        Begun An: Dom: 1610</em> (London, 1615).
      </Figure>

      <p>
        A reader who finds Sandys&rsquo;s preparations excessive will be surprised by the paranoia
        of Johann Wansleben, who traveled as late as 1672. The word <em>guard</em> permeates his
        report, and as his journey advanced he came to believe that the Arabs of a small village
        would ambush him and cut his throat.<Ref n={24} /> His fear was perhaps not groundless: he
        had learned from a country Egyptian Christian that shortly before his arrival the locals
        had killed a &ldquo;Mahometan Traveler of Barbary and&hellip;had cast his Body into the
        River.&rdquo; He rushed back to Cairo and thereafter refused to travel without a
        janissary, to whom he paid fifteen piastres a month.<Ref n={25} />
      </p>
      <p>
        Given the danger and the consequent need for an armed janissary, money and access to
        objects of wonder were closely related. English travelers, however, seldom mention money,
        as though it were an unspoken prerequisite for journeys of their kind. Sandys raises the
        question of expense only when he judges an experience not worth the price: after visiting
        the pyramids he considered visiting the tombs containing mummies, then abandoned the idea
        on being told of the danger and the need for additional bodyguards. Others chose to try
        their luck. The German merchant Samuel Kiechel, whose adventure lies outside the scope of
        this paper, was eager to see the pyramids but unaware of the danger and cost until he
        spoke with his host and friends. His new acquaintance Michael Müller, a
        &lsquo;Turkified&rsquo; renegade, told him that Arab bandits had once stripped him to the
        skin; if that had not already terrified Kiechel, his fear would have intensified on
        learning that his host had lost an arm on the same trip. What concerned Müller more was
        the expense of hiring the three or four janissaries convention required. Kiechel
        nonetheless persuaded Müller to serve as guide and bodyguard, and traveling without armed
        escort they met precisely what they feared: the Arabs took all their provisions except a
        large leg of pork.<Ref n={26} />
      </p>
      <p>
        Safety depended not only on money but on connections with resourceful European locals. For
        overnight stays travelers needed safe accommodation, and it was conventional to seek
        refuge either in the residences of the powerful and wealthy or in guest houses operated by
        Europeans. Although an English consul was dispatched to Cairo and Alexandria in the 1580s,
        there was, to the best of my knowledge, no English consul in Egypt for the remainder of
        the seventeenth century, since neither city was a focal point of the Levant
        Company&rsquo;s activity.<Ref n={27} /> This explains why English travelers stayed in the
        residences of French, Dutch, and Venetian consuls and merchants. Sandys was allowed into
        the house of the French consul, which offered him shelter and a janissary, after his
        valises were searched and he had paid a tenth of all goods along with 1.5 percent of all
        money.<Ref n={28} /> In Cairo, Blount stayed with Signor Sancto Seghezzi, a Venetian
        reputed for protecting Italian travelers, and enjoyed not only safety &mdash; a locked
        house guarded by a musketeer &mdash; but the congenial company of &ldquo;Christians in
        Turkey.&rdquo; Beyond their amazement at the harmony between Protestants and Catholics,
        serious readers might ask how an English traveler came to know and gain access to Seghezzi
        at all. Blount anticipates the question: he had obtained a letter of introduction from Sir
        Cornelius Haga, the Dutch ambassador at Constantinople, who was an acquaintance of his
        kinsman Sir James Blount.<Ref n={29} /> What we encounter in his report is a sophisticated
        network spanning multiple nationalities and generations, in which travelers not only
        supplied one another with information but watched one another&rsquo;s backs.
      </p>
      <p>
        English travelers did not always socialize with Europeans for utilitarian reasons; some
        met and befriended like-minded companions. Greaves traveled to the pyramids with a friend
        he met in Cairo, Tito Livio Burattini (1617&ndash;81), an enthusiastic Italian nobleman
        credited with proposing the meter as a universal unit of measurement, and sitting on the
        pyramid steps the two readily exchanged their knowledge of metrology. Blount likewise had
        curious Italian companions along with a Dutch acquaintance.<Ref n={30} /> Through
        socialization into these networks travelers also acquired rituals unknown to outsiders. No
        ritual is more curious than that of opening the pyramid &lsquo;door,&rsquo; which could be
        covered by sand within hours: travelers would fire their muskets at the entrance and
        listen to the long-continued sound carried down those close and smooth passages. The
        stated purpose was to drive away robbers inside, yet no seventeenth-century traveler
        reports, to my knowledge, having encountered bandits within a pyramid. The practice
        therefore had more symbolic than practical value. By firing on the pyramid, listening to a
        sound known to travelers since Pliny the Elder, and entering, the traveler made himself
        part of an imagined community of Europeans in Egypt.
      </p>

      <h2>Act II: The Travel of Books</h2>
      <p>
        Reconstructing the paradigm within which seventeenth-century English travel reports and
        scholarship operated is essential to understanding them in their broader cultural and
        intellectual context. Through the travel of books, travelers and scholars constructed a
        discursive field of puzzle-solutions in which each book embodies particular descriptions,
        theories, procedures, and rhetorics. Mummies and pyramids were not only objects of wonder
        but, in Kuhn&rsquo;s terms, common exemplars &mdash; curious problem-solutions in their own
        right.<Ref n={31} /> In <em>Mountains of Pharaoh</em> (1956) the British archaeologist
        Leonard Cottrell compares seventeenth-century European exploration of the pyramids to a
        detective story:
      </p>
      <blockquote>
        <p>
          Throughout the seventeenth century&hellip;most of [European visitors to the pyramids]
          repeat each other, and are not worth quoting. But from time to time some explorer more
          enterprising, curious or observant than the rest notices something that his predecessors
          have missed. One can liken the search to a detective story. The puzzles to be solved
          are: (a) who built the Pyramids? (b) why were they built? and (c) how were they
          built?<Ref n={32} />
        </p>
      </blockquote>
      <p>
        Like detectives, many travelers use a metaphor of light and darkness for discovery. On one
        hand, the journeys of men bring light to unknown facts. Blount contends that
        &ldquo;because Egypt is held to have been the fountaine of all Science, and Arts civill, I
        hope to find some spark of those cinders not yet put out.&rdquo;<Ref n={33} /> Greaves&rsquo;s
        exploration and measurement of the pyramid tunnels shed light not only into dark channels
        but into European minds unfamiliar with them, and his illustration of the pyramid turns on
        a stark contrast between dark and light, embodying the spirit of demystifying and
        mastering the unknown. On the other hand, the travel of books brings light to complicated
        puzzles: Greaves compares reading the classical authors and receiving
        &ldquo;manduction&rdquo; from them to borrowing light. The notion of light is thus at once
        optical and Deleuzian &mdash; a matter of aligning resources to understand the unknown and
        of exposing it to contemporary discourse.
      </p>

      <Figure
        n={2}
        src="/writing/egypt/fig2.jpg"
        alt="John Greaves's seventeenth-century engraved cross-section of the Great Pyramid showing its internal passages"
      >
        Illustration 2. John Greaves&rsquo;s engraving of the pyramid, from <em>Pyramidographia</em>
        (London, 1646).
      </Figure>

      <p>
        Cottrell did not, however, notice a further advantage of his detective analogy. For
        detectives, a breakthrough matters only if it is shared with colleagues and taken to
        court, and the same holds for travelers. Despite the existence of travelers&rsquo; social
        networks, journeys tend to be forgotten unless given greater visibility. Most travelers
        kept journals or diaries as the popular methodology instructed, but these private
        documents were usually hidden from the public gaze. A traveler interested in his own
        discoveries had to write letters and publish reports, which travel methodologists
        conceptualized, curiously, as a continuation of the journey.<Ref n={34} /> Where a
        discovery was made but not given visibility, it lost its potential to become an important
        discursive statement.<Ref n={35} /> The number of lost discoveries is indeterminable, but
        some breakthroughs &mdash; Cottrell&rsquo;s rare findings of &ldquo;something that his
        predecessors have missed&rdquo; &mdash; survive only in the fragmentary memories of fellow
        travelers. The French traveler Thévenot mentions a Scotchman brave enough to enter and
        measure the &ldquo;dark well&rdquo; inside the pyramid, a legendary place noted by Pliny
        the Elder. Both Greaves and Sandys found it intriguing and intimidating in equal measure,
        and both declined to enter on account of &ldquo;an immense quantity of bats.&rdquo; The
        Scotchman&rsquo;s descent therefore qualifies as a major breakthrough, no previous traveler
        having voluntarily made it &mdash; and yet English readers hear about him rather than from
        him.
      </p>

      <Figure
        n={3}
        src="/writing/egypt/fig3.jpg"
        alt="Engraved diagram of the well shaft inside the Great Pyramid, from Greaves's Pyramidographia"
      >
        Illustration 3. The well mentioned by Pliny, engraved for Greaves&rsquo;s
        <em>Pyramidographia</em>.
      </Figure>

      <p>
        The most common and enduring way to give a journey visibility was to publish it. Like
        their authors, many travel books traveled abroad and gained visibility among educated and
        curious readers. English readers were exposed to European travel writing on Egypt: the
        translated texts of the French traveler Jean de Thévenot, the Italian Jerom Dandini, and
        the Portuguese Jerónimo Lobo were available shortly after European publication, and it was
        not uncommon for English travelers to bring Continental travel books home. Traffic ran the
        other way as well. Shortly after its seventh London printing, Sandys&rsquo;s <em>A
        Relation of a Journey</em> was translated into Dutch and published in Amsterdam, and four
        years later in Frankfurt.<Ref n={36} /> Greaves&rsquo;s <em>Pyramidographia</em> was
        translated into French by Thévenot, who himself traveled extensively in the Middle East in
        1652&ndash;55 and 1663&ndash;67.<Ref n={37} /> The travel book of Paul Rycaut, the English
        ambassador to the Ottoman Empire, was translated and published in Amsterdam twice, and in
        Paris, Venice, Bologna, and Frankfurt.<Ref n={38} /> Books were continuations of travel
        because they provided space for travelers to converse with travelers they could never meet
        across the constraints of space and time. Travelers read one another and said so: Greaves,
        who read recent travel writing on Egypt extensively, cites Sandys along with many
        sixteenth-century travelers &mdash; Jacques de Villamont (1560&ndash;1625), Pedro de
        Teixeira (1570&ndash;1641), Pietro della Valle (1586&ndash;1652).<Ref n={39} /> Thévenot
        was as careful a reader, and clearly had his fellow travelers&rsquo; accounts, and
        Greaves&rsquo;s <em>Pyramidographia</em> above all, in mind when he entered the pyramids.
      </p>
      <p>
        Rising demand for travel books correlated closely with changing cultural and intellectual
        perceptions of travel and its value. Under attack from humanists and
        counter-reformers, pilgrimage ceased to be an unimpeachable justification for travel.
        Education became the primary justification and goal, and <em>peregrinatio academica</em>
        and <em>peregrinatio animi causa</em> became important means of it. Given the popular
        humanist assumption that goods and knowledge are unequally distributed across the globe,
        the most privileged destinations for humanists and scholars were the places where the
        ancients had dwelt &mdash; where &ldquo;taste could be schooled on the remains of
        classical antiquity, and where the memory of a higher form of civilization still lingered
        on.&rdquo;<Ref n={40} /> Travel books, as the crystallization of educational journeys, were
        believed to possess educational and even pedagogical value.
      </p>
      <p>
        The growing demand can also be explained by a culture of curiosity and wonder. During the
        sixteenth and seventeenth centuries curiosity, an urge to explore the unknown, was closely
        intertwined with exploratory activity such as travel.<Ref n={41} /> Like their European
        counterparts, many English intellectuals wrote extensively and favorably on the subject.
        The advantage of curiosity lay in its capacity to propel inquiry and the production of
        knowledge: Hobbes praises it as &ldquo;the continuall and indefatigable generation of
        knowledge,&rdquo; and according to Daston and Park, Newton similarly held that curiosity
        draws a scholar&rsquo;s attention to the philosophical anomaly and mobilizes him to probe
        the hidden causes of an apparent marvel.<Ref n={42} /> Though Daston and Park are
        preoccupied with natural philosophy, they offer invaluable clues to the similarity between
        the inquiry into nature and the inquiry into antiquity &mdash; and to the difference to
        which that similarity gave birth. Both inquiries concerned rare, mysterious, and novel
        objects available only within a particular spatial and temporal structure. Traveling to a
        foreign land and wondering at the ancient wonders, the mummies and pyramids above all, was
        a rare and luxurious experience open to few. In <em>A Most Delectable and True
        Discourse</em>, William Lithgow writes that the pyramids&rsquo; &ldquo;excessiue hugenesse
        and height&rdquo; leave him unfamiliar with them, only to realize that this very
        unfamiliarity is why travelers marvel at such wonders at all.<Ref n={43} /> Yet the
        difference between natural and artificial objects meant that an identical fascination with
        rarity produced two contrasting categories of curious object. Because deviations from the
        recurring order of nature are unusual, seventeenth-century Europeans were intrigued by the
        notoriously ephemeral; antiquities, by contrast, qualified as wonders precisely by
        enduring against nature&rsquo;s tendency toward destruction. This mode of canonization and
        its premises trace back to the Greco-Roman tradition, with which English intellectuals grew
        increasingly familiar through the humanist movement and the travel of books to England.
        Seventeenth-century English travelers and writers were heavily influenced by the notion of
        the Seven Wonders of the World. Greaves explains his own curiosity by observing that
        &ldquo;Diodorus&hellip;prefers the works of the Egyptians for magnificence before those of
        other nations, and&hellip;the pyramids before the rest of the Egyptians.&rdquo;<Ref n={44} />
      </p>
      <p>
        The Greek and Roman classics, together with biblical and scriptural sources, not only
        shaped the interests of travelers and intellectuals but constituted a common and powerful
        paradigm with which they identified. For a serious scholar like Greaves they were the
        &ldquo;glimmerings of light&rdquo; with which he might expel &ldquo;an Egyptian
        darkness.&rdquo;<Ref n={45} /> The availability of classical sources did help European
        scholars stamp out long-standing misconceptions born of a scarcity of evidence: before
        Herodotus and Pliny the Elder were available, European scholars had believed the pyramids
        to be the granaries of Saint Joseph.<Ref n={46} /> Recognizing their usefulness, nearly all
        seventeenth-century travel writers and scholars engage in active dialogue with classical
        sources when writing on ancient Egypt. It is inadequate, however, to attribute this to the
        scholarly weight of ancient sources without asking on what their authority rested and to
        what purpose they were cited.
      </p>
      <p>
        Many travel writers cited the ancients for utilitarian reasons. Early modern travel reports
        fell within the genre of <em>historia</em>, which included &ldquo;in addition to
        historiography proper, the description of empirical facts of various kinds.&rdquo; Unlike
        <em>scientia</em>, a body of systematically and philosophically deduced knowledge,
        <em>historia</em> is loosely organized, concerned with rhetoric, and highly subjective,
        since the selection of things to be observed and reported was determined by the traveler
        alone.<Ref n={47} /> Because contemporary readers knew that fabricated travel books
        existed, travel writers were obliged to produce convincing narratives, and ancient sources
        and scripture were deployed not only to authenticate observations but to justify the
        selection of the facts reported. Sandys&rsquo;s report epitomizes the practice. Imitating
        Herodotus, he first offers a geographical survey of the Nile, then a detailed description
        of Egypt&rsquo;s history; not until eighteen pages later does he begin to describe his own
        experience.<Ref n={48} /> Writers also resorted to the classics for a safe answer when
        perplexed. Unable to settle on a coherent account of why the pyramids were built, Sandys
        presents a synthesis of Martial and Pliny and asserts that the pyramid was a product of
        &ldquo;prodigality and vain glory,&rdquo; lamenting in a moralizing tone, after Pliny, the
        use of &ldquo;death to giue vnto their fames eternity.&rdquo;<Ref n={49} />
      </p>
      <p>
        It would be a mistake, however, to think this insincere or merely pretentious. There was
        also a desire to see and experience what the ancients had, and by doing so to resonate with
        them. Blount was interested in deciphering the meaning of the Table of Isis, which he had
        acquired in Italy. Holding a hypothesis in mind and &ldquo;[following] the old examples
        first used by Herodotus, then by Julius Cesar, and after by Germanicus,&rdquo; he went to
        three &ldquo;Egyptian priests&rdquo; hoping to gain knowledge from an inspiring
        conversation, and was dismayed to find them &ldquo;utterly ignorant of all things not
        Mahometan.&rdquo; Beyond grieving the loss of ancient knowledge, he laments the
        irreparability of the classical writers&rsquo; experience.<Ref n={50} /> Greaves showed a
        similar desire to experience what the ancients had documented: in the middle of the
        pyramid he tries to find the strange echo &ldquo;within of four or five voices mentioned by
        Plutarch in his fourth book <em>De placitis philosophorum</em>.&rdquo;
      </p>
      <p>
        Classical sources were also vital clues by which serious writers claimed to know about
        ancient Egypt. The Greeks and Romans were believed close to the ancient Egyptians not only
        in time and geography but in fidelity: they had access to knowledgeable Egyptian priests
        and saw the monuments before the Mamluks and Ottomans vandalized them. According to Butler,
        Shalev, and Wolff, classical and scriptural sources together laid the foundation of
        travelers&rsquo; and scholars&rsquo; theories about both Egyptian religion and artifacts.
        Few passages summarize the mainstream opinion better than the prologue to
        <em>Pyramidographia</em>:
      </p>
      <blockquote>
        <p>
          Or if we had the sacred Commentaries of the Aegyptians, so often cited by Diodorus, we
          might receive better satisfaction, and be also more content with the losse of those
          other writings of the Graecians. But seeing the vicissitudes, and revolutions of times,
          have deprived us of these, whilst the Pyramids have been too great to be consumed, it
          will be no superfluous labour to imitate the examples of the Ancients, and to supply the
          losse of them, by giving a distinct narration of the severall respective dimensions, and
          proportions of these Pyramids.<Ref n={51} />
        </p>
      </blockquote>
      <p>
        Acknowledging the importance of the classical authors, Greaves took an ethical approach to
        reading them, preferring to improve on them with up-to-date methods and equipment rather
        than to accuse them of their limitations. For all his modern instruments, his exploration
        did not escape &mdash; nor did he see any need to escape &mdash; what Haynes calls the
        Herodotean paradigm,<Ref n={52} /> founded on Herodotus&rsquo;s description of
        &ldquo;Egypt was the land where traditions went uninterrupted from time immemorial and
        where time&rsquo;s effects were the least destructive.&rdquo;<Ref n={53} />
      </p>
      <p>
        The notion of time immemorial was intriguing but no less paradoxical for
        seventeenth-century scholars, especially where classical sources met scriptural authority.
        Greaves and Newton could easily dismiss myths of Greek, Roman, Byzantine, and Arabic
        origin; they could not treat biblical chronology and narrative the same way. Against the
        backdrop of the Reformation, scholars had to accept the Bible as literal truth in the face
        of state ideological apparatuses, and where the accounts of Herodotus and other ancients
        differed from scripture, it was the classical source that was obliged to
        submit.<Ref n={54} /> Questions followed. Were the ancient authors simply wrong about
        Egyptian chronology, or does scripture omit something? And why would scripture omit it?
        Giving birth to dozens of such questions, the chronology of Egypt became an enduring and
        perplexing puzzle for English scholars, as Greaves unpacks it:
      </p>
      <blockquote>
        <p>
          If we farther consider that amongst those many names delivered by Manetho and preserved
          by Josephus, Africanus, Eusebius and Syncellus, how few there are that concur with those
          of Herodotus and Diodorus, or with those in Plato, Strabo, Pliny, Plutarch, Censorinus
          and some others, and that, which is of greater consequence, how difficult it is to
          reconcile these names and times to the Egyptian kings recorded in the Scriptures, we
          shall find ourselves bereft, and, as it were, environed on every side with great
          inextricable doubts.<Ref n={55} />
        </p>
      </blockquote>
      <p>
        The arrival of the <em>Corpus Hermeticum</em> complicated the intellectual landscape
        further. The Renaissance Hermetic tradition had been developed by Marsilio Ficino
        (1433&ndash;99) and Giovanni Pico della Mirandola (1463&ndash;94), and the seventeenth
        century witnessed a revival.<Ref n={56} /> Through the circulation of books and the
        lectures of fervent preachers, the most famous being Giordano Bruno, who lectured at Oxford
        in 1583, Hermeticism traveled to England and became an influential
        movement.<Ref n={57} /> Haynes goes so far as to suggest that its historical momentum was
        equivalent to that of humanism and the Reformation.<Ref n={58} /> Whether it was quite so
        influential is controversial, but it is safe to say that the <em>Corpus Hermeticum</em> was
        the most important written text attributed to the ancient Egyptians. Several early church
        fathers, Augustine among them, argued for the text&rsquo;s influence on Greek philosophy,
        and following Pico many scholars believed that Plato had learned the truths of Creation
        through the writings of Hermes Trismegistus, who had also instructed
        Moses.<Ref n={59} /> The legitimacy of that argument rested on Acts 7:22, which states that
        &ldquo;Moses was learned in all the wisdom of the Egyptians.&rdquo; Hermeticism permeated
        visual culture as well: the famous Mensa Isiaca tablet &mdash; of which Blount held a copy,
        his Table of Isis &mdash; depicts Hermes as the contemporary of Moses and Isis.
      </p>

      <Figure
        n={4}
        src="/writing/egypt/fig4.jpg"
        alt="Engraved reproduction of the Mensa Isiaca, a bronze tablet covered in registers of Egyptian deities and hieroglyphs"
      >
        Illustration 4. The Mensa Isiaca, engraved for Athanasius Kircher (Rome, 1654).
      </Figure>

      <p>
        Not everyone identified their scholarship with the Hermetic paradigm. In 1614 the Genevan
        Isaac Casaubon (1559&ndash;1614), who lived in London under the sponsorship of Sir Henry
        Savile, published <em>De rebus sacris et ecclesiasticis exercitationes XVI</em>, in which
        he dated the <em>Corpus Hermeticum</em> to the fourth century and argued for its early
        Christian origin.<Ref n={60} /> Casaubon&rsquo;s text had a profound impact on intellectual
        circles. Its publication not only escalated the fierce debates over the theology and
        chronology of Egypt but placed scholars in the awkward position of facing the possibility
        that they had no authentic ancient Egyptian source to work on at all.
      </p>

      <h2>Act III: The Mazes of Time and Space</h2>
      <p>
        I have examined the travel of men and of books without yet exploring their motivations in
        depth. Education and the culture of wonder are important factors in their own right, but
        their explanatory power has limits. Jonathan Haynes warns against treating curiosity as a
        sufficient motive for travel:
      </p>
      <blockquote>
        <p>
          Pure intellectual curiosity about alien culture are hard to find in the Renaissance, and
          approaching it with this Nobel ideal in mind is more apt to lead to disappointment and
          recriminations than to better understanding&hellip;Sandys&rsquo;s conservativeness, his
          concern with scholarly prestige, his reliance on written sources rather than on direct
          contact with the natives, and his restricted imaginative sympathy all make him especially
          liable to the kind of Orientalism Said describes&hellip;For all the intellectual curiosity
          and careful observation&hellip;it is still based on a paradigm that shuts off in advance
          a great deal, and qualifies the notion of pure curiosity.<Ref n={61} />
        </p>
      </blockquote>
      <p>
        Murphey similarly argues that because travelers were &ldquo;constantly confronted with the
        very real possibility of catastrophe through either human or natural agency,&rdquo; travel
        could not have been undertaken lightly or solely for pleasurable diversion or
        instruction.<Ref n={62} /> What both are arguing is that travelers had motivations beyond
        curiosity and education. Scholars, likewise, studied ancient Egypt not only out of
        curiosity but with pragmatic concerns closely tied to contemporary matters. In this section
        I argue that scholarly interest in Egypt was stimulated by metrology and theology, two
        preoccupations of the English intellectual circles.
      </p>
      <p>
        Generations of travelers attempted to estimate the size of the pyramid. Even travelers with
        no antiquarian knowledge recognized the need to survey them,<Ref n={63} /> and some of the
        methods were curious. Pietro della Valle tried to estimate the pyramid&rsquo;s scale by
        asking his janissary to shoot arrows from the top, and failed, the structure being far
        beyond the range of an arrow.<Ref n={64} /> Travelers also estimated the dimensions of
        galleries and chambers to give readers a sense of their size relative to the small tunnels.
        Among all of them John Greaves was probably the best-qualified measurer, and his primary
        goal was to measure the pyramid with the greatest attainable accuracy. He states at the
        outset of <em>Pyramidographia</em>:
      </p>
      <blockquote>
        <p>
          For I went twice to Grand Cairo from Alexandria and from thence into the deserts for the
          greater certainty to view them, carrying with me a radius of ten feet, most accurately
          divided into ten thousand parts, besides other instruments for the fuller discovery of
          truth.<Ref n={65} />
        </p>
      </blockquote>
      <p>
        As a professor of geometry, Greaves delivered what he promised.
        <em>Pyramidographia</em> distinguishes itself from previous attempts by its precise
        language, rigorous method, and well-tuned equipment. The first work dedicated entirely to
        the study of the Egyptian pyramids, it contains a section on chronology and history
        alongside a systematic measurement of the three pyramids at Giza. Indifferent to religious
        and spiritual matters, Greaves&rsquo;s project was essentially a scientific metrological
        inquiry. Despite Robert Hooke&rsquo;s fierce attack, his meticulous measurements were
        respected and cited by contemporary and later writers on metrology, the most notable being
        Isaac Newton. Published in 1736, <em>The Miscellaneous Works of Mr. John Greaves</em>
        contained one of Newton&rsquo;s unpublished essays in Latin, &ldquo;A Dissertation upon the
        Sacred Cubit of the Jews and the Cubits of several Nations.&rdquo; Newton&rsquo;s interest
        lay less in ancient Egyptian metrology than in the sacred cubit of Jewish measurement, but
        the essay acknowledges Egyptian influence upon it.<Ref n={66} /> Identifying with the
        Herodotean paradigm and its belief that Egypt was the place where time&rsquo;s effects were
        least destructive,<Ref n={67} /> both Greaves and Newton assumed the existence of a widely
        used ancient metrology and the possibility of recovering it with modern methods and
        equipment.
      </p>
      <p>
        For Greaves the goal of recovering that metrology was to revolutionize the paradigm of
        English, and even European, measurement. Britain theoretically had a unified metrological
        system founded on both religious and legal authority,<Ref n={68} /> but contemporary
        surveys suggested otherwise. Hugh May&rsquo;s survey of 1632 found that one bushel equaled
        ten gallons in the west of England, while elsewhere twelve, sixteen, and even twenty were
        used; John Houghton&rsquo;s found that a pound of butter weighed sixteen ounces at Hertford
        and thirty-six in Cheshire. Between 1607 and 1758, forty-three separate weights and
        measures statutes were proposed in England alone.<Ref n={69} /> The absence of a uniform
        system complicated both internal and international trade. Facing that chaotic
        socio-economic reality, Greaves intended to appropriate the authority of ancient monuments
        to propose a common metrology, and <em>Pyramidographia</em> was a pivotal step. The pyramid
        was the ideal choice for two reasons. First, as a physical link to the ancient past it
        might contain clues to the &ldquo;original standards of weights and
        measures&hellip;notwithstanding the revolutions and vicissitudes of Empires&rdquo; &mdash;
        so that recovering an original metrology, by virtue of its antiquity and political
        neutrality, would have the transformative power to eradicate the contemporary mazes of
        space. Second, recognizing the popularity of the Herodotean paradigm, Greaves expected
        contemporary metrologists to agree that the pyramid was an accurate and enduring structure
        against which metrological knowledge could be fixed and passed to posterity, preventing the
        loss of knowledge. He is clearly echoing Herodotus&rsquo;s instruction to prevent
        &ldquo;the traces of human events from being erased by time.&rdquo;<Ref n={70} /> For
        Greaves, Herodotus is almost prophetic in observing the consequences of lost knowledge and
        the difficulty of reversing the process. He never saw the revolution he expected. Returning
        to an ancient monument in the Ottoman Empire, surrounded by bandits, in order to change a
        metrological paradigm was at once conservative and romantic, if not unrealistic; he seems
        to have recognized these impediments, and turned instead to the Roman foot on similar
        Herodotean premises.
      </p>
      <p>
        Beyond metrology, the Egyptians were credited with a variety of cultural and intellectual
        contributions. Building on classical sources, Sandys epitomizes a popular view:
      </p>
      <blockquote>
        <p>
          The Aegyptians first inuented Arithmeticke, Musicke, and geometry; and by reason of the
          perpetuall serenities of the aire, found out the course of the Sunne and the starres,
          their constellation, risings, aspects, and influences&hellip;There letters were invented
          by Mercury, who writ from the right hand to the left; as do all the Africans. But in holy
          things especiall they expressed their conceits by Hieroglyphicks, which consist of
          significant figures: whereof there yet are many to be seen, though hardly to be
          interpreted.<Ref n={71} />
        </p>
      </blockquote>
      <p>
        &ldquo;Failing to adopt hermeticism,&rdquo; as Haynes puts it, Sandys&rsquo;s speculation
        about Egyptian wisdom was relatively conservative compared with that of many Cambridge
        scholars. Newton shared his opinion and pushed it much further. Although recent scholarship
        has largely discredited the idea that Newton believed cosmological knowledge and sacred
        codes lay hidden in the pyramids,<Ref n={72} /> he did preach the existence of a superior
        ancient wisdom. Like his colleague Thomas Burnet (1635&ndash;1715), a Cambridge theologian
        who insisted that Moses had acquired his wisdom from the Egyptians, Newton believed that
        the ancient priests possessed uncorrupted scientific knowledge.<Ref n={73} /> Ralph
        Cudworth, another Cambridge Platonist, held the same, observing that Egypt was the source
        of wisdom and harbored the world&rsquo;s chief school of literature while the Greeks
        remained peripheral in learned circles &mdash; &ldquo;like Children or infants compared
        with [the Egyptians].&rdquo;<Ref n={74} />
      </p>
      <p>
        If the Egyptians were the teachers of Moses and Plato &mdash; a claim Bacon, for one,
        dismissed &mdash; scholars found the question of chronology hard to escape. The seventeenth
        century saw a growing body of scholarship dedicated to chronology, which emerged as an
        independent branch of knowledge, and English scholars employed various methods to
        syncretize biblical chronology with the accounts of the classical authors. The best known
        writer on the subject was James Ussher, who asserts in <em>Annals of the World</em> that
        &ldquo;the beginning of time, according to our chronologie, fell upon the entrance of the
        night preceding the twenty third day of Octob. in the year of the Julian Calender,
        710&rdquo; (4004 BCE),<Ref n={75} /> and dedicated a section to the &ldquo;Chronicle of The
        Asiatic and Egyptian Affairs&rdquo; in which he fixed the history of ancient Egypt within
        biblical authority.<Ref n={76} /> Newton, in the posthumous <em>Chronology of Ancient
        Kingdoms Amended</em>, tried to bring the sources into agreement by contracting the
        chronology of Egypt.<Ref n={77} /> Thomas Burnet took a radically different approach:
        rather than situating Egyptian history within the Mosaic account of Creation, he suggested
        that &ldquo;Moses had only given an account of Creation in Genesis that would be understood
        by the ignorant masses, whilst retaining the &lsquo;true&rsquo; account for himself.&rdquo;
        He boldly proposed that &ldquo;it appears from the sacred Scriptures that the Egyptian
        wisdom was more ancient than [Moses&rsquo;] and he was the Disciple rather than the Teacher
        of that learned country,&rdquo; while clarifying that his belief could be traced back to
        the Deluge and Noah.<Ref n={78} /> Greaves took the middle ground and offered a
        conservative, uncontroversial reading, suggesting that &ldquo;what, therefore, in inquiries
        of this nature, is approved as the most solid and rational foundation, that is, to find out
        some common and received epocha in which either all or most agree, that shall be our guide
        in matters of so great antiquity.&rdquo; What he identified, surprisingly, was the
        Israelites&rsquo; exodus.<Ref n={79} />
      </p>
      <p>
        Although these scholars proposed different approaches, their agendas were nearly identical.
        The project of syncretizing biblical narrative with classical sources was fundamentally a
        defense of biblical and scriptural authority. Few state the goal more clearly than the
        Cambridge puritan master John Preston, for whom putting the &ldquo;Heathen Histories&rdquo;
        in agreement with the chronology of scripture produced a harmony that proved both
        God&rsquo;s existence and the Bible&rsquo;s verity.<Ref n={80} /> Against the backdrop of
        the English Reformation, English scholars hoped that a closer reading of the Bible would be
        pivotal to overcoming the corruption and misconception caused by papal dogma, and amending
        ancient history and chronology was an important step toward clarity and
        predictability.<Ref n={81} /> Owing to the strong influence of Hermeticism, however, the
        outcome was paradoxical. Reflecting on Genesis, which he found to contain a &ldquo;great
        deale of obscurity,&rdquo; Sir Thomas Browne contends that &ldquo;perhaps the mysticall
        method of Moses [was] bred up in the Hieroglyphicall Schooles of the
        Egyptians.&rdquo;<Ref n={82} /> Cudworth, who accused Casaubon of
        &ldquo;[generalizing] too freely,&rdquo;<Ref n={83} /> pushed much further than Browne. He
        suggests that the hieroglyphs, figures &ldquo;not answering to Sounds or Words, but
        immediately representing the objects and conceptions of the mind,&rdquo; were used by
        experts in an arcane theology represented by &ldquo;Porphyrius in Stobaus, and also in
        Hermetick, or Tristmegistick.&rdquo; Citing Celsus, he asserts that there was an arcane and
        recondite theology concealed from the superficial &ldquo;Vulgars&rdquo; &mdash; those
        &ldquo;who looked no further than external symbol or ceremony&rdquo; &mdash; and
        communicated only to kings and priests: an original monotheism hidden beneath a
        polytheistic veneer.<Ref n={84} />
      </p>

      <h2>Conclusion</h2>
      <p>
        Cudworth&rsquo;s argument was powerful not only for its meticulous reasoning but for the
        absence of evidence capable of disproving it. In suggesting that &ldquo;we know nothing of
        any Moment, that can be objected against this,&rdquo; he seems aware of the
        fact.<Ref n={85} /> His opponents could criticize but not demolish the argument unless they
        managed to decipher the meaning of the hieroglyphs. Hieroglyphics, in other words, was the
        path out of the classic-scriptural paradigm that humanist and ecclesiastical apparatuses
        had enforced, and sometimes imposed &mdash; which is to say that the paradigm was
        self-sealing so long as its central evidence remained unreadable. What the seventeenth
        century could not do was not merely to answer its questions about Egypt but to pose
        questions whose answers did not already lie within scripture and the classics.
      </p>
      <p>
        What is missing from the existing scholarship, and from this essay, is a critical
        examination of the dissemination of knowledge. By putting different authors on the same
        page I have presented their opinions as though they enjoyed equal visibility, which was not
        the case. The dissemination of discourse on ancient Egypt was not random but governed by
        the authority of sources, the social position of authors, and their relationships to
        intellectual, political, and theological circles. In the course of this research I also came
        to recognize how few sources address Ottoman interest in antiquity. More rigorous
        historiography and archival research is needed.
      </p>

      <section className="notes" aria-label="Notes">
        <h2>Notes</h2>
        <ol>
          <li id="egypt-note-1">John Skelton, <em>The Poetical Works of Skelton and Donne: With a Memoir of Each</em> (Boston: Houghton Mifflin, 2010), 286&ndash;87.</li>
          <li id="egypt-note-2">John Sanderson, <em>The Travels of John Sanderson in the Levant, 1584&ndash;1602</em>, ed. Sir William Foster (London: Hakluyt Society [1931], 2010), cited in John Butler, &ldquo;Introduction,&rdquo; in John Greaves, <em>Pyramidographia and Other Writings</em>, ed. John Butler, ci (Cambridge: Cambridge Scholars Publishing, 2018).</li>
          <li id="egypt-note-3">The practice was highly controversial. In Shakespeare&rsquo;s <em>Macbeth</em> (1611), consumption of mummy is associated with witchcraft. Thomas Browne (1605&ndash;82), as cited in Ronald Macfie&rsquo;s <em>The Romance of Medicine</em>, deems medicines containing mummy &ldquo;cursed by cannibal mixtures&rdquo; and &ldquo;dismal vampirism&rdquo; exceeding &ldquo;in horror the black banquet of Domitian,&rdquo; despite his belief that some had a &ldquo;scientific basis.&rdquo;</li>
          <li id="egypt-note-4">I draw the phrase &ldquo;Consuming Ancient Egyptians&rdquo; from the title of Sally MacDonald and Michael Rice&rsquo;s monograph, which explores the influence of ancient Egypt on contemporary tourism, museums, and entertainment.</li>
          <li id="egypt-note-5">Christine Ziegler, &ldquo;From One Egyptomania to Another: The Legacy of Roman Antiquity,&rdquo; in <em>Egyptomania: Egypt in Western Art, 1730&ndash;1930</em>, ed. Jean-Marcel Humbert et al. (Ottawa: National Gallery of Canada, 1994), 15&ndash;16.</li>
          <li id="egypt-note-6">Anne Wolff, <em>How Many Miles to Babylon?: Travels and Adventures to Egypt and Beyond, From 1300 to 1640</em> (Liverpool: Liverpool University Press, 2003), 9&ndash;12.</li>
          <li id="egypt-note-7">Rhoads Murphey, &ldquo;Bigots or Informed Observers? A Periodization of Pre-Colonial English and European Writing on the Middle East,&rdquo; <em>Journal of the American Oriental Society</em> 110, no. 2 (1990): 292.</li>
          <li id="egypt-note-8">For the Latin literature see, for instance, John Marsham, <em>Chronicus canon Aegyptiacus Ebraicus Graecus et disquisitiones</em> (London: Excudebat Tho. Roycroft, 1672).</li>
          <li id="egypt-note-9">Despina Vlami, <em>Trading with the Ottomans: The Levant Company in the Middle East</em> (London: I.B. Tauris, 2015), 87&ndash;92.</li>
          <li id="egypt-note-10">Murphey, &ldquo;A Periodization,&rdquo; 294.</li>
          <li id="egypt-note-11">Gerald MacLean, <em>The Rise of Oriental Travel: English Visitors to the Ottoman Empire, 1580&ndash;1720</em> (New York: Palgrave Macmillan, 2004), 157&ndash;58.</li>
          <li id="egypt-note-12">Howard Weber, <em>Voyages and Travels in Greece, the Near East, and Adjacent Regions, Made Previous to the Year 1801</em> (Princeton: American School of Classical Studies at Athens, 1953), 51&ndash;103.</li>
          <li id="egypt-note-13">Murphey, &ldquo;A Periodization,&rdquo; 297.</li>
          <li id="egypt-note-14">Evi Mitsi, &ldquo;&lsquo;Nowhere Is a Place&rsquo;: Travel Writing in Sixteenth-Century England,&rdquo; <em>Literature Compass</em> 2, no. 1 (2005): 2.</li>
          <li id="egypt-note-15">Curiously, the Ottoman conquest of Egypt occurred in the same year Luther nailed the ninety-five theses to the church door at Wittenberg.</li>
          <li id="egypt-note-16">Andrew Hess, &ldquo;The Ottoman Conquest of Egypt (1517) and the Beginning of the Sixteenth-Century World War,&rdquo; <em>International Journal of Middle East Studies</em> 4, no. 1 (1973): 72&ndash;73.</li>
          <li id="egypt-note-17">Murphey, &ldquo;A Periodization,&rdquo; 299.</li>
          <li id="egypt-note-18">Jane Hathway, &ldquo;Egypt in the Seventeenth Century,&rdquo; in <em>The Cambridge History of Egypt</em>, ed. Martin Daly (Cambridge: Cambridge University Press, 1998), 37&ndash;44.</li>
          <li id="egypt-note-19">Fernand Braudel, <em>The Mediterranean and the Mediterranean World in the Age of Philip II</em>, vol. 2, trans. Siân Reynolds (Berkeley: University of California Press, 1995), 877&ndash;79.</li>
          <li id="egypt-note-20">Weber, <em>Voyages and Travels</em>, 69. See also MacLean, <em>The Rise</em>, 177&ndash;221.</li>
          <li id="egypt-note-21">Johann Wild, <em>Le voyage en Egypte de Johann Wild 1606&ndash;1610</em>, ed. Oleg Volkoff (Cairo: IFAO, 1970), cited in Wolff, 115.</li>
          <li id="egypt-note-22">Henry Blount, <em>A Voyage into the Levant</em>, 3rd ed. (London: Printed for J. Legat), 47.</li>
          <li id="egypt-note-23">George Sandys, <em>A Relation of a Journey Begun An: Dom: 1610</em> (London: Printed by R. Field for W. Barrett, 1615), 113.</li>
          <li id="egypt-note-24">Johann Wansleben, <em>The Present State of Egypt, or, A New Relation of a Late Voyage into That Kingdom Performed in the Years 1672 and 1673</em> (London: Printed by R.E. for John Starkey, 1678), 59.</li>
          <li id="egypt-note-25">Ibid., 156.</li>
          <li id="egypt-note-26">Wolff, <em>How Many Miles to Babylon</em>, 171&ndash;74.</li>
          <li id="egypt-note-27">Vlami, <em>Trading with the Ottomans</em>, 34&ndash;35.</li>
          <li id="egypt-note-28">Sandys, <em>A Relation of a Journey</em>, 115&ndash;16.</li>
          <li id="egypt-note-29">Blount, <em>A Voyage</em>, 37&ndash;38.</li>
          <li id="egypt-note-30">MacLean, <em>The Rise of Oriental Travel</em>, 157.</li>
          <li id="egypt-note-31">Thomas Kuhn, <em>The Essential Tension: Selected Studies in Scientific Tradition and Change</em> (Chicago: University of Chicago Press, 1977), 298.</li>
          <li id="egypt-note-32">Leonard Cottrell, <em>Mountains of Pharaoh: 2000 Years of Pyramid Exploration</em> (London: Robert Hale, 1956), 96.</li>
          <li id="egypt-note-33">Blount, <em>Voyage</em>, 222&ndash;24.</li>
          <li id="egypt-note-34">Justin Stagl, <em>A History of Curiosity: The Theory of Travel, 1550&ndash;1800</em> (Chur: Harwood Academic Publishers, 1995), 277.</li>
          <li id="egypt-note-35">Some travel diaries were rediscovered and published. See, for instance, Michael Brennan, ed., <em>The Travel Diary of Robert Bargrave: Levant Merchant (1647&ndash;1656)</em> (London: Hakluyt Society, 1999).</li>
          <li id="egypt-note-36">Weber, <em>Voyages and Travels</em>, 55.</li>
          <li id="egypt-note-37">Thomas Birch, &ldquo;An Historical and Critical Account of the Life and Writings of Mr. John Greaves,&rdquo; in John Greaves, <em>Pyramidographia and Other Writings</em>, ed. John Butler (Cambridge: Cambridge Scholars Publishing), 182&ndash;84.</li>
          <li id="egypt-note-38">Weber, <em>Voyages and Travels</em>, 75.</li>
          <li id="egypt-note-39">Butler, &ldquo;Introduction,&rdquo; lxiv.</li>
          <li id="egypt-note-40">Stagl, <em>A History of Curiosity</em>, 47&ndash;49, 51.</li>
          <li id="egypt-note-41">Stagl, <em>A History of Curiosity</em>, 2. See also Wohlwill&rsquo;s <em>Curiosity</em> (1987).</li>
          <li id="egypt-note-42">Lorraine Daston and Katharine Park, <em>Wonders and the Order of Nature, 1150&ndash;1750</em> (New York: Zone Books, 1998), 302&ndash;3, 307, 312.</li>
          <li id="egypt-note-43">William Lithgow, <em>A Most Delectable and True Discourse, of An Admired and Painefull Peregrination</em> (London: Printed by Nicholas Okes, 1616), 117. The original text reads &ldquo;It is yet a great marull to me.&rdquo;</li>
          <li id="egypt-note-44">Greaves, <em>Pyramidographia</em>, preface.</li>
          <li id="egypt-note-45">Greaves, <em>Pyramidographia</em>, 18.</li>
          <li id="egypt-note-46">Wolff, <em>How Many Miles to Babylon</em>, 167.</li>
          <li id="egypt-note-47">Stagl, <em>A History of Curiosity</em>, 49&ndash;51.</li>
          <li id="egypt-note-48">Marshall Haynes, <em>George Sandys&rsquo; Relation of a Journey Begun An. Dom. 1610: The Humanist as Traveler</em> (London: Associated University Press, 1980), 83.</li>
          <li id="egypt-note-49">Sandys, <em>A Relation of a Journey</em>, 119.</li>
          <li id="egypt-note-50">Blount, <em>A Voyage</em>, 48&ndash;49.</li>
          <li id="egypt-note-51">Greaves, unnumbered.</li>
          <li id="egypt-note-52">Haynes, <em>George Sandys&rsquo; Relation</em>, 89&ndash;90.</li>
          <li id="egypt-note-53">Zur Shalev, &ldquo;Measurer of All Things: John Greaves (1602&ndash;1652), the Great Pyramid, and Early Modern Metrology,&rdquo; <em>Journal of the History of Ideas</em> 63, no. 4 (2002): 573&ndash;74.</li>
          <li id="egypt-note-54">Butler, &ldquo;Introduction,&rdquo; xl.</li>
          <li id="egypt-note-55">Greaves, <em>Pyramidographia</em>, 16&ndash;17.</li>
          <li id="egypt-note-56">Erik Hornung, <em>The Secret Lore of Egypt: Its Impact on the West</em> (Ithaca: Cornell University Press, 2001), 84&ndash;85.</li>
          <li id="egypt-note-57">Frances Yates, <em>Giordano Bruno and the Hermetic Tradition</em> (Chicago: University of Chicago Press, 1964), 205&ndash;8.</li>
          <li id="egypt-note-58">Haynes, <em>George Sandys&rsquo; Relation</em>, 90.</li>
          <li id="egypt-note-59">David Haycock, &ldquo;Ancient Egypt in 17th and 18th Century England,&rdquo; in <em>The Wisdom of Egypt: Changing Visions through the Ages</em>, ed. Peter Ucko and Timothy Champion (London: UCL Press, 2003), 134&ndash;35. See also Hornung, <em>The Secret Lore of Egypt</em>, 86&ndash;91.</li>
          <li id="egypt-note-60">Hornung, <em>The Secret Lore of Egypt</em>, 98&ndash;102.</li>
          <li id="egypt-note-61">Haynes, <em>George Sandys&rsquo; Relation</em>, 79&ndash;81.</li>
          <li id="egypt-note-62">Murphey, &ldquo;A Periodization,&rdquo; 294&ndash;95.</li>
          <li id="egypt-note-63">Vine, &ldquo;Too Great a Morsell,&rdquo; 32.</li>
          <li id="egypt-note-64">Wolff, <em>How Many Miles to Babylon</em>, 181.</li>
          <li id="egypt-note-65">Greaves, <em>Pyramidographia</em>, unnumbered.</li>
          <li id="egypt-note-66">See Isaac Newton, &ldquo;A Dissertation upon the Sacred Cubit of the Jews and the Cubits of several Nations,&rdquo; in <em>Miscellaneous Works of Mr. John Greaves</em>, ed. Thomas Birch (London: Printed by J. Hughs, 1737), cover page.</li>
          <li id="egypt-note-67">Shalev, &ldquo;Measurer of All Things,&rdquo; 568&ndash;70.</li>
          <li id="egypt-note-68">Proverbs 20:10 declares that &ldquo;Divers weights and divers measures, both of them are alike abomination to the Lord.&rdquo; The Great Charter directed that &ldquo;there shall be, through our Realm, one Measure of Wine, and one of Ale, and one Measure of Corn.&rdquo; Cited in Julian Hoppit, &ldquo;Reforming Britain&rsquo;s Weights and Measures, 1660&ndash;1824,&rdquo; <em>English Historical Review</em> 108, no. 426 (1993): 82.</li>
          <li id="egypt-note-69">Hoppit, &ldquo;Reforming Britain&rsquo;s Weights and Measures,&rdquo; 83&ndash;85.</li>
          <li id="egypt-note-70">Cited in Butler, &ldquo;Introduction,&rdquo; xxxviii.</li>
          <li id="egypt-note-71">Sandys, <em>A Relation of a Journey</em>, 103&ndash;4.</li>
          <li id="egypt-note-72">Shalev, &ldquo;Measurer of All Things,&rdquo; 574.</li>
          <li id="egypt-note-73">Haycock, &ldquo;17th and 18th Centuries,&rdquo; 138.</li>
          <li id="egypt-note-74">Ralph Cudworth, <em>The True Intellectual System of the Universe</em> (London: Printed for J. Walthoe et al., 1743), 312.</li>
          <li id="egypt-note-75">James Ussher, <em>The Annals of the World Deduced From The Origin Of Time</em> (London: Printed by E. Tyler, 1658 [1640 &amp; 1644]), 1&ndash;2.</li>
          <li id="egypt-note-76">Ibid., 409.</li>
          <li id="egypt-note-77">Jed Buchwald and Mordechai Feingold, <em>Newton and the Origin of Civilization</em> (Princeton: Princeton University Press, 2013), 115.</li>
          <li id="egypt-note-78">Haycock, &ldquo;17th and 18th Centuries,&rdquo; 137.</li>
          <li id="egypt-note-79">Greaves, <em>Pyramidographia</em>, 17&ndash;18.</li>
          <li id="egypt-note-80">John Preston, <em>Life Eternall, or, A Treatise of the Knowledge of the Divine Essence and Attributes</em> (London, 1634), 55, cited in Buchwald, <em>Newton and the Origin</em>, 117&ndash;18.</li>
          <li id="egypt-note-81">Haycock, &ldquo;17th and 18th Centuries,&rdquo; 133&ndash;34.</li>
          <li id="egypt-note-82">Barbour, 279. See also Haycock, &ldquo;17th and 18th Centuries,&rdquo; 137.</li>
          <li id="egypt-note-83">Hornung, <em>The Secret Lore of Egypt</em>, 98.</li>
          <li id="egypt-note-84">Cudworth, <em>The True Intellectual System</em>, 314&ndash;19, 334&ndash;49.</li>
          <li id="egypt-note-85">Ibid., 317.</li>
        </ol>
      </section>
    </div>
  )
}
