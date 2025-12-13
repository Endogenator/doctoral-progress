/**
 * Integration: Stitching ENDT, XIK-TD, and Belief Space
 * Style aligned to ENDT/XIK pages (cards, borders, spacing)
 * No em dashes
 */

export default function IntegrationPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Integration: Stitching ENDT, XIK-TD, and Belief Space
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          This page shows how the three lenses work together as a single design framework.
          ENDT describes the institutional system that sends signals and records outcomes.
          XIK-TD models the learner loop that transforms experience into knowledge under identity constraints.
          Belief Space captures how communities stabilize shared meanings, anchors, and trajectories.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          Design goal: improve reliability and transfer while lowering hidden costs,
          especially for learners marginalized by current pathways.
        </p>
      </section>

      {/* 0) Vocabulary */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">0) Vocabulary: Fermiate</h2>
        <Definition term="Fermiate (noun)">
          <p>A disciplined, bounded inference step inspired by Enrico Fermi’s estimation style.</p>
          <ul className="list-disc pl-5">
            <li><span className="font-medium">Assumptions</span>: written explicitly in one line.</li>
            <li><span className="font-medium">Estimate</span>: order of magnitude or back of the envelope.</li>
            <li><span className="font-medium">Test</span>: the quickest check available now.</li>
            <li><span className="font-medium">Validity</span>: where the estimate holds and where it breaks.</li>
            <li><span className="font-medium">Next move</span>: one adjacent step if results are promising.</li>
          </ul>
          <p className="text-xs mt-2">Verb: “to fermiate.” Plural: “Fermiates.”</p>
        </Definition>
      </section>

      {/* 1) Why integrate */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Why integrate</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <Card title="System level">
            <p className="text-slate-800">
              ENDT treats schooling as a coordination system.
              Inputs such as policy, tasks, timing, and rituals
              shape which transitions are available to different learners.
              Outcomes diverge because identity and context mediate how signals are received.
            </p>
          </Card>
          <Card title="Learner level" tint>
            <p className="text-slate-800">
              XIK-TD models <span className="font-medium">K = f(X, I, B)</span>.
              Experience is transformed into knowledge through identity acting as an epistemic operator.
              Identity cost, time debt, and translation tax can pull the loop downward.
            </p>
          </Card>
          <Card title="Community level">
            <p className="text-slate-800">
              Belief Space captures shared stabilization.
              Communities converge on focus points such as proof of work and constructor reliability.
              Subjective frames align through dialogue, artifacts, and records.
            </p>
          </Card>
        </div>
      </section>

      {/* 2) How they fit together */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">2) How they fit together</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Interfaces">
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>
                <span className="font-medium">ENDT → XIK-TD</span>.
                Institutional signals become inputs to the learner loop.
                Changing signals and available transitions changes learning conditions.
              </li>
              <li>
                <span className="font-medium">XIK-TD → Belief Space</span>.
                Learner outputs and artifacts enter public records and discourse,
                shifting shared anchors and norms.
              </li>
              <li>
                <span className="font-medium">Belief Space → ENDT</span>.
                Stabilized anchors such as competency transcripts and micro grants
                can be adopted as policy or practice.
              </li>
            </ul>
          </Card>
          <Card title="Design stance" tint>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Work one step away. Use adjacent possible moves and bank gains.</li>
              <li>Publish methods. Constructor recipes with steps, checks, and failure modes.</li>
              <li>Lower hidden costs. Reduce identity threat, time debt, and translation tax.</li>
              <li>Record limits. State validity conditions and failure cases explicitly.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 3) Design principles */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) Design principles</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <Card title="Change signals and transitions">
            <p className="text-slate-800">
              Adjust task sequencing, timing, and exits.
              Replace single high stakes gates with staged proof of work
              and portfolio exits linked to constructor reliability.
            </p>
          </Card>
          <Card title="Engineer the loop" tint>
            <p className="text-slate-800">
              Make frames explicit, lower risk, and scaffold method use.
              Counter example rounds and revision tokens normalize change
              without status loss.
            </p>
          </Card>
          <Card title="Stabilize community anchors">
            <p className="text-slate-800">
              Publish templates for artifacts, run showcases,
              and legitimize competency transcripts
              so new paths become legible to mentors and selectors.
            </p>
          </Card>
        </div>
      </section>

      {/* 4) Worked example */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Worked example: credential path to skill or venture path</h2>
        <p className="mt-2 text-slate-800">
          Many communities anchor opportunity on degrees and rank.
          Integration stitches a parallel path that treats constructor reliability
          and proof of work as primary signals.
          The goal is not replacement, but added entries and exits that reduce exclusion and delay.
        </p>
        {/* rest unchanged */}
      </section>

      {/* 5) Measurement */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">5) Measurement without overclaiming</h2>
        <p className="mt-2 text-slate-800">
          We track observable use, not truth claims.
          Logs and counters indicate feasibility and uptake,
          not causal proof.
        </p>
        {/* rest unchanged */}
      </section>

      {/* 6 and 7 unchanged */}
    </div>
  )
}
function Card({
  title,
  children,
  tint = false,
}: {
  title: string
  children: React.ReactNode
  tint?: boolean
}) {
  return (
    <div className={`rounded-2xl border border-slate-200 p-4 ${tint ? 'bg-slate-50' : ''}`}>
      <p className="font-semibold text-slate-900">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  )
}
function Definition({
  term,
  children,
}: {
  term: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-semibold text-slate-900">{term}</p>
      <div className="mt-2 text-slate-800 text-sm space-y-1">
        {children}
      </div>
    </div>
  )
}
