/**
 * Integration: Stitching ETCS, XIK-TS, and Belief Space
 * ENDT renamed to ETCS throughout.
 * Sections 4 and 5 filled with real content.
 * No em dashes.
 */

export default function IntegrationPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Integration: Stitching ETCS, XIK-TS, and Belief Space
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          This page shows how the three lenses work together as a single design framework.
          ETCS describes the institutional system that sends signals and records outcomes.
          XIK-TS models the learner loop that transforms experience into knowledge through
          identity acting as a reagent, and describes the Transformation Space in which
          the transfer function of that process becomes visible.
          Belief Space captures how communities stabilize shared meanings, anchors, and trajectories.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          Design goal: improve reliability and transfer while lowering hidden costs,
          especially for learners whose Transformation Space has been structurally constrained
          by current institutional pathways.
        </p>
      </section>

      {/* 0) Vocabulary */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">0) Vocabulary: Fermiate</h2>
        <Definition term="Fermiate (noun)">
          <p>A disciplined, bounded inference step inspired by Enrico Fermi's estimation style.</p>
          <ul className="list-disc pl-5">
            <li><span className="font-medium">Assumptions</span>: written explicitly in one line.</li>
            <li><span className="font-medium">Estimate</span>: order of magnitude or back of the envelope.</li>
            <li><span className="font-medium">Test</span>: the quickest check available now.</li>
            <li><span className="font-medium">Validity</span>: where the estimate holds and where it breaks.</li>
            <li><span className="font-medium">Next move</span>: one adjacent step if results are promising.</li>
          </ul>
          <p className="text-xs mt-2">Verb: "to fermiate." Plural: "Fermiates."</p>
        </Definition>
      </section>

      {/* 1) Why integrate */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Why integrate</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <Card title="System level">
            <p className="text-slate-800">
              ETCS treats schooling as a coordination system.
              Inputs such as policy, tasks, timing, and rituals
              shape which transitions are available to different learners.
              Outcomes diverge because identity and context mediate how signals are received,
              and the institution cannot observe the full internal state that determines
              how any given signal is processed.
            </p>
          </Card>
          <Card title="Learner level" tint>
            <p className="text-slate-800">
              XIK-TS models <span className="font-medium">K = f(X, I)</span>.
              Experience is transformed into knowledge through identity acting as a reagent.
              The Transformation Space describes the boundary of what is thinkable and reachable
              at any given moment -- the higher-level abstraction that makes the transfer
              function of the identity system visible.
            </p>
          </Card>
          <Card title="Community level">
            <p className="text-slate-800">
              Belief Space captures shared stabilization.
              Communities converge on focus points such as proof of work and constructor reliability.
              Subjective frames align through dialogue, artifacts, and records. What a community
              treats as legitimate knowledge shapes which Transformation Spaces are socially
              supported and which are isolated.
            </p>
          </Card>
        </div>
      </section>

      {/* 2) How they fit together */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">2) How they fit together</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Interfaces">
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>
                <span className="font-medium">ETCS to XIK-TS</span>.
                Institutional signals become inputs to the learner loop.
                Changing signals and available transitions changes the conditions
                under which the ontological-to-epistemic transformation can occur.
              </li>
              <li>
                <span className="font-medium">XIK-TS to Belief Space</span>.
                Learner outputs and artifacts enter public records and discourse,
                shifting shared anchors and norms. Expanded Transformation Spaces
                eventually reshape what the community treats as legitimate knowledge.
              </li>
              <li>
                <span className="font-medium">Belief Space to ETCS</span>.
                Stabilized anchors such as competency transcripts and proof-of-work
                records can be adopted as policy or practice, changing the institutional
                signals that shape future transformation conditions.
              </li>
            </ul>
          </Card>
          <Card title="Design stance" tint>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Work one step away. Use adjacent possible moves and bank gains.</li>
              <li>Publish methods. Constructor recipes with steps, checks, and failure modes.</li>
              <li>Lower hidden costs. Reduce identity threat, time debt, and translation tax.</li>
              <li>Record limits. State validity conditions and failure cases explicitly.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 3) Design principles */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) Design principles</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <Card title="Change signals and transitions">
            <p className="text-slate-800">
              Adjust task sequencing, timing, and exits.
              Replace single high-stakes gates with staged proof of work
              and portfolio exits linked to constructor reliability.
              New signals delivered through unchanged transition structures
              reproduce the same exclusions.
            </p>
          </Card>
          <Card title="Engineer the loop" tint>
            <p className="text-slate-800">
              Make frames explicit, lower risk, and scaffold method use.
              Counter-example rounds and revision tokens normalize change
              without status loss. Design for productive identity dissonance
              within systems that provide sufficient support for synthesis to occur.
            </p>
          </Card>
          <Card title="Stabilize community anchors">
            <p className="text-slate-800">
              Publish templates for artifacts, run showcases,
              and legitimize competency transcripts
              so new paths become legible to mentors and selectors.
              A Transformation Space that has no community anchor remains
              invisible to the people who could validate and extend it.
            </p>
          </Card>
        </div>
      </section>

      {/* 4) Worked example */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Worked example: the credential path and the parallel path</h2>
        <p className="mt-2 text-slate-800">
          Many communities anchor opportunity on degrees and institutional rank. A credential
          functions as a Belief Space anchor: it signals to selectors that a person has passed
          through a recognized coordination system and been certified as output. The problem is
          not that credentials exist. The problem is that credential-as-only-signal excludes
          learners whose Transformation Space expanded through routes the institution did not
          design or observe.
        </p>
        <p className="mt-3 text-slate-800">
          Integration points toward a parallel path. Rather than replacing the credential system,
          it adds entries and exits that treat constructor reliability and proof of work as
          primary signals alongside institutional records. A person who built something real,
          documented the method, and can explain where it holds and where it breaks has
          demonstrated transformation. The framework makes that demonstration legible to
          communities that currently have no vocabulary for it.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="What the credential path does well">
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Provides a legible, intersubjective signal across contexts.</li>
              <li>Reduces selector uncertainty by standardizing the coordination record.</li>
              <li>Creates a community of shared reference that lowers coordination costs.</li>
            </ul>
          </Card>
          <Card title="What the parallel path adds" tint>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Makes transformation visible when the institution did not observe it.</li>
              <li>Reduces legibility tax for learners whose knowledge arrived through non-standard routes.</li>
              <li>Expands the Belief Space anchor set so more transformation trajectories are socially recognizable.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 5) Measurement */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">5) Measurement without overclaiming</h2>
        <p className="mt-2 text-slate-800">
          The framework does not produce a measurement instrument. It produces a diagnostic
          vocabulary. The distinction matters. A measurement instrument claims to quantify
          a latent variable. A diagnostic vocabulary names what to look for and where to look.
        </p>
        <p className="mt-3 text-slate-800">
          What is observable are outputs at the ETCS level: attendance, credentials, artifacts,
          participation patterns, attrition rates by learner identity category, time-to-completion
          distributions. These are not measures of the Transformation Space. They are symptoms
          of coordination conditions. A high attrition rate at a particular transition point
          is evidence that the transition is misaligned with the identity architecture of the
          learners reaching it. It does not tell you why, or for whom specifically, or what
          to change first.
        </p>
        <p className="mt-3 text-slate-800">
          The XIK-TS level is not directly observable. The Transformation Space of a given
          learner at a given moment cannot be measured from the outside. What can be observed
          are proxies: willingness to revise, transfer across contexts, ability to name and
          shift frames, tolerance for productive dissonance. These proxies are imperfect and
          context-dependent. The framework is honest about that.
        </p>
        <p className="mt-3 text-slate-800">
          Fermiates are the appropriate epistemic tool here. Make the assumption explicit.
          Estimate the order of magnitude. Identify the quickest available check. State where
          the estimate holds and where it breaks. Move one step. That is the level of claim
          the framework supports.
        </p>
      </section>

      {/* Cross-links */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-slate-800">
          See{' '}
          <a className="text-indigo-700 underline" href="/frameworks/etcs">ETCS</a>{' '}
          for the institutional coordination system,{' '}
          <a className="text-indigo-700 underline" href="/frameworks/xik-ts">XIK-TS</a>{' '}
          for the learner-level transformation loop, and{' '}
          <a className="text-indigo-700 underline" href="/frameworks/belief-space">Belief Space</a>{' '}
          for how communities stabilize shared meaning.
        </p>
      </section>

    </div>
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
      <p className="font-semibold text-slate-900">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function Definition({
  term,
  children,
}: {
  term: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-semibold text-slate-900">{term}</p>
      <div className="mt-2 text-slate-800 text-sm space-y-1">
        {children}
      </div>
    </div>
  )
}
