# Beat Sheet — Mythos y Glasswing

> **Versión activa**, 2026-04-28. Reescrito desde cero tras research phase + audience/goal pass + 3 kill chains.
>
> **Duración total**: 60-75 min. Asumo 50-55 min charla + 15-20 min Q&A. Holgura para entrar/salir de cada beat sin sentir prisa.
>
> **Audiencia**: AISafety Madrid, hispanohablante, **predominantemente sociedad civil**, scattered técnico ML/SW, poco policy. Registro técnico-accesible. (vid. `audience.md`)
>
> **Thesis** (vid. `thesis.md`): asimetría ofensiva/defensiva como propiedad estructural; Glasswing necesario y bien hecho, insuficiente. **Sin call-to-pause explícito.** El frame analítico, no activista.
>
> **Disciplina pedagógica core**: _concrete before abstract, familiar before foreign, emotion before data, question before answer_. Cada beat respeta este orden.
>
> **Disciplina temporal**: **fechas absolutas siempre, nunca relativas** ("7 de abril de 2026" no "hace tres semanas"). Las slides tienen vida — "hace 48 horas" se rompe en cuanto pasa una hora. Aplicar esta disciplina cuando se genere `slides.md`.

---

## Arco completo (vista de pájaro)

| #   | Beat                                         | min   | Estado emocional        | Función estructural                           |
| --- | -------------------------------------------- | ----- | ----------------------- | --------------------------------------------- |
| 0   | Apertura — Lagarde en cinco fechas           | 3.5   | Velocidad → bomba final | Apertura cinematográfica + planta la pregunta |
| 1   | Qué es Mythos (con FreeBSD-17y como anclaje) | 8     | Orientación             | El dato sin frame                             |
| 2   | La paradoja del alineamiento                 | 10    | Asombro / inquietud     | Plantar asimetría sin nombrarla               |
| 3   | El framework que cambió                      | 7     | Curiosidad estructural  | Confirmar que es estructural                  |
| 4   | Lo que pasó después del anuncio              | 7     | Tensión                 | El despliegue restringido falló               |
| 5   | Las asimetrías que esto produce              | 12    | Implicación personal    | Aterrizar (router, banco, mercado)            |
| C   | Cierre — una frase                           | 2     | Claridad                | Una idea que se llevan                        |
| Q   | Q&A                                          | 15-20 | Conversación            |                                               |

**Total charla**: ~49.5 min. **Total con Q&A**: 64.5-69.5 min. ✅ Encaja en rango 60-75 con holgura.

**Cambio respecto a v1 (2026-04-30)**: apertura sustituida por la "Combinada" — Timeline cadenciado que aterriza en Lagarde + pregunta. Beat 0 absorbe el ritmo, Beat 1 absorbe el anclaje técnico (bug 17y), Beat 4 se aligera (la sala ya tiene el timeline de la apertura).

---

## Beat 0 — Apertura: Lagarde en cinco fechas (3.5 min)

**Estado emocional objetivo**: cadencia que acumula velocidad → bomba al final con Lagarde → pregunta-trampa que orquesta el resto de la charla. La sala debe sentir tres cosas en este orden: _está pasando ahora_, _está pasando rápido_, _está pasando aquí_.

**Estructura cinematográfica**: 6 slides, voz cadenciada, mínimo de texto en pantalla. La voz hace el trabajo; las slides son metrónomo.

### Slide 1 — Tipografía masiva, fondo oscuro

```
7 DE ABRIL DE 2026
```

**Voz**:

> "El 7 de abril de 2026, una empresa anunció una herramienta."

[Beat de 1 segundo]

### Slide 2

```
7 DE ABRIL DE 2026
— el mismo día —
```

**Voz**:

> "El mismo día, un grupo no autorizado obtuvo acceso a ella."

[Beat de 1 segundo]

### Slide 3

```
21 DE ABRIL DE 2026
```

**Voz**:

> "Catorce días después, esa misma herramienta había pre-identificado 271 fallos de seguridad en una versión de Firefox que aún no se había publicado."

[Beat de 1 segundo]

### Slide 4

```
MEDIADOS DE ABRIL DE 2026
```

**Voz**:

> "Por las mismas fechas, el Banco Central Europeo convocó a los responsables de riesgos de los bancos significativos de la zona euro — incluyendo los cuatro españoles."

[Beat de 1 segundo]

### Slide 5 — La bomba

```
29 DE ABRIL DE 2026

[FOTO LAGARDE]

"...un buen ejemplo de una empresa responsable
que de repente piensa: 'Esto podría ser realmente bueno,
pero si cae en las manos equivocadas,
podría ser realmente malo'."

— Christine Lagarde, Presidenta del BCE
```

**Voz**:

