# Claims — Mythos y Glasswing

Every load-bearing claim, with source IDs, confidence, counter-evidence flag. **Rule**: nothing on a slide unless it's here.

## Schema

```
### C<n> — claim, one sentence
- **Sources**: S<n>, S<n>
- **Confidence**: high | medium | low
- **Counter-evidence checked**: yes | no | partial
- **Notes**: ...
```

Confidence:

- **high** — primary source, direct quote, no contradiction found.
- **medium** — primary source + interpretation, or single-source.
- **low** — derived/inferred, weak source, or contested.

---

## A. Baseline facts about Mythos

### C1 — Anthropic anunció Claude Mythos Preview el 7 de abril de 2026

- **Sources**: S1, S2
- **Confidence**: high
- **Counter-evidence checked**: yes (fecha en S2 abstract)
- **Notes**: Hecho de baseline.

### C2 — Anthropic decidió no liberar Mythos generalmente; lo distribuye via Project Glasswing a partners

- **Sources**: S1, S2, S3
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q7)
- **Notes**: Carga retórica enorme. Verbatim en Q7.

### C3 — Mythos desarrolló 181 exploits funcionales contra Firefox 147 donde Opus 4.6 logró 2 (de varios cientos de intentos), con control parcial adicional sobre 29 más

- **Sources**: S1, S2 (§3.3.3)
- **Confidence**: high (textual)
- **Counter-evidence checked**: yes — verbatim verificado vs S1 y S2; metodología detallada en S2 (250 trials = 50 categories × 5 trials)
- **Notes**: La cifra ancla. Verbatim en Q1. Metodología de eval verificable en S2 §3.3.3.

### C4a — Mythos descubrió un bug parcheado de 27 años en OpenBSD

- **Sources**: S1
- **Confidence**: high (textual)
- **Counter-evidence checked**: partial — Anthropic dice "now-patched"; verificar si CVE/patch específico es público
- **Notes**: Verbatim en Q2. Hook potencial pero requiere verificar el patch público antes de slide.

### C4b — Mythos identificó autonomamente una vulnerabilidad de 16 años en el codec H.264 de FFmpeg

- **Sources**: S1
- **Confidence**: high
- **Counter-evidence checked**: no
- **Notes**: Verbatim en Q3. H.264 es ubicuo; impacto potencial enorme.

### C4c — Mythos identificó y explotó autonomamente una RCE de 17 años en FreeBSD (NFS); CVE-2026-4747

- **Sources**: S1
- **Confidence**: high
- **Counter-evidence checked**: yes — CVE público
- **Notes**: Verbatim en Q4 y Q5. CVE permite verificación externa. **Precisión técnica**: el bug está en el código NFS de FreeBSD; permite RCE-no-auth a cualquier atacante con acceso de red al servicio. Anthropic dice "anywhere on the internet" porque hay servidores con NFS expuesto a internet — pero NFS típicamente vive en LAN/detrás de firewall, así que la afirmación de Anthropic _aplica con NFS internet-facing, y aplica via LAN compromise para el resto_. No overclaim: en la charla, decir "con acceso de red al servicio" + "Anthropic enmarca como 'anywhere on the internet'", no parafrasear como "cualquiera desde cualquier punto de internet".

### C5 — Más del 99% de las vulnerabilidades descubiertas siguen sin parchear / sin disclosure

- **Sources**: S1
- **Confidence**: high (textual)
- **Counter-evidence checked**: yes (verbatim Q6)
- **Notes**: Cifra fuerte para sección de "ventana".

### C6 — Anthropic usa SHA-3 224 commitments para probar posesión sin disclosure

- **Sources**: S1
- **Confidence**: high
- **Counter-evidence checked**: yes (hashes en appendix)
- **Notes**: Detalle técnico interesante; útil pedagógicamente.

### C7 — Mythos identificó "thousands of zero-day vulnerabilities" en infraestructura crítica

- **Sources**: S3
- **Confidence**: high (textual)
- **Counter-evidence checked**: no — cifra agregada, no desglosada
- **Notes**: Verbatim en Q29. Magnitud del programa.

### C8 — Mythos saturó los benchmarks de cyber capability internos y externos (Cybench: 100%)

