/**
 * XIK-TD — Experience, Identity, Knowledge Transformation Domain
 * Style aligned to ENDT page (cards, borders, spacing)
 */

import { InlineMath, BlockMath } from 'react-katex'

export default function XIKTDPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          XIK-TD: Experience, Identity, Knowledge Transformation Domain
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          XIK-TD is an analytical tool for explaining how people transform experience into knowledge while managing
          identity and risk. It treats learning as a transformation process in which experience passes through
          identity acting as an epistemic operator, stabilizes into knowledge, and then reshapes identity in return.
        </p>
        <p className="mt-2 text-slate-800">
          The aim is to improve teaching, learning, agency creation, and human coordination by understanding how
          identity shapes perception, interpretation, and the construction of knowledge, and by understanding
          what shapes identity itself.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          We use a compact expression <span className="font-medium">K = f(X, I, B)</span> as a legend for clarity,
          not as a mathematical requirement.
        </p>
      </section>

      {/* 0) Origin and naming */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">0) Origin and naming</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">Transformation domain</h3>
            <p className="mt-2 text-slate-800">
              The phrase <span className="font-medium">transformation domain</span> is borrowed from signal analysis,
              where the same signal can be expressed in different domains, such as time or frequency, to reveal
              structure that is hard to see in its original form. XIK-TD applies this idea to learning by treating
              the microdynamics of learning as a transformation of experience into knowledge.
            </p>
            <p className="mt-2 text-slate-800">
              Identity provides the contextual constraints that determine what is amplified, suppressed, or ignored
              during this transformation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Two way identity filter</h3>
            <p className="mt-2 text-slate-800">
              XIK-TD models <span className="font-medium">identity as a two way filter</span> between incoming
              experience and the formation of knowledge as mental models or reference frames. Experience is interpreted
              through current roles, norms, expectations, and stakes.
            </p>
            <p className="mt-2 text-slate-800">
              The resulting knowledge feeds back to adjust what a person notices next, how safe revision feels,
              and which methods feel legitimate to use.
            </p>
            <p className="mt-2 text-sm text-slate-800">
              What looks like a simple lesson is usually a negotiation among attention, emotion, social standing,
              and method. The same prompt can lead to very different learning because filters and stakes differ.
            </p>
          </div>
        </div>
      </section>

      {/* 1) Model at a glance */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Model at a glance</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-4">
            <ul className="list-disc pl-5 space-y-2 text-slate-800">
              <li>
                <span className="font-medium">X(·) Experience process</span>. Structured signals from tasks, media,
                peers, and instruction across time and source.
              </li>
              <li>
                <span className="font-medium">I(·) Identity function</span>. Roles, norms, and stakes that shape
                relevance, perceived risk, and willingness to revise.
              </li>
              <li>
                <span className="font-medium">B(·) Belief operator</span>. Identity linked evaluations that determine
                whether experience is treated as information or dismissed as noise.
              </li>
              <li>
                <span className="font-medium">K</span>. Knowledge stabilized enough to simulate futures, explain
                causes, or coordinate with others across contexts.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Plain loop</h3>
            <p className="mt-2 text-slate-800">
              Information → Filter → Learning → Knowledge → Output → Feedback.
              The loop can spiral upward toward curiosity and transfer, or downward toward withdrawal and surface
              compliance. Identity pressure and time scarcity pull it down. Clear frames and reliable methods pull it up.
            </p>
          </div>
        </div>
      </section>
