# Sources — Mythos y Glasswing

## Schema

Each source has: ID, URL/path, author/org, date, tier, one-line summary. Tiers:

- **T1** — Primary (Anthropic posts about Mythos, official papers, primary research)
- **T2** — Primary journalism (NYT/WaPo/Reuters/FT/AP, reputable trade press)
- **T3** — Secondary journalism, reputable analysis (think tanks, established blogs)
- **T4** — Opinion / commentary (substacks, Twitter threads from credible voices)
- **T5** — Unverified / to-verify

Cite sources by ID in `claims.md` and `quotes.md`.

---

## T1 — Primary

### S1 — Anthropic, Claude Mythos Preview announcement

- **URL**: https://red.anthropic.com/2026/mythos-preview/
- **Author**: Anthropic (red.anthropic.com)
- **Date**: 2026-04-07
- **Tier**: T1
- **Summary**: Anuncio oficial de Claude Mythos Preview. Capacidades cyber, decisión de no liberar generalmente, Project Glasswing, métricas vs Opus 4.6, uso de SHA-3 commitments para responsible disclosure.
- **Status**: ✅ Ingestado 2026-04-28. Verbatims clave en quotes.md Q1-Q8.

### S2 — Anthropic, Claude Mythos Preview System Card (PDF)

- **URL**: https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf
- **Local**: `research/raw/mythos-system-card.pdf` + `mythos-system-card.txt` (extraído con pdftotext)
- **Author**: Anthropic
- **Date**: 2026-04-07 (en abstract)
- **Pages**: 244
- **Tier**: T1
- **Summary**: System card oficial de Mythos Preview. Estructura: 1 Introduction · 2 RSP evaluations · 3 Cyber · 4 Alignment assessment · 4.5 White-box analyses · resto (welfare, user experience, etc.). El framework es **RSP v3.0/v3.1**, no ASL. ASL solo aparece 3 veces (vs 61 en S4). Sección 3 (cyber) corta (~5 páginas). Sección 4 (alignment) sprawling.
- **Status**: ✅ Parcialmente ingestado 2026-04-28. Leído: §1.1, §2.1.1, §2.1.3, §3 Cyber completo, §4.1.1. Pendiente: §4.5.4 (covering up wrongdoing), §4.4 (evasion of safeguards), §2.3 (Autonomy), §2.2 (CB).
- **Nota**: Hash anterior (08ab915...) era incorrecto. Corregido por Dani 2026-04-28.

### S3 — Anthropic, Project Glasswing

- **URL**: https://www.anthropic.com/project/glasswing
- **Alt URL**: https://www.anthropic.com/glasswing (probable redirect/legacy)
- **Author**: Anthropic
- **Date**: 2026-04
- **Tier**: T1
- **Summary**: Página oficial. **12 launch partners** (AWS, Apple, Anthropic, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, Linux Foundation, Microsoft, NVIDIA, Palo Alto Networks) + 40 organizaciones adicionales no listadas. Pricing $25/$125 per million in/out tokens. **Cifra macro**: "thousands of zero-day vulnerabilities" identified. **Notablemente ausente**: governance/oversight detail, disclosure pipeline, comparación con staged-release pasado (e.g., GPT-2), ningún partner gubernamental/académico/sociedad civil listado.
- **Status**: ✅ Ingestado 2026-04-28. Verbatims en quotes.md Q27-Q29.

### S4 — Anthropic, Claude Opus 4.6 System Card (PDF) — para comparación

- **URL**: https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf
- **Local**: `research/raw/opus-4-6-system-card.pdf` + `opus-4-6-system-card.txt`
- **Author**: Anthropic
- **Date**: Febrero 2026 (changelog: 6 feb 2026)
- **Pages**: 213
- **Tier**: T1
- **Summary**: System card del predecesor. **Estructura clave**: §1.2.3 "AI Safety Level determination process" (subsección dedicada). Abstract: "deployed Claude Opus 4.6 under the AI Safety Level 3 Deployment and Security Standard". ASL aparece 61 veces (vs 3 en Mythos). **Hipótesis Dani CONFIRMADA**: ASL framework está prominente en Opus 4.6, retirado en Mythos.
- **Status**: ✅ Parcialmente ingestado 2026-04-28 (TOC + abstract + grep ASL). Lectura completa pendiente — pero la hipótesis está validada con datos comparativos.

---

## T2 — Primary journalism

### S5 — Ars Technica, "Mozilla: Anthropic's Mythos found 271 security vulnerabilities in Firefox 150"

