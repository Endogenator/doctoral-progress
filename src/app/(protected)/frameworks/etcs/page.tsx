'use client'

/**
 * ETCS: Education as a Transformative Coordination System
 * Tuple notation removed throughout.
 * Automata references removed.
 * Reference frame language retained and strengthened.
 * No em dashes.
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
          ETCS models education as a system that coordinates the development and combination
          of reference frames across a population of learners. The same policy or pedagogical
          input can produce different learner trajectories because outcomes are shaped by the
          full internal state of the system, including identity, belief, and prior reference
          frame history, none of which are directly observable by the institution.
        </p>
        <p className="mt-2 text-slate-800">
          Education, properly understood, should extend the ability to develop reference frames
          and recombine them into complex beliefs capable of traversing into the adjacent
          possible. Because identity can constrain that development, transformation sometimes
          has to precede learning. A system that does not account for this will mistake
          coordination failures for individual deficits.
        </p>
        <p className="mt-2 text-slate-800">
          Rather than assuming fixed outcomes, ETCS focuses on how system design expands or
          constrains the set of transitions available to different learners, and on what those
          constraints reveal about the causal structure underneath institutional surface behavior.
        </p>
      </section>

      {/* 1) Developmental architecture */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) Developmental architecture: retaining and expanding reference frames</h2>
        <p className="mt-2 text-slate-800">
          The three stages locate the failure of the transformation function precisely: the
          system attempts Stage 3 operations on incomplete Stage 2 foundations, and Stage 2
          failures compound Stage 1 inequality. This is not a description of individual deficit.
          It is a description of system misalignment between what each stage requires and what
          the prior stage actually produced.
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-6">

          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">Stage 1: Early childhood</h3>
            <p className="mt-2 text-slate-800 text-sm">Creation of fundamental reference frames</p>
            <p className="mt-2 text-slate-800">
              The child creates the fundamental reference frames through which all subsequent
              experience will be processed: which signals matter, which relationships encode
              safety or threat, which social others are reference points for the emerging self.
              These are the simple machines of cognition. Every more complex belief structure
              built later depends on the integrity and range of what gets established here.
            </p>
            <p className="mt-2 text-slate-800">
              This stage is where inequality enters the system most deeply and most invisibly.
              Hart and Risley's research on early language exposure found that children from
              professional families hear roughly 30 million more words by age three than children
              from low-income families, producing measurable differences in vocabulary and later
              academic performance before any school intervention has occurred. Children who
              arrive at Stage 2 with different reference frame histories do not arrive with
              different potential. They arrive with different processing architectures. The
              institution that does not account for this treats the difference as deficit.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Stage 2: K-12</h3>
            <p className="mt-2 text-slate-800 text-sm">Reference frame combinatorics</p>
            <p className="mt-2 text-slate-800">
              The student learns to read, interpret, and produce the artifacts through which
              knowledge is encoded and transmitted. This is reference frame combinatorics:
              taking the fundamental frames built in Stage 1 and learning to combine them into
              complex beliefs capable of navigating argument structure, evidence use, genre
              convention, and institutional logic. The range and flexibility of those
              combinations determines what becomes thinkable.
            </p>
            <p className="mt-2 text-slate-800">
              Stage 2 is where the credential system concentrates its sorting function.
              Prerequisites, tracking, GPA thresholds, and standardized assessments all operate
              here. They determine not only who advances but what kind of combinatorial work the
              advancing student has been trained to do. A student sorted into remedial tracks
              at Stage 2 arrives at Stage 3 prepared for reference-level knowledge at best,
              with a narrowed set of combinations available and a Transformation Space that
              reflects that narrowing.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">Stage 3: Higher education</h3>
            <p className="mt-2 text-slate-800 text-sm">Approaching the adjacent possible</p>
            <p className="mt-2 text-slate-800">
              Theory of artifacts, improving artifice methods, and expanding the known. Stage 3
              is not more Stage 2. It is a qualitatively different operation: the student is now
              expected to produce knowledge that did not previously exist, to evaluate methods
              rather than merely apply them, and to operate at the boundary of their field's
              adjacent possible. This is mastery in the most precise sense: the capacity to cause
              transformations in a domain that would otherwise not occur.
            </p>
            <p className="mt-2 text-slate-800">
              The problem is that the credential system cannot distinguish students who arrive
              at Stage 3 genuinely ready for Stage 3 operations from students who have
              successfully assimilated the surface signals of Stage 2 without the underlying
              combinatorial development. The credential certifies Stage 2 completion. It says
              nothing about Stage 3 readiness.
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
          What education actually does is coordinate. More precisely, it attempts to build
          shared reference frames: common structures for organizing objects, relations, and
          invariants that allow participants to reason together, produce compatible artifacts,
          and navigate the same institutional and social terrain. This is not mimicking or
          signaling, which is what assimilation produces. It is the genuine alignment of
          cognitive structure that makes transfer and collaboration possible.
        </p>
        <p className="mt-3 text-slate-800">
          Coordination failures are not delivery failures. The content reached the learner.
          The conditions for shared reference frame development did not. Most persistent
          inequities in educational outcomes are coordination failures of this kind. The
          institution sent the signal. The learner's reference frame architecture, shaped by
          Stage 1 and Stage 2 history, processed it into something the institution did not
          intend and cannot see.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">What the institution can observe</h3>
            <p className="mt-2 text-slate-800">
              Records and behaviors: attendance, artifacts, participation, refusals, credentials.
              These are surface expressions of reference frame configurations the institution
              cannot directly observe. The same output, a passing grade, a completed credential,
              can reflect transformation or assimilation. The institution has no mechanism for
              telling them apart.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">What the institution cannot observe</h3>
            <p className="mt-2 text-slate-800">
              The full internal state of the learner: identity architecture, prior reference
              frame history, current Transformation Space, active constraints on Belief Space.
              These determine how any given signal is received and processed. A high-stakes
              test sends one signal. One learner moves toward focused practice. Another toward
              withdrawal. A third toward memorization or cheating. The signal is identical.
              The processing is not.
            </p>
          </div>
        </div>
      </section>

      {/* 3) The singular purpose problem */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) The singular purpose problem</h2>
        <p className="mt-2 text-slate-800">
          Higher education serves incommensurable purposes simultaneously. Workforce preparation,
          civic formation, personal development, credentialing, research production, and social
          mobility are not merely different emphases. They produce conflicting design requirements.
          A system optimized for one degrades performance on the others. None of them,
          individually or in combination as currently managed, reliably produces Stage 3
          capability: the ability to approach the adjacent possible of a domain and cause
          transformations that would otherwise not occur.
        </p>
        <p className="mt-3 text-slate-800">
          The incommensurability is compounded by increasing specialization in the targets
          higher education is supposed to serve. Each output domain has grown more divergent
          over time, which means the credential system is simultaneously trying to serve more
          specialized endpoints with the same mechanism. Credentialing becomes the primary
          signal because it is the only one legible across all those endpoints. But it resolves
          the incommensurability by collapsing it rather than addressing it. The result is a
          system structurally biased against the learner who has achieved genuine reference
          frame complexity. A person who can navigate any domain because they have mastered
          the combinatorial architecture of thinking will never get the opportunity to
          demonstrate that. What the credential system offers instead is a fixed time window
          to demonstrate domain-specific fitness. Breadth and transferability are not just
          unmeasured. They are penalized, because time spent developing them is time not
          spent accumulating the domain-specific signals the credential requires. The generalist
          who could exceed in multiple fields will not get the chance because the selection
          mechanism was not designed to see them.
        </p>
        <p className="mt-3 text-slate-800">
          The feedback loop between credentialing and specialization makes this progressively
          worse. Credentials drive specialization by requiring legible domain-specific output.
          Specialization feeds back into what the institution treats as valuable and fundable.
          That reshapes the artifact and narrative environment, which narrows the adjacent
          possible for learners before they arrive. The current overvaluing of STEM relative
          to philosophy is a live example of this loop operating at scale. STEM credentials
          are legible to the workforce endpoint. Philosophy credentials increasingly are not.
          So the institution defunds philosophy, which reduces artifact creation and narrative
          propagation from that domain, which makes philosophical reference frames less
          available in the collective Belief Space, which means fewer learners develop them,
          which means fewer people are equipped to ask the foundational questions about what
          the credential system is actually for. The loop is self-sealing. It produces more
          specialized outputs while progressively narrowing the reference frame architecture
          available to the population as a whole.
        </p>
        <p className="mt-3 text-slate-800">
          Any measurement or quality assurance system built on incommensurable purposes will
          be politically rather than analytically determined. The metrics that get selected
          will reflect the purposes of whoever controls the selection process, not the full
          range of what the system is supposed to do. Correlative meaning explains why this
          persists without producing obvious dysfunction. The same proxy measure, a graduation
          rate, a licensure pass rate, an employer satisfaction survey, means different things
          to different stakeholders. Each stakeholder reads the proxy as confirming the purpose
          they prioritize. The metric stabilizes politically while remaining analytically
          incoherent. The stability is the problem. It prevents the incoherence from becoming
          visible long enough to be addressed.
        </p>
      </section>

      {/* 4) Pedagogy as identity shaping */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Pedagogy as identity shaping</h2>
        <p className="mt-2 text-slate-800">
          Teaching does more than transmit knowledge. It shapes identity, agency, and the
          sense of what reference frame combinations are legitimate or risky. These effects
          are not side effects. They are primary outputs of the coordination system, whether
          or not they appear in any curriculum document.
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
            reference frame architecture sets the baseline.
          </li>
          <li>
            <span className="font-medium">Task and track design</span>. Channel which
            combinations are practiced and which futures appear reachable. Tracking is a
            transition constraint, not a readiness measure.
          </li>
          <li>
            <span className="font-medium">Assessment</span>. Defines what counts as knowledge
            and what is ignored. The design of assessment is a claim about which reference
            frame configurations are legitimate, even when it is not recognized as one.
          </li>
          <li>
            <span className="font-medium">Discipline and dress</span>. Signal whose norms set
            the baseline and what the cost of deviation is.
          </li>
        </ul>
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
            exit rates when identity threat is high. The student who leaves is counted as a
            dropout. The coordination condition that made staying too costly is not counted
            as anything.
          </li>
          <li>
            <span className="font-medium">Legibility tax</span>. Extra effort required to
            translate thinking, experience, and knowledge into forms the institution can
            record and recognize. This tax is highest for learners whose reference frame
            history is furthest from institutional baseline assumptions.
          </li>
          <li>
            <span className="font-medium">Role lock-in</span>. Tracks naturalize narrow
            futures. Once a learner is coordinated into a particular trajectory, the
            transition costs of exiting it compound over time.
          </li>
          <li>
            <span className="font-medium">Credibility asymmetry</span>. The same behavior
            reads differently depending on the identity the institution assigns to the
            learner. The asymmetry is a coordination artifact, not a property of the behavior.
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
          the gap between institutional assumption and learner reference frame architecture
          is largest.
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
            only terminal output cannot observe the reference frame development process and
            therefore cannot support it.
          </li>
          <li>
            <span className="font-medium">Task design</span>. Use adjacent possible prompts
            that start from where the learner actually is. Counter-example rounds normalize
            revision without status loss.
          </li>
          <li>
            <span className="font-medium">Discourse norms</span>. Normalize reframing and
            revision as intellectual virtues rather than signals of insufficient preparation.
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
