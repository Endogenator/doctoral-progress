'use client'

export default function IntegrationPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">ENDT ↔ XIK-TD — Changing Systems & Students Together</h1>
        <p className="text-neutral-700">
          Schooling is a braided system: <strong>ENDT</strong> (institution as a non-deterministic transducer) and
          <strong> XIK-TD</strong> (experience–identity–knowledge at the learner). Improvement means shifting both the
          <em>signals</em> a school emits and the <em>filters/constructors</em> students use to interpret them.
        </p>
      </header>

      {/* 1) Two interlocked models */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1) The Two Interlocked Models</h2>
        <div className="space-y-2">
          <p>
            <strong>ENDT</strong>: <em>E = ⟨Q, Σ, Γ, Δ, I, F⟩</em>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Σ (inputs)</strong>: policies, pedagogy, rituals, language rules, assessment, discipline.</li>
            <li><strong>Q (states)</strong>: learner positions coupling knowledge+identity (assimilating, bicultural, segregated, certified, excluded).</li>
            <li><strong>Γ (outputs)</strong>: records/behaviors (attendance, work products, petitions, walkouts, test results).</li>
            <li><strong>Δ (transitions)</strong>: steps mapping the same input to <em>multiple</em> possible next states (non-deterministic).</li>
            <li><strong>I / F</strong>: institutional entry/exit (legibility as student, graduation, exclusion, certification).</li>
          </ul>
          <p>
            <strong>XIK-TD</strong>: micro loop that shapes what “lands” for a student.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Information → Filter</strong> (beliefs, identity, emotion, load)</li>
            <li><strong>Learning</strong> (inference + social resonance)</li>
            <li><strong>Knowledge</strong> (simulactive, causactive, intersubjective; sometimes fixive/identity-bound)</li>
            <li><strong>Output</strong> (behavior/communication) → <strong>Feedback</strong> (updates filters)</li>
          </ul>
        </div>
      </section>

      {/* 2) Change levers */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Change Levers (School-Side)</h2>
        <p className="text-neutral-700">These are the practical levers that rewrite Σ and reshape Δ:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Language policy</strong>: dual-language / translanguaging norms; public legitimation of home varieties.</li>
          <li><strong>Assessment</strong>: frequent, low-stakes, constructor-focused checks; revision tokens; portfolio exits.</li>
          <li><strong>Task design</strong>: adjacent-possible prompts; counter-example rounds; constructor recipes.</li>
          <li><strong>Discourse & belonging</strong>: identity-safe critique; explicit “changed-my-mind” routines.</li>
          <li><strong>Credentialing</strong>: criteria that value transfer/constructor reliability, not just single-shot tests.</li>
          <li><strong>Discipline/dress</strong>: norms that reduce identity policing; restorative logic for Δ, not exclusion.</li>
        </ul>
      </section>

      {/* 3) Predicted student shifts */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Predicted Student Shifts (XIK-TD)</h2>
        <p className="text-neutral-700">What should change in the learner’s internal loop:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Filter</strong>: higher identity-safety, epistemic openness, working-memory headroom.</li>
          <li><strong>Learning</strong>: more hypothesis-testing, more counter-example generation, more social calibration.</li>
          <li><strong>Knowledge</strong>: migration from fixive belief → simulactive/causactive models with explicit validity conditions.</li>
          <li><strong>Output</strong>: greater revision rate, clearer causal justifications, transfer to new contexts.</li>
        </ul>
      </section>

      {/* 4) Observable outputs & evidence */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4) Observable Outputs & Evidence (Γ)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-neutral-200">
            <thead>
              <tr className="bg-neutral-50">
                <th className="p-2 text-left border-b">Intervention (Σ)</th>
                <th className="p-2 text-left border-b">Predicted XIK-TD shift</th>
                <th className="p-2 text-left border-b">Observable Γ (near)</th>
                <th className="p-2 text-left border-b">Observable Γ (far)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                <td className="p-2 border-t">Dual-language norms + translanguaging</td>
                <td className="p-2 border-t">Filter: ↑ safety & openness; Learning: ↑ participation</td>
                <td className="p-2 border-t">More bidirectional code-switch in discussions; more questions asked</td>
                <td className="p-2 border-t">Transfer gains in reading/writing in both languages; reduced absenteeism</td>
              </tr>
              <tr className="align-top">
                <td className="p-2 border-t">Constructor-focused checks + revision tokens</td>
                <td className="p-2 border-t">Knowledge: shift to causactive models; Output: ↑ revision rate</td>
                <td className="p-2 border-t">Version history shows at least 2 quality-raising revisions per task</td>
                <td className="p-2 border-t">Higher reliability on novel tasks; portfolio artifacts explain causal steps</td>
              </tr>
              <tr className="align-top">
                <td className="p-2 border-t">Identity-safe critique + “changed-my-mind” routine</td>
                <td className="p-2 border-t">Filter: ↓ threat; Learning: ↑ counter-example generation</td>
                <td className="p-2 border-t">Explicit “update logs” in student work; peer comments citing evidence</td>
                <td className="p-2 border-t">Survey: ↑ belonging-in-disagreement; disciplinary referrals ↓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5) Worked examples */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5) Worked Examples</h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Example A — English-Only → Dual-Language</h3>
          <p className="text-neutral-700">
            <strong>System (Σ):</strong> replace English-only with bilingual norms; allow home language in drafts;
            explicit translanguaging moves in lessons.
          </p>
          <p className="text-neutral-700">
            <strong>Student (XIK-TD):</strong> Filter safety ↑; more hypothesis-testing in L1↔L2; model stability grows.
          </p>
          <p className="text-neutral-700">
            <strong>Outputs (Γ):</strong> increased participation; bilingual artifacts; attendance ↑; fewer removals.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Example B — Single-Shot Tests → Revision Portfolios</h3>
          <p className="text-neutral-700">
            <strong>System (Σ):</strong> weekly low-stakes checks mapped to constructor recipes; tokens for revision rounds; portfolio exit.
          </p>
          <p className="text-neutral-700">
            <strong>Student (XIK-TD):</strong> Knowledge migrates from fixive to causactive; explicit validity conditions appear in write-ups.
          </p>
          <p className="text-neutral-700">
            <strong>Outputs (Γ):</strong> version histories; transfer tasks improve; students articulate causal steps.
          </p>
        </div>
      </section>

      {/* 6) Mini “logic of improvement” template */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6) Mini Logic of Improvement (Template)</h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Target</strong>: Which ENDT state distribution (Q) do we want to change?</li>
          <li><strong>Lever</strong> (Σ): Which signal will we change first?</li>
          <li><strong>Hypothesis</strong> (XIK-TD): Which filter/constructor shift do we expect?</li>
          <li><strong>Near evidence</strong> (Γ-near): What should we see this week?</li>
          <li><strong>Far evidence</strong> (Γ-far): What should we see by term’s end?</li>
          <li><strong>Safeguards</strong>: How will we prevent identity threat/exclusion as we change Δ?</li>
        </ol>
      </section>

      {/* 7) Measures you can actually collect */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7) Measures (Simple to Collect)</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Revision rate</strong>: count measurable revisions/task (target ≥2 with quality raise).</li>
          <li><strong>Transfer probe</strong>: weekly new-context item; track reliability, not just correctness.</li>
          <li><strong>Belonging-in-disagreement</strong>: 4-item pulse survey (pre/post per unit).</li>
          <li><strong>Attendance/discipline</strong>: trend lines by subgroup after lever changes.</li>
          <li><strong>Language use</strong>: samples of translanguaging in work + discussion tallies.</li>
        </ul>
      </section>
    </div>
  )
}
