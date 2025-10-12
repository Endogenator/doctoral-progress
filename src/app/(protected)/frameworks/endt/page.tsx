'use client'

export default function ENDTPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">ENDT — Education as a Non-Deterministic Transducer</h1>
        <p className="text-neutral-800">
          ENDT treats schooling as an engine that transduces institutional signals into student states and social records.
          The same signal can send different students down different paths, so the system is non-deterministic.
          That indeterminacy is the interface where policy, pedagogy, identity, and power meet.
        </p>
      </header>

      {/* 1) Model at a glance */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1) Model at a glance</h2>
        <p className="text-neutral-800">
          We use short labels to describe parts of the system. Read <strong>E = ⟨Q, Σ, Γ, Δ, I, F⟩</strong> as a compact legend
          that helps us talk precisely, not as a formal proof.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Q (states)</strong>. Positions that couple knowledge with identity, for example assimilating, bicultural, segregated, certified, excluded.</li>
          <li><strong>Σ (inputs)</strong>. Policy and pedagogy signals, for example task design, assessment regimes, discipline, rituals, and use of time and space.</li>
          <li><strong>Γ (outputs)</strong>. Records and behaviors, for example attendance, artifacts, participation, refusals, petitions, walkouts, and scores.</li>
          <li><strong>Δ (transitions)</strong>. The step from one state to the next where the same input can lead to multiple outcomes.</li>
          <li><strong>I / F</strong>. Entry legibility as “student,” and exits such as graduation, certification, or exclusion.</li>
        </ul>
      </section>

      {/* 2) Pedagogy as identity work */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Pedagogy as identity work</h2>
        <p className="text-neutral-800">
          Teaching moves ideas and it also moves identities. It sets who counts, who speaks, and who belongs.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Readers and recitation</strong>. Literacy plus rehearsal of a “proper” civic voice.</li>
          <li><strong>Rituals</strong> such as pledges or assemblies. Encode expectations of belonging and obedience.</li>
          <li><strong>Task and track design</strong>. Decide which methods are practiced and which roles are channeled.</li>
          <li><strong>Assessment</strong>. Define what counts as knowledge, for example single-shot correctness versus method reliability under change.</li>
          <li><strong>Discipline and dress</strong>. Determine how cultural markers are policed and whose comfort is prioritized.</li>
        </ul>
      </section>

      {/* 3) Historical snapshots */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Historical snapshots</h2>
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
              <tr>
                <td className="p-2 border-t font-medium">Common-school era</td>
                <td className="p-2 border-t">Bible or McGuffey readers, recitation, local control</td>
                <td className="p-2 border-t">Civic voice for some, parochial detours or quiet non-compliance for others</td>
              </tr>
              <tr>
                <td className="p-2 border-t font-medium">Federal Indian boarding schools</td>
                <td className="p-2 border-t">English-only, hair cutting, cultural erasure</td>
                <td className="p-2 border-t">Recorded compliance, clandestine language maintenance and community return</td>
              </tr>
              <tr>
                <td className="p-2 border-t font-medium">Americanization and Progressive reforms</td>
                <td className="p-2 border-t">Night schools, civics, vocationalism</td>
                <td className="p-2 border-t">“Fit worker” exits, enclave preservation via church or mutual aid</td>
              </tr>
              <tr>
                <td className="p-2 border-t font-medium">Jim Crow dual systems</td>
                <td className="p-2 border-t">Segregated facilities, industrial curriculum</td>
                <td className="p-2 border-t">Constrained roles, counter-paths via HBCUs and movement schools</td>
              </tr>
              <tr>
                <td className="p-2 border-t font-medium">Desegregation to standards and testing</td>
                <td className="p-2 border-t">Busing, accountability regimes, high-stakes tests</td>
                <td className="p-2 border-t">Mixed trajectories including assimilation, resistance, and exclusion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4) Why non-deterministic */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4) Why non-deterministic</h2>
        <p className="text-neutral-800">
          Identity filters shape meaning. The same input can stabilize different states. This is why “what works”
          usually means “what worked for whom, under which filters, and at what cost.” Improvement must change
          <strong> Σ</strong> as the signals, and <strong>Δ</strong> as the transitions that are possible, and for whom.
        </p>
      </section>

      {/* 5) Externalities and negative impacts */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5) Externalities and negative impacts</h2>
        <p className="text-neutral-800">
          Every lever has side effects. ENDT surfaces harms that are often kept off the ledger.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Displacement effects</strong>. A push for “rigor” can increase withdrawal for students facing identity threat or time scarcity.</li>
          <li><strong>Legibility tax</strong>. Students spend extra effort translating themselves into what the record system recognizes.</li>
          <li><strong>Role lock-in</strong>. Tracking and “fit” language naturalize narrow futures even when knowledge grows.</li>
          <li><strong>Credibility asymmetry</strong>. The same behavior, such as challenge or dissent, reads as leadership for some and defiance for others.</li>
        </ul>
        <p className="text-neutral-800">
          This attention to status, belonging, and role aligns with Identity Economics. In that tradition we treat identity as a function
          <strong> I(·)</strong> that shifts incentives and perceived costs, which changes how inputs are received and which transitions are likely.
        </p>
      </section>

      {/* 6) Practical levers (system-side, revised) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6) Practical levers</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-900">
          <li>
            <strong>Reference-frame training</strong>. Make frames explicit in every unit. What counts as an object, which relations matter,
            and what stays invariant when conditions change. Teach learners to name a frame, shift it, and compare frames without treating
            disagreement as failure.
          </li>
          <li>
            <strong>Assessment</strong>. Use frequent low-stakes checks tied to method reliability. Offer revision tokens. Use portfolio exits
            that value how a result was obtained and whether it transfers after a frame shift.
          </li>
          <li>
            <strong>Task design</strong>. Use adjacent-possible prompts, require counter-example rounds, and publish clear constructor recipes
            with steps, checks, and failure modes so methods travel across frames.
          </li>
          <li>
            <strong>Discourse</strong>. Use identity-safe critique protocols, normalize “changed-my-mind” logs, and give credit for reframing work.
          </li>
          <li>
            <strong>Discipline</strong>. Prefer restorative transitions rather than exclusion. Minimize policing of cultural markers. Treat conflict
            as a chance to reframe rather than a purity test.
          </li>
        </ul>
        <p className="text-neutral-800">
          See XIK-TD for the learner-side reference frames that ENDT inputs must traverse.
        </p>
      </section>

      {/* Evidence intentionally omitted until we have citations or our own data */}
    </div>
  )
}
