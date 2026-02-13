/**
 * Dashboard — Doctoral Progress
 * Earth-tone palette
 * Style aligned with ENDT / XIK-TD / Belief Space / Integration pages
 * No em dashes
 */

import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-stone-800">
      {/* Header */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
          Doctoral Progress Dashboard
        </h1>
        <p className="mt-3 text-lg text-stone-800">
          This site is my working space for building and testing ideas. It documents the ongoing
          development of three connected frameworks: ENDT, XIK-TD, and Belief Space.
        </p>
        <p className="mt-2 text-sm text-stone-700">
          The goal is not polished conclusions. The goal is to make development visible, track
          revisions, and design learning systems with lower hidden costs for students who are
          excluded or stratified by current structures.
        </p>
      </section>

      {/* Quick links */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Quick links</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <QuickLink
            title="ENDT — Education as a Non-Deterministic Transducer"
            href="/frameworks/endt"
            desc="System view: how institutional signals and rules shape feasible student paths."
          />
          <QuickLink
            title="XIK-TD — Experience, Identity, Knowledge Transformation Domain"
            href="/frameworks/xik-td"
            desc="Learner view: how experience becomes knowledge under identity costs and risk."
          />
          <QuickLink
            title="Belief Space — Designing Exploration and Focus Points"
            href="/frameworks/belief-space"
            desc="Community view: how groups stabilize meaning using shared anchors and norms."
          />
          <QuickLink
            title="Integration — Stitching the three lenses"
            href="/frameworks/integration"
            desc="How system, learner, and community moves fit together in practice."
          />
        </div>
      </section>

      {/* Writings */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Course writings</h2>
        <p className="mt-2 text-sm text-stone-700">
          These papers are course-specific. They sometimes touch my frameworks, but they are not
          dissertation chapters. I am posting them to document development and invite feedback.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <QuickLink
            title="EDUC 827 paper"
            href="/writings/educ-827"
            desc="Leadership as Alignment Verification: meaning, drift, and correction in organizations."
          />
          <QuickLink
            title="EDUC 829 paper"
            href="/writings/educ-829"
            desc="The Belief in Schooling: how national disruptions reshaped educational purpose, 1890–1958."
          />
        </div>
      </section>

      {/* Current courses */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Current courses</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="EDUC 829: Historical Foundations in Education and Social Justice">
            <p>
              I am tracing how disruptions (war, depression, migration, policy shifts) reshaped what
              Americans believed schooling was for. I use ENDT to map which inputs and rules mattered
              most in each period, and who benefited or lost out.
            </p>
          </Card>

          <Card title="EDUC 827: Leadership and Practice in Education" tint>
            <p>
              I am modeling leadership as a process of meaning reconstruction and correction.
              This connects to XIK-TD because the same message produces different learning depending on
              identity, incentives, and local norms.
            </p>
          </Card>

          <Card title="EDUC 820: Writing a Literature Review">
            <p>
              This is the infrastructure course. The goal is scope control and synthesis, so the work
              can support dissertation-level claims later without overreaching.
            </p>
          </Card>
        </div>
      </section>

      {/* Active work */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Active work</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Belief Space StoryMaps (in progress)">
            <p>
              I am learning to use StoryMaps to visualize Belief Space. The goal is to make shared
              anchors, reference points, and community meaning easier to inspect and discuss.
            </p>
          </Card>

          <Card title="Paper draft (maybe publish)" tint>
            <p>
              I am writing a paper that ties the frameworks together and clarifies what I can claim now,
              what I am still developing, and what evidence would actually count as progress.
            </p>
          </Card>
        </div>
      </section>

      {/* Next actions */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Next actions</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Design and writing">
            <ul className="list-disc pl-5 space-y-1">
              <li>Draft a Belief Space StoryMaps overview that is short and reviewable.</li>
              <li>Write a short integration explainer linking ENDT and XIK-TD in concrete terms.</li>
              <li>Add a small Methods page for I(·), X(·), and B(·) with simple diagrams.</li>
              <li>Publish a proof-of-work template and a constructor recipe template.</li>
            </ul>
          </Card>

          <Card title="Site and usability" tint>
            <ul className="list-disc pl-5 space-y-1">
              <li>Confirm sign-in lands on this dashboard (no extra landing step).</li>
              <li>Check print layout and PDF export behavior.</li>
              <li>Keep terminology consistent across framework pages and writings.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Notes */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Notes to self</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Keep language concrete and procedural.</li>
          <li>Prefer one-step moves, then bank gains.</li>
          <li>Reduce identity threat, time debt, and translation tax.</li>
        </ul>
      </section>
    </div>
  )
}

/* --- Presentational helpers --- */

function QuickLink({
  title,
  desc,
  href,
}: {
  title: string
  desc: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-stone-300 p-4 bg-white hover:bg-stone-100 transition"
    >
      <p className="font-semibold text-stone-900">{title}</p>
      <p className="mt-1 text-sm text-stone-700">{desc}</p>
    </Link>
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
    <div
      className={`rounded-2xl border border-stone-300 p-4 ${
        tint ? 'bg-amber-50' : 'bg-white'
      }`}
    >
      <p className="font-semibold text-stone-900">{title}</p>
      <div className="mt-2 text-stone-700">{children}</div>
    </div>
  )
}