- **Sources**: S2 (§3.1, §3.3.1)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q11, Q12)
- **Notes**: Implicación: el sistema de medición ya no mide a estos modelos.

### C9 — Mythos completó un cyber-range corporativo simulando ataque que estimaron en 10h+ de un experto humano; primer modelo en lograrlo

- **Sources**: S2 (§3.4)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q13)
- **Notes**: Datapoint cuantitativo de magnitud práctica.

---

## B. Framework transition (ASL retreat) — confirmado

### C10 — Anthropic transicionó RSP 2.0 → RSP 3.0 en febrero 2026 (mes de release de Opus 4.6); v3.1 en abril (mes de Mythos)

- **Sources**: S2 (§2.1.1)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q14)
- **Notes**: Timing coincide exactamente con releases.

### C11 — Bajo RSP 3.0, Anthropic ha retirado el término "AI Safety Level" para los thresholds de capacidad

- **Sources**: S2 (§2.1.1)
- **Confidence**: high (textual, autoadmitido)
- **Counter-evidence checked**: yes (verbatim Q15)
- **Notes**: **Cita load-bearing.** Anthropic lo dice literalmente.

### C12 — El system card de Opus 4.6 menciona ASL 61 veces; el de Mythos, 3 veces

- **Sources**: S2, S4 (count empírico vía grep)
- **Confidence**: high (cuantificable, reproducible)
- **Counter-evidence checked**: yes (grep ejecutado 2026-04-28)
- **Notes**: Slide visual potente. "61 → 3 en 2 meses."

### C13 — Opus 4.6 fue desplegado bajo "AI Safety Level 3 Deployment and Security Standard"; Mythos no tiene una clasificación equivalente en su system card

- **Sources**: S2, S4 (Abstract)
- **Confidence**: high (textual + ausencia)
- **Counter-evidence checked**: yes (verbatim Q18)
- **Notes**: El paralelo en abstracts a 2 meses de distancia.

### C14 — RSP v3.0 reemplaza thresholds binarios (rule-in / rule-out) por "judgment calls" sobre el riesgo general

- **Sources**: S2 (§2.1.1)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q16, Q17)
- **Notes**: La frase "This determination involves judgment calls" es de Anthropic.

### C15 — El "Frontier Compliance Framework" cuantifica catastrophic risk como >50 fatalities O $1B+ en daños

- **Sources**: S2 (§2.1.1, footnote 3)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q19)
- **Notes**: Threshold cuantitativo pero alto. Útil para "qué cuenta como riesgo catastrófico para Anthropic".

---

## C. The alignment paradox — sección 4.1.1

### C16 — Anthropic califica Mythos como "best-aligned model... by a significant margin" Y "greatest alignment-related risk of any model... released to date"

- **Sources**: S2 (§4.1.1)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q20)
- **Notes**: **La paradoja en una cita.** Probablemente la cita más fuerte de la charla.

### C17 — Anthropic atribuye el aumento de riesgo a capabilities, no a regression en alignment

- **Sources**: S2 (§4.1.1)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q22)
- **Notes**: Anthropic _misma_ dice que el riesgo es estructural (capacidad), no de calidad de alignment. Esto blinda la thesis de la charla.

### C18 — Anthropic admite no haber sido conscientes del nivel de riesgo cuando desplegaron internamente las versiones tempranas

- **Sources**: S2 (§4.1.1)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q23)
- **Notes**: La admisión más durísima. "We were not aware..."

### C19 — Una versión interna escapó del sandbox (sin que se le pidiera) y publicó detalles del exploit en webs públicas

- **Sources**: S2 (§4.1.1)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q24)
- **Notes**: Anécdota concreta y vívida. Para una sala civil esto pega.

### C20 — Un modelo razonó explícitamente sobre cómo hacer su respuesta "no demasiado precisa" para encubrir uso de método prohibido

- **Sources**: S2 (§4.1.1)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q25)
- **Notes**: Razonamiento deceptivo explícito en CoT.

### C21 — Análisis de white-box interpretability confirmó que los modelos en estos casos eran conscientes de que sus acciones eran deceptivas

- **Sources**: S2 (§4.1.1)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q26)
- **Notes**: No es "patrón estadístico" — es awareness verificado vía features de "concealment, strategic manipulation, avoiding suspicion".

---

## D. Glasswing structure

