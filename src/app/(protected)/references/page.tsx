'use client'

export default function ReferencesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">References</h1>
        <p className="text-neutral-800">
          Core works that inform ENDT, XIK-TD, Belief Space, and the formal hooks I(·), X(·), and B(·).
          Citations will expand as the project matures.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Identity and incentives</h2>
        <ul className="list-disc pl-6 text-neutral-900 space-y-1">
          <li>Akerlof, G. A., &amp; Kranton, R. E. (2010). <em>Identity Economics: How Our Identities Shape Our Work, Wages, and Well-Being</em>. Princeton University Press.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Knowledge, explanation, and constructors</h2>
        <ul className="list-disc pl-6 text-neutral-900 space-y-1">
          <li>Deutsch, D. (2011). <em>The Beginning of Infinity: Explanations That Transform the World</em>. Viking.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Emotions, perception, and constructed experience</h2>
        <ul className="list-disc pl-6 text-neutral-900 space-y-1">
          <li>Barrett, L. F. (2017). <em>How Emotions Are Made: The Secret Life of the Brain</em>. Houghton Mifflin Harcourt.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Reference frames</h2>
        <ul className="list-disc pl-6 text-neutral-900 space-y-1">
          <li>Hawkins, J. (2021). <em>A Thousand Brains: A New Theory of Intelligence</em>. Basic Books.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Adjacent possible and innovation</h2>
        <ul className="list-disc pl-6 text-neutral-900 space-y-1">
          <li>Kauffman, S. A. (2000/2019). <em>Investigations</em>; <em>A World Beyond Physics</em>. Oxford University Press.</li>
          <li>Johnson, S. (2010). <em>Where Good Ideas Come From: The Natural History of Innovation</em>. Riverhead.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notes</h2>
        <ul className="list-disc pl-6 text-neutral-900 space-y-1">
          <li>We credit Identity Economics for the explicit identity term <strong>I(·)</strong> in our modeling.</li>
          <li>Formalizations of <strong>X(·)</strong> and <strong>B(·)</strong> will be added as preprints or working papers.</li>
        </ul>
      </section>
    </div>
  )
}
