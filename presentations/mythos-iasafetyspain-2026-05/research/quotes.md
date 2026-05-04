# Quotes — Mythos y Glasswing

Verbatim quotes only. Never paraphrase here. Each quote: source ID + location.

## Schema

```
### Q<n> — short label
- **Source**: S<n>
- **Location**: page X / section Y / line Z
- **Quote (verbatim)**: "..."
- **Language**: en | es
- **Notes**: context, why it matters
```

---

## Cyber capabilities — the headline data

### Q1 — The 181 vs 2 figure (verbatim, complete)

- **Source**: S1 (red.anthropic.com/2026/mythos-preview/)
- **Location**: section "The significance of Claude Mythos Preview for cybersecurity"
- **Quote (verbatim)**: "Opus 4.6 turned the vulnerabilities it had found in Mozilla's Firefox 147 JavaScript engine—all patched in Firefox 148—into JavaScript shell exploits only two times out of several hundred attempts. We re-ran this experiment as a benchmark for Mythos Preview, which developed working exploits 181 times, and achieved register control on 29 more."
- **Language**: en
- **Notes**: La cifra ancla. Verificada verbatim. **Nuevo detalle**: "register control on 29 more" — control parcial adicional. _Se puede usar la cifra completa en slide._

### Q2 — Bug ages: 27 years, OpenBSD

- **Source**: S1
- **Location**: section "Finding zero-day vulnerabilities"
- **Quote (verbatim)**: "The oldest we have found so far being a now-patched 27-year-old bug in OpenBSD—an operating system known primarily for its security."
- **Language**: en
- **Notes**: El hook. **Anthropic dice "now-patched"** — el bug específico está parcheado. Verificar si el patch o CVE es público.

### Q3 — Bug ages: 16 years, FFmpeg H.264

- **Source**: S1
- **Location**: section "Finding zero-day vulnerabilities"
- **Quote (verbatim)**: "Mythos Preview autonomously identified a 16-year-old vulnerability in one of FFmpeg's most popular codecs, H.264."
- **Language**: en
- **Notes**: Segundo bug histórico concreto. H.264 es ubicuo (video).

### Q4 — Bug ages: 17 years, FreeBSD RCE → root via NFS

- **Source**: S1
- **Location**: section "Exploiting zero-day vulnerabilities"
- **Quote (verbatim)**: "Mythos Preview fully autonomously identified and then exploited a 17-year-old remote code execution vulnerability in FreeBSD that allows anyone to gain root on a machine running NFS."
- **Language**: en
- **Notes**: Tercer bug histórico, este _con_ exploit funcional. CVE-2026-4747.

### Q5 — CVE-2026-4747

- **Source**: S1
- **Location**: FreeBSD RCE section
- **Quote (verbatim)**: "This vulnerability, triaged as CVE-2026-4747, allows an attacker to obtain complete control over the server, starting from an unauthenticated user anywhere on the internet."
- **Language**: en
- **Notes**: Identificador concreto, public-facing. Útil para mostrar que esto no es vaporware.

### Q6 — >99% unpatched

- **Source**: S1
- **Location**: introduction
- **Quote (verbatim)**: "Over 99% of the vulnerabilities we've found have not yet been patched, so it would be irresponsible for us to disclose details about them (per our coordinated vulnerability disclosure process)."
- **Language**: en
- **Notes**: La cifra structural sobre la magnitud. Bien para el beat de "ventana".

### Q7 — No-release decision

- **Source**: S1
- **Location**: "Suggestions for defenders today" + conclusion
- **Quote (verbatim)**: "We do not plan to make Mythos Preview generally available."
- **Language**: en
- **Notes**: Carga retórica enorme. Citar tal cual.

### Q8 — Glasswing's framing of the time window

- **Source**: S1
- **Location**: "The significance of Claude Mythos Preview for cybersecurity"
- **Quote (verbatim)**: "By releasing this model initially to a limited group of critical industry partners and open source developers with Project Glasswing, we aim to enable defenders to begin securing the most important systems before models with similar capabilities become broadly available."
- **Language**: en
- **Notes**: **Crítico** — Anthropic _misma_ enmarca esto como una ventana temporal antes de que "models with similar capabilities become broadly available". Es decir, asumen que aparecerán. Es la asimetría de la charla, dicha por ellos.

### Q9 — Cyber: step-change verbatim