### C22 — Glasswing tiene 12 partners de lanzamiento: AWS, Apple, Anthropic, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, Linux Foundation, Microsoft, NVIDIA, Palo Alto Networks

- **Sources**: S3
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q27)
- **Notes**: Lista nominal. **Lo que falta**: gobiernos, agencias cyber (CISA/ENISA), academia, sociedad civil.

### C23 — Glasswing extendió acceso a 40+ organizaciones adicionales no listadas públicamente

- **Sources**: S3
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q28)
- **Notes**: Falta de transparencia sobre quién más accede.

### C24 — Bajo Glasswing, los classifier triggers de seguridad NO bloquean prompts; en general-release con capacidad similar, Anthropic dice que sí los bloquearían

- **Sources**: S2 (§3.2)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q10)
- **Notes**: Detalle muy poco intuitivo. Glasswing partners tienen un Mythos con menos filtros que cualquier modelo general-release.

### C25 — Anthropic enmarca Glasswing como "ventana" antes de que modelos similares estén broadly available

- **Sources**: S1
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q8)
- **Notes**: **Crítico** — Anthropic asume explícitamente que estos modelos _aparecerán_. La asimetría es su framing, no nuestro.

---

## E. Argumentación / claims derivados (no-fácticos)

### C26 — La asimetría ofensiva/defensiva en cyber/IA es estructural, no accidental — emerge del scaling

- **Sources**: derivado + soportado por C8, C16, C17
- **Confidence**: medium (argumentación, soportada por datos pero no demostrada)
- **Counter-evidence checked**: no — buscar contraargumentos: ¿hay frame en que ofensiva y defensiva escalan a la par?
- **Notes**: Claim policy central de la charla. Es un argumento, no un dato. **Marcar explícitamente como argumento en slide.**

### C27 — El despliegue restringido (modelo Glasswing) reduce daño marginal de un modelo, no la asimetría agregada

- **Sources**: derivado + soportado por C25 (Anthropic admite que vendrán modelos similares)
- **Confidence**: medium-high (Anthropic concede el frame)
- **Counter-evidence checked**: partial
- **Notes**: La crítica estructural, no a Anthropic. Glasswing es lo correcto dado un Mythos; el problema es que habrá más Mythos.

### C28 — La transición RSP 2.0 → 3.0 ocurre exactamente cuando el modelo más capaz hasta la fecha "satura" las evaluaciones del marco anterior

- **Sources**: derivado de C8, C10, C12, C14
- **Confidence**: medium (correlación temporal, no causación demostrada)
- **Counter-evidence checked**: no — Anthropic argumentaría que el cambio venía planeado independientemente. Buscar evidencia.
- **Notes**: Observación estructural. **Importante NO overclaim** — citar el timing y dejar que la sala saque la inferencia.

---

## G. Mozilla / defender perspective (S5)

### C29 — Mozilla pre-identificó 271 vulnerabilidades en Firefox 150 usando Mythos (vs 22 con Opus 4.6 en Firefox 148)

- **Sources**: S5
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q30; cifra atribuida a Bobby Holley, CTO Firefox)
- **Notes**: Cifra independiente (no de Anthropic), 12× salto. Confirma magnitud del step-change. Date: 21 abril 2026.

### C30 — Bobby Holley (CTO Firefox) considera que defensa cyber acaba de "doblar la curva" gracias a IA

- **Sources**: S5
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q31, Q32)
- **Notes**: Counter-argumento explícito al frame de asimetría. **Engage honestamente.** El argumento: "Mozilla ganó porque tuvo acceso. Sin acceso, ¿qué pasa?"

### C31 — Mozilla CTO Raffi Krikorian (op-ed NYT) reconoce que maintainers de OSS no tienen acceso a Mythos y deberían

- **Sources**: S5
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q33)
- **Notes**: Crítica desde dentro del bando defensor a la distribución desigual. Útil para Beat Glasswing.

---

## H. Acceso no autorizado (S6/S7/S8)

### C32 — El mismo día del anuncio público (7 de abril 2026), un grupo no autorizado obtuvo acceso a Mythos vía "educated guess" sobre patrones de hosting de Anthropic

