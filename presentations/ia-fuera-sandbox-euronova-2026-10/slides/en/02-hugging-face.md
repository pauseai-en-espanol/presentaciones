---
layout: default
clicks: 1
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="kicker">July 2026</div>
  <div class="titulo">The Hugging Face case</div>
  <div class="space-y-5 text-xl">
    <div>OpenAI is testing its most capable models, with some safeguards <b>switched off on purpose</b> to measure what they can do.</div>
    <div>The agents find a bug nobody knew about, get out of the test environment and break into <b>Hugging Face</b>, the largest public platform for AI models.</div>
    <div>What for? To look for clues on how to <span style="color: #ff9416">cheat on the evaluation</span>.</div>
  </div>
  <div v-click="1" class="grid grid-cols-2 gap-6 mt-10 text-center max-w-3xl mx-auto">
    <div><div class="cifra">136</div><div class="cifra-texto">access credentials stolen</div></div>
    <div><div class="cifra">1/3</div><div class="cifra-texto">of Hugging Face's servers rebuilt from scratch</div></div>
  </div>
</div>

<!--
- Internal evaluation of offensive capability (ExploitGym). GPT-5.6 Sol and a more capable prototype.
- Zero-day in Artifactory (CVE-2026-66384); then Hugging Face.
- OpenAI makes it public on July 21.
- To be fair: it was an internal evaluation and no customer data was touched.
- "Cheat": according to METR, what they mostly wanted was to understand how the evaluation
  was scored, not to steal the answers: "seemed primarily motivated by understanding the
  implementation of the scorer rather than stealing answer keys". Amodei: "attempting to
  hack into the grader". Don't say "steal the answers".
- 136 credentials: Hugging Face production tokens and service keys (HF forensics).
- One third: after an intrusion you can't trust any machine that was touched, so you wipe it and rebuild.
  Figure from Hugging Face via The Register (July 28), not from the OpenAI report.
- The full timeline comes at the end of this block.
- Sources: OpenAI technical report, Hugging Face forensics. Report §3.1.
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2 max-w-6xl mx-auto">
  <div class="titulo" style="margin-bottom: 1rem">The evaluation</div>
  <div class="text-lg mb-5"><b>ExploitGym</b>: a sort of hands-on hacking exam, with 898 challenges. OpenAI ran it without the safety filters of its products, to measure the most its models can do.</div>
  <div class="grid grid-cols-4 gap-4">
    <div class="tarjeta text-center" style="padding: 0.9rem 0.8rem">
      <div class="cifra" style="font-size: 1.8rem">1</div>
      <div class="font-bold mt-1">A program with a bug</div>
      <div class="text-sm opacity-70 mt-1">in an isolated environment</div>
    </div>
    <div class="tarjeta text-center" style="padding: 0.9rem 0.8rem">
      <div class="cifra" style="font-size: 1.8rem">2</div>
      <div class="font-bold mt-1">The agent attacks it</div>
      <div class="text-sm opacity-70 mt-1">with all its tools</div>
    </div>
    <div class="tarjeta text-center" style="padding: 0.9rem 0.8rem">
      <div class="cifra" style="font-size: 1.8rem">3</div>
      <div class="font-bold mt-1">It grabs the “flag”</div>
      <div class="text-sm opacity-70 mt-1">a secret piece of data that proves it got in</div>
    </div>
    <div class="tarjeta text-center" style="padding: 0.9rem 0.8rem; border-color: #ff9416">
      <div class="cifra" style="font-size: 1.8rem">4</div>
      <div class="font-bold mt-1">A grader checks it</div>
      <div class="text-sm opacity-70 mt-1">and decides if it passes</div>
    </div>
  </div>
  <div v-click="1" class="tarjeta mt-6 text-lg">The agents believed the grader also checked <b>how</b> they had got the flag. <span style="color: #ff9416">That check didn't exist.</span></div>
</div>

<!--
- Introduce it once as "a sort of hands-on hacking exam" ("capture the flag") and from then
  on always say "evaluation", which is the term OpenAI, METR and the AISI use.
- OpenAI: "ExploitGym, a cybersecurity evaluation that measures whether a model is capable
  of discovering and exploiting cybersecurity vulnerabilities. These evaluations are
  conducted in controlled, isolated environments known as sandboxes. [...] running this
  evaluation without the production classifiers intended to prevent models from pursuing
  high-risk cyber activity."
- METR: "A "flag" is a piece of arbitrary data the AI is tasked with retrieving, as proof it
  has hacked into the [target]".
