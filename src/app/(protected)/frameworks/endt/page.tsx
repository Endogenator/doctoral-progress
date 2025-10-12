'use client'

export default function ENDTPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">ENDT — Education as a Non-Deterministic Transducer</h1>
        <p className="text-neutral-800">
          ENDT models schooling as a system that <em>transduces</em> inputs (policies, pedagogies, rituals) into outputs
          (records, behaviors, identities). Because the same input can produce different learner states, the system is
          <strong> non-deterministic</strong>.
        </p>
      </header>

      {/* 1) Model */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1) Model (words, not equations)</h2>
        <p className="text-neutral-800">
          Let <strong>E = ⟨Q, Σ, Γ, Δ, I, F⟩</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Q (states)</strong>: learner positions coupling knowledge + identity (assimilating, bicultural, segregated, certified, excluded).</li>
          <li><strong>Σ (inputs)</strong>: policy/pedagogy signals (language rules, task design, assessment, discipline, rituals).</li>
          <li><strong>Γ (outputs)</strong>: records &amp; behaviors (attendance, products, participation, petitions, walkouts, test scores).</li>
          <li><strong>Δ (transitions)</strong>: mappings from the same input to <em>multiple</em> next states (the non-deterministic core).</li>
          <li><strong>I / F</strong>: institutional boundaries—entry legibility as “student” and exits (graduation, certification, exclusion).</li>
        </ul>
      </section>

      {/* 2) How pedagogy doubles as identity work */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Pedagogy as Identity Work</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Readers &amp; recitation</strong>: literacy + rehearsal of a “proper” civic voice.</li>
          <li><strong>Rituals</strong> (pledge, assemblies): encode belonging/obedience expectations.</li>
          <li><strong>Language policy</strong>: English-only → assimilation pressure; bilingual/translanguaging → pluralism with local variation.</li>
          <li><strong>Task/track design</strong>: which constructors are practiced and which roles are channeled.</li>
          <li><strong>Assessment</strong>: what counts as knowledge (single-shot correctness vs. constructor reliability).</li>
          <li><strong>Discipline/dress</strong>: how cultural markers are policed.</li>
        </ul>
      </section>

      {/* 3) Period snapshots */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Historical Snapshots (Σ → typical Q paths)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-neutral-200">
            <thead>
              <tr className="bg-neutral-50 text-neutral-900">
                <th className="p-2 text-left border-b">Period</th>
                <th className="p-2 text-left border-b">Key inputs (Σ)</th>
                <th className="p-2 text-left border-b">Typical state paths (Q)</th>
              </tr>
            </thead>
            <tbody className="text-neutral-900">
              <tr className="align-top">
                <td className="p-2 border-t font-medium">Common-school era</td>
                <td className="p-2 border-t">Bible/McGuffey readers; recitation; local control</td>
                <td className="p-2 border-t">Civic voice for some; parochial detours / quiet non-compliance for others</td>
              </tr>
              <tr className="align-top">
                <td className="p-2 border-t font-medium">Federal Indian boarding schools</td>
                <td className="p-2 border-t">English-only; hair cutting; cultural erasure</td>
                <td className="p-2 border-t">Recorded compliance; clandestine language maintenance &amp; community return</td>
              </tr>
              <tr className="align-top">
                <td className="p-2 border-t font-medium">Americanization / Progressive reforms</td>
                <td className="p-2 border-t">Night schools; civics; vocationalism</td>
                <td className="p-2 border-t">“Fit worker” exits; enclave preservation via church/mutual aid</td>
              </tr>
              <tr className="align-top">
                <td className="p-2 border-t font-medium">Jim Crow dual systems</td>
                <td className="p-2 border-t">Segregated facilities; industrial curriculum</td>
                <td className="p-2 border-t">Constrained roles; counter-paths via HBCUs &amp; movement schools</td>
              </tr>
              <tr className="align-top">
                <td className="p-2 border-t font-medium">Desegregation → standards/testing</td>
                <td className="p-2 border-t">Busing; accountability regimes; high-stakes tests</td>
                <td className="p-2 border-t">Mixed trajectories: assimilation, resistance, exclusion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4) Why non-deterministic matters */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4) Why Non-Deterministic?</h2>
        <p className="text-neutral-800">
          Identity filters mediate meaning, so the same Σ (e.g., English-only) can push different learners toward divergent Q.
          Non-determinism is a <em>feature</em> of the institutional system, not a modeling mistake. Improvement work must
          therefore change both Σ (the signals) and Δ (how transitions are made possible).
        </p>
      </section>

      {/* 5) Practical levers (system-side) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5) Practical Levers (System-Side)</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Language</strong>: bilingual/translanguaging norms; public legitimation of home varieties.</li>
          <li><strong>Assessment</strong>: frequent low-stakes checks; revision tokens; portfolio exit tied to constructor reliability.</li>
          <li><strong>Task design</strong>: adjacent-possible prompts; counter-example rounds; explicit constructor recipes.</li>
          <li><strong>Discourse</strong>: identity-safe critique; celebrate “changed-my-mind” logs.</li>
          <li><strong>Discipline</strong>: restorative Δ rather than exclusion; minimize policing of cultural markers.</li>
        </ul>
      </section>

      {/* 6) Evidence you can track (outputs Γ) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6) Evidence You Can Track (Outputs Γ)</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Revision rate</strong>: at least 2 quality-raising revisions per task.</li>
          <li><strong>Transfer probe</strong>: weekly new-context item—track reliability.</li>
          <li><strong>Belonging-in-disagreement</strong>: short pulse survey per unit.</li>
          <li><strong>Attendance/discipline</strong>: subgroup trend shifts after lever changes.</li>
          <li><strong>Language use</strong>: translanguaging in artifacts + discussion tallies.</li>
        </ul>
      </section>
    </div>
  )
}
