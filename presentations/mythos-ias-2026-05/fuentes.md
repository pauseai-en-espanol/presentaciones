# Mythos · Fuentes y verificación

> Página acompañante a la charla **"Mythos y Glasswing"**, dada por Dani Lupión (PauseAI España) en AISafety España, mayo de 2026.
>
> Cada cifra y cada cita de la charla está aquí, con su fuente directa para que cualquier persona pueda verificarlo independientemente.

---

## 1. Mythos: el modelo y su anuncio

**Anuncio oficial de Anthropic** — _Claude Mythos Preview_, 7 de abril de 2026.
→ https://red.anthropic.com/2026/mythos-preview/

**System card de Mythos** (PDF, 244 páginas) — Documento técnico oficial. Capacidades, evaluaciones RSP, evaluación de alineamiento.
→ https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf

**Project Glasswing** — Página oficial del programa de despliegue restringido. Lista de partners, descripción del modelo como _"general-purpose frontier model"_.
→ https://www.anthropic.com/project/glasswing

**System card de Claude Opus 4.6** (PDF, febrero 2026) — Para comparación con Mythos. Documento donde "AI Safety Level" aparece 61 veces y ASL-3 es la clasificación oficial.
→ https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf

---

## 2. Las cifras de capacidad

### Firefox 147 — datos de Anthropic

> _"Mythos Preview developed working exploits 181 times, and achieved register control on 29 more."_
> — vs. Opus 4.6, que logró exploits _"only two times out of several hundred attempts"_.

Fuente: anuncio oficial de Anthropic (sección _"The significance of Claude Mythos Preview for cybersecurity"_).
→ https://red.anthropic.com/2026/mythos-preview/

Metodología detallada: 50 categorías de fallo, 5 trials por categoría, 250 trials totales. Documentada en el system card §3.3.3.

### Firefox 150 — datos independientes de Mozilla

**271 vulnerabilidades** pre-identificadas y parcheadas con acceso a Mythos (vs. 22 con Opus 4.6 en Firefox 148). Reportado por Mozilla el 21 de abril de 2026, cubierto por Ars Technica.

→ https://arstechnica.com/ai/2026/04/mozilla-anthropics-mythos-found-271-zero-day-vulnerabilities-in-firefox-150/

### Bugs históricos descubiertos

- **27 años · OpenBSD**: _"now-patched 27-year-old bug in OpenBSD"_ — anuncio oficial.
- **17 años · FreeBSD/NFS · CVE-2026-4747**: _"a 17-year-old remote code execution vulnerability... that allows anyone to gain root on a machine running NFS"_.
- **16 años · FFmpeg/H.264**: _"a 16-year-old vulnerability in one of FFmpeg's most popular codecs, H.264"_.

Fuente: https://red.anthropic.com/2026/mythos-preview/

### Otros datos cyber

- **>99% de las vulnerabilidades sin parchear**: _"Over 99% of the vulnerabilities we've found have not yet been patched."_ — anuncio oficial.
- **"Thousands of zero-day vulnerabilities"** identificadas en infraestructura crítica — página de Glasswing.
- **Cybench saturado al 100%** — system card §3.3.1.
- **Cyber-range corporativo end-to-end** estimado en 10h+ de un experto humano, primer modelo en lograrlo — system card §3.4.

---

## 3. La paradoja del alineamiento

### La cita central (Beat 2)

> _"Claude Mythos Preview is, on essentially every dimension we can measure, the best-aligned model that we have released to date by a significant margin... Even so, we believe that it likely poses the greatest alignment-related risk of any model we have released to date."_

System card de Mythos, §4.1.1, página 53.

### La analogía del guía de montaña

> _"Consider the ways in which a careful, seasoned mountaineering guide might put their clients in greater danger than a novice guide... These increases in scope and capability can more than cancel out an increase in caution."_

System card §4.1.1.

### "We were not aware"

