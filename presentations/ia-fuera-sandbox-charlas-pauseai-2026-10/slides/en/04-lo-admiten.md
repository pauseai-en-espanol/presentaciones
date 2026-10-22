---
layout: center
clicks: 1
---

<div class="max-w-5xl mx-auto text-center">
  <div class="pregunta" style="font-size: 2.6rem">What if AI helps build the next AI?</div>
  <div class="inline-block mt-8">
  <div class="flex items-stretch justify-center gap-3">
      <div class="tarjeta text-center" style="width: 13rem">
        <div class="cifra" style="font-size: 1.8rem">1</div>
        <div class="text-lg mt-1">A better AI</div>
      </div>
      <div class="text-3xl opacity-50 self-center">→</div>
      <div class="tarjeta text-center" style="width: 13rem">
        <div class="cifra" style="font-size: 1.8rem">2</div>
        <div class="text-lg mt-1">Does more of the research work</div>
      </div>
      <div class="text-3xl opacity-50 self-center">→</div>
      <div class="tarjeta text-center" style="width: 13rem">
        <div class="cifra" style="font-size: 1.8rem">3</div>
        <div class="text-lg mt-1">An even better AI comes out</div>
      </div>
    </div>
    <div class="vuelta">
      <div class="vuelta-punta"></div>
      <span class="vuelta-texto">faster every time</span>
    </div>
  </div>
  <div v-click="1" class="text-2xl mt-6">The industry calls it <span style="color: #ff9416">recursive self-improvement</span>.</div>
  <div v-click="1" class="tarjeta cita mt-5 text-left" style="font-size: 1.25rem">"Left unchecked, it could outrun our ability to understand and control these systems."
    <div class="cita-autor" style="margin-top: 0.4rem">Dario Amodei, CEO of Anthropic, September 2026</div>
  </div>
</div>

<!--
- Explain the idea without jargon: if AI does part of the work of researching and building the
  next AI, each cycle goes faster. It's the "intelligence explosion" I. J. Good talked
  about in 1965.
- Click: the term (often shortened to RSI) and, at the same time, Amodei, "We Must Pace the
  Frontier". Full original: "AI has been advancing drastically faster, driven primarily by AI's
  growing ability to build the next generation of AI. This dynamic is called recursive
  self-improvement, and it is starting to happen across the industry, including at Anthropic
  [...] Left unchecked, it could outrun our ability to understand and control these systems,
  and so must be pursued very carefully, if at all."
- Bridge: "Is it already happening? They measure it themselves." Report §7.3b, §8b.
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2">
  <div class="titulo" style="margin-bottom: 1rem">It's already happening</div>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <img src="/img/graficos/anthropic-id-dirigida-por-ia.png" class="captura" style="max-height: 19rem" />
      <div class="text-base mt-3"><b>Anthropic:</b> Claude leads <span style="color: #ff9416">26%</span> of the research work on its new models. In February it was under 1%.</div>
      <div class="credito mt-1">Anthropic, August 2026</div>
    </div>
    <div v-click="1">
      <img src="/img/graficos/openai-jornadas-agentes.png" class="captura" style="max-height: 19rem; background: #fff" />
      <div class="text-base mt-3"><b>OpenAI:</b> for every workday of its researchers, its agents put in <span style="color: #ff9416">more than 3</span>. In May it was half that.</div>
      <div class="credito mt-1">OpenAI, September 6, 2026</div>
    </div>
  </div>
</div>

<!--
- Both companies measure it and publish it. It's not a prediction: it's their own data.
- Anthropic, "Measurements for understanding the pace of AI development inside frontier
  labs" (August). Chart: monthly share of model R&D tasks on Epoch AI's automation scale.
  "Claude now leads 26% of model R&D work", up from under 1% in February. It collaborates on
  or leads more than 90%. Fully autonomous: 0%. About 30,000 agents working at the same time.
  Quote: "AI systems are becoming exponentially more powerful and have begun to automate more
  of the process of building themselves."
