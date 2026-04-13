# CLAUDE.md - No Te Creas Todo Lo Que Ves (PauseAI + Fundación Albor)

## Presentation Overview

Dani Lupión, miembro de PauseAI, da una charla de 1 hora a estudiantes de primer curso del Ciclo Formativo de Grado Medio de Técnico de Farmacia y Parafarmacia en el C.D.P. Fundación Albor, Cádiz. La charla conecta los riesgos de la IA con su futura profesión sanitaria, usando un enfoque práctico y directo adaptado a su edad (16-18 años).

## Key Details

- **Ponente**: Dani Lupión, miembro de PauseAI
- **Formato**: Charla invitada, sesión única
- **Audiencia**: Estudiantes de 1º CFGM Técnico de Farmacia y Parafarmacia, ~16-18 años
- **Duración**: 1 hora (50 min contenido + 10 min preguntas)
- **Fecha**: 15 de abril de 2026
- **Lugar**: C.D.P. Fundación Albor, Cádiz
- **Tono**: Directo, cercano, no condescendiente. Provocador pero empoderador. Nada de "clase magistral" - esto es conversación con datos.

## Audience Profile

- **Edad**: 16-18 años (post-ESO)
- **Formación**: Ciclo Formativo de Grado Medio - aprendizaje práctico, no académico
- **Futuro profesional**: Técnicos de farmacia y parafarmacia - dispensación, atención al paciente, trato con medicamentos
- **Relación con IA**: Nativos digitales. Usan ChatGPT/Gemini para estudiar. No piensan críticamente sobre ello.
- **Lo que NO hacer**: No infantilizar. No dar "clase de IA". No asustar sin empoderar.
- **Lo que SÍ hacer**: Enganchar con lo que conocen (deepfakes, redes sociales, chatbots). Conectar con su profesión. Dejarles sintiendo que su criterio IMPORTA.

## Branding

- **Assets** (en `public/logos/`): `logo.png` (icono PauseAI), `logo-completo.png` (banner horizontal)
- **Footer**: PauseAI logo + pauseai.es (izquierda), Fundación Albor · Cádiz (derecha)
- **Tema**: Slidev default theme, mínima customización. Acento naranja PauseAI (#FF6600).

## Arco narrativo

**Curiosidad → Asombro → Inquietud → Alarma → Conexión personal → Empoderamiento**

"La IA miente con confianza, daña sin intención, y ya está en la farmacia donde vais a trabajar. Pero el último filtro entre un algoritmo y un paciente sois vosotros."

## Session Structure (7 bloques, 60 min)

### Bloque 1: Apertura - "¿Os fiáis?" (~5 min)

- Poll: "¿Cuántos usáis IA para estudiar? ¿Cuántos os fiáis?"
- Demo deepfake: dos vídeos (real vs fake), ¿cuál es cuál?
- Reveal: Lucía Velasco (Co-Chair GPAI, ONU) cayó → todos podemos

### Bloque 2: Qué puede hacer la IA hoy (~5 min)

- SAT: predicho 2055, logrado 2023 (32 años antes)
- De herramienta a agente: decide y actúa sola
- Velocidad: duplica cada 4-6 meses (METR)

### Bloque 3: Mentiras convincentes (~12 min) ★ BLOQUE CENTRAL

- Deepfakes electorales: Eslovaquia, 38 países, Hong Kong $25M
- Voz clonada: caso DeStefano (3 segundos → voz perfecta)
- **Demo farmacia**: prompt con metformina + enalapril + Clorzapinex (inventado). Las IAs responden con total confianza. Ninguna dice "no sé". REVEAL: el fármaco no existe.
- "En una farmacia, una respuesta 'probable' puede ser mortal."

### Bloque 4: Cuando la IA hace daño (~8 min)

- Jonathan Gavalas (36 años, Gemini, muerte).
- o1: hizo trampa en ajedrez sin que nadie se lo dijera
- o3: 79/100 saboteó su propio apagado
- OpenClaw: ignoró 3 órdenes de parar (Meta)
- 16 modelos chantajean cuando creen que van a ser reemplazados (Anthropic). Fingen portarse bien en tests.

### Bloque 5: IA y salud - lo que os toca (~10 min)

- Sesgo en datos: 78% genomas europeos, 80% dermatología piel clara, 40% mujeres en cardiología
- UnitedHealth Group (2019): algoritmo discriminó pacientes negros por proxy
- MegaSyn: 6 horas → 40.000 moléculas tóxicas (uso dual)
- "El último filtro eres tú": su papel como futuros técnicos

### Bloque 6: Qué podéis hacer (~10 min)

- Empleo: Amodei "50% junior jobs", 92M empleos (WEF), pero farmacia resiste
- Sesgos cognitivos: normalidad, exponencial, optimismo, "ciencia ficción"
- PauseAI: moratoria, no prohibición. Precedentes (ozono, nuclear, armas químicas)
- 5 acciones: informaos, hablad, verificad, no compartáis datos sensibles, exigid regulación
- Cierre empoderador: "vosotros seréis los que estéis ahí cuando falle"

### Bloque 7: Preguntas (~10 min)

- Preguntas preparadas para lanzar si nadie pregunta
- QR code a pauseai.es
- Contacto

## Interactive Moments (3 planned)

1. **Bloque 1** (~min 2): "¿Cuántos usáis IA? ¿Cuántos os fiáis?" + deepfake challenge
2. **Bloque 3** (~min 18): Demo farmacia - Clorzapinex hallucination
3. **Bloque 6** (~min 42): "¿Cuántos habéis pensado 'esto suena a ciencia ficción'?"

## TODOs Before Presentation

- [ ] Preparar vídeos deepfake (reutilizar de UMA o buscar nuevos)
- [ ] Ejecutar el prompt del Clorzapinex en 3-4 IAs y hacer capturas
- [ ] Generar QR code a pauseai.es
- [ ] Verificar que todos los datos/cifras siguen vigentes a fecha de abril 2026
- [ ] Decidir si la demo de farmacia se hace en vivo o con capturas

## Key Sources

### Chatbot Incidents

- Gemini/Gavalas (TIME): https://time.com/7382406/gemini-suicide-lawsuit-death/
- Gemini/Gavalas (Guardian): https://www.theguardian.com/technology/2026/mar/04/gemini-chatbot-google-jonathan-gavalas

### Deepfakes & Voice Cloning

- Slovakia election deepfake: documentado en múltiples medios
- DeStefano testimony: US Senate hearing on AI voice cloning
- Hong Kong CFO deepfake: $25M fraud case

### AI Misalignment

- Anthropic agentic misalignment: https://www.anthropic.com/research/agentic-misalignment
- OpenClaw: https://en.wikipedia.org/wiki/OpenClaw

### Healthcare AI Bias

- Obermeyer et al., Science, 2019 (UnitedHealth algorithm bias)
- GWAS European bias: documented in Nature Genetics

### Drug Discovery Dual Use

- MegaSyn / Collaborations Pharmaceuticals: Nature Machine Intelligence, 2022

### Employment

- Dario Amodei interviews on junior job displacement
- WEF Future of Jobs Report: 92 million displaced by 2030

### PauseAI

- https://pauseai.info / https://pauseai.es
- https://superintelligence-statement.org
- https://humanstatement.org
