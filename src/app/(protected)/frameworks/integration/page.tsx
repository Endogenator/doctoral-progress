/**
 * Integration — Stitching ENDT, XIK-TD, and Belief Space
 * Style aligned to ENDT/XIK pages (cards, borders, spacing)
 * No em dashes
 */

export default function IntegrationPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Integration — Stitching ENDT, XIK-TD, and Belief Space
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          This page shows how the three lenses work together. ENDT describes the institutional system that sends
          signals and records outcomes. XIK-TD models the learner loop that turns experience into knowledge under
          identity constraints. Belief Space captures how communities stabilize shared meanings and focus points.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          Goal: design changes that improve reliability and transfer while lowering hidden costs, especially for
          learners marginalized by current pathways.
        </p>
      </section>

      {/* 1) Why integrate */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Why integrate</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <Card title="System level">
            <p className="text-slate-800">
              ENDT treats schooling as a non deterministic transducer. Inputs such as policy, tasks, timing, and
              rituals can yield different states for different learners. Design work must alter both signals and
              feasible transitions.
            </p>
          </Card>
          <Card title="Learner level" tint>
            <p className="text-slate-800">
              XIK-TD models K = f(X, I, B). Experience passes through identity weighted belief filters to stabilize
              knowledge that guides action. Identity costs and time debt can pull the loop down.
            </p>
          </Card>
          <Card title="Community level">
            <p className="text-slate-800">
              Belief Space is shared and intersubjective. Communities stabilize focus points like proof of work and
              constructor reliability. Subjective frames can align through dialogue, shared tasks, and records.
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
              <li><span className="font-medium">ENDT → XIK-TD</span>. System signals become inputs to the loop. Change the signals and available transitions to change learning conditions.</li>
              <li><span className="font-medium">XIK-TD → Belief Space</span>. Outputs and artifacts feed public records and discourse, shifting community focus points and norms.</li>
              <li><span className="font-medium">Belief Space → ENDT</span>. Stabilized anchors such as competency transcripts and micro grants can be adopted as system policy or practice.</li>
            </ul>
          </Card>
          <Card title="Design stance" tint>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Work one step away. Use adjacent possible moves and bank gains.</li>
              <li>Publish methods. Constructor recipes with steps, checks, and failure modes.</li>
              <li>Privilege low hidden cost paths. Reduce identity threat, time debt, and translation tax.</li>
              <li>Record limits. State validity conditions and failure cases as a norm.</li>
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
              Adjust task sequencing, timing, and exits. Replace single high stakes gates with staged proof of work and
              portfolio exits linked to constructor reliability.
            </p>
          </Card>
          <Card title="Engineer the loop" tint>
            <p className="text-slate-800">
              Make frames explicit, lower risk, and scaffold method use. Use counter example rounds and revision tokens
              to normalize change without status loss.
            </p>
          </Card>
          <Card title="Stabilize community anchors">
            <p className="text-slate-800">
              Publish templates for artifacts, run showcases, and legitimize competency transcripts so new paths become
              legible to mentors and selectors.
            </p>
          </Card>
        </div>
      </section>

      {/* 4) Worked example — credential first → skill or venture path */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Worked example — credential path to skill or venture path</h2>
        <p className="mt-2 text-slate-800">
          Many communities anchor opportunity on degrees and rank. We stitch a parallel path that treats constructor
          reliability and proof of work as primary signals. The goal is not to replace degrees. It is to add exits and
          entries that reduce exclusion and delay.
        </p>

        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <Card title="ENDT move">
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Replace one capstone with a four week sequence of adjacent small bets.</li>
              <li>Enable portfolio or competency exits with clear validity conditions.</li>
              <li>Add micro grant and apprenticeship lanes with transparent criteria.</li>
            </ul>
          </Card>
          <Card title="XIK-TD move" tint>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Teach the constructor recipe and failure modes. Log reliability evidence.</li>
              <li>Run one paid or testimonial micro project to produce a proof of work entry.</li>
              <li>Reflect on identity costs, time debt, and translation tax. Adjust scope accordingly.</li>
            </ul>
          </Card>
          <Card title="Belief Space move">
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Adopt shared anchors: proof of work template, constructor reliability standard, small bet norm.</li>
              <li>Hold monthly showcases to stabilize meaning and reduce the credibility gap.</li>
              <li>Encourage cross group endorsements to bridge networks for excluded learners.</li>
            </ul>
          </Card>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border border-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <Th>Focus point</Th>
                <Th>Signal</Th>
                <Th>Validity conditions</Th>
                <Th>Adjacent move</Th>
              </tr>
            </thead>
            <tbody>
              <Tr cells={[
                'Proof of work entry',
                'Artifact with usage or client quote',
                'Method published, reproducible, limits stated',
                'Add one user or paying client',
              ]}/>
              <Tr cells={[
                'Constructor reliability',
                'Pass rate across attempts',
                'Steps, checks, and failure modes verified by a second person',
                'Peer teaches the recipe, logs result',
              ]}/>
              <Tr cells={[
                'Small bet venture',
                'Paid micro project or measurable trial',
                'Time boxed, capped risk, explicit success metric',
                'Pilot a $100–$500 engagement or barter for credible testimonial',
              ]}/>
              <Tr cells={[
                'Competency transcript',
                'Portfolio mapped to constructors',
                'Each entry has evidence and limits, cross referenced to tasks',
                'Convert two class artifacts to constructor entries',
              ]}/>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5) Measurement without overclaiming */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">5) Measurement without overclaiming</h2>
        <p className="mt-2 text-slate-800">
          We track what we can observe directly and label limits clearly. No claims are made without sources or our own data.
          The items below are logs or counters, not findings.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Process logs">
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Constructor in use and validity conditions per task.</li>
              <li>Adjacent move made and next move proposed.</li>
              <li>Identity cost notes and translation work done.</li>
            </ul>
          </Card>
          <Card title="Simple counters" tint>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Number of proof of work entries with third party evidence.</li>
              <li>Number of peer verified constructor runs.</li>
              <li>Number of small bet trials that reached success signal.</li>
            </ul>
          </Card>
        </div>
        <p className="mt-3 text-sm text-slate-800">
          These instruments let us see whether design changes are being used and whether they are feasible at low cost.
        </p>
      </section>

      {/* 6) Next actions */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">6) Next actions</h2>
        <ul className="mt-2 list-disc pl-5 text-slate-800 space-y-1">
          <li>Add a small Methods subsection for I(·), X(·), and B(·) with one diagram each.</li>
          <li>Draft a study design for the credential to skill or venture sequence with clear logs and counters.</li>
          <li>Publish the proof of work template and a one page constructor recipe format.</li>
          <li>Schedule one monthly showcase and invite two external mentors for cross group validation.</li>
        </ul>
      </section>

      {/* 7) Cross links */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">7) Cross links</h2>
        <p className="text-slate-800">
          See <a className="text-indigo-700 underline" href="/frameworks/endt">ENDT</a> for system architecture,
          <a className="text-indigo-700 underline" href="/frameworks/xik-td"> XIK-TD</a> for the learner loop,
          and <a className="text-indigo-700 underline" href="/frameworks/belief-space"> Belief Space</a> for shared anchors.
        </p>
      </section>
    </div>
  )
}

/* --- Presentational helpers (match ENDT/XIK style) --- */
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
      <p className="font-semibold">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-3 py-2 text-left text-slate-700 font-semibold border-b border-slate-200">
      {children}
    </th>
  )
}

function Tr({ cells }: { cells: string[] }) {
  return (
    <tr className="border-t border-slate-200">
      {cells.map((c, i) => (
        <td key={i} className="align-top px-3 py-3 text-slate-800">{c}</td>
      ))}
    </tr>
  )
}