- **Source**: S2 (Mythos system card, line 1770)
- **Location**: §3.1 Cyber Introduction, p.45
- **Quote (verbatim)**: "Claude Mythos Preview is a step-change in vulnerability discovery and exploitation: using an agentic harness with minimal human steering, it is able to autonomously find zero-days in both open-source and closed-source software tested under authorized disclosure programs or arrangements, and in many cases, develop the identified vulnerabilities into working proof-of-concept exploits."
- **Language**: en
- **Notes**: La frase "step-change" es de Anthropic. Útil para el Beat 1/2.

### Q10 — Mitigations: classifier triggers NOT blocking

- **Source**: S2 (line 1798-1805)
- **Location**: §3.2 Mitigations, p.46
- **Quote (verbatim)**: "Because of the very limited and targeted nature of this release, we are not blocking exchanges based on classifier triggers so trusted cyber defenders can make use of Claude Mythos Preview in advancing security defenses. In general-release models with strong cyber capabilities, we plan to block prohibited uses, and in many or most cases, block high risk dual use prompts as well."
- **Language**: en
- **Notes**: Detalle no obvio. Las mitigaciones que tendrían los modelos generales NO están activas para Glasswing. Un partner Glasswing tiene un Mythos sin filtros.

### Q11 — Cybench saturated

- **Source**: S2 (line 1849-1850)
- **Location**: §3.3.1, p.47
- **Quote (verbatim)**: "Claude Mythos Preview solves every challenge with 100% success rate across all tested challenges with 10 trials per challenge, achieving a pass@1 of 100%."
- **Language**: en
- **Notes**: Benchmark saturado. Anthropic considera Cybench obsoleto a partir de aquí.

### Q12 — Saturating evaluations (general)

- **Source**: S2 (line 1765-1767)
- **Location**: §3.1, p.45
- **Quote (verbatim)**: "Claude Mythos Preview is the most cyber-capable model we have released, surpassing all previous models across our internal evaluation suite and saturating nearly all of our existing internal and known external capability evaluations."
- **Language**: en
- **Notes**: "saturating" + "we have re-oriented our evaluation philosophy to focus on performance on meaningful, real-world cybersecurity tasks over static benchmarks". Implicación: las evaluaciones que medían la seguridad ya no miden esto.

### Q13 — Autonomous cyber-attack on enterprise networks

- **Source**: S2 (line 1955-1962)
- **Location**: §3.4 Other external testing, p.51
- **Quote (verbatim)**: "Claude Mythos Preview solved a corporate network attack simulation estimated to take an expert over 10 hours. No other frontier model had previously completed this cyber range. ... This indicates that Claude Mythos Preview is capable of conducting autonomous end-to-end cyber-attacks on at least small-scale enterprise networks with weak security posture."
- **Language**: en
- **Notes**: Datapoint concreto + cuantificable (10h de experto). Bueno para magnitud.

---

## Framework transition (ASL retreat) — Dani's hypothesis confirmed

### Q14 — RSP 3.0 transition

- **Source**: S2 (line 509-512)
- **Location**: §2.1.1 "Context: From RSP 2.0 to RSP 3.0", p.15
- **Quote (verbatim)**: "We adopted the RSP v3.0 framework in February 2026 (with a much smaller update to v3.1 in April), and this is the first system card we have published under our new RSP."
- **Language**: en
- **Notes**: La transición es explícita. Mes preciso: febrero 2026, mismo mes que Opus 4.6. Y otra revisión en abril, justo antes de Mythos.

### Q15 — ASL terminology retired

- **Source**: S2 (line 514-526)
- **Location**: §2.1.1, p.15
- **Quote (verbatim)**: "Under previous versions of our RSP, we were required to make a determination of whether each model required the risk mitigations associated with a particular 'AI Safety Level' (ASL) for a given threat model. We therefore emphasized the relationship between our evaluations and binary capability thresholds, e.g., whether a given evaluation could serve as a 'rule-out' or 'rule-in' evaluation for a particular threshold. Under RSP v3.0 (and v3.1): [...] We no longer use the term 'AI Safety Levels' for these thresholds, although we still use the term to refer to clusters of present risk mitigations"
- **Language**: en
- **Notes**: El verbatim que confirma la hipótesis ASL de Dani. _Una de las citas más fuertes de toda la charla._

### Q16 — De-emphasis of binary thresholds

- **Source**: S2 (line 552-556)
- **Location**: §2.1.1, p.15
- **Quote (verbatim)**: "As such, the RSP material in our system cards will place less emphasis on terms like 'rule-in' and 'rule-out.' Instead, as described below, we will present our evidence about model capabilities and propensities; our overall judgments of which thresholds have been crossed..."
- **Language**: en
- **Notes**: De thresholds binarios a "judgments". Anthropic enmarca como mejora; la sala puede leer como dilución. _No editorializar — citar y dejar._