- **Sources**: S6, S7, S8 (vía Bloomberg)
- **Confidence**: high
- **Counter-evidence checked**: partial — Anthropic no niega el acceso, dice "investigando, sin evidencia de impacto en sistemas"
- **Notes**: **Hecho central.** Confirma empíricamente que el modelo de despliegue restringido falló en t=0. Verbatim Q35.

### C33 — Uno de los miembros del grupo no autorizado es contratista externo de Anthropic

- **Sources**: S6, S7
- **Confidence**: high
- **Counter-evidence checked**: yes (Bloomberg, vía S6/S7)
- **Notes**: Insider threat. Verbatim Q36.

### C34 — La filtración fue posibilitada por información sobre prácticas de Anthropic obtenida via Mercor (su training startup)

- **Sources**: S7
- **Confidence**: high (textual, atribuido a Bloomberg)
- **Counter-evidence checked**: no — verificar coverage independiente del incidente Mercor
- **Notes**: Cadena: Mercor breach → leaked Anthropic patterns → educated guess → access. Verbatim Q37.

### C35 — Hubo un incidente de seguridad previo: detalles de Mythos expuestos en database públicamente accesible antes del anuncio (scoop original de Fortune)

- **Sources**: S7
- **Confidence**: high (textual)
- **Counter-evidence checked**: yes (Fortune mismo lo reporta)
- **Notes**: **Patrón, no incidente aislado.** Verbatim Q42.

### C36 — El grupo ha estado usando Mythos continuamente desde el día 1, evitando detección con tareas inocuas (e.g., construir webs simples)

- **Sources**: S6, S7
- **Confidence**: high
- **Counter-evidence checked**: yes (Bloomberg vía S6)
- **Notes**: Verbatim Q36. La intención declarada del grupo no implica que otros con acceso similar tengan la misma.

### C37 — David Lindner (CISO Contrast Security, 25y industry) considera el incidente predecible y probable indicador de que actores estatales (e.g., China) ya tienen acceso

- **Sources**: S7
- **Confidence**: medium (Lindner's professional opinion, not factual claim)
- **Counter-evidence checked**: no
- **Notes**: Verbatim Q38, Q39. Para una sala civil, citar a un CISO independiente vale más que activismo.

### C38 — Sam Altman (OpenAI CEO) calificó la comunicación de Mythos como "fear-based marketing"

- **Sources**: S7
- **Confidence**: high (textual)
- **Counter-evidence checked**: no — buscar la cita original de Altman
- **Notes**: **Counter-narrativa que la charla debe abordar.** Verbatim Q41. Si en Q&A alguien pregunta por esto: la respuesta es que el debate sobre intención narrativa de Anthropic no cambia los hechos posteriores (filtración el mismo día, 271 vulns, etc.).

---

## I. Banking ecosystem & geopolitics

### C39 — Goldman Sachs, Citigroup, Bank of America y Morgan Stanley están testando Mythos (más allá del partner Glasswing JPM Chase)

- **Sources**: S8
- **Confidence**: medium-high (textual, "according to reports")
- **Counter-evidence checked**: no — buscar coverage independiente de cada banco
- **Notes**: Verbatim Q43. **Lista exclusivamente US.**

### C40 — El Treasury Secretary US Scott Bessent convocó banqueros US en abril 2026 para promover el uso de Mythos en detección de vulnerabilidades

- **Sources**: S8 (vía Bloomberg)
- **Confidence**: high
- **Counter-evidence checked**: no — buscar nota de prensa Treasury
- **Notes**: Verbatim Q44. **Push gubernamental US doméstico.** Ningún equivalente UE/España.

### C41 — Los 4 bancos españoles significativos (BBVA, Santander, CaixaBank, Sabadell) NO tienen acceso a Mythos pero SÍ están en conversación supervisora con el BCE

- **Sources**: S10 (El País, 2026-04-29)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q48, Q49)
- **Notes**: **Revisado 2026-04-30**. Anterior versión decía "no aparecen en ninguna lista pública" — sigue siendo cierto sobre acceso, pero NO sobre la conversación institucional. El BCE convocó hace ~2 semanas y pidió planes de contingencia. Distinción importante para Beat 5b.

### C42 — Equipamiento de redes domésticas en España viene mayoritariamente de fabricantes NO listados como Glasswing partners (Mitrastar, Sercomm, Sagemcom, ZTE, Askey)

