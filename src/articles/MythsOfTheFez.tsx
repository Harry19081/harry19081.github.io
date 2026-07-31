import { type ReactNode } from 'react'

function Ref({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#note-${n}`} id={`ref-${n}`} aria-label={`Note ${n}`}>{n}</a>
    </sup>
  )
}

function Figure({ n, src, alt, children }: { n: number; src: string; alt: string; children: ReactNode }) {
  return (
    <figure className="article-figure" id={`figure-${n}`}>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{children}</figcaption>
    </figure>
  )
}

export function MythsOfTheFez() {
  return (
    <div className="article">
      <p>
        Nearly every student of Ottoman history encounters some version of a linear narrative
        about the social history of the fez. It goes like this: in the early nineteenth century,
        the fez became a symbol of modernization and industrialization when Mahmud II introduced
        it to the core of the empire as part of his clothing reform; it remained fashionable for
        nearly a century until, during the Turkish Revolution, it abruptly became &ldquo;an
        emblem of ignorance, negligence, fanaticism, and hatred of progress and
        civilization.&rdquo;<Ref n={1} /> Strikingly, while these narratives are full of
        unexpected ruptures, the narrators usually find the fez itself uninteresting &mdash; an
        unchanging &ldquo;red hat in the shape of a truncated cone&rdquo; that never merits a
        second look.<Ref n={2} />
      </p>
      <p>
        This essay argues that the standard account rests on three myths of linear progression:
        a myth of introduction, a myth of mechanization, and a myth of modern homogeneity. The
        three myths share a single structure. Each casts the state as the sole author of the
        fez&rsquo;s history and the hat itself as a blank surface on which reformers inscribed
        meaning &mdash; and each thereby hides the social and economic contexts in which fezzes
        were actually created, circulated, and adapted. In the following pages I challenge each
        myth in turn by reconstructing a genealogy of the fez in the Ottoman Empire. That
        genealogy suggests the conventional causal arrow should be reversed: the fez&rsquo;s
        transnational circulation, its hybrid modes of production, and its contested meanings
        did not follow from the state&rsquo;s project &mdash; they preceded it, enabled it, and
        continually escaped it. Mahmud II did not make the fez modern; the fez&rsquo;s existing
        networks helped make his reform possible.
      </p>

      <h2>The Myth of &ldquo;Introduction&rdquo;</h2>
      <p>
        The first myth is that Sultan Mahmud II (1785&ndash;1839, r. 1808&ndash;1839) and his
        so-called &ldquo;clothing revolution&rdquo; introduced the fez to the Ottoman core.
        According to Donald Quataert, Mahmud II &ldquo;employed drastic changes in
        attire&rdquo; to help forge a strong monarchy in the face of violent provincial
        rebellions and the widespread imitation of official costumes. After destroying the
        janissaries (the old Ottoman infantry) and suppressing the ulema (the religious
        establishment), the sultan promulgated a new sumptuary law in 1829 that required not
        only soldiers and civil officials but male subjects in general to wear the undecorated
        fez. Why the fez? Quataert insists that the sultan settled on it after
        &ldquo;discovering&rdquo; the hat at a military parade in Tunisia.<Ref n={3} /> What
        Quataert depicts, in short, is a linear process of cultural appropriation initiated and
        sponsored by a ruler who stumbled upon a novel headgear and judged it worthy of a
        society that urgently needed an entirely new look.
      </p>
      <p>
        This picture is problematic because it assumes that Ottoman rulers and subjects were
        unfamiliar with the fez. Whatever the reform did to make the fez desirable in the
        nineteenth-century heartland, there is ample evidence that its circulation predated the
        clothing reform. The fez was not unique to the Tunisian troops Mahmud II inspected: as
        John Dunn shows, the Egyptian army under Muhammad Ali had already replaced the turban
        with the fez. Since Mahmud II was deeply invested in reforming his army on Muhammad
        Ali&rsquo;s model, he is unlikely to have found the hat unfamiliar; indeed, the
        resemblance between the new Ottoman infantry and their Egyptian counterparts, noted by
        the British ambassador in 1826, indicates that the sultan knew the fez well before he
        supposedly discovered it. Nor should we treat his choice as inevitable or
        over-determined. The same ambassador observed Ottoman soldiers drilling in Egyptian
        bonnets rather than fezzes &mdash; a reminder that the undecorated fez was selected
        from a field of live alternatives.<Ref n={4} />
      </p>
      <p>
        More importantly, the myth of introduction obscures the transnational trade network
        through which fezzes already moved before the reform &mdash; the very network that
        would later absorb the surge in demand the reform created. Catalogs of the Ottoman
        archives reveal fezzes made in Tunis and in France being traded not only in the capital
        but in regional centers such as Bursa and Edirne.<Ref n={5} /> During the 1760s, more
        than seventy fez sellers were active in Galata, a single trading district of
        Constantinople; in Izmir the trade was so crowded that in 1799 traders petitioned to
        cap the number of licensed sellers. A competitive international market and armies of
        salespeople indicate that the fez was a familiar, even fashionable, commodity in the
        Ottoman core long before Mahmud II &ldquo;introduced&rdquo; it in the 1820s.
        Eighteenth-century travel accounts locate it on Ottoman heads as well: many men wore
        the fez as a support for the turban, and because some wound only a small strip of cloth
        around it, the fez beneath remained partly visible.<Ref n={6} /> The fez, in other
        words, did not arrive by decree; the decree found the fez already there.
      </p>

      <h2>The Myth of Mechanization</h2>
      <p>
        The second myth holds that the headdress law of 1829 forced the mechanization of fez
        production, since handicraft production allegedly could not meet society-wide demand.
        In the 1830s the state established Feshane, a fez factory on the Golden Horn in
        Constantinople. Equipment was imported from England and Belgium, and dozens of Tunisian
        masters and European experts were hired to lead the project;<Ref n={7} /> labor-saving
        technology and the optimization of production, the story goes, allowed the factory to
        expand output while shrinking its workforce.<Ref n={8} /> Emphasizing one-directional
        technology transfer from Europe, these narratives posit a clean rupture from handicraft
        to mechanized production.<Ref n={9} />
      </p>
      <p>
        While acknowledging the success of factories like Feshane, recent scholarship has
        dismantled this narrative point by point. First, handicraft and mechanized production
        coexisted: in Tunisia, hand production remained competitive for decades after
        machine-made fezzes flooded the market.<Ref n={10} /> Second, the advent of the factory
        did not mechanize production even within the factory&rsquo;s own orbit. Throughout the
        nineteenth century, Feshane operated as a &ldquo;conglomeration&rdquo; of different
        modes of production within a single manufacturing process. It relied heavily on a
        putting-out system in which managers distributed materials to women who worked from
        home; many fezzes were knitted by hand and only afterward delivered to Feshane for
        blocking, dyeing, trimming, and quality inspection.<Ref n={11} /> And whereas Quataert
        maintains that optimization and labor-saving technology made ever more workers
        redundant,<Ref n={12} /> the archival research presented in K&ouml;ksal and
        Falierou&rsquo;s volume shows that while the dyeing team shrank, the number of knitters
        grew dramatically over time. Growth in scale, that is, was achieved through a
        combination of labor-saving and labor-intensifying measures &mdash; not by substituting
        machines for hands.
      </p>
      <p>
        The deepest problem with the myth, however, is chronological: large-scale manufacturing
        and trade predated 1829, which suggests that the standard narrative has the causality
        backward. Rather than the reform creating a demand that made mass production necessary,
        Muhammad Ali and Mahmud II likely chose the fez from a wide range of plain headgears
        precisely because a large-scale manufacturing and trading infrastructure already
        existed. Historians&rsquo; exclusive focus on mechanized production in the core &mdash;
        Constantinople and Egypt in particular &mdash; has produced both an exaggeration of the
        factories&rsquo; capacity and a neglect of the enormous fez industry of the periphery
        that long predated the reform. According to Spring and Hudson, fez production was
        already a profitable industry in the seventeenth century, and by the late eighteenth
        century thousands of workers were employed in the fez workshops of the Medina of Tunis.
        The comparison is humbling: Feshane manufactured around 300,000 fezzes annually in
        1860, while Tunisian producers had turned out more than 660,000 a year as early as the
        1760s.<Ref n={13} /> Mass production did not follow the reform; the reform harnessed a
        mass industry that was already there.
      </p>

      <h2>The Myth of Modern Homogeneity</h2>
      <p>
        The third myth concerns what the fez meant. According to Quataert, the clothing reform
        grew out of officials&rsquo; desire to forge a cohesive and modern Ottoman identity
        transcending religious and ethnic demarcations. Where headgear had long been the
        central marker of identity in Ottoman society, the standardized fez erased the visual
        distinctions between Muslim and dhimmi (non-Muslim), central and provincial official
        (Figure&nbsp;1). Many non-Muslims welcomed the change precisely because a homogeneous
        headgear facilitated a common, nondiscriminatory subjecthood. Conceptualizing the
        reform as a homogenization project, Quataert reads the unprecedented sartorial
        resemblance between upper- and middle-strata Muslims and non-Muslims as a sign of its
        success.<Ref n={14} /> Osmanba&#351;o&#287;lu pushes the argument further, maintaining
        that wearing the fez allowed the sultan to fashion himself as the sartorial model for
        his subjects.<Ref n={15} />
      </p>

      <Figure
        n={1}
        src="/writing/fez/fig1.jpg"
        alt="Black-and-white photograph of court functionaries in plain fezzes and dark coats lining a palace doorway"
      >
        Figure 1. Court functionaries at the Topkapi palace, treasury department, 1880s.
      </Figure>

      <p>
        Yet in searching for resemblance and signs of progress toward homogeneity, both
        scholars overlook the symbolic distinctions on which the fashion system continued to
        run. That both the sultan and his subjects wore the fez is only a partial resemblance,
        and we should not fix our attention on it exclusively; in a fashion system,
        distinctions matter no less than resemblances. While bureaucrats were obliged to wear
        the standardized plain fez, the sultan reserved for himself a far greater stylistic
        freedom. Mahmud II and Abdulmejid I appear in multiple forms of the fez: tasseled with
        embroidery on the front (Figure&nbsp;2), heaped with silk tassel (Figure&nbsp;3),
        adorned with an aigrette and a silver medal (Figure&nbsp;4). This monopoly on
        decoration was central to the sultan&rsquo;s quest for symbolic distinction within the
        restructured fashion system: the ornamented fez reminded plain-fez wearers not only of
        the ruler&rsquo;s elevated political status but of his power to act as the arbiter of
        status and style. And whereas Jirousek and Catterall insist on a complete and linear
        break with traditional headgear accessories after 1829,<Ref n={16} /> later sultans
        occasionally reached back to them to negotiate identity. Abdulmejid I wears a trimmed
        fez mounted with an aigrette (Figure&nbsp;4) &mdash; an accessory formerly found on the
        now-prohibited turban (Figure&nbsp;5). As arbiter of style, the sultan could legitimate
        this combination: the aigrette evoked the image of the powerful Ottoman gazi (warrior)
        at a moment of geopolitical instability, while the trimming, signaling religious piety,
        would have allowed him to appeal to his Muslim subjects.<Ref n={17} /> Uniformity, in
        short, was never the whole story at the top of the hierarchy.
      </p>

      <div className="figure-grid">
        <Figure
          n={2}
          src="/writing/fez/fig2.jpg"
          alt="Oil portrait of Mahmud II standing in a dark uniform and cloak, wearing a fez with an embroidered ornament on the front"
        >
          Figure 2. Henri-Guillaume Schlesinger, <em>Mahmud II, Ottoman Sultan</em>, 1830s, oil
          on canvas, 260 &times; 195 cm. Versailles, Mus&eacute;e National de Versailles et de
          Trianon.
        </Figure>
        <Figure
          n={3}
          src="/writing/fez/fig3.jpg"
          alt="Oil portrait of Abdulmejid I seated on a gilded sofa, wearing a fez heaped with a long silk tassel and holding a sword"
        >
          Figure 3. David Wilkie, <em>Abdulmejid I</em>, 1844, oil on canvas. Istanbul, Pera
          Museum.
        </Figure>
        <Figure
          n={4}
          src="/writing/fez/fig4.jpg"
          alt="Oil portrait of Abdulmejid I in a gold-embroidered uniform, wearing a fez decorated with an aigrette and a silver medal"
        >
          Figure 4. Attributed to Jean Portet, <em>Abdulmejid I</em>, 1850s, oil on canvas,
          81 &times; 60 cm. Istanbul, Pera Museum.
        </Figure>
        <Figure
          n={5}
          src="/writing/fez/fig5.jpg"
          alt="Portrait of Mahmud II seated beneath a canopy, wearing a turban mounted with jeweled aigrettes"
        >
          Figure 5. Unknown artist, <em>Mahmud II</em>, 1810s. Istanbul, Topkap&#305; Palace
          Museum.
        </Figure>
      </div>

      <p>
        Nor was it at the bottom. As late-nineteenth-century photographs indicate, workers and
        artisans decorated their fezzes with wrapped fabrics (Figure&nbsp;7). With a different
        social stratum came not only a different mode of decoration but a different meaning of
        decoration. For Quataert, the wrapped fez was protest: workers viewed the plain fez of
        bureaucrats and merchants as a symbol of the sultanate&rsquo;s laissez-faire economic
        policies,<Ref n={18} /> and &mdash; deeming the plain fez an equalizing instrument
        &mdash; he insists that workers could reject it publicly only because the state had
        failed to enforce its homogenization project.<Ref n={19} /> In this framework, the new
        fashion expresses class struggle against the backdrop of dismantled Ottoman
        protectionism. Osmanba&#351;o&#287;lu offers a different reading, suggesting that the
        state deliberately allowed individuals to represent themselves through various colors,
        shapes, and decorations.<Ref n={20} /> But the two narratives share a premise: both
        treat the modification of the fez as a direct response to the state&rsquo;s reform,
        because both assume the fez did not exist in the Ottoman heartland until Mahmud II
        decreed it.
      </p>
      <p>
        A portrait of Mahmud II painted before the reform (Figure&nbsp;6) unsettles that
        assumption. In it, the sultan wears a fez wrapped in white fabric &mdash; strikingly
        similar to the fezzes of the Armenian workers photographed decades later
        (Figure&nbsp;7). The resemblance opens possibilities that state-centered narratives
        cannot accommodate: workers imitating the former sartorial practice of a sultan they
        allegedly resented; Mahmud II adopting the style of workers with whom he wished to
        signal solidarity; or, in the genealogical reading, sultan and workers alike
        appropriating a style from a common, older source. Pursuing the question will require
        historians not only to examine the dynamics of identity politics and cultural
        appropriation in the nineteenth-century heartland, but to approach the fez from the
        Ottoman periphery &mdash; a vantage point still largely absent from existing
        scholarship.
      </p>

      <div className="figure-grid">
        <Figure
          n={6}
          src="/writing/fez/fig6.jpg"
          alt="Oil portrait of Mahmud II on horseback in a fur-trimmed red cloak, wearing a fez wrapped with white fabric"
        >
          Figure 6. Hippolite Berteaux, <em>Mahmud II</em>, 1820s. Istanbul, Topkap&#305;
          Palace Museum.
        </Figure>
        <Figure
          n={7}
          src="/writing/fez/fig7.jpg"
          alt="Black-and-white photograph of Armenian workers in wrapped headgear processing baskets of cotton"
        >
          Figure 7. Raymond Kevorkian and Paul Paboudijian, Armenian Christian workers, late
          19th century.
        </Figure>
      </div>

      <h2>Conclusion: Against the Linear Fez</h2>
      <p>
        The three myths examined here &mdash; introduction, mechanization, homogeneity &mdash;
        are usually told as separate episodes, but they are one story told three times: the
        state acts, and the fez, along with the society wearing it, obediently changes.
        Restoring the fez&rsquo;s genealogy reverses that relationship at every point. The fez
        circulated through the empire&rsquo;s markets long before the sultan decreed it; its
        production expanded through hybrid combinations of factory, workshop, and household
        rather than through a rupture from hand to machine; and its meanings were negotiated
        from above and below &mdash; by sultans reaching back to prohibited accessories, by
        workers wrapping cloth around a state-issued form &mdash; rather than fixed by law.
        Seen this way, the reform of 1829 appears less as the origin of the fez&rsquo;s history
        than as one episode within it: a state harnessing, and briefly claiming authorship of,
        an object whose trade networks, production systems, and symbolic repertoire long
        preceded it. The same lesson illuminates the fez&rsquo;s infamous end. The Hat Law of
        1925 could condemn the fez as &ldquo;an emblem of ignorance&rdquo; only by accepting
        the very premise the 1829 law had asserted &mdash; that a hat means whatever the state
        declares it to mean. A genealogy of this supposedly unchanging &ldquo;red hat&rdquo;
        thus does more than correct the record. It shows that the linearity belongs to the
        narrators, not to the object &mdash; and that the most ordinary artifacts, precisely
        because no one thinks to give them a second look, may be the sharpest instruments we
        have for unsettling the story of modernization from above.
      </p>

      <section className="notes" aria-label="Notes">
        <h2>Notes</h2>
        <ol>
          <li id="note-1">
            John Dunn, &ldquo;Clothing to Kill For: Uniform and Politics in Ottoman
            Armies,&rdquo; <em>The Journal of the Middle East and Africa</em> 2, no. 1 (2011):
            85&ndash;6; also see Camilla Nereid, &ldquo;Kemalism on the Catwalk: The Turkish
            Hat Law of 1925,&rdquo; <em>Journal of Social History</em> 44, no. 3 (2011): 708.
          </li>
          <li id="note-2">
            G&uuml;lname Turan, &ldquo;Turkey in the Great Exhibition of 1851,&rdquo;{' '}
            <em>Design Issues</em> 25, no. 1 (2009): 79.
          </li>
          <li id="note-3">
            Donald Quataert, &ldquo;Clothing Laws, State, and Society in the Ottoman Empire,
            1720&ndash;1829,&rdquo; <em>International Journal of Middle East Studies</em> 29,
            no. 3 (1997): 407.
          </li>
          <li id="note-4">Dunn, &ldquo;Clothing to Kill For,&rdquo; 101.</li>
          <li id="note-5">
            Duygu K&ouml;ksal and Anastasia Falierou, eds., <em>A Social History of Late
            Ottoman Women: New Perspectives</em> (Leiden: Brill, 2013), 67&ndash;70.
          </li>
          <li id="note-6">
            Suraiya Faroqhi, <em>Artisans of Empire: Crafts and Craftspeople under the
            Ottomans</em> (London: I.B. Tauris, 2011), 168&ndash;9.
          </li>
          <li id="note-7">
            Mustafa Erdem Kabaday&#305;, &ldquo;Working in a Fez Factory in Istanbul in the
            Late Nineteenth Century: Division of Labor and Networks of Migration Formed along
            Ethno-Religious Lines,&rdquo; <em>International Review of Social History</em> 54,
            no. 1 (2009): 69&ndash;90; also see Vedit &#304;nal, &ldquo;The Eighteenth and
            Nineteenth Century Ottoman Attempts to Catch Up with Europe,&rdquo;{' '}
            <em>Middle Eastern Studies</em> 47, no. 5 (2011): 725&ndash;56.
          </li>
          <li id="note-8">
            Donald Quataert, <em>Ottoman Manufacturing in the Age of the Industrial
            Revolution</em> (Cambridge: Cambridge University Press, 1993), 55.
          </li>
          <li id="note-9">
            &#304;nal, &ldquo;Ottoman Attempts to Catch Up with Europe,&rdquo; 725&ndash;56;
            also see Turan, &ldquo;Turkey in the Great Exhibition of 1851,&rdquo; 66.
          </li>
          <li id="note-10">
            Nora Lafi, &ldquo;Workers versus Machines: Ottoman Tunis Between Industrialisation
            and Colonisation,&rdquo; <em>International Development Policy</em> 8, no. 1 (2017):
            37.
          </li>
          <li id="note-11">
            K&ouml;ksal and Falierou, <em>A Social History of Late Ottoman Women</em>,
            67&ndash;70, 74&ndash;6.
          </li>
          <li id="note-12">Quataert, <em>Ottoman Manufacturing</em>, 55.</li>
          <li id="note-13">Lafi, &ldquo;Workers versus Machines,&rdquo; 38&ndash;43.</li>
          <li id="note-14">Quataert, &ldquo;Clothing Laws,&rdquo; 414.</li>
          <li id="note-15">
            G&uuml;lsen Osmanba&#351;o&#287;lu, &ldquo;The Politics of What You Wear on Your
            Head,&rdquo; <em>Middle East Critique</em> 24, no. 4 (2015): 392.
          </li>
          <li id="note-16">
            Charlotte Jirousek and Sara Catterall, <em>Ottoman Dress and Design in the West: A
            Visual History of Cultural Exchange</em> (Bloomington: Indiana University Press,
            2019), 190&ndash;1.
          </li>
          <li id="note-17">
            This design could have signaled religious piety, as it would theoretically allow
            the sultan to touch his forehead to the ground during prayer. The fez was worn
            during prayers: according to Nereid, the 1829 law required all bureaucrats and
            soldiers to wear the fez during the five daily prayers, with failure to comply
            punishable by decapitation. It remains unclear, however, whether the sultan would
            have worn this particular kind of fez during prayer.
          </li>
          <li id="note-18">
            Quataert, &ldquo;Clothing Laws,&rdquo; 414. According to both Quataert and Lafi,
            workers and artisans protested against not only what they believed to be unfair
            competition imposed by European powers but also the Ottoman authorities&rsquo;
            aloof attitude; the fez became a symbol because many fezzes were manufactured in
            Europe.
          </li>
          <li id="note-19">Quataert, &ldquo;Clothing Laws,&rdquo; 420.</li>
          <li id="note-20">
            Osmanba&#351;o&#287;lu, &ldquo;The Politics of What You Wear on Your Head,&rdquo;
            393.
          </li>
        </ol>
      </section>
    </div>
  )
}