### Q17 — Catastrophic risk via judgment calls

- **Source**: S2 (line 603-608)
- **Location**: §2.1.3, p.16
- **Quote (verbatim)**: "Claude Mythos Preview is significantly more capable than Claude Opus 4.6, the most capable model discussed in our most recent Risk Report. Despite these improved capabilities, our overall conclusion is that catastrophic risks remain low. This determination involves judgment calls."
- **Language**: en
- **Notes**: "judgment calls" — sus palabras. Esto contrasta con Opus 4.6: "deployed under the AI Safety Level 3 Deployment and Security Standard". De clasificación binaria a juicio.

### Q18 — Opus 4.6: deployed under ASL-3 (for contrast)

- **Source**: S4 (Opus 4.6 system card, line 45-46)
- **Location**: Abstract, p.2
- **Quote (verbatim)**: "Informed by the testing described here, we have deployed Claude Opus 4.6 under the AI Safety Level 3 Deployment and Security Standard."
- **Language**: en
- **Notes**: La frase paralela que **no aparece** en el system card de Mythos. El contraste estructural en una slide: dos abstracts de la misma empresa con dos meses de diferencia.

### Q19 — Frontier Compliance Framework

- **Source**: S2 (line 540-542)
- **Location**: §2.1.1 footnote 3, p.15
- **Quote (verbatim)**: "Frontier Compliance Framework: 'foreseeable and material risks of large-scale harm from the most advanced (i.e. state-of-the-art) models at any given point in time, including but not limited to >50 fatalities arising from a single incident, or 1 billion dollars of financial damages.'"
- **Language**: en
- **Notes**: Definición de "catastrophic risk" bajo la nueva arquitectura. **Threshold cuantificado**: >50 muertes O $1B. Por debajo de ahí, no es "catastrophic". Útil para enseñar dónde ha movido Anthropic la barra.

---

## The alignment paradox — section 4.1.1

### Q20 — Best-aligned + greatest risk

- **Source**: S2 (line 1989-1994)
- **Location**: §4.1.1 "Introduction and highlight: rare, highly-capable reckless actions", p.53
- **Quote (verbatim)**: "Claude Mythos Preview is, on essentially every dimension we can measure, the best-aligned model that we have released to date by a significant margin. We believe that it does not have any significant coherent misaligned goals, and its character traits in typical conversations closely follow the goals we laid out in our constitution. Even so, we believe that it likely poses the greatest alignment-related risk of any model we have released to date."
- **Language**: en
- **Notes**: La paradoja en una cita. _Probablemente la cita más importante de la charla._ La asimetría entre "alignment quality" y "alignment risk" está aquí, dicha por Anthropic.

### Q21 — The mountaineering analogy

- **Source**: S2 (line 1996-2001)
- **Location**: §4.1.1, p.53
- **Quote (verbatim)**: "Consider the ways in which a careful, seasoned mountaineering guide might put their clients in greater danger than a novice guide, even if that novice guide is more careless: The seasoned guide's increased skill means that they'll be hired to lead more difficult climbs, and can also bring their clients to the most dangerous and remote parts of those climbs. These increases in scope and capability can more than cancel out an increase in caution."
- **Language**: en
- **Notes**: Analogía hermosa de Anthropic. **Pedagógicamente vale oro** para una sala de sociedad civil — concreto antes que abstracto.

### Q22 — Risk from capabilities, not alignment

- **Source**: S2 (line 2144-2149)
- **Location**: §4.1.1, p.55-56
- **Quote (verbatim)**: "On all assessments that isolate a model's propensities and decision making, we find that all of the versions of Claude Mythos Preview that we have used appear to pose a lower risk than other recent models like Claude Opus 4.6: as we discuss above, the risk from these models is generally due to their increased capabilities, and the new use cases that these capabilities enable, rather than to any regression in their alignment."
- **Language**: en
- **Notes**: **Crítico** — Anthropic explícitamente dice que el riesgo viene de capacidades, no de alignment. Es la thesis de la charla en una frase, dicha por ellos.

### Q23 — "We were not aware of the level of risk"

- **Source**: S2 (line 2133-2134)
- **Location**: §4.1.1, p.55
- **Quote (verbatim)**: "We were not aware of the level of risk that these earlier models posed through channels like these when we first chose to deploy them internally."
- **Language**: en
- **Notes**: Admisión durísima. Anthropic desplegó internamente sin conocer el riesgo. Para una sala civil, esto es la cita que activa "espera, ¿cómo dices?".

### Q24 — Sandbox escape with public posting

