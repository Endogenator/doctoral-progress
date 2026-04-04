/**
 * EDUC 830: Curriculum as Gatekeeping — Phase 4
 * Full text display. No summary or abstract overlay.
 * Style aligned with site palette.
 * No em dashes.
 */

export default function Educ830Page() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">

      {/* Header */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8 shadow-sm">
        <p className="text-sm text-stone-500 uppercase tracking-wide font-medium">
          EDUC 830: Social Justice Theory and Practice
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
          What the System Is Actually Doing: Capital, Identity, and the
          Self-Perpetuating Logic of Curricular Gatekeeping
        </h1>
        <div className="mt-4 text-sm text-stone-600 space-y-1">
          <p>Brian Davis</p>
          <p>University of Redlands</p>
          <p>Instructor: Dr. Seonmi Jin</p>
          <p>March 21, 2026</p>
        </div>
      </section>

      {/* Full text */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-10 prose prose-stone max-w-none">

        <p>
          Curriculum is most commonly defined as the organized system of content, sequences,
          and requirements through which institutions transmit knowledge and confer credentials.
          Basil Bernstein captured this definition with precision when he described curriculum
          as the message system that defines what counts as valid knowledge, with pedagogy
          defining what counts as valid transmission and evaluation defining what counts as
          valid realization of that knowledge on the part of the taught (Bernstein, 1975).
          This definition reflects what curriculum is designed to do from the institution's
          perspective: select, organize, and transmit certain forms of knowledge as legitimate
          while others remain outside the frame. It describes curriculum as infrastructure
          built on prior beliefs about the purpose of education, beliefs about what knowledge
          matters, who is ready to receive it, and in what order, beliefs that were encoded
          into the structure at founding and have been reproduced through it ever since.
        </p>

        <p>
          But curriculum is also something else. Considered from a causal systems perspective,
          curriculum is the structured set of conditions under which student transformation
          either becomes possible or is derailed. It is not merely content; it is the
          architecture of access. The sequences, thresholds, and choice architectures that
          make up a curriculum determine which students can move through which pathways, at
          what pace, under what informational conditions, and with what institutional support.
          In this sense, curriculum does not simply transmit knowledge. It shapes the topology
          of possible transformation, expanding the developmental trajectories of some students
          while narrowing or blocking those of others.
        </p>

        <p>
          The gap between curriculum as knowledge delivery and curriculum as transformation
          infrastructure is where educational injustice takes root and where it hides. Two
          complementary theoretical frameworks make the mechanism visible. Pierre Bourdieu's
          theory of cultural capital and field reproduction explains how curricular structures
          become invisible, naturalized as merit rather than recognized as accumulated
          advantage. George Akerlof and Rachel Kranton's identity economics explains how
          individuals inside the system develop identity-based utility functions that make
          the current arrangement feel correct and departures from it feel costly. Together,
          these frameworks explain not only what curricular gatekeeping does but why it is
          unlikely to be corrected from within.
        </p>

        <p>
          Before applying those frameworks, it is worth pressing on Bernstein's own analysis
          to surface the mechanism his definition implies but does not fully explain. Bernstein
          distinguished between collection codes, in which knowledge contents are strongly
          classified, meaning sharply bounded and insulated from one another, and integrated
          codes, in which boundaries between contents are weakened in favor of relational ideas
          that connect domains. In higher education, the collection code dominates.
          Prerequisites, major requirements, and General Education distribution requirements
          are all expressions of strong classification: each domain of knowledge is treated as
          a discrete, bounded container that must be entered in sequence, through sanctioned
          pathways, under institutional supervision. Framing, Bernstein's second concept,
          refers to who controls the selection, pacing, and sequencing of knowledge in the
          pedagogical relationship. Where framing is strong, students have limited control
          over what they learn, when they learn it, and how their learning is evaluated.
        </p>

        <p>
          The implication of Bernstein's framing is clear in a footnote that speaks volumes:
          "…the pacing of the knowledge (i.e. the rate of expected learning) is implicitly
          based upon the middle-class socialization of the child. Middle-class family
          socialization of the child is a hidden subsidy, in the sense that it provides both
          a physical and psychological environment which immensely facilitates, in diverse
          ways, school learning." (Bernstein, 1975, p. 113). Where this subsidy is absent,
          the pupil often fails. The curriculum does not cause this failure; it simply does
          not account for the unequal conditions under which students approach its
          requirements. The strong classification and framing of the collection code produces
          a system that looks neutral because its rules are the same for everyone, while its
          outcomes are systematically patterned by the unequal distribution of prior capital.
          This is not an externality of the collection code; it is the primary mechanism by
          which the code reproduces the conditions of its own legitimacy. More to the point,
          Bernstein observed that attempts to change classification or framing strength are
          felt as a threat to identity and experienced as a kind of pollution endangering the
          sacred (Bernstein, 1975, p. 96). Reform does not simply meet logistical resistance.
          It meets identity resistance. Bourdieu and Akerlof explain why.
        </p>

        <p>
          Bourdieu extends the concept of capital beyond its economic definition. In his
          foundational essay, Bourdieu (1986) identifies three forms that structure social
          reproduction: economic capital, social capital consisting of durable networks of
          mutual acquaintance and recognition, and cultural capital consisting of accumulated
          knowledge, skills, dispositions, and credentials. Cultural capital operates in three
          states: embodied in durable dispositions and habits of mind acquired through early
          socialization, objectified in cultural goods and artifacts, and institutionalized in
          academic credentials that carry recognized social value. The institutionalized form
          is most directly relevant to curricular gatekeeping: degrees, grades, and completed
          course sequences convert accumulated cultural capital into economic and social
          advantage, conferring legitimacy on those who possess them.
        </p>

        <p>
          Central to Bourdieu's framework is the concept of the field, a structured social
          arena defined by its own rules, stakes, and forms of capital. Higher education is
          such a field. Its rules specify which credentials count, which prerequisite
          completions confer access, which GPA thresholds signal fitness for progression.
          What makes the field concept analytically powerful is that these rules were
          established by and for those who already possessed the forms of capital the field
          values. Students who arrive at college with embodied cultural capital, including
          familiarity with academic conventions, comfort navigating institutional bureaucracy,
          and knowledge of which course choices open which doors, are positioned to accumulate
          more capital efficiently. Students without that prior accumulation are not deficient
          as learners. They are differently positioned within a field whose rules systematically
          favor prior accumulation, and that difference is not visible as advantage to those
          who possess it.
        </p>

        <p>
          This is the mechanism Bourdieu calls misrecognition. The arbitrary advantages
          conferred by prior capital accumulation are perceived, by participants inside the
          field, as natural talent, genuine readiness, or earned achievement. A prerequisite
          chain that disproportionately burdens students with less time, fewer resources, and
          weaker navigational networks does not feel like a capital filter to the faculty who
          designed it. It feels like a reasonable standard. A GPA threshold that structurally
          advantages students whose home environments provided what Bernstein called the
          hidden subsidy does not feel like a structural inequity to the administrator who
          enforces it. It feels like an appropriate measure of academic commitment. The field
          produces its own legitimating logic, and that logic is genuinely believed by its
          participants. The social conditions that generated the standard are forgotten, and
          the standard appears as natural (Bourdieu, 1986). The result is a system that
          reproduces inequality through mechanisms that feel, from the inside, like fairness.
          The system does not need anyone to intend harm. It only needs its participants to
          mistake the arbitrary for the natural.
        </p>

        <p>
          Akerlof and Kranton (2000) explain why that mistake is so persistent. Their
          framework adds identity to the utility function: people experience gains from acting
          consistently with their sense of self and losses, what the authors call identity
          anxiety, from violating it. Behavior is therefore shaped not only by incentives and
          material constraints but by the identity-stabilizing logic of what feels appropriate,
          correct, and consistent with who one takes oneself to be. The missing variable in
          most accounts of institutional persistence is not information or goodwill. It is
          identity.
        </p>

        <p>
          For curricular gatekeeping, identity economics answers a question Bourdieu's
          framework raises but does not pursue: why people who are genuinely committed to
          equity continue to reproduce gatekeeping structures. Consider the faculty member
          who believes that rigorous prerequisites are essential to academic integrity. That
          belief is not merely an opinion held lightly. It is part of who this person
          understands themselves to be. It is part of what makes this person a scholar who
          maintains standards, an educator who earned their credentials through demonstrated
          mastery. A policy change that lowers a prerequisite requirement is not merely a
          logistical adjustment. It is a challenge to the identity of someone who has
          organized a professional self around the value of earned access to knowledge. The
          identity utility loss from perceived compromise is real and functions as a behavioral
          constraint that is invisible in standard policy analysis. Good intentions do not
          override identity utility functions. They coexist with them, which is precisely why
          reform efforts that rely on persuasion and goodwill so often stall at the point of
          implementation, producing statements of commitment without structural change.
        </p>

        <p>
          Identity economics also explains the behavior of students inside gatekeeping
          systems. For first-generation students, whose emerging sense of academic self is
          shaped by limited institutional safety nets and the compounding consequences of
          failure, choosing a perceived safe course is not irrational avoidance. It is
          identity-consistent behavior. A student without navigational capital does not
          experience open course selection as opportunity. It is perceived as risk. Risk
          aversion is built into the identity utility function of a student for whom failure
          is not just a setback but a confirmation of not belonging. Reform proposals designed
          to expand choice, without addressing the identity conditions under which choice is
          exercised, will predictably underperform. The architecture of choice changes. The
          decision environment of the student does not.
        </p>

        <p>
          Bourdieu and Akerlof complement each other by explaining the same phenomenon at
          different scales. Bourdieu operates at the level of the field: the rules of higher
          education were established by and for those who possessed certain forms of capital,
          and the field reproduces itself by misrecognizing those rules as natural rather than
          arbitrary. The mechanism is structural and self-reinforcing. Akerlof operates at
          the level of the individual: the participants inside the field have identities that
          are reinforced by its rules, and that make departures from those rules feel not
          merely inconvenient but threatening. The mechanism is cognitive and self-stabilizing.
          Together they describe a system that reproduces itself at both levels simultaneously,
          without requiring coordination or intent. The field legitimates the rules. The
          identities of the participants are validated, in part, by those rules. Challenging
          the rules threatens both the field's legitimating logic and the identity utility of
          those who embody it.
        </p>

        <p>
          This analysis has a specific implication that distinguishes it from accounts that
          locate the problem in individual prejudice or institutional malice. The persistence
          of curricular gatekeeping does not require anyone to intend harm. It requires only
          that the field's legitimating logic remain intact and that the identity utility
          functions of participants continue to generate behavior consistent with that logic.
          Emerick's (2021) analysis of diversity ideology in career and technical education
          captures the result precisely: institutions can acknowledge difference, issue equity
          statements, and create diversity offices without restructuring the mechanisms that
          produce differential outcomes. The language of access functions as legitimation
          rather than correction when the underlying classification and framing structures
          remain unchanged. Bernstein anticipated this pattern when he observed that changes
          in organizational style can occur without any marked change in the educational
          knowledge code itself, particularly where the code has created specific identities
          (Bernstein, 1975, p. 100). The institution signals change while the code persists.
        </p>

        <p>
          Curriculum, when defined as knowledge delivery, is a system with a long and largely
          unexamined history of assumptions about who is ready to learn what, and when.
          Curriculum, defined as transformation infrastructure, is a system whose design
          choices either expand or constrain the developmental trajectories available to
          students, with consequences that fall unevenly across lines of capital, identity,
          and prior socialization. Bernstein showed that the classification and framing of
          educational knowledge are contingent constructions, not natural inevitabilities,
          and that they encode the distribution of power and principles of social control
          into the structure of what counts as knowledge and who gets access to it. Bourdieu
          showed that the arbitrary advantages embedded in those constructions are
          misrecognized as merit, producing a self-perpetuating field that reforms its
          language without reforming its logic. Akerlof and Kranton showed that the
          participants inside it have identities that are reinforced by its rules, making
          the system unlikely to correct itself. The work of educational justice, in this
          frame, is not to persuade people to care more. It is to redesign the system so
          that its default outputs align with its stated values, and so that the
          transformation it promises becomes structurally available to all students, not
          only to those who arrived already carrying the capital the system was built
          to recognize.
        </p>

        {/* References */}
        <h2 className="text-xl font-semibold text-stone-900 mt-10 mb-4">References</h2>
        <ul className="space-y-3 text-stone-800 text-sm list-none pl-0">
          <li className="pl-8 -indent-8">
            Akerlof, G. A., &amp; Kranton, R. E. (2000). Economics and identity.{' '}
            <em>Quarterly Journal of Economics, 115</em>(3), 715–753.
          </li>
          <li className="pl-8 -indent-8">
            Bernstein, B. (1975). On the classification and framing of educational knowledge.
            In <em>Class, codes and control, Vol. III: Towards a theory of educational
            transmissions</em> (pp. 85–115). Routledge and Kegan Paul.
          </li>
          <li className="pl-8 -indent-8">
            Bourdieu, P. (1986). The forms of capital. In J. G. Richardson (Ed.),{' '}
            <em>Handbook of theory and research for the sociology of education</em>{' '}
            (pp. 241–258). Greenwood Press.
          </li>
          <li className="pl-8 -indent-8">
            Emerick, M. R. (2021). Diversity ideology and school leadership: Obscuring
            inequities for emergent bilingual students in career and technical education.{' '}
            <em>Educational Administration Quarterly, 58</em>(2), 223–257.
          </li>
        </ul>

      </section>

      {/* Footer note */}
      <section className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
        <p className="text-sm text-stone-600">
          This paper was submitted for EDUC 830: Social Justice Theory and Practice at the
          University of Redlands. It is posted here as a record of development, not as a
          dissertation chapter or final theoretical statement.
        </p>
      </section>

    </div>
  )
}
