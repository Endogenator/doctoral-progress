/**
 * Dashboard — Doctoral Progress
 * Style aligned with ENDT / XIK-TD / Belief Space / Integration pages
 * No em dashes
 */

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Doctoral Progress Dashboard</h1>
        <p className="mt-3 text-lg text-slate-800">
          This dashboard helps me organize my projects, classes, and writing. The site shares how I am developing three connected ideas:
          ENDT, XIK-TD, and Belief Space. I want these pages to show the work as it grows, not just final results.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          My goal is to make learning more reliable and useful, with lower hidden costs for students who are often excluded by
          current systems. The sections below link to the frameworks, list next steps, and track drafts in progress.
        </p>
      </section>

      {/* Quick links */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Quick links</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <QuickLink
            title="ENDT — Education as a Non Deterministic Transducer"
            href="/frameworks/endt"
            desc="System view. How school signals and rules shape paths."
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <QuickLink
            title="XIK-TD — Experience, Identity, Knowledge Transformation Domain"
            href="/frameworks/xik-td"
            desc="Learner view. K = f(X, I, B). How people turn information into knowledge under identity costs."
          />
          <QuickLink
            title="Belief Space — Designing Exploration and Focus Points"
            href="/frameworks/belief-space"
            desc="Community view. How groups align meaning and create shared anchors for action."
          />
          <QuickLink
            title="Integration — Stitching the three lenses"
            href="/frameworks/integration"
            desc="How system, learner, and community moves fit together in practice."
          />
        </div>
      </section>

      {/* Current courses */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">2) Current courses</h2>
        <div className="mt-3 grid gap-6 md:grid-cols-2">
          <Card title="EDUC 829: Historical Foundations in Education and Social Justice">
            <p className="text-slate-800">
              Focus: how history, policy, and social movements shaped schooling. I am connecting course themes to ENDT
              by mapping which inputs and rules mattered most in each era.
            </p>
          </Card>
          <Card title="EDUC 827: Leadership and Practice in Education" tint>
            <p className="text-slate-800">
              Focus: practical leadership models. I am testing XIK-TD practices that reduce identity costs and raise method reliability.
            </p>
          </Card>
          <Card title="EDUC 820A: Writing a Literature Review">
            <p className="text-slate-800">
              Focus: clear synthesis and scope control. I am building a clean reference trail for ENDT, XIK-TD, and Belief Space.
            </p>
          </Card>
        </div>
      </section>

      {/* Next actions */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) Next actions</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Design and writing">
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Build a first StoryMaps draft to visualize Belief Space and how focus points form.</li>
              <li>Draft a short paper on the integration of ENDT and XIK-TD. If it reads well, post it on the site.</li>
              <li>Add a simple Methods section for I(·), X(·), and B(·) with one small diagram each.</li>
              <li>Publish a proof of work template and a one page constructor recipe format.</li>
            </ul>
          </Card>
          <Card title="Site and usability" tint>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Confirm that sign in takes visitors directly to this dashboard.</li>
              <li>Check print layout on all pages. Avoid clipped content.</li>
              <li>Do a quick glossary pass so terms match across pages.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Drafts in progress */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Drafts in progress</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Belief Space StoryMaps">
            <p className="text-slate-800">
              Mapping shared anchors, frames, and how focus points spread. Goal: a simple, scrollable map that a mentor can review quickly.
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800 space-y-1">
              <li>Sketch the sections and the flow first. Keep it short.</li>
              <li>Choose one worked example to anchor the story.</li>
            </ul>
          </Card>
          <Card title="Short paper: ENDT with XIK-TD" tint>
            <p className="text-slate-800">
              A brief write up that explains the link: ENDT changes the input architecture, XIK-TD models the learner loop.
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-800 space-y-1">
              <li>Keep it under 1500 words. Use one figure.</li>
              <li>Post a PDF on the site if the draft holds up.</li>
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
            <li>Reference frames are explained in plain language.</li>
            <li>Cross links among ENDT, XIK-TD, and Belief Space are present.</li>
          </CheckCard>
          <CheckCard title="Evidence and claims" tint>
            <li>No claims without a source or our own data.</li>
            <li>Logs and counters are labeled as instruments, not results.</li>
            <li>Limits and validity conditions are stated on examples.</li>
          </CheckCard>
          <CheckCard title="Access and print">
            <li>Post sign in lands on this dashboard, not the old landing page.</li>
            <li>Print layout uses full width with no clipping.</li>
            <li>PDF export is readable and centered.</li>
          </CheckCard>
        </div>
      </section>

      {/* Research roadmap snapshot */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">6) Research roadmap snapshot</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <RoadmapCard
            title="I(·) Identity function"
            desc="Model how norms and roles shift incentives and costs. Plan: instrument identity salience and credibility effects."
          />
          <RoadmapCard
            title="X(·) Experience process"
            tint
            desc="Treat experience as structured signal across time and source. Plan: attention and memory cost measures."
          />
          <RoadmapCard
            title="B(·) Belief operator"
            desc="Identity weighted priors and high friction attractors. Plan: track shifts from fixed to simulative or causal models."
          />
        </div>
      </section>

      {/* Notes to self */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">7) Notes to self</h2>
        <ul className="list-disc pl-5 text-slate-800 space-y-1">
          <li>Keep language concrete. Use examples and short procedures.</li>
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
      <p className="font-semibold text-slate-900 dark:text-emerald-800">{title}</p>
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
      <p className="font-semibold text-slate-900 dark:text-emerald-800">{title}</p>
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
    <div className={`rounded-2xl border border-slate-800 p-4 ${tint ? 'bg-slate-50' : ''}`}>
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
    <div className={`rounded-2xl border border-slate-800 p-4 ${tint ? 'bg-slate-50' : ''}`}>
      <p className="font-semibold text-slate-900 dark:text-emerald-200">{title}</p>
      <p className="mt-1 text-sm text-slate-800">{desc}</p>
    </div>
  )
}
