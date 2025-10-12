'use client'

export default function XIKTDPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">XIK-TD — Experience, Identity, Knowledge</h1>
        <p className="text-neutral-800">
          XIK-TD describes the microdynamics of how a person turns information into knowledge while managing identity and risk.
          What looks like a simple lesson is usually a negotiation among attention, emotion, social standing, and method.
          The same prompt can create very different learning because filters and stakes differ.
        </p>
        <p className="text-neutral-800">
          A compact link to the theoretical root is: <strong>K = f(X, I, B)</strong>.
          Here <strong>X</strong> is the learner’s stream of experience, <strong>I</strong> is an identity function inspired by Identity Economics,
          and <strong>B</strong> is a belief operator. <strong>I(·)</strong> captures category membership and norms that alter payoffs and choice sets.
        </p>
      </header>

      {/* 1) The loop */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1) The loop</h2>
        <ol className="list-decimal pl-6 space-y-1 text-neutral-900">
          <li><strong>Information</strong>. Signals from instruction, peers, media, and tasks.</li>
          <li><strong>Filter</strong>. Beliefs, identity salience, emotion, cognitive load, and perceived social risk.</li>
          <li><strong>Learning</strong>. Inference, analogy, simulation in mind, and social calibration with others.</li>
          <li><strong>Knowledge</strong>. Stabilized models with conditions of validity, kept or revised across contexts.</li>
          <li><strong>Output</strong>. Behavior, artifact, or communication that expresses the model in use.</li>
          <li><strong>Feedback</strong>. Update to filters and confidence based on result and social response.</li>
        </ol>
        <p className="text-neutral-800">
          This loop can spiral upward into curiosity and transfer, or downward into withdrawal and surface compliance.
          Identity pressure and time scarcity pull the loop down. Reference-frame clarity and reliable methods pull it up.
        </p>
      </section>

      {/* 2) Knowledge types */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Knowledge types we target</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-900">
          <li>
            <strong>Intersubjective</strong>. Coordinate with others using shared rules and roles.
            This is a feedback loop that can settle toward a shared equilibrium as people adjust to one another.
            Each side’s meaning begins to reference meaning in the other.
          </li>
          <li>
            <strong>Simulactive</strong>. Run the idea forward in imagination and anticipate outcomes.
            This is integral to forming and testing reference frames.
          </li>
          <li>
            <strong>Causactive</strong>. Explain cause and effect, control variables, and predict failure modes.
            Often reinforced by information crystallized in the physical world and in stable social systems.
          </li>
          <li>
            <strong>Fixive Belief</strong> (a high-friction attractor in identity space). A belief that binds identity and resists
            counter-evidence until safety and method are in place.
          </li>
        </ul>
        <p className="text-neutral-800">
          Instruction aims to migrate Fixive Beliefs toward Simulactive and Causactive models when the domain demands it,
          without imposing an identity cost that shuts down participation.
        </p>
      </section>

      {/* 3) Reference frames (Hawkins) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Reference frames (after Hawkins)</h2>
        <p className="text-neutral-800">
          I use “reference frames” in the Hawkins sense: the cortex stores and manipulates knowledge by building map-like frames,
          not only for physical objects but also for abstract ideas. Thinking is moving through those frames; expertise is finding
          a frame that arranges facts so actions and predictions become possible.
        </p>
        <p className="text-neutral-800">
          Working gloss for this site: a reference frame is the internal scaffold that locates facts, relations, and goals so you
          can simulate, explain, and coordinate. Different frames over the same facts yield different models and different worldviews.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Name the frame</strong>. Say exactly what objects, relations, and invariants define the task.</li>
          <li><strong>Shift the frame</strong>. Practice moving to a nearby frame and check what changes and what holds.</li>
          <li><strong>Compare frames</strong>. Argue why a frame explains more with fewer assumptions and fewer errors.</li>
        </ul>
        <p className="text-neutral-800">
          This section connects directly to <strong>I(·)</strong> and <strong>B(·)</strong>: identity-linked norms influence which frames feel legitimate,
          while belief filters regulate which frames are even considered.
        </p>
      </section>

      {/* 4) Classroom practices that raise reliability */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4) Classroom practices that raise reliability</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-900">
          <li>
            <strong>Constructor recipes</strong>. Make the method public. Name the steps, checks, and typical failure modes.
            Require a short note that states where the method is valid and where it breaks.
          </li>
          <li>
            <strong>Adjacent-possible prompts</strong>. Design next steps that are one move away. Lower threat and cognitive load.
            Build momentum before jumping frames.
          </li>
          <li>
            <strong>Counter-example rounds</strong>. Reserve time for building and testing counter-cases.
            Treat a well-made counter-example as progress, not as disobedience.
          </li>
          <li>
            <strong>Revision tokens</strong>. Guarantee structured chances to revise artifacts and update a one-line changelog that names the reason.
          </li>
        </ul>
      </section>

      {/* 5) Externalities at the student level */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5) Externalities at the student level</h2>
        <p className="text-neutral-800">
          Interventions that look neutral on paper can have hidden costs that students pay privately.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li><strong>Identity threat</strong>. A public error can be a status loss that takes weeks to repair.</li>
          <li><strong>Time debt</strong>. Extra practice assumes spare time. Care work and jobs make that assumption false.</li>
          <li><strong>Translation tax</strong>. Students translate their thinking into the register the record system rewards.</li>
          <li><strong>Credibility gap</strong>. The same challenge reads as curiosity for one student and defiance for another.</li>
        </ul>
        <p className="text-neutral-800">
          Good design reduces these taxes. It does not wish them away.
        </p>
      </section>

      {/* 6) Worked example: electricity → computation */}
<section className="space-y-3">
  <h2 className="text-xl font-semibold">6) Worked example: electricity → computation</h2>

  <p className="text-neutral-800">
    Beliefs around electricity often stabilize in a purely physical frame. When we add a predicate-logic frame
    (truth tables, Boolean operators), a new class of models becomes visible: circuits as computations.
    The “matchup” between voltage levels and Boolean values changes the reachable knowledge.
  </p>

  <div className="overflow-x-auto">
    <table className="w-full text-sm border border-neutral-200">
      <thead>
        <tr className="bg-neutral-50 text-neutral-900">
          <th className="p-2 text-left border-b w-1/2">Frame A. Physical electricity</th>
          <th className="p-2 text-left border-b w-1/2">Frame B. Predicate logic / computation</th>
        </tr>
      </thead>
      <tbody className="text-neutral-900">
        <tr>
          <td className="p-2 border-t">
            <strong>Objects</strong>: battery, wires, bulb, resistor, current, voltage.<br />
            <strong>Invariants</strong>: charge conservation in closed loops; KCL/KVL as constraints.<br />
            <strong>Methods</strong>: build series/parallel, measure with meter, V–I graphs.
          </td>
          <td className="p-2 border-t">
            <strong>Objects</strong>: propositions, bits, logic gates, truth values.<br />
            <strong>Invariants</strong>: Boolean algebra; deterministic gate tables.<br />
            <strong>Methods</strong>: define truth tables, compose gates, reason about functions.
          </td>
        </tr>
        <tr>
          <td className="p-2 border-t">
            <strong>What you can see</strong>: brightness vs. resistance; current splits at junctions;
            non-ohmic behavior at limits.
          </td>
          <td className="p-2 border-t">
            <strong>What you can see</strong>: circuits implement functions f: {`{0,1}^n → {0,1}`} ;
            composition yields adders, comparators, finite-state controllers.
          </td>
        </tr>
        <tr>
          <td className="p-2 border-t">
            <strong>Limits</strong>: knowledge clusters around materials and energy flow.
          </td>
          <td className="p-2 border-t">
            <strong>Limits</strong>: needs a physical encoding of 0/1 and noise margins to be valid.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="space-y-2 text-neutral-900">
    <p><strong>Bridge constructor</strong> (makes the matchup explicit):</p>
    <ol className="list-decimal pl-6 space-y-1">
      <li>Choose a voltage threshold to encode <em>0</em> and <em>1</em> (for example, below V<sub>T</sub> = 1.0V is 0, at or above is 1).</li>
      <li>Build a switch-based circuit and record a two-column truth table: input state → lamp on/off.</li>
      <li>Generalize to two inputs with a simple AND circuit; fill the 4-row truth table.</li>
      <li>Show equivalence: physical wiring pattern ↔ Boolean operator (series = AND, parallel = OR, inverter = NOT).</li>
      <li>Compose blocks to implement a 1-bit half-adder. Verify with a meter and with the truth table.</li>
      <li>State validity conditions: thresholds, power limits, timing, fan-out. Note failure modes as learning data.</li>
    </ol>
  </div>

  <div className="space-y-2 text-neutral-900">
    <p><strong>Expected migration</strong>:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>From a <em>Fixive Belief</em> that “electricity is just energy for bulbs” to a <em>Simulactive</em> model that previews gate behavior.</li>
      <li>Toward a <em>Causactive</em> model that explains how composition of gates yields computation.</li>
    </ul>
  </div>

  <p className="text-neutral-800">
    <strong>Transfer check</strong>: predict outputs of a new gate network using only its truth tables,
    then build and measure. Explain mismatches without changing frames unless evidence requires it.
  </p>
