/**
 * XIK-TS: Experience, Identity, Knowledge -- Transformation Space
 * Updated from XIK-TD: Transformation Domain renamed to Transformation Space.
 * Identity role updated from "filter/operator" to "reagent."
 * Frequency domain analogy made explicit.
 * Style aligned to ENDT / Belief Space pages.
 * No em dashes.
 */

import { InlineMath, BlockMath } from 'react-katex'

export default function XIKTSPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          XIK-TS: Experience, Identity, Knowledge -- Transformation Space
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          XIK-TS is a unified theory of epistemology. It models how lived experience is transformed
          into knowledge, mediated by identity acting as a reagent. The framework treats the four
          classical branches of epistemology -- empiricism, rationalism, constructivism, and social
          epistemology -- not as competing theories but as descriptions of different layers of the
          same process.
        </p>
        <p className="mt-2 text-slate-800">
          The Transformation Space (TS) is a higher-level abstraction, analogous to the frequency
          domain in signal processing. Where XIK describes the components of the transformation
          process, TS is the domain in which the transfer function of the identity system becomes
          visible -- revealing which inputs are amplified, which are attenuated, and which
          transformations are structurally available to a given person or system.
        </p>
        <p className="mt-2 text-slate-800 text-sm">
          We use the compact expression{' '}
          <span className="font-medium">K = f(X, I)</span> as a legend for clarity, not as a
          mathematical requirement. Identity is a reagent, not a variable to be solved for.
        </p>
      </section>

      {/* 0) Origin and naming */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">0) Origin and naming</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">

          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">The frequency domain analogy</h3>
            <p className="mt-2 text-slate-800">
              In signal processing, the same signal can be expressed in the time domain or the
              frequency domain. The frequency domain does not describe different events -- it
              reveals structure that is invisible in the time domain. The transfer function of
              a system becomes visible only at this higher level of abstraction: which frequencies
              pass through, which are filtered out, and how the system reshapes what it receives.
            </p>
            <p className="mt-2 text-slate-800">
              The Transformation Space is the epistemological equivalent. XIK describes the
              components: experience as input, identity as reagent, knowledge as output. TS is
              the domain in which the transfer function of the identity system becomes visible.
              It describes the boundary of what is thinkable and reachable for a given person
              at a given moment -- not as a fixed property but as a function of the conditions
              the system creates.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Identity as reagent</h3>
            <p className="mt-2 text-slate-800">
              Earlier formulations described identity as a filter or operator. These terms
              understate the active, participatory role identity plays. In chemistry, a reagent
              participates in a reaction and drives it in a particular direction without being
              fully consumed and without fully determining the outcome. This is the more precise
              description of how identity functions in the transformation process.
            </p>
            <p className="mt-2 text-slate-800">
              Identity is not a passive recipient of experience. It is not the sole determinant
              of what becomes knowledge. It participates in the reaction, shapes which inputs
              get processed and how, and is itself changed -- sometimes slightly, sometimes
              fundamentally -- by the process it facilitates.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Identity also weights the four epistemological branches differently. A person with
              a strong empirical identity will discount knowledge claims that arrive without data.
              A person whose identity is rooted in community and lived experience will discount
              knowledge abstracted from context. These weightings are themselves a function of
              the identity system -- not fixed preferences but emergent properties of accumulated
              experience.
            </p>
          </div>

        </div>
      </section>

      {/* 1) The ontological layer */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">1) The ontological layer: what experience actually is</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">

          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">Information encoded in instantiation</h3>
            <p className="mt-2 text-slate-800">
              Informed by David Deutsch's constructor theory, XIK-TS treats the universe as
              instantiating things -- and in doing so, encoding information about what those
              things are, how they behave, and what transformations are physically possible.
              Ontological information is not abstract. It is embedded in what has been made real.
            </p>
            <p className="mt-2 text-slate-800">
              A hot stove encodes information about heat and consequence. A prerequisite sequence
              encodes information about who the institution believes is ready and under what
              conditions. A social interaction encodes information about whose voice registers
              as intelligible in that environment. The information is present in the event itself,
              not in anyone's interpretation of it.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Experience as interface</h3>
            <p className="mt-2 text-slate-800">
              Experience (X) is not simply what happens to a person. It is the interface between
              what is instantiated in the world and what a person is capable of perceiving. Two
              people can have the same experience and extract fundamentally different knowledge
              from it -- not because the ontological information differs, but because their
              identity reagents weight and process it differently.
            </p>
            <p className="mt-2 text-slate-800">
              Knowledge (K) is therefore not the accumulation of facts. It is the expansion of
              what a person can perceive as possible. The Transformation Space describes the
              boundary of that expansion at any given moment.
            </p>
          </div>

        </div>
      </section>

      {/* 2) Model at a glance */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">2) Model at a glance</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">

          <div className="rounded-2xl border border-slate-200 p-4">
            <ul className="list-disc pl-5 space-y-2 text-slate-800">
              <li>
                <span className="font-medium">X -- Experience</span>. Contact with ontological
                information. Structured signals from events, interactions, tasks, media, and
                environments across time and source.
              </li>
              <li>
                <span className="font-medium">I -- Identity (reagent)</span>. The system of
                filters, weightings, and validators that participates in and shapes the
                transformation reaction. Not a passive filter, not a total determinant. A reagent.
              </li>
              <li>
                <span className="font-medium">K -- Knowledge</span>. The expansion of what a
                person can perceive as possible. Stabilized enough to simulate futures, explain
                causes, or coordinate with others across contexts.
              </li>
              <li>
                <span className="font-medium">TS -- Transformation Space</span>. The higher-level
                abstraction. The boundary of what is thinkable and reachable for a given person
                or system at a given moment. The domain in which the transfer function of the
                identity system becomes visible.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">The transformation loop</h3>
            <p className="mt-2 text-slate-800">
              Experience enters the system. Identity acts as reagent, participating in the
              transformation of experience into knowledge. Knowledge expands the Transformation
              Space, which changes the conditions under which future experience is processed.
              The loop is recursive and non-deterministic: the same input produces different
              outputs depending on the state of the identity reagent and the prior shape of
              the Transformation Space.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              The loop can expand toward greater perceptual range and epistemic flexibility,
              or contract toward narrower processing and rejection of inputs that challenge
              existing knowledge states. Identity dissonance -- when two identity components
              produce contradictory weightings of the same experience -- is the condition under
              which genuine transformation is most likely and also most threatened.
            </p>
          </div>

        </div>
      </section>

      {/* 3) Identity complexity */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">3) Identity complexity and intersectionality</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">

          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">Identity as a complex adaptive system</h3>
            <p className="mt-2 text-slate-800">
              Identity is not monolithic. It is itself a system with multiple components --
              professional identity, cultural identity, experiential identity, aspirational identity
              -- that can be in tension with each other. Each component weights the four
              epistemological branches differently and can produce conflicting responses to
              the same experience.
            </p>
            <p className="mt-2 text-slate-800">
              The concept of intersectionality names the phenomenon of multiple identity categories
              producing outcomes that are not simply additive. XIK-TS attempts to go further:
              to model how competing identity components weight ontological information differently,
              how dissonance between identity layers can block transformation in one moment and
              catalyze it in another, and how the identity system itself can be transformed by
              experiences significant enough to shift the processing architecture.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Dissonance as transformation condition</h3>
            <p className="mt-2 text-slate-800">
              Identity dissonance is typically treated in the literature as a problem to be
              resolved. In XIK-TS, dissonance is also potentially the engine of transformation.
              When two identity components produce contradictory weightings of the same
              experience, the system is forced to either suppress one, reweight both, or form
              a new synthesis.
            </p>
            <p className="mt-2 text-slate-800">
              That is precisely the condition under which genuine knowledge transformation
              becomes possible. It is also, not coincidentally, what a well-designed educational
              experience should be structured to produce -- not dissonance as harm, but
              dissonance as productive instability within a system that provides sufficient
              support for the synthesis to occur.
            </p>
          </div>

        </div>
      </section>

      {/* 4) Educational implications */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold">4) Educational implications</h2>
        <p className="mt-2 text-slate-800">
          If knowledge is the expansion of what a person can perceive as possible, then education
          is not primarily a content delivery problem. It is a Transformation Space design problem.
          The question is not what to teach but what conditions will allow the ontological-to-epistemic
          transformation to occur for a given person with a given identity architecture at a
          given moment.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-6">

          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">Curriculum as transformation infrastructure</h3>
            <p className="mt-2 text-slate-800">
              The traditional definition of curriculum describes what the institution selects
              as valid knowledge and how it sequences that knowledge for transmission. A XIK-TS
              definition describes curriculum as the architecture of possible transformation:
              the structured conditions that determine which students can encounter which
              ontological information, under what circumstances, and with what institutional
              support. These are not competing definitions. They operate at different levels
              of analysis. The traditional definition describes surface structure. The XIK-TS
              definition describes the causal layer underneath it.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <h3 className="text-lg font-semibold">Pedagogy as transformation condition</h3>
            <p className="mt-2 text-slate-800">
              Pedagogy is the set of enacted conditions that either support or obstruct the
              ontological-to-epistemic transformation for a given student in a given moment.
              A pedagogy that positions the student as a passive recipient is not merely
              ineffective. It is structurally incompatible with transformation, because
              transformation requires the learner to be an active processor of experience.
            </p>
            <p className="mt-2 text-slate-800">
              What XIK-TS adds to Freire's banking model critique is the identity layer: even
              a pedagogy that invites active processing will fail if the student's identity
              architecture is not in a state that permits integration of the new experience.
              This is why the same classroom can produce transformation for one student and
              reinforce marginalization for another.
            </p>
          </div>

        </div>
      </section>

      {/* Cross-links */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-slate-800">
          See{' '}
          <a className="text-indigo-700 underline" href="/frameworks/endt">ENDT</a>{' '}
          for the institutional system that shapes which transformation conditions are available,{' '}
          <a className="text-indigo-700 underline" href="/frameworks/belief-space">Belief Space</a>{' '}
          for how communities stabilize shared meanings and anchors, and{' '}
          <a className="text-indigo-700 underline" href="/frameworks/integration">Integration</a>{' '}
          for how all three frameworks operate together as a single design framework.
        </p>
      </section>

    </div>
  )
}