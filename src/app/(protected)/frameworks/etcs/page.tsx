'use client'

/**
 * ETCS: Education as a Transformative Coordination System
 * Renamed from ENDT. Nondeterminism retirement explained.
 * No em dashes.
 * Aligned with XIK-TS identity-as-reagent model.
 */

export default function ETCSPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          ETCS: Education as a Transformative Coordination System
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          ETCS models education as a system that coordinates institutional signals, learner
          identities, and social records. The same policy or pedagogical input can produce
          different learner trajectories because outcomes are shaped by the full internal state
          of the system, including identity, belief, and context, none of which are directly
          observable by the institution.
        </p>
        <p className="mt-2 text-slate-800">
          Rather than assuming fixed outcomes, ETCS focuses on how system design expands or
          constrains the set of transitions that are available to different learners, and on
          what those constraints reveal about the causal structure underneath institutional
          surface behavior.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          We use a compact tuple ⟨Q, Σ, Γ, Δ, I, F⟩ as a legend to name system components.
          It is a shared vocabulary, not a mathematical requirement.
        </p>
      </section>

      {/* From ENDT to ETCS */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">From ENDT to ETCS</h2>
        <p className="mt-3 text-slate-800">
          This framework was originally named ENDT, Education as a Non-Deterministic Transducer.
          The name has been retired. This is why.
        </p>
        <p className="mt-3 text-slate-800">
          The transducer model implied that outputs were probabilistically unpredictable given
          inputs. That is not the right frame. This work is not about probability. It is about
          how the interaction of subjective and objective mental constructs, specifically belief,
          identity, and experience, shapes human coordination. From outside the system, outcomes
          appear unpredictable because the institution cannot observe the full internal state of
          the learner. From inside, the process is causally structured. The system is not
          nondeterministic. It is opaque to institutional observation.
        </p>
        <p className="mt-3 text-slate-800">
          Coordination is the more precise description of what education actually does. It does
          not simply transmit content. It aligns, constrains, and sometimes expands the set of
          meanings, roles, and actions that are available to participants. ETCS names that
          function directly. The tuple notation is retained because it remains useful for naming
          system components precisely, not because it commits the framework to automata theory.
        </p>
      </section>

      {/* 1) Model at a glance */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Model at a glance</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-4">
            <ul className="list-disc pl-5 space-y-2 text-slate-800">
              <li>
                <span className="font-medium">Q (states)</span>. Learner positions that couple
                knowledge, identity, and agency. Examples include assimilating, bicultural,
                certified, stalled, or excluded. These are not fixed categories. They are
                snapshots of a dynamic coordination state.
              </li>
              <li>
                <span className="font-medium">Σ (inputs)</span>. Policy and pedagogical signals
                such as task design, assessment regimes, discipline, rituals, and use of time
                and space. The same input can coordinate different learners into different states.
              </li>
              <li>
                <span className="font-medium">Γ (outputs)</span>. Records and behaviors such as
                attendance, artifacts, participation, refusals, petitions, walkouts, and
                credentials. These are what the institution can observe and record.
              </li>
              <li>
                <span className="font-medium">Δ (transitions)</span>. The constrained moves
                between states, shaped by identity, belief, and institutional rules. Which
                transitions are available to which learners is a design question, not a
                natural fact.
              </li>
              <li>
                <span className="font-medium">I / F</span>. Entry legibility as a student and
                exits such as graduation, certification, redirection, or exclusion. Who is
                legible at entry and what exits are structurally available are both products
                of institutional design.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Why the tuple</h3>
            <p className="mt-2 text-slate-800">
              The tuple notation is borrowed from systems description, where compact notation
              is used to name states, inputs, and transitions precisely. ETCS uses it as a
              shared vocabulary for talking about schooling as a coordination system, not as
              a claim about formal computational structure.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Example: Input Σ is a high-stakes test. One learner moves toward focused
              practice. Another moves toward withdrawal. A third moves toward organized
              protest. The signal is identical. The transitions Δ that are viable depend
              on the full internal state of each learner, including identity and prior belief,
              none of which the test was designed to observe.
            </p>
          </div>
        </div>
      </section>

      {/* 2) Coordination, not transmission */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">2) Coordination, not transmission</h2>
        <p className="mt-2 text-slate-800">
          The dominant model of education treats it as a content delivery system. A body of
          knowledge exists. Instruction transmits it. Assessment measures how much was received.
          ETCS treats this as a description of surface structure that misidentifies the causal
          mechanism.
        </p>
        <p className="mt-3 text-slate-800">
          What education actually does is coordinate. It aligns participants around shared
          signals, roles, and records. It expands or constrains which meanings are treated as
          legitimate. It determines whose prior knowledge is legible as a starting point and
          whose must be translated or abandoned before entry is possible. These are coordination
          functions, not transmission functions, and they operate whether or not anyone
          intends them to.
        </p>
        <p className="mt-3 text-slate-800">
          The distinction matters for diagnosis. A transmission failure is a problem of
          delivery. A coordination failure is a problem of system design. Most persistent
          inequities in educational outcomes are coordination failures, not delivery failures.
          The content reached the learner. The coordination conditions did not support the
          transformation.
        </p>
      </section>

      {/* 3) Pedagogy as identity shaping */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) Pedagogy as identity shaping</h2>
        <p className="mt-2 text-slate-800">
          Teaching does more than transmit knowledge. It shapes identity, agency, and the
          sense of what actions are legitimate or risky. These effects are not side effects.
          They are primary outputs of the coordination system, whether or not they appear
          in any curriculum document.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-800">
          <li>
            <span className="font-medium">Literacy and recitation</span>. Train both skills
            and acceptable voices. Who gets to speak, in what register, and with what
            authority are all encoded in how literacy is taught.
          </li>
          <li>
            <span className="font-medium">Rituals</span>. Encode belonging, authority, and
            obedience. Routines that appear neutral carry identity signals about whose
            behavioral norms set the baseline.
          </li>
          <li>
            <span className="font-medium">Task and track design</span>. Channel which methods
            are practiced and which futures appear reachable. Tracking is a transition
            constraint, not a readiness measure.
          </li>
          <li>
            <span className="font-medium">Assessment</span>. Defines what counts as knowledge
            and what is ignored. The design of assessment is a claim about epistemology,
            even when it is not recognized as one.
          </li>
          <li>
            <span className="font-medium">Discipline and dress</span>. Signal whose norms set
            the baseline and what the cost of deviation is. These signals are received
            through the identity reagent and shape the Transformation Space accordingly.
          </li>
        </ul>
      </section>

      {/* 4) Why outcomes diverge */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Why outcomes diverge</h2>
        <p className="mt-2 text-slate-800">
          Outcomes diverge because the institution cannot observe the full internal state of
          the learner. Identity, prior belief, perceived risk, and the shape of the learner's
          current Transformation Space all mediate how institutional signals are received and
          processed. The same input does not produce the same coordination state across
          different learners.
        </p>
        <p className="mt-3 text-slate-800">
          This is not a failure of individual learners. It is a structural property of any
          coordination system that treats its inputs as if they act on identical recipients.
          The institution sends one signal. Many different identity architectures receive it.
          The diversity of outcomes is the expected result of that mismatch, not an anomaly
          requiring explanation.
        </p>
        <p className="mt-3 text-slate-800">
          Improvement therefore requires changing Σ, the signals themselves, and changing Δ,
          the set of transitions that are realistically available, and for whom. Neither is
          sufficient alone. New signals delivered through unchanged transition structures
          reproduce the same exclusions. Expanded transitions without changed signals still
          require learners to pay the full legibility tax to access them.
        </p>
      </section>

      {/* 5) Externalities and hidden costs */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">5) Externalities and hidden costs</h2>
        <p className="mt-2 text-slate-800">
          ETCS surfaces costs that are routinely externalized to students and communities
          rather than attributed to system design. These costs are real, measurable in
          attrition and delay, and are not evenly distributed.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
          <li>
            <span className="font-medium">Displacement effects</span>. Increased rigor raises
            exit rates when identity threat is high. The student who leaves is counted as
            a dropout. The coordination condition that made staying too costly is not counted
            as anything.
          </li>
          <li>
            <span className="font-medium">Legibility tax</span>. Extra effort required to
            translate thinking, experience, and knowledge into forms the institution can
            record and recognize. This tax is not paid equally. It is highest for learners
            whose prior knowledge is furthest from institutional baseline assumptions.
          </li>
          <li>
            <span className="font-medium">Role lock-in</span>. Tracks naturalize narrow
            futures. Once a learner is coordinated into a particular trajectory, the
            transition costs of exiting it compound over time.
          </li>
          <li>
            <span className="font-medium">Credibility asymmetry</span>. The same behavior
            reads differently depending on the identity the institution assigns to the
            learner. Confidence reads as arrogance. Caution reads as unpreparedness.
            The asymmetry is a coordination artifact, not a property of the behavior.
          </li>
          <li>
            <span className="font-medium">Time debt</span>. Remediation, translation, and
            navigation of institutional bureaucracy consume time that could compound into
            knowledge. Time debt accumulates faster for learners who start furthest from
            institutional legibility.
          </li>
        </ul>
      </section>

      {/* 6) Practical levers */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">6) Practical levers</h2>
        <p className="mt-2 text-slate-800">
          These are design interventions that target coordination conditions rather than
          individual learner deficits. Each addresses a specific point in the system where
          the gap between institutional assumption and learner internal state is largest.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
          <li>
            <span className="font-medium">Reference frame training</span>. Teach learners to
            name, shift, and compare frames explicitly. This lowers the legibility tax by
            making the translation process itself a learnable skill rather than a hidden
            prerequisite.
          </li>
          <li>
            <span className="font-medium">Assessment redesign</span>. Reward method reliability
            and transfer across contexts, not single-shot correctness. Assessment that measures
            only terminal output cannot observe the transformation process and therefore cannot
            support it.
          </li>
          <li>
            <span className="font-medium">Task design</span>. Use adjacent possible prompts
            that start from where the learner actually is, not where the institution assumes
            they should be. Counter-example rounds normalize revision without status loss.
          </li>
          <li>
            <span className="font-medium">Discourse norms</span>. Normalize reframing and
            revision as intellectual virtues rather than signals of insufficient preparation.
            Discourse that treats the first answer as the real answer penalizes the
            transformation process itself.
          </li>
          <li>
            <span className="font-medium">Discipline redesign</span>. Prefer restorative
            transitions over exclusion. Exclusion removes the learner from the coordination
            system entirely, eliminating any possibility of transformation within it.
          </li>
        </ul>
      </section>

      {/* Cross-links */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-slate-800">
          See{' '}
          <a className="text-indigo-700 underline" href="/frameworks/xik-ts">XIK-TS</a>{' '}
          for the learner-level transformation loop in which identity acts as a reagent,{' '}
          <a className="text-indigo-700 underline" href="/frameworks/belief-space">Belief Space</a>{' '}
          for the shared anchors that make new trajectories legible to communities, and{' '}
          <a className="text-indigo-700 underline" href="/frameworks/integration">Integration</a>{' '}
          for how all three frameworks operate together.
        </p>
      </section>

    </div>
  )
}
