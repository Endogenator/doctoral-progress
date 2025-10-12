'use client'

import ENDTPage from '../frameworks/endt/page'
import XIKTDPage from '../frameworks/xik-td/page'
import BeliefSpacePage from '../frameworks/belief-space/page'
import IntegrationPage from '../frameworks/integration/page'
import Link from 'next/link'

export default function PrintPackPage() {
  const handlePrint = () => window.print()

  return (
    <div className="space-y-6 print:space-y-0">
      {/* Header (hidden on print) */}
      <div className="flex items-center justify-between print:hidden">
        <div>
          <h1 className="text-2xl font-semibold">Print Pack (private)</h1>
          <p className="text-slate-700">
            This page stitches the protected content for PDF export.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100"
          >
            Back to Dashboard
          </Link>
          <button
            onClick={handlePrint}
            className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm text-white hover:bg-indigo-700"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* Cover */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 print:border-0 print:p-0 print:bg-white">
        <h1 className="text-3xl font-semibold">Doctoral Progress — Print Pack</h1>
        <p className="text-slate-700 mt-2">
          ENDT · XIK-TD · Belief Space · Integration
        </p>
        <p className="text-slate-600 mt-1 text-sm">
          (Private export for mentors/committee; not indexed; generated from protected routes.)
        </p>
      </section>

      {/* Each section starts on a new page when printing */}
      <section className="print-break-before rounded-xl border border-slate-200 bg-white p-6 print-card">
        <h2 className="text-2xl font-semibold mb-4">ENDT — Education as a Non-Deterministic Transducer</h2>
        {/* Full-width print wrapper neutralizes inner max-w + mx-auto */}
        <div className="print-full">
          <ENDTPage />
        </div>
      </section>

      <section className="print-break-before rounded-xl border border-slate-200 bg-white p-6 print-card">
        <h2 className="text-2xl font-semibold mb-4">XIK-TD — Experience, Identity, Knowledge</h2>
        <div className="print-full">
          <XIKTDPage />
        </div>
      </section>

      <section className="print-break-before rounded-xl border border-slate-200 bg-white p-6 print-card">
        <h2 className="text-2xl font-semibold mb-4">Belief Space — Exploration & Focus Points</h2>
        <div className="print-full">
          <BeliefSpacePage />
        </div>
      </section>

      <section className="print-break-before rounded-xl border border-slate-200 bg-white p-6 print-card">
        <h2 className="text-2xl font-semibold mb-4">Integration — Linking the Layers</h2>
        <div className="print-full">
          <IntegrationPage />
        </div>
      </section>
    </div>
  )
}
