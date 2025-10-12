'use client'

import Link from 'next/link'

const cards = [
  {
    title: 'ENDT',
    desc: 'System layer. Signals, states, and non-deterministic transitions.',
    href: '/frameworks/endt'
  },
  {
    title: 'XIK-TD',
    desc: 'Learner loop K = f(X, I, B). Identity function and belief operator.',
    href: '/frameworks/xik-td'
  },
  {
    title: 'Belief Space',
    desc: 'Shared, intersubjective landscape. Frames align to focus points.',
    href: '/frameworks/belief-space'
  },
  {
    title: 'Integration',
    desc: 'Stitching the layers. Design cycle and Pareto checks.',
    href: '/frameworks/integration'
  },
  {
    title: 'References',
    desc: 'Core works and notes for mentors.',
    href: '/references'
  }
]

const nextActions = [
  'Add “Methods” subpage for I(·), X(·), B(·) with simple diagrams.',
  'Draft study design: electricity→computation sequence, outcomes, and logs.',
  'Decide evidence lines we can collect now without overclaiming.'
]

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Doctoral Progress — Overview</h1>
        <p className="text-neutral-800">
          A private workspace to iterate on theory, design, and evidence. Use the cards below to jump into each strand.
        </p>
      </header>

      {/* Quick nav */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="block rounded-2xl border border-neutral-200 p-5 hover:border-neutral-300 hover:bg-neutral-50 transition"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-sm text-neutral-700 mt-1">{c.desc}</p>
          </Link>
        ))}
      </section>

      {/* Next actions */}
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h2 className="text-xl font-semibold">Next actions</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-neutral-900">
            {nextActions.map((a, i) => <li key={i}>{a}</li>)}
          </ol>
        </div>

        {/* Mentor notes placeholder */}
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h2 className="text-xl font-semibold">Mentor feedback (placeholder)</h2>
          <p className="text-neutral-800 mt-2">
            This block will surface comments once we wire up a simple, private feedback form.
            For now, add notes inside each page or share them via your channel of choice.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-neutral-900">
            <li>We will keep feedback private, off search, and access-controlled.</li>
            <li>When ready, we can add per-page comment anchors or a single inbox route.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
