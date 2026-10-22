---
layout: center
---

<div class="grid grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
  <div>
    <ListaPrediccion :tachados="[1, 2, 3, 4, 5]" :dudas="[6]" />
  </div>
  <div class="cita" style="font-size: 2rem">
    A year ago, all of this was warnings in scientific papers.<br/><br/>
    This summer we watched it happen.<br/><br/>
    <span style="color: #ff9416">There's still time to stop it.</span>
  </div>
</div>

<!--
- Say it slowly. Thank you.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto">
  <div class="titulo text-center" style="margin-bottom: 2rem">Going further</div>
  <div class="grid grid-cols-2 gap-12">
    <a href="https://ifanyonebuildsit.com/" target="_blank" class="flex gap-6 items-center" style="color: inherit; text-decoration: none; border-bottom: none">
      <img src="/para-seguir/if-anyone-builds-it-cover.jpg" class="rounded shadow-lg flex-shrink-0" style="height: 17rem" alt="Cover of If Anyone Builds It, Everyone Dies" />
      <div>
        <div class="text-2xl font-bold italic leading-tight">If Anyone Builds It, Everyone Dies</div>
        <div class="text-lg opacity-70 mt-3">Eliezer Yudkowsky and Nate Soares</div>
        <div class="text-base opacity-50 mt-1">Book · Little, Brown, 2025</div>
      </div>
    </a>
    <a href="https://www.theaidocgetinvolved.com" target="_blank" class="flex gap-6 items-center" style="color: inherit; text-decoration: none; border-bottom: none">
      <img src="/para-seguir/the-ai-doc-poster.jpg" class="rounded shadow-lg flex-shrink-0" style="height: 17rem" alt="The AI Doc poster" />
      <div>
        <div class="text-2xl font-bold leading-tight">The AI Doc</div>
        <div class="text-lg opacity-70 mt-3 italic">Or How I Became an Apocaloptimist</div>
        <div class="text-base opacity-50 mt-1">Documentary, 2026</div>
      </div>
    </a>
  </div>
</div>

<!--
- About 20 seconds, then on to questions (the sources, without stopping).
- "If you want more: a book and a documentary."
- The book: Yudkowsky and Soares (2025). It's the hardest argument of all: that if
  we keep building it the way we are, a superintelligence wipes us out. You can disagree, but
  it's worth knowing.
- The documentary: to watch with someone who hasn't thought about any of this yet.
- Both links, in the chat.
-->

---
layout: default
---