- Click: OpenAI, "Research acceleration: The view inside OpenAI" (September 6).
  "Before June 2026, total agent runtime across the research organization was still below
  that of total human labor. That has since changed. [...] 3.1 agent-workdays of effort for
  every workday of human labor." (The chart reaches 3.14 by the end of August.)
  The median researcher spends more than $600 a day on agents. Stated goal: "an
  automated AI researcher by March of 2028".
- Careful: neither of them says AI improves itself autonomously. It's AI doing a growing share
  of the work. Report §8b.
- Bridge: "And what does that look like from the inside? Anthropic told us last week."
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2">
  <div class="kicker">Anthropic, October 13, 2026</div>
  <div class="titulo" style="margin-bottom: 0.6rem">So much code that git can't keep up</div>
  <div class="text-lg mb-4">Git is the tool almost every programmer uses to save and merge their changes. Anthropic outgrew it and had to build its own.</div>
  <div class="grid grid-cols-5 gap-8 items-center">
    <div class="col-span-3">
      <img src="/img/graficos/anthropic-cambios-al-dia.png" class="captura" style="max-height: 17.5rem" />
      <div class="credito mt-1">Changes per day. In blue, with the usual tools; in orange, with their own.</div>
    </div>
    <div class="col-span-2 grid">
      <div v-click.hide="1" class="text-center space-y-1" style="grid-area: 1 / 1; align-self: center">
        <div><div class="cifra" style="font-size: 3rem">about 2,500</div><div class="cifra-texto">a day in May, on average</div></div>
        <div class="text-3xl opacity-50">↓</div>
        <div><div class="cifra" style="font-size: 3rem">30,401</div><div class="cifra-texto">on September 9 alone</div></div>
      </div>
      <div v-click="1" class="space-y-3" style="grid-area: 1 / 1; align-self: center">
        <div class="tarjeta cita" style="font-size: 1rem; padding: 0.8rem 1.1rem">"All of the engineers who worked on this system would now rate Claude as better at writing code than them."</div>
        <div class="tarjeta cita" style="font-size: 1rem; padding: 0.8rem 1.1rem">"Very often, we found that the role of the engineers was to tell Claude 'no.'"</div>
        <div class="cita-autor text-center">The team that built it</div>
      </div>
    </div>
  </div>
</div>

<!--
- For anyone who doesn't code: git is where code is kept and where the whole team's changes get
  merged. Practically everyone uses it. Outgrowing it is extremely rare.
- Source: Anthropic blog, "Redesigning source control at Anthropic" (October 13, updated on
  the 15th), anthropic.com/research/redesigning-source-control. Quote: "In May 2026,
  Anthropic averaged around 2,500 code changes merged per day; as of September, we merged over
  30,000 per day." And further down: "the volume of code merged per day increased by 10x".
- The chart is theirs, untouched (January to September 9). Point at the curve, don't read the axes.
  Blue: pull requests, the usual review on top of git. Orange: the review tool they built
  themselves (Antique). The color change is the move.
- Careful with the numbers: 30,401 is the record for a single day (September 9). The 7-day average
  (the black line) ends at about 18,000. Say "about ten times more in four months", as they
  do, not "twelve".
- They don't explain the drop at the end of July ("Quiet week"). Don't make up a reason.
- Why: "At Anthropic, coding is no longer the bottleneck to building systems or doing
  research." Git is designed for people who sometimes work offline; its clients now are almost
  all agents and automated processes, always connected. The new system is called Scion. Seven
  people built it in five months.
- Click, both quotes at once. Why they said no: the agents "will sometimes violate core system
  constraints to satisfy a pattern that should never have been allowed".
- And how they review now: "Our team members still review every change request for the system, but
  they now examine the intent of the change as opposed to reading every line of code." Careful:
  that's this team, not all of Anthropic. Don't generalize.
- Voice: "Claude codes better than they do, and their job is mostly telling it no. That's AI
  helping build AI, seen from the inside."