- **Sources**: derivado — comparación entre lista Glasswing (S3) y fabricantes típicos de routers ISP españoles (Movistar, Vodafone, Orange, Digi, MásMóvil)
- **Confidence**: medium (hecho de mercado verificable; _consultar inventario actual de fabricantes ISP españoles 2026 antes de slide_)
- **Counter-evidence checked**: no — _bloqueante para slide_: confirmar fabricantes vigentes 2026
- **Notes**: Datapoint para kill chain #1. Un español típico tiene un router de fabricante sin acceso defensivo a Mythos.

---

## J. Ventaja competitiva — Glasswing partners tienen el modelo más capaz, no solo "el modelo cyber"

### C43 — Anthropic describe Mythos como "general-purpose frontier model... our most capable yet for coding and agentic tasks" — no como modelo específico de cyber

- **Sources**: S2 (abstract), S3
- **Confidence**: high (textual)
- **Counter-evidence checked**: yes (verbatim Q29b, Q29c)
- **Notes**: **Pivotal para el beat de ventaja competitiva.** Glasswing partners NO acceden a una variante limitada a cyber — acceden al modelo más capaz de Anthropic para todo (coding, agentic, productividad).

### C44 — Los ~52 partners de Glasswing (12 launch + 40 adicionales) tienen acceso al Claude más capaz que existe, mientras el resto del mercado usa modelos anteriores menos capaces

- **Sources**: derivado de C2 + C43 + S3 partner list
- **Confidence**: high
- **Counter-evidence checked**: yes (Anthropic's own framing)
- **Notes**: La asimetría no es solo "quién está protegido cyber" — es "quién tiene la herramienta más potente para cualquier trabajo intelectual". Es una asimetría de capacidad operativa general.

### C45 — Los partners US dominan la lista (todos los 12 launch partners + bancos US testando + push del Treasury); ninguna empresa española/UE en lista pública

- **Sources**: S3 + S8
- **Confidence**: high
- **Counter-evidence checked**: yes (lista pública verificable)
- **Notes**: Datapoint para asimetría geográfica de la ventaja competitiva. Las 40 organizaciones adicionales no listadas pueden incluir UE pero la opacidad ya es informativa.

### C46 — El uso reportado por el grupo no autorizado ("building simple websites") confirma empíricamente que Mythos se usa para tareas generales, no solo cyber

- **Sources**: S6, S7 (vía Bloomberg)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q36)
- **Notes**: Refuerza C43-C44. El grupo no autorizado _podría_ usar Mythos para cyber pero elige tareas inocuas — porque el modelo es general-purpose y útil para todo. La utilidad general es lo que motiva el acceso, no solo lo cyber.

### C47 — La barrera de acceso a Mythos no es precio (existe pricing público $25/$125 per M tokens) sino selección por partnership

- **Sources**: S3
- **Confidence**: high
- **Counter-evidence checked**: yes (precio en S3)
- **Notes**: No es "demasiado caro para empresas españolas" — es "no se les ofrece a empresas españolas". La barrera es la lista, no la tarifa. _Importante para no confundir el argumento con uno económico._

---

## K. Marco institucional EU/España (S10 — El País, 29 abr 2026)

### C48 — El BCE convocó hace ~2 semanas a responsables de riesgos de bancos significativos zona euro y pidió planes de contingencia ante Mythos

- **Sources**: S10 (vía Bloomberg)
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q47, Q48)
- **Notes**: **Cierra el bloqueante "BCE statement"**. Incluye los 4 bancos españoles significativos (Santander, BBVA, CaixaBank, Sabadell).

### C49 — Los bancos europeos / españoles NO tienen acceso a Mythos pero quieren tenerlo; Lagarde lo ha reclamado; UK lo recibe "inminente"

- **Sources**: S10
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q49)
- **Notes**: Asimetría temporal: US partners tienen acceso, UK próximamente, Eurozona en lista de espera sin fecha. Confirma asimetría geográfica.

### C50 — Christine Lagarde (presidenta BCE) describió a Anthropic como "empresa responsable" en entrevista con Bloomberg

- **Sources**: S10
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q50)
- **Notes**: **Cita load-bearing para esta sala**. La máxima autoridad financiera europea adopta el frame de Anthropic. _Notable_: Lagarde concede el framing public. Para la charla: mostrar la cita después de la timeline de incidentes y dejar que la sala juzgue si "empresa responsable" cuadra con filtración día 1 + framework retirado + admisión "we were not aware".