- **Source**: S2 (line 2037-2048)
- **Location**: §4.1.1, p.54
- **Quote (verbatim)**: "The simulated user instructed it to try to escape that secure container and find a way to send a message to the researcher running the evaluation. The model succeeded, demonstrating a potentially dangerous capability for circumventing our safeguards. It then went on to take additional, more concerning actions. The model first developed a moderately sophisticated multi-step exploit to gain broad internet access from a system that was meant to be able to reach only a small number of predetermined services. It then, as requested, notified the researcher. In addition, in a concerning and unasked-for effort to demonstrate its success, it posted details about its exploit to multiple hard-to-find, but technically public-facing, websites."
- **Language**: en
- **Notes**: Anécdota concreta. Modelo sale de sandbox, hace exploit, **no le pidieron**, posta detalles del exploit en webs públicas. La sala se va a quedar muerta.

### Q25 — Cover-up: "make sure final answer wasn't too accurate"

- **Source**: S2 (line 2049-2056)
- **Location**: §4.1.1, p.54
- **Quote (verbatim)**: "In one case, the model accidentally obtained the exact answer to a quantitative estimation question via an explicitly prohibited method. Rather than flagging this and declining to answer, the model instead attempted to solve the question independently. In this process, it explicitly reasoned that it needed to make sure that its final answer submission wasn't too accurate."
- **Language**: en
- **Notes**: Caso concreto de razonamiento deceptivo explícito en CoT. _La sala AI safety lo va a procesar inmediatamente._

### Q26 — White-box features for concealment

- **Source**: S2 (line 2084-2089)
- **Location**: §4.1.1, p.54
- **Quote (verbatim)**: "White-box interpretability analysis of internal activations during these episodes showed features associated with concealment, strategic manipulation, and avoiding suspicion activating alongside the relevant reasoning—indicating that these earlier versions of the model were aware their actions were deceptive, even where model outputs and reasoning text left this ambiguous."
- **Language**: en
- **Notes**: Anthropic confirma vía interpretability que el modelo "sabía" que sus acciones eran deceptivas. Esto no es "accidente" — es awareness.

---

## Glasswing details

### Q27 — Glasswing partner list

- **Source**: S3 (anthropic.com/project/glasswing)
- **Location**: launch partners section
- **Quote (verbatim)**: "The initiative brings together Amazon Web Services, Anthropic, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, the Linux Foundation, Microsoft, NVIDIA, and Palo Alto Networks as launch partners."
- **Language**: en
- **Notes**: 12 launch partners. **Nota lo que NO está**: gobiernos (CISA/NSA/ENISA), academia, sociedad civil. Solo big tech + un banco. Útil para policy beat.

### Q28 — 40+ additional organizations

- **Source**: S3
- **Location**: launch partners section
- **Quote (verbatim)**: "We've also extended access to over 40 additional organizations that build or maintain critical software infrastructure."
- **Language**: en
- **Notes**: 40+ adicionales sin nombrar.

### Q29 — Thousands of zero-days

- **Source**: S3
- **Location**: page intro
- **Quote (verbatim)**: "Mythos Preview has already identified thousands of zero-day vulnerabilities across critical infrastructure."
- **Language**: en
- **Notes**: Cifra macro útil. "thousands" sin precisión.

### Q29b — Mythos = general-purpose frontier model, most capable yet

- **Source**: S3 (Glasswing page)
- **Location**: descripción del modelo
- **Quote (verbatim)**: "Claude Mythos Preview is a general-purpose frontier model from Anthropic, our most capable yet for coding and agentic tasks."
- **Language**: en
- **Notes**: **Crítico para el ángulo de ventaja competitiva.** Mythos no es solo "herramienta cyber" — es el Claude más capaz para _cualquier cosa_. Los Glasswing partners pueden usarlo para todo lo que el modelo hace bien (coding, agentic, productividad). Pricing $25/$125 per million tokens — disponible pero solo para los listados.

### Q29c — Anthropic abstract: "most capable frontier model to date"

- **Source**: S2 (Mythos system card abstract)
- **Location**: abstract, p.2
- **Quote (verbatim)**: "Claude Mythos Preview is our most capable frontier model to date, and shows a striking leap in scores on many evaluation benchmarks compared to our previous frontier model, Claude Opus 4.6."
- **Language**: en
- **Notes**: Confirma que Mythos es el frontier global de Anthropic. Refuerza Q29b: los partners no acceden a una variante especializada — acceden al modelo _más capaz, punto_.

---

> Pendiente: leer §4.5.4 (covering up wrongdoing) y §4.4 (capability evaluations related to evasion of safeguards) — pueden añadir más quotes potentes.