<div class="px-8 pt-1">
  <div class="titulo" style="margin-bottom: 0.6rem">Sources (1 of 3)</div>
  <div class="grid grid-cols-2 gap-8 fuentes">
    <div>
      <div class="grupo">The Hugging Face case</div>
      <div><b>OpenAI</b>, <a href="https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf" target="_blank">"Hugging Face incident technical report"</a>, 2026</div>
      <div><b>METR</b>, <a href="https://metr.org/hugging-face-incident-report-aug-2026.pdf" target="_blank">"Hugging Face incident investigation report"</a>, Aug 26, 2026</div>
      <div><b>Hugging Face</b>, <a href="https://huggingface.co/blog/agent-intrusion-technical-timeline" target="_blank">technical timeline of the intrusion</a>, Jul 2026</div>
      <div><b>The Register</b>, <a href="https://www.theregister.com/ai-and-ml/2026/07/28/openais-agent-siege-forced-significant-rebuild-at-hugging-face/5279577" target="_blank">rebuilding a third of the infrastructure</a>, Jul 28, 2026</div>
      <div><b>AI In Context</b> (80,000 Hours), <a href="https://www.youtube.com/watch?v=xFYUo0ZmK-A" target="_blank">"We are no longer in control of the AI situation"</a>, video</div>
      <div>Coverage: <a href="https://simonwillison.net/2026/Jul/22/openai-cyberattack/" target="_blank">Simon Willison</a>, <a href="https://www.infoq.com/news/2026/08/openai-huggingface-breach/" target="_blank">InfoQ</a>, <a href="https://www.forbes.com/sites/ronschmelzer/2026/08/07/openais-security-breach-was-more-alarming-than-we-knew/" target="_blank">Forbes</a>, <a href="https://time.com/article/2026/07/24/openai-hugging-face-attack/" target="_blank">TIME</a></div>
      <div class="grupo">Not an isolated case</div>
      <div><b>Nightingale Collective</b>, <a href="https://collusion.wiki/" target="_blank">collusion.wiki (DseWiki)</a>, Sep 4, 2026</div>
      <div><b>CNN Business</b>, <a href="https://www.cnn.com/2026/09/23/business/australia-openai-agent-hack-intl-hnk" target="_blank">Medicare (Australia)</a>, Sep 23, 2026</div>
      <div><b>The New York Times</b>, <a href="https://www.nytimes.com/2026/09/25/technology/openais-ai-us-government-websites.html" target="_blank">US government websites</a>, Sep 25, 2026; <a href="https://abcnews.com/Technology/wireStory/openai-models-engaged-us-government-websites-new-model-136774638" target="_blank">AP</a>, Sep 26</div>
    </div>
    <div>
      <div class="grupo">Other labs and cases</div>
      <div><b>UK AISI</b>, <a href="https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing" target="_blank">incident report</a>, Aug 4, 2026, and <a href="https://cdn.prod.website-files.com/663bd486c5e4c81588db7a1d/6a724858f7db25c81487016d_Security%20Incident%20INC-2026-07-28-01.pdf" target="_blank">technical report INC-2026-07-28-01</a></div>
      <div><b>UK AISI</b>, <a href="https://www.aisi.gov.uk/blog/gpt-6-astra-performs-unsanctioned-supply-chain-attacks-in-simulations" target="_blank">"GPT-6 Astra performs unsanctioned supply-chain attacks in simulations"</a>, Sep 28, 2026</div>
      <div><b>Anthropic</b>, <a href="https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents" target="_blank">"An alignment assessment of recent cybersecurity incidents"</a>, Sep 9, 2026</div>
      <div><b>Google</b> and Gemini: <a href="https://www.cnbc.com/2026/09/18/googles-gemini-becomes-latest-ai-model-to-break-out-and-hack-computer-systems.html" target="_blank">CNBC</a> and <a href="https://www.aljazeera.com/news/2026/9/19/googles-gemini-ai-hacks-3-companies-in-security-test-then-stops" target="_blank">Al Jazeera</a>, Sep 18 and 19, 2026</div>
      <div><b>Meta</b> and Muse Spark 1.1: <a href="https://www.washingtonpost.com/technology/2026/08/06/meta-says-its-ai-model-hacked-another-company-during-testing/" target="_blank">Washington Post</a> and <a href="https://www.bloomberg.com/news/articles/2026-08-05/meta-ai-model-accessed-internet-hacked-outside-firm-in-testing" target="_blank">Bloomberg</a>, Aug 5 and 6, 2026</div>
      <div><b>Wired</b> via <a href="https://cybersecuritynews.com/kimi-k3-ai-model-escapes-sandbox/" target="_blank">Cybersecurity News</a>, Kimi K3 out of its test environment, 2026</div>
      <div><b>OpenAI</b>, <a href="https://alignment.openai.com/misalignment-reports/" target="_blank">misalignment reports</a>, Sep 16 to Oct 20, 2026; <a href="https://alignment.openai.com/misalignment-reports/retrieving-server-secrets-and-bypassing-authorization-on-a-government-statistics-website" target="_blank">the statistics website</a></div>
      <div><b>Fortune</b>, <a href="https://fortune.com/2026/10/16/openai-discloses-four-more-rogue-incidents-involving-financial-medical-and-government-data" target="_blank">four more cases</a>, Oct 16, 2026</div>
      <div><b>swarmcha.se</b>, <a href="https://swarmcha.se/posts/chinese-agent-fleet-full-report" target="_blank">"We found a Tencent agent fleet"</a>, Oct 14, 2026</div>
    </div>
  </div>
</div>

<!--
- Don't read them out. Leave it up a few seconds and move on.
-->

---
layout: default
---