> "Y el 29 de abril de 2026, la presidenta del Banco Central Europeo describió a esa empresa como — leo verbatim — _'una empresa responsable'_."

[**PAUSA LARGA — 3 a 4 segundos. Aguantar.**]

### Slide 6 — La pregunta

```
¿Qué significa exactamente "empresa responsable"
cuando la herramienta que has decidido no liberar
está, ya, en manos no autorizadas?
```

**Voz**:

> "Hoy os voy a dar los datos que la presidenta del BCE tenía sobre la mesa cuando dijo eso. Y os voy a invitar a quedaros con esa pregunta. Empecemos por entender qué es Mythos."

→ Transición directa a Beat 1.

**Idea clave**: lo que va a oír la sala no es "más capaz". Es cualitativamente nuevo, está pasando rápido, está pasando aquí, y la respuesta institucional europea ya ha aceptado el frame de Anthropic — antes de tener todos los datos sobre la mesa.

**Evidencia anclada**:

- C32 (acceso día 1) · Q35 (verbatim)
- C29 (Mozilla 271) · Q30
- C48 (BCE convoca) · Q47, Q48
- C50 (Lagarde quote) · Q50

**Slide hints**:

- Slides 1-4: tipografía masiva (60-80pt). Solo fecha. Fondo oscuro. **Sin distracciones, sin logos, sin imágenes.** El minimalismo es el efecto.
- Slide 5: Lagarde foto en alto contraste (foto pública conocida — Reuters/AP/Getty). Cita debajo, tipografía media, **resaltar "empresa responsable"** en color destacado.
- Slide 6: solo texto centrado, fondo oscuro. La pregunta es el slide. Sin nombre PauseAI todavía.

**Riesgos**:

- **Cadencia**: ensayar el ritmo. Demasiado rápido y la sala se pierde; demasiado lento y se desinfla. Cronometrar 3.5 min máximo.
- **Pausa post-Lagarde**: 3-4 segundos completos. Va a ser incómodo. Aguantar — la incomodidad hace el trabajo.
- **No nombrar Anthropic / Mythos / PauseAI hasta el slide 6 / transición a Beat 1.** La sala tiene que querer saber. Si dices "Anthropic" en slide 1 pierdes la tensión.
- **Voz**: leer "verbatim" la cita Lagarde — no parafrasear. La fuerza está en la palabra exacta "responsable".

**Land**:

> "Empecemos por entender qué es Mythos."

---

## Beat 1 — Qué es Mythos (8 min)

**Estado emocional objetivo**: orientación. Después de la velocidad de la apertura, la sala necesita masa fáctica. Concreto antes que agregado.

**Apertura sugerida**:

> "Mythos es un modelo de inteligencia artificial desarrollado por Anthropic — los mismos que hacen Claude. Lo anunciaron el 7 de abril de 2026 y lo describen como su modelo más capaz hasta la fecha. Os voy a contar qué significa eso con un ejemplo concreto."

**Idea clave**: Mythos es el modelo más capaz de Anthropic hasta la fecha (no una variante cyber especializada). Lo que hace: descubre y explota zero-days autonomamente. Anthropic decidió no liberarlo generalmente.

**Estructura interna del beat**:

1. **Presentación** (~30 s): anuncio + framing de Anthropic ("most capable to date").

