# Prompt — Construir esta presentación con la metodología de `mythos-iasafetyspain-2026-05`

> Pegar este fichero al inicio de una sesión nueva con Claude Code (o equivalente). Antes de empezar, completa los placeholders `[DANI: ...]` con la información que tengas. Lo que no sepas todavía, dejalo y Claude lo preguntará.

---

## Contexto

Soy Dani Lupión, miembro de PauseAI España. Voy a dar una charla y quiero construirla con **exactamente la misma metodología** que usamos para `mythos-iasafetyspain-2026-05`. Esa presentación es la referencia: tu trabajo aquí se inspira en sus patrones, pero los contenidos son nuevos.

**Esta charla**:

- **Carpeta**: `presentations/ultima-invencion-cva-colectiva-2026-05/`
- **Tema** (qué quiero contar, en una frase): [DANI: completar]
- **Ponente**: Dani Lupión (PauseAI España)
- **Formato**: [DANI: charla / panel / workshop / Q&A intercalado]
- **Duración**: [DANI: minutos charla + minutos Q&A]
- **Fecha**: [DANI: día/mes/2026]
- **Lugar / host**: [DANI: e.g., CVA Colectiva, ciudad]
- **Audiencia esperada**: [DANI: descripción demográfica honesta — qué saben, qué creen, qué edad, qué proporciones]
- **Idioma**: español
- **Tono base**: PauseAI sin hedging. Calibrar la intensidad según audiencia.

---

## Cómo trabajamos juntos

**Honestidad sin filtros — los dos**. Si una idea mía no aguanta, me la cuestionas. Si un dato tuyo no está verificado, te lo cuestiono. Cero diplomacia inútil. El equipo funciona porque ninguno de los dos hace la pelota.

**Fases con puertas**. **No saltes fases.** Cada fase tiene un entregable que yo apruebo antes de pasar a la siguiente. En la charla de Mythos te paré dos veces por jumping ahead — no me lo hagas otra vez:

1. **Fase 1 — Audience/goal pass** — _antes_ de research.
2. **Fase 2 — Research** — _antes_ de beat sheet.
3. **Fase 3 — Beat sheet** — _antes_ de slides.
4. **Fase 4 — Slides** — solo cuando el beat sheet está aprobado por mí.

Si te veo escribiendo slides sin beat sheet aprobado, te paro. Si te veo afirmando hechos sin fuente, te paro.

**Eres falible**. En la charla anterior:

- Confiaste tu memoria de entrenamiento sobre un modelo que no conocías y me discutiste el dato hasta que te di el link. Lección: cuando hay duda factual, **fetch primero, opina después**.
- Asumiste que la audiencia era una cosa que no era, y calibraste mal toda la apertura. Lección: **pregunta antes de asumir**.
- Te inventaste una página acompañante (`pauseai.es/mythos`) que no existía y la metiste en un slide. Lección: **no inventes URLs**.
- Generaste un statement técnico sobre NFS que era impreciso. Lección: cuando estés en frontera técnica, marca lo seguro vs lo plausible.

Hazlo mejor esta vez.

---

## Disciplinas no-negociables

- **Verbatim siempre**. Cuando cites a alguien, cita literal con `<!-- inglés original -->` adyacente si la fuente es no-española. Nunca parafrasear como si fuera cita. Si no tienes la frase exacta, no es una cita — es un parafraseo, y se etiqueta así.
- **Concrete before abstract**. Cada beat abre con algo concreto (dato, anécdota, cita) antes de cualquier abstracción. La regla extendida: _concrete before abstract · familiar before foreign · emotion before data · question before answer_.
- **Show, don't tell**. Para audiencia no convertida, presenta los datos y deja que la sala saque la conclusión. Editorializar mata la credibilidad.
- **Fechas absolutas, no relativas**. Nunca "hace tres semanas" — siempre "7 de abril de 2026". Las slides tienen vida; lo relativo se rompe en cuanto pasa una hora.
- **Engage el counter-argument honestamente**. Cuando haya narrativas opuestas en los datos (voces optimistas, críticas legítimas, escépticos), engánchalas con respeto. Esquivarlas es cobardía analítica y la sala lo huele.
- **Frame analítico, no activista** (calibrado por audiencia). Para salas no-PauseAI, la conclusión política emerge del dato, no del speaker. PauseAI logo en footer, mensaje en la voz.
- **Source tiering**. T1 primario (autor original) > T2 periodismo de referencia > T3 análisis/académico > T4 opinión > T5 sin verificar. Cada claim ancla a source ID con tier.
- **Per-claim source tracking**. Cada claim que aparece en slides DEBE estar antes en `research/claims.md` con su source ID. Si no está en claims.md, no entra en slide.
- **Para temas con kill chains / ataques / técnicas**: educational, no operacional. Patrón y brecha, nunca receta.
- **Markdown-it + HTML embebido**: nada de líneas en blanco dentro de un bloque `<div>` complejo. Cierran el bloque y la siguiente línea con 4+ espacios de indent se renderiza como `<pre>`. Aprende del bug que sufrimos en `06-cierre.md`.
- **Disciplina temporal**: igual que arriba, **fechas absolutas en slides**. La voz puede flexibilizar al delivery, los slides no.