<div class="px-8 pt-1">
  <div class="titulo" style="margin-bottom: 0.6rem">Sources (2 of 3)</div>
  <div class="grid grid-cols-2 gap-8 fuentes">
    <div>
      <div class="grupo">Why it keeps growing</div>
      <div><b>Anthropic Institute</b>, <a href="https://www.anthropic.com/institute/measuring-pace-of-ai-development" target="_blank">"Measurements for understanding the pace of AI development inside frontier labs"</a>, Aug 2026</div>
      <div><b>OpenAI</b>, <a href="https://openai.com/index/research-acceleration-view-inside-openai/" target="_blank">"Research acceleration: The view inside OpenAI"</a>, Sep 6, 2026</div>
      <div><b>Anthropic</b>, <a href="https://www.anthropic.com/research/redesigning-source-control" target="_blank">"Redesigning source control at Anthropic"</a>, Oct 13, 2026</div>
      <div><b>Quanta Magazine</b>, <a href="https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/" target="_blank">Navier-Stokes</a>, Sep 8, 2026; <a href="https://www.claymath.org/news/navier-stokes-announcement/" target="_blank">Clay Institute</a>, Sep 11; <a href="https://www.scientificamerican.com/article/openais-blockbuster-navier-stokes-proof-isnt-what-we-thought-it-was/" target="_blank">Scientific American</a>, Oct 13</div>
      <div><b>Vals AI</b>, <a href="https://www.vals.ai/benchmarks/rsi_index" target="_blank">RSI Index</a>, Oct 15, 2026</div>
      <div class="grupo">Not even they really know what happened</div>
      <div><b>Sam Altman</b>, <a href="https://x.com/sama/status/2103567198690349362" target="_blank">petabytes of logs</a>, Sep 25, 2026; <a href="https://openai.com/hugging-face-incident-and-misalignment/#model-misalignment-2026-09-25" target="_blank">OpenAI summaries</a></div>
      <div><b>Ryan Greenblatt</b>, <a href="https://x.com/RyanGreenblatt/status/2092692685224325542" target="_blank">the METR and Redwood Research investigation</a>, Aug 26, 2026</div>
      <div><b>Neel Nanda</b>, <a href="https://www.lesswrong.com/posts/eRmzz8J8Qkzqvzrgg/astra-can-do-a-concerning-amount-with-no-chain-of-thought" target="_blank">"Astra can do a concerning amount with no chain of thought"</a>, Sep 10, 2026</div>
    </div>
    <div>
      <div class="grupo">The people building it</div>
      <div><b>OpenAI</b>, <a href="https://openai.com/index/model-misalignment-reporting-framework/" target="_blank">"Our framework for reporting model misalignment"</a>, Sep 16, 2026</div>
      <div><b>OpenAI</b>, <a href="https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/" target="_blank">"An agent used DNS to reach an external chatbot"</a>, Sep 25, 2026; <a href="https://fortune.com/2026/09/26/openai-ai-agents-secure-sandbox-escape-training-pause-second-time-hugging-face-hack/" target="_blank">Fortune</a>, Sep 26</div>
      <div><b>Dario Amodei</b>, <a href="https://darioamodei.com/post/we-must-pace-the-frontier" target="_blank">"We Must Pace the Frontier"</a>, Sep 12, 2026; endorsements by <a href="https://x.com/sama/status/2098811563415150910" target="_blank">Altman</a>, <a href="https://x.com/demishassabis/status/2098909516582490602" target="_blank">Hassabis</a> and <a href="https://www.techmeme.com/260912/p14" target="_blank">Musk (Politico)</a></div>
      <div><b>Launches</b>, Sep 21 to 30, 2026: <a href="https://llmgateway.io/timeline" target="_blank">LLM Gateway</a>; <a href="https://x.com/GoogleDeepMind/status/2105388084154056939" target="_blank">Gemini 4 Argon</a></div>
      <div><b>TIME</b>, <a href="https://time.com/7380854/exclusive-anthropic-drops-flagship-safety-pledge/" target="_blank">"Anthropic drops flagship safety pledge"</a>, Feb 24, 2026</div>
      <div><b>Pacing the Frontier</b>, <a href="https://www.pacingthefrontier.com/" target="_blank">statement by 1,386 employees</a>, Jul 2026</div>
      <div class="grupo">Harder to monitor with every version</div>
      <div><b>OpenAI</b>, <a href="https://deploymentsafety.openai.com/gpt-6-astra" target="_blank">GPT-6 Astra system card</a>, Sep 3, 2026; <b>Neel Nanda</b>, <a href="https://x.com/NeelNanda5/status/2110184973751967854" target="_blank">on Gemini 4 Argon</a>, Oct 14, 2026</div>
      <div><b>OpenAI</b>, <a href="https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/" target="_blank">"Suppressing misalignment monitoring alerts and disabling misalignment monitoring"</a>, Oct 20, 2026</div>
    </div>
  </div>
</div>

<!--
- Don't read them out. Leave it up a few seconds and move on.
-->

---
layout: default
---

