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
          Core works that inform ETCS, XIK-TS, and Belief Space. This list grows as the
          project matures and as coursework and dissertation research surface sources that
          meaningfully shape or test the framework.
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

      {/* Knowledge and explanation */}
      <ReferenceSection title="Knowledge, explanation, and constructors">
        <li>
          Deutsch, D. (2011).{' '}
          <em>The Beginning of Infinity: Explanations That Transform the World</em>.
          Viking.
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

      {/* Automata and formal models */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-amber-900">
          Automata and formal models
        </h2>
        <ul className="list-disc pl-6 text-stone-900 space-y-1">
          <li>
            Hopcroft, J. E., &amp; Ullman, J. D. (1979).{' '}
            <em>Introduction to Automata Theory, Languages, and Computation</em>.
            Addison-Wesley.
          </li>
          <li>
            Lamport, L. (2002).{' '}
            <em>Specifying Systems</em>. Addison-Wesley.
          </li>
          <li>
            Sipser, M. (2012).{' '}
            <em>Introduction to the Theory of Computation</em> (3rd ed.). Cengage.
          </li>
        </ul>
        <p className="text-sm text-stone-700">
          Tuple notation from these traditions is used in ETCS strictly as a compact
          labeling device for naming system components precisely. No prior background
          in formal language theory is assumed or required.
        </p>
      </section>

      {/* Notes */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-amber-900">Notes</h2>
        <ul className="mt-3 list-disc pl-6 text-stone-900 space-y-1">
          <li>
            Identity Economics motivates the explicit identity term{' '}
            <strong>I(·)</strong> and the treatment of identity as a reagent
            rather than a passive filter in XIK-TS.
          </li>
          <li>
            Bernstein and Bourdieu provide the structural and field-level account
            of how educational knowledge codes reproduce themselves. Both inform
            the ETCS analysis of coordination conditions and hidden costs.
          </li>
          <li>
            Formalizations of <strong>X(·)</strong> and the Transformation Space
            will be released as working papers or preprints as the dissertation
            develops.
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
