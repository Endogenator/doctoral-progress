/**
 * Belief Space — Designing Exploration and Focus Points
 * Style aligned to ENDT/XIK: cards, borders, spacing; no animations
 * No em dashes
 */

export default function BeliefSpacePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Belief Space — Designing Exploration and Focus Points
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          Belief space is shared, emergent, and intersubjective. It arises from many people interacting,
          coordinating, and responding to one another’s ideas and norms. Positions in this space encode what a community
          treats as true or useful, how confident members are, and how meanings link across groups.
        </p>
        <p className="mt-2 text-slate-800">
          Reference frames are subjective. A frame is a learner’s internal scaffold for locating objects, relations,
          and invariants so they can reason and act. Frames differ across people. Through dialogue and practice,
          frames can align with each other and with wider patterns in the belief space.
        </p>
        <p className="mt-2 text-sm text-slate-800">
          Link to the micro model: X is an experience process. I is an identity function that alters incentives and costs.
          B is a belief operator that filters signals. Identity Economics guides I(·). Hawkins’s reference frames guide how
          individuals structure and shift knowledge.
        </p>
      </section>

      {/* 1) Belief space as a shared construct */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Belief space as a shared construct</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Belief space">
            <p className="text-slate-800">
              Treat belief space as an intersubjective field shaped by conversation, artifacts, records, and norms.
              It is not inside one mind. It is a collective pattern that emerges as people reference one another and stabilize meanings.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-1">
              <li><span className="font-medium">Focus points</span>. Community-stabilized structures such as definitions, laws, and methods with validity conditions.</li>
              <li><span className="font-medium">Trajectories</span>. Paths people take as beliefs update under task results and social response.</li>
              <li><span className="font-medium">Adjacent possible</span>. States that are one credible step from where a person and their community currently stand.</li>
            </ul>
          </Card>

          <Card title="Reference frames are subjective" tint>
            <p className="text-slate-800">
              A reference frame is internal. It answers three questions. What counts as an object here. Which relations matter.
              What stays invariant when conditions change. Frames guide perception and action for the individual.
              They can be compared and coordinated through dialogue, critique, and shared tasks.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-1">
              <li><span className="font-medium">Name the frame</span>. List objects, relations, and invariants in plain language.</li>
              <li><span className="font-medium">Shift the frame</span>. Move to a nearby frame. Record what changes and what holds.</li>
              <li><span className="font-medium">Compare frames</span>. Prefer those that explain more with fewer assumptions and fewer errors.</li>
            </ul>
            <p className="mt-3 text-slate-800">
              Frames interact with I(·) and B(·). Identity-linked norms influence which frames feel legitimate.
              Belief filters regulate which frames are even considered. Alignment occurs when many subjective frames cohere,
              producing shared structure in the belief space.
            </p>
          </Card>
        </div>
      </section>

      {/* 2) Belief space and frames at a glance */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">2) Belief space and reference frames at a glance</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <MiniTable
            title="Belief space"
            rows={[
              ['Shared, emergent, intersubjective', 'Stabilized by interaction, records, and norms'],
              ['Hosts focus points and community trajectories', 'Shifts through coordinated discourse and tasks'],
            ]}
          />
          <MiniTable
            title="Reference frames"
            rows={[
              ['Subjective, learner-internal', 'Stabilized by practice, memory, and identity'],
              ['Guide perception, simulation, method choice', 'Shift through reframing and feedback'],
            ]}
          />
        </div>
      </section>

      {/* 3) Knowledge types inside the space */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) Knowledge types inside the space</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Intersubjective">
            <p className="text-slate-800">
              Coordinate with others using shared rules and roles. This creates a feedback loop that can settle toward
              a shared equilibrium as people adjust to one another. Meanings begin to reference each other.
            </p>
          </Card>
          <Card title="Simulactive">
            <p className="text-slate-800">
              Run the idea forward in imagination and anticipate outcomes. Supports frame formation and testing because it
              previews which objects, relations, and invariants will matter.
            </p>
          </Card>
          <Card title="Causactive">
            <p className="text-slate-800">
              Explain cause and effect, control variables, and predict failure modes. Often reinforced by information
              crystallized in the physical world and in stable social systems.
            </p>
          </Card>
          <Card title="Fixive Belief">
            <p className="text-slate-800">
              A high-friction attractor that binds identity and resists revision until safety and method are in place.
            </p>
          </Card>
        </div>
        <p className="mt-4 text-sm text-slate-800">
          Instruction aims to migrate Fixive Beliefs toward Simulactive and Causactive models when the domain requires it,
          while keeping identity costs low enough for participation.
        </p>
      </section>

      {/* 4) Designing exploration with the adjacent possible */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Designing exploration with the adjacent possible</h2>
        <p className="mt-2 text-slate-800">
          Exploration should proceed in credible steps. Aim for one step at a time, then bank the gain. Use tasks that
          preview consequences and invite comparison across frames, so subjective frames can align inside the shared belief space.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Near-move tasks">
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Keep the next step one idea away. Reduce threat and cognitive load. Build momentum.</li>
              <li>Preview by simulation. Run the scenario mentally or on paper before acting.</li>
              <li>Counter-example rounds. Allocate time to build and test counter-cases. Treat a good counter-case as progress.</li>
              <li>Revision tokens. Guarantee structured chances to revise and write one line about what changed and why.</li>
            </ul>
          </Card>
          <Card title="Alignment moves" tint>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Name frames in plain language. Make invariants public.</li>
              <li>Hold comparison sessions. Prefer frames that explain more with fewer assumptions and fewer errors.</li>
              <li>Use shared anchors. Constructor reliability, proof-of-work, and small bets stabilize meaning across groups.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 5) Externalities of exploration */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">5) Externalities of exploration</h2>
        <p className="mt-2 text-slate-800">
          Exploration is not free. Costs fall unevenly. Identity pressure, time debt, and a translation tax can make the same path
          affordable for one learner and expensive for another. Plan counter-moves that lower those costs.
        </p>
        <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-1">
          <li><span className="font-medium">Identity pressure</span>. Public error can produce status loss. Use low-stakes previews and private checks.</li>
          <li><span className="font-medium">Time debt</span>. Do not assume spare time. Embed practice in class time and reduce non-essential friction.</li>
          <li><span className="font-medium">Translation tax</span>. Align task language with how records are kept. Teach the required register explicitly.</li>
          <li><span className="font-medium">Credibility gap</span>. Normalize challenge as curiosity. Publish criteria so dissent is not misread.</li>
        </ul>
      </section>

      {/* 6) Pareto surface for goals */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">6) Pareto surface for goals</h2>
        <p className="mt-2 text-slate-800">
          Optimize along a surface, not a single target. Advance identity safety and epistemic openness together.
          Advance causal accuracy and coordination capacity together. Reduce exploration cost while improving feedback quality.
          Record trade-offs rather than hiding them.
        </p>
        <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-1">
          <li>Identity safety and epistemic openness rise together.</li>
          <li>Causal accuracy and coordination capacity rise together.</li>
          <li>Exploration cost falls while feedback quality rises.</li>
        </ul>
      </section>

      {/* 7) Formalization hooks */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">7) Formalization hooks</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <Card title="I(·) Identity function">
            <p className="text-slate-800">Modifies incentives and costs by category and norm.</p>
          </Card>
          <Card title="X(·) Experience process" tint>
            <p className="text-slate-800">Source, timing, attention cost, and memory effects across time and task.</p>
          </Card>
          <Card title="B(·) Belief operator">
            <p className="text-slate-800">Identity-weighted priors and load limits. Allow high-friction attractors for Fixive Beliefs.</p>
          </Card>
        </div>
        <p className="mt-4 text-sm text-slate-800">
          Plan: formalize X and B so that task sequences can be evaluated as trajectories rather than isolated scores.
        </p>
      </section>

      {/* 8) Worked example — Credential paths ↔ skill or venture paths */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">8) Worked example — Credential paths ↔ skill or venture paths</h2>
        <p className="mt-2 text-slate-800">
          In a credential-first community, belief space stabilizes around prestige signals and GPA. When a community adopts
          shared anchors for proof-of-work and constructor reliability, new focus points appear and trajectories open toward
          entrepreneurship and lateral entry, especially for learners excluded by rank or network.
        </p>

        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full border border-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <Th>Focus point</Th>
                <Th>Validity conditions</Th>
                <Th>Adjacent possible</Th>
                <Th>Escape hatch</Th>
              </tr>
            </thead>
            <tbody>
              <Tr
                cells={[
                  'Proof-of-work as signal',
                  'Clear artifact, observable reliability, third-party testimonial or usage.',
                  'Add one new customer or user. Turn a class project into a paid micro-project.',
                  'If credibility stalls, pair with a mentor or co-brand. Add before-after metrics.',
                ]}
              />
              <Tr
                cells={[
                  'Constructor reliability',
                  'Method published with steps, checks, failure modes. Reproducible by another.',
                  'Teach the recipe to a peer. Log their result. Refine failure modes.',
                  'If transfer fails, narrow scope. Add a pre-flight checklist to reduce load.',
                ]}
              />
              <Tr
                cells={[
                  'Small-bet venture',
                  'Tiny scope, capped risk, time-boxed to one week, explicit success signal.',
                  'Pilot a $100–$500 engagement, or barter for a high-cred testimonial.',
                  'If capital blocks, switch to pre-sales or grant micro-funding. Keep the bet small.',
                ]}
              />
              <Tr
                cells={[
                  'Competency transcript',
                  'Portfolio mapped to constructors, each with evidence and limits.',
                  'Convert two class artifacts to constructor entries. Add usage evidence.',
                  'If HR portals require degrees, route via apprenticeship, vendor marketplace, or client intro.',
                ]}
              />
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 p-4">
          <p className="font-medium">Constructor to align frames at the community level</p>
          <ul className="mt-2 list-disc pl-5 text-slate-800 space-y-1">
            <li>Publish a common template for proof-of-work: scope, method, evidence, limits, testimonial.</li>
            <li>Run monthly showcase sessions where peers and mentors validate one constructor each.</li>
            <li>Track adjacent moves: new customer, new method, or new domain at small scale.</li>
          </ul>
          <p className="mt-3 text-sm text-slate-800">
            Belief space outcome: the community now shares anchors that make skill-first and entrepreneurial paths legible
            and reachable for marginalized learners.
          </p>
        </div>
      </section>

      {/* 9) Lineage and links */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">9) Lineage and links</h2>
        <p className="text-slate-800">
          Identity Economics informs I(·). Hawkins’s reference frames inform how knowledge is structured and shifted.
          See <a className="text-indigo-700 underline" href="/frameworks/xik-td">XIK-TD</a> for the micro loop
          and <a className="text-indigo-700 underline" href="/frameworks/endt">ENDT</a> for the system architecture.
        </p>
      </section>
    </div>
  )
}

/* --- Presentational helpers --- */
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
      <p className="font-semibold">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function MiniTable({
  title,
  rows,
}: {
  title: string
  rows: [string, string][]
}) {
  return (
    <div className="rounded-2xl border border-slate-200">
      <div className="p-4">
        <p className="font-semibold">{title}</p>
      </div>
      <div className="border-t border-slate-200">
        <table className="min-w-full text-sm">
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-200">
                <td className="p-3 align-top text-slate-800">{r[0]}</td>
                <td className="p-3 align-top text-slate-800">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-3 py-2 text-left text-slate-700 font-semibold border-b border-slate-200">
      {children}
    </th>
  )
}

function Tr({ cells }: { cells: string[] }) {
  return (
    <tr className="border-t border-slate-200">
      {cells.map((c, i) => (
        <td key={i} className="align-top px-3 py-3 text-slate-800">{c}</td>
      ))}
    </tr>
  )
}
