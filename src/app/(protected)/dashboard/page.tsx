/**
 * Dashboard -- Doctoral Progress
 * Olive green theme, Lora serif headings, parchment base
 * No em dashes
 * Updated March 2026
 */

import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Header */}
      <section className="page-header shadow-sm">
        <h1>Doctoral Progress Dashboard</h1>
        <p className="mt-3 text-lg">
          This site is my working space for building and testing ideas. It documents the ongoing
          development of three connected frameworks: ENDT, XIK-TS, and Belief Space.
        </p>
        <p className="mt-2 text-sm" style={{ color: '#60622e' }}>
          The goal is not polished conclusions. The goal is to make development visible, track
          revisions, and design learning systems with lower hidden costs for students who are
          excluded or stratified by current structures.
        </p>
      </section>

      {/* Quick links */}
      <section className="panel">
        <h2 className="section-heading">Quick links</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <QuickLink
            title="ENDT — Education as a Transformative Coordination System"
            href="/frameworks/endt"
            desc="System view: how institutional signals and rules shape feasible student paths."
          />
          <QuickLink
            title="XIK-TS — Experience, Identity, Knowledge Transformation Space"
            href="/frameworks/xik-td"
            desc="Learner view: how experience becomes knowledge through identity acting as reagent, and how the Transformation Space describes the boundary of what is thinkable and reachable."
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
      <section className="panel">
        <h2 className="section-heading">Course writings</h2>
        <p className="mt-2 text-sm" style={{ color: '#7a6a58' }}>
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
            desc="Social Justice Theory and Practice: in progress."
            muted
          />
          <QuickLink
            title="EDUC 831 paper"
            href="/writings/educ-831"
            desc="Education Law, Policy, and Justice: in progress."
            muted
          />
        </div>
      </section>

      {/* Current courses */}
      <section className="panel">
        <h2 className="section-heading">Current courses</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
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
      </section>

      {/* Active work */}
      <section className="panel">
        <h2 className="section-heading">Active work</h2>
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

/* --- Helpers --- */

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
      className="block rounded-2xl p-4 transition"
      style={
        muted
          ? {
              background: '#ede8de',
              border: '1px solid #d6c8b4',
              opacity: 0.6,
              pointerEvents: 'none',
              cursor: 'default',
            }
          : {
              background: '#fff8ef',
              border: '1px solid #d6c8b4',
            }
      }
    >
      <p style={{ fontWeight: 500, color: '#2c2c1a', fontSize: '14px' }}>{title}</p>
      <p className="mt-1 text-sm" style={{ color: '#7a6a58' }}>{desc}</p>
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
      className="rounded-2xl p-4"
      style={{
        background: tint ? '#f0ebe0' : '#fff8ef',
        border: '1px solid #d6c8b4',
      }}
    >
      <p style={{ fontWeight: 500, color: '#2c2c1a', fontFamily: "'Lora', Georgia, serif" }}>
        {title}
      </p>
      <div className="mt-2 text-sm" style={{ color: '#7a6a58' }}>{children}</div>
    </div>
  )
}
