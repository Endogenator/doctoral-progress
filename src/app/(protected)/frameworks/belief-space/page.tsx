'use client'

export default function BeliefSpacePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Belief Space — Optimizing Exploration</h1>
        <p className="text-neutral-800">
          Borrowing the <em>adjacent possible</em> and ideas from Constructor Theory of Information, treat learning as
          constructing new tasks that become possible in a high-dimensional belief space. Education should maximize
          exploration while stabilizing <strong>knowledge focus points</strong> that remain open to revision.
        </p>
      </header>

      {/* 1) What is a belief space? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1) What Is a Belief Space?</h2>
        <p className="text-neutral-800">
          A conceptual space where positions encode what a learner takes to be true/useful, plus confidence and social
          alignment. Dimensions include identity salience, epistemic openness, emotional payoff, social conformity,
          and perceived utility.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Focus points</strong>: stabilized structures (definitions, methods, laws) with explicit validity conditions.</li>
          <li><strong>Trajectories</strong>: paths learners take as they revise beliefs through tasks/feedback.</li>
          <li><strong>Adjacent possibles</strong>: one-step reachable states via designed prompts or experiences.</li>
        </ul>
      </section>

      {/* 2) Education as exploration design */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Education as Exploration Design</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Seed near moves</strong>: tasks one step away from current beliefs to reduce threat and cost.</li>
          <li><strong>Train constructors</strong>: make methods explicit &mdash; name, steps, failure modes, checks.</li>
          <li><strong>Publish focus points</strong>: state definitions + validity conditions + examples/counter-examples.</li>
          <li><strong>Keep escape hatches</strong>: ensure learners can revise or bypass a focus point without penalty.</li>
          <li><strong>Measure exploration</strong>: track revision rate, transfer, and breadth of visited ideas.</li>
        </ul>
      </section>

      {/* 3) Electricity as a focus point set */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Example — Electricity Focus Points</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-neutral-200">
            <thead>
              <tr className="bg-neutral-50 text-neutral-900">
                <th className="p-2 text-left border-b">Focus Point</th>
                <th className="p-2 text-left border-b">Validity Conditions</th>
                <th className="p-2 text-left border-b">Adjacent Possible (Next Move)</th>
                <th className="p-2 text-left border-b">Escape Hatch</th>
              </tr>
            </thead>
            <tbody className="text-neutral-900">
              <tr>
                <td className="p-2 border-t"><strong>Current conservation</strong></td>
                <td className="p-2 border-t">Closed circuit; steady state; ideal wires.</td>
                <td className="p-2 border-t">Predict current at multiple branch points (series vs. parallel).</td>
                <td className="p-2 border-t">Introduce resistance/heat to test limits; log mismatches.</td>
              </tr>
              <tr>
                <td className="p-2 border-t"><strong>Potential difference</strong></td>
                <td className="p-2 border-t">Defined between two points; measured by voltmeter.</td>
                <td className="p-2 border-t">Explain bulb brightness changes across configurations.</td>
                <td className="p-2 border-t">Consider non-ideal sources; reason about internal resistance.</td>
              </tr>
              <tr>
                <td className="p-2 border-t"><strong>Ohm’s law as local model</strong></td>
                <td className="p-2 border-t">Material behaves ohmically in the tested range.</td>
                <td className="p-2 border-t">Infer unknown R from V–I graph; predict at new V.</td>
                <td className="p-2 border-t">Explore non-ohmic components; note breakdown regions.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4) Pareto-aware goals */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4) Pareto-Aware Goals</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li>Raise <strong>identity safety</strong> <em>and</em> <strong>epistemic openness</strong>.</li>
          <li>Raise <strong>causal accuracy</strong> <em>and</em> <strong>social coordination</strong>.</li>
          <li>Lower <strong>exploration cost</strong> while raising <strong>feedback quality</strong>.</li>
        </ul>
      </section>

      {/* 5) What to measure */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5) What to Measure (Exploration Metrics)</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Exploration breadth</strong>: number of distinct focus points touched per unit.</li>
          <li><strong>Revision rate</strong>: count of meaningful belief updates (with rationale) per task.</li>
          <li><strong>Constructor reliability</strong>: transfer success of a method in new contexts.</li>
          <li><strong>Belonging-in-disagreement</strong>: short pulse survey tied to critique sessions.</li>
        </ul>
      </section>

      {/* 6) Mini design template */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6) Mini Design Template</h2>
        <ol className="list-decimal pl-6 space-y-1 text-neutral-900">
          <li><strong>Start state</strong>: what learners already believe (sample quickly).</li>
          <li><strong>Adjacent prompt</strong>: one move away; explicit success criteria.</li>
          <li><strong>Constructor recipe</strong>: steps, checks, common failure modes.</li>
          <li><strong>Validity conditions</strong>: where the focus point holds; include a counter-example.</li>
          <li><strong>Escape hatches</strong>: safe ways to revise or switch approach.</li>
          <li><strong>Evidence</strong>: the 2–3 metrics you’ll log this week.</li>
        </ol>
      </section>
    </div>
  )
}