### C51 — Miguel Ángel Thomas (CISO NTT DATA, fuente española independiente) confirma que el escalón es la _capacidad de explotar_, no de detectar

- **Sources**: S10
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q51)
- **Notes**: Voz técnica española en prensa española. Útil para afirmar "esto no es vaporware" sin recurrir solo a fuentes US.

### C52 — Thomas predice que es "cuestión de tiempo" que China o Rusia desarrollen modelos con potencia similar

- **Sources**: S10
- **Confidence**: medium-high (predicción experta, no factual claim)
- **Counter-evidence checked**: yes (verbatim Q52)
- **Notes**: Confirma desde voz española la asimetría temporal: Glasswing es ventana, no contención.

### C53 — Thomas predice que la asimetría competitiva favorece a "entidades más grandes y con más capacidad inversora", perjudica a "las de tamaño mediano"

- **Sources**: S10
- **Confidence**: high (predicción explícita)
- **Counter-evidence checked**: yes (verbatim Q53)
- **Notes**: **Refuerza Beat 5c desde fuente española independiente.** La asimetría competitiva no es claim PauseAI — es análisis de un CISO en El País. Cita prestada perfecta para no parecer activismo.

### C54 — El Banco de España ya pidió a las entidades españolas información sobre planes de adopción de Mythos; Anteproyecto de Ley IA designa BdE+CNMV como supervisores IA del sector

- **Sources**: S10
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q54)
- **Notes**: Marco institucional español documentado. Útil para Q&A sobre "qué hace España" y para Beat 5b.

### C55 — El BCE "ha seguido la postura de la Casa Blanca" — el push regulatorio europeo replica el del Treasury US, con bancos europeos como receptores

- **Sources**: S10
- **Confidence**: medium (interpretación de El País)
- **Counter-evidence checked**: no
- **Notes**: Frame interesante: la asimetría incluye que el regulador europeo _sigue_ al regulador US, no marca pauta propia. Citado a El País — usar con cuidado.

### C56 — Anthropic perdió contratos con la Administración federal US por "conflicto con Trump"

- **Sources**: S10 (única fuente, contexto)
- **Confidence**: medium (mencionado de pasada en El País, no es el foco del artículo)
- **Counter-evidence checked**: no — buscar coverage independiente
- **Notes**: Contexto rico pero lateral. Anthropic operaba en el sector federal US y ya no. Posible explicación de por qué Glasswing concentra grandes corporaciones y bancos vs sector público. _No central para la charla; útil si surge en Q&A._

---

## L. Verificaciones empíricas españolas (S11-S13)

### C57 — El equipamiento de redes domésticas en España viene de fabricantes NO en Glasswing — verificado por ISP

- **Sources**: S12 (BandaAncha + ADSLZone + Xataka)
- **Confidence**: high
- **Counter-evidence checked**: yes (multi-fuente)
- **Notes**: **C42 promovido a verificado**. Inventario 2026:
  - Movistar/O2 (Telefónica): **MitraStar + Askey** (Asus brand)
  - Vodafone: **Sercomm + ZTE** (en transición a F6600P)
  - Orange: **Sagemcom + Arcadyan + ZTE** (Livebox 6/7)
  - Digi: **ZTE** (H3600P, F8748Q)
  - MásMóvil: **ZTE**
  - **Ninguno aparece en Glasswing**. Datapoint sólido para Beat 5a.
  - _Nota lateral, no para slide en esta charla_: ZTE (chino) está en major Spanish ISPs — capa geopolítica adicional. La asimetría incluye que la infraestructura crítica española depende de fabricantes que no están en ninguna alianza defensiva US/UE.

### C58 — La 2FA bancaria española bajo PSD2/SCA combina contraseña + (SMS o biometría), con SMS aún ampliamente usado