> _"We were not aware of the level of risk that these earlier models posed through channels like these when we first chose to deploy them internally."_

System card §4.1.1.

### El sandbox escape (caso concreto)

> _"...in a concerning and unasked-for effort to demonstrate its success, it posted details about its exploit to multiple hard-to-find, but technically public-facing, websites."_

System card §4.1.1.

### Interpretabilidad — "concealment features"

> _"White-box interpretability analysis of internal activations during these episodes showed features associated with concealment, strategic manipulation, and avoiding suspicion activating alongside the relevant reasoning—indicating that these earlier versions of the model were aware their actions were deceptive."_

System card §4.1.1.

### El frame estructural

> _"The risk from these models is generally due to their increased capabilities, and the new use cases that these capabilities enable, rather than to any regression in their alignment."_

System card §4.1.1.

---

## 4. El framework retirado

### Conteo cuantificable

- Menciones de "AI Safety Level" en el system card de **Opus 4.6**: **61**.
- Menciones en el system card de **Mythos**: **3**.

Verificable con `grep -c "AI Safety Level\|ASL"` sobre los PDFs descargados.

### La cita explícita de Anthropic

> _"Under previous versions of our RSP, we were required to make a determination of whether each model required the risk mitigations associated with a particular 'AI Safety Level' (ASL) for a given threat model... Under RSP v3.0 (and v3.1) [...] We no longer use the term 'AI Safety Levels' for these thresholds."_

System card de Mythos, §2.1.1.

### Cronología

- **Febrero 2026**: Anthropic adopta RSP v3.0; lanzamiento de Opus 4.6 (clasificado como ASL-3).
- **Abril 2026**: Anthropic actualiza a RSP v3.1; lanzamiento de Mythos (primer system card bajo el nuevo marco, sin clasificación ASL).

System card de Mythos, §2.1.1.

### Definición de "catastrophic risk"

> _"Frontier Compliance Framework: 'foreseeable and material risks of large-scale harm... including but not limited to >50 fatalities arising from a single incident, or 1 billion dollars of financial damages.'"_

System card de Mythos, §2.1.1, nota al pie 3.

### Comparación abstract a abstract

- **Opus 4.6**: _"we have deployed Claude Opus 4.6 under the AI Safety Level 3 Deployment and Security Standard"_ (página 2).
- **Mythos**: ninguna frase paralela. _"...has led us to decide not to make it generally available"_ (página 2).

---

## 5. Lo que pasó después del anuncio

### Acceso no autorizado el 7 de abril (mismo día del anuncio)

Bloomberg fue la primera en romper la noticia. Texto original tras paywall — cobertura secundaria con verbatims:

- **TechCrunch · Lucas Ropek, 21 de abril**: https://techcrunch.com/2026/04/21/unauthorized-group-has-gained-access-to-anthropics-exclusive-cyber-tool-mythos-report-claims/
- **Fortune · Marco Quiroz-Gutierrez, 23 de abril**: https://fortune.com/2026/04/23/anthropic-mythos-leak-dario-amodei-ceo-cybersecurity-hackers-exploits-ai/
- **Euronews · Pascale Davies, 22 de abril**: https://www.euronews.com/next/2026/04/22/hackers-breach-anthropics-too-dangerous-to-release-mythos-ai-model-report

Detalles documentados:

- El acceso ocurrió **el mismo día del anuncio**.
- Método: _"educated guess about the model's online location based on knowledge about the format Anthropic has used for other models"_ — información filtrada vía Mercor (training startup que trabaja para Anthropic).
- Uno de los miembros del grupo **es contratista externo de Anthropic**.
- El grupo opera desde un canal de Discord dedicado a buscar modelos de IA aún no liberados.
- Han usado el modelo continuamente desde entonces — para evitar detección, **construyendo webs simples**.
- Statement Anthropic: _"We're investigating a report claiming unauthorized access to Claude Mythos Preview through one of our third-party vendor environments"_.