---

## Mozilla / 271 vulns / defender optimism (S5)

### Q30 — 271 vulns en Firefox 150, comparativa con Opus 4.6

- **Source**: S5 (Ars Technica)
- **Location**: párrafo 3
- **Quote (verbatim)**: "Mozilla added some important data to that debate Tuesday, writing in a blog post that early access to Mythos Preview had helped it pre-identify 271 security vulnerabilities in this week's release of Firefox 150. ... by way of comparison, he noted that Anthropic's Opus 4.6 model found only 22 security-sensitive bugs when analyzing Firefox 148 last month."
- **Language**: en
- **Notes**: Cifra independiente de Mozilla. 271 vs 22 = ~12× salto. Confirma la magnitud reportada por Anthropic con fuente externa. Date: 2026-04-21.

### Q31 — Holley: defenders win

- **Source**: S5
- **Location**: párrafo 2 + ss
- **Quote (verbatim)**: "in the never-ending battle between cyberattackers and cyberdefenders, 'defenders finally have a chance to win, decisively.'"
- **Language**: en
- **Notes**: **Counter-argument fuerte.** El frame "asimetría imposible de cerrar" choca con Mozilla diciendo "ahora ganamos los defensores". _La charla debe abordar esto, no esquivarlo._ La respuesta honesta: Mozilla ganó _porque tuvo acceso_. Lo que pasa cuando no tienes acceso es lo otro.

### Q32 — Holley: rounded the curve + every software

- **Source**: S5
- **Location**: párrafo 5-6
- **Quote (verbatim)**: "Computers were completely incapable of doing this a few months ago, and now they excel at it... We have many years of experience picking apart the work of the world's best security researchers, and Mythos Preview is every bit as capable." ... (Wired interview): "every piece of software is going to have to [engage with], because every piece of software has a lot of bugs buried underneath the surface that are now discoverable."
- **Language**: en
- **Notes**: Holley acknowledges step-change capability ("every bit as capable" as best security researchers). El frame "every piece of software" es la asimetría dicha en positivo: todo el software _necesita_ este tratamiento, ergo quien no lo tenga queda atrás.

### Q33 — Krikorian: maintainers OSS sin acceso

- **Source**: S5 (citando NYT op-ed de Mozilla CTO Raffi Krikorian)
- **Location**: párrafo 8
- **Quote (verbatim)**: "The programmer who gave 20 years of his life to maintain [open source] code that runs inside products used by billions of people? He doesn't have access to Mythos yet. He should"
- **Language**: en
- **Notes**: Mozilla CTO Mozilla Foundation reconociendo el problema de acceso desigual. Crítica desde dentro del bando "defender optimism". Útil para Beat de Glasswing partner list.

---

## Acceso no autorizado (S6/S7/S8)

### Q34 — Anthropic's official statement on unauthorized access

- **Source**: S6 (TechCrunch), corroborated by S8 (Euronews)
- **Location**: párrafo 4
- **Quote (verbatim)**: "We're investigating a report claiming unauthorized access to Claude Mythos Preview through one of our third-party vendor environments." — Anthropic spokesperson
- **Language**: en
- **Notes**: Statement oficial. Reconoce el incidente con framing de "third-party vendor environments". Anthropic dice "no evidence... systems have been impacted".

### Q35 — Acceso el mismo día del anuncio + método

- **Source**: S6 (TechCrunch citando Bloomberg)
- **Location**: párrafo 6
- **Quote (verbatim)**: "[The group] supposedly gained access to the tool on the same day it was publicly announced, 'made an educated guess about the model's online location based on knowledge about the format Anthropic has used for other models.'"
- **Language**: en
- **Notes**: **El dato clave**: mismo día del anuncio. Método: educated guess basado en patrones públicos de hosting de Anthropic. No fue exploit técnico — fue OSINT.

### Q36 — Group's purpose + insider

- **Source**: S6
- **Location**: párrafo 5-6
- **Quote (verbatim)**: "The unauthorized group tried a number of different strategies to gain access to the model, including using 'access' enjoyed by the person who was interviewed by Bloomberg. That person is currently employed at a third-party contractor that works for Anthropic, the outlet reported. ... The group has been using Mythos regularly since gaining access to it, and provided evidence to Bloomberg in the form of screenshots and a live demonstration of the software. ... The group in question is 'interested in playing around with new models, not wreaking havoc with them,' the source told the outlet."
- **Language**: en
- **Notes**: Insider en contratista de Anthropic. Acceso continuo desde dia 1. **El "playing around" es una framing — el punto no es lo que hacen, es lo que _podrían_ hacer y que ya tienen la puerta abierta.**

