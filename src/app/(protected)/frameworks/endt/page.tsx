'use client'

/**
 * ENDT — Education as a Non-Deterministic Transducer
 * Notes:
 * - No em dashes
 * - Plain-language tuple context
 * - Externalities foregrounded
 * - Practical levers emphasize reference-frame training
 * - Cross-links to XIK-TD and Belief Space
 */

export default function ENDTPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          ENDT — Education as a Non-Deterministic Transducer
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          ENDT treats schooling as an engine that transduces institutional signals into student states and social
          records. The same signal can send different students down different paths, so the system is non-deterministic.
          That indeterminacy sits where policy, pedagogy, identity, and power meet.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          We use a short tuple ⟨Q, Σ, Γ, Δ, I, F⟩ as a compact legend to name the parts of the system. It is a map of
          terms, not a math requirement for readers.
        </p>
      </section>

      {/* 1) Model at a glance */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Model at a glance</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-4">
            <ul className="list-disc pl-5 space-y-2 text-slate-800">
              <li>
                <span className="font-medium">Q (states)</span>. Positions that couple knowledge with identity for
                example assimilating, bicultural, segregated, certified, excluded.
              </li>
              <li>
                <span className="font-medium">Σ (inputs)</span>. Policy and pedagogy signals for example task design,
                assessment regimes, discipline, rituals, and use of time and space.
              </li>
              <li>
                <span className="font-medium">Γ (outputs)</span>. Records and behaviors for example attendance,
                artifacts, participation, refusals, petitions, walkouts, and scores.
              </li>
              <li>
                <span className="font-medium">Δ (transitions)</span>. The step from one state to the next where the same
                input can lead to multiple outcomes.
              </li>
              <li>
                <span className="font-medium">I / F</span>. Entry legibility as student and exits such as graduation,
                certification, or exclusion.
              </li>
            </ul>
          </div>

          {/* Context card */}
          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Context: why the tuple</h3>
            <p className="mt-2 text-slate-800">
              In computer science, a state machine is often summarized with a compact tuple like ⟨Q, Σ, Γ, Δ⟩. We borrow
              that notation as a legend so we can talk precisely about the parts of schooling as a system. The point of
              ENDT is the indeterminacy: the same input does not force one outcome because identity, prior belief, and
              context filter its meaning.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Tiny example: Input Σ is a high stakes test next week. One student moves to focused practice, another to
              quiet withdrawal, a third to organized protest. Same signal, different transitions Δ, different states Q.
            </p>
          </div>
        </div>
      </section>

      {/* 2) Pedagogy as identity work */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">2) Pedagogy as identity work</h2>
        <p className="mt-2 text-slate-800">
          Teaching moves ideas and it also moves identities. It sets who counts, who speaks, and who belongs.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-800">
          <li>
            <span className="font-medium">Readers and recitation</span>. Literacy plus rehearsal of a proper civic
            voice.
          </li>
          <li>
            <span className="font-medium">Rituals</span> such as pledges or assemblies. Encode expectations of belonging
            and obedience.
          </li>
          <li>
            <span className="font-medium">Task and track design</span>. Decide which methods are practiced and which
            roles are channeled.
          </li>
          <li>
            <span className="font-medium">Assessment</span>. Define what counts as knowledge for example single shot
            correctness versus method reliability under change.
          </li>
          <li>
            <span className="font-medium">Discipline and dress</span>. Determine how cultural markers are policed and
            whose comfort is prioritized.
          </li>
        </ul>
      </section>

      {/* 3) Historical snapshots */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) Historical snapshots</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border border-slate-200">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="p-2 text-left border-b">Period</th>
                <th className="p-2 text-left border-b">Key inputs Σ</th>
                <th className="p-2 text-left border-b">Typical state paths Q</th>
              </tr>
            </thead>
            <tbody className="text-slate-900">
              <tr>
                <td className="p-2 border-t">Common school era</td>
                <td className="p-2 border-t">Bible or McGuffey readers, recitation, local control</td>
                <td className="p-2 border-t">
                  Civic voice for some, parochial detours or quiet non compliance for others
                </td>
              </tr>
              <tr>
                <td className="p-2 border-t">Federal Indian boarding schools</td>
                <td className="p-2 border-t">English only, hair cutting, cultural erasure</td>
                <td className="p-2 border-t">
                  Recorded compliance, clandestine language maintenance and community return
                </td>
              </tr>
              <tr>
                <td className="p-2 border-t">Americanization and Progressive reforms</td>
                <td className="p-2 border-t">Night schools, civics, vocationalism</td>
                <td className="p-2 border-t">Fit worker exits, enclave preservation through church or mutual aid</td>
              </tr>
              <tr>
                <td className="p-2 border-t">Jim Crow dual systems</td>
                <td className="p-2 border-t">Segregated facilities, industrial curriculum</td>
                <td className="p-2 border-t">Constrained roles, counter paths via HBCUs and movement schools</td>
              </tr>
              <tr>
                <td className="p-2 border-t">Desegregation to standards and testing</td>
                <td className="p-2 border-t">Busing, accountability regimes, high stakes tests</td>
                <td className="p-2 border-t">Mixed trajectories including assimilation, resistance, and exclusion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4) Why non-deterministic */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Why non-deterministic</h2>
        <p className="mt-2 text-slate-800">
          Identity filters shape meaning. The same input can stabilize different states. This is why what works usually
          means what worked for whom, under which filters, and at what cost. Improvement must change Σ as the signals and
          Δ as the transitions that are possible, and for whom.
        </p>
      </section>

      {/* 5) Externalities and negative impacts */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">5) Externalities and negative impacts</h2>
        <p className="mt-2 text-slate-800">
          Every lever has side effects. ENDT surfaces harms that are often kept off the ledger.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
          <li>
            <span className="font-medium">Displacement effects</span>. A push for rigor can increase withdrawal for
            students facing identity threat or time scarcity.
          </li>
          <li>
            <span className="font-medium">Legibility tax</span>. Students spend extra effort translating themselves into
            what the record system recognizes.
          </li>
          <li>
            <span className="font-medium">Role lock in</span>. Tracking and fit language can naturalize narrow futures
            even when knowledge grows.
          </li>
          <li>
            <span className="font-medium">Credibility asymmetry</span>. The same behavior for example challenge or
            dissent reads as leadership for some and defiance for others.
          </li>
        </ul>
        <div className="mt-4 rounded-2xl border border-slate-200 p-4 bg-indigo-50/60">
          <p className="text-sm text-slate-900">
            Identity Economics framing: we treat identity as a function <span className="font-medium">I(·)</span> that
            shifts incentives and perceived costs. That shift changes how inputs are received and which transitions are
            likely. This informs research instruments and design choices.
          </p>
        </div>
      </section>

      {/* 6) Practical levers */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">6) Practical levers</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
          <li>
            <span className="font-medium">Reference frame training</span> (priority). Make frames explicit in every
            unit. What counts as an object, which relations matter, and what stays invariant when conditions change.
            Teach learners to name a frame, shift it, and compare frames without treating disagreement as failure.
          </li>
          <li>
            <span className="font-medium">Assessment</span>. Use frequent low stakes checks tied to method reliability.
            Offer revision tokens. Use portfolio exits that value how a result was obtained and whether it transfers
            after a frame shift.
          </li>
          <li>
            <span className="font-medium">Task design</span>. Use adjacent possible prompts, require counter example
            rounds, and publish clear constructor recipes with steps, checks, and failure modes so methods travel across
            frames.
          </li>
          <li>
            <span className="font-medium">Discourse</span>. Use identity safe critique protocols, normalize changed my
            mind logs, and give credit for reframing work.
          </li>
          <li>
            <span className="font-medium">Discipline</span>. Prefer restorative transitions rather than exclusion.
            Minimize policing of cultural markers. Treat conflict as a chance to reframe rather than a purity test.
          </li>
        </ul>
      </section>

      {/* Cross-links */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-slate-800">
          See <a className="text-indigo-700 underline" href="/frameworks/xik-td">XIK-TD</a> for the learner side loop
          and <a className="text-indigo-700 underline" href="/frameworks/belief-space">Belief Space</a> for how shared
          anchors make new trajectories legible.
        </p>
      </section>
    </div>
  )
}
