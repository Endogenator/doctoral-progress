/**
 * XIK-TD — Experience, Identity, Knowledge Transformation Domain
 * Style aligned to ENDT page (cards, borders, spacing)
 * No em dashes
 */

import { InlineMath, BlockMath } from 'react-katex'

export default function XIKTDPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          XIK-TD — Experience, Identity, Knowledge Transformation Domain
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          XIK-TD is an analytical tool for explaining how a person turns information into knowledge while managing
          identity and risk. It treats learning as a transformation process in which experience passes through an
          identity weighted belief filter, stabilizes into knowledge, and then reshapes the filter in return.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          We use a compact expression <span className="font-medium">K = f(X, I, B)</span> to label the parts. It is a
          legend for clarity, not a math requirement.
        </p>
      </section>

      {/* 0) Origin and naming */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">0) Origin and naming</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">Transformation Domain</h3>
            <p className="mt-2 text-slate-800">
              The phrase <span className="font-medium">Transformation Domain</span> is borrowed from signal analysis,
              where the same signal can be expressed in different domains for example time or frequency to reveal
              structure that is hard to see in the original form. XIK-TD applies this idea to learning. It treats the
              microdynamics of learning as a transformation of experience into knowledge, with the identity context
              acting like a filter that changes what passes through and what gets amplified.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Two way identity filter</h3>
            <p className="mt-2 text-slate-800">
              XIK-TD models <span className="font-medium">identity as a two way filter</span> between incoming
              information and the formation of knowledge as mental models or reference frames. Information is interpreted
              through current roles, norms, and stakes. The resulting knowledge then feeds back to adjust what a person
              pays attention to next, how safe a revision feels, and which methods feel legitimate to use.
            </p>
            <p className="mt-2 text-sm text-slate-800">
              What looks like a simple lesson is usually a negotiation among attention, emotion, social standing, and
              method. The same prompt can create very different learning because filters and stakes differ.
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
                <span className="font-medium">I(·) Identity function</span>. Norms, roles, and stakes that shift
                incentives and perceived costs. This function modifies what is noticed and how safe change feels.
              </li>
              <li>
                <span className="font-medium">B(·) Belief operator</span>. Filters and priors that shape interpretation,
                including high friction attractors for fixed beliefs.
              </li>
              <li>
                <span className="font-medium">K</span>. Knowledge stabilized enough to simulate, explain, or coordinate
                with others and to survive a frame shift.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Plain loop</h3>
            <p className="mt-2 text-slate-800">
              Information → Filter → Learning → Knowledge → Output → Feedback. The loop can spiral upward toward
              curiosity and transfer, or downward toward withdrawal and surface compliance. Identity pressure and time
              scarcity pull it down. Clear frames and reliable methods pull it up.
            </p>
          </div>
        </div>
      </section>

      {/* 2) The loop */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">2) The loop</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {[
            { t: 'Information', d: 'Signals from instruction, peers, media, and tasks.' },
            { t: 'Filter', d: 'Beliefs, identity salience, emotion, cognitive load, and perceived social risk.' },
            { t: 'Learning', d: 'Inference, analogy, mental simulation, and social calibration.' },
            { t: 'Knowledge', d: 'Stabilized models with conditions of validity across contexts.' },
            { t: 'Output', d: 'Behavior, artifacts, and communication that express the model in use.' },
            { t: 'Feedback', d: 'Updates to filters and confidence from results and social response.' },
          ].map((card) => (
            <div key={card.t} className="rounded-2xl border border-slate-200 p-4">
              <p className="font-semibold">{card.t}</p>
              <p className="text-sm text-slate-800 mt-1">{card.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3) Knowledge types we target */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) Knowledge types we target</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {[
            {
              t: 'Intersubjective',
              d: 'Coordinate with others using shared rules and roles. Meaning adjusts as people adjust to one another.',
            },
            { t: 'Simulactive', d: 'Run ideas forward in imagination to anticipate outcomes and test frames.' },
            {
              t: 'Causactive',
              d: 'Explain cause and effect, control variables, and predict failure modes. Often anchored by physical or social regularities.',
            },
            {
              t: 'Fixive Belief',
              d: 'A high friction attractor in identity space that resists counter evidence until safety and method are in place.',
            },
          ].map((card) => (
            <div key={card.t} className="rounded-2xl border p-4 border-slate-200">
              <p className="font-semibold">{card.t}</p>
              <p className="text-sm text-slate-800 mt-1">{card.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-800">
          Instruction aims to migrate Fixive Beliefs toward Simulactive and Causactive models when the domain requires
          it, without an identity cost that shuts down participation.
        </p>
      </section>

      {/* 3a) Identity utility function (Akerlof and Kranton) */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3a) Identity utility function (Akerlof and Kranton)</h2>

        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {/* Canonical form */}
          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">Canonical form</h3>
            <p className="mt-2 text-slate-800">
              In identity economics, a person’s utility includes a term for identity: how well actions align with the
              norms and meanings of the groups they identify with.
            </p>
            <div className="mt-3 rounded bg-slate-50 p-3">
              <BlockMath math={'U_i = u_i(a_i, a_{-i}, x_i) + I_i\\big(a_i, a_{-i};\\, C_i, N_{C_i}\\big)'} />
            </div>
            <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-1">
              <li><span className="font-medium"><InlineMath math={'a_i'} /></span>: the person’s action or method choice.</li>
              <li><span className="font-medium"><InlineMath math={'a_{-i}'} /></span>: actions of others that affect identity payoffs.</li>
              <li><span className="font-medium"><InlineMath math={'x_i'} /></span>: personal characteristics or endowments.</li>
              <li><span className="font-medium"><InlineMath math={'C_i'} /></span>: social category or role the person identifies with.</li>
              <li><span className="font-medium"><InlineMath math={'N_{C_i}'} /></span>: norms and prescriptions for that category.</li>
              <li>
                <span className="font-medium"><InlineMath math={'I_i(\\cdot)'} /></span>:
                positive when behavior fits identity prescriptions, negative when it violates them,
                and shaped by what others do.
              </li>
            </ul>
          </div>

          {/* Our narrowing for XIK-TD */}
          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Our narrowing for XIK-TD</h3>
            <p className="mt-2 text-slate-800">
              We narrow utility to the <span className="font-medium">use of knowledge types</span> and their value in
              navigating the world and society. The identity term focuses on how safe or costly it feels to adopt and
              use certain methods and models in context.
            </p>
            <div className="mt-3 rounded bg-white p-3 overflow-x-auto">
              <BlockMath
                math={String.raw`
            \begin{aligned}
            U_i^{\text{learn}} \;=\;&\ \beta_R\,\mathrm{Reliability}(K)
            \;+\;\beta_T\,\mathrm{Transfer}(K)
            \;+\;\beta_C\,\mathrm{Coordination}(K) \\
            &-\;\lambda_I\,\mathrm{IdentityCost}\!\big(a_i;\, I(\cdot)\big)
            \;-\;\lambda_T\,\mathrm{TimeCost}
            \;-\;\lambda_{\mathrm{Tr}}\,\mathrm{TranslationTax}
            \end{aligned}
            `}
              />
            </div>

            <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-1">
              <li><span className="font-medium">K</span>: knowledge in use, by type (Simulactive, Causactive, Intersubjective).</li>
              <li><span className="font-medium">Reliability, Transfer, Coordination</span>: benefits of using K to act, generalize, and work with others.</li>
              <li><span className="font-medium">IdentityCost</span>: penalties when a method threatens standing, belonging, or role expectations.</li>
              <li><span className="font-medium">TranslationTax</span>: effort to convert thinking into the register the record system rewards.</li>
            </ul>
          </div>
        </div>

        {/* How we will operationalize */}
        <div className="mt-6 rounded-2xl border border-slate-200 p-4">
          <h3 className="text-lg font-semibold">Operational plan</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-800 space-y-1">
            <li>Define lightweight instruments for <span className="font-medium">identity salience</span>, perceived social risk, and <span className="font-medium">translation tax</span>.</li>
            <li>Log the <span className="font-medium">method in use</span> and the <span className="font-medium">knowledge type</span> it yields on each task.</li>
            <li>Estimate benefit weights (β) and cost weights (λ) from small classroom or apprenticeship trials.</li>
            <li>Use <span className="font-medium">I(·)</span> to model how norms and roles shift the costs and benefits of adopting better methods.</li>
          </ol>
          <p className="mt-3 text-sm text-slate-800">
            This reframes learning choices as utility guided under identity constraints. Our interventions aim to raise the
            benefit of reliable, transferable knowledge while lowering identity and translation costs.
          </p>
        </div>
      </section>

      {/* 4) Reference frames */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Reference frames</h2>
        <p className="mt-2 text-slate-800">
          Following Jeff Hawkins, the cortex stores and manipulates knowledge using map like frames. Working gloss:
          a reference frame is an internal scaffold that locates facts, relations, and goals so you can simulate,
          explain, and coordinate.
        </p>
        <ul className="mt-4 list-disc pl-5 text-slate-800 space-y-2">
          <li><span className="font-medium">Identify</span> the frame. Name objects, relations, and invariants.</li>
          <li><span className="font-medium">Shift</span> the frame. Move to a nearby frame and check what changes and what holds.</li>
          <li><span className="font-medium">Compare</span> frames. Prefer those that explain more with fewer assumptions and fewer errors.</li>
        </ul>
      </section>

      {/* 5) Classroom practices */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">5) Classroom practices that raise reliability</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Practice title="Constructor recipes" desc="Make the method public. Name steps, checks, and typical failure modes. State where the method is valid and where it breaks." />
          <Practice title="Adjacent possible prompts" desc="Design next steps that are one move away. Lower threat and load. Build momentum before jumping frames." />
          <Practice title="Counter example rounds" desc="Reserve time for counter cases. Treat a well made counter example as progress." />
          <Practice title="Revision tokens" desc="Guarantee structured chances to revise and log the reason in a one line changelog." />
        </div>
      </section>

      {/* 6) Externalities at the student level */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">6) Externalities at the student level</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-2">
          <li>Identity threat. Public error can be a status loss.</li>
          <li>Time debt. Extra practice assumes spare time that many do not have.</li>
          <li>Translation tax. Converting thinking into the register the record system rewards.</li>
          <li>Credibility gap. The same challenge reads as curiosity for one student and defiance for another.</li>
        </ul>
        <p className="mt-3 text-slate-800">Good design reduces these taxes. It does not wish them away.</p>
      </section>

      {/* 7) Worked example: education → skills → entrepreneurship */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">7) Worked example: education to skills to entrepreneurship</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <ExampleFrame
            title="Frame A: Credential first labor market"
            bullets={[
              'Objects: degrees, majors, GPA, prestige signals.',
              'Invariants: screening by credential. Internships as gatekeeping.',
              'Methods: accumulate credits, pass high stakes exams, apply through portals.',
              'What you can see: rank to internship to entry role. Exclusion when rank or network is thin.',
              'Hidden costs: debt, delay, translation tax.',
            ]}
          />
          <ExampleFrame
            title="Frame B: Skills or constructor first with entrepreneurship"
            bullets={[
              'Objects: constructors, portfolio artifacts, customers, revenue.',
              'Invariants: reliability, value delivered, proof of work.',
              'Methods: scope a problem, ship, measure, iterate, document reliability.',
              'What you can see: paid micro projects, apprenticeships, co ops. Lateral entry via portfolio.',
              'Constraints: capital access, credibility gap, time scarcity. Needs lightweight finance and mentors.',
            ]}
          />
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 p-4">
          <p className="font-medium">Bridge constructor</p>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-800 space-y-1">
            <li>Pick a local need and write a one page scope: who, pain, success signal, risks.</li>
            <li>Define the constructor recipe: steps, checks, and failure modes.</li>
            <li>Ship a minimum reliable artifact in one week and collect a quote or usage metric.</li>
            <li>Publish a proof of work entry with method, evidence, and limits.</li>
            <li>Price a follow on or convert to apprenticeship or retainer.</li>
            <li>State validity conditions and the next adjacent move.</li>
          </ol>
          <p className="mt-3 text-sm text-slate-800">
            Expected migration: from Fixive Belief that the degree is the gate, toward Simulactive and Causactive models
            that show how reliable methods and small bets create options.
          </p>
        </div>
      </section>

      {/* 8) Formalization roadmap */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">8) Formalization roadmap</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <Card title="Identity function I(·)" desc="Model how norms and roles modify incentives and costs by category and context." />
          <Card title="Experience process X(·)" desc="Treat experience as structured signal with attention and memory costs across time and source." />
          <Card title="Belief operator B(·)" desc="Formalize filters with identity weighted priors and high friction attractors for fixed beliefs." />
        </div>
        <p className="mt-4 text-sm text-slate-800">
          Milestones: instrument design for identity salience and load, small classroom trials, open dataset, and preprints.
        </p>
      </section>

      {/* 9) How XIK-TD pairs with ENDT */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">9) How XIK-TD pairs with ENDT</h2>
        <p className="mt-2 text-slate-800">
          ENDT changes the system input architecture. XIK-TD models the learner algorithm. We adjust the system to change
          the loop, and we shape the loop so students can navigate the system with lower cost.
        </p>
        <p className="mt-2 text-slate-800">
          See <a className="text-indigo-700 underline" href="/frameworks/endt">ENDT</a> and
          {' '}<a className="text-indigo-700 underline" href="/frameworks/belief-space">Belief Space</a>.
        </p>
      </section>

      {/* 10) Glossary */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">10) Glossary</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          <Glossary term="Simulactive" def="Knowledge that previews possible futures and strategies." />
          <Glossary term="Causactive" def="Knowledge that explains cause and effect and predicts failure modes." />
          <Glossary term="Intersubjective" def="Knowledge that coordinates action within shared rules and roles." />
          <Glossary term="Fixive Belief" def="Belief tightly coupled to identity that resists change until safety and method are in place." />
          <Glossary term="Reference frame" def="Internal scaffold that locates facts, relations, and goals for simulation and action." />
        </div>
      </section>
    </div>
  )
}

/* --- small presentational helpers (match ENDT style) --- */
function Practice({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-slate-800 mt-1">{desc}</p>
    </div>
  )
}

function ExampleFrame({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <p className="font-semibold">{title}</p>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-800 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-slate-800 mt-1">{desc}</p>
    </div>
  )
}

function Glossary({ term, def }: { term: string; def: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium">{term}</p>
      <p className="mt-1 text-sm text-slate-800">{def}</p>
    </div>
  )
}
