'use client'

export default function XIKTDPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">XIK-TD — Experience–Identity–Knowledge (Transformation Domain)</h1>
        <p className="text-neutral-800">
          XIK-TD explains the <strong>micro-dynamics</strong> of how people turn information into knowledge while
          protecting identity. “Truth” often behaves like a stabilized attractor in a high-dimensional belief space,
          maintained by cognitive, emotional, and social feedback loops.
        </p>
      </header>

      {/* 1) Core loop */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1) Core Loop</h2>
        <ol className="list-decimal pl-6 space-y-1 text-neutral-900">
          <li><strong>Information</strong>: signals encountered (instruction, peers, media, tasks).</li>
          <li><strong>Filter</strong>: beliefs, identity salience, emotion, cognitive load, social risk.</li>
          <li><strong>Learning</strong>: inference, analogy, simulation, social calibration.</li>
          <li><strong>Knowledge</strong>: stabilized models (see types below) with conditions of validity.</li>
          <li><strong>Output</strong>: behavior, artifact, communication.</li>
          <li><strong>Feedback</strong>: update to filters (belief revision, identity reconciliation, confidence).</li>
        </ol>
      </section>

      {/* 2) Knowledge types */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Knowledge Types</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Simulactive</strong>: runs forward in imagination to test consequences (design, strategy, futures).</li>
          <li><strong>Causactive</strong>: repeatable cause–effect models with manipulable variables (science, engineering).</li>
          <li><strong>Intersubjective</strong>: shared social models coordinating groups (norms, law, civic frames).</li>
          <li><strong>Fixive belief</strong>: identity-stabilizing commitments that resist counter-evidence.</li>
        </ul>
        <p className="text-neutral-800">
          Students often hold <em>mixtures</em>. Instruction should migrate fixive beliefs toward simulactive/causactive
          models when relevant, while keeping identity safety intact.
        </p>
      </section>

      {/* 3) Identity as catalyst */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Identity as a Catalytic Constraint</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Acceptance gate</strong>: ideas that violate identity get down-weighted or reinterpreted.</li>
          <li><strong>Effort allocation</strong>: identity-congruent topics receive more attention and persistence.</li>
          <li><strong>Group resonance</strong>: beliefs that signal belonging are amplified in discourse.</li>
        </ul>
        <p className="text-neutral-800">
          The goal is not to eliminate identity, but to <strong>expand its elasticity</strong>: belonging while revising.
        </p>
      </section>

      {/* 4) Classroom levers (micro) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4) Classroom Levers (Micro)</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Adjacent-possible prompts</strong>: one-step extensions that reduce threat &amp; load.</li>
          <li><strong>Constructor recipes</strong>: name the method; practice to reliability; vary contexts; compress to a 1-page summary.</li>
          <li><strong>Identity-safe critique</strong>: separate person from claim; require evidence-based counter-examples.</li>
          <li><strong>Revision tokens</strong>: structured opportunities to revise artifacts and update logs (“what changed &amp; why”).</li>
        </ul>
      </section>

      {/* 5) What to measure */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5) What to Measure (Micro Evidence)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-neutral-200">
            <thead>
              <tr className="bg-neutral-50 text-neutral-900">
                <th className="p-2 text-left border-b">Signal</th>
                <th className="p-2 text-left border-b">Indicator</th>
              </tr>
            </thead>
            <tbody className="text-neutral-900">
              <tr>
                <td className="p-2 border-t">Filter elasticity</td>
                <td className="p-2 border-t">Student logs of belief updates; willingness to generate counter-examples.</td>
              </tr>
              <tr>
                <td className="p-2 border-t">Constructor reliability</td>
                <td className="p-2 border-t">Transfer tasks using the same method in a new context (success rate).</td>
              </tr>
              <tr>
                <td className="p-2 border-t">Revision behavior</td>
                <td className="p-2 border-t">≥2 quality-raising revisions per major task with explicit “why.”</td>
              </tr>
              <tr>
                <td className="p-2 border-t">Belonging-in-disagreement</td>
                <td className="p-2 border-t">Brief pulse survey pre/post unit; debrief notes on disagreements.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6) Example: Electricity concept */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6) Worked Example — Electricity</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Information</strong>: circuit tasks, diagrams, meter readings, safety norms.</li>
          <li><strong>Filter</strong>: prior “electricity is used up” belief; identity (fear/vocation interest); peer norms.</li>
          <li><strong>Learning</strong>: test predictions with parallel vs. series circuits; reason about current/voltage; simulate outcomes.</li>
          <li><strong>Knowledge</strong>: shift to a <em>causactive</em> model (conservation; current paths; potential difference) with validity conditions.</li>
          <li><strong>Output</strong>: annotated diagrams; meter logs; explanation that generalizes to new components.</li>
          <li><strong>Feedback</strong>: transfer probe—predict behavior when a branch is removed; update log reflects the change.</li>
        </ul>
      </section>
    </div>
  )
}
