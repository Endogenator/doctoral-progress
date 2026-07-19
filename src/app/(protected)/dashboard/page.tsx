/**
 * Dashboard — Doctoral Progress
 * Earth-tone palette. No em dashes.
 * Frameworks (XIK-TS, Belief Space, ETCS, Integration, etc.) moved to
 * generative.endogenator.com. This page no longer links to the old
 * (protected)/frameworks/* routes, which were deleted.
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
          This site is my working space for doctoral work in the Leadership
          for Educational Justice program. I am committed to applying my
          analytical lens to that work, but the lens itself now lives
          entirely at{' '}
          <a
            href="https://endogenator.com"
            className="underline hover:text-stone-950"
          >
            endogenator.com
          </a>
          , not here. That separation is deliberate. The ideas developed
          there function as the a priori for what gets built here, the
          starting commitments this research proceeds from.
        </p>
        <p className="mt-2 text-sm text-stone-700">
          The goal here is not polished conclusions. The goal is to make
          development visible, track revisions, and design learning
          systems with lower hidden costs for students who are excluded or
          stratified by current structures.
        </p>
      </section>

      {/* Where the ideas live */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Where the ideas live</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <ExternalLink
            title="generative.endogenator.com"
            href="https://generative.endogenator.com"
            desc="The full theoretical apparatus: Topology, XIK-TS, ETCS, Belief Space, Correctors and Recruiters, Integration, and Generative Coordination itself."
          />
          <QuickLink
            title="Education as a System"
            href="/education-as-a-system"
            desc="Where the dissertation is heading, stated plainly, ahead of where the dissertation itself is allowed to go yet."
          />
          <QuickLink
            title="Pedagogy"
            href="/pedagogy"
            desc="General teaching methods and approaches. Genuinely not yet explored."
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
            desc="Disruption Without Design: Accreditation Reform as a Natural Experiment in Path Dependence."
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

function ExternalLink({
  title,
  desc,
  href,
}: {
  title: string
  desc: string
  href: string
}) {
  return (
    <a
      href={href}
      className="block rounded-2xl border border-stone-300 bg-white p-4 transition hover:bg-stone-100"
    >
      <p className="font-semibold text-stone-900">{title}</p>
      <p className="mt-1 text-sm text-stone-700">{desc}</p>
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