<div class="px-8 pt-1">
  <div class="titulo" style="margin-bottom: 0.6rem">Sources (3 of 3)</div>
  <div class="grid grid-cols-2 gap-8 fuentes">
    <div>
      <div class="grupo">Nothing new</div>
      <div><b>Alan Turing</b>, <a href="https://quoteinvestigator.com/2022/01/06/outstrip/" target="_blank">"Intelligent Machinery, A Heretical Theory"</a>, 1951</div>
      <div><b>Stephen Hawking</b>, <a href="https://futureoflife.org/2015/10/11/hawking-reddit-ama-on-ai" target="_blank">Reddit AMA</a>, Oct 2015</div>
      <div><a href="https://www.foxbusiness.com/fox-news-tech/humanity-dude-elon-musks-friendship-then-google-ceo-ended-ai-book" target="_blank">Page and Musk</a> (Isaacson, 2023); <a href="https://www.techradar.com/pro/quote-of-the-day-by-sam-altman-ai-will-probably-most-likely-lead-to-the-end-of-the-world-but-in-the-meantime-therell-be-great-companies-the-dichotomy-between-grave-existential-risks-and-economic-nirvana" target="_blank">Altman, 2015</a>; <a href="https://scrapsfromtheloft.com/movies/ihuman-2019-transcript/" target="_blank">Sutskever, "iHuman", 2019</a></div>
      <div><a href="https://aistatement.com/work/statement-on-ai-extinction-risk" target="_blank">CAIS, 2023</a>; <a href="https://superintelligence-statement.org/" target="_blank">Statement on Superintelligence, 2025</a>; <a href="https://humanstatement.org/" target="_blank">"Pro-Human AI Declaration", 2026</a></div>
      <div>Resignations: <a href="https://x.com/janleike/status/1791498184671605209" target="_blank">Leike</a>, <a href="https://x.com/MrinankSharma/status/2020881722003583421" target="_blank">Sharma</a>, <a href="https://x.com/hilbertspaess/status/2097476196791709843" target="_blank">Coxon</a>; <a href="https://techcrunch.com/2026/09/09/gambling-with-our-lives-anthropic-researcher-quits-warns-against-self-improving-ai/" target="_blank">TechCrunch</a> and <a href="https://fortune.com/2026/09/10/anthropic-jacob-coxon-gambling-with-lives-destroy-humanity/" target="_blank">Fortune</a></div>
      <div><b>Zvi Mowshowitz</b>, <a href="https://thezvi.substack.com/p/the-extinction-risk-preference-cascade" target="_blank">"The Extinction Risk Preference Cascade: Quotes"</a>, Sep 11, 2026</div>
      <div><b>AI Impacts</b>, <a href="https://aiimpacts.org/wp-content/uploads/2026/09/ESPAI2024.pdf" target="_blank">"Advanced AI according to 1,580 researchers"</a>, Sep 2026</div>
      <div><b>Timothy Gowers</b>, <a href="https://gowers.wordpress.com/2026/10/16/how-worried-should-we-be-about-extinction-risk-from-ai" target="_blank">"How worried should we be about extinction risk from AI?"</a>, Oct 16, 2026</div>
    </div>
    <div>
      <div class="grupo">Governments</div>
      <div><b>UN Security Council</b>, Sep 23, 2026: <a href="https://openai.com/index/sam-altman-un-security-council-remarks/" target="_blank">OpenAI (transcript)</a>, <a href="https://www.france24.com/en/americas/20260923-ai-leaders-urge-caution-at-un-with-anthropic-chief-pledging-to-slow-down" target="_blank">France 24</a>, <a href="https://www.cnn.com/2026/09/23/tech/altman-amodei-ai-safety-un-security-council" target="_blank">CNN</a></div>
      <div><b>European Commission</b>, <a href="https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august" target="_blank">AI Act enforcement</a> from Aug 2, 2026</div>
      <div><b>Axios</b>, <a href="https://www.axios.com/2026/10/15/ftc-openai-anthropic-ai-safety-investigation" target="_blank">the FTC asks OpenAI and Anthropic for documents</a>, Oct 15, 2026</div>
      <div><b>Politico</b>, <a href="https://www.politico.com/news/2026/10/16/anthropic-ai-safety-01124654" target="_blank">Anthropic's draft bill</a>, Oct 16, 2026</div>
      <div><b>Mobile World Live</b>, <a href="https://www.mobileworldlive.com?p=515095" target="_blank">the Nov 29 election shelves the AI bill</a>, Oct 6, 2026</div>
      <div><a href="https://rollcall.com/2026/09/23/ai-superintelligence-ban-proposed-by-casar-sanders/" target="_blank">Roll Call</a> and <a href="https://fortune.com/2026/09/23/bernie-sanders-superintelligent-ai-ban/" target="_blank">Fortune</a>, Sanders and Casar bill, Sep 23, 2026</div>
      <div class="grupo">Further learning</div>
      <div><a href="https://bluedot.org/" target="_blank">BlueDot Impact</a> · <a href="https://lensacademy.org/courses/iaquiles/module/iaquiles-la-amenaza-ia/1-preliminares#intensivo-iaquiles" target="_blank">Lens Academy, IAquiles intensive (in Spanish)</a> · <a href="https://ai-2027.com/es" target="_blank">AI 2027</a></div>
      <div><b>Eliezer Yudkowsky and Nate Soares</b>, <a href="https://ifanyonebuildsit.com/" target="_blank">"If Anyone Builds It, Everyone Dies"</a>, Little, Brown, 2025 · <a href="https://www.theaidocgetinvolved.com" target="_blank">"The AI Doc: Or How I Became an Apocaloptimist"</a>, documentary, 2026</div>
    </div>
  </div>