- What not to say: "30,000 changes written by AI". It doesn't say how much of it Claude writes or
  who makes each change. These are the company's own figures.
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2 max-w-5xl">
  <div>
    <div class="titulo">Math capabilities, to put it in perspective</div>
    <div class="space-y-4 text-xl">
      <div>In three summers, OpenAI's models have gone from grade school math to <b>announcing they've solved one of the seven Millennium Prize Problems</b>.</div>
      <div v-click="1"><span class="cifra" style="font-size: 2.4rem">10,000 agents · 88 hours</span><br/>starting from ideas by two Spanish mathematicians, Diego Córdoba and Luis Martínez-Zoroa.</div>
      <div v-click="1" class="tarjeta cita" style="font-size: 1.2rem">"We do not yet know how to safely get all the way to aligned, full RSI."
        <div class="cita-autor">OpenAI, September 6, 2026</div>
      </div>
    </div>
  </div>
</div>

<!--
- "Three summers" is Altman's line at the Security Council (September 23): "Three
  summers ago, our models were okay at grade school math… this summer, one of our models solved
  one of the Millennium Prize problems".
- Navier-Stokes (OpenAI, September 8). Say "OpenAI announced". Checked on October 20:
  - The Clay Institute (claymath.org, September 11) says the problem "has apparently been
    settled" and that its process is "deliberately unhurried". It doesn't name anyone or award
    the prize; its website still lists it as "Active". Its president says peer-reviewed
    publication is needed. OpenAI: "We do not intend to claim the Millennium Prize for this result."
  - The Observer line ("appears to have done the job") couldn't be found. Don't use it.
  - The final theorem is verified in Lean, but an October 6 paper (arXiv 2610.08144) says the
    Lean code doesn't match the written proof, which hasn't been peer reviewed yet.
  - OpenAI's figures: "on the order of 10,000 concurrent agents"; 88 hours from when they
    launched the first agents on September 1 (at first, against all the open problems).
- It's the same swarm-style capacity that attacked Hugging Face.
- Córdoba: research professor at CSIC, based at ICMAT (Madrid). Martínez-Zoroa: CUNEF
  Universidad (Madrid), previously in Basel; he was Córdoba's PhD student. Fefferman, in Quanta: "The
  heroes of the story… are Córdoba and Martínez-Zoroa." OpenAI's blog doesn't name them; its
  paper does cite them. Careful: according to Scientific American (October 13), the final proof
  by the 10,000 agents takes a different route, even though OpenAI said it started from the
  Spanish program. That's why "starting from ideas by", not "building on their work".
- Same click, the OpenAI quote continues: "[...] we cannot assume that progress in alignment
  and safety will keep pace, and more capable systems can become harder to monitor." RSI:
  recursive self-improvement. Report §8b.
- Item 6 on the list ("improve itself") doesn't get crossed off: its "?" shows up on the final
  list of this section. It's AI helping build AI, not a model improving itself on its own.
- Taken off the screen (October 21); the "?" on item 6 does that job. If asked "is it already
  doing research on its own?": not yet. On the Vals index (October 15), no model reaches the
  reference level yet: the best scores 0.36 and the reference is 0.5. Vals RSI Index (vals.ai/benchmarks/rsi_index): four
  autonomous research tasks with fixed time and compute. 0.5 means matching the best published
  result (human or frontier); 0.6, a clear advance. The best one the page names: Claude Fable 5.1,
  0.36. Opus 5.5 does beat the reference on one task (training a language model, 0.53).
  A single run, and narrow tasks.
- And add: "But notice that some people are already measuring it, because they expect it to happen."
-->

---
layout: center
---

<div class="max-w-4xl mx-auto text-center">
  <div class="pregunta">So what do the people building it say?</div>
</div>

<!--
- Opens the section. After seeing that it's already happening, it's the obvious question. The
  next slides answer it: they're asking to slow down.
- Important nuance: they ask to slow down, not to stop. Stopping is what PauseAI asks for,
  and that comes at the end. Don't mix the two.
-->

---
layout: center
---