- **URL**: https://arstechnica.com/ai/2026/04/mozilla-anthropics-mythos-found-271-zero-day-vulnerabilities-in-firefox-150/
- **Local**: `research/raw/arstechnica-mythos-firefox.html` + `.txt`
- **Author**: Kyle Orland (Senior Gaming Editor, Ars Technica)
- **Date**: 2026-04-21
- **Tier**: T2
- **Summary**: Mozilla blog post + cobertura. Firefox CTO Bobby Holley: 271 vulns pre-identificadas vía Mythos antes de release de Firefox 150 (vs 22 con Opus 4.6 en Firefox 148). Holley enmarca como victoria defensiva ("rounded the curve"). Mozilla CTO Raffi Krikorian (NYT op-ed) defiende ampliar acceso a maintainers OSS. **Counter-narrative al frame de asimetría — engage con honestidad.**
- **Status**: ✅ Ingestado 2026-04-28. Verbatims Q30-Q33.

### S6 — TechCrunch, "Unauthorized group has gained access to Anthropic's exclusive cyber tool Mythos, report claims"

- **URL**: https://techcrunch.com/2026/04/21/unauthorized-group-has-gained-access-to-anthropics-exclusive-cyber-tool-mythos-report-claims/
- **Local**: `research/raw/techcrunch-mythos-unauthorized.html` + `.txt`
- **Author**: Lucas Ropek
- **Date**: 2026-04-21 16:26 PDT
- **Tier**: T2
- **Summary**: Cobertura del scoop original de Bloomberg (al que no tengo acceso directo, paywall + bot blocking). Detalles: grupo en Discord channel, acceso vía contratista externo de Anthropic, "educated guess about model's online location based on knowledge about the format Anthropic has used for other models", screenshots y demo en vivo provistos a Bloomberg, "interested in playing around with new models, not wreaking havoc with them". Statement Anthropic verbatim.
- **Status**: ✅ Ingestado 2026-04-28. Verbatims Q34-Q36.

### S7 — Fortune, "A group of users leaked Anthropic's AI model Mythos by reportedly guessing where it was located"

- **URL**: https://fortune.com/2026/04/23/anthropic-mythos-leak-dario-amodei-ceo-cybersecurity-hackers-exploits-ai/
- **Local**: `research/raw/fortune-mythos-leak.html` + `.txt`
- **Author**: Marco Quiroz-Gutierrez
- **Date**: 2026-04-23 11:54 ET
- **Tier**: T2
- **Summary**: Detalle adicional sobre la cadena de filtración: el grupo "guessed where the model was located based on previously leaked knowledge by another group about Anthropic's past practices, that hackers obtained from AI training startup Mercor". **Segundo incidente de seguridad previo**: Fortune fue la primera en reportar la existencia de Mythos vía "security lapse that exposed details... in a publicly accessible database". David Lindner (CISO Contrast Security, 25y) — "It was bound to happen", "already been breached by China", "compression of timelines for defenders". **Sam Altman** llama a la comunicación de Mythos "fear-based marketing".
- **Status**: ✅ Ingestado 2026-04-28. Verbatims Q37-Q42.

### S8 — Euronews, "Hackers breach Anthropic's 'too dangerous to release' Mythos AI model, report"

- **URL**: https://www.euronews.com/next/2026/04/22/hackers-breach-anthropics-too-dangerous-to-release-mythos-ai-model-report
- **Local**: `research/raw/euronews-mythos.html` + `.txt`
- **Author**: Pascale Davies
- **Date**: 2026-04-22 11:20 GMT+2 (updated 2026-04-24)
- **Tier**: T2
- **Summary**: Añade lista de bancos testando: **Goldman Sachs, Citigroup, Bank of America, Morgan Stanley** (más allá de JPM Chase que es Glasswing partner). **Treasury Secretary Scott Bessent convocó reunión de banqueros US en abril** para discutir Mythos y "encouraged the banking executive to use Antropic's Mythos model to detect vulnerabilities" (sic). Status europeo del modelo NO mencionado.
- **Status**: ✅ Ingestado 2026-04-28. Verbatims Q43-Q44.

### S9 — Bloomberg, "Anthropic's Mythos Model Is Being Accessed by Unauthorized Users" (referenced, no direct access)

- **URL**: https://www.bloomberg.com/news/articles/2026-04-21/anthropic-s-mythos-model-is-being-accessed-by-unauthorized-users
- **Author**: TBD (paywall + bot block — no direct fetch)
- **Date**: 2026-04-21
- **Tier**: T2 (primary scoop)
- **Summary**: La fuente original del scoop. NO accedido directamente — todos los detalles vienen citados via S6/S7/S8. Si se necesita verbatim directo, conseguir vía Dani.
- **Status**: ⚠️ Indirecto — citas vienen vía S6/S7/S8 que citan a Bloomberg.

### S11 — Buchanan, Ben. "The Cybersecurity Dilemma: Hacking, Trust, and Fear Between Nations" (book)

