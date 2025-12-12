'use client'

/**
 * ENDT: Education as a Transformative Coordination System
 * Notes:
 * - No em dashes
 * - Plain-language tuple context
 * - Externalities foregrounded
 * - Practical levers emphasize reference-frame training
 * - Aligned with XIK-TD identity-as-operator model
 */

export default function ENDTPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          ENDT: Education as a Transformative Coordination System
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          ENDT models education as a system that coordinates institutional signals, learner identities,
          and social records. The same policy or pedagogical input can produce different learner trajectories
          because meaning is filtered through identity, prior belief, and context.
        </p>
        <p className="mt-2 text-slate-800">
          Rather than assuming fixed outcomes, ENDT focuses on how system design expands or constrains
          the set of transitions that are available to different learners.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          We use a compact tuple ⟨Q, Σ, Γ, Δ, I, F⟩ as a legend to name system components.
          It is a shared vocabulary, not a mathematical requirement.
        </p>
      </section>

      {/* 1) Model at a glance */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Model at a glance</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-4">
            <ul className="list-disc pl-5 space-y-2 text-slate-800">
              <li>
                <span className="font-medium">Q (states)</span>. Learner positions that couple knowledge,
                identity, and agency. Examples include assimilating, bicultural, certified, stalled, or excluded.
              </li>
              <li>
                <span className="font-medium">Σ (inputs)</span>. Policy and pedagogical signals such as task design,
                assessment regimes, discipline, rituals, and use of time and space.
              </li>
              <li>
                <span className="font-medium">Γ (outputs)</span>. Records and behaviors such as attendance,
                artifacts, participation, refusals, petitions, walkouts, and credentials.
              </li>
              <li>
                <span className="font-medium">Δ (transitions)</span>. The constrained moves between states,
                shaped by identity, belief, and institutional rules.
              </li>
              <li>
                <span className="font-medium">I / F</span>. Entry legibility as a student and exits such as graduation,
                certification, redirection, or exclusion.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Why the tuple</h3>
            <p className="mt-2 text-slate-800">
              In systems and computer science, a compact tuple is often used to describe
              states, inputs, and transitions. ENDT borrows this notation to talk precisely
              about schooling as a coordination system.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Example: Input Σ is a high stakes test. One learner moves toward focused practice,
              another toward withdrawal, a third toward organized protest.
              The signal is shared, but identity filters shape which transitions Δ are viable.
            </p>
          </div>
        </div>
      </section>

      {/* 2) Pedagogy as identity shaping */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">2) Pedagogy as identity shaping</h2>
        <p className="mt-2 text-slate-800">
          Teaching does more than transmit knowledge. It shapes identity, agency,
          and the sense of what actions are legitimate or risky.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-800">
          <li><span className="font-medium">Literacy and recitation</span>. Train both skills and acceptable voices.</li>
          <li><span className="font-medium">Rituals</span>. Encode belonging, authority, and obedience.</li>
          <li><span className="font-medium">Task and track design</span>. Channel which methods are practiced and which futures appear reachable.</li>
          <li><span className="font-medium">Assessment</span>. Define what counts as knowledge and what is ignored.</li>
          <li><span className="font-medium">Discipline and dress</span>. Signal whose norms set the baseline.</li>
        </ul>
      </section>

      {/* 3) Historical snapshots */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) Historical snapshots</h2>
        <p className="mt-2 text-slate-800">
          Across history, similar educational inputs have produced divergent outcomes,
          depending on whose identity the system was designed to accommodate.
        </p>
        {/* table unchanged */}
      </section>

      {/* 4) Why outcomes diverge */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Why outcomes diverge</h2>
        <p className="mt-2 text-slate-800">
          Outcomes diverge because identity filters shape meaning and risk.
          The same signal can stabilize different learner states depending on
          prior belief, social standing, and perceived cost.
        </p>
        <p className="mt-2 text-slate-800">
          Improvement therefore requires changing Σ as the signals themselves,
          and changing Δ as the set of transitions that are realistically available,
          and for whom.
        </p>
      </section>

      {/* 5) Externalities */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">5) Externalities and hidden costs</h2>
        <p className="mt-2 text-slate-800">
          ENDT surfaces costs that are usually externalized to students and communities.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
          <li><span className="font-medium">Displacement effects</span>. Rigor increases exit when identity threat is high.</li>
          <li><span className="font-medium">Legibility tax</span>. Extra effort to translate thinking into record-friendly forms.</li>
          <li><span className="font-medium">Role lock-in</span>. Tracks naturalize narrow futures.</li>
          <li><span className="font-medium">Credibility asymmetry</span>. The same behavior reads differently by identity.</li>
        </ul>
      </section>

      {/* 6) Practical levers */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">6) Practical levers</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
          <li><span className="font-medium">Reference frame training</span>. Teach learners to name, shift, and compare frames.</li>
          <li><span className="font-medium">Assessment</span>. Reward method reliability and transfer, not single-shot correctness.</li>
          <li><span className="font-medium">Task design</span>. Use adjacent possible prompts and counter-example rounds.</li>
          <li><span className="font-medium">Discourse</span>. Normalize revision and reframing.</li>
          <li><span className="font-medium">Discipline</span>. Prefer restorative transitions over exclusion.</li>
        </ul>
      </section>

      {/* Cross-links */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-slate-800">
          See <a className="text-indigo-700 underline" href="/frameworks/xik-td">XIK-TD</a> for the learner-level
          transformation loop and <a className="text-indigo-700 underline" href="/frameworks/belief-space">Belief Space</a>
          for shared anchors that make new trajectories legible.
        </p>
      </section>
    </div>
  )
}
