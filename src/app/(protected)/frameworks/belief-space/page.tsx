/**
 * Belief Space: Designing Exploration and Focus Points
 * Earth-tone palette aligned with ENDT / XIK-TD
 * No em dashes
 */

export default function BeliefSpacePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
          Belief Space: Designing Exploration and Focus Points
        </h1>
        <p className="mt-3 text-lg text-stone-700">
          Belief space is intersubjective and structured. It arises as people interact, coordinate,
          and respond to one another’s ideas, artifacts, and norms. Positions in this space encode
          what a community treats as true, useful, or legitimate.
        </p>
        <p className="mt-2 text-stone-700">
          Reference frames are subjective. A frame is a learner’s internal scaffold for locating objects,
          relations, and invariants so they can reason and act. Through dialogue and shared work,
          frames can align with stabilized structures in the belief space.
        </p>
        <p className="mt-2 text-sm text-stone-600">
          Link to the micro model: X is an experience process. I is an identity function that alters incentives
          and perceived costs. B is a belief operator that evaluates signals.
        </p>
      </section>

      {/* 1) Shared construct */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          1) Belief space as a shared construct
        </h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Belief space">
            <p className="text-stone-700">
              Belief space is an intersubjective field shaped by conversation, artifacts,
              institutional records, and norms. It is a collective pattern that stabilizes
              as people reference one another and coordinate meaning.
            </p>
            <ul className="mt-3 list-disc pl-5 text-stone-700 space-y-1">
              <li><span className="font-medium text-stone-800">Focus points</span>. Community-stabilized anchors with validity conditions.</li>
              <li><span className="font-medium text-stone-800">Trajectories</span>. Paths people follow as beliefs update.</li>
              <li><span className="font-medium text-stone-800">Adjacent possible</span>. One credible step away, given constraints.</li>
            </ul>
          </Card>

          <Card title="Reference frames are subjective" tint>
            <p className="text-stone-700">
              A reference frame is internal to the learner. It answers three questions.
              What counts as an object. Which relations matter.
              What remains invariant when conditions change.
            </p>
            <ul className="mt-3 list-disc pl-5 text-stone-700 space-y-1">
              <li><span className="font-medium text-stone-800">Name the frame</span>. Make objects and invariants explicit.</li>
              <li><span className="font-medium text-stone-800">Shift the frame</span>. Move one step and record what changes.</li>
              <li><span className="font-medium text-stone-800">Compare frames</span>. Prefer fewer assumptions and fewer errors.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 2) At a glance */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          2) Belief space and reference frames at a glance
        </h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <MiniTable
            title="Belief space"
            rows={[
              ['Shared and intersubjective', 'Stabilized by norms and records'],
              ['Hosts focus points', 'Shifts through coordinated action'],
            ]}
          />
          <MiniTable
            title="Reference frames"
            rows={[
              ['Learner-internal', 'Stabilized by practice and identity'],
              ['Guide perception', 'Shift through feedback'],
            ]}
          />
        </div>
      </section>

      {/* 3) Knowledge types */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          3) Knowledge types inside the space
        </h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Intersubjective">
            <p className="text-stone-700">
              Knowledge used to coordinate action under shared rules and roles.
            </p>
          </Card>
          <Card title="Simulactive" accent="amber">
            <p className="text-stone-700">
              Knowledge used to simulate futures and test frames before acting.
            </p>
          </Card>
          <Card title="Causactive" accent="emerald">
            <p className="text-stone-700">
              Knowledge used to explain cause and effect and predict failure modes.
            </p>
          </Card>
          <Card title="Fixive belief" accent="stone">
            <p className="text-stone-700">
              A high-friction attractor that resists revision until safety and method exist.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}

/* --- helpers --- */

function Card({
  title,
  children,
  tint = false,
  accent,
}: {
  title: string
  children: React.ReactNode
  tint?: boolean
  accent?: 'amber' | 'emerald' | 'stone'
}) {
  const accentMap = {
    amber: 'border-amber-300',
    emerald: 'border-emerald-300',
    stone: 'border-stone-300',
  }

  return (
    <div
      className={`rounded-2xl border p-4 ${
        accent ? accentMap[accent] : 'border-stone-300'
      } ${tint ? 'bg-stone-100' : 'bg-white'}`}
    >
      <p className="font-semibold text-stone-900">{title}</p>
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
    <div className="rounded-2xl border border-stone-300 bg-white">
      <div className="p-4">
        <p className="font-semibold text-stone-900">{title}</p>
      </div>
      <div className="border-t border-stone-300">
        <table className="min-w-full text-sm">
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-stone-200">
                <td className="p-3 align-top text-stone-700">{r[0]}</td>
                <td className="p-3 align-top text-stone-700">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