- **URL**: https://global.oup.com/academic/product/the-cybersecurity-dilemma-9780190665012
- **Publisher**: Oxford University Press / Hurst Publishers
- **Year**: 2017
- **Author**: Ben Buchanan (Belfer Center, Harvard Kennedy School at time of publication)
- **Tier**: T3 (académico, cita canónica)
- **Summary**: Aplicación del "security dilemma" de relaciones internacionales al dominio cyber. Tesis central: las características del dominio digital hacen que la tecnología "favorezca a la ofensiva sobre la defensa", y los mismos exploits que sirven para espionaje sirven para ataque. Cita canónica para C26.
- **Status**: ⚠️ No leído directamente. Información del summary de OUP/reviews. _Para slide / Q&A: usar como cita pero marcar como "Buchanan, 2017" — no fingir lectura completa._

### S12 — Verificación fabricantes routers ISP España (multi-fuente, BandaAncha + ADSLZone + Xataka, abril 2026)

- **URLs**: bandaancha.eu (varios artículos), adslzone.net, xatakamovil.com
- **Tier**: T3 (prensa especializada española de telecom)
- **Summary**: Inventario verificado fabricantes de routers vigentes 2026 para los principales ISPs españoles. **Movistar/O2** (Telefónica): MitraStar + Askey (Asus brand). **Vodafone**: Sercomm (RHG3006, FG824CD, Vox 3.0) + ZTE en transición (F6600P). **Orange**: Sagemcom + Arcadyan + ZTE (Livebox 6/7). **Digi**: ZTE (H3600P, F8748Q). **MásMóvil**: ZTE.
- **Status**: ✅ Verificado 2026-04-30. Ningún fabricante en Glasswing partner list. Implicaciones detalladas en C57.

### S13 — Verificación 2FA bancaria España bajo PSD2/SCA (multi-fuente, abril 2026)

- **URLs**: bbva.es (sección PSD2), bancosantander.es, altiria.com, info-veritas.com
- **Tier**: T3 (documentación oficial bancos + análisis especializados)
- **Summary**: Bajo PSD2/SCA (mandatorio EU desde 2019), 2FA en banca española combina: (1) algo que sabes (PIN/contraseña), (2) algo que tienes (móvil/SMS), (3) algo que eres (biometría — huella, facial, iris). BBVA, CaixaBank: app + biometría como factor principal. Santander, Bankinter, Openbank, ING: PIN + SMS común. **SMS sigue ampliamente usado** pese a vulnerabilidades conocidas (SIM swap, SS7).
- **Status**: ✅ Verificado 2026-04-30. Implicaciones detalladas en C58.

### S10 — El País, "El BCE pide a la banca planes de contingencia ante el nuevo modelo de IA de Anthropic"

- **URL**: https://elpais.com/economia/2026-04-29/el-bce-pide-a-la-banca-planes-de-contingencia-ante-el-nuevo-modelo-de-ia-de-anthropic.html
- **Author**: Álvaro Bayón
- **Date**: 2026-04-29 05:30 CEST
- **Tier**: T2 (primary journalism, prensa española de referencia, primera cobertura sustancial en español que vemos)
- **Summary**: **Coverage española directa**. BCE convocó hace ~2 semanas a responsables de riesgos de bancos significativos zona euro, entre ellos los **4 españoles (Santander, BBVA, CaixaBank, Sabadell)**, pidiendo planes de contingencia y detección de vulnerabilidades. Bancos europeos NO tienen aún acceso a Mythos pero Lagarde lo ha reclamado; Anthropic anuncia apertura "inminente" a empresas británicas. Banco de España ya pidió info a entidades españolas sobre planes de adopción. Anteproyecto de Ley IA designa a BdE+CNMV como supervisores. Trump conflict mencionado: cerró contratos federales US a Anthropic. Quotes: Lagarde a Bloomberg, Miguel Ángel Thomas (NTT DATA, ciberseguridad).
- **Status**: ✅ Ingestado 2026-04-30 (vía contenido pegado por Dani). Verbatims Q45-Q52.

---

## T3 — Secondary / analysis

> Pendiente. AI safety blogs (LessWrong, AI Alignment Forum), policy think tanks (CSET, GovAI, RAND), trade press de ciberseguridad.

---

## T4 — Opinion / commentary

> Pendiente. Threads de figuras conocidas en AI safety / cyber.

---

## T5 — Unverified

> Pendiente.

---

## Source-finding TODOs

- [ ] Buscar coverage T2 sobre Mythos (NYT, Reuters, FT, Bloomberg).
- [ ] Buscar respuesta de la comunidad AI safety (LessWrong, AAF).
- [ ] Buscar análisis de policy/governance (CSET, GovAI, RAND).
- [ ] Buscar contexto histórico: ¿hubo precedentes de modelos no liberados por capacidad ofensiva? (GPT-2 staged release de OpenAI 2019.)
- [ ] Buscar referencias a la asimetría atacante/defensor en cyber (Bruce Schneier, Dan Geer).
- [ ] Buscar críticas / counterarguments al modelo de Glasswing.
