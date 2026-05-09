/**
 * Belief Space: Designing Exploration and Focus Points
 * Updated: Definition corrected re adjacent possible.
 * Orientation-neutral replaces valence-neutral, with examples.
 * Self-correcting vs. self-referential as central structural distinction.
 * Collective BS aggregation function with Surowiecki conditions.
 * Wright brothers example. Minority clarified as non-dominant.
 * Dominant culture mechanism: artifact creation and narrative propagation.
 * Marshmallow test and Maslow as narrative examples.
 * Fixive belief updated.
 * Earth-tone palette. No em dashes.
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
          Belief Space is the navigable region of possibility space, bounded by the adjacent
          possible and made salient by identity architecture, filled through artifacts and
          explanations. It is intersubjective and structured. It arises as people interact,
          coordinate, and respond to one another's ideas, artifacts, and norms. Positions in
          this space encode what a community treats as true, useful, or legitimate.
        </p>
        <p className="mt-2 text-stone-700">
          The filling mechanism is orientation-neutral. The same infrastructure, artifacts,
          explanations, institutional records, carries content that can be received in
          fundamentally different ways depending on the relationship between the belief and
          the receiver. A belief's orientation toward a given receiver can be described along
          several dimensions: whether it invites acceptance or triggers rejection, whether it
          affirms or disrupts the receiver's identity, whether it serves collective interest
          or activates personal advantage. These are not properties of the belief in isolation.
          They are properties of the belief-receiver relationship, and they determine how the
          belief moves through the space.
        </p>
        <p className="mt-2 text-sm text-stone-600">
          Link to XIK-TS: identity architecture determines which region of possibility space
          is currently navigable for a given person. Belief Space is the community-level
          analog of the individual Transformation Space.
        </p>
      </section>

      {/* 1) Shared construct */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          1) Belief Space as a shared construct
        </h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Belief Space">
            <p className="text-stone-700">
              Belief Space is an intersubjective field shaped by conversation, artifacts,
              institutional records, and norms. It is a collective pattern that stabilizes
              as people reference one another and coordinate meaning. It is not a container
              for individual beliefs. It is the structured field in which individual beliefs
              form, stabilize, and either persist or dissolve. It contains permutations and
              variations that have reinforcing or distorting effects on each other.
            </p>
            <ul className="mt-3 list-disc pl-5 text-stone-700 space-y-1">
              <li>
                <span className="font-medium text-stone-800">Focus points</span>. Community-stabilized anchors with validity conditions.
              </li>
              <li>
                <span className="font-medium text-stone-800">Trajectories</span>. Paths people follow as beliefs update.
              </li>
              <li>
                <span className="font-medium text-stone-800">Adjacent possible</span>. The frontier one transformation away from the current navigable region. What lies beyond the current navigable region, not yet reachable by a single transformation.
              </li>
            </ul>
          </Card>

          <Card title="Reference frames are subjective" tint>
            <p className="text-stone-700">
              A reference frame is internal to the learner. It answers three questions: what
              counts as an object, which relations matter, and what remains invariant when
              conditions change. Through dialogue and shared work, individual frames can align
              with stabilized structures in Belief Space. That alignment is how shared knowledge
              becomes possible without requiring identical internal states.
            </p>
            <ul className="mt-3 list-disc pl-5 text-stone-700 space-y-1">
              <li><span className="font-medium text-stone-800">Name the frame</span>. Make objects and invariants explicit.</li>
              <li><span className="font-medium text-stone-800">Shift the frame</span>. Move one step and record what changes.</li>
              <li><span className="font-medium text-stone-800">Compare frames</span>. Prefer fewer assumptions and fewer errors.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 2) Self-correcting vs. self-referential */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          2) The central structural distinction: self-correcting versus self-referential belief
        </h2>
        <p className="mt-2 text-stone-700">
          This distinction is the most consequential structural feature of Belief Space. It
          determines whether a region of the space is capable of self-correction or whether
          it is structurally immune to revision.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-6">

          <Card title="Self-correcting belief">
            <p className="text-stone-700">
              Self-correcting belief has an external standard. The world provides falsification
              independent of the belief. When the belief is wrong, reality eventually produces
              evidence that cannot be fully absorbed by the belief system without revision. The
              standard of correctness is outside the belief itself.
            </p>
            <p className="mt-2 text-stone-700">
              Science is one institutionalized form of error correction, not because scientists
              are unbiased, but because the method is structured to generate contact with
              external standards. Predictions that fail are evidence. Replication failures are
              evidence. The belief system is designed to be losable. The wisdom of crowds is
              another form of error correction, operating through aggregation of diverse,
              independent contributions rather than through method.
            </p>
          </Card>

          <Card title="Self-referential belief" tint>
            <p className="text-stone-700">
              Self-referential belief has an internal standard. The world has been organized
              around the belief long enough to produce confirming outcomes. The base assumption
              is invisible because it is the lens through which evidence is read. What looks
              like confirmation is often the belief reading itself in the world it has shaped.
            </p>
            <p className="mt-2 text-stone-700">
              This is why the cure for asymptotic belief is replacement rather than refutation.
              Refutation requires an external standard the belief does not recognize. When the
              standard of correctness is internal, counter-evidence is absorbed, reframed, or
              dismissed without revision. A new belief with a different internal standard must
              displace the old one. Argument alone cannot do it.
            </p>
            <p className="mt-2 text-sm text-stone-600">
              Institutional beliefs about who is capable, what counts as rigor, and what
              credentials signify are predominantly self-referential. They are confirmed by
              the outcomes the institution produces, which are themselves shaped by the beliefs.
              Reform efforts that do not replace the base assumption reproduce it.
            </p>
          </Card>

        </div>
      </section>

      {/* 3) Collective Belief Space and the aggregation function */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          3) Collective Belief Space and the aggregation function
        </h2>
        <p className="mt-2 text-stone-700">
          Individual Belief Spaces aggregate into collective Belief Space through social
          interaction. The quality of that aggregation is not fixed. It depends on the
          conditions under which individual contributions are weighted and combined.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-6">

          <Card title="Healthy aggregation conditions">
            <p className="text-stone-700">
              Surowiecki's conditions for wise collective judgment identify the key variables.
              Diversity of opinion: each person draws on private information and a distinct
              frame. Independence: individual judgments are not shaped primarily by the
              judgments of others around them. Decentralization: people draw on local knowledge
              the center does not have. Aggregation: a mechanism exists to combine private
              judgments into a collective signal.
            </p>
            <p className="mt-2 text-stone-700">
              Under these conditions, collective Belief Space is more accurate than any
              individual Belief Space. The diversity of frames covers more of the current
              navigable region and, critically, can produce novel beliefs tangent to the
              adjacent possible, expanding the navigable region into what was formerly beyond
              reach. The Wright brothers are a clean example: heavier-than-air flight was in
              the adjacent possible before 1903, one transformation away from what the available
              knowledge and materials made reachable. The diversity of their mechanical and
              observational frames produced the belief that crossed the boundary. Errors that
              are correlated within any single frame are uncorrelated across frames and cancel
              in aggregation.
            </p>
          </Card>

          <Card title="Degraded aggregation conditions" tint>
            <p className="text-stone-700">
              When a non-dominant group's contributions are suppressed, regardless of whether
              that suppression is demographic, institutional, or cultural, the aggregation
              function degrades. Independence is lost when social pressure aligns individual
              judgments with the dominant frame before they enter the aggregation process.
              Diversity is lost when the cost of holding a non-dominant frame is high enough
              to drive conformity or exit. Decentralization is lost when artifact creation
              and narrative propagation are controlled by a small subset of participants.
            </p>
            <p className="mt-2 text-stone-700">
              Under degraded conditions, collective Belief Space cascades rather than
              aggregating wisely. It becomes more confident and less accurate simultaneously.
              The mechanism is not malice. It is weighted influence over the two filling
              mechanisms: who gets to make artifacts and who gets to tell the stories that
              determine which artifacts are salient.
            </p>
          </Card>

        </div>
      </section>

      {/* 4) Dominant culture and structural injustice */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          4) Dominant culture and structural injustice
        </h2>
        <p className="mt-2 text-stone-700">
          The structural mechanism of educational injustice, in Belief Space terms, is not
          intention. It is disproportionate influence over the aggregation function. Dominant
          culture shapes collective Belief Space not by excluding non-dominant perspectives
          through deliberate suppression but by controlling the two mechanisms that fill
          Belief Space: artifact creation and narrative propagation.
        </p>
        <p className="mt-3 text-stone-700">
          Artifacts encode what counts as knowledge, what problems are worth solving, and
          whose methods are legitimate. Narratives determine which artifacts become salient,
          which are treated as foundational, and which are marginalized into footnotes. Some
          of the most consequential narratives are not recognized as narratives at all. They
          circulate as casual received wisdom, familiar enough to feel like facts.
        </p>
        <p className="mt-3 text-stone-700">
          The Marshmallow Test is one example. The original findings, that children who delay
          gratification succeed more later in life, became a durable institutional narrative
          about character and self-control. That narrative persisted well after replication
          studies showed the effect was largely an artifact of economic instability. Children
          from resource-scarce environments had learned, correctly, that waiting was not a
          reliable strategy. The belief became self-referential because institutions built
          around it produced outcomes that appeared to confirm it: delayed gratification
          correlates with stability, and stability correlates with resources the original
          study did not control for. The story felt casual and developmental. It was doing
          structural work.
        </p>
        <p className="mt-3 text-stone-700">
          Maslow's hierarchy operates similarly. Presented as a universal model of human
          motivation, it encodes a particular cultural sequence of needs as natural and
          invariant. The empirical support for the strict hierarchy is weak, but the narrative
          persists because it is legible, teachable, and confirms existing institutional
          assumptions about what people need before they can learn.
        </p>
        <p className="mt-3 text-stone-700">
          A community that controls both artifact creation and narrative propagation fills the
          Belief Space it navigates with its own frames, making those frames appear universal
          while alternative frames remain locally valid but globally invisible. The implication
          for educational design is that expanding the navigable region for marginalized
          learners requires changing the artifact and narrative environment, not just changing
          individual attitudes or adding diversity statements. The Belief Space they navigate
          is shaped by what exists in it. Changing what exists in it changes what is navigable.
        </p>
      </section>

      {/* 5) Knowledge types */}
      <section className="rounded-3xl border border-stone-300 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          5) Knowledge types inside the space
        </h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card title="Intersubjective">
            <p className="text-stone-700">
              Knowledge used to coordinate action under shared rules and roles. It stabilizes
              through repeated use and institutional recognition. It is the most legible form
              of knowledge to credentialing systems because it is the most standardizable.
            </p>
          </Card>
          <Card title="Simulactive" accent="amber">
            <p className="text-stone-700">
              Knowledge used to simulate futures and test frames before acting. It allows a
              person to explore the adjacent possible mentally before committing resources to
              a physical exploration.
            </p>
          </Card>
          <Card title="Causactive" accent="emerald">
            <p className="text-stone-700">
              Knowledge used to explain cause and effect and predict failure modes. It
              corresponds to causal understanding in the XIK-TS framework. It is the minimum
              level required for genuine transfer across contexts.
            </p>
          </Card>
          <Card title="Fixive belief" accent="stone">
            <p className="text-stone-700">
              A high-friction attractor that resists revision until identity conflict is absent
              and the value of revision is salient. These beliefs tend toward high internal
              correlation, which produces simple but wrong confirming evidence. In
              self-referential form, fixive belief becomes asymptotic: the core belief is
              approached indefinitely but never revised, because the internal standard produces
              continuous confirmation.
            </p>
          </Card>
        </div>
      </section>

      {/* 6) At a glance */}
      <section className="rounded-3xl border border-stone-300 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          6) Belief Space and reference frames at a glance
        </h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <MiniTable
            title="Belief Space"
            rows={[
              ['Shared and intersubjective', 'Stabilized by artifacts and records'],
              ['Hosts focus points', 'Shifts through coordinated action'],
              ['Aggregates individual frames', 'Quality depends on diversity and independence'],
            ]}
          />
          <MiniTable
            title="Reference frames"
            rows={[
              ['Learner-internal', 'Stabilized by practice and identity'],
              ['Guide perception', 'Shift through feedback and dissonance'],
              ['Align with Belief Space', 'Through dialogue and shared work'],
            ]}
          />
        </div>
      </section>

      {/* Cross-links */}
      <section className="rounded-2xl border border-stone-300 bg-white p-4">
        <p className="text-stone-800">
          See{' '}
          <a className="text-indigo-700 underline" href="/frameworks/xik-ts">XIK-TS</a>{' '}
          for the individual-level transformation loop of which Belief Space is the
          community-level analog,{' '}
          <a className="text-indigo-700 underline" href="/frameworks/etcs">ETCS</a>{' '}
          for how institutional coordination shapes the artifact and narrative environment, and{' '}
          <a className="text-indigo-700 underline" href="/frameworks/integration">Integration</a>{' '}
          for how all three frameworks operate together.
        </p>
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