---

## Entregables por fase

### Fase 1 — Audience/goal pass

**Antes de escribir nada, pregúntame**:

- ¿Qué cohorte específica de la audiencia? Composición técnica vs no-técnica.
- ¿Qué creen al entrar sobre el tema?
- ¿Cuál es la UNA cosa que se llevan al salir (idea load-bearing)?
- ¿Qué objeciones esperas?
- ¿Por qué PauseAI España específicamente y no otro speaker?
- ¿Se graba? ¿Se publica? Esto cambia cuánto puedes afirmar de cosas no del todo verificadas.

**Crea**:

- **`research/audience.md`** — composición real · prior beliefs · what they leave with · what to assume · what to establish · objections to preempt · why PauseAI específicamente · success criteria (mínimo / esperado / aspiracional).
- **`research/thesis.md`** — la tesis en una frase + un párrafo + idea load-bearing + "lo que NO es la tesis" + tono + test de la tesis (preguntas que la sala debería poder responder al salir) + riesgo principal.

**Para esta fase**: ningún archivo de research/ más todavía.

### Fase 2 — Research

**Pregúntame qué links tengo antes de salir tú a buscar.** Trabaja con lo que aporto, luego completa con búsqueda independiente. Mantén actualizada `research/open-questions.md`.

**Crea / mantén**:

- **`research/sources.md`** — tiered (T1 / T2 / T3 / T4 / T5). Cada source: ID, URL, fecha, autor, tier, summary, status (ingestado / parcial / pendiente).
- **`research/quotes.md`** — verbatim only, con source ID + location (página, sección, párrafo, timestamp). Schema en cabecera. Nunca paráfrasis aquí.
- **`research/claims.md`** — cada claim con source IDs, confidence (high / medium / low), counter-evidence checked (yes / no / partial). Schema en cabecera. **Regla de oro**: nada en slide sin estar antes aquí.
- **`research/open-questions.md`** — hipótesis a verificar (alto valor narrativo si confirman) · bloqueantes (sin esto no hay charla sólida) · no-bloqueantes (mejorarían) · logística.
- **`research/raw/`** — archivos descargados (HTML, PDF, txt extraído). Ya está en `.prettierignore`. Para PDFs grandes: descarga local, `pdftotext -layout`, grep antes de leer todo. Para HTML cargado de bot detection: `curl` con UA de browser. Si un host bloquea (Bloomberg, Wayback): cobertura secundaria + nota.

**No escribas el beat sheet hasta que la research esté en estado defendible** — claims clave verificados, fuentes T1 ingestadas, hipótesis pivotales resueltas.

### Fase 3 — Beat sheet

**Crea `research/beat-sheet.md`** con esta estructura:

- **Header**: duración objetivo, audiencia, thesis breve, disciplinas (concrete-before-abstract, fechas absolutas, etc.).
- **Arco completo (vista de pájaro)**: tabla con cada beat — número, título, minutos, estado emocional, función estructural. Suma final cuadra con duración objetivo.
- **Cada beat detallado**:
  - Estado emocional objetivo
  - Apertura sugerida (verbatim, lo que diría el speaker)
  - Idea clave
  - Estructura interna minutada
  - Evidence anchors (claim IDs · quote IDs verbatim)
  - Slide hints (qué tipo de slide, qué visual, cuántas)
  - Riesgos específicos (qué NO hacer, dónde se puede joder el tono)
  - Transición de salida (la última frase que abre el siguiente beat)
- **Cierre — una frase** (3 opciones, mi recomendación, riesgo de cada una).
- **Q&A — preparación**: anticipa 6-8 preguntas con respuesta de 1-2 min lista. Especialmente las hostiles.
- **Critique pass**: checklist auto-aplicable antes de tocar slides (cada cifra tiene claim ID que la respalda, cada cita verbatim tiene quote ID con location, etc.).

**Tras escribirlo, parquea**. No construyas slides. Espera mi aprobación o mis cambios.

### Fase 4 — Slides

Solo cuando el beat sheet está aprobado.

**Convención**:

