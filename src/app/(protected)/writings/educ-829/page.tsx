'use client'

import React, { useMemo, useState } from 'react'

export default function Educ829BeliefInSchoolingPage() {
  // Soft copy-blocking toggle (default: locked)
  const [selectionEnabled, setSelectionEnabled] = useState(false)

  const context = useMemo(
    () => ({
      title:
        'The Belief in Schooling: How National Disruptions Reshaped Educational Purpose in the United States, 1890–1958',
      course: 'EDUC 829: Historical Foundations in Education and Social Justice',
      institution: 'University of Redlands',
      instructor: 'Dr. Pauline Reynolds',
      date: 'December 11, 2025',
      type: 'Course paper',
      author: 'Brian Davis',
    }),
    []
  )

  const toc = useMemo(
    () => [
      { id: 'context', label: 'Context' },
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
              Copy protection is enabled by default. This discourages casual copying, but
              it cannot fully prevent reuse on the web.
            </p>

            <button
              type="button"
              onClick={() => setSelectionEnabled((v) => !v)}
              className="w-full rounded-xl px-3 py-2 text-sm font-medium border border-slate-300 hover:bg-slate-50"
            >
              {selectionEnabled ? 'Disable selection' : 'Enable selection'}
            </button>

            <p className="text-xs text-slate-600">
              If you are reviewing this work, enabling selection can make quoting easier
              during feedback.
            </p>
          </div>
        </nav>
      </aside>

      {/* Main */}
      <main>
        {/* Header + Context */}
        <section className="rounded-3xl border border-slate-200 p-6 md:p-8 bg-white shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {context.title}
          </h1>

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
              document intellectual development and invite feedback. It is not presented as
              a finalized or peer-reviewed claim.
            </p>

            <p className="mt-2 text-sm text-slate-700">
              Please do not copy or redistribute without permission.
            </p>
          </div>
        </section>

        {/* Paper body */}
        <section
          id="paper"
          className="mt-8 rounded-3xl border border-slate-200 p-6 md:p-8 bg-white shadow-sm"
        >
          <div
            className={['space-y-5', selectionEnabled ? '' : 'select-none'].join(' ')}
            onContextMenu={(e) => {
              if (!selectionEnabled) e.preventDefault()
            }}
          >
            <Paragraph>
              America’s faith in education borders on a secular religion. From home school to
              public school or private school, there is little doubt that parents, guardians,
              and caregivers believe that providing an education is one of the best things
              they can do for a child. This faith is evident in the long-standing debates over
              how best to cultivate the young, a debate that has endured for more than two
              centuries (Tyack & Cuban, 1995). Despite shifting social conditions and advances
              in the sciences of learning (Dewey, 1916; Engeström, 1987/2015), the nation has
              repeatedly returned to the assumption that schooling is the primary means through
              which a better society can be produced. That belief has remained remarkably stable
              even as the purposes assigned to education, from moral formation and civic unity
              to economic development and national security, have changed dramatically (Labaree,
              1997; Collins, 1979/2019).
            </Paragraph>

            <Paragraph>
              To understand how these expectations evolved, it is necessary to treat belief as
              a structural variable in the American educational system. Beliefs about what
              schooling should accomplish shape the design of institutions, the architecture of
              curriculum, the meaning of citizenship, and the kinds of futures imagined for
              students (Akerlof & Kranton, 2000; Tyack & Cuban, 1995). These beliefs do not shift
              gradually; they tend to change most visibly during periods of societal upheaval,
              when the pressures placed on schools reveal underlying assumptions about their
              purpose. World War I and World War II were precisely such disruptions. Each conflict
              reshaped national identity, economic structure, and the relationship between
              citizens and the state, altering what Americans thought education was supposed to do
              (Cremin, 1961; Ravitch, 2000).
            </Paragraph>

            <Paragraph>
              This paper examines how these wartime pressures transformed educational belief by
              tracing three interacting forces that altered the structure and expectations of
              schooling: the demands of military mobilization, the demographic shifts produced by
              changing immigration and internal migration patterns, and the economic disruptions
              tied to wartime production and recovery (Bound & Turner, 2002; Goldin & Katz, 2008).
              Together, these forces reshaped the educational zeitgeist from the turn of the
              century through the early Cold War, shifting belief from a moral discipline model to
              a civic efficiency model and, ultimately, toward a technocratic model grounded in
              science, measurement, and national competition (Mehta, 2013; Pierson, 2000).
            </Paragraph>

            <Paragraph>
              By the 1890s, American schooling had coalesced around shared beliefs about discipline,
              citizenship, and academic study. With only a small proportion of the population pursuing
              higher education, the general expectation was that the main purpose of secondary schools
              was to prepare students for the duties of life, while college was understood as strong and
              effective mental training for a select few. As the National Education Association’s Committee
              of Ten put it in 1893, “The secondary schools of the United States, taken as a whole, do not
              exist for the purpose of preparing boys and girls for colleges. Only an insignificant percentage
              of the graduates of these schools go to colleges or scientific schools” (National Education
              Association, 1893, p. 51). Herbert Kliebard later summarized this outlook by noting that “the
              doctrine of mental discipline remained the cornerstone of American curriculum thought well into
              the twentieth century” (Kliebard, 1986, p. 25).
            </Paragraph>

            <Paragraph>
              It is notable that around this time, distinctions were being drawn between the education provided
              for men and the education provided for women. Anna Julia Cooper argued that the advancement of
              Black women’s education was essential to uplifting the entire race. As she wrote, the “fundamental
              agency under God in the regeneration, the re-training of the race, as well as the ground work and
              starting point of its progress upward, must be the black woman” (Cooper, 1892, p. 31). Her insistence
              that “the education of our girls is a matter of the deepest national concern” framed schooling as a
              site of liberation as much as discipline (Cooper, 1892, p. 90).
            </Paragraph>

            <Paragraph>
              The educational fate of historically marginalized groups differed from that of new immigrants, but
              federal officials increasingly talked about schooling in explicitly Americanization terms. In a 1923
              Bureau of Education bulletin, Mahoney defined Americanization as “the business of making good American
              citizens of everyone that inhabits American soil, the native born and the immigrant, the adult and the
              child in school” (Mahoney, 1923, p. 1). He observed that “for years the burden of this work fell mainly on
              the school,” where it was “assumed seemingly that, if we could teach the immigrant the English language and
              bring him thereby to a knowledge of America the beautiful, his Americanization was assured” (Mahoney, 1923,
              p. 2). Mahoney went on to argue that public schools had “the task of removing the language barrier,” often
              called “the first step in Americanization,” even as older evening schools had “failed lamentably as an
              Americanization agency” (Mahoney, 1923, pp. 2–4). Taken together, these statements show how federal officials
              framed education as an assimilative institution, with English language instruction at the center of a broader
              belief in schooling as a tool for managing social difference (Tyack & Hansot, 1982).
            </Paragraph>

            <Paragraph>
              As a backdrop to this era, the United States, strongly influence its colonial roots, moved through its own
              Victorian age, marked by a culture that was, in Daniel Walker Howe’s terms, “profoundly didactic,” driven by
              the conviction that individuals could be improved through disciplined training and the deliberate cultivation
              of character (Howe, 1979, p. 18). This belief aligned with broader national developments: expanding immigration,
              rapid industrialization, and growing urban centers intensified the sense that schools were responsible for
              creating order, stability, and shared civic values (Tyack, 1974). This expansive notion of education would be
              in sharp contrast to what emerges a few years later. Howe characterizes the period as a “crucial transformation
              of the United States,” defined by industrialization, immigration, and urban growth that reshaped national life
              (Howe, 1979).
            </Paragraph>

            <Paragraph>
              Taken together, these developments defined the pre–World War I belief regime in American education. Reformers
              and policymakers assumed that rigorous academic study would discipline the mind and build character, that
              bureaucratically organized schools would secure social order, and that public education could absorb newcomers
              into a common civic culture (Cremin, 1961; Tyack, 1974). At the same time, thinkers such as Anna Julia Cooper
              articulated alternative beliefs that framed schooling as a means of liberation for those the mainstream system
              marginalized (Cooper, 1892). On the eve of World War I, the basic architecture of American schooling was already
              in place. What the coming decades would alter was not what Tyack and Cuban call the “grammar of schooling,” but
              the purposes assigned to it, as war, depression, and global rivalry made those underlying beliefs visible and
              shifted them in new directions (Tyack & Cuban, 1995; Labaree, 1997).
            </Paragraph>

            <Paragraph>
              The influence of European nations on American culture shifted after 1914 as war erupted across Europe. The 1915
              sinking of the British ocean liner Lusitania, which resulted in over 120 American passengers among the dead, made
              the conflict feel less distant (Keene, 2004). The horrors of war grew more salient in news coverage, trade
              disruptions, and public debate, but did not immediately alter basic assumptions about schooling. This changed
              when the United States entered the war in April 1917. Anti-German sentiment and long-standing anxiety about
              immigration had begun to converge in federal policy debates. In the years leading up to the war, Congress
              repeatedly considered a literacy test as a tool for restricting immigration. President Taft and President Wilson
              both vetoed such provisions, and Wilson warned that a literacy test was “not a test of character or quality” but
              risked punishing people for the lack of opportunity in their countries of origin (Orth, 1921, p. 231). That caution
              faded as the nation moved toward war. The Immigration Act of 1917 finally established a literacy test that excluded
              “all aliens over sixteen years of age, physically capable of reading, who can not read the English language, or some
              other language or dialect, including Hebrew or Yiddish” (Immigration Act of 1917, 39 Stat. 874, §3). In effect, the
              state was trying to manage the boundary of membership through literacy at the same time that it expected public schools
              to Americanize those who were already inside (Mahoney, 1923; Tyack & Hansot, 1982).
            </Paragraph>

            <Paragraph>
              As the American military prepared to enter the conflict, the war began to reshape expectations for schools more
              directly. A wartime bulletin from the Bureau of Education observed that of roughly ten million men registered for the
              selective draft, about 700,000 “could not sign their names,” a figure that revealed “the serious impairment of our
              military efficiency” caused by illiteracy (U.S. Bureau of Education, 1918, p. 5). Within the camps, Army medical
              officials reported that “illiteracy was a major problem for the Army, reflecting in part the number of non-English
              speaking aliens who were drafted,” and responded by providing remedial classes; in July 1918 the War Department ordered
              that schools be set up to teach English across the Army and that attendance be mandatory (U.S. War Department, 1975,
              p. 89). Schools were now called on to prevent such deficiencies in future generations by producing citizens who could
              read military orders, follow written instructions, and participate in a unified national project. In this context,
              long-standing beliefs about discipline and character merged with new demands for civic efficiency and social control
              (NEA, 1918; Cremin, 1961).
            </Paragraph>

            <Paragraph>
              At roughly the same time, the influenza pandemic of 1918 forced widespread and sometimes prolonged school closures
              across the United States. It might seem natural to assume that such a large disruption would permanently alter
              educational trajectories. Yet a recent analysis linking children who experienced 1918 closures to their outcomes in
              the 1940 census finds little evidence of long-run effects on schooling or labor market attainment; estimated impacts
              are near zero, and sizable lasting effects can be ruled out (Ager et al., 2020). From the perspective of identity
              economics, this contrast is telling. Akerlof and Kranton argue that institutions respond most strongly when events
              threaten core social categories and norms, especially when blame can be assigned and civic failure imagined (Akerlof &
              Kranton, 2000). The flu pandemic was widely understood as a natural catastrophe, an “act of God,” rather than the fault
              of any particular group (Barry, 2004). It did not implicate the school system in a failure of loyalty, discipline, or
              preparedness. As a result, school closures were treated as a temporary interruption rather than a reason to redefine
              what schooling was for, whereas war directly challenged national identity and made educational belief available for
              revision.
            </Paragraph>

            <Paragraph>
              In the aftermath of the war and the 1918 pandemic, new challenges emerged. As the demobilization process progressed,
              more than 200,000 disabled veterans were among those returning home, along with millions of men who had been drawn out
              of school or work into military service (U.S. Federal Board for Vocational Education, 1919). Federal policymakers framed
              education and training as central tools for turning these soldiers back into productive citizens. Under authority granted
              during the war, the Federal Board for Vocational Education began offering courses designed to overcome war-related
              disabilities and prepare veterans for civilian employment. Most received training in mechanical and industrial trades, but
              some were supported in pursuing college and even postgraduate study when their “progress and mentality warranted it,”
              reflecting a belief that educational opportunity could transform a physical handicap into a more stable social and economic
              identity (U.S. Federal Board for Vocational Education, 1919; Bound & Turner, 2002).
            </Paragraph>

            <Paragraph>
              Demobilization efforts overseas followed a similar logic. Within the American Expeditionary Forces, officers organized
              temporary educational programs to occupy and prepare troops awaiting shipment home. A “university” for soldiers established
              at Beaune, France, recruited faculty largely from men already in uniform and offered a curriculum that contemporary observers
              claimed would have “done credit to any large university in the United States,” enrolling many thousands of soldiers as
              students (Keene, 2004). In addition, selected servicemen were admitted for short-term study at French universities and at
              Oxford in England. For both disabled veterans and men in transit, education was presented as a means of converting wartime
              experience into preparation for adult responsibility, rather than simply sending soldiers home to fend for themselves
              (Cremin, 1961; Bound & Turner, 2002).
            </Paragraph>

            <Paragraph>
              Seen through the lens of belief, these demobilization programs reinforced rather than altered the core assumption that
              education as structured training was the proper instrument for shaping competent, loyal citizens. The same faith that had
              justified literacy campaigns and Americanization classes during the war now underwrote rehabilitation and work-oriented study
              for veterans (Mahoney, 1923; U.S. Bureau of Education, 1918). This continuity matters for understanding what comes next. When
              the prosperity of the 1920s gave way to the economic collapse of the Great Depression, federal officials and educators already
              had a template for responding to crisis through educational intervention. The New Deal’s educational programs for youth and
              adults would build on that template, extending the idea that in moments of deep disruption, the nation could and should turn to
              education as a primary mechanism for recovery and social order (Fass, 1981; Federal Works Agency, 1947).
            </Paragraph>

            <Paragraph>
              In this period of adjustment, American identity itself was shifting as the nation’s place in the world readjusted after the war.
              The Immigration Act of 1924 sharply restricted new arrivals and tied national quotas to the 1890 census, signaling a federal
              preference for preserving an earlier, whiter image of the population (Immigration Act of 1924, 1924). As the composition of the
              United States was reshaped by these policies, the debate about what American schools should produce became even more heated.
              Schools were still expected to Americanize the children of immigrants and migrants. A 1923 Bureau of Education bulletin described
              Americanization as “the business of making good American citizens of everyone that inhabits American soil,” and assumed that teaching
              English and “a knowledge of America the beautiful” would be sufficient to accomplish this task (Mahoney, 1923, pp. 1–2). Educators
              and policymakers argued over whether the primary task of schooling was to cultivate a shared civic culture, to sort students into
              appropriate vocational tracks, or to correct perceived social deficiencies (Kliebard, 1986; Tyack & Hansot, 1982). Beneath these
              debates was a relatively stable belief that schools were responsible for managing the nation’s internal diversity and for producing
              citizens who fit an increasingly narrow image of who counted as fully American (Tyack, 1974; Collins, 1979/2019).
            </Paragraph>

            <Paragraph>
              That belief ran headlong into the economic collapse of 1929. The Great Depression did not immediately overturn the existing system
              of education, but it made its limits painfully obvious. Local tax bases shrank, school districts shortened terms or closed outright,
              and thousands of teachers went unpaid for months at a time (Federal Works Agency, 1947; Ravitch, 2000). Families who had once
              accepted secondary schooling as preparation for “the duties of life” now pulled adolescents out of school to look for work or simply
              because they could no longer afford books or clothing. In many communities, the idea that traditional, locally funded schools could
              secure social order and opportunity no longer matched the lived conditions of hunger, unemployment, and dislocation. The belief that
              schooling should stabilize society remained, but the institutions built to carry that belief were clearly failing under the weight of
              crisis.
            </Paragraph>

            <Paragraph>
              Because the Great Depression can be considered an endogenous shock to America’s financial institution, recent work on institutional
              change can help us understand that shocks such as wars and financial crises do not simply open neutral “windows of opportunity” in their
              wake. They can unsettle path dependent systems and create branching points where alternative trajectories briefly become possible (Mahoney,
              2000; Pierson, 2000; Johnstone & Schot, 2023). In this sense, the Depression acted less as a clean break and more as a cumulative stress
              test on an already strained educational order. World War I, the 1918 pandemic, immigration restriction, and the crash of 1929 formed a
              sequence of disruptions that forced policymakers and educators to improvise within an inherited belief structure. The assumption that
              education should produce orderly, self-supporting citizens did not disappear. Instead, the question became how to preserve that purpose
              when the normal mechanisms of school funding and employment had broken down.
            </Paragraph>

            <Paragraph>
              The New Deal’s educational programs for youth and adults grew directly out of this improvisation. Agencies such as the Works Progress
              Administration (WPA) and the National Youth Administration (NYA) were not conceived as “education policy”, yet they quickly took on
              educational functions. WPA projects built and repaired schoolhouses, playgrounds, and libraries, and sponsored adult education and cultural
              programs that extended learning opportunities far beyond the traditional classroom. In its Final Report, the Federal Works Agency emphasized
              that the adult education program “showed unmistakably that large numbers of the adult population are eager for education and will respond when
              it is made available to them,” and credited it with having a “valuable and lasting effect upon American educational practice” (Federal Works
              Agency, 1947). Nursery schools and community projects demonstrated “the value of the school as a community center,” broadening ideas about what
              educational institutions could do (Federal Works Agency, 1947). The belief that schooling was central to community stability and national recovery
              persisted, but it was now being expressed through federally funded work programs rather than through local school districts alone (Fass, 1981).
            </Paragraph>

            <Paragraph>
              For young people in particular, the Depression sharpened the connection between education, work, and adulthood. The NYA responded to mass youth
              unemployment by providing part-time jobs to high school and college students whose families could no longer support their schooling. Its student work
              program was explicitly structured so that young people could remain in regular attendance while earning wages through tasks that were supposed to have
              training value (United States National Youth Administration, 1944). Fass argues that the NYA “instituted a truly radical new program of student assistance
              and initiated a wholly new sense of federal responsibility for education” (Fass, 1981, p. 287). The underlying belief that education marked the legitimate
              pathway into responsible adulthood did not change; what changed was that this pathway was formalized as infrastructure through federal investment and law.
            </Paragraph>

            <Paragraph>
              At the same time, the interwar years witnessed an increased willingness to experiment with the purposes and methods of schooling, particularly among
              progressive educators. One of the most significant of these efforts was the Eight Year Study, launched in the early 1930s by the Progressive Education
              Association in cooperation with a group of high schools and colleges. Freed from rigid college entrance requirements, participating schools redesigned their
              curricula around democratic cooperation, problem solving, and the interests of students rather than fixed academic sequences (Aikin, 1942). Follow-up studies
              found that graduates of these experimental schools performed at least as well as, and in some cases better than, their peers from conventional programs in
              college, particularly in initiative and independence (“What Did the Eight-Year Study Reveal?,” 1942; Kridel & Bullough, 2007). The study supplied empirical
              evidence that schooling organized around cooperation and inquiry could match the outcomes of more rigid academic sequences that had dominated the prewar era.
            </Paragraph>

            <Paragraph>
              Yet the Eight Year Study did not remake American education. Its participating schools and supportive colleges remained a minority, and its lessons were
              overshadowed by the continuing economic crisis and the growing threat of war in Europe and Asia (Ravitch, 2000; Kridel & Bullough, 2007). Local districts,
              pressed by limited resources and political caution, were reluctant to abandon familiar structures. Federal programs such as WPA and NYA, although innovative in
              scope, still treated schooling primarily as a mechanism to restore employment, maintain order, and manage youth, rather than as an arena for deep pedagogical
              transformation (Fass, 1981; Federal Works Agency, 1947). The interwar period appears less as a clean progressive turn and more as a contested field in which
              alternative beliefs about education surfaced but did not displace the dominant one (Tyack & Cuban, 1995; Labaree, 1997).
            </Paragraph>

            <Paragraph>
              By the end of the 1930s, top-down interventions had permeated education and important foundations had been laid for what would come next. The Depression and the
              resulting New Deal had normalized direct federal involvement in educational work through infrastructure projects and youth programs. Progressive experiments had shown
              that different visions of schooling were possible, even if they remained marginal. Immigration restriction and ongoing racial segregation had narrowed the official image
              of who counted as fully American, even as internal diversity persisted (Tyack & Hansot, 1982; Collins, 1979/2019). When the United States entered World War II in
              1941, these accumulated experiences shaped how policymakers and educators understood the role of schools. The belief that schooling should serve national needs was now
              deeply established, and the institutional channels created during the Depression made it far easier to mobilize education for wartime purposes (Ugland, 2000; Mehta,
              2013). The next war would lead to unanticipated opportunities for change.
            </Paragraph>

            <Paragraph>
              When the United States entered World War II in 1941, the accumulated habits of using schooling to solve national problems were quickly mobilized. The Office of Education
              launched Education for Victory, an official biweekly publication that circulated guidance on how schools could contribute to the war effort, from conservation drives and
              bond sales to pre-induction training for future servicemen (United States Office of Education, 1944). At the same time, federal officials and local educators collaborated
              to create the High School Victory Corps, a nationwide program that reorganized secondary schooling around military preparedness, industrial skills, and physical fitness.
              The Victory Corps turned high schools into “sites of pre-induction training,” blurring the line between education and mobilization and making preparedness a central measure
              of good citizenship (Ugland, 2000). Once again, changes in schooling followed an earlier shift in what Americans believed education ought to produce.
            </Paragraph>

            <Paragraph>
              This cycle repeated itself in the curriculum, where changes made belief visible in everyday school life. Victory Corps students were encouraged, and in some districts required,
              to enroll in intensified courses in mathematics, science, mechanical drawing, and shop work, along with physical conditioning and drills aligned with the needs of the armed forces
              (Ugland, 2000). Guidance counselors were urged to steer boys into fields deemed useful for war industries and girls into home economics and clerical work that would support the
              “home front.” The Office of Education’s wartime materials framed these shifts not as temporary distortions, but as responsible adaptations of schooling to national necessity
              (United States Office of Education, 1944). Citizenship was increasingly defined as readiness: the good student was the one who could step seamlessly into the roles the war required.
              Taking a step back, the underlying belief remained that schools should mold individuals to fit the nation’s needs, only now those needs were articulated in explicitly military and
              industrial terms.
            </Paragraph>

            <Paragraph>
              These wartime adaptations did not benefit all students equally. Racial segregation in the South and de facto segregation elsewhere limited access to high-quality science and industrial
              training for Black students, even as these fields became central to definitions of preparedness and citizenship (Tyack & Hansot, 1982). Japanese American children were schooled behind
              barbed wire in War Relocation Authority camps, where instruction in English and “American ideals” was used to signal loyalty under confinement (Tyack & Hansot, 1982). For college-age
              internees, the National Japanese American Student Relocation Council and cooperating colleges treated selected students as “ambassadors of goodwill,” expecting their academic success and
              public appearances to rehabilitate the image of Japanese Americans even as their families remained incarcerated (Ito, 2000). In both cases, schooling functioned as a mechanism for managing
              populations already marked as problematic, reaffirming who counted as fully American and who did not. The belief that education could produce loyal, disciplined citizens was still central,
              but it was applied unevenly across racial and ethnic lines, reinforcing prewar patterns of stratification.
            </Paragraph>

            <Paragraph>
              As the war ended, the question shifted from how to prepare young people to fight to how to absorb millions of returning servicemen into civilian life. By now, education had become a primary
              mechanism of influences the population towards a common goal. The Servicemen’s Readjustment Act of 1944, commonly known as the GI Bill, promised federal support for “education and training”
              for qualified veterans, alongside housing and loan benefits (Servicemen’s Readjustment Act, 1944). In his signing statement, President Franklin Roosevelt assured troops that “the American people
              do not intend to let them down,” framing educational opportunity as a moral obligation owed to those who had fought (Roosevelt, 1944). It can be argued that the GI Bill transformed the higher
              education landscape, helping to double college enrollment in the postwar years and cementing the idea that schooling was the legitimate route to middle-class status (Bound & Turner, 2002). The
              larger belief that education was the proper reward for service and the engine of mobility crystallized in this era, even though access to its benefits remained sharply unequal by race and region
              (Katznelson, 2005).
            </Paragraph>

            <Paragraph>
              The postwar years also made education central in the form of a national competition. The launch of Sputnik in 1957 ignited fears that American schools were falling behind which intensified the Cold
              War tensions already in place, leading policymakers to envision schooling as a technical system that could be tuned to produce the scientists, engineers, and language specialists needed to compete with
              the Soviet Union (Goldin & Katz, 2008; Mehta, 2013). In response, Congress passed the National Defense Education Act of 1958, which opened with the declaration that “the security of the Nation requires
              the fullest development of the mental resources and technical skills of its young men and women” (Public Law 85-864, 1958, § 401). The Act provided federal funds for improving instruction in mathematics,
              science, and foreign languages, and for expanding testing and guidance programs. These actions were influenced by the fact that policymakers increasingly saw educational problems as technical problems to be
              solved by experts, which gave scientific measurement and standardized testing a new kind of legitimacy (Mehta, 2013).
            </Paragraph>

            <Paragraph>
              Taken together, the wartime mobilization of schooling, the educational provisions of the GI Bill, and the technocratic turn represented by the National Defense Education Act reveal a consistent pattern.
              Each disruption redefined what counted as a legitimate educational purpose, from producing soldiers and war workers, to reintegrating veterans, to competing in a global struggle for technological supremacy.
              Yet in each case, the underlying belief that schooling should serve the nation’s needs remained intact. The system did not pivot because new research in pedagogy or cognitive science demanded it. It pivoted
              because crises altered what Americans believed the nation needed from its schools, and institutions adapted within that belief structure.
            </Paragraph>

            <Paragraph>
              The story of the evolution of America’s educational institution that emerges from this history is not one of incremental progress driven by advances in educational theory, although these improvements were
              present. Instead, it is a story about how a relatively stable belief in schooling as the proper tool for shaping citizens was repeatedly redirected by national crises. From the late nineteenth century through
              the early Cold War, wars, immigration restriction, economic collapse, and geopolitical rivalry did not overturn the basic assumption that education should serve the nation. They altered what the nation thought
              it needed from its schools, and schools adjusted accordingly (Tyack & Cuban, 1995; Labaree, 1997).
            </Paragraph>

            <Paragraph>
              Across the five periods of American history, a pattern becomes visible. In the pre–World War I era, belief centered on moral discipline and mental training, with secondary schooling understood as preparation
              for “the duties of life” and college imagined as the pinnacle of intellectual cultivation (National Education Association, 1893; Kliebard, 1986). World War I and the Americanization campaigns that surrounded
              it shifted this belief toward civic efficiency; literacy, loyalty, and basic industrial competence became urgent as the Army struggled with illiteracy among draftees and policymakers worried about foreign influence
              (U.S. Bureau of Education, 1918; Mahoney, 1923). The interwar years, shaped by America’s retreat from the world and the Great Depression, stressed the system until improvisation became unavoidable. Federal agencies
              used educational programs to stabilize communities and youth, while progressive experiments such as the Eight Year Study briefly opened alternative visions of schooling (Aikin, 1942; Fass, 1981; Federal Works
              Agency, 1947).
            </Paragraph>

            <Paragraph>
              World War II induced the refinement of civic efficiency into patriotic efficiency. High schools became sites of pre-induction training, curricula were reorganized around mathematics, science, industrial skills,
              and physical fitness, and citizenship itself was reframed as readiness for service in war industries and the armed forces (United States Office of Education, 1944; Ugland, 2000). At the same time, schooling was
              used to manage racialized populations. Segregated Black schools, interned Japanese American children, and selectively relocated student ambassadors show how unevenly the belief in education as a route to full membership
              was applied (Tyack & Hansot, 1982; Ito, 2000; Gjerde, 2012). In the early Cold War, this belief progressed into a technocratic form. The GI Bill linked educational opportunity to veterans’ reintegration and economic
              mobility, while the National Defense Education Act codified the idea that national security required investment in human capital, measurable skill, and scientific expertise (Servicemen’s Readjustment Act, 1944;
              Bound & Turner, 2002; Public Law 85-864, 1958; Mehta, 2013).
            </Paragraph>

            <Paragraph>
              Seeing these developments together reinforced the potential of belief as a structural variable. The institutional “grammar of schooling” identified by Tyack and Cuban persisted: age graded classrooms, subject
              matter departments, bureaucratic governance, standardized credentials (Tyack & Cuban, 1995). What changed was the justification attached to that grammar. In terms borrowed from economic theory, shocks such as wars
              and depressions did not simply open neutral opportunities for reform. They unsettled an existing system and created branching points where familiar structures were reinterpreted and redirected rather than replaced
              (Mahoney, 2000; Pierson, 2000; Johnstone & Schot, 2023). Belief guided which options appeared legitimate, which groups were prioritized or sacrificed, and which experimental reforms could be tolerated before the system
              oscillated back toward more familiar forms.
            </Paragraph>

            <Paragraph>
              From the perspective that will guide my later work, this history can be read as a large-scale instance of experience, identity, and knowledge interacting together under constraint. This framework treats education as part
              of an “experience–identity–knowledge” domain in which institutions and individuals co-construct what counts as legitimate learning. The episodes examined here show institutions updating their practices in response to crisis,
              while leaving core identity categories and expectations largely intact. War, depression, and demographic change altered the inputs into the system, but belief filtered which outputs were acceptable and which identities would be
              recognized as fully “educated” or fully American (Akerlof & Kranton, 2000).
            </Paragraph>

            <Paragraph>
              Similarly, the conception of schooling as a process of transformation helps make sense of the uneven outcomes traced in this paper. Policies, funding streams, and ideological appeals entered the system as inputs. What emerged
              on the other side were differentiated trajectories: pre-induction training for some high school students, constrained opportunity for others, elite college access for a subset of veterans, and continuing exclusion for many Black,
              Indigenous, and immigrant communities. The same formal structures, high schools and colleges organized by the familiar grammar, produced very different identity and life outcomes depending on how belief interacted with race, class,
              gender, and national origin. This history offers concrete examples of how similar inputs can yield divergent transformations once they pass through a belief structured system.
            </Paragraph>

            <Paragraph>
              If belief structures continuity, counter beliefs reveal paths that were available but not taken. Voices such as Anna Julia Cooper, Nannie Helen Burroughs, Caroline Pratt, and the progressive educators of the Eight Year Study articulated
              visions of schooling centered on liberation, democratic cooperation, and the full development of marginalized students (Cooper, 1892; Aikin, 1942; Kridel & Bullough, 2007). Their work shows that alternative futures for American education
              were imaginable within each era, yet the dominant belief that schooling should primarily serve national cohesion, economic order, and later technological competition limited how far those futures could spread. In experience–identity–knowledge
              terms, they offered different mappings between experience, identity, and knowledge that remained less probable configurations within the larger system.
            </Paragraph>

            <Paragraph>
              This historical backdrop does not resolve contemporary debates about standards, equity, or the purposes of schooling, but it does add a level of nuance to them. Rather than asking only whether a given reform is supported by research in
              educational theory, this history suggests that we should also ask what beliefs about citizenship, merit, and national purpose it presupposes or reinforces. Disruptions will continue to shape educational agendas. The question is whether future
              disruptions will continue to redirect an inherited belief that schools exist to sort and stabilize or will new beliefs about education’s role in a democratic and diverse society take root. Understanding how past disruptions reshaped educational
              purpose is one step toward building a more explicit, and eventually more just, account of how educational systems transform the lives and identities of the people who move through them.
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
              Ager, P., Eriksson, K., Karger, E., Nencka, P., &amp; Thomasson, M. A. (2020). School closures during the 1918 flu pandemic (Working Paper No. 28246). National Bureau of Economic Research. https://doi.org/10.3386/w28246
            </li>
            <li>
              Aikin, W. M. (1942). <em>The story of the Eight-Year Study: With conclusions and recommendations</em>. Harper.
            </li>
            <li>
              Akerlof, G. A., &amp; Kranton, R. E. (2000). Economics and identity. <em>The Quarterly Journal of Economics</em>, 115(3), 715–753. https://doi.org/10.1162/003355300554881
            </li>
            <li>
              Barry, J. M. (2004). <em>The great influenza: The story of the deadliest pandemic in history</em>. Viking.
            </li>
            <li>
              Bound, J., &amp; Turner, S. (2002). Going to war and going to college: Did World War II and the G.I. Bill increase educational attainment for returning veterans? <em>Journal of Labor Economics</em>, 20(4), 784–815.
            </li>
            <li>
              Collins, R. (2019). <em>The credential society: An historical sociology of education and stratification</em>. Columbia University Press. (Original work published 1979)
            </li>
            <li>
              Cooper, A. J. (1892). <em>A voice from the South</em>. Aldine.
            </li>
            <li>
              Cremin, L. A. (1961). <em>The transformation of the school: Progressivism in American education, 1876–1957</em>. Alfred A. Knopf.
            </li>
            <li>
              Dewey, J. (1916). <em>Democracy and education: An introduction to the philosophy of education</em>. Macmillan.
            </li>
            <li>
              Engeström, Y. (2015). <em>Learning by expanding: An activity-theoretical approach to developmental research</em> (2nd ed.). Cambridge University Press. (Original work published 1987)
            </li>
            <li>
              Fass, P. S. (1981). The New Deal: Anticipating a federal education policy. <em>Educational Researcher</em>, 10(8), 12–16.
            </li>
            <li>
              Federal Works Agency. (1947). <em>Final report on the WPA program, 1935–43</em>. U.S. Government Printing Office.
            </li>
            <li>
              Goldin, C., &amp; Katz, L. F. (2008). <em>The race between education and technology</em>. Harvard University Press.
            </li>
            <li>
              Howe, D. W. (1979). <em>The Victorian mind in America</em>. Cornell University Press.
            </li>
            <li>
              Immigration Act of 1917, Pub. L. No. 64-301, 39 Stat. 874 (1917).
            </li>
            <li>
              Immigration Act of 1924, Pub. L. No. 68-139, 43 Stat. 153 (1924).
            </li>
            <li>
              Ito, L. K. (2000). Education for wartime democracy: Japanese American women and World War II. <em>Frontiers: A Journal of Women Studies</em>, 21(3), 155–174.
            </li>
            <li>
              Johnstone, P., &amp; Schot, J. (2023). Shocks, institutional change, and sustainability transitions. <em>Energy Research &amp; Social Science</em>, 98, 103004.
            </li>
            <li>
              Katznelson, I. (2005). <em>When affirmative action was white: An untold history of racial inequality in twentieth-century America</em>. W. W. Norton.
            </li>
            <li>
              Keene, J. D. (2004). <em>Doughboys, the Great War, and the remaking of America</em>. Johns Hopkins University Press.
            </li>
            <li>
              Kliebard, H. M. (1986). <em>The struggle for the American curriculum, 1893–1958</em>. Routledge &amp; Kegan Paul.
            </li>
            <li>
              Kridel, C., &amp; Bullough, R. V., Jr. (2007). <em>Stories of the Eight-Year Study: Reexamining secondary education in America</em>. State University of New York Press.
            </li>
            <li>
              Labaree, D. F. (1997). Public goods, private goods: The American struggle over educational goals. <em>American Educational Research Journal</em>, 34(1), 39–81.
            </li>
            <li>
              Mahoney, J. (2000). Path dependence in historical sociology. <em>Theory and Society</em>, 29(4), 507–548.
            </li>
            <li>
              Mahoney, J. A. (1923). <em>Americanization: A war and post-war challenge</em> (Bureau of Education Bulletin No. 41). U.S. Government Printing Office.
            </li>
            <li>
              Mehta, J. (2013). <em>The allure of order: High hopes, dashed expectations, and the troubled quest to remake American schooling</em>. Oxford University Press.
            </li>
            <li>
              National Defense Education Act of 1958, Pub. L. No. 85-864, 72 Stat. 1580 (1958).
            </li>
            <li>
              National Education Association. (1893). <em>Report of the Committee of Ten on secondary school studies</em>. Author.
            </li>
            <li>
              National Education Association. (1918). <em>Cardinal principles of secondary education: A report of the Commission on the Reorganization of Secondary Education</em> (U.S. Bureau of Education Bulletin No. 35). U.S. Government Printing Office.
            </li>
            <li>
              Orth, S. P. (1921). <em>Our foreigners: A chronicle of Americans in the making</em>. Yale University Press.
            </li>
            <li>
              Pierson, P. (2000). Increasing returns, path dependence, and the study of politics. <em>American Political Science Review</em>, 94(2), 251–267.
            </li>
            <li>
              Ravitch, D. (2000). <em>Left back: A century of battles over school reform</em>. Simon &amp; Schuster.
            </li>
            <li>
              Roosevelt, F. D. (1944, June 22). Statement on signing the Servicemen’s Readjustment Act. In <em>The public papers and addresses of Franklin D. Roosevelt</em>. U.S. Government Printing Office.
            </li>
            <li>
              Servicemen’s Readjustment Act of 1944, Pub. L. No. 78-346, 58 Stat. 284 (1944).
            </li>
            <li>
              Tyack, D. B. (1974). <em>The one best system: A history of American urban education</em>. Harvard University Press.
            </li>
            <li>
              Tyack, D. B., &amp; Cuban, L. (1995). <em>Tinkering toward utopia: A century of public school reform</em>. Harvard University Press.
            </li>
            <li>
              Tyack, D. B., &amp; Hansot, E. (1982). <em>Managers of virtue: Public school leadership in America, 1820–1980</em>. Basic Books.
            </li>
            <li>
              Ugland, R. M. (2000). “Education for victory”: The High School Victory Corps and curricular adaptation during World War II. <em>American Educational History Journal</em>, 27(1–2), 87–96.
            </li>
            <li>
              United States Bureau of Education. (1918). <em>Illiteracy as a national problem and its reduction</em> (Bureau of Education Bulletin). U.S. Government Printing Office.
            </li>
            <li>
              United States Federal Board for Vocational Education. (1919). <em>Vocational rehabilitation of disabled soldiers and sailors</em>. U.S. Government Printing Office.
            </li>
            <li>
              United States National Youth Administration. (1944). <em>Final report of the National Youth Administration, fiscal years 1936–1943</em>. Federal Security Agency, War Manpower Commission.
            </li>
            <li>
              United States Office of Education. (1944). <em>Education for Victory</em> (Office of Education Bulletin). U.S. Government Printing Office.
            </li>
            <li>
              United States War Department. (1975). <em>The Army Medical Department, 1917–1941</em>. U.S. Government Printing Office.
            </li>
            <li>
              What did the Eight-Year Study reveal? (1942). <em>The High School Journal</em>, 25(7), 305–309.
            </li>
          </ul>

          <p className="mt-6 text-xs text-slate-600">
            © {new Date().getFullYear()} Brian Davis. Shared for review within an authenticated
            audience. Please do not redistribute without permission.
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
