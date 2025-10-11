'use client'

export default function IntegrationPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-5">
      <h1 className="text-3xl font-semibold">ENDT ↔ XIK-TD — Integrated View</h1>
      <p>
        ENDT = macro/system structure; XIK-TD = micro/cognition-identity dynamics. Every schooling event is both:
        institutional inputs become learner information; identities modulate meaning; outputs record what stabilized.
      </p>

      <h2 className="text-xl font-semibold">Map the pieces</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Inputs (Σ)</strong> ↔ <strong>Information</strong>: policies/lessons become info signals.</li>
        <li><strong>States (Q)</strong> ↔ <strong>Filters/Knowledge</strong>: identity filters shape perception and model stabilization.</li>
        <li><strong>Outputs (Γ)</strong> ↔ <strong>Behavior/Records</strong>: evidence of what stabilized.</li>
        <li><strong>Transitions (Δ)</strong> ↔ <strong>Feedback</strong>: steps that co-determine next states and identity updates.</li>
      </ul>

      <h2 className="text-xl font-semibold">Example: English-only policy</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Student A perceives pragmatically → <em>assimilating</em> trajectory.</li>
        <li>Student B perceives identity threat → <em>bicultural</em> trajectory.</li>
        <li>Student C rejects → <em>excluded</em> trajectory.</li>
      </ul>

      <p>
        <strong>Justice requires dual intervention</strong>: redesign institutional inputs (policies/pedagogies) and cultivate
        identity-safe filters (belonging, epistemic elasticity). Measure success by reachability and elasticity, not only compliance.
      </p>
    </main>
  )
}