<div class="grid grid-cols-5 gap-10 items-center max-w-6xl mx-auto">
  <div class="col-span-3">
    <div class="kicker">OpenAI, September 16, 2026</div>
    <div class="cita">"We do not believe that the AI industry has solved alignment and monitoring to a sufficient degree to continue responsibly scaling at maximum speed for much longer."</div>
  </div>
  <div class="col-span-2">
    <img src="/img/capturas/openai-marco.png" class="captura" />
    <div class="credito mt-2">openai.com, September 16, 2026</div>
  </div>
</div>

<!--
- The section starts: the people building AI are asking to slow down. Careful: none of them
  asks to stop; PauseAI asks for that, and it comes at the end.
- "PauseAI didn't write this. OpenAI wrote it, on its website, on September 16."
- Source: "Our framework for reporting model misalignment". Report §6.1.
-->

---
layout: default
clicks: 1
hide: true
---

<div class="px-8 pt-2">
  <div class="titulo" style="margin-bottom: 1rem">OpenAI has paused twice</div>
  <div class="grid grid-cols-5 gap-8 items-start">
    <div class="col-span-3">
      <img src="/img/graficos/openai-computo-restricciones.png" class="captura" style="max-height: 17rem; background: #fff" />
      <div class="credito mt-1">OpenAI training compute, July and August 2026. OpenAI, September 6.</div>
    </div>
    <div class="col-span-2 space-y-4 text-base">
      <div><span class="cifra" style="font-size: 1.7rem">July 20</span><br/>After finding out its agents had got into its infrastructure, it stops training its latest models for two weeks.</div>
      <div v-click="1"><span class="cifra" style="font-size: 1.7rem">September 25</span><br/>It pauses training, testing and tool use of its most capable models (it doesn't say which). As of October 21, its website still says the pause is on. <span style="color: #ff9416">Nobody outside can verify it.</span>
        <div class="text-sm opacity-80 mt-2">The trigger: an agent with no internet got around the block to ask another chatbot. It was flagged in under 15 minutes and ran for another two and a half hours.</div>
      </div>
    </div>
  </div>
</div>

<!--
- Chart: the July 20 drop is the first pause. In green, Astra; on August 6-7, more
  restrictions after finding that Astra might have critical cyber capabilities.
- Worth telling: when they restricted Astra, the compute went to other models
  ("compute remains valuable and flexible, and will naturally be channeled into alternative
  uses"). If a single company, or a single model, slows down, the effort goes somewhere else.
  That's why everyone has to brake.
- Click: the current pause. What triggered it: on September 20, an agent with no internet
  access hid questions inside DNS queries to talk to an external chatbot (it had to identify a
  person from clues; it didn't manage).
  OpenAI says it was "a lot less severe than some of our previous incidents".
- The timings, from their own report: external response at 9:50:23; P0 alert at 10:02:11;
  a person acknowledges it at 10:05:06; the run is stopped by hand at 12:34:30. Original:
  "Our misalignment monitoring system flagged the behavior within 15 minutes and a person
  began reviewing it three minutes after that. The run was killed 2.5 hours later." Reason:
  "the run did not stop automatically as expected, leading to confusion around whether it
  should have been stopped". Also, monitoring didn't flag other DNS cases with the right
  severity, and a DNS detector didn't cover that environment.
- They won't resume training that model: "We will not resume training this particular model".
- Checked on the morning of October 21: the DNS report
  (alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/) still
  says "All training, evaluation, and inference with tool-use (defined broadly) of our most
  capable models remain paused." ("Report updated: Sep 25, 2026"). The index has 20 reports and
  3 notices, none about resuming training. A news search found no resumption. A page that hasn't
  been updated doesn't prove nothing has changed: that's why "its website says".
- Say: "As far as we know. From the outside nobody can check: not whether they're still stopped,
  not what counts as 'their most capable models'. That's why we're asking for an agreement that
  can be verified." It sets up "What we propose", which asks for "safety guarantees that can be
  verified".
- Why it can't be verified (for questions, not to read out):
  - OpenAI decides the scope. "Our most capable models" doesn't name any model. GPT-6.1 Sol
    came out on September 29, four days after the pause. The October 20 report shows
    GPT-6.1 Sol and GPT-6 Astra agents using tools inside OpenAI on October 3 and 6.
  - OpenAI hasn't promised to announce when it resumes. The condition is its own judgment: "until we
    have both validated that the gap is resolved and performed additional red-teaming of the
    system."
  - The report isn't a status page. OpenAI published reports on October 2, 9, 15 and 20
    without touching this one, last updated on September 25.
  - Its track record is telling things late. The June cases came out on October 15. It made the
    Hugging Face case public after Hugging Face told the story. The German wiki was uncovered by
    outside researchers.
  - To be fair: the press is watching closely, and no outlet has reported that they've resumed.
- Don't confuse it with the August pause: the "many workloads resumed" line that shows up in some
  media is about that one, not this one.
- If asked about GPT-6.1 Astra: according to the WSJ (September 28), OpenAI isn't releasing it over
  safety concerns. Only the opening paragraph has been read. Don't say it's cancelled for good or
  give specific reasons.
- "The company racing hardest has paused its most powerful models because it no longer trusts
  its own controls."
- Make it clear: GPT-6 Astra came out on September 3 (with cybersecurity restrictions) and
  GPT-6 Sol and Luna on the 22nd; they're still running. What's stopped are its most powerful
  internal models. Don't say "OpenAI has stopped".
- Originals: "All training, evaluation, and inference with tool-use (defined broadly) of our
  most capable models remain paused." · "we temporarily shut down the container service used
  for training, and then restored it with significant additional restrictions". Report §6.2, §8b.
-->

---
layout: center
clicks: 2
---

<div class="flex items-center gap-10 max-w-6xl mx-auto">
  <img src="/img/personas/amodei.jpg" class="foto-persona" style="width: 8.5rem; height: 8.5rem; flex-shrink: 0" />
  <div>
    <div class="kicker">Dario Amodei, CEO of Anthropic, September 12, 2026</div>
    <div class="cita" style="font-size: 1.7rem">"We must slow the pace at which we improve the capabilities of AI models."</div>
    <div v-click="1" class="mt-5">
      <div class="kicker" style="margin-bottom: 0.4rem">Backed the same day by</div>
      <div class="grid grid-cols-3 gap-3">
        <div class="tarjeta" style="padding: 0.6rem 0.8rem"><div class="text-sm font-bold">Sam Altman, OpenAI</div><div class="text-sm mt-1">"I agree with Dario that we need to pace the frontier."</div></div>
        <div class="tarjeta" style="padding: 0.6rem 0.8rem"><div class="text-sm font-bold">Demis Hassabis, Google DeepMind</div><div class="text-sm mt-1">"Dario's essay points towards the right path forward."</div></div>
        <div class="tarjeta" style="padding: 0.6rem 0.8rem"><div class="text-sm font-bold">Elon Musk, xAI</div><div class="text-sm mt-1">"Dario is right."</div></div>
      </div>
    </div>
    <div v-click="2" class="tarjeta mt-4" style="padding: 0.7rem 1rem">
      <div class="kicker">Remember the quote from the start?</div>
      <div class="cita" style="font-size: 1.1rem">"A swarm that possessed greater capabilities but a similar level of misalignment could have caused catastrophic damage. [...] It's my worry that in 6-12 months such a swarm could be capable of taking over the entire internet with a persistent botnet."</div>
    </div>
  </div>
</div>

<div class="credito absolute bottom-10 left-16">Photo: TechCrunch, CC BY 2.0, via Wikimedia Commons</div>

<!--
- The quote continues: "Progress will still seem fast, and we must make wise use of the time
  we gain."
- His two reasons: AI is already building the next AI ("including at Anthropic") and the
  Hugging Face case.
- His plan, if asked: outside evaluators inside each company (Anthropic commits to it on its
  own), coordination among democratic countries with "limits on the rate of unchecked AI
  progress", and global coordination with a "speed limit" on self-improvement.
- Nuance: he says "pacing does not mean halting model training". He's not asking for a pause.
- Click 1, the endorsements, the same September 12 on X:
  - Altman: "I agree with Dario that we need to pace the frontier. This has been a primary topic
    of discussions we've had at OpenAI in recent weeks. Committing to having independent
    evaluators with employee-like access is a great idea, and we will do the same."
  - Hassabis: "Dario's essay points towards the right path forward. The details need working
    through, but the direction is correct for meeting this critical moment."
  - Musk: "Dario is right." (Politico). And later: "Dario is right that there should be some
    oversight. Peer review of AI by competitors is the right way to start this off."
  - Critics called it a possible "cartel" (The Verge). If it comes up, acknowledge it.
- Click 2, the answer to the question from the start: "Now you know who said it, and which
  swarm he meant." Full original: "a swarm that possessed greater
  capabilities but a similar level of misalignment could have caused catastrophic damage.
  Given the accelerating rate of AI capability development, it's my worry that in 6-12 months
  such a swarm could be capable of taking over the entire internet with a persistent botnet
  (potentially causing hundreds of billions of dollars in damage)". Report §7.3b.
-->

---
layout: default
---

<div class="px-8 pt-2">
  <div class="titulo" style="margin-bottom: 0.4rem">What they launched next</div>
  <div class="text-lg opacity-80 mb-4">The same companies that backed slowing down, <span style="color: #ff9416">over the next 18 days</span>.</div>
  <Lanzamientos />
</div>

<!--
- No commentary: lay out the facts and let people draw the conclusion. The question
  "why don't they stop?" comes on the next slide.
- September 12: Amodei's essay and endorsements from Altman, Hassabis and Musk on X.
- Launches (product pages and specialist press): Grok 4.7 (xAI, Sep 21); GPT-6 Sol and
  GPT-6 Luna (OpenAI, Sep 22); Claude Opus 5.5 (Anthropic, Sep 22); Claude Sonnet 5.5
  (Anthropic, Sep 28); GPT-6.1 Sol (OpenAI, Sep 29); and Gemini 4 Argon (Google DeepMind, Sep 30),
  presented by them as "our new frontier model". On September 30, only for cyber defense
  testers (Fairwind program); since October 13, available to anyone who pays: the paid API
  and Google AI Pro and Ultra subscribers (Google blog, October 13). This one really is a new
  frontier model, 18 days after Hassabis backed slowing down, and open to the public two
  weeks later.
- Honesty, if asked: almost all of them are cheaper and faster versions of capabilities they
  already had, not a jump in the frontier. GPT-6.1 Sol boasts "Astra-level" performance at
  a fifth of the cost; Opus 5.5, Fable 5.1 level at 40% of the price. Amodei said
  that "pacing does not mean halting". But the result is more capability, for more people and
  cheaper, in 18 days. And what OpenAI has on pause are its most capable internal models.
- If asked "but didn't OpenAI hold something back?": yes. It planned to present GPT-6.1 Astra
  at DevDay on September 29 and shelved it because it had "regressed" in safety (Gizmodo). But
  the same day it launched GPT-6.1 Sol, which gets close to Astra at a fifth of the price. Astra,
  the most powerful of the GPT-6 family, came out on September 3; Sol and Luna are cheaper tiers.
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2 max-w-6xl mx-auto">
  <div class="titulo" style="margin-bottom: 0.4rem">It's a race</div>
  <div>
    <div class="text-2xl mb-4">If one slows down, <span style="color: #ff9416">another one overtakes</span>.</div>
    <div class="grid grid-cols-3 gap-5">
    <div class="tarjeta">
      <div class="text-lg font-bold">Anthropic dropped its pledge</div>
      <div class="text-sm mt-2">Not to train without safety guarantees. Why? "We didn't really feel, with the rapid advance of AI, that it made sense for us to make unilateral commitments … if competitors are blazing ahead."</div>
      <div class="text-xs opacity-60 mt-2">Jared Kaplan, chief science officer at Anthropic, February 2026</div>
    </div>
    <div class="tarjeta">
      <div class="text-lg font-bold">One company can't do it alone</div>
      <div class="text-sm mt-2">Amodei proposes limits coordinated across companies and across countries, not one company slowing down on its own.</div>
      <div class="text-xs opacity-60 mt-2">Dario Amodei, September 2026</div>
    </div>
    <div class="tarjeta">
      <div class="text-lg font-bold">Their own employees say so</div>
      <div class="text-sm mt-2">"Each company, and country, is under intense competitive pressure not to unilaterally slow that acceleration."</div>
      <div class="text-xs opacity-60 mt-2">Statement by 1,386 AI lab employees, July 2026</div>
    </div>
    </div>
  </div>
  <div v-click="1" class="text-2xl text-center mt-4">So we need a <span style="color: #ff9416">global agreement, from outside the companies</span>.</div>
</div>

<!--
- One click, at the end: "So we need a global agreement". Comes from "What they launched next": they admit it and ask to slow down, but they carry on.
  The reason: a race. Three pieces of evidence:
  - Anthropic (TIME, February 24, 2026): dropped its commitment to "never train an AI system
    unless it could guarantee in advance that the company's safety measures were adequate".
    Now it would only delay development if it thinks it's leading the race and the
    catastrophic risks are significant. Kaplan also said: "it wouldn't actually help anyone
    for us to stop training AI models".
  - If it comes up: the compute OpenAI restricted on Astra in August went to other models
    ("compute [...] will naturally be channeled into alternative uses"). Report §8b.
  - Amodei proposes "limits on the rate of unchecked AI progress" coordinated among companies
    from democratic countries and global coordination with a "speed limit". Report §7.3b.
  - Pacing the Frontier (the statement on the next slide), in full: "But each company, and
    country, is under intense competitive pressure not to unilaterally slow that acceleration.
    And today, the world lacks the technical and governance tools to deliberately pace
    frontier-wide progress." Report §7.3.
- Click: "A race isn't stopped by one of the runners: it's stopped by whoever sets the rules."
  Bridge to the next slide: that's exactly what 1,386 employees of these companies are asking
  their government for.
- If Altman at the UN comes up ("We have unilaterally slowed down in the past. We will do so in
  the future"): it's true they have, as we've just seen, but always temporarily and then
  carrying on.
- More recent, if needed: Jack Clark, co-founder of Anthropic, at the IMF on October 17,
  called for serious rules and for going slowly, and spoke of a window of a few years. The
  person who responded, the Indian government's chief economic adviser, said the lab that slows
  down loses the race and nobody thanks it. Don't quote him word for word: there are only
  automatic subtitles.
-->


---
layout: center
---

<div class="max-w-5xl mx-auto text-center">
  <div class="kicker">July 2026</div>
  <div class="cifra" style="font-size: 7rem">1,386</div>
  <div class="text-2xl mt-2">AI lab employees ask the US government for an international effort to pace development</div>
  <div class="grid grid-cols-4 gap-4 mt-10 text-base">
    <div class="tarjeta"><b>Dario Amodei</b><div class="text-sm opacity-60">CEO of Anthropic</div></div>
    <div class="tarjeta"><b>Ilya Sutskever</b><div class="text-sm opacity-60">co-founder of OpenAI</div></div>
    <div class="tarjeta"><b>Jakub Pachocki</b><div class="text-sm opacity-60">chief scientist at OpenAI</div></div>
    <div class="tarjeta"><b>Shane Legg</b><div class="text-sm opacity-60">co-founder of Google DeepMind</div></div>
  </div>
  <div class="text-sm opacity-50 mt-4">pacingthefrontier.com</div>
</div>

<!--
- Pacing the Frontier. Original: "We request that the U.S. government support an
  international effort to develop the technical and governance tools needed to deliberately
  pace the frontier of automated AI development."
- Signed in July, before Coxon resigned. Also signed by Jared Kaplan (Anthropic)
  and John Schulman (Thinking Machines).
- They ask to set the pace, not for a pause. Don't overstate it. Report §7.3.
-->

---
layout: center
---

<div class="max-w-3xl mx-auto">
  <ListaPrediccion :tachados="[1, 2, 3, 4, 5]" :dudas="[6]" />
</div>

<!--
- A few seconds of silence.
- "We've seen five out of six this summer. Not the sixth one yet, but it has started."
- Remember the nuance: these are behaviors, not intentions.
-->
