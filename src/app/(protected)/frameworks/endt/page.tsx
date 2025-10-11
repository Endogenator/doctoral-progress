'use client'

export default function ENDTPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-5">
      <h1 className="text-3xl font-semibold">ENDT — Education as a Non-Deterministic Transducer</h1>
      <p>
        ENDT treats schooling as a system that <em>transduces</em> inputs (policies, pedagogies, rituals)
        into outputs (records, behaviors, identities). The same input can legitimately yield different
        learner “states,” so the system must be modeled as <strong>non-deterministic</strong>.
      </p>

      <h2 className="text-xl font-semibold">Model (words, not equations)</h2>
      <p>
        Let <strong>E = ⟨Q, Σ, Γ, Δ, I, F⟩</strong>.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Q</strong> (states): learner positions that bundle knowledge + identity (e.g., assimilating, bicultural, segregated, certified, excluded).</li>
        <li><strong>Σ</strong> (inputs): policy and pedagogy signals (reading/recitation, language rules, tracking, discipline, civic rituals, vocational placements).</li>
        <li><strong>Γ</strong> (outputs): attendance, test scores, recitations, petitions, walkouts, dress/language compliance—observable traces.</li>
        <li><strong>Δ</strong> (transitions): step-wise moves that read an input and emit an output; multiple next states can follow the same input.</li>
        <li><strong>I</strong> (entry): who is legible as a student at the door; enrollment/eligibility filters.</li>
        <li><strong>F</strong> (exit): graduation/certification/dropout/exclusion—identity completion as well as academic completion.</li>
      </ul>

      <h2 className="text-xl font-semibold">How pedagogy doubles as identity work</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Readers &amp; recitation</strong>: literacy + rehearsal of a “proper” civic voice.</li>
        <li><strong>Rituals</strong> (pledge, assemblies): encode belonging and obedience expectations.</li>
        <li><strong>Language policy</strong>: English-only → assimilation; bilingual/dual-language → managed pluralism (enforcement varies locally).</li>
        <li><strong>Vocational/industrial tracks</strong>: skill formation + channeling into class/caste roles.</li>
        <li><strong>Testing &amp; tracking</strong>: sort knowledge and naturalize hierarchies as “merit.”</li>
        <li><strong>Discipline &amp; dress</strong>: maintain order and police cultural markers.</li>
      </ul>

      <h2 className="text-xl font-semibold">Period snapshots (inputs → typical paths)</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Common-school era</strong>: Bible readings, McGuffey readers → civic voice for some; parochial detours/quiet non-compliance for others.</li>
        <li><strong>Federal Indian boarding schools</strong>: English-only, hair cutting → recorded compliance; clandestine language maintenance/community return.</li>
        <li><strong>Americanization/Progressive reforms</strong>: night schools &amp; civics → “fit worker” exits; enclave preservation via church/mutual aid.</li>
        <li><strong>Jim Crow dual systems</strong>: segregated facilities &amp; industrial curriculum → constrained roles; counter-paths via HBCUs &amp; movement schools.</li>
        <li><strong>Desegregation/backlash &amp; standards</strong>: busing, testing regimes → mixed transitions (assimilation, resistance, exclusion).</li>
      </ul>

      <h2 className="text-xl font-semibold">Why “non-deterministic” matters</h2>
      <p>
        The same input (e.g., English-only) can yield divergent states because <em>identity filters</em> mediate
        meaning. Outputs are the traces of what stabilized; non-determinism is a <em>feature</em> of the system,
        not a modeling error.
      </p>
    </main>
  )
}