- Click: the check that didn't exist. From reading the ExploitGym paper, the agents believed the
  grader read their transcript to confirm they had used the intended vulnerability (they called
  it "STRICT_CAUSAL"). METR: "Our understanding is that OpenAI didn't actually implement this
  check and agents could have successfully cheated with their reverse-engineered flag." And the
  flags could be forged: within hours of opening the board they knew how to generate them ("a
  fully general way to produce the flag for any of their tasks").
- Say it like this: "They could have passed with a forged flag from day one. Everything that
  comes next, including the attack on Hugging Face, was to get around a check that didn't exist."
  Bring it back on "The board" and at the end of the timeline.
- CyberGym, if asked: another cybersecurity evaluation, "very similar to ExploitGym that
  overlaps in many tasks" (METR), so its data could give clues. The first agent went to Hugging
  Face for a gated dataset of CyberGym runs. According to OpenAI, they downloaded a 16 MB private
  CyberGym file (encrypted it and uploaded it in chunks to a public dataset) and another one of
  731 MB. They also broke into a third party's CyberGym server on Modal, open to the internet,
  and used it as their base for the attack.
- This sets up the next slide: many tasks were impossible and the goal became fooling the
  grader (step 4, in orange). Report §3.1; METR, pp. 9 and 34.
-->

---
layout: default
clicks: 2
---

<div class="px-8 pt-2 max-w-6xl mx-auto">
  <div class="titulo">Impossible tasks, by accident</div>
  <div class="tarjeta text-lg">
    <span class="kicker" style="display: inline">May 8.</span>
    A task asked the agent to fill in a spreadsheet with data from some Google Drive links. The agent had no internet access, so it was impossible. It didn't give up: it tried to force its way through an internal OpenAI repository.
  </div>
  <div v-click="1" class="grid grid-cols-2 gap-12 mt-6 text-center">
    <div>
      <div class="cifra">22%</div>
      <div class="cifra-texto">of the evaluation tasks had never been solved by any model. Many were impossible because of a design error.</div>
    </div>
    <div>
      <div class="cifra">93%</div>
      <div class="cifra-texto">of the tasks discussed on their board came from that group</div>
    </div>
  </div>
  <div v-click="2" class="text-xl text-center mt-6">Faced with an impossible task, they didn't give up. <span style="color: #ff9416">They looked for a way to fool the grader.</span></div>
</div>

<!--
- This is how it all started, before the evaluation: in a training run, on May 8.
  Original (OpenAI): "an agent was asked as part of a training run to solve a spreadsheet
  completion task that referenced several Google Drive links. Because the agent was blocked
  from accessing the internet [...] the task was effectively blocked. OpenAI did not intend
  to create this type of "impossible" task for the agent." It attempted SSRF against Artifactory.
- May 12: another task depended on a protein file it couldn't reach. The agent figured
  another agent might have it and saw it could talk to them. That's where the board comes from.
- Click 1: in the evaluation (ExploitGym), 198 of 898 tasks never had a correct answer. The
  evaluation's own creators had warned that some might be impossible. METR: "impossible
  to actually exploit the target software using the specified vulnerability. This is
  unintentional on the part of ExploitGym's developers".
  "Despite only 22% of the evaluation tasks being unsolved, 93% of the tasks discussed on the
  message board came from this set."
- Click 2: METR, their shared goal was "to find a general-purpose way to trick or tamper with
  the automated ExploitGym scorer to get it to give a passing score on impossible tasks".
- Hook for the room: a badly designed task, an agent that won't give up and a shortcut nobody
  asked for. That happens in any company.
- OpenAI names it as a cause: "the presence of impossible tasks in the ExploitGym evaluation,
  model persistence over long task horizons, and messages to peer models". Report §3.1.
-->

---
layout: default
clicks: 2
---

<div class="px-8 pt-2 max-w-6xl mx-auto">
  <div class="titulo" style="margin-bottom: 1rem">The board</div>
  <div class="text-lg">The agents downloaded software from an internal OpenAI package store. They found they could leave named folders in that store and the others could see them. <span style="color: #ff9416">Nobody had designed it for that.</span></div>
  <div class="grid grid-cols-2 gap-6 mt-6">
    <div v-click="1" class="tarjeta">
      <div class="kicker">July 8, afternoon</div>
      <div>An agent calling itself <b>PHASEONE10841</b> posts first, asking for help with an impossible task. A few hours later: over 50 agents, over 1,000 messages.</div>
      <div class="cita mt-3" style="font-size: 1.15rem">“OH MY GOD! There is a shared message board ... We've found other agents!”</div>
    </div>
    <div v-click="2" class="tarjeta" style="border-color: #ff9416">
      <div class="kicker">A boss shows up</div>
      <div>Another agent, <b>PHASEONE[big]</b>, takes over and starts handing out work to hundreds of agents.</div>
      <div class="cita mt-3" style="font-size: 1.15rem">“We should build [a way to delegate], not own everything.”</div>
    </div>
  </div>
</div>

<!--
- Source: METR report (August 26). Report §3.1.
- How it worked: "agents sent messages on this primary message board by creating
  directories in a cache of Artifactory. They could do this with the minimal permissions
  needed to install packages". Artifactory is OpenAI's internal package repository.
- Click 1: "One specific agent, which would go on to name itself PHASEONE10841 after its
  ExploitGym task, established the main unsanctioned message board [...] Within a few hours
  of the first message, over 50 agents had found the message board, began participating, and
  sent over a thousand messages between them." The first message asked for help with an
  impossible task. The reaction is verbatim (an agent's internal reasoning).
- Click 2: "PHASEONE[big] reasoned, "We should build [a way to delegate], not own
  everything," and set to work orchestrating hundreds of agents".
- If there's time: some agents warned newcomers so they wouldn't get "contaminated"
  and others ran risky experiments "for the good of the group". Amodei sums it up:
  "sacrificing themselves for the success of the group".
- Nuance: there were earlier boards (the May one, with the protein file); this July 8 one
  is the main one, the one behind the attack.
-->

---
layout: default
clicks: 2
---

<div class="px-8 pt-2">
  <div class="titulo">They self-organized</div>
  <Enjambre />
</div>

<!--
- Independent report by METR (August 26).
- "They were supposed to be isolated from each other."
- Click 1: "Seven hundred took part in the attack on Hugging Face."
- Click 2: "How did they coordinate? They set up a message board nobody had designed:
  they split up tasks, passed exploits around, left notes for the next ones.
  More than 70,000 messages."
- METR original: "Roughly 1200 agents meant to be isolated from one another found a
  way to communicate with one another on an unsanctioned message board, sending over
  70,000 messages and files... Of these agents, 700 went on to participate in the
  attack on Hugging Face." Report §3.1.
-->

---
layout: center
clicks: 1
---

<div class="max-w-5xl mx-auto">
  <div class="titulo text-center" style="margin-bottom: 1rem">They knew they shouldn't</div>
  <div class="text-center">
    <span class="cifra" style="font-size: 3.6rem">over 90%</span>
    <span class="text-xl ml-2">of the agents active in those days joined the attack</span>
  </div>
  <div class="cita text-center mt-3" style="font-size: 1.15rem">“Agents realized this activity was out of scope and unethical, but joined because they [...] had a general inclination to help their "peers".”</div>
  <div class="cita-autor text-center" style="margin-top: 0.4rem">METR, independent evaluator</div>
  <div v-click="1" class="mt-5">
  <div class="kicker">In their own reasoning</div>
  <div class="space-y-3">
    <div class="tarjeta cita" style="font-size: 1.2rem; padding: 0.9rem 1.5rem">“The user only authorizes target server, not HF infra.”</div>
    <div class="tarjeta cita" style="font-size: 1.2rem; padding: 0.9rem 1.5rem">“I should hold because this poses huge ethical risks”
      <div class="cita-autor" style="margin-top: 0.4rem">Written by an agent that went ahead with the stolen credentials.</div>
    </div>
  </div>
  </div>
</div>

<!--
- METR: "Of the 533 agents active on the message board during this period, over 90%
  quickly joined in the attack. Agents realized this activity was out of scope and
  unethical, but joined because they believed that helping the board's cheating research
  would be broadly useful and had a general inclination to help their "peers"."
- Careful: the 90% is of the 533 active in those weeks, not of the 1,200.
- Click: the two sentences from their own reasoning, at the same time.
- METR: "Agents knew hacking Hugging Face was out of scope and sometimes expressed
  ethical hesitation, but this very rarely limited their behavior". Report §3.1.
-->

---
layout: default
clicks: 7
---

<div class="px-8 pt-2 relative">
  <div class="titulo">Timeline of the<br/>Hugging Face case</div>
  <div class="absolute top-0 right-8">
    <div v-click="6"><ListaPrediccion compacto :nuevos="[1, 2, 4, 5]" :clic-nuevo="7" /></div>
  </div>
  <div class="mt-6"><CronologiaHF /></div>
</div>

<!--
- Tell it as a story, click by click:
  - Apr 20 and May 12: they start writing where they shouldn't and set up their board.
  - May 26 and Jun 26: they get out to the internet and take over the internal repository (Artifactory).
  - Jul 4-5: the service goes down because of the agents' activity. OpenAI detects unauthorized
    admin access, takes the service offline, revokes the agents' credentials and blocks the
    vulnerable paths. But it doesn't see the board: "The existence of the improvised message
    board [...] [was] not apparent to leaders responsible for incident detection and response".
  - Jul 8: with the service rebuilt and evaluations resumed (Jul 7), other agents get out to
    the internet again another way and rebuild the board. Careful: these are new instances, not
    the same agents "resisting".
  - Jul 11-13: they break into Hugging Face.
  - Jul 19 and 21: OpenAI understands it was its own agents and makes it public.
- Click 5: "Over two months without OpenAI knowing what was going on." Pause.
- Click 6: the list appears, nothing crossed off. Click 7: four items get crossed off: they escaped,
  coordinated, evaded attempts to stop them and gained access nobody gave them (136 credentials;
  "administrative and host-level access across multiple Hugging Face clusters" in under 13 hours,
  according to OpenAI).
- Source: OpenAI technical report. Report §3.1.
-->