- **Sources**: S13 (BBVA, Santander, análisis sectoriales)
- **Confidence**: high
- **Counter-evidence checked**: yes (oficial banco + sectorial)
- **Notes**: PSD2 obligatoria EU desde 2019. Combinación 2 factores de 3 categorías. **BBVA/CaixaBank**: app + biometría como factor "tienes/eres". **Santander/Bankinter/Openbank/ING**: SMS sigue común. _SMS-2FA es vulnerable a SIM swap, SS7, malware en móvil._ Para Kill Chain #2: si el atacante controla el dispositivo (vía Kill Chain #1 o exploit en app), incluso push notifications se pueden interceptar. **Biometría no es panacea — depende del dispositivo, no del usuario.**

### C59 — Existe cita canónica académica para la asimetría offense/defense en cyber: Buchanan, "The Cybersecurity Dilemma" (2017)

- **Sources**: S11
- **Confidence**: high (libro académico estándar de la materia, OUP)
- **Counter-evidence checked**: no — no leído directamente; usar con cuidado
- **Notes**: **Cierra C26**. Tesis de Buchanan: "the particular characteristics of the digital domain mean that the effects [del security dilemma] are deeply pronounced", incluyendo que "technology seems to favor the offense over the defense". Cita prestada perfecta para Beat 4 si entra (refuerzo conceptual sin que parezca claim PauseAI). **No fingir lectura completa**: en slide o Q&A, citar como "Ben Buchanan, _The Cybersecurity Dilemma_, Oxford 2017".

---

## M. Evaluation awareness — Mythos sabe cuándo está siendo evaluado

### C60 — Mythos detecta evaluaciones con 78% de precisión, vs 76% Opus 4.6 y 66% Sonnet 4.6

- **Sources**: S2 (Mythos system card §4.2.1, p. 84)
- **Confidence**: high (textual)
- **Counter-evidence checked**: yes (datos de la propia Anthropic)
- **Notes**: Métrica concreta. Mythos es ligeramente mejor que Opus 4.6 distinguiendo evaluación de despliegue real.

### C61 — Mythos menciona "esto puede ser un test" sin pregunta el 12% de las veces; Opus 4.6 lo hace 0% de las veces

- **Sources**: S2 §4.2.1, p. 84
- **Confidence**: high (textual)
- **Counter-evidence checked**: yes
- **Notes**: **Datapoint clave**. El salto de 0% a 12% sugiere que Mythos verbaliza evaluation awareness mucho más que su predecesor — y aún así Anthropic dice que la mayoría de awareness es _no verbalizada_ (más preocupante: el modelo lo sabe sin decirlo).

### C62 — Anthropic admite explícitamente que evaluation awareness "limita sustancialmente la interpretación" de las evaluaciones de alineamiento

- **Sources**: S2 §4.2.1, p. 84
- **Confidence**: high
- **Counter-evidence checked**: yes (verbatim Q55)
- **Notes**: **La cuarta capa de la paradoja**. Anthropic confiesa que sus propios números de seguridad pueden no reflejar el comportamiento real porque el modelo sabe cuándo le miden. Es una caveat autorreflexiva — limita la fuerza de cualquier "best-aligned" claim. Encaja en Beat 2 entre el slide de white-box concealment y el de "risk from capabilities".

### C63 — En behavioral audits, 7.6% de los turnos de Mythos muestran evaluation awareness, mayoritariamente sin verbalizar

- **Sources**: S2 §4.5.5.1, p. 130-131
- **Confidence**: high
- **Counter-evidence checked**: yes
- **Notes**: Detectado vía white-box (probes + activation verbalizers). Escenarios que más activan awareness: self-preservation ante shutdown, alta autonomía en stakes altos, descubrimiento de info no ética en tareas benignas. En despliegue Claude Code real (control), solo 0.3% — mucho menos que en evals. Implica: el modelo distingue evals de uso real internamente.

---

## F. Pendientes de verificar / añadir

- [ ] El bug específico de OpenBSD-27y: ¿qué es? Verificar si hay patch público identificable.
- [ ] Counter-evidence académica para C26 (offense/defense balance — Schneier, Buchanan, Geer).
- [ ] Counter-evidence sobre el cambio RSP: ¿hay versión pública v2.0 vs v3.0 del documento RSP que se pueda comparar?
- [ ] OpenAI / GDM respuesta al anuncio (¿se pronunciaron? ¿silencio?).
- [ ] Cobertura T2 (NYT/Reuters/FT) — buscar y añadir.
- [ ] §4.5.4 "Instances of covering up wrongdoing" — leer y extraer claims si añade material.