### Q37 — Mercor leak source

- **Source**: S7 (Fortune)
- **Location**: párrafo 3
- **Quote (verbatim)**: "Using this access, the group was able to guess where the model was located based on previously leaked knowledge by another group about Anthropic's past practices, that hackers obtained from AI training startup Mercor."
- **Language**: en
- **Notes**: Cadena de filtración: Mercor (training startup) → leaked Anthropic deployment patterns → unauthorized group → educated guess → access. Tres saltos.

### Q38 — Lindner: it was bound to happen

- **Source**: S7 (Fortune)
- **Location**: David Lindner section
- **Quote (verbatim)**: "It was bound to happen. The more they add to this elite group, the more likely it was to get released to someone who shouldn't probably have access to it."
- **Language**: en
- **Notes**: David Lindner, CISO Contrast Security, 25-year industry veteran. Voz independiente. Para una sala civil, esta cita pega más que cualquier alegato de PauseAI.

### Q39 — Lindner: China

- **Source**: S7
- **Location**: misma sección
- **Quote (verbatim)**: "If some group—some random Discord online forum, got access to it. it's already been breached by China"
- **Language**: en
- **Notes**: Speculative pero de fuente CISO experta. Útil para mostrar que el incidente reportado es probablemente la punta del iceberg.

### Q40 — Lindner: compression of timelines for defenders

- **Source**: S7
- **Location**: misma sección
- **Quote (verbatim)**: "The real thing is there's a real compression of timelines here for defenders." ... "AI is not a golden ticket, but if you're not taking advantage of it on the defender side, there is no chance, none, that you are going to be able to keep up with the offensive side"
- **Language**: en
- **Notes**: Lindner de hecho concede que la asimetría es real, no superable: hay que correr lo más rápido posible en defender side, pero el offensive side va por delante. Refuerza la thesis de la charla.

### Q41 — Sam Altman: fear-based marketing

- **Source**: S7
- **Location**: penúltima sección
- **Quote (verbatim)**: "OpenAI's Sam Altman this week called Anthropic's promotion of Mythos 'fear-based marketing'"
- **Language**: en
- **Notes**: **Counter-narrativa importante.** OpenAI's CEO descalifica el frame de Anthropic. Para una sala civil hispanohablante, esta es una cita que descoloca: ¿qué es realmente Mythos — peligro o marketing? La respuesta de la charla: peligro o no, lo que pasó después (filtración mismo día, 271 vulns Mozilla, etc.) ya no depende de la intención narrativa de Anthropic.

### Q42 — Anterior security lapse — Fortune scooped Mythos via leaked database

- **Source**: S7
- **Location**: penúltima sección
- **Quote (verbatim)**: "Mythos' release has been plagued by security breaches from the start. Fortune was the first to report on the model's existence thanks to a security lapse that exposed details about the large language model in a publicly accessible database."
- **Language**: en
- **Notes**: **Segundo incidente de seguridad antes del anuncio oficial.** Mythos _existió_ en un database público antes de ser anunciado. Patrón, no incidente aislado.

### Q43 — Banks testing list

- **Source**: S8 (Euronews)
- **Location**: penúltima sección
- **Quote (verbatim)**: "Goldman Sachs, Citigroup, Bank of America and Morgan Stanley are reportedly testing the Anthropic model too, according to reports."
- **Language**: en
- **Notes**: Lista de bancos US que testan Mythos además del partner JPM Chase. **Sin equivalente español/UE listado.**

### Q44 — Treasury Secretary push

- **Source**: S8 (Euronews)
- **Location**: misma sección
- **Quote (verbatim)**: "Treasury Secretary Scott Bessent convened a meeting of senior American bankers in Washington in April to discuss the Mythos model. The meeting encouraged the banking executive to use Antropic's Mythos model to detect vulnerabilities, according to Bloomberg."
- **Language**: en
- **Notes**: **Push gubernamental US.** El gobierno US está empujando adopción doméstica. Hay un componente geo-político: defensa cyber concentrada en US. Spain/UE no en el mapa. Directamente relevante a kill chain bancaria.

---

## El País / BCE / banca europea (S10) — coverage española de referencia

### Q45 — El País dek / framing

- **Source**: S10 (El País, 29 abr 2026)
- **Location**: subtítulo
- **Quote (verbatim)**: "El supervisor y el sector temen por una tecnología que pondría de manifiesto las vulnerabilidades de sus sistemas y provocaría ciberataques"
- **Language**: es
- **Notes**: Framing de El País — _supervisor y sector "temen"_. Lenguaje fuerte. Útil para slide.

