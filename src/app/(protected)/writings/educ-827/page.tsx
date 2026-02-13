'use client'

import React, { useMemo, useState } from 'react'

export default function LeadershipAsAlignmentVerificationPage() {
  // Soft copy-blocking toggle (default: locked)
  const [selectionEnabled, setSelectionEnabled] = useState(false)

  const context = useMemo(
    () => ({
      course: 'EDUC 827 – Leadership and Practice in Education',
      institution: 'University of Redlands',
      instructor: 'Dr. Ursula Estrada-Reveles',
      date: 'November 30, 2025',
      type: 'Course paper',
      author: 'Brian Davis',
    }),
    []
  )

  const toc = useMemo(
    () => [
      { id: 'context', label: 'Context' },
      { id: 'abstract', label: 'Abstract' },
      { id: 'paper', label: 'Paper' },
      { id: 'references', label: 'References' },
    ],
    []
  )

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
      {/* Sidebar */}
      <aside className="lg:sticky lg:top-6 h-fit">
        <nav className="rounded-2xl p-4 border border-slate-200 bg-white shadow-sm">
          <p className="text-sm font-semibold tracking-wide text-slate-700 mb-2">
            On this page
          </p>
          <ul className="space-y-1">
            {toc.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block text-sm text-slate-700 hover:text-emerald-800 transition-colors rounded px-2 py-1"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
            <p className="text-xs text-slate-600">
              Copy protection is enabled by default. This discourages casual copying,
              but it cannot fully prevent reuse on the web.
            </p>

            <button
              type="button"
              onClick={() => setSelectionEnabled((v) => !v)}
              className="w-full rounded-xl px-3 py-2 text-sm font-medium border border-slate-300 hover:bg-slate-50"
            >
              {selectionEnabled ? 'Disable selection' : 'Enable selection'}
            </button>

            <p className="text-xs text-slate-600">
              If you are a mentor reviewing this work, enabling selection can make quoting
              easier during feedback.
            </p>
          </div>
        </nav>
      </aside>

      {/* Main */}
      <main>
        <section className="rounded-3xl border border-slate-200 p-6 md:p-8 bg-white shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Leadership as Alignment Verification
          </h1>
          <p className="mt-2 text-lg text-slate-800">
            Meaning, Drift, and Error Correction in Educational Organizations
          </p>

          <div
            id="context"
            className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <h2 className="text-xl font-semibold">Context</h2>

            <dl className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <Item label="Author" value={context.author} />
              <Item label="Course" value={context.course} />
              <Item label="Institution" value={context.institution} />
              <Item label="Instructor" value={context.instructor} />
              <Item label="Date" value={context.date} />
              <Item label="Document type" value={context.type} />
            </dl>

            <p className="mt-4 text-sm text-slate-700">
              This paper was written as part of doctoral coursework. It is shared here to
              document intellectual development and invite feedback. It is not presented
              as a finalized or peer-reviewed claim.
            </p>

            <p className="mt-2 text-sm text-slate-700">
              Please do not copy or redistribute without permission.
            </p>
          </div>
        </section>

        {/* Abstract */}
        <section
          id="abstract"
          className="mt-8 rounded-3xl border border-slate-200 p-6 md:p-8 bg-white shadow-sm"
        >
          <h2 className="text-2xl font-semibold">Abstract</h2>
          <p className="mt-3 text-slate-800 leading-7">
            Leadership is often conceptualized as a set of traits, skills, or positional
            authorities, yet these framings fail to account for the complex ways meaning
            moves through educational organizations. This paper argues that leadership is
            best understood as a system of alignment verification. Meaning, like a signal,
            passes through layers of interpretation where it can drift or distort. Drawing
            on Shannon’s information theory, mission and strategy function as continuous
            signals that must be repeatedly reconstructed by faculty, shaped by culture,
            and experienced by students. Drift emerges naturally because interpretation is
            influenced by identity, incentives, and local norms. This paper presents a model
            adapted from Shannon that positions leadership as the observer of reconstructed
            meaning, using strategy and policy as correcting mechanisms. Insights from narrative
            theory, identity economics, and leadership research help explain how meaning spreads
            or mutates. The paper also examines the limitations of apex leadership models, where
            meaning becomes compressed into a single figure, reducing the system’s capacity to
            detect and correct drift. A distributed approach to leadership aligns more closely
            with how meaning moves in education. Conceptualizing leadership as alignment verification
            offers a practical framework for maintaining coherence across interpretive layers.
          </p>
        </section>

        {/* Paper body */}
        <section
          id="paper"
          className="mt-8 rounded-3xl border border-slate-200 p-6 md:p-8 bg-white shadow-sm"
        >
          <div
            className={[
              'space-y-5',
              selectionEnabled ? '' : 'select-none',
            ].join(' ')}
            onContextMenu={(e) => {
              if (!selectionEnabled) e.preventDefault()
            }}
          >
            <Paragraph>
              My earliest exposure to leadership came when I enlisted in the Marine Corps,
              where hierarchy was as plain as the green of our uniforms. Years later, during
              my MBA program, leadership reappeared in courses on management, power, and organizational
              behavior. In the years between military service and graduate school, I studied economics,
              computer science, and cognitive science, and I ran my own small business. These experiences
              made the traditional leadership models I encountered feel increasingly unconvincing. They
              felt too simple for the complexity of real human behavior. I began to see leadership models
              that focused on traits and titles as incomplete because the real mechanisms seemed to live
              in the system itself: how people interpret signals, how meaning spreads or mutates, and how
              organizations drift when no one is monitoring the transmission of meaning.
            </Paragraph>

            <Paragraph>
              Across different jobs, I worked under managers in both small businesses and large organizations,
              and I rarely encountered leadership that reached deeper than surface-level direction. The pattern
              was consistent. After minimal training, I was left to reverse-engineer the actual processes the job
              required. When I later became a business owner, I saw the same pattern from the other side. Staff
              settled into “good enough” outcomes whenever meaning was unclear or reinforced only inconsistently.
              When I eventually learned about emergent strategy, I gained the language to describe what I had been
              observing. Strategy alone cannot produce alignment. Its success depends on how it is interpreted and
              enacted across every layer the strategy touches.
            </Paragraph>

            <Paragraph>
              The first transformation of any strategy occurs the moment it is communicated. Every act of communication
              is also an act of interpretation. Shannon’s model of communication shows that messages pass through a medium
              where noise can alter what the receiver reconstructs (Shannon, 1948). Watching this play out in real organizations
              changed how I viewed leadership. Organizations began to resemble information transducers, systems that convert meaning
              into intent and intent into action. Leadership speaks at the highest level, but the message is reshaped each time it
              passes through an organizational layer. Employees believe they know what the message means, often with great confidence,
              yet their interpretations differ. These are the moments when meaning becomes vulnerable to drift. Managing that drift is
              the real work of leadership.
            </Paragraph>

            <Paragraph>
              To understand leadership in these terms, it is necessary to model how meaning is built and rebuilt across an organization’s
              layers, from individuals and teams to departments and whole institutions. This is not an attempt to reduce leadership to an
              algorithm. Instead, it recognizes that modeling how meaning is reconstructed allows leaders to identify where drift occurs and
              where correction is required. Even leaders misinterpret their own intentions. Mission statements become performative, and strategy
              can be written to sound strong or fair without considering how people will interpret it in practice. The work of leadership is not
              to achieve perfect fidelity but to pursue it through continuous correction. This pursuit requires engaging with how information becomes
              meaning, how alignment forms or erodes, and how narrative acts as the medium through which meaning travels. It also requires understanding
              why the idea of an apex leader creates the illusion of alignment but often fails to sustain it.
            </Paragraph>

            <Paragraph>
              This view echoes Senge’s argument for a learning organization, which depends on shared mental models, systems thinking, and the continual
              refinement of collective understanding (Senge, 2006). Yet Senge does not fully articulate how shared meaning is maintained across complex systems.
              Traditional leadership approaches depend heavily on rhetoric and personal influence to produce alignment. This paper instead draws from information
              theory, narrative analysis, identity theory, and contemporary leadership research to show how alignment is created, lost, and restored. Through this
              lens, leadership becomes a discipline of maintaining coherence under conditions of interpretive drift.
            </Paragraph>

            <h3 className="text-xl font-semibold pt-2">Information flow, drift, and fidelity</h3>

            <Paragraph>
              Claude Shannon’s foundational work on information theory offers a useful way to make sense of these dynamics. Shannon described communication as a
              process in which a signal is produced, transmitted through a medium, distorted by noise, and reconstructed by a receiver (Shannon, 1948). While designed
              for electronic systems, this structure maps closely onto the movement of mission, vision, and strategy through human systems. Educational organizations
              transmit meaning through people, processes, and culture, all of which act as channels where distortion can occur.
            </Paragraph>

            <Paragraph>
              In this context, entropy represents the likelihood that an employee will interpret leadership intent differently than intended. Variation in professional
              experience, identity, incentives, and local culture introduces interpretive uncertainty. Even when leaders believe their communication is clear, meaning often
              shifts as it passes through organizational layers. This drift is not a failure of individuals but a predictable property of communication. Shannon’s observation
              that all signals are vulnerable to noise helps explain why educational organizations struggle to maintain alignment between strategic intent and everyday practice.
            </Paragraph>

            <Paragraph>
              Shannon also distinguished between discrete and continuous information sources. Discrete signals can be measured with predictable entropy values, while continuous
              signals require evaluations of fidelity, meaning the degree to which the reconstructed signal must match the original before it becomes inaccurate. Mission and vision
              operate as continuous signals. They are interpreted rather than copied, reconstructed rather than repeated. Leadership must therefore define how closely local interpretations
              must match organizational intent to preserve coherence. In an educational context, alignment serves as the organization’s fidelity requirement. It becomes the threshold of
              acceptable interpretive variation before corrective action becomes necessary.
            </Paragraph>

            {/* ✅ UPDATED PARAGRAPH (your tweak) */}
            <Paragraph>
              While Shannon’s original models were designed to describe the transmission of technical signals, the architecture is analytically useful for examining how meaning moves through organizations. In educational institutions, meaning is not simply transmitted but continuously distorted, corrected, and renegotiated through culture, leadership practices, and institutional feedback mechanisms. Figure 1 reframes Shannon’s sender–receiver logic to make these dynamics explicit, allowing ideal leadership alignment to be analyzed as an ongoing process of error detection and correction rather than a static statement of mission.
            </Paragraph>

            <figure className="rounded-3xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <figcaption className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">
                    Figure 1. Meaning transmission within educational organizations (analytical schematic)
                  </p>
                  <p className="text-sm text-slate-700 leading-6 max-w-3xl">
                    Applied, modified combination of Shannon’s Figures 1 and 8. Leadership intent (mission and vision)
                    is encoded through communications, transmitted through culture, reconstructed in faculty and staff
                    practice, and continuously distorted by noise. A correcting device uses correction data to detect drift
                    and realign meaning over time. The core claim is that leadership effectiveness depends on feedback-based
                    correction and distributed observation, not one-time message clarity.
                  </p>
                </figcaption>
              </div>

              <div className="mt-4 overflow-x-auto">
                <img
                  src="/images/figures/leadership-alignment-shannon-redux.png"
                  alt="Diagram of meaning transmission in educational organizations: leading group, mission and vision, leadership communications, culture, faculty and staff, noise source, correcting device, and correction data form a feedback system."
                  className="w-full h-auto rounded-xl border border-slate-200"
                />
              </div>
            </figure>

            <Paragraph>
              Story is essential to this process because it carries semantic DNA. Harold Johnson argues that people live inside the stories they tell and that these stories shape
              reality and possibility. In an organization, story is the medium through which purpose becomes shared. When leaders communicate through narratives, they help faculty interpret
              the semantic DNA embedded in communication and strategy. When culture reinforces these narratives, students experience a coherent educational environment. When stories conflict
              or drift, meaning fractures. Faculty then interpret strategy based on personal heuristics, culture shifts to accommodate inconsistent messages, and students receive a distorted
              version of the organization’s purpose.
            </Paragraph>

            <Paragraph>
              Narrative also functions as a system of heuristics. People rely on stories to simplify complex environments and determine how they should act. These stories embed identity assumptions,
              which Akerlof and Kranton describe as significant determinants of behavior and interpretation (Akerlof & Kranton, 2000). When identity and narrative align with mission, interpretive
              coherence increases. When they diverge, drift accelerates. Leadership must therefore tend to the stories circulating in the organization and listen for narrative cues that indicate where
              semantic DNA is mutating.
            </Paragraph>

            <h3 className="text-xl font-semibold pt-2">Apex leadership as lossy compression</h3>

            <Paragraph>
              The belief in the need for an apex leader intensifies this drift. Toby Stuart’s analysis of anointed leadership shows how groups converge on leaders through aggregated heuristics rather
              than through demonstrated explanatory clarity (Stuart, 2024). The apex leader becomes a symbol that compresses organizational complexity into a single persona. This is a form of lossy
              compression. Reducing the organization’s meaning system to one node may feel efficient, but it reduces fidelity and weakens the system’s capacity for error correction. When meaning becomes
              tied to a single figure, faculty interpret strategy as personal preference, culture mirrors personality rather than purpose, and students receive a narrow reconstruction of the semantic DNA.
              Leadership becomes a bottleneck rather than a distributed observer of meaning.
            </Paragraph>

            <Paragraph>
              Distributed leadership addresses this limitation by recognizing that meaning moves through the organization in many directions. Faculty transmit meaning through practice. Culture transmits meaning
              through norms and interactions. Students transmit meaning back into the system through engagement and outcomes. Leadership that depends on a single viewpoint cannot evaluate these multiple reconstructions
              accurately. Distributed leadership aligns more closely with Deutsch’s view that progress depends on systems capable of detecting and correcting errors from many vantage points (Deutsch, 2011). When multiple
              observers engage in alignment verification, the organization becomes more resilient and better able to maintain coherence across diverse contexts.
            </Paragraph>

            <h3 className="text-xl font-semibold pt-2">Conclusion</h3>

            <Paragraph>
              Understanding leadership as alignment verification reframes it as a systemic capacity. Leaders do not control meaning. They steward it. They listen to how meaning is reconstructed across layers, identify where
              semantic DNA has drifted, and use strategy and policy as correcting devices to restore alignment. They curate stories that reinforce purpose, encourage feedback that reveals distortion, and cultivate the shared mental
              models necessary for organizational learning. This approach aligns with Senge’s belief that learning organizations thrive when their members continually refine their understanding together.
            </Paragraph>

            <Paragraph>
              Educational organizations succeed not because messages are perfectly delivered but because they maintain systems that continually observe, interpret, and correct meaning. Leadership becomes the practice of maintaining
              semantic fidelity across layers of interpretation. This perspective acknowledges the complexity of educational systems and provides a practical model for sustaining coherence in the face of inevitable drift.
            </Paragraph>

            <Paragraph>
              Leadership as alignment verification offers a practical and forward-looking framework for improving educational practice. When leaders focus on stewarding meaning rather than controlling people, the organization becomes
              more adaptive, more coherent, and more capable of learning from its own variation. This perspective does not diminish formal roles. Instead, it recasts them as essential nodes within a larger system dedicated to monitoring,
              interpreting, and correcting meaning. Leaders create conditions in which the organization’s semantic DNA can replicate with fidelity across layers of practice. They design communication in ways that reduce entropy, strengthen
              narrative coherence, and support shared understanding.
            </Paragraph>

            <Paragraph>
              Viewing leadership in this way also provides a more realistic perspective on organizational drift. Drift is not necessarily a sign of incompetence or resistance. It is a predictable feature of systems in which meaning is filtered
              through human interpretation. People construct understanding through identity, lived experiences, local incentives, and the informal narratives that surround them. These interpretive processes can reinforce the mission when the semantic
              DNA is clear, but they can also produce divergence when meaning becomes fragmented. Leaders who expect perfect replication will be disappointed. Leaders who anticipate variation and build structures for continuous correction will be better
              positioned to guide the organization toward long-term coherence.
            </Paragraph>

            <Paragraph>
              A systemic perspective also exposes the limitations of technical solutions that attempt to solve alignment problems solely through more rules or more procedural details. Technical solutions cannot eliminate drift because they cannot
              anticipate every contextual nuance. Research on sensemaking demonstrates that policy messages are inevitably reconstructed at the point of practice (Weick, 1995). Studies of policy mediation show that teachers adapt reforms through collective
              interpretation, producing consistent patterns of variation even under uniform directives (Coburn, 2001). This is why sustainable coherence requires leaders who understand how meaning moves and who invest in alignment verification as an ongoing
              practice.
            </Paragraph>

            <Paragraph>
              Educational organizations are uniquely susceptible to drift because they operate in environments where identities, expectations, and cultural narratives interact constantly. Students reconstruct meaning based on their lived experiences. Faculty
              interpret policy through the lens of professional history and motivation. Culture evolves as norms shift in response to community influences. Leadership that intends to maintain coherence must participate fully in this interpretive ecosystem
              rather than attempt to stand apart from it.
            </Paragraph>

            <Paragraph>
              Understanding leadership as alignment verification clarifies the work required in these environments. The task involves listening to faculty sensemaking, monitoring community narratives, studying student outcomes as reflections of reconstructed
              meaning, and adjusting communication and strategy as needed. It involves curating stories that reflect the organization’s purpose and helping members interpret those stories consistently. Distributed leadership research argues that leadership
              is most effective when it is shared across actors who collectively influence practice (Spillane, 2006). Attention must be distributed so that meaning reconstruction can be observed and corrected from multiple vantage points.
            </Paragraph>

            <Paragraph>
              Leadership becomes a collective function aimed not at enforcing compliance but at sustaining coherence. When practiced this way, leadership reduces fragmentation, reinforces shared purpose, and strengthens the organization’s capacity for learning
              and growth. It also helps the system handle complexity without collapsing into simplified narratives or dependence on a single interpreter of mission. The result is a more resilient organization in which meaning moves with greater fidelity and in
              which participants feel responsible for maintaining the integrity of the semantic DNA.
            </Paragraph>
          </div>
        </section>

        {/* References */}
        <section
          id="references"
          className="mt-8 rounded-3xl border border-slate-200 p-6 md:p-8 bg-white shadow-sm"
        >
          <h2 className="text-2xl font-semibold">References</h2>
          <ul className="mt-4 list-disc pl-5 text-slate-800 space-y-2">
            <li>
              Akerlof, G. A., &amp; Kranton, R. E. (2000). Economics and identity. <em>Quarterly Journal of Economics</em>, 115(3), 715–753.
            </li>
            <li>
              Argyris, C., &amp; Schön, D. (1996). <em>Organizational learning II: Theory, method, and practice</em>. Addison-Wesley.
            </li>
            <li>
              Coburn, C. E. (2001). Collective sensemaking about reading: How teachers mediate reading policy in their professional communities. <em>Educational Evaluation and Policy Analysis</em>, 23(2), 145–170.
            </li>
            <li>
              Denning, S. (2005). <em>The leader’s guide to storytelling: Mastering the art and discipline of business narrative</em>. Jossey-Bass.
            </li>
            <li>
              Deutsch, D. (2011). <em>The beginning of infinity: Explanations that transform the world</em>. Viking.
            </li>
            <li>
              Johnson, H. R. (2022). <em>The power of story: On truth, the trickster, and new fictions for a new era</em>. Biblioasis.
            </li>
            <li>
              Labaree, D. F. (1997). Public goods, private goods: The American struggle over educational goals. <em>American Educational Research Journal</em>, 34(1), 39–81.
            </li>
            <li>
              Senge, P. M. (2006). <em>The fifth discipline: The art and practice of the learning organization</em> (Revised ed.). Doubleday.
            </li>
            <li>
              Shannon, C. E. (1948). A mathematical theory of communication. <em>Bell System Technical Journal</em>, 27(3), 379–423; 27(4), 623–656.
            </li>
            <li>
              Spillane, J. P. (2006). <em>Distributed leadership</em>. Jossey-Bass.
            </li>
            <li>
              Stuart, T. E. (2024). <em>Anointed: Power, privilege, and the rise of leaders</em>. Yale University Press.
            </li>
            <li>
              Weick, K. E. (1995). <em>Sensemaking in organizations</em>. Sage.
            </li>
          </ul>

          <p className="mt-6 text-xs text-slate-600">
            © {new Date().getFullYear()} Brian Davis. Shared for review within an authenticated audience. Please do not redistribute without permission.
          </p>
        </section>
      </main>
    </div>
  )
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="font-semibold text-slate-700 min-w-[110px]">{label}:</dt>
      <dd className="text-slate-800">{value}</dd>
    </div>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-800 leading-7">{children}</p>
}