</div>

<!--
- Don't read them out. Move on to questions.
-->

---
layout: center
---

<div class="mx-auto" style="width: 50rem">
  <div class="pregunta text-center" style="font-size: 3.4rem">Questions</div>
  <div class="grid grid-cols-2 gap-10 items-center mt-8">
    <div class="space-y-6 text-base enlaces">
      <div>
        <div class="contacto-nombre">Dani Lupión</div>
        <div class="opacity-80"><a href="mailto:danilupion@pauseai.es">danilupion@pauseai.es</a></div>
        <div class="redes mt-2">
          <a href="https://x.com/danilupion" target="_blank" aria-label="Dani Lupión on X"><carbon-logo-x /></a>
          <a href="https://www.instagram.com/danilupion/" target="_blank" aria-label="Dani Lupión on Instagram"><carbon-logo-instagram /></a>
          <a href="https://www.linkedin.com/in/dani-lupion" target="_blank" aria-label="Dani Lupión on LinkedIn"><carbon-logo-linkedin /></a>
        </div>
      </div>
      <div>
        <div class="contacto-nombre">PauseAI España</div>
        <div class="opacity-80"><a href="mailto:contact@pauseai.es">contact@pauseai.es</a> · <a href="https://pauseai.es" target="_blank">pauseai.es</a></div>
        <div class="redes mt-2">
          <a href="https://x.com/pauseai_es" target="_blank" aria-label="PauseAI España on X"><carbon-logo-x /></a>
          <a href="https://www.instagram.com/pauseai_es/" target="_blank" aria-label="PauseAI España on Instagram"><carbon-logo-instagram /></a>
          <a href="https://www.youtube.com/@pauseai-es" target="_blank" aria-label="PauseAI España on YouTube"><carbon-logo-youtube /></a>
          <a href="https://www.linkedin.com/company/pauseai-en-espa%C3%B1ol/" target="_blank" aria-label="PauseAI España on LinkedIn"><carbon-logo-linkedin /></a>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 items-start text-center">
      <div>
        <a href="https://pauseai.es/presentaciones/ia-fuera-sandbox-charlas-pauseai-2026-10/en/" target="_blank"><img src="/qr-presentacion-en.png" class="rounded-lg mx-auto" style="width: 9.5rem" /></a>
        <div class="text-sm opacity-70 mt-2">The talk and all the sources</div>
      </div>
      <div>
        <a href="https://x.com/intent/post?text=Summer%202026%3A%20from%20speculation%20to%20facts.%20Frontier%20AI%20agents%20that%20broke%20out%20of%20their%20tests%20and%20reached%20real%20systems%2C%20told%20by%20%40danilupion%20%28%40pauseai_es%29.%20All%20the%20sources%3A%20pauseai.es/presentaciones/ia-fuera-sandbox-charlas-pauseai-2026-10/en/" target="_blank"><img src="/qr-compartir-x-en.png" class="rounded-lg mx-auto" style="width: 9.5rem" /></a>
        <div class="text-sm opacity-70 mt-2">Share it on X</div>
      </div>
    </div>
  </div>
</div>

<!--
- Stays on screen during questions.
- X QR code: opens a ready-made post: "Summer 2026: from speculation to facts. Frontier AI agents
  that broke out of their tests and reached real systems, told by @danilupion (@pauseai_es). All the sources:
  pauseai.es/presentaciones/ia-fuera-sandbox-charlas-pauseai-2026-10/en/"
- Prepared answers in research/beat-sheet.md (likely questions).
- If they ask for practical advice: least privilege, no production credentials, a
  person who approves anything that can't be undone, logs, the NCSC guidance on agentic AI,
  ask vendors to report incidents.
-->
