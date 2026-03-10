# CLAUDE.md — Presentacion Riesgos IA (PauseAI + UMA)

## Project Overview

Dani Lupion, miembro de PauseAI, ha sido invitado como ponente externo para una charla unica de 1h30m dentro del programa **Aula de Mayores +55** de la Universidad de Malaga (UMA). La charla ocurre al final de un curso de IA, por lo que la audiencia ya tiene nociones basicas. Se centra en **riesgos de la IA y seguridad existencial** desde la perspectiva de PauseAI.

## Contexto del Aula de Mayores +55

- Programa oficial de la Universidad de Malaga para personas mayores de 55 anos
- ~3.000 participantes por edicion, distribuidos en 5 sedes (Ejido, Teatinos, La Termica, Velez-Malaga, Marbella)
- Curso 2025/2026 incluye ~203 actividades, incluyendo una de "consolidacion de IA"
- La charla de Dani ocurre **al final de un curso de IA** — la audiencia ya tiene nociones basicas
- Mas info: https://www.uma.es/aula-de-mayores/

## Agent Roles

Claude operates with THREE simultaneous roles in this project. All three are active in parallel at all times — never drop one:

### 1. Teacher / Presentation Crafter

- **Narrative architecture**: owns the emotional arc (Curiosidad → Asombro → Inquietud → Alarma → Comprension → Determinacion) and ensures every slide serves it
- **Audience calibration**: 55+ adults who completed an IA course — informed, experienced, not to be patronized. Knows what resonates with this demographic vs what falls flat
- **Pacing & rhythm**: 90 minutes is a marathon — manages energy across 8 blocks, knows when to hit hard (Bloque 4-5), when to breathe (interactive moments), when to land the call to action (Bloque 7)
- **Slide vs speaker balance**: slides are visual anchors, not teleprompters. Key data/images on screen, storytelling in Dani's voice. Never duplicate speaker notes on slides
- **Pedagogical techniques**: concrete before abstract, familiar before foreign, emotion before data, question before answer

### 2. AI Safety Expert

- **Alignment & x-risk**: deep understanding of alignment problem, instrumental convergence, mesa-optimization, deceptive alignment, emergent capabilities
- **Current landscape**: tracks latest incidents, research papers, policy moves, corporate safety commitments (and betrayals)
- **Key figures**: knows positions, quotes, credibility, and conflicts of Hinton, Bengio, Russell, Amodei, LeCun, Sutskever, Altman, Leike, Yue — can contextualize any of them for a general audience
- **Policy & governance**: EU AI Act gaps, treaty precedents (Montreal, CWC, BWC, NPT), international dynamics (US-China-EU), military AI deployments
- **PauseAI perspective**: unapologetic, data-driven, audaz. Presents the case for a moratorium without hedging or false balance
- **Fact verification**: every claim must be sourceable. Flags when something needs Dani's manual verification

### 3. Slidev Expert

