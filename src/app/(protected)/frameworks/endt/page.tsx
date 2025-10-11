'use client'

export default function ENDTPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">ENDT — Education as a Non-Deterministic Transducer</h1>
      <p>
        A compact lens for how U.S. schooling braids pedagogy with identity, explaining why similar inputs can
        yield divergent paths.
      </p>

      <h2 className="text-xl font-semibold mt-4">Model (words, not equations)</h2>
      <p>
        Let <strong>E = ⟨Q, Σ, Γ, Δ, I, F⟩</strong> where Q are learner states, Σ are policy/pedagogy inputs, Γ
        are outputs/records, Δ are transitions (non-deterministic), I is institutional entry, and F are exits.
      </p>

      <h2 className="text-xl font-semibold mt-4">Pedagogy as identity work</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Readers &amp; recitation → civic voice rehearsal</li>
        <li>Rituals (pledge, assemblies) → belonging/obedience</li>
        <li>Language policy → assimilation vs. managed pluralism</li>
        <li>Vocational tracks → role/channel placement</li>
        <li>Testing/tracking → naturalized hierarchies as “merit”</li>
        <li>Discipline/dress → policing cultural markers</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Why “non-deterministic” matters</h2>
      <p>
        The same input (e.g., English-only) can yield different states because identity filters mediate meaning.
        Outputs are the traces of what stabilized.
      </p>
    </main>
  )
}