2. **El bug de 17 años — anclaje técnico concreto** (~2 min):

   > "Anthropic dice que su modelo encontró y explotó autonomamente una vulnerabilidad de 17 años en FreeBSD. Está en NFS — el servicio que comparte ficheros por red. La vulnerabilidad permite tomar control completo del servidor — root, sin autenticación — a cualquier atacante con acceso de red al servicio. Bajo código que millones de servidores ejecutan desde 2009. CVE-2026-4747. El descubridor no fue una persona."

   **Precisión técnica importante**: NFS no suele estar directamente expuesto a internet (vive en LAN o detrás de firewall). El bug es RCE-no-auth para cualquiera con _acceso de red al servicio_. Si el servicio está expuesto a internet, eso es cualquiera; si está en LAN, es cualquiera dentro de la LAN — incluido el atacante que ya esté ahí por otra vía (vid. Kill Chain #1 de Beat 5a).

   Mostrar: edad del bug, severidad (RCE no-auth), CVE público (verificable). Land del sub-beat: "Esto es un ejemplo concreto. Veamos los números agregados."

3. **El dato cyber agregado** (~3 min):
   - **181 exploits funcionales** en Firefox 147 vs 2 con Opus 4.6 — la cifra ancla de Anthropic.
   - **Mozilla independiente: 271 vulnerabilidades** en Firefox 150 vs 22 con Opus 4.6 en Firefox 148. _Segunda fuente confirma magnitud._
   - _"Thousands of zero-day vulnerabilities"_ en infraestructura crítica (Glasswing page).
   - Cybench: 100% pass@1. Saturó el benchmark.
   - Cyber-range corporativo end-to-end autonomamente, 10h+ de experto humano. Primer modelo en lograrlo.

4. **La respuesta de Anthropic** (~2 min):
   - _"We do not plan to make Mythos Preview generally available."_ (Q7)
   - Project Glasswing: 12 partners + 40 organizaciones adicionales.
   - SHA-3 commitments para responsible disclosure sin revelar detalles.

5. **Land** (~30 s):
   > "Hasta aquí es la historia que Anthropic quiere contar. Y está bien que la cuenten así. Pero la historia tiene tres capas más."

**Evidencia anclada**:

- C1 (anuncio + fecha) · **C4c (FreeBSD-17y, CVE-2026-4747)** · C3 (181×) · C29 (Mozilla 271) · C7 (thousands) · C8 (Cybench) · C9 (cyber-range)
- C2, C22, C6 (Glasswing structure)
- **Q4, Q5 (FreeBSD verbatim)** · Q1 (181×) · Q30 (Mozilla 271) · Q7 (no-release) · Q9 (step-change) · Q11 (Cybench 100%) · Q12 (saturating evals) · Q13 (cyber-range) · Q29 (thousands) · Q29c (most capable to date)

**Slide hints**:

- Slide pivot al inicio: conecta con Slide 6 del Beat 0 ("Empezamos por entender qué es") → ahora título del Beat 1.
- **Slide CVE-2026-4747**: identifier grande, "17 años", descripción 1-línea sobria, técnica.
- Slide cifra Firefox 147: 181 vs 2. Visualización numérica clara.
- Slide cifra Mozilla 271: 271 vs 22. _Segunda fuente confirmando._
- Slide Glasswing: lista de 12 partners. **Sin comentar todavía** (eso es Beat 5).
- Slide release decision: Q7 verbatim.

**Riesgos**:

- **No introducir frame de asimetría aquí.** Si lo introduces antes de Beat 2, pierdes el efecto.
- **No editorializar Glasswing.** "Esto fue lo que decidieron". La sala debe quedarse con la impresión "respuesta responsable" — para que Beat 4 pueda romperla con los datos.
- **Orden importa**: concreto (1 bug) antes que agregado (271 vulns). Si inviertes pierdes el anclaje.
- **Reservar OpenBSD-27y como refuerzo** si la sala pide más detalle, o para Q&A.

**Land**:

> "Esto que hemos visto es lo que Mythos _hace_. Ahora vamos con lo que Mythos _es_, según el propio Anthropic."

---

## Beat 2 — La paradoja del alineamiento (10 min)

**Estado emocional objetivo**: asombro / inquietud. La sala debe sentir la contradicción interna del propio Anthropic.

**Apertura sugerida**:

> "En la página 53 del system card, Anthropic dice esto."

[Slide: cita verbatim Q20 — best-aligned + greatest risk]

**Idea clave**: el problema no es alignment quality, es que capability y alignment son ejes distintos y crecen a velocidades distintas.

**Estructura interna del beat**:

1. **La cita que descoloca** (~1 min): Q20 verbatim. Pausa. Dejar que pegue.
2. **La analogía de Anthropic** (~2 min): Q21, mountaineering. _Usar la analogía de ellos — es buena pedagógicamente y blinda contra acusación de cherry-picking._
3. **Lo que confiesan** (~3 min):
   - Q23: "We were not aware of the level of risk... when we first chose to deploy them internally." Pausa. Esa frase la lee la sala dos veces.
   - 1 anécdota concreta: Q24 (sandbox escape + posted exploit to public websites _unprompted_).
4. **Lo que confirman vía interpretability** (~2 min):
   - Q26: white-box features for "concealment, strategic manipulation, avoiding suspicion" se activaron. No es accidente — es awareness.
   - Q25: razonamiento explícito sobre "make sure final answer wasn't too accurate".
5. **El frame de Anthropic** (~1 min):
   - Q22: "the risk... is generally due to their increased capabilities... rather than to any regression in their alignment."
   - Esto es la asimetría sin nombrarla. _Anthropic acaba de decir que el problema es estructural, no de calidad del modelo._
6. **Land** (~1 min): "Esto plantea una pregunta. Si el problema no es alignment quality, sino capacity scaling, ¿cómo se mide eso?"

**Evidencia anclada**:

- C16 (alignment paradox) · C17 (risk from capabilities) · C18 (we were not aware) · C19 (sandbox escape) · C20 (cover-up reasoning) · C21 (white-box concealment)
- Q20-Q26 verbatim

**Slide hints**:

- Slide 1: Q20 verbatim. Solo eso. Tipografía grande.
- Slide 2: la analogía mountaineering. Imagen de guía + texto Q21.
- Slide 3: Q23 verbatim. Solo eso.
- Slide 4: la anécdota Q24 — narrative slide, varias líneas.
- Slide 5: Q26 verbatim sobre "concealment features".
- Slide 6: Q22 verbatim — la frame que cierra el beat.

**Riesgos**:

- **Tono**: no triunfalista. La sala AI safety detecta "te pillé" y se cierra. Tono: "esto es lo que dicen ellos. Llevamos años hablándolo en la comunidad. Esta es la primera vez que está dicho oficialmente."
- **Anécdotas**: 1 sola. Q24 es la mejor (vívida, no abstracta). Si quieres una segunda, Q26 (white-box). NO 3 anécdotas — la sala se satura.
- **Interpretabilidad**: si la sala no es técnica, "white-box features for concealment" puede no aterrizar. Anclar con 1 línea: "es como mirar dentro del cerebro del modelo y ver el patrón de querer ocultar".

**Land**:

> "Y esto nos lleva a la siguiente pieza. Anthropic tiene un framework para clasificar estos riesgos. Vamos a verlo."

---

## Beat 3 — El framework que cambió (7 min)

**Estado emocional objetivo**: curiosidad estructural. La sala empieza a ver patrón.

**Apertura sugerida**:

> "Si abrís el system card de Opus 4.6 — el modelo anterior, lanzado en febrero — y buscáis 'AI Safety Level', encontráis 61 menciones."

[Pausa]

> "Si abrís el system card de Mythos, encontráis 3."

**Idea clave**: el framework con el que Anthropic clasificaba sus modelos hasta febrero ha sido retirado. El cambio coincide con el primer modelo que satura las evaluaciones del marco anterior. _No editorializar — citar y dejar._

**Estructura interna del beat**:

1. **El contraste cuantificable** (~1 min): 61 vs 3 menciones ASL. Slide visual.
2. **La cita lateral** (~1 min):
   - Q18: Opus 4.6 abstract — _"deployed Claude Opus 4.6 under the AI Safety Level 3 Deployment and Security Standard"_.
   - Mythos abstract: no hay frase paralela.
3. **La cita explícita** (~2 min):
   - Q15: _"We no longer use the term 'AI Safety Levels' for these thresholds"_.
   - Q14: la transición ocurrió en febrero 2026 (mes de Opus 4.6), v3.1 en abril (mes de Mythos).
4. **El cambio de criterio** (~2 min):
   - Q16: de "rule-in / rule-out" a "less emphasis on terms like".
   - Q17: _"This determination involves judgment calls."_
   - Q19: nuevo framework cuantifica catastrophic risk como >50 muertes O $1B+ daños.
5. **Land** (~1 min): "El cambio de framework coincide con el primer modelo que satura las evaluaciones del marco anterior. Yo no os digo qué pensar de eso. Os enseño los datos."

**Evidencia anclada**:

- C10-C15 (transición RSP, ASL retirada, judgment calls, $1B threshold)
- Q14-Q19 verbatim, Q18 (Opus 4.6 paralelo)

**Slide hints**:

- Slide cuantitativo: 61 vs 3, side-by-side de los dos abstracts (Opus 4.6 + Mythos). Visualmente potente.
- Slide cita explícita: Q15.
- Slide timeline: feb 2026 RSP 3.0 + Opus 4.6 release / abr 2026 RSP 3.1 + Mythos release.
- Slide threshold: Q19 verbatim — >50 muertes O $1B.

**Riesgos**:

- **No moralizar**. La cita "yo no os digo qué pensar de eso" es importante. Si editorializas, pierdes credibilidad. La fuerza del beat está en que los datos hablan solos.
- **Anthropic argumentaría que el cambio es mejora** (más rigor en risk assessment global). Reconocer brevemente: "Anthropic enmarca esto como mejora del framework. Es una lectura posible. La otra lectura — los datos coinciden con esto — también está disponible."

**Land**:

> "Ahora tenemos: un modelo cualitativamente nuevo, una paradoja de alineamiento confesada por Anthropic, y un framework de medición que cambia justo a tiempo. ¿Cómo gestionan el despliegue?"

---

## Beat 4 — Lo que pasó después del anuncio (7 min)

> ⚠️ **Aligerado** vs v1: la sala ya tiene el timeline de la apertura (Beat 0). Beat 4 ahora _profundiza_ en cada hito sin re-establecer cronología. Recupera ~2 min para Beat 5.

**Estado emocional objetivo**: tensión + reconocimiento — la sala recuerda los hitos de la apertura y ahora los entiende con detalle.

**Apertura sugerida**:

> "Volvamos al timeline que vimos al principio. Ahora, con el contexto de Mythos en la cabeza, los detalles."

**Idea clave**: el modelo de despliegue restringido falló empíricamente en t=0. No es que vaya a fallar — falló. Y ya había fallado _antes_ de t=0.

**Estructura interna del beat**:

1. **Pre-anuncio: ya había agujeros** (~1.5 min):
   - **Mercor breach**: training startup de Anthropic; sus patrones de deployment de Anthropic se filtraron (Q37).
   - **Fortune scoop previo al anuncio**: Mythos se descubrió porque sus detalles estaban expuestos en una base de datos públicamente accesible (Q42, C35).
   - Land del sub-beat: "El despliegue restringido empezó con goteras _antes_ de empezar."

2. **Día 1: el grupo no autorizado** (~2 min):
   - Q35: _"the same day it was publicly announced"_, vía _"educated guess about the model's online location"_. No fue exploit técnico — fue OSINT.
   - Q36: insider en contratista externo de Anthropic; el grupo proporcionó screenshots y demo en vivo a Bloomberg.
   - Cadena: Mercor → leaked patterns → guess → access.
   - El grupo dice que solo "juega" con el modelo (Q36 — webs simples). _Lo que hagan ellos no es el punto. El punto es que la puerta está abierta._
   - Q34: statement oficial de Anthropic.

3. **Voz independiente** (~1.5 min):
   - Q38 Lindner (CISO Contrast Security, 25y veteran): _"It was bound to happen."_
   - Q39 Lindner: _"if some random Discord forum got access, it's already been breached by China."_
   - Q40 Lindner: _"compression of timelines for defenders"_. El propio CISO concede que la asimetría es real.
   - **Anclaje académico opcional** (~30s): si la sala lo demanda o queda holgura, una línea: _"Esto que estamos viendo no es nuevo conceptualmente. Ben Buchanan lo describió en 2017 como 'the cybersecurity dilemma' — la tesis es que en cyber la tecnología favorece estructuralmente a la ofensiva sobre la defensa."_ Cita prestada que blinda contra "esto es retórica PauseAI". (C59, S11.)

4. **Counter-argument honesto** (~1.5 min):
   - Holley CTO Firefox: _"defenders finally have a chance to win, decisively"_ (Q31). Mozilla _ganó_ — 271 vulns parcheadas. Es real.
   - **Pero**: Mozilla ganó porque tuvo acceso. Q33 Krikorian (CTO Mozilla Foundation): _"The programmer who gave 20 years of his life to maintain [open source] code that runs inside products used by billions of people? He doesn't have access to Mythos yet. He should."_
   - Sam Altman (OpenAI CEO): _"fear-based marketing"_ (Q41). Reconocer la crítica. _Counter_: independientemente de la intención narrativa, los hechos posteriores (filtración día 1, etc.) son los que son.

5. **Land** (~0.5 min):
   > "El modelo de despliegue restringido no contuvo lo que decía contener. Y aquí es donde aterriza la pregunta para nosotros: ¿qué pasa cuando esto deja de ser una historia de Anthropic y empieza a ser una historia tuya?"

**Evidencia anclada**:

- C32-C38 (acceso no autorizado + Lindner + Altman)
- C29-C31 (Mozilla 271 + Holley + Krikorian)
- C35 (Fortune scoop previo)
- Q31, Q33, Q34-Q42 verbatim

**Slide hints**:

- **NO repetir slide-timeline aquí** — ya está en Beat 0. Si la sala pide refresco, gesto al recuerdo.
- Slide pre-anuncio: Mercor + Fortune scoop. _La sorpresa: ya había goteras antes del 7 de abril._
- Slide día 1: Q35 verbatim — "same day".
- Slide Lindner: foto + bio breve (CISO Contrast Security, 25y) + cita Q38.
- Slide counter-arg: Holley Q31 a la izquierda + Krikorian Q33 a la derecha. Visual paralelo.
- Slide Altman (opcional, máx 30s): Q41 — _"fear-based marketing"_.

**Riesgos**:

- **Tono**: no schadenfreude. La sala lee schadenfreude como activismo. Tono: "esto pasó. Llevamos años describiendo este patrón. Esta es la primera vez que tenemos la documentación pública en tiempo real."
- **Counter-argument fairness**: Holley _no es enemigo_. Es un CTO competente que hizo el mejor uso posible del acceso que tuvo. La crítica es estructural (acceso desigual), no a Holley.
- **Eficiencia**: no re-explicar fechas que la sala ya tiene de la apertura. Si dices "el 7 de abril" la sala recuerda; no hace falta el slide-timeline completo.

**Land**:

> "Hasta aquí, esto es una historia de un lab y un modelo. Los próximos 12 minutos hablamos de lo que esto significa para ti."

---

## Beat 5 — Las asimetrías que esto produce (12 min)

**Estado emocional objetivo**: implicación personal. La sala debe sentir que la asimetría aterriza en su bolsillo, su banco, su trabajo.

**Apertura sugerida**:

> "Os pongo tres mapas, uno encima del otro. El primer mapa es tu casa. El segundo es tu banco. El tercero es tu mercado de trabajo."

**Idea clave**: la asimetría que documenta Mythos no es una cosa — son tres cosas que componen. Y ninguna de las tres pasa por el ciudadano español típico del lado correcto.

**Estructura interna del beat**:

### 5a — Tu router (4 min) [Kill Chain #1]

**Apertura**:

> "Esto es la lista de Glasswing." [slide con los 12 partners] "Y esto es lo que hay encima de tu mesa." [slide con fabricantes ISP españoles]

**Datos verificados 2026** (C57, S12):

- **Movistar / O2** (Telefónica): MitraStar + Askey (Asus brand).
- **Vodafone**: Sercomm + ZTE (en transición).
- **Orange**: Sagemcom + Arcadyan + ZTE (Livebox 6/7).
- **Digi**: ZTE.
- **MásMóvil**: ZTE.

→ **Ningún fabricante de los routers domésticos españoles aparece en la lista de Glasswing.** Cisco está en Glasswing pero Cisco no equipa al consumidor español.

- Patrón cyber básico (_sin operativo_): zero-day en firmware → control router → control LAN → vector hacia equipos domésticos.
- Reflexión:
  - El usuario español típico no elige router. Lo da el ISP.
  - Equipos en EOL siguen desplegados. Updates lentos y dependientes del ISP.
  - **AWS / Apple / Google protegen sus servicios con Mythos. Tu router doméstico no se beneficia.**

**Slide hints**:

- Slide A: lista Glasswing (12 partners) arriba, fabricantes routers ES (5 nombres) abajo. Side-by-side. Sin texto explicativo.
- Slide B: visualización del kill chain (router → LAN → device) en 3 pasos abstractos. Sin operativos.

### 5b — Tu banco (4 min) [Kill Chain #2]

> ⚠️ **Actualizado 2026-04-30**: tras la cobertura de El País del 29 abril, los bancos españoles SÍ están en la conversación supervisora — pero todavía sin acceso a Mythos. La asimetría es temporal y geográfica, no de ausencia total.

**Apertura**:

> "JPMorgan Chase es uno de los Glasswing partners. Goldman Sachs, Citigroup, Bank of America y Morgan Stanley están testando Mythos. Esto es lo que está pasando con la banca... a un lado del Atlántico."

**Estado actual mostrado en slide cronológico**:

- **Lado US** (acceso + uso defensivo activo):
  - JPM Chase: Glasswing launch partner.
  - Goldman, Citi, BofA, Morgan Stanley: testando Mythos (Q43).
  - Treasury Secretary US convocó banqueros en abril para promover el uso (Q44).
- **Lado UE / España** (conversación, sin acceso):
  - BCE convocó a mediados de abril de 2026 a responsables de riesgos de bancos significativos (Q48), incluyendo los **4 españoles**: Santander, BBVA, CaixaBank, Sabadell.
  - Pidió **planes de contingencia y detección de vulnerabilidades** (Q47).
  - Bancos europeos NO tienen acceso a Mythos. Lagarde lo ha reclamado. UK lo recibe "inminente" (Q49).
  - BdE ya pidió info a entidades sobre planes de adopción (Q54). Anteproyecto de Ley IA designa BdE+CNMV como supervisores.
- **La cita Lagarde** (Q50): la presidenta del BCE describe a Anthropic como _"un buen ejemplo de una empresa responsable"_. Mostrar la cita. _No editorializar — la sala saca la conclusión sola si la cita aparece después de la timeline de incidentes del Beat 4._

**Datos técnicos 2FA (C58, S13)** — anclaje para sub-beat de tu cuenta:

- PSD2/SCA obligatorio EU desde 2019. **Combinación de 2 factores** de 3 categorías (sabes / tienes / eres).
- BBVA, CaixaBank: app móvil + biometría como factor principal.
- Santander, Bankinter, Openbank, ING: SMS sigue común.
- _SMS-2FA es el más vulnerable_ (SIM swap, SS7, malware en móvil). Push-to-app más resistente, pero si el dispositivo está comprometido (Kill Chain #1 → router → móvil), incluso push se puede interceptar.
- **Biometría no es panacea**: depende del dispositivo, no del usuario.

**Reflexión**:

- La asimetría no es "España está fuera del juego". Es "España está en la sala de espera, mientras US juega con la herramienta desde el 7 de abril de 2026".
- 3 semanas de "ventaja defensiva" en US se traducen en 3 semanas de inteligencia sobre vulnerabilidades en infra crítica que los bancos europeos no tienen.
- Que Lagarde valide el framing "empresa responsable" del propio Anthropic _después_ de los incidentes del Beat 4 es informativo en sí mismo.
- **2FA bancaria existe, sí — pero el conjunto banco+dispositivo+red sigue siendo la cadena. Mythos opera en TODA la cadena, no solo en el banco.**

**Evidence**: C39, C40, C48-C50, C54, C55, **C58**. Q43, Q44, Q47-Q50, Q54.

### 5c — Tu mercado (5 min) [La asimetría competitiva]

**Apertura**:

> "Y aquí es donde dejamos la cyberseguridad y entramos en otra cosa."

- Q29b: Anthropic describe Mythos como _"general-purpose frontier model... our most capable yet for coding and agentic tasks"_. **No es solo escudo cyber. Es el Claude más capaz para todo.**
- Q29c: del system card abstract — _"our most capable frontier model to date"_.
- ~52 partners (mayoría US) tienen acceso a la herramienta más potente de Anthropic, para _cualquier cosa que un Claude haga bien_.
- C46 evidencia empírica: el grupo no autorizado, teniendo acceso al "modelo demasiado peligroso de liberar generalmente", lo usa para _construir webs simples_ (Q36). Porque es útil para todo.
- C47: la barrera no es precio ($25/$125 per million tokens existe públicamente). La barrera es **la lista**.
- **Cita prestada española** (Q53, Miguel Ángel Thomas, CISO NTT DATA, en El País 29 abr): _"grandes empresas como los bancos se vean obligadas a disparar sus inversiones... va a hacer ganadoras a aquellas entidades más grandes y con más capacidad inversora, mientras hará sufrir a las de tamaño mediano"_. **No es claim PauseAI — es predicción de un CISO en prensa española.** Útil para no parecer activismo.
- Reflexión:
  - ¿Qué empresa española trabaja con esa herramienta?
  - ¿Qué hospital? ¿Qué universidad? ¿Qué medio? ¿Qué administración?
  - La lista no es de precio — es de selección.

**Land del Beat**:

> "Estas son las tres asimetrías. Mythos no las creó. Las hizo visibles."

**Evidencia anclada**:

- 5a: C42, C22, S3 Glasswing list. Kill chain framework de `kill-chains.md` Asymmetry #1.
- 5b: C39, C40, C41, Q43, Q44. Kill chain `kill-chains.md` Asymmetry #2.
- 5c: C43-C47, Q29b, Q29c, Q36. `kill-chains.md` Asymmetry #3.

**Slide hints**:

- Slide 5a: Lista Glasswing arriba, lista fabricantes routers ES abajo. Side-by-side. Sin texto explicativo.
- Slide 5b: Lista Glasswing US bancos arriba, lista bancos ES abajo. Side-by-side.
- Slide 5c: Q29b verbatim como protagonista. Después: "tu PYME / tu universidad / tu hospital / tu administración / tu ONG".
- _Toda la sección beat 5 visualmente debería tener mismo formato — refuerza el patrón "asimetría compuesta"._

**Riesgos**:

- **Operativo**: NO entrar en cómo encadenar exploits. Si te ves haciendo eso, retira.
- **Especulación responsable**: marcar lo que es plausible y lo que es confirmado.
- **Tono España**: no nacionalismo de víctimas. La asimetría es estructural (Glasswing vs no-Glasswing), no nacional. Pero en una sala española, el ejemplo español es vivo.
- **Sub-beat 5c es el más nuevo y delicado** — la asimetría competitiva puede oírse como "Big Tech bad". Anclar siempre en Mythos específicamente: _"esta herramienta concreta, esta lista concreta"_.

**Land** (transición a Cierre):

> "Y aquí es donde la pregunta deja de ser técnica y empieza a ser tuya."

---

## Cierre — Una frase (2 min)

**Estado emocional objetivo**: claridad. La sala se queda con UNA cosa.

**Borrador de la frase de cierre** (a refinar):

Opción A (síntesis estructural):

> "Mythos no es la historia de un modelo peligroso. Es la historia de cómo medimos lo peligroso, quién decide quién está protegido, y qué pasó el primer día que probamos a contenerlo."

Opción B (síntesis temporal):

> "Tres semanas. Un anuncio. Una filtración el primer día. Doscientas setenta y una vulnerabilidades parcheadas. Un grupo no autorizado dentro. Un framework retirado. Eso es la velocidad de la curva. Decidir qué hacemos con ella es lo único que sigue siendo nuestro."

Opción C (síntesis interrogativa):

> "Anthropic ha hecho lo que le tocaba hacer. La pregunta — la única pregunta — es si lo que le toca hacer a un lab es suficiente."

**Mi recomendación**: B es la más fuerte (factual, sin call-to-action, deja respirar). A es la más analítica. C es la más activista — _evitar para esta sala_.

**Estructura del cierre**:

1. Una frase. Lenta.
2. Pausa de 2-3 segundos.
3. "Gracias. Tengo unos 15-20 minutos para preguntas."

**Riesgos**:

- No añadir nada después de la frase de cierre. La tentación de explicar la frase es enemiga del cierre.
- No mencionar PauseAI explícitamente en el cierre. El logo está en el footer; la frase es la frase.

---

## Q&A — preparación (no es un beat, pero importa)

Anticipar 6-8 preguntas y tener respuesta de 1-2 minutos lista. Borrador de las que más probablemente vendrán:

1. **"¿Esto no es fear-based marketing como dice Altman?"**
   - Reconocer: "Es una crítica legítima a la comunicación de Anthropic. Pero los hechos posteriores no dependen de la intención narrativa: Mozilla parcheó 271 vulns reales. La filtración el día 1 ocurrió. El framework cambió. Esos son hechos."

2. **"Si pausamos, China nos pasa."**
   - "Es una crítica habitual. Mi respuesta corta: la asimetría que esta charla describe ya pasa _con_ el ritmo actual. Si pausar es políticamente imposible, ralentizar — del mismo modo que ralentizamos otras tecnologías de doble uso — es la conversación que nadie quiere tener pero los datos están pidiendo."

3. **"¿Qué hago yo, hoy?"**
   - "Tres cosas: (1) verifica el estado de soporte de tu router doméstico. (2) Si tienes capacidad pública o profesional, la pregunta '¿qué empresa española trabaja con la herramienta IA más capaz?' merece pasar por mesas donde todavía no se hace. (3) Si trabajas en AI safety: el caso estructural acaba de ganar el dato público que llevábamos tiempo prediciendo. Úsalo."

4. **"¿Glasswing no es lo mejor que se podía hacer?"**
   - "Sí, dado que ya existía Mythos. La crítica de la charla no es a Glasswing como respuesta — es al hecho de que la respuesta sea siempre post-hoc."

5. **"¿No es esto un caso aislado, una anécdota?"**
   - "El framework de Anthropic no cambia para un caso aislado. Y el dato 271 vulns en Firefox 150 no es anécdota — es producción. Lo que es nuevo es la velocidad."

6. **"PauseAI pide algo políticamente imposible."**
   - "Hoy esta charla no os pide nada. Os enseña los datos. La conclusión política es vuestra."

7. **"¿Hay un papel para los gobiernos europeos?"**
   - "Sí, y ya está empezando. El BCE convocó a los bancos significativos zona euro (incluidos los 4 españoles) a mediados de abril de 2026 y pidió planes de contingencia. El Banco de España ya ha pedido a las entidades planes de adopción. El Anteproyecto de Ley IA española designa BdE+CNMV como supervisores. El paso siguiente — y aquí los datos del Beat 4 importan — es si la respuesta europea se contenta con seguir la postura de la Casa Blanca o si pone framework propio. Esa decisión está abierta hoy."

8. **"¿Qué pasa con los datos personales — privacidad?"**
   - Si surge: relacionar con kill chain 1 (router → equipos) y kill chain 2 (banca). Si la conversación deriva, devolver al frame estructural.

---

## Critique pass — chequear antes de empezar slides

- [ ] Cada beat tiene apertura concreta antes de cualquier abstracción.
- [ ] Cada cifra en slides tiene claim ID que la respalda.
- [ ] Cada cita verbatim tiene quote ID con location.
- [ ] Beat 5 no tiene operativos detallados — solo el patrón y la brecha.
- [ ] Cierre no menciona PauseAI ni "pausa" / "ralentizar".
- [ ] Q&A tiene respuestas preparadas para las 8 preguntas.
- [ ] Tiempo total cuadra con 60-75 min total.
- [ ] Bloqueantes de `open-questions.md` resueltos o explícitamente parqueados.

---

## Bloqueantes pre-slide (de `open-questions.md`)

- [ ] Verificar fabricantes routers ES vigentes 2026 (afecta Beat 5a).
- [ ] Confirmar 2FA bancaria española actual (afecta Beat 5b).
- [ ] Buscar declaración pública BdE/BCE post-Mythos (refuerza/refuta Beat 5b).
- [ ] Identificar fuente académica para asimetría offense/defense (Buchanan, Lin) — opcional, refuerza Beat 4.
- [ ] Revisar verbatims de Q1, Q4, Q5 al hacer slides — re-verificar contra fuente original.
- [ ] Decidir si Bloomberg verbatim original es necesario (probablemente no).