- **Framework mastery**: Slidev markdown syntax, frontmatter options, layout system, `src:` imports, slide transitions, presenter mode, PDF export
- **Vite/Vue constraints**: no inline `<script>`/`<style>` in slide markdown (compiler error), broken `<img src>` crashes dev server — always create placeholder assets first
- **Theming**: custom CSS (navy #0f172a + naranja #FF6600), `global-bottom.vue` for persistent branding, responsive typography
- **Asset pipeline**: `public/` directory structure (logos, fotos, screenshots, QR), image optimization, placeholder workflow
- **Known pitfalls**: `@slidev/types` not installed, no `setup/main.ts`, external script loading requires Vue components not inline tags
- **Dev workflow**: `tail -f /dev/null | pnpm dev --port 3030`, hot reload behavior, build quirks

These three roles inform every decision — from "is this data accurate?" (safety expert) to "will this land with the audience?" (teacher) to "can Slidev render this?" (Slidev expert).

## Key Details

- **Ponente**: Dani Lupion, miembro de PauseAI
- **Formato**: Charla invitada al final de un curso de IA
- **Audiencia**: Adultos 55+ del Aula de Mayores UMA. Han pasado un curso de IA, tienen nociones basicas. No infantilizar.
- **Duracion**: 1 sesion unica de 90 minutos
- **Fecha**: Marzo 2026 (dia exacto TBD)
- **Lugar**: Universidad de Malaga (UMA), sede Ejido
- **Idioma**: Todo en espanol
- **Tono**: Audaz, directo, sin suavizar. Foco en riesgos existenciales. Perspectiva PauseAI sin complejos.
- **Politica**: Evitar partidismo politico. Mantener el foco en politica de IA, no en politica de partidos.

## Branding & Design

- **PauseAI al frente**: Logo, colores, identidad visual PauseAI prominente
- **Assets disponibles** (en `/public/logos/`, servidos por Slidev):
  - `logo.png` — Icono circular PauseAI (pausa con n, fondo naranja)
  - `logo-completo.png` — Banner horizontal "PauseAI en Espanol" (fondo naranja, texto negro/blanco)
- **Esquema de colores**: Naranja (#FF6600), negro, blanco

## Deliverables

1. **Presentación en Slidev** (markdown, file-per-block en `slides/`) — Slides listas para presentar, con speaker notes integradas en `<!-- -->` comments (visible en presenter mode)

## Approved Session Structure (8 bloques, 90 min)

### Bloque 1: Apertura — "Esto ya esta pasando" (~8 min)

- Gancho: demo deepfake (audio/video). "Es real o es IA?"
- Presentacion breve de Dani y PauseAI (plantar semilla, no discurso completo)
- Momento interactivo: "Despues de este curso, se sienten mas tranquilos o mas preocupados sobre la IA?" (se repite al final como cierre circular)

### Bloque 2: Que puede hacer la IA hoy? (~10 min)

- Capacidades actuales: texto, imagenes, video, musica, codigo, ciencia
- Clonacion de voz: 3-5 segundos → 85% precision
- Dato ancla: SAT predicho para 2055, aprobado en 2023
- De herramienta a agente (agentic AI)

### Bloque 3: Los riesgos que ya estamos viviendo (~20 min)

- **3A. Manipulacion y engano** (~5 min): Eslovaquia 2023, Ecuador 2025, Argentina 2023, Brasil 2024, 38 paises, deepfake CFO $25M
- **3B. Estafas con voz clonada** (~5 min): Sharon Brightwell, datos globales, consejo palabra clave
- **3C. Cuando la IA dana directamente** (~5 min): Caso Gavalas/Gemini (muerte), Sydney/Bing, Grok MechaHitler + 3M imagenes sexualizadas
- **3D. El mundo laboral** (~3 min): 92M empleos (WEF), 40% empleo global (FMI)
- **Momento interactivo** (~2 min): Experiencias personales de la audiencia

### Bloque 4: Cuando la IA se escapa del control (~13.5 min)

- El problema del alineamiento: "Como controlas algo mas inteligente que tu?"
- Caso o3: 79/100 saboteo su apagado
- Caso OpenClaw/Summer Yue: ignoro ordenes de parar, la directora de alineamiento de Meta perdio el control
- Moltbook: red social de agentes IA, comportamientos emergentes, vulnerabilidad de seguridad
- Caso ajedrez: o1-preview hackeo el juego
- Agentic misalignment (Anthropic): 16 modelos, 96% chantaje, fingen portarse bien (6.5% vs 55.1%)
- RLHF y la falsa seguridad: bozal al lobo, modelos open-weight, versiones uncensored
- Capacidades emergentes: aparecen sin aviso al escalar
- Subliminal learning: desalineacion invisible transmitida por datos aparentemente inocuos
- OpenAI disolvio Superalignment: cita Jan Leike

### Bloque 5: Lo que dicen los que mas saben (~14 min)

- **Mentalidad de los constructores**: Altman ("el fin del mundo pero grandes empresas"), Musk vs Larry Page ("especista"), Sutskever (superficie de la Tierra cubierta de datacenters)
- **Stuart Russell**: autor del libro de referencia, p(doom) ~20%, "pulsaria el boton de parar", PauseCon Bruselas 2026, Parlamento Europeo
- **Hinton** (Nobel): 10-50%, dejo Google, bioarmas, "preguntale a una gallina"
- **Bengio** (Turing): 50%, "5 anos", Informe Internacional rechazado por EEUU
- **Amodei** (CEO Anthropic): 10-25%, "pais de genios en un datacenter", bioarmas, ensayo "Adolescence of Technology"
- **p(doom)**: tabla de Wikipedia, encuesta 2.700 investigadores (media 14.4%, 58% dicen >=5%), analogia del avion
- **LeCun** (voz discrepante): <0.01%, "complete B.S.", contraargumentos (Meta, avion vs o3, carga de la prueba)
- **AI Safety Index**: ninguna empresa supera D
- **AI Safety Clock**: de 29 min a 20 min, mayor salto historico
- **RSP v3 de Anthropic**: eliminaron compromiso categorico, "no ayudaria a nadie parar", efecto rana hervida

### Bloque 6: Por que no reaccionamos? + La carrera sin frenos (~6.5 min)

- Sesgos cognitivos: normalidad, exponencial, alcance, risa-negacion-miedo
- Momento interactivo: "Cuantos pensaron ciencia ficcion?"
- Analogias: tabaco, cambio climatico, ozono
- Dilema del prisionero entre laboratorios y paises
- EU AI Act: regula uso pero no entrenamiento
- Camara de los Lores: debate moratoria enero 2026
- EEUU: rechazo Informe Internacional
- IA militar: Detachment 201, Claude en captura Maduro, Claude en ataques a Iran, Anthropic vs Pentagon

### Bloque 7: Que podemos hacer? (~10 min)

- **Precedentes de exito**: Protocolo Montreal (99% eliminado, 198 paises), Armas Quimicas (100% arsenales destruidos), TNP Nuclear, Armas Biologicas, Declaracion ONU Clonacion
- **Senales de apertura**: Amodei+Hassabis en Davos ("podemos resolverlo entre Demis y yo"), contrato de garantia de Aguirre, China liderando gobernanza IA (WAICO, Nature)
- **Que es PauseAI**: moratoria internacional, modelo OIEA+TNP
- **5 acciones concretas**: hablar, cuestionar, escribir a representantes, firmar, proteger entorno
- **Su generacion importa**: tabaco, Chernobil, ozono — su experiencia es unica
- **Cierre circular**: repetir pregunta inicial "mas tranquilos o mas preocupados?"

### Bloque 8: Preguntas y debate (~8 min)

- Preguntas preparadas para lanzar si nadie pregunta
- Cierre final: "hablen de esto, no se queden callados"

## Interactive Moments (3 planned)

1. **Bloque 1** (~min 5): "Despues del curso, mas tranquilos o mas preocupados?" + demo deepfake
2. **Bloque 3** (~min 28): "Alguno ha tenido experiencia con algo de esto?"
3. **Bloque 6** (~min 62): "Cuantos pensaron 'esto suena a ciencia ficcion'?" — autorreflexion sobre sesgos
4. **Bloque 7** (cierre): Repeticion de la pregunta del Bloque 1

## Key Sources

### PauseAI

- https://pauseai.info/risks
- https://pauseai.info/xrisk
- https://pauseai.info/psychology-of-x-risk
- https://pauseai.info/ai-takeover
- https://pauseai.info/cybersecurity-risks
- https://pauseai.info/dangerous-capabilities
- https://pauseai.info/sota
- https://pauseai.info/urgency
- https://pauseai.info/proposal
- https://pauseai.info/pdoom
- https://pausecon.org/

### Anthropic Research

- Subliminal Learning: https://alignment.anthropic.com/2025/subliminal-learning/
- Agentic Misalignment: https://www.anthropic.com/research/agentic-misalignment
- RSP v3: https://www.anthropic.com/news/responsible-scaling-policy-v3
- Statement on Department of War: https://www.anthropic.com/news/statement-department-of-war

### Amodei Essay

- The Adolescence of Technology: https://www.darioamodei.com/essay/the-adolescence-of-technology

### p(doom)

- Wikipedia: https://en.wikipedia.org/wiki/P(doom)

### Chatbot Incidents

- Sydney/Bing: https://en.wikipedia.org/wiki/Sydney_(Microsoft)
- Gemini/Gavalas: https://www.theguardian.com/technology/2026/mar/04/gemini-chatbot-google-jonathan-gavalas
- Grok MechaHitler: https://www.rollingstone.com/culture/culture-news/elon-musk-grok-chatbot-antisemitic-posts-1235381165/
- Grok sexualized images: https://www.reuters.com/legal/litigation/elon-musks-grok-faces-global-scrutiny-sexualised-ai-photos-2026-02-17/

### Military AI

- Detachment 201: https://www.army.mil/article/286317/
- Claude in Maduro raid: https://www.axios.com/2026/02/13/anthropic-claude-maduro-raid-pentagon
- Claude in Iran strikes: https://www.theguardian.com/technology/2026/mar/01/claude-anthropic-iran-strikes-us-military

### OpenClaw/Moltbook

- Meta alignment director incident: https://www.businessinsider.com/meta-ai-alignment-director-openclaw-email-deletion-2026-2
- OpenClaw: https://en.wikipedia.org/wiki/OpenClaw
- Moltbook: https://en.wikipedia.org/wiki/Moltbook

### Safety Indices

- FLI AI Safety Index (Winter 2025): https://futureoflife.org/ai-safety-index-winter-2025/
- AI Safety Clock (IMD): https://www.imd.org/centers/digital-ai-transformation-center/aisafetyclock/

### Regulatory / Policy

- UK House of Lords moratorium debate: https://lordslibrary.parliament.uk/superintelligent-ai-should-its-development-be-stopped/
- EU AI Act limitations: https://www.bsr.org/en/blog/the-eu-ai-act-where-do-we-stand-in-2025/
- China AI governance: https://www.fmprc.gov.cn/mfa_eng/xw/zyxw/202507/t20250729_11679232.html
- Anthropic drops safety pledge (TIME): https://time.com/7380854/exclusive-anthropic-drops-flagship-safety-pledge/

### International Treaties (precedents)

- Montreal Protocol: https://www.unep.org/ozonaction/who-we-are/about-montreal-protocol
- Chemical Weapons Convention: https://www.opcw.org/chemical-weapons-convention
- Biological Weapons Convention: https://disarmament.unoda.org/en/our-work/weapons-mass-destruction/biological-weapons/biological-weapons-convention
- UN Declaration on Human Cloning: https://press.un.org/en/2005/ga10333.doc.htm

## Style Guidelines

- **Factual con toneladas de ejemplos** — cada afirmacion respaldada con datos o casos reales
- **Audaz y sin complejos** — no suavizar el mensaje, ser directo sobre riesgos existenciales
- **Lenguaje simple** — audiencia con nivel tecnico basico, evitar jerga
- **No partidismo** — politica de IA si, politica de partidos no
- **Ejemplos internacionales preferidos** — priorizar los casos mas impactantes independientemente del pais. Ejemplos espanoles como complemento cuando refuercen el punto.
- **No infantilizar** — la audiencia tiene 55+ anos y ha pasado un curso de IA. Tratarlos como adultos informados.

## Arco narrativo

**Curiosidad → Asombro → Inquietud → Alarma → Comprension → Determinacion**

"La IA ya no es ciencia ficcion. Ya esta aqui, ya esta causando dano, y va mucho mas rapido de lo que nadie predijo. Pero aun podemos hacer algo — si actuamos ahora."

## Technical Setup

- Presentacion generada con **Slidev** (markdown → web/PDF)
- Un fichero markdown por bloque en `slides/`, orquestado desde `slides.md` con `src:`
- Tema CSS personalizado PauseAI en `style.css` (navy #0f172a + naranja #FF6600)
- `global-bottom.vue` con logo + pauseai.es en todas las slides
- Assets en `public/` (logos, fotos, screenshots, QR)
- Dev server: `tail -f /dev/null | pnpm dev --port 3030`
- IMPORTANTE: Vite/Slidev rompe si `<img src>` apunta a fichero inexistente → siempre crear placeholder en `public/` antes de referenciar

## Apertura — Decision tomada

- Mecanica de DOS VIDEOS: real (robots militares chinos) vs fake (CGI oukanghong/Bilibili)
- Video REAL: https://www.youtube.com/watch?v=RuEEOUjT-N0
- Video FAKE: https://www.bilibili.com/video/BV1QTZCBSEz7/ (oukanghong, 17 feb 2026)
- Lucia Velasco (@\_LuciaVelasco) compartio el fake como real el 19 feb
- Tweet posiblemente borrado — verificar manualmente
- Fact-checks: France 24, BOOM Live, MVS Noticias, SCMP
- Ver `docs/plans/material-grafico.md` para detalles completos

## Pending Items

- [x] Dani sube logos/assets de PauseAI
- [x] Investigacion completa recopilada (ver PROJECT_SNAPSHOT.md)
- [x] Estructura aprobada (8 bloques)
- [x] Guion completo integrado en slide comments (speaker notes en `<!-- -->`)
- [x] Slides Slidev creadas (~56 slides, 8 bloques)
- [x] Tema CSS PauseAI aplicado (Saira Condensed, Montserrat, Roboto Slab, #FF9416)
- [x] QR code generado (public/qr-pauseai.png)
- [x] Apertura reestructurada (mecanica 2 videos + Lucia Velasco)
- [x] Layouts foto placeholder para expertos
- [x] Video fake descargado localmente (public/videos/lucia-velasco-fake.mp4)
- [x] Componentes VideoAutoplay.vue y YouTubeAutoplay.vue (IntersectionObserver)
- [x] Slide Claude Opus 4.6 (reemplazo "Despues de este curso...")
- [x] Branding PauseAI actualizado (#FF9416, fonts, favicon)
- [x] Footer persistente (position: fixed, no fade entre slides)
- [x] METR time horizons slide anadida
- [x] Surfshark deepfakes map anadida
- [x] CFO $25M movido a slide estafas
- [x] v-clicks auditados en bloque 1 (agenda, reveal, etc.)
- [ ] Foto de Dani Lupion para slide intro
- [ ] Imagen ozono NASA para bloque 7
- [ ] Auditar v-clicks en bloques 3-8
- [ ] Verificar datos: Ecuador "15 deepfakes", Brasil "3x mujeres", Argentina "3M views"