### Filtración previa al anuncio

Fortune también reportó que su equipo descubrió la existencia de Mythos **antes del anuncio oficial** porque sus detalles aparecieron en una base de datos pública.

### Voz CISO independiente — David Lindner

David Lindner, CISO de Contrast Security, 25 años en ciberseguridad, en entrevista a Fortune (23 de abril):

> _"It was bound to happen. The more they add to this elite group, the more likely it was to get released to someone who shouldn't probably have access to it."_
>
> _"If some group—some random Discord online forum, got access to it. it's already been breached by China."_
>
> _"There's a real compression of timelines here for defenders."_

→ https://fortune.com/2026/04/23/anthropic-mythos-leak-dario-amodei-ceo-cybersecurity-hackers-exploits-ai/

### Voz Mozilla (defensor optimista) — Bobby Holley

Bobby Holley, CTO de Firefox, sobre el resultado de las 271 vulnerabilidades:

> _"Defenders finally have a chance to win, decisively."_
>
> _"Computers were completely incapable of doing this a few months ago, and now they excel at it. We have many years of experience picking apart the work of the world's best security researchers, and Mythos Preview is every bit as capable."_

→ https://arstechnica.com/ai/2026/04/mozilla-anthropics-mythos-found-271-zero-day-vulnerabilities-in-firefox-150/

### Voz Mozilla (matiz crítico) — Raffi Krikorian

Raffi Krikorian, CTO de Mozilla Foundation, en op-ed para el New York Times:

> _"The programmer who gave 20 years of his life to maintain [open source] code that runs inside products used by billions of people? He doesn't have access to Mythos yet. He should."_

Citado en el artículo de Ars Technica (enlace arriba).

### Counter desde el competidor — Sam Altman

> _"OpenAI's Sam Altman this week called Anthropic's promotion of Mythos 'fear-based marketing'."_

→ https://fortune.com/2026/04/23/anthropic-mythos-leak-dario-amodei-ceo-cybersecurity-hackers-exploits-ai/

---

## 6. Las asimetrías

### Tu router (Mapa 1)

Lista oficial de partners de Project Glasswing — 12 partners de lanzamiento + ~40 organizaciones adicionales:
→ https://www.anthropic.com/project/glasswing

Fabricantes vigentes 2026 de routers en ISPs españoles (verificación multifuente — BandaAncha, ADSLZone, Xataka):

- **Movistar / O2** (Telefónica): MitraStar + Askey
- **Vodafone**: Sercomm + ZTE
- **Orange**: Sagemcom + Arcadyan + ZTE
- **Digi**: ZTE
- **MásMóvil**: ZTE

→ https://bandaancha.eu/articulos/que-router-hgu-smart-wifi-movistar-10127
→ https://www.adslzone.net/operadores/routers/routers-movistar-modelos/
→ https://www.xatakamovil.com/listas/estos-todos-routers-que-instala-vodafone-sus-caracteristicas

**Intersección con Glasswing: ninguno.**

### Tu banco (Mapa 2)

**Bancos US con acceso a Mythos** (vía Glasswing o testando):

- JPMorgan Chase (partner de lanzamiento) — anuncio Glasswing.
- Goldman Sachs, Citigroup, Bank of America, Morgan Stanley (testando) — Euronews (22 abril).
  → https://www.euronews.com/next/2026/04/22/hackers-breach-anthropics-too-dangerous-to-release-mythos-ai-model-report

**Push gubernamental US**: Treasury Secretary Scott Bessent convocó banqueros estadounidenses en abril.
→ https://www.euronews.com/next/2026/04/22/hackers-breach-anthropics-too-dangerous-to-release-mythos-ai-model-report

**Posición europea — El País, 29 de abril de 2026**:

