'use client'

export default function IntegrationPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Integration — Linking ENDT, XIK-TD, and Belief Space</h1>
        <p className="text-neutral-800">
          These frameworks address different layers of the same phenomenon. ENDT describes the institutional signal
          system and its non-deterministic state transitions. XIK-TD describes the learner’s adaptive algorithm that
          turns experience into knowledge under identity and risk. Belief Space describes the shared, intersubjective
          landscape in which frames align and focus points stabilize.
        </p>
        <p className="text-neutral-800">
          Together they support design work aimed at <strong>Pareto improvements</strong>: raising identity safety and
          epistemic openness, causal accuracy and coordination capacity, while reducing exploration cost.
        </p>
      </header>

      {/* 1) How the parts fit */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1) How the parts fit</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-neutral-200">
            <thead>
              <tr className="bg-neutral-50 text-neutral-900">
                <th className="p-2 text-left border-b w-1/3">Layer</th>
                <th className="p-2 text-left border-b w-1/3">What it models</th>
                <th className="p-2 text-left border-b w-1/3">Design levers</th>
              </tr>
            </thead>
            <tbody className="text-neutral-900">
              <tr>
                <td className="p-2 border-t font-medium">ENDT (system)</td>
                <td className="p-2 border-t">Institutional signals Σ, outputs Γ, and non-deterministic transitions Δ between student states Q.</td>
                <td className="p-2 border-t">Task architecture, assessment regimes, discourse protocols, disciplinary pathways.</td>
              </tr>
              <tr>
                <td className="p-2 border-t font-medium">XIK-TD (learner)</td>
                <td className="p-2 border-t">Micro-loop K = f(X, I, B): experience X(·), identity function I(·), belief operator B(·).</td>
                <td className="p-2 border-t">Reference-frame training, constructor recipes, adjacent-possible prompts, revision tokens.</td>
              </tr>
              <tr>
                <td className="p-2 border-t font-medium">Belief Space (shared)</td>
                <td className="p-2 border-t">Emergent, intersubjective topology of focus points and trajectories; frame alignment over time.</td>
                <td className="p-2 border-t">Public validity conditions, counter-example rounds, common language for frames and limits.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-800">
          In short: <strong>ENDT</strong> alters the signal architecture; <strong>XIK-TD</strong> explains learner responses to those signals; 
          <strong> Belief Space</strong> shows how subjective frames align into shared anchors.
        </p>
      </section>

      {/* 2) Design cycle */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Design cycle (one turn)</h2>
        <ol className="list-decimal pl-6 space-y-2 text-neutral-900">
          <li><strong>Map the path</strong> in ENDT terms: which inputs Σ hit which learners, and what exits or exclusions are likely.</li>
          <li><strong>Specify the loop</strong> with XIK-TD: name the target frame, the constructor recipe, and the expected migration of belief type.</li>
          <li><strong>Place the focus point</strong> in Belief Space: state validity conditions, adjacent moves, and escape hatches.</li>
          <li><strong>Anticipate externalities</strong>: identity pressure, time debt, translation tax, credibility gaps. Add counter-moves.</li>
          <li><strong>Run and log</strong>: collect artifacts and short change-notes; compare the observed trajectory with the intended one.</li>
          <li><strong>Pareto check</strong>: did identity safety and openness rise together; did causal accuracy and coordination rise together; did exploration cost fall.</li>
        </ol>
      </section>

      {/* 3) Formal hooks */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Formal hooks for research</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-900">
          <li>
            <strong>I(·) Identity function</strong> from Identity Economics: modifies perceived costs and incentives by category and norm, shaping Δ in ENDT and the
            learner’s loop in XIK-TD.
          </li>
          <li>
            <strong>X(·) Experience process</strong>: structured signals with timing, attention cost, and source credibility; supports causal attributions for loop updates.
          </li>
          <li>
            <strong>B(·) Belief operator</strong>: filters and updates propositions with identity-weighted priors and load limits; allows high-friction attractors for Fixive Beliefs.
          </li>
        </ul>
        <p className="text-neutral-800">
          The research plan is to formalize <strong>X</strong> and <strong>B</strong> while operationalizing <strong>I</strong> via measurable role prescriptions and status dynamics,
          then estimate effects on Δ and on observed trajectories in Belief Space.
        </p>
      </section>

      {/* 4) Example: electricity → computation as a stitched design */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4) Example: electricity → computation (stitched)</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-900">
          <li><strong>ENDT</strong>: replace single-shot labs with adjacent-possible sequences that culminate in gate composition; publish portfolio exits.</li>
          <li><strong>XIK-TD</strong>: teach a voltage↔truth-value encoding; constructor recipes for NOT, AND, OR; compose a half-adder; predict via tables, then build.</li>
          <li><strong>Belief Space</strong>: add new focus points (threshold, truth table, state); log counter-examples; state validity conditions and next adjacent move.</li>
        </ul>
      </section>

      {/* 5) Accountability without premature metrics */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5) Accountability without premature metrics</h2>
        <p className="text-neutral-800">
          Evidence lines will be added when we can cite sources or our own data. Until then, we document design intent,
          externality counter-moves, and observed trajectories in transparent logs rather than claiming universal “what works.”
        </p>
      </section>
    </div>
  )
}
