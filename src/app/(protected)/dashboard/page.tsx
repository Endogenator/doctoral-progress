/**
 * Dashboard — Doctoral Progress
 * Style aligned with ENDT / XIK-TD / Belief Space pages
 * No em dashes
 */

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Doctoral Progress Dashboard</h1>
        <p className="mt-3 text-lg text-slate-800">
          This workspace tracks the development of three linked frameworks and the research program that connects them.
          The goal is to increase reliability and transfer of learning while lowering hidden costs for learners who are often excluded.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          Use the quick links below to jump to pages. The sections that follow list next actions, drafts in flight, and publishing steps.
        </p>
      </section>

      {/* Quick links */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Quick links</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <QuickLink title="ENDT — Education as a Non Deterministic Transducer" href="/frameworks/endt"
            desc="System view. Change signals and feasible transitions." />
          <QuickLink title="XIK-TD — Experience, Identity, Knowledge Transformation Domain" href="/frameworks/xik-td"
            desc="Learner loop. K = f(X, I, B). Identity weighted filters and LaTeX formulas." />
          <QuickLink title="Belief Space — Designing Exploration and Focus Points" href="/frameworks/belief-space"
            desc="Community view. Shared anchors and subjective frames." />
          <QuickLink title="Integration — Stitching the three lenses" href="/frameworks/integration"
            desc="How system, learner, and community moves align." />
        </div>
      </section>

      {/* Next actions */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">2) Next actions</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Design and writing">
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Add a small Methods subsection for I(·), X(·), and B(·) with one diagram each.</li>
              <li>Draft a study design for the credential to skill or venture sequence with clear logs and counters.</li>
              <li>Publish the proof of work template and a one page constructor recipe format.</li>
              <li>Schedule one monthly showcase and invite two external mentors for cross group validation.</li>
            </ul>
          </Card>
          <Card title="Site and usability" tint>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Confirm access flow lands signed in users directly on this dashboard.</li>
              <li>Print layout check on all pages. Avoid clipped content and confirm A4 or Letter as needed.</li>
              <li>Glossary pass across pages for consistent terms and capitalization.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Drafts in progress */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) Drafts in progress</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Identity utility section (Akerlof and Kranton)">
            <p className="text-slate-800">
              Added canonical function and narrowed learning utility with KaTeX. Next, connect weights to instruments and logs.
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800 space-y-1">
              <li>Define identity salience and translation tax items.</li>
              <li>Specify estimation plan for β and λ using small trials.</li>
            </ul>
          </Card>
          <Card title="Belief Space alignment moves" tint>
            <p className="text-slate-800">
              Focus points, adjacent possible design, and competency transcript anchors are drafted.
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800 space-y-1">
              <li>Add one worked artifact as a proof of work example.</li>
              <li>Draft facilitator notes for monthly showcase sessions.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Access and domain */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Access and domain</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Current status">
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Protected app routes are live behind sign in.</li>
              <li>Post sign in redirect goes to dashboard.</li>
              <li>Site is not indexed. Keep visibility limited to invited accounts.</li>
            </ul>
          </Card>
          <Card title="Domain mapping" tint>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Primary: <span className="font-medium">doctorate.endogenator.com</span></li>
              <li>CNAME points to Vercel. Change only if provider or project changes.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Publishing checklist */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">5) Publishing checklist</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <CheckCard title="Structure">
            <li>Headings scan well and are consistent across pages.</li>
            <li>Reference frames are defined in plain language.</li>
            <li>Cross links among ENDT, XIK-TD, and Belief Space are present.</li>
          </CheckCard>
          <CheckCard title="Evidence and claims" tint>
            <li>No claims without a source or our own data.</li>
            <li>Logs and counters are labeled as instruments, not results.</li>
            <li>Limits and validity conditions are stated on examples.</li>
          </CheckCard>
          <CheckCard title="Access and print">
            <li>Post sign in lands on dashboard and not the old landing page.</li>
            <li>Print layout uses full width with no clipping.</li>
            <li>PDF export looks legible and centered.</li>
          </CheckCard>
        </div>
      </section>

      {/* Research roadmap snapshot */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">6) Research roadmap snapshot</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <RoadmapCard title="I(·) Identity function"
            desc="Model how norms and roles shift incentives and costs. Plan: instrument identity salience and credibility effects." />
          <RoadmapCard title="X(·) Experience process" tint
            desc="Treat experience as structured signal across time and source. Plan: attention and memory cost measures." />
          <RoadmapCard title="B(·) Belief operator"
            desc="Identity weighted priors and high friction attractors. Plan: track shifts from fixed to simulative or causal models." />
        </div>
      </section>

      {/* Notes to self */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">7) Notes to self</h2>
        <ul className="list-disc pl-5 text-slate-800 space-y-1">
          <li>Keep language concrete. Prefer examples and short procedures over abstractions.</li>
          <li>Design one step moves. Bank gains and record limits.</li>
          <li>Lower hidden costs. Reduce identity threat, time debt, and translation tax.</li>
        </ul>
      </section>
    </div>
  )
}

/* --- Presentational helpers --- */
function QuickLink({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a
      href={href}
      className="block rounded-2xl border border-slate-200 p-4 bg-white hover:border-indigo-300 hover:bg-slate-50 transition"
    >
      <p className="font-semibold text-slate-900 dark:text-emerald-200">{title}</p>
      <p className="mt-1 text-sm text-slate-800">{desc}</p>
    </a>
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
      <p className="font-semibold text-slate-900 dark:text-emerald-200">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function CheckCard({
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
      <p className="font-semibold text-slate-900 dark:text-emerald-200">{title}</p>
      <ul className="mt-2 list-disc pl-5 text-slate-800 space-y-1">{children}</ul>
    </div>
  )
}

function RoadmapCard({
  title,
  desc,
  tint = false,
}: {
  title: string
  desc: string
  tint?: boolean
}) {
  return (
    <div className={`rounded-2xl border border-slate-200 p-4 ${tint ? 'bg-slate-50' : ''}`}>
      <p className="font-semibold text-slate-900 dark:text-emerald-200">{title}</p>
      <p className="mt-1 text-sm text-slate-800">{desc}</p>
    </div>
  )
}

