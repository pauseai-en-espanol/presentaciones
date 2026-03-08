# Plan de Material Gráfico — Presentación Riesgos IA

## Estado: EN PROGRESO (actualizado 2026-03-08)

### Completado

- [x] QR code generado → `public/qr-pauseai.png`
- [x] Directorios creados: `public/fotos/`, `public/screenshots/`
- [x] Apertura reestructurada: 3 slides (¿Es real o es IA? → ¿Cuál es real? → Reveal Lucía Velasco)
- [x] Layouts con placeholder de foto: Russell, Hinton, Bengio, Amodei, LeCun (grandes)
- [x] Mini-avatares placeholder: Altman, Page, Musk, Sutskever
- [x] Summer Yue foto placeholder en OpenClaw slide
- [x] Jan Leike foto placeholder en Superalignment slide
- [x] QR añadido a slide de preguntas (bloque 8)
- [x] QR añadido a "5 cosas" → item 4 (bloque 7)
- [x] Screenshot placeholders: Eslovaquia, Gavalas (Guardian), Grok (Rolling Stone)
- [x] AI Safety Clock screenshot placeholder

### Pendiente

- [x] Descargar/añadir fotos reales de expertos a `public/fotos/`
- [x] Descargar/añadir screenshots de prensa a `public/screenshots/`
- [ ] Descargar/añadir gráfico AI Safety Clock a `public/screenshots/`
- [ ] Imagen ozono NASA para bloque 7
- [x] Localizar vídeo fake exacto: https://www.bilibili.com/video/BV1QTZCBSEz7/ (oukanghong)
- [x] Confirmar tweet de Lucía Velasco (buscar en X manualmente, posiblemente borrado)
- [ ] Foto de Dani Lupión (debe proporcionarla)
- [x] Decidir formato de vídeos (embed vs link externo)

## Apertura — Demo "¿Es real o es IA?" (DECISIÓN TOMADA)

La apertura usa DOS vídeos en secuencia para demostrar la susceptibilidad humana a los deepfakes:

1. **Vídeo REAL de robots militares chinos** (se muestra primero, generando duda)
   - Fuente: https://www.youtube.com/watch?v=RuEEOUjT-N0
   - Objetivo: que la audiencia piense "esto parece falso" o dude
   - Idealmente sin marca de agua

2. **Vídeo FAKE (CGI) de robots militares** que Lucía Velasco compartió como real
   - **Creador**: usuario de Bilibili "oukanghong", subido 17 feb 2026
   - **URL original**: https://www.bilibili.com/video/BV1QTZCBSEz7/
   - **Título original**: "宇树机器人实弹射击场景" (Unitree Robot Live-fire Shooting Scene)
   - El propio creador puso disclaimer en rojo diciendo que era IA y se quejó de que la gente lo compartía como real
   - Los robots están modelados sobre Unitree G1
   - Lucía Velasco (@\_LuciaVelasco) lo compartió el 19 de feb con "Terrorífico. El coste de la guerra va a ser marginal"
   - **Tweet**: posiblemente borrado. Perfil: https://x.com/_LuciaVelasco — buscar manualmente
   - **Fact-checks**: France 24 (5 mar), BOOM Live, MVS Noticias (mismo día 19 feb), SCMP
   - Contexto: Lucía Velasco es Co-Chair de GPAI, ex-directora ONTSI, asesora ONU
   - IMPORTANTE: No se trata de demonizarla. El punto es mostrar que TODOS somos susceptibles, incluso expertos. Es un ejemplo perfecto y cercano para la audiencia española.

**Mecánica de la apertura:**

- Mostrar ambos vídeos (orden por decidir)
- Preguntar "¿cuál es real y cuál es falso?"
- Revelar: incluso una experta española en tecnología compartió el fake como real
- Transición natural a "si una experta puede caer, todos podemos"

## Inventario completo de assets (18 items)

### Fotos de expertos (7 fotos grandes + 4 mini-avatares)

