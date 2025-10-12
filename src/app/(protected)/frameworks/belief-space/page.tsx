'use client'

export default function BeliefSpacePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Belief Space — Designing Exploration and Focus Points</h1>
        <p className="text-neutral-800">
          Belief space is shared, emergent, and intersubjective. It arises from many people interacting, coordinating,
          and responding to one another’s ideas and norms. Positions in this space encode what a community treats as
          true or useful, how confident members are, and how meanings link across groups.
        </p>
        <p className="text-neutral-800">
          Reference frames are subjective. A frame is a learner’s internal scaffold for locating objects, relations,
          and invariants so they can reason and act. Frames differ across people. Through dialogue and practice, frames
          can align with each other and with wider patterns in the belief space.
        </p>
        <p className="text-neutral-800">
          We link this to the micro model with <strong>K = f(X, I, B)</strong>. Here <strong>X</strong> is an experience process,
          <strong>I</strong> is an identity function that alters incentives and costs, and <strong>B</strong> is a belief operator that filters signals.
        </p>
        <p className="text-neutral-600 text-sm">
          Identity Economics informs I(·). Hawkins’s reference frames inform how individuals structure and shift knowledge.
        </p>
      </header>

      {/* 1) Belief space as a shared construct */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1) Belief space as a shared construct</h2>
        <p className="text-neutral-800">
          Treat belief space as an intersubjective field shaped by conversation, artifacts, records, and norms.
          It is not inside one mind. It is a collective pattern that emerges as people reference one another and stabilize meanings.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Focus points</strong>. Community-stabilized structures such as definitions, laws, and methods with validity conditions.</li>
          <li><strong>Trajectories</strong>. Paths people take as beliefs update under task results and social response.</li>
          <li><strong>Adjacent possible</strong>. States that are one credible step from where a person and their community currently stand.</li>
        </ul>
      </section>

      {/* 2) Reference frames are subjective */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Reference frames are subjective</h2>
        <p className="text-neutral-800">
          A reference frame is internal. It answers three questions. What counts as an object here. Which relations matter.
          What stays invariant when conditions change. Frames guide perception and action for the individual. They can be compared
          and coordinated through dialogue, critique, and shared tasks.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Name the frame</strong>. List objects, relations, and invariants in plain language.</li>
          <li><strong>Shift the frame</strong>. Move to a nearby frame. Record what changes and what holds.</li>
          <li><strong>Compare frames</strong>. Argue why one frame explains more with fewer assumptions and fewer errors.</li>
        </ul>
        <p className="text-neutral-800">
          Frames interact with <strong>I(·)</strong> and <strong>B(·)</strong>. Identity-linked norms influence which frames feel legitimate.
          Belief filters regulate which frames are even considered. Alignment occurs when many subjective frames cohere,
          producing shared structure in the belief space.
        </p>
      </section>

      {/* 3) Side-by-side distinction */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Belief space and reference frames at a glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-neutral-200">
            <thead>
              <tr className="bg-neutral-50 text-neutral-900">
                <th className="p-2 text-left border-b w-1/2">Belief space</th>
                <th className="p-2 text-left border-b w-1/2">Reference frames</th>
              </tr>
            </thead>
            <tbody className="text-neutral-900">
              <tr>
                <td className="p-2 border-t">Shared, emergent, intersubjective</td>
                <td className="p-2 border-t">Subjective, learner-internal</td>
              </tr>
              <tr>
                <td className="p-2 border-t">Stabilized by interaction, records, and norms</td>
                <td className="p-2 border-t">Stabilized by practice, memory, and identity</td>
              </tr>
              <tr>
                <td className="p-2 border-t">Hosts focus points and community trajectories</td>
                <td className="p-2 border-t">Guides perception, simulation, and method choice</td>
              </tr>
              <tr>
                <td className="p-2 border-t">Shifts through coordinated discourse and tasks</td>
                <td className="p-2 border-t">Shifts through reframing and feedback</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4) Knowledge types inside the space */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4) Knowledge types inside the space</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-900">
          <li>
            <strong>Intersubjective</strong>. Coordinate with others using shared rules and roles. This creates a feedback loop
            that can settle toward a shared equilibrium as people adjust to one another. Meanings begin to reference each other.
          </li>
          <li>
            <strong>Simulactive</strong>. Run the idea forward in imagination and anticipate outcomes. This supports frame formation
            and testing because it previews which objects, relations, and invariants will matter.
          </li>
          <li>
            <strong>Causactive</strong>. Explain cause and effect, control variables, and predict failure modes. Often reinforced by
            information crystallized in the physical world and in stable social systems.
          </li>
          <li>
            <strong>Fixive Belief</strong>. A high-friction attractor that binds identity and resists revision until safety and method are in place.
          </li>
        </ul>
        <p className="text-neutral-800">
          Instruction aims to migrate Fixive Beliefs toward Simulactive and Causactive models when the domain requires it,
          while keeping identity costs low enough for participation.
        </p>
      </section>

      {/* 5) Designing exploration with the adjacent possible */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5) Designing exploration with the adjacent possible</h2>
        <p className="text-neutral-800">
          Exploration should proceed in credible steps. Aim for one step at a time, then bank the gain. Use tasks that preview
          consequences and invite comparison across frames, so subjective frames can align inside the shared belief space.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-900">
          <li><strong>Near-move tasks</strong>. Keep the next step one idea away. Reduce threat and cognitive load. Build momentum.</li>
          <li><strong>Preview by simulation</strong>. Ask students to run the scenario mentally or on paper before acting.</li>
          <li><strong>Counter-example rounds</strong>. Allocate time to build and test counter-cases. Treat a good counter-case as progress.</li>
          <li><strong>Revision tokens</strong>. Guarantee structured chances to revise artifacts and to write one line about what changed and why.</li>
        </ul>
      </section>

      {/* 6) Externalities of exploration */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6) Externalities of exploration</h2>
        <p className="text-neutral-800">
          Exploration is not free. Costs fall unevenly. Identity pressure, time debt, and a translation tax can make the same path
          affordable for one learner and expensive for another. Plan counter-moves that lower those costs.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Identity pressure</strong>. Public error can produce status loss. Use low-stakes previews and private checks.</li>
          <li><strong>Time debt</strong>. Do not assume spare time. Embed practice inside class time and reduce non-essential friction.</li>
          <li><strong>Translation tax</strong>. Align task language with how records are kept. Teach the required register explicitly.</li>
          <li><strong>Credibility gap</strong>. Normalize challenge as curiosity. Publish criteria so dissent is not misread.</li>
        </ul>
      </section>

      {/* 7) Pareto surface for goals */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7) Pareto surface for goals</h2>
        <p className="text-neutral-800">
          Optimize along a surface, not a single target. Advance identity safety and epistemic openness together.
          Advance causal accuracy and coordination capacity together. Reduce exploration cost while improving feedback quality.
          Record trade-offs rather than hiding them.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li>Identity safety and epistemic openness rise together.</li>
          <li>Causal accuracy and coordination capacity rise together.</li>
          <li>Exploration cost falls while feedback quality rises.</li>
        </ul>
      </section>

      {/* 8) Formalization hooks */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8) Formalization hooks</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>I(·)</strong>. Identity function that modifies incentives and costs by category and norm.</li>
          <li><strong>X(·)</strong>. Experience process with source, timing, attention cost, and memory effects.</li>
          <li><strong>B(·)</strong>. Belief operator with identity-weighted priors and load limits. Allow high-friction attractors for Fixive Beliefs.</li>
        </ul>
        <p className="text-neutral-800">
          The plan is to formalize X and B so that task sequences can be evaluated as trajectories rather than isolated scores.
        </p>
      </section>

      {/* 9) Worked example. Electricity → electronics → computation */}