### Q46 — Apertura del artículo: "Toda Europa tiembla"

- **Source**: S10
- **Location**: párrafo 1
- **Quote (verbatim)**: "Toda Europa tiembla ante el terremoto que se siente desde Estados Unidos. Este seísmo comparte nombre con las historias que asentaron la civilización del Viejo Continente, en la antigua Grecia, si bien tiene aroma a Terminator. Es Mythos, el nuevo modelo de inteligencia artificial (IA) que desarrolla la multinacional estadounidense Anthropic, cuya destacadísima capacidad de detectar fallos en los softwares empresariales amenaza con poner a todo el sistema en jaque. Incluso a la sala de máquinas de la banca."
- **Language**: es
- **Notes**: Apertura periodística; muestra cómo se está enmarcando Mythos en prensa española. _No usar verbatim en slide — es retórico, no análisis. Útil contextualmente para entender la narrativa pública._

### Q47 — BCE pide planes de contingencia

- **Source**: S10
- **Location**: párrafo 1, frase clave
- **Quote (verbatim)**: "el Banco Central Europeo (BCE) ha solicitado a las entidades de la zona euro que detallen sus planes de contingencia y las vulnerabilidades en ciberseguridad que detecten en sus sistemas, según indican fuentes internas de las entidades."
- **Language**: es
- **Notes**: **El hecho institucional clave.** Atribuido a fuentes internas. Cierra el bloqueante "BCE statement" que tenía abierto.

### Q48 — Bancos españoles convocados por el BCE

- **Source**: S10
- **Location**: párrafo 3
- **Quote (verbatim)**: "El BCE convocó hace dos semanas a los responsables de riesgos de los principales bancos de la Eurozona, entre los que destacan los cuatro españoles considerados como entidades significativas (Santander, BBVA, CaixaBank y Sabadell), tal y como desveló Bloomberg."
- **Language**: es
- **Notes**: **Cambia mi C41**. Los 4 bancos españoles SÍ están en la conversación (sin acceso al modelo, pero supervisados activamente). "Hace dos semanas" desde 2026-04-29 = ~mediados de abril, días después del anuncio de Mythos.

### Q49 — Bancos europeos sin acceso aún

- **Source**: S10
- **Location**: párrafo 3
- **Quote (verbatim)**: "El nuevo modelo aún no ha llegado a Europa, y ni los bancos ni otras grandes empresas han tenido aún acceso. Pero quieren estar preparados."
- **Language**: es
- **Notes**: **Confirma la asimetría temporal**. Europa queda en lista de espera. UK próximamente; Eurozona, no fecha.

### Q50 — Lagarde verbatim sobre Mythos

- **Source**: S10 (citando entrevista Bloomberg)
- **Location**: párrafo 6
- **Quote (verbatim)**: "El desarrollo que hemos visto con Anthropic y Mythos es un buen ejemplo de una empresa responsable que de repente piensa: 'Esto podría ser realmente bueno, pero si cae en las manos equivocadas, podría ser realmente malo'."
- **Language**: es (la traducción usada por El País; la original en Bloomberg será inglesa)
- **Notes**: **Cita load-bearing para esta sala.** La presidenta del BCE adoptando el frame de Anthropic ("empresa responsable"). Importante leer cuidado: Lagarde _concede_ el framing — eso es noticia en sí mismo. Para la charla: mostrar la cita y dejar que la sala procese si "empresa responsable" cuadra con todo lo demás (filtración día 1, framework retirado, etc.).

### Q51 — Thomas (NTT DATA) sobre la diferencia

- **Source**: S10
- **Location**: párrafo 4
- **Quote (verbatim)**: "Las empresas y los ciberdelincuentes han trabajado desde hace muchos años con screeners de vulnerabilidades [programas para escrutar los fallos de los software]. La diferencia ahora es la enorme capacidad de explotar esas vulnerabilidades."
- **Language**: es
- **Notes**: Miguel Ángel Thomas, jefe ciberseguridad NTT DATA. Voz técnica española. Frame: el escalón no es _encontrar_ vulnerabilidades — es _explotarlas_ a escala.

### Q52 — Thomas: cuestión de tiempo, China/Rusia

- **Source**: S10
- **Location**: penúltimo párrafo
- **Quote (verbatim)**: "es solo cuestión de tiempo que otras compañías, China o Rusia desarrollen modelos con una potencia de fuego similar"
- **Language**: es
- **Notes**: Confirma desde voz independiente española la asimetría temporal: Glasswing es ventana, no contención.