</section>


      {/* 7) Formalization roadmap */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7) Formalization roadmap</h2>
        <ul className="list-disc pl-6 space-y-1 text-neutral-900">
          <li>
            <strong>Identity function I(·)</strong>. An explicit identity term that modifies incentives and costs by social category and norm.
            Align I(·) with role prescriptions relevant to schooling choices and task selection.
          </li>
          <li>
            <strong>Experience process X(·)</strong>. Model experience as a structured signal process with attention costs and episodic memory.
            Include source, timing, and context so the same content can yield different trajectories.
          </li>
          <li>
            <strong>Belief operator B(·)</strong>. Formalize filters as an operator over propositions with identity-weighted priors and load limits.
            Allow high-friction attractors that instantiate Fixive Beliefs until safety or method shifts the basin.
          </li>
        </ul>
      </section>

      {/* 8) How XIK-TD pairs with ENDT */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8) How XIK-TD pairs with ENDT</h2>
        <p className="text-neutral-800">
          ENDT alters the system’s input signal architecture. XIK-TD models the learner’s adaptive algorithm.
          We change the system to alter the loop, and we shape the loop so students can navigate the system with lower cost.
        </p>
      </section>

      {/* 9) Anchor line for readers */}
      <section className="space-y-1">
        <p className="text-neutral-600 text-sm">
          Grounded in Deutsch (2011) and Barrett (2017), explicitly inspired by Akerlof and Kranton (Identity Economics, 2010),
          and using Hawkins’s notion of reference frames as a practical skill target.
        </p>
      </section>

      {/* Evidence intentionally omitted until we can cite sources or present our own data */}
    </div>
  )
}
