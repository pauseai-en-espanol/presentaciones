# CLAUDE.md - Lo que la máquina aún no ve (PauseAI + Fundación Albor)

## Presentation Overview

Dani Lupión, miembro de PauseAI, da una charla de 1 hora a estudiantes del Ciclo Formativo de Grado Superior de Imagen para el Radiodiagnóstico en el C.D.P. Fundación Albor, Cádiz. La charla conecta los riesgos de la IA con su futura profesión en imagen médica, donde la IA lleva una década siendo "la amenaza" — y donde la realidad ha sido más matizada.

Presentación derivada de `ia-farmacia-albor-2026-04`. Conserva estructura y bloques 1, 2, 4, 6, 7 con retoques menores. Reescribe bloque sanitario (3 + parte de 5) y añade apertura con Hinton.

## Key Details

- **Ponente**: Dani Lupión, miembro de PauseAI
- **Formato**: Charla invitada, sesión única
- **Audiencia**: Estudiantes de CFGS Imagen para el Radiodiagnóstico, ~18-21 años
- **Duración**: 1 hora (50 min contenido + 10 min preguntas)
- **Fecha**: Abril 2026 (por confirmar día exacto)
- **Lugar**: C.D.P. Fundación Albor, Cádiz
- **Tono**: Directo, adulto, sin condescendencia. Son pre-profesionales, no adolescentes. Conversación técnica con ejemplos concretos. Jerga de alineamiento/sesgo permitida con traducción.

## Audience Profile

- **Edad**: ~18-21 años (post-Bachillerato)
- **Formación**: Ciclo Formativo de Grado Superior — contenido técnico-sanitario, camino posible a universidad
- **Futuro profesional**: Técnicos superiores en imagen para el radiodiagnóstico — RX, TC, RM, mamografía, medicina nuclear, ecografía. Trabajan con radiólogos, manejan equipos, posicionan pacientes, reconocen calidad de imagen, detectan incidencias.
- **Relación con IA**: Nativos digitales. Han crecido oyendo "la IA va a sustituir a los radiólogos". Algunos se lo creen, otros lo descartan. Pocos tienen marco para razonar sobre ello.
- **Lo que NO hacer**: No repetir el discurso apocalíptico de la prensa generalista. No infantilizar. No dar "clase de IA". No venderles tranquilidad falsa ("vuestro trabajo es seguro").
- **Lo que SÍ hacer**: Llevarles al debate real sobre IA en imagen médica. Datos, estudios, incidentes. Mostrar qué hace la IA bien, qué hace mal, qué sigue sin poder hacer. Darles herramientas para leer el hype críticamente durante el resto de su carrera.

## Branding