**Slides individuales (foto grande, ~200-300px):**
| Persona | Slide | Fuente |
|---------|-------|--------|
| Stuart Russell | Bloque 5 | Wikipedia: https://en.wikipedia.org/wiki/Stuart_J._Russell — o foto de PauseCon Bruselas |
| Geoffrey Hinton | Bloque 5 | Wikipedia: https://en.wikipedia.org/wiki/Geoffrey_Hinton — preferiblemente foto Nobel |
| Yoshua Bengio | Bloque 5 | Wikipedia: https://en.wikipedia.org/wiki/Yoshua_Bengio |
| Dario Amodei | Bloque 5 | Wikipedia: https://en.wikipedia.org/wiki/Dario_Amodei |
| Yann LeCun | Bloque 5 | Wikipedia: https://en.wikipedia.org/wiki/Yann_LeCun |
| Jan Leike | Bloque 4 (Superalignment) | Prensa tech / LinkedIn |
| Summer Yue | Bloque 4 (OpenClaw) | Business Insider / LinkedIn / Meta press |

**Mini-avatares (~48px circular) para slide "Así piensan":**
| Persona | Fuente |
|---------|--------|
| Sam Altman | Wikipedia: https://en.wikipedia.org/wiki/Sam_Altman |
| Larry Page | Wikipedia: https://en.wikipedia.org/wiki/Larry_Page |
| Elon Musk | Wikipedia: https://en.wikipedia.org/wiki/Elon_Musk |
| Ilya Sutskever | Wikipedia: https://en.wikipedia.org/wiki/Ilya_Sutskever |

### Capturas de prensa / screenshots (3)

| Caso                          | Slide    | Fuente                                                                                                                                                                                                                                           |
| ----------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Eslovaquia 2023               | Bloque 3 | Titular AP/Reuters/El País sobre deepfake electoral eslovaco                                                                                                                                                                                     |
| Jonathan Gavalas              | Bloque 3 | The Guardian: https://www.theguardian.com/technology/2026/mar/04/gemini-chatbot-google-jonathan-gavalas                                                                                                                                          |
| Grok (MechaHitler + imágenes) | Bloque 3 | Rolling Stone: https://www.rollingstone.com/culture/culture-news/elon-musk-grok-chatbot-antisemitic-posts-1235381165/ / Reuters: https://www.reuters.com/legal/litigation/elon-musks-grok-faces-global-scrutiny-sexualised-ai-photos-2026-02-17/ |

### Gráficos institucionales (2)

| Gráfico                       | Slide    | Fuente                                                                           |
| ----------------------------- | -------- | -------------------------------------------------------------------------------- |
| AI Safety Clock               | Bloque 5 | IMD: https://www.imd.org/centers/digital-ai-transformation-center/aisafetyclock/ |
| Capa de ozono (antes/después) | Bloque 7 | NASA Ozone Watch: https://ozonewatch.gsfc.nasa.gov/ (dominio público)            |

### QR Code (1)

- Generar QR apuntando a pauseai.es
- Guardar en public/qr-pauseai.png
- Usar en slide de preguntas (bloque 8) y posiblemente en "5 cosas" (bloque 7)

### Foto del ponente (1)

- Foto de Dani Lupión para la slide de intro personal (slide 3)
- Dani debe proporcionarla

### Vídeos (2-3)

1. **Apertura: Vídeos real vs fake de robots militares** (ver sección arriba)
2. **Hinton Nobel speech** (15-20s) — Bloque 5, slide de Hinton
   - Nobel Prize YouTube channel
3. **Opcional: clip deepfake visual** (Tom Cruise @deeptomcruise, 10s) — Bloque 2

### Slides que NO necesitan imágenes (ya funcionan bien)

- SAT 2055→2023 (números grandes)
- De herramienta a agente (tarjetas)
- 38 países (tarjetas por país)
- Estafas voz clonada (stats cards)
- Empleo (números grandes)
- o3 saboteó su apagado (79/100 gigante)
- Chantaje (barras naranjas)
- Fingen portarse bien (6.5% vs 55%)
- El bozal y el lobo (tarjetas)
- Desalineación invisible (analogía)
- p(doom) (barras)
- Avión (momento retórico)
- RSP v3 (verde→rojo)
- Sesgos cognitivos (4 tarjetas)
- La carrera sin frenos (tarjetas)
- 5 cosas (lista numerada)
- Su generación (momento emocional)
- Cierre circular (interactivo)

## Notas de implementación

- Las fotos de expertos van en public/fotos/
- Los screenshots van en public/screenshots/
- Los vídeos pueden embeberse o linkarse (decidir formato)
- El QR se genera y guarda en public/qr-pauseai.png
- Cada foto necesita reestructurar el layout de su slide (añadir columna o header con foto)
