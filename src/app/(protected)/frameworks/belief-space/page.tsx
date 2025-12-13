/**
 * Belief Space: Designing Exploration and Focus Points
 * Style aligned to ENDT/XIK: cards, borders, spacing; no animations
 * No em dashes
 */

export default function BeliefSpacePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Belief Space: Designing Exploration and Focus Points
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          Belief space is intersubjective and structured. It arises as people interact, coordinate,
          and respond to one another’s ideas, artifacts, and norms. Positions in this space encode
          what a community treats as true, useful, or legitimate, how confident members are,
          and which meanings link across groups.
        </p>
        <p className="mt-2 text-slate-800">
          Reference frames are subjective. A frame is a learner’s internal scaffold for locating objects,
          relations, and invariants so they can reason and act. Frames differ across people.
          Through dialogue, practice, and shared tasks, frames can align with each other
          and with stabilized structures in the belief space.
        </p>
        <p className="mt-2 text-sm text-slate-800">
          Link to the micro model: X is an experience process. I is an identity function that alters incentives
          and perceived costs. B is a belief operator that evaluates signals. Identity Economics guides I(·).
          Reference frame theory guides how individuals structure and shift knowledge.
        </p>
      </section>

      {/* 1) Belief space as a shared construct */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Belief space as a shared construct</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Belief space">
            <p className="text-slate-800">
              Belief space is an intersubjective field shaped by conversation, artifacts,
              institutional records, and norms. It does not reside inside any single mind.
              It is a collective pattern that stabilizes as people reference one another
              and coordinate meaning.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-1">
              <li><span className="font-medium">Focus points</span>. Community-stabilized anchors such as definitions, laws, credentials, and methods, each with validity conditions.</li>
              <li><span className="font-medium">Trajectories</span>. Paths people follow as beliefs update under task results and social response.</li>
              <li><span className="font-medium">Adjacent possible</span>. States that are one credible step away, given identity constraints and shared norms.</li>
            </ul>
          </Card>

          <Card title="Reference frames are subjective" tint>
            <p className="text-slate-800">
              A reference frame is internal to the learner. It answers three questions.
              What counts as an object here. Which relations matter.
              What remains invariant when conditions change.
            </p>
            <p className="mt-2 text-slate-800">
              Frames guide perception, simulation, and method choice.
              They can be compared and coordinated through dialogue, critique,
              and shared work.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-1">
              <li><span className="font-medium">Name the frame</span>. List objects, relations, and invariants in plain language.</li>
              <li><span className="font-medium">Shift the frame</span>. Move to a nearby frame. Record what changes and what holds.</li>
              <li><span className="font-medium">Compare frames</span>. Prefer frames that explain more with fewer assumptions and fewer errors.</li>
            </ul>
            <p className="mt-3 text-slate-800">
              Frames interact with I(·) and B(·). Identity-linked norms influence which frames feel legitimate.
              Belief operators regulate which frames are evaluated at all.
              Alignment occurs when many subjective frames cohere,
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
              ['Intersubjective and structured', 'Stabilized by interaction, records, and norms'],
              ['Hosts focus points and trajectories', 'Shifts through coordinated discourse and shared tasks'],
            ]}
          />
          <MiniTable
            title="Reference frames"
            rows={[
              ['Subjective and learner-internal', 'Stabilized by practice, memory, and identity'],
              ['Guide perception and method choice', 'Shift through reframing and feedback'],
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
              Knowledge used to coordinate action under shared rules and roles.
              As people adjust to one another, meanings reference each other
              and stabilize into shared anchors.
            </p>
          </Card>
          <Card title="Simulactive">
            <p className="text-slate-800">
              Knowledge used to run scenarios forward, anticipate outcomes,
              and test frames before acting.
            </p>
          </Card>
          <Card title="Causactive">
            <p className="text-slate-800">
              Knowledge used to explain cause and effect,
              control variables, and predict failure modes.
              Often reinforced by physical regularities or stable institutions.
            </p>
          </Card>
          <Card title="Fixive Belief">
            <p className="text-slate-800">
              A high-friction attractor that binds identity
              and resists revision until safety and method are in place.
            </p>
          </Card>
        </div>
        <p className="mt-4 text-sm text-slate-800">
          Instruction aims to migrate Fixive Beliefs toward Simulactive and Causactive models when the domain requires it,
          while keeping identity costs low enough for participation.
        </p>
      </section>

      {/* 4) Designing exploration */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Designing exploration with the adjacent possible</h2>
        <p className="mt-2 text-slate-800">
          Exploration should proceed through credible, constrained steps.
          Each move should be close enough to feel legitimate
          and informative enough to update frames and shared anchors.
        </p>
        <p className="mt-2 text-slate-800">
          The goal is not unrestricted exploration,
          but navigation of the space under identity and coordination constraints.
        </p>
        {/* rest unchanged */}
      </section>

      {/* 5) Externalities */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">5) Externalities of exploration</h2>
        <p className="mt-2 text-slate-800">
          Exploration carries uneven costs.
          Identity pressure, time debt, and translation tax
          can make the same trajectory affordable for one learner
          and prohibitive for another.
        </p>
        {/* list unchanged */}
      </section>

      {/* 6) Pareto surface */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">6) Pareto surface for goals</h2>
        <p className="mt-2 text-slate-800">
          Optimization occurs along a surface, not a single axis.
          Effective design advances epistemic quality and identity safety together,
          and records trade-offs rather than hiding them.
        </p>
        {/* list unchanged */}
      </section>

      {/* 7) Formalization hooks */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">7) Formalization hooks</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <Card title="I(·) Identity function">
            <p className="text-slate-800">Modifies incentives, legitimacy, and perceived cost.</p>
          </Card>
          <Card title="X(·) Experience process" tint>
            <p className="text-slate-800">Source, timing, attention, and memory effects across tasks.</p>
          </Card>
          <Card title="B(·) Belief operator">
            <p className="text-slate-800">Evaluates signals under identity constraints and load limits.</p>
          </Card>
        </div>
        <p className="mt-4 text-sm text-slate-800">
          Plan: formalize trajectories so learning is evaluated as movement through belief space,
          not as isolated scores.
        </p>
      </section>

      {/* 8 and 9 unchanged */}
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
      <p className="font-semibold text-slate-900 dark:text-emerald-200">{title}</p>
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
        <p className="font-semibold text-slate-900 dark:text-emerald-200">{title}</p>
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

