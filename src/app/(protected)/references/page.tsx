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
          Core works that inform ENDT, XIK-TD, Belief Space, and the formal hooks
          I(·), X(·), and B(·). This list will expand as the project matures.
        </p>
      </section>

      {/* Identity and incentives */}
      <ReferenceSection title="Identity and incentives">
        <li>
          Akerlof, G. A., &amp; Kranton, R. E. (2010).
          <em> Identity Economics: How Our Identities Shape Our Work, Wages, and Well-Being</em>.
          Princeton University Press.
        </li>
      </ReferenceSection>

      {/* Knowledge and explanation */}
      <ReferenceSection title="Knowledge, explanation, and constructors">
        <li>
          Deutsch, D. (2011).
          <em> The Beginning of Infinity: Explanations That Transform the World</em>.
          Viking.
        </li>
      </ReferenceSection>

      {/* Emotion and perception */}
      <ReferenceSection title="Emotions, perception, and constructed experience">
        <li>
          Barrett, L. F. (2017).
          <em> How Emotions Are Made: The Secret Life of the Brain</em>.
          Houghton Mifflin Harcourt.
        </li>
      </ReferenceSection>

      {/* Reference frames */}
      <ReferenceSection title="Reference frames">
        <li>
          Hawkins, J. (2021).
          <em> A Thousand Brains: A New Theory of Intelligence</em>.
          Basic Books.
        </li>
      </ReferenceSection>

      {/* Adjacent possible */}
      <ReferenceSection title="Adjacent possible and innovation">
        <li>
          Kauffman, S. A. (2000, 2019).
          <em> Investigations</em>;
          <em> A World Beyond Physics</em>.
          Oxford University Press.
        </li>
        <li>
          Johnson, S. (2010).
          <em> Where Good Ideas Come From: The Natural History of Innovation</em>.
          Riverhead.
        </li>
      </ReferenceSection>

      {/* Automata and formal models */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-amber-900">
          Automata and formal models
        </h2>
        <ul className="list-disc pl-6 text-stone-900 space-y-1">
          <li>
            Sipser, M. (2012).
            <em> Introduction to the Theory of Computation</em> (3rd ed.).
            Cengage.
          </li>
          <li>
            Hopcroft, J. E., &amp; Ullman, J. D. (1979).
            <em> Introduction to Automata Theory, Languages, and Computation</em>.
            Addison-Wesley.
          </li>
          <li>
            Lamport, L. (2002).
            <em> Specifying Systems</em>.
            Addison-Wesley.
          </li>
        </ul>
        <p className="text-sm text-stone-700">
          Tuple notation from these traditions is used in ENDT strictly as a compact
          labeling device. No prior background is assumed.
        </p>
      </section>

      {/* Notes */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-amber-900">Notes</h2>
        <ul className="mt-3 list-disc pl-6 text-stone-900 space-y-1">
          <li>
            Identity Economics motivates the explicit identity term <strong>I(·)</strong>.
          </li>
          <li>
            Formalizations of <strong>X(·)</strong> and <strong>B(·)</strong> will be released
            as working papers or preprints.
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