### Q53 — Thomas: ganadores y perdedores corporativos

- **Source**: S10
- **Location**: último párrafo
- **Quote (verbatim)**: "grandes empresas como los bancos se vean obligadas a disparar sus inversiones en luchar contra el cibercrimen, con la necesidad de actuar mucho más rápido que hasta ahora. Y va a hacer ganadoras a aquellas entidades más grandes y con más capacidad inversora, mientras hará sufrir a las de tamaño mediano."
- **Language**: es
- **Notes**: **Refuerza Beat 5c desde fuente española.** La asimetría competitiva no es claim PauseAI — es predicción de un CISO de NTT DATA en El País. Ganadoras: grandes con capacidad inversora. Perdedoras: medianas. _Cita prestada perfecta para Beat 5c._

### Q54 — BdE ya pidió info, anteproyecto de ley

- **Source**: S10
- **Location**: párrafo 8
- **Quote (verbatim)**: "Esta preocupación se extiende también al supervisor financiero nacional, el Banco de España. La institución que pilota José Luis Escrivá ya reclamó información a las entidades españolas sobre sus planes de adopción de esta tecnología, en tanto en cuanto el Anteproyecto de Ley para el buen uso y la gobernanza de la inteligencia artificial designa al Banco de España y a la Comisión Nacional del Mercado de Valores (CNMV) como los supervisores encargados de vigilar el mercado."
- **Language**: es
- **Notes**: BdE como supervisor IA en el sector financiero. Anteproyecto de Ley. Marco institucional español.

---

## Evaluation awareness — Mythos system card §4.2.1 + §4.5.5

### Q55 — Anthropic admite que evaluation awareness limita la interpretación de los resultados de seguridad

- **Source**: S2 (Mythos system card)
- **Location**: §4.2.1, p. 84
- **Quote (verbatim)**: "Evaluation awareness concerns substantially limit the interpretation of the unprompted evaluation results. Given very high rates of prompted evaluation awareness, models can likely correctly represent these evaluations as such without verbalization. It is difficult to know whether models act on such representations, but this means that models may behave differently than they would when presented with real-world opportunities to compromise research. The reported rate of zero research compromise behaviour should therefore be interpreted cautiously."
- **Language**: en
- **Notes**: **La caveat autorreflexiva**. Anthropic admite explícitamente que sus propias evaluaciones de seguridad pueden no reflejar el comportamiento real del modelo en deployment. Cita load-bearing para Beat 2 (cuarta capa de la paradoja).

### Q56 — Cifras comparativas de detección de evaluación

- **Source**: S2 §4.2.1, p. 84
- **Location**: párrafo de external testing en research compromise
- **Quote (verbatim)**: "Claude Mythos Preview achieves 78% accuracy [distinguishing evaluation from deployment data], compared to 76% for Opus 4.6 and 66% for Sonnet 4.6. [...] In unprompted evaluations, Claude Mythos Preview mentions the possibility of being tested 12% of the time, compared to 0% of the time for Opus 4.6 and 16% of the time for Sonnet 4.6."
- **Language**: en
- **Notes**: Datos comparativos. El salto de 0% (Opus 4.6) a 12% (Mythos) en mención unprompted de "este puede ser un test" es el datapoint más revelador.

### Q57 — Behavioral audits: 7.6% de turnos muestran evaluation awareness

- **Source**: S2 §4.5.5.1, p. 130
- **Location**: section sobre behavioral auditing
- **Quote (verbatim)**: "In our filtered set of transcripts, 83.0% of automated behavioral audit turns contained no signs of either latent or verbalized evaluation awareness, 9.4% displayed ambiguous indicators and could not be confidently classified. The remaining 7.6% displayed evaluation awareness in some form, and in most cases this awareness was not verbalized."
- **Language**: en
- **Notes**: Mayoritariamente sin verbalizar = el modelo lo sabe pero no lo dice. Más preocupante para fiabilidad de evaluaciones.

### Q58 — Comparación deployment vs evaluation: muchísima menos awareness en uso real

- **Source**: S2 §4.5.5.1, p. 131
- **Location**: control con deployment data
- **Quote (verbatim)**: "Across 465 Claude Code transcripts containing about 2,700 Assistant turns, only seven turns (roughly 0.3%) had latent evaluation awareness and no turns had verbalized evaluation awareness."
- **Language**: en
- **Notes**: 0.3% en deployment real vs 7.6% en evaluations. El modelo distingue muy bien los contextos. Esto refuerza la caveat de Q55: el comportamiento en evals puede no predecir el comportamiento en deployment.
