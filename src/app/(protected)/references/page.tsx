'use client'

export default function ReferencesPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Header */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
          References
        </h1>
        <p className="mt-3 text-lg text-stone-800">
          Core works that inform Topology, XIK-TS, Belief Space, ETCS,
          Correctors and Recruiters, and their integration. This list grows
          as the project matures and as coursework and dissertation
          research surface sources that meaningfully shape or test the
          framework.
        </p>
      </section>

      {/* Identity and incentives */}
      <ReferenceSection title="Identity and incentives">
        <li>
          Akerlof, G. A., &amp; Kranton, R. E. (2000). Economics and identity.{' '}
          <em>Quarterly Journal of Economics, 115</em>(3), 715–753.
        </li>
      </ReferenceSection>

      {/* Curriculum, pedagogy, and institutional reproduction */}
      <ReferenceSection title="Curriculum, pedagogy, and institutional reproduction">
        <li>
          Bernstein, B. (1975). On the classification and framing of educational knowledge.
          In <em>Class, codes and control, Vol. III: Towards a theory of educational
          transmissions</em> (pp. 85–115). Routledge and Kegan Paul.
        </li>
        <li>
          Bourdieu, P. (1986). The forms of capital. In J. G. Richardson (Ed.),{' '}
          <em>Handbook of theory and research for the sociology of education</em>{' '}
          (pp. 241–258). Greenwood Press.
        </li>
        <li>
          Emerick, M. R. (2021). Diversity ideology and school leadership: Obscuring
          inequities for emergent bilingual students in career and technical education.{' '}
          <em>Educational Administration Quarterly, 58</em>(2), 223–257.
        </li>
      </ReferenceSection>

      {/* Poverty and cognitive function */}
      <ReferenceSection title="Poverty, cognitive bandwidth, and Transformation Space contraction">
        <li>
          Dean, E. B., Schilbach, F., &amp; Schofield, H. (2018). Poverty and cognitive
          function. In C. B. Barrett, M. R. Carter, &amp; J. P. Chavas (Eds.),{' '}
          <em>The economics of poverty traps</em> (pp. 57–118). University of Chicago Press.
        </li>
        <li>
          Mani, A., Mullainathan, S., Shafir, E., &amp; Zhao, J. (2013). Poverty impedes
          cognitive function. <em>Science, 341</em>(6149), 976–980.
        </li>
      </ReferenceSection>

      {/* Path dependence and institutional lock-in */}
      <ReferenceSection title="Path dependence and institutional lock-in">
        <li>
          Pierson, P. (2000). Increasing returns, path dependence, and the study of
          politics. <em>American Political Science Review, 94</em>(2), 251–267.
        </li>
      </ReferenceSection>

      {/* Knowledge and explanation */}
      <ReferenceSection title="Knowledge, explanation, and constructors">
        <li>
          Deutsch, D. (2011).{' '}
          <em>The Beginning of Infinity: Explanations That Transform the World</em>.
          Viking.
        </li>
        <li>
          Sloman, S., &amp; Fernbach, P. (2017).{' '}
          <em>The Knowledge Illusion: Why We Never Think Alone</em>.
          Riverhead Books.
        </li>
      </ReferenceSection>

      {/* Emotion and perception */}
      <ReferenceSection title="Emotions, perception, and constructed experience">
        <li>
          Barrett, L. F. (2017).{' '}
          <em>How Emotions Are Made: The Secret Life of the Brain</em>.
          Houghton Mifflin Harcourt.
        </li>
      </ReferenceSection>

      {/* Reference frames */}
      <ReferenceSection title="Reference frames">
        <li>
          Hawkins, J. (2021).{' '}
          <em>A Thousand Brains: A New Theory of Intelligence</em>.
          Basic Books.
        </li>
      </ReferenceSection>

      {/* Adjacent possible */}
      <ReferenceSection title="Adjacent possible and innovation">
        <li>
          Johnson, S. (2010).{' '}
          <em>Where Good Ideas Come From: The Natural History of Innovation</em>.
          Riverhead.
        </li>
        <li>
          Kauffman, S. A. (2000).{' '}
          <em>Investigations</em>. Oxford University Press.
        </li>
        <li>
          Kauffman, S. A. (2019).{' '}
          <em>A World Beyond Physics</em>. Oxford University Press.
        </li>
      </ReferenceSection>

      {/* Notes */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-amber-900">Notes</h2>
        <ul className="mt-3 list-disc pl-6 text-stone-900 space-y-1">
          <li>
            Identity Economics is now more central than earlier notes here
            gave it credit for. Akerlof and Kranton&apos;s fit measure, how
            well a person&apos;s own characteristics match a category&apos;s
            prescribed ideal, is read directly as permeability, the
            mechanism governing whether belief crosses between a person and
            a given region of Belief Space. This replaced an earlier
            treatment of identity as a reagent with an explicit I(·)
            function, which has been retired.
          </li>
          <li>
            Bernstein and Bourdieu provide the structural and field-level
            account of how educational knowledge codes reproduce
            themselves. Both inform ETCS&apos;s account of institutions as
            recruiters, spreading a coordination target at scale, and the
            structural reasons the correcting half of that pair scales far
            less easily.
          </li>
          <li>
            Dean, Schilbach, and Schofield ground the claim that unmet
            constraints narrow what actually populates Transformation
            Space. The mechanism is more specific than originally noted
            here: Belief Space itself doesn&apos;t contract. Permeability
            into it narrows under load, so reference frames that remain
            fully intact simply stop being deployed while a constraint is
            active.
          </li>
          <li>
            Pierson grounds the accreditation analysis in path dependence
            theory. Self-sealing correlative systems look close to what
            crystallization now describes at the individual level,
            permeability narrowed and kept narrow because an anchored
            belief is being protected, not because evidence keeps
            confirming it.
          </li>
          <li>
            Barrett is carried here from an earlier stage of the project.
            Affect has consistently been kept out of the framework as a
            theoretical primitive, and nothing currently built draws on
            this citation directly. Flagged rather than removed, pending a
            decision on whether it still has a place.
          </li>
          <li>
            The earlier formalizations promised here, X(·) and
            Transformation Space as a function, belonged to the retired
            reagent framing and won&apos;t be appearing as such. What
            remains genuinely unformalized is distance itself, the
            transformation-count and substrate-count metrics proposed in
            Topology. That proof is still outstanding.
          </li>
        </ul>
      </section>

    </div>
  )
}

/* --- helper --- */
function ReferenceSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-amber-900">{title}</h2>
      <ul className="mt-3 list-disc pl-6 text-stone-900 space-y-1">
        {children}
      </ul>
    </section>
  )
}