- **Assets** (en `public/logos/`): `logo.png` (icono PauseAI), `logo-completo.png` (banner horizontal)
- **Footer**: PauseAI logo + pauseai.es (izquierda), Fundación Albor · Cádiz (derecha)
- **Tema**: Slidev default theme, mínima customización. Acento naranja PauseAI (#FF6600).

## Arco narrativo

**Provocación → Reality check → Asombro → Inquietud → Alarma → Conexión profesional → Empoderamiento**

"En 2016 Geoffrey Hinton dijo que dejásemos de formar radiólogos. Diez años después seguís aquí. Pero la IA sí ha cambiado la imagen médica — solo que no como él pensaba. Esta charla va de lo que la máquina _aún_ no ve, y por qué vosotros seguís haciendo falta."

## Session Structure (8 bloques, 60 min)

### Bloque 1: Apertura (~5 min) — conservado de farmacia con retoques

- Poll: "¿Cuántos usáis IA para estudiar? ¿Cuántos os fiáis?"
- Demo deepfake: robots reales (Unitree) vs CGI
- Reveal: Lucía Velasco (Co-Chair GPAI) cayó → todos podemos
- Slide de Claude sobre participar en su propia charla
- Índice

### Bloque 2: Qué puede hacer la IA hoy (~7 min) ★ AMPLIADO con Hinton

- **Apertura: dos predicciones fallidas** (framing del bloque)
- **Predicción 1 (Hinton 2016)**: "dejad de formar radiólogos, en 5 años la IA lo hará mejor" → 10 años después, siguen ahí. Se quedó corto.
- **Predicción 2 (Grace et al. 2022)**: HLMI en 2047 → llegó en 2023. Se pasó de largo.
- **Cierre framing**: los expertos no saben cuándo llega. Solo que no es cuando creen.
- De herramienta a agente: decide y actúa sola
- Velocidad: duplica cada 4-6 meses (METR)

### Bloque 3: Mentiras convincentes (~10 min) — IMPORTADO DE FARMACIA (sin cambios)

- Deepfakes electorales: Eslovaquia, 38 países, Hong Kong $25M
- Voz clonada: caso DeStefano (3 segundos → voz perfecta)
- **Demo Clorzapinex**: importado tal cual. Única edición: el texto de cabecera ya no dice "imaginad que estáis de prácticas en una farmacia" (no aplica al grupo). Ahora: "Imaginad que os llega esta consulta".
- "En medicina, una respuesta 'probable' puede ser una respuesta mortal."

### Bloque 4: Más allá de las mentiras (~7 min) — conservado de farmacia

- Jonathan Gavalas (36 años, Gemini, muerte)
- o1: hizo trampa en ajedrez sin que nadie se lo dijera
- o3: 79/100 saboteó su propio apagado
- OpenClaw: ignoró 3 órdenes de parar (Meta)
- 16 modelos chantajean cuando creen que van a ser reemplazados (Anthropic)
- Cierre: "Nadie programó estos comportamientos. Optimizan tareas, a veces contra nosotros."

### Bloque 5: Cuando la IA se equivoca en imagen (~8 min) ★ REESCRITO

- **Shortcut learning**: Zech et al. 2018 — IA que detectaba neumonía por marcadores del hospital.
- **Sesgo demográfico**: Seyyed-Kalantari et al. 2021 — infradiagnóstico en pacientes negros, mujeres, renta baja.
- Cierre: "Una IA convencida nunca dice 'no sé'. Vosotros sí."

**Notas de cambios**:

- Slide OOD (GE → Siemens → dosis reducida) eliminada — cifras eran ilustrativas.
- Slide "Cuando la IA inventa lesiones" (alucinación RM) eliminada.

### Bloque 6: IA en imagen médica - lo que os toca (~8 min) ★ REESCRITO

- **Hinton revisitado**: dónde sí funciona la IA (mamografía, Viz.ai, IDx-DR, +800 FDA-approved) vs dónde no (contexto clínico, hallazgos incidentales, pacientes atípicos, dudar, trato humano, responsabilidad).
- **Vuestro rol real**: antes / durante / después / siempre.
- **"El último filtro eres tú"**: no os sustituye una IA, os sustituye quien sepa usarla Y cuestionarla.

### Bloque 7: Qué podéis hacer (~8 min) — conservado con ajustes

- Sesgos cognitivos: normalidad, exponencial, optimismo, "ciencia ficción"
- PauseAI: moratoria, no prohibición. Precedentes (ozono, nuclear, armas químicas)
- 5 acciones: informaos, hablad, verificad, no compartáis datos sensibles (imágenes médicas incluidas), exigid regulación
- Cierre: "Vais a entrar en un mundo donde la IA ya está en el PACS, el mamógrafo, la TC de urgencias..."

### Bloque 8: Preguntas (~7 min) — conservado

- Preguntas preparadas para lanzar si nadie pregunta (adaptadas a imagen)
- QR code a pauseai.es
- Contacto

## Interactive Moments (3 planned)

1. **Bloque 1** (~min 2): Poll IA para estudiar + demo deepfake robots + Lucía Velasco
2. **Bloque 3** (~min 18): Demo Clorzapinex — las IAs inventan un fármaco con total confianza
3. **Bloque 7** (~min 42): "¿Cuántos habéis pensado 'esto suena a ciencia ficción'?"

## TODOs Before Presentation

### Scaffolding / reescritura (hecho)

- [x] **Crear** `slides/00-hinton.md` (cita Hinton + reality check)
- [x] **Reescribir** `slides/03-cuando-la-ia-falla.md` (shortcut, Seyyed-Kalantari, OOD, alucinación RM)
- [x] **Reescribir** `slides/05-ia-y-salud.md` (Hinton revisitado, rol técnico, uso dual, último filtro)
- [x] **Retocar** `slides/01-apertura.md` (índice actualizado)
- [x] **Retocar** `slides/04-cuando-la-ia-dana.md` (título + slide cierre "optimizan contra nosotros")
- [x] **Retocar** `slides/06-que-podeis-hacer.md` (acción 4 con imágenes, cierre con PACS/TC)
- [x] **Retocar** `slides/07-preguntas.md` (preguntas de backup específicas de imagen)
- [x] Bloque 2 sin cambios — FDA-approved se desarrolla en Bloque 5 (evitar duplicación)

### Verificación de fuentes (pendiente)

- [ ] Cita exacta Hinton 2016 (Machine Learning and the Market for Intelligence, Toronto) — vídeo/audio
- [ ] Zech et al. 2018, PLOS Medicine (shortcut learning)
- [ ] Seyyed-Kalantari et al. 2021, Nature Medicine (underdiagnosis bias)
- [ ] Finlayson et al. 2019, Science (adversarial examples médicos)
- [ ] Schwarz et al. 2019, NEJM (reconstrucción facial desde RM)
- [ ] Muckley / Antun (alucinaciones en reconstrucción RM)
- [ ] FDA list of AI/ML-enabled medical devices — cifra actual (ahora "+800, 2025")
- [ ] Déficit de radiólogos 2026 (SERAM / ESR / ACR)
- [ ] Cifras slide OOD (GE → Siemens → dosis) — son ilustrativas, buscar estudio concreto o marcar "ejemplo"

### Preparación

- [ ] Preparar demo/capturas de IA fallando en imagen médica (shortcut learning en vivo o LLM describiendo placa con errores)
- [ ] Generar QR code a pauseai.es
- [ ] Verificar que datos/cifras siguen vigentes a fecha de abril 2026
- [ ] Confirmar fecha exacta con Fundación Albor

## Key Sources

### Hinton prediction

- Hinton, Machine Learning and the Market for Intelligence, 2016 (Toronto) — "stop training radiologists"
- Follow-ups 2017-2023: múltiples artículos sobre por qué la predicción falló (Langlotz, Topol, etc.)

### AI in Medical Imaging — Failures

- Zech et al. 2018, PLOS Medicine — shortcut learning hospital logo / pneumonia detection
- Seyyed-Kalantari et al. 2021, Nature Medicine — underdiagnosis bias in chest X-ray AI
- Finlayson et al. 2019 — adversarial examples en imagen médica
- DeGrave et al. 2021, Nature Machine Intelligence — shortcut learning in COVID-19 chest X-ray AI

### FDA-Approved AI in Imaging

- FDA list of AI/ML-enabled medical devices (>800 aprobados, mayoría radiología)
- Aidoc, Viz.ai, IDx-DR, Arterys, etc.

### Dual Use / Privacy

- Schwarz et al. 2019 — reconstrucción de caras desde RM cerebral
- Deanonimización de datasets médicos públicos

### Chatbot Incidents (conservado)

- Gemini/Gavalas (TIME): https://time.com/7382406/gemini-suicide-lawsuit-death/
- Gemini/Gavalas (Guardian): https://www.theguardian.com/technology/2026/mar/04/gemini-chatbot-google-jonathan-gavalas

### Deepfakes & Voice Cloning (conservado como ejemplo general si se mantiene Bloque 1 como intro)

- Slovakia election deepfake
- DeStefano testimony
- Hong Kong CFO deepfake: $25M fraud case

### AI Misalignment (conservado)

- Anthropic agentic misalignment: https://www.anthropic.com/research/agentic-misalignment
- OpenClaw: https://en.wikipedia.org/wiki/OpenClaw

### Employment

- Dario Amodei interviews on junior job displacement
- WEF Future of Jobs Report: 92 million displaced by 2030
- Langlotz "Will AI replace radiologists?" — respuesta desde la profesión

### PauseAI

- https://pauseai.info / https://pauseai.es
- https://superintelligence-statement.org
- https://humanstatement.org
