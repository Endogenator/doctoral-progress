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
        <p className="mt-3 text-lg">
          This dashboard organizes my projects, courses, and writing.
          The site documents the ongoing development of three connected frameworks:
          ENDT, XIK-TD, and Belief Space.
        </p>
        <p className="mt-2 text-sm">
          The goal is not polished conclusions.
          It is to make thinking visible as it evolves, and to design learning systems
          with lower hidden costs for those excluded by current structures.
        </p>
      </section>

      {/* Quick links */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Quick links</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <QuickLink
            title="ENDT — Education as a Non Deterministic Transducer"
            href="/frameworks/endt"
            desc="System view. How institutional signals and rules shape feasible paths."
          />
          <QuickLink
            title="XIK-TD — Experience, Identity, Knowledge Transformation Domain"
            href="/frameworks/xik-td"
            desc="Learner view. How experience becomes knowledge under identity costs."
          />
          <QuickLink
            title="Belief Space — Designing Exploration and Focus Points"
            href="/frameworks/belief-space"
            desc="Community view. How groups stabilize meaning and shared anchors."
          />
          <QuickLink
            title="Integration — Stitching the three lenses"
            href="/frameworks/integration"
            desc="How system, learner, and community moves fit together."
          />
        </div>
      </section>

      {/* Current courses */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Current courses</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="EDUC 829: Historical Foundations in Education and Social Justice">
            <p>
              Focus on how history, policy, and social movements shaped schooling.
              I am mapping which inputs and rules mattered most in each era using ENDT.
            </p>
          </Card>
          <Card title="EDUC 827: Leadership and Practice in Education" tint>
            <p>
              Practical leadership models.
              I am testing XIK-TD practices that reduce identity costs
              and increase method reliability.
            </p>
          </Card>
          <Card title="EDUC 820A: Writing a Literature Review">
            <p>
              Emphasis on scope control and synthesis.
              This work is building a clean reference trail
              across all three frameworks.
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
              <li>Draft a Belief Space StoryMaps overview.</li>
              <li>Write a short integration paper linking ENDT and XIK-TD.</li>
              <li>Add a small Methods section for I(·), X(·), and B(·).</li>
              <li>Publish a proof of work and constructor recipe template.</li>
            </ul>
          </Card>
          <Card title="Site and usability" tint>
            <ul className="list-disc pl-5 space-y-1">
              <li>Confirm sign-in lands on this dashboard.</li>
              <li>Check print layout and PDF exports.</li>
              <li>Normalize terminology across all framework pages.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Drafts */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Drafts in progress</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Belief Space StoryMaps">
            <p>
              Mapping shared anchors, frames, and focus points.
              Goal is a short, reviewable artifact for mentors.
            </p>
          </Card>
          <Card title="Short paper: ENDT with XIK-TD" tint>
            <p>
              Explains how ENDT changes input architecture
              while XIK-TD models the learner loop.
            </p>
          </Card>
        </div>
      </section>

      {/* Notes */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Notes to self</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Keep language concrete and procedural.</li>
          <li>Design one-step moves and bank gains.</li>
          <li>Lower identity threat, time debt, and translation tax.</li>
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