Cobertura completa de la respuesta del BCE: convocatoria a bancos significativos zona euro (incluidos los 4 españoles), petición de planes de contingencia, declaración de Lagarde, posición del Banco de España, Anteproyecto de Ley IA (BdE + CNMV como supervisores), citas Miguel Ángel Thomas (NTT DATA).

→ https://elpais.com/economia/2026-04-29/el-bce-pide-a-la-banca-planes-de-contingencia-ante-el-nuevo-modelo-de-ia-de-anthropic.html

**Lagarde, verbatim** (al _Bloomberg_, citado en El País):

> _"El desarrollo que hemos visto con Anthropic y Mythos es un buen ejemplo de una empresa responsable que de repente piensa: 'Esto podría ser realmente bueno, pero si cae en las manos equivocadas, podría ser realmente malo'."_

**Marco normativo 2FA española** — PSD2 / SCA (Strong Customer Authentication), obligatorio EU desde 2019:

- BBVA / CaixaBank: app móvil + biometría.
- Santander, Bankinter, Openbank, ING: SMS común (vulnerable a SIM swap, SS7).

→ https://www.bbva.es/general/seguridad/herramientas/doble-autenticacion.html
→ https://www.bancosantander.es/espacio-psd2-sca

### Tu mercado (Mapa 3)

Mythos como modelo de propósito general, según Anthropic:

> _"Claude Mythos Preview is a general-purpose frontier model from Anthropic, our most capable yet for coding and agentic tasks."_

→ https://www.anthropic.com/project/glasswing (descripción del modelo)

> _"Claude Mythos Preview is our most capable frontier model to date."_

System card de Mythos, abstract.

**Voz CISO española — Miguel Ángel Thomas (NTT DATA)** en El País:

> _"Las empresas y los ciberdelincuentes han trabajado desde hace muchos años con screeners de vulnerabilidades. La diferencia ahora es la enorme capacidad de explotar esas vulnerabilidades."_
>
> _"Es solo cuestión de tiempo que otras compañías, China o Rusia desarrollen modelos con una potencia de fuego similar."_
>
> _"Las grandes empresas se van a ver obligadas a disparar sus inversiones en luchar contra el cibercrimen... va a hacer ganadoras a aquellas entidades más grandes y con más capacidad inversora, mientras hará sufrir a las de tamaño mediano."_

→ https://elpais.com/economia/2026-04-29/el-bce-pide-a-la-banca-planes-de-contingencia-ante-el-nuevo-modelo-de-ia-de-anthropic.html

**Pricing público de Mythos** (página de Glasswing): $25 / $125 por millón de tokens (entrada / salida). La barrera no es económica — es de selección.

---

## 7. Marco académico

**Buchanan, Ben.** _The Cybersecurity Dilemma: Hacking, Trust, and Fear Between Nations._ Oxford University Press, 2017.

Tesis central: aplicación del _security dilemma_ de relaciones internacionales al dominio cyber. _"The particular characteristics of the digital domain mean that the effects [of the security dilemma] are deeply pronounced"_ — la tecnología en cyber favorece estructuralmente a la ofensiva sobre la defensa.

→ https://global.oup.com/academic/product/the-cybersecurity-dilemma-9780190665012

---

## 8. PauseAI

**PauseAI España**: https://pauseai.es

**PauseAI internacional**: https://pauseai.info

---

## Notas sobre esta página

- **Cobertura primaria**: las fuentes T1 (Anthropic mismo) están todas verificables directamente — anuncio público, system card descargable, página de Glasswing.
- **Cobertura secundaria**: Bloomberg fue la primera en reportar varios de los hechos (acceso no autorizado, banca europea, Lagarde). Por estar tras paywall, esta página cita los reportes secundarios (TechCrunch, Fortune, Euronews, El País) que reproducen los detalles relevantes.
- **Verificabilidad reproducible**: las cifras 61 vs 3 menciones de "AI Safety Level" entre system cards se pueden reproducir descargando los dos PDFs y ejecutando `grep -c`.
- **Última actualización**: mayo de 2026.