<section className="space-y-3">
  <h2 className="text-xl font-semibold">9) Worked example. Electricity → electronics → computation</h2>
  <p className="text-neutral-800">
    Without a logic frame, beliefs about electricity cluster around physical properties only. When a community adopts
    a shared encoding of Boolean values in voltage levels, new <em>focus points</em> appear and trajectories open toward
    electronics and computing. The key is the alignment between physical invariants and truth-table invariants.
  </p>

  <div className="overflow-x-auto">
    <table className="w-full text-sm border border-neutral-200">
      <thead>
        <tr className="bg-neutral-50 text-neutral-900">
          <th className="p-2 text-left border-b">Focus point</th>
          <th className="p-2 text-left border-b">Validity conditions</th>
          <th className="p-2 text-left border-b">Adjacent possible</th>
          <th className="p-2 text-left border-b">Escape hatch</th>
        </tr>
      </thead>
      <tbody className="text-neutral-900">
        <tr>
          <td className="p-2 border-t"><strong>Voltage as truth value</strong></td>
          <td className="p-2 border-t">Clear thresholds and noise margins; stable supply; limited fan-out.</td>
          <td className="p-2 border-t">Map simple switch circuits to NOT, AND, OR truth tables.</td>
          <td className="p-2 border-t">If thresholds drift, revert to physical analysis and re-establish margins.</td>
        </tr>
        <tr>
          <td className="p-2 border-t"><strong>Gate composition = function composition</strong></td>
          <td className="p-2 border-t">Deterministic gate behavior; predictable propagation delay.</td>
          <td className="p-2 border-t">Build a half-adder from gates; verify with a 4-row table.</td>
          <td className="p-2 border-t">If timing glitches, use physical frame to add buffering or adjust loads.</td>
        </tr>
        <tr>
          <td className="p-2 border-t"><strong>Finite state with memory</strong></td>
          <td className="p-2 border-t">Edge-triggered elements defined; clock integrity.</td>
          <td className="p-2 border-t">Construct a one-bit register; extend to a simple counter.</td>
          <td className="p-2 border-t">If metastability appears, analyze setup/hold in the physical frame.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="space-y-2 text-neutral-900">
    <p><strong>Constructor recipe to align frames</strong>:</p>
    <ol className="list-decimal pl-6 space-y-1">
      <li>Declare an encoding: V &lt; V<sub>T</sub> = 0 and V ≥ V<sub>T</sub> = 1. Note margins.</li>
      <li>Translate a wiring pattern into a truth table (series → AND, parallel → OR, inverter → NOT).</li>
      <li>Compose gates and compute the table of the composite function.</li>
      <li>Build the circuit, measure key nodes, and annotate mismatches with physical causes.</li>
      <li>State where the model holds and where it breaks. Record the next adjacent move.</li>
    </ol>
  </div>

  <p className="text-neutral-800">
    <strong>Belief space outcome</strong>: the community now shares new focus points and language
    (gate, threshold, truth table, state), enabling trajectories into digital electronics and computer architecture.
    Individual reference frames remain subjective but can align around these shared anchors.
  </p>
</section>

      {/* 10) Anchor line */}
      <section className="space-y-1">
        <p className="text-neutral-600 text-sm">
          Belief space is shared and intersubjective. Reference frames are subjective and align through interaction.
        </p>
      </section>

      {/* Evidence intentionally omitted until we have citations or our own data */}
    </div>
  )
}
