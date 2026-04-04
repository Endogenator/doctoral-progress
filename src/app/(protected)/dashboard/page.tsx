/**
 * Dashboard — Doctoral Progress
 * Earth-tone palette
 * ETCS replaces ENDT throughout.
 * Courses updated: 820 A/B/C, 830, 831 current. 827, 829 completed.
 * Writing links: 827, 829 active. 830, 831 in progress (muted).
 * No em dashes.
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
          development of three connected frameworks: ETCS, XIK-TS, and Belief Space.
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
            title="ETCS — Education as a Transformative Coordination System"
            href="/frameworks/etcs"
            desc="System view: how institutional signals and coordination conditions shape feasible student paths."
          />
          <QuickLink
            title="XIK-TS — Experience, Identity, Knowledge Transformation Space"
            href="/frameworks/xik-ts"
            desc="Learner view: how experience becomes knowledge through identity acting as a reagent."
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
          <QuickLink
            title="EDUC 830 paper"
            href="/writings/educ-830"
            desc="What the System Is Actually Doing: Capital, Identity, and the Self-Perpetuating Logic of Curricular Gatekeeping."
          />
          <QuickLink
            title="EDUC 831 paper"
            href="/writings/educ-831"
            desc="Education Law, Policy, and Justice: in progress."
            muted
          />
        </div>
      </section>

      {/* Current and completed courses */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Courses</h2>

        <h3 className="mt-6 text-lg font-semibold text-stone-800">Current</h3>
        <div className="mt-3 grid gap-6 md:grid-cols-2">
          <Card title="EDUC 820 (A/B/C): Writing a Literature Review">
            <p>
              The literature review sequence, running across three terms. I am building the
              infrastructure for dissertation-level synthesis: search execution, source management,
              and a scripted Google Sheets workbook that automates bibliography organization.
              The work is methodological as much as it is topical.
            </p>
          </Card>

          <Card title="EDUC 830: Social Justice Theory and Practice" tint>
            <p>
              Running through March 21. I am working through Young, Love, and related frameworks
              not to adopt them wholesale but to understand their internal logic, their explanatory
              reach, and where they break down. That analysis is part of building something more
              causally rigorous.
            </p>
          </Card>

          <Card title="EDUC 831: Education Law, Policy, and Justice">
            <p>
              Running through April. I am tracing how constitutional rights, policy frames, and
              institutional structures interact, using a running Signature Case simulation as the
              applied thread. The course uses law as a lens for leadership judgment under ambiguity,
              which maps usefully onto systems thinking about constraint and transition.
            </p>
          </Card>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-stone-800">Completed</h3>
        <div className="mt-3 grid gap-6 md:grid-cols-2">
          <Card title="EDUC 827: Leadership and Practice in Education">
            <p>
              Modeled leadership as a process of meaning reconstruction and correction.
              Connected to XIK-TS because the same message produces different learning
              depending on identity, incentives, and local norms.
            </p>
          </Card>

          <Card title="EDUC 829: Historical Foundations in Education and Social Justice" tint>
            <p>
              Traced how disruptions including war, depression, migration, and policy shifts
              reshaped what Americans believed schooling was for. Used ETCS to map which
              inputs and rules mattered most in each period and who benefited or lost out.
            </p>
          </Card>
        </div>
      </section>

      {/* Active work */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Active work</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card title="Writing in progress">
            <p>
              Drafting across multiple fronts. Course papers for 830 and 831 are in development.
              Longer framework writing is ongoing in parallel.
            </p>
          </Card>

          <Card title="Project in design" tint>
            <p>
              A project is in early design. Not ready to describe yet.
            </p>
          </Card>

          <Card title="Blog: coming soon">
            <p>
              A blog is in development. It will be a space for shorter, more direct writing
              outside the constraints of course formats.
            </p>
          </Card>
        </div>
      </section>

    </div>
  )
}

/* --- Presentational helpers --- */

function QuickLink({
  title,
  desc,
  href,
  muted = false,
}: {
  title: string
  desc: string
  href: string
  muted?: boolean
}) {
  return (
    <Link
      href={href}
      className={`block rounded-2xl border border-stone-300 p-4 transition ${
        muted
          ? 'bg-stone-100 hover:bg-stone-200 opacity-60 cursor-default pointer-events-none'
          : 'bg-white hover:bg-stone-100'
      }`}
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