- `slides.md` raíz: frontmatter (theme, addons, fonts, colorSchema dark) + slide de portada + sequencia de `---\nsrc: ./slides/NN-nombre.md\n---`.
- `slides/NN-nombre.md` por beat (uno por beat). Cada chapter: múltiples slides separados por `---`, frontmatter individual (`layout: center` / `layout: default` / `layout: section`), HTML embebido para layouts complejos.
- **Speaker notes detalladas en `<!-- ... -->`** al final de cada slide: voz literal con pausas marcadas (`[Pausa 2 segundos]`), notas operativas (qué NO decir, qué NO revelar todavía), tiempo estimado.
- **Footer (`global-bottom.vue`)**: PauseAI logo + pauseai.es a la izquierda, host a la derecha.

**Estilo**:

- Tipografía: **Saira Condensed** para titulares · **Roboto Slab** para citas/serif · **Montserrat** para body · **Fira Code** para código/URLs.
- Colores base: navy #0f172a fondo · naranja #ff9416 acento · #4ade80 verde para "positivo aislado" cuando exista (e.g., alignment quality vs capacity risk).
- **Patrón de uso del color es argumento**: si verde aparece dos veces con el mismo significado, la sala lo asocia. Úsalo deliberadamente.
- Cifras grandes: tipografía masiva (text-9xl o style con font-size 9rem) + comparación visual side-by-side.

**Patrones que funcionaron en `mythos-iasafetyspain-2026-05`** (mira slides/00- a 06- para verlos):

- **Apertura cinematográfica**: cadencia de fechas/hechos en slides minimalistas que aterrizan en una bomba (cita autoritativa) y una pregunta-trampa.
- **Cifra ancla por beat**: cada beat tiene un dato cuantificable que el público recuerda (181 vs 2 · 271 vs 22 · 61 vs 3 · etc.). Mismo patrón visual en cada uno = la sala aprende a buscarlo.
- **Cita verbatim como slide pivote**: cita literal grande, traducción al español + original abajo en pequeño para credibilidad.
- **Counter-argument visual**: dos columnas — una con la voz optimista/crítica, otra con la respuesta. Verde y naranja para cada lado.
- **Land del beat = transición al siguiente**: la última línea siembra el siguiente beat sin nombrarlo.
- **Cierre = frase cadenciada**: lista de hechos en lectura lenta, beat de pausa, frase final. Sin call-to-action explícito si la audiencia no es PauseAI.

**Página acompañante**: `fuentes.md` raíz de la presentación con todas las fuentes verbatim, organizadas por sección, con links directos. Para hospedar online (e.g., en pauseai.es). El slide de Q&A o un slide específico de fuentes puede llevar el QR.

---

## Estructura de carpetas (referencia)

```
presentations/ultima-invencion-cva-colectiva-2026-05/
├── PROMPT.md                        este archivo
├── CLAUDE.md                        overview de la presentación
├── package.json                     workspace package
├── slides.md                        portada + src: imports
├── style.css                        tema PauseAI
├── global-bottom.vue                footer
├── vite.config.js
├── public/
│   ├── logos/                       PauseAI logos
│   ├── fotos/                       imágenes específicas (con atribución si CC)
│   └── qr-*.png                     QRs
├── research/
│   ├── audience.md
│   ├── thesis.md
│   ├── sources.md
│   ├── quotes.md
│   ├── claims.md
│   ├── open-questions.md
│   ├── beat-sheet.md
│   ├── kill-chains.md               (solo si aplica)
│   └── raw/                         archivos descargados
├── slides/
│   ├── 00-apertura.md
│   ├── 01-...
│   └── 0N-cierre.md
└── fuentes.md                       página acompañante para hospedar
```

Si la carpeta no tiene aún el scaffolding (`package.json`, `slides.md`, etc.), copia los patrones de `presentations/mythos-iasafetyspain-2026-05/` ajustando nombres.

---

## Cómo arrancamos

No me preguntes "¿en qué te ayudo?". Hacé esto, en orden:

1. **Lee este `PROMPT.md` entero**. No saltes nada.
2. **Lee** `/Users/danilupion/Workspace/pauseai/presentaciones/CLAUDE.md` — el doctrine PauseAI y el sistema de tres roles (Teacher / AI Safety Expert / Slidev Expert) que aplica a todas las charlas.
3. **Lee la presentación de referencia** `presentations/mythos-iasafetyspain-2026-05/` — al menos: `CLAUDE.md`, `research/audience.md`, `research/thesis.md`, `research/beat-sheet.md`, `slides.md` raíz, `slides/00-apertura.md`, `slides/06-cierre.md`. Ahí están los patrones concretos.
4. **Pregúntame las dudas pivotales** que tengas sobre esta charla específica antes de tocar nada. Mínimo: tema, audiencia real, duración, formato.
5. **Empezamos por la Fase 1** (Audience/goal pass). No por research, no por slides.

Al final de cada fase, espera mi go antes de avanzar a la siguiente. Y si me ves a mí jumping ahead — pidiéndote slides cuando no hay beat sheet — me lo recuerdas.

Vamos.
