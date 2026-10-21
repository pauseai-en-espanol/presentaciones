# CLAUDE.md: Verano 2026: de la especulación a los hechos (Charlas PauseAI, en línea)

## Presentation Overview

Reedición en línea de la charla del Club Euronova (`../ia-fuera-sandbox-euronova-2026-10`), actualizada con lo que ha pasado desde el 2 de octubre. Título: «Verano 2026: de la especulación a los hechos» · Subtítulo: «La IA de frontera se sale del sandbox».

## Key Details

- **Ponente**: Dani Lupión, cofundador y secretario de PauseAI España, ingeniero de software con 20 años de experiencia
- **Fecha**: miércoles 21 de octubre de 2026, 20:00-21:00 (Madrid) · 19:00-20:00 (Canarias)
- **Lugar**: en línea, Google Meet. Evento de Luma de PauseAI en Español: https://luma.com/5gkszt0s
- **Formato**: 1 hora. Unos 40 min de charla y 20 de preguntas
- **Audiencia**: abierta, hispanohablante (puede haber gente de Latinoamérica). Se han apuntado a una charla de PauseAI: les preocupa el riesgo de la IA más que al público de Euronova, pero no conocen los detalles de los casos. Quieren saber qué pueden hacer
- **Idioma**: solo español (la versión de Euronova tenía inglés; aquí no se ha copiado)

## Diferencias con la versión de Euronova

- **Interacción por el chat**, no a mano alzada: «escribid en el chat A, B, C o D». Leer en voz alta algunas respuestas
- **Sin ganchos para empresas**: fuera los consejos de «el lunes en mi empresa» y la llamada a la acción para empresarios
- **Actualizada a 21 de octubre**: novedades en `research/novedades-incidentes.md` y `research/novedades-contexto.md`
- **Pantalla compartida**: letra grande, poco texto; los enlaces se pegan también en el chat
- Sin logo de sede en el pie

## Estilo (REQUISITO DURO)

- **Que no suene a texto generado por IA.** Lenguaje normal, como hablaría Dani. Frases cortas y directas, sin tono de folleto ni de titular.
- **Prohibidos los guiones largos y medios** (— y –) en slides, notas y cualquier texto de la charla. Usar punto, coma, dos puntos o paréntesis. Rangos: «de 6 a 12 meses», «2024-2026» (guion normal).
- Nada de muletillas típicas de IA: «no es X, es Y», tríadas retóricas, «en un mundo donde…», «la pregunta no es… sino…», negritas por todas partes, emojis.
- Citas en su original inglés literal en las notas del ponente.
- En cada caso, decir también lo que no pasó (era una prueba, no hubo daños). La credibilidad lo es todo.

## Research

- **Base**: `../ia-fuera-sandbox-euronova-2026-10/research/informe.md` (consolidado 2026-09-28) y su `beat-sheet.md`.
- **Novedades desde el 2 de octubre**: `research/novedades-incidentes.md` (incidentes, evaluaciones, capacidades) y `research/novedades-contexto.md` (voces, política, llamada a la acción). Salen del registro de noticias de Dani en `~/Workspace/aisafety-media` (`news/`, `sources/`, `claims/claims.md`).

## Phase status

- **2026-10-18**: directorio creado copiando la versión de Euronova (solo ES). Pie, portada, QR y enlaces apuntan ya a esta charla. Compila con `pnpm build`.
- **2026-10-18**: research de novedades (2 agentes) y `research/beat-sheet.md` v1.
- **2026-10-18**: decisiones de Dani (45 + 15 min, pregunta del 29-N, Team Human, contacto danilupion@pauseai.es, moderación del chat) y beat sheet v2 aplicado en las slides: «Cuatro casos más, todos de junio», «Cada versión, más difícil de vigilar» y Gowers nuevas; «¿Y los gobiernos?» y «Qué podéis hacer» rehechas; fuera «Más cerca del día a día». Revisado en capturas a 1280×720. Guía del chat en `research/chat-moderacion.md`. Pendiente de revisión por Dani.
- **2026-10-19**: v3 (ver el principio de `research/beat-sheet.md`). Nuevas: «Una flota de agentes» (Tencent), «Tanto código que git no da abasto» (Anthropic), «¿Y si solo hicieron lo que les pidieron?» con su respuesta («Nadie les pidió eso») y «Para cuando lo contéis». Ocultas con `hide: true`: «Ni ellos saben bien lo que hicieron» y «Desde dentro». Unos 46-47 min.
- **2026-10-20**: fuera «Para cuando lo contéis» (también su fila en `research/chat-moderacion.md`). «Ni ellos saben bien lo que hicieron» y «Desde dentro» vuelven a verse para que Dani elija qué quitar. Así, unos 50 min de charla. El libro de Yudkowsky y Soares y The AI Doc, en una slide propia con portadas («Para seguir», tras el cierre, como en la charla de AI 2027), en Fuentes (3 de 3) y en la guía del chat. «Qué podéis hacer»: iaenlasurnas.es en «Preguntad», «Uníos» y «Firmad» reescritas. «Preguntas»: columnas para Dani y para PauseAI España (contact@pauseai.es), con iconos de redes. Comprobaciones del día antes hechas (ver «Comprobar antes del 21» en el beat sheet); queda recomprobar la pausa de OpenAI y la ONU la mañana del 21. Fuentes revisadas: todos los enlaces que salen en las slides y las notas están en ellas. «Tanto código que git no da abasto» con el gráfico de cambios al día de Anthropic (`public/img/graficos/anthropic-cambios-al-dia.png`, imagen original del artículo); cifras corregidas: 30.401 es el récord de un día y ellos hablan de «10x». Enlace del artículo cambiado a `/research/` (el de `/engineering/` redirige).
- **2026-10-21**: v4 del bloque de Hugging Face (ver el principio de `research/beat-sheet.md`), contado como el vídeo de AI In Context: empieza por la víctima (16 de julio, cita de Thomas Wolf), dos slides nuevas tras «Se organizaron» («Por el grupo» y «El ataque») y el giro del corrector al final. Corregidos la leyenda de la cronología (OpenAI vio señales tres veces) y el 19 de julio (fue el 20). Citas comprobadas contra los PDF de METR y OpenAI. Revisado en capturas a 1280×720. Unos 54 min de charla; no se ha recortado nada (candidatos en el beat sheet).
- **2026-10-21**: segunda tanda de la v4 (lo que faltaba del plan; ver el beat sheet). «El tablón» enseña la bandera falsificada para que funcione el giro de «Por el grupo»; PHASEONE[big] pasa a «Se organizaron», que ahora conecta antes de atacar; «Sabían que no debían» con «Y no avisaron a nadie»; la cronología con nueve puntos, el 19 de julio dentro de OpenAI y los tres avisos encendidos en el clic 5. Comprobaciones de la mañana del 21 aplicadas: la pausa de OpenAI sigue según su web y en pantalla «Nadie de fuera puede comprobarlo»; 20 informes; informe del 20 de octubre en notas y Fuentes; ONU sin novedades. Vídeo de AI In Context en Fuentes. Hormigas y cierre en notas. Revisado en capturas a 1280×720. Unos 56 min de charla; no se ha recortado nada.
- **2026-10-21**: tercera tanda de la v4, solo notas. «El tablón»: cómo fabricaban la bandera (fallo de configuración, no un descifrado), con originales de METR y OpenAI y el aviso de que METR no fecha los mensajes del tablón anterior. «Sabían que no debían»: la cita de los 3 a 6 casos, con corte («alerting [...] humans»), porque el blog y el PDF de METR no dicen lo mismo. Sin cambios en pantalla ni en el tiempo.
- **2026-10-21**: retoques de Dani por la tarde. La frase de Amodei del principio dice «un enjambre [de agentes de IA]» (sin «así», que no se entendía sin contexto). «Lo que se predijo»: en pantalla, en vez de la pregunta, «En pocos segundos, intentad pensar cuántas ya han ocurrido» y «Esta lista nos va a acompañar en la presentación»; sin chat. «Se organizaron» con el foco en las cifras: 1.200 teóricamente aislados, 700 que participaron y los mensajes, en ese orden; PHASEONE[big] pasa a la voz. «Por el grupo» con dos clics (la orden y KAM1196A juntas, el giro). «El ataque» con dos clics y sin empezar vacía. «Sabían que no debían»: «3 se plantearon avisar» (METR, de 3 a 6). «Una flota de agentes» (Tencent), oculta con `hide: true` y fuera de la guía del chat. «Cuatro casos más, todos de junio» sin clic, con «Modelos internos…» y «de otra organización»; modelo y contexto de los cuatro en notas, leídos en OpenAI el 21. «Lo que tardaron en contarlo» más compacta para que la leyenda no pise el pie. «Y va cada vez más rápido» pasa a «Capacidades matemáticas para verlo en perspectiva», con un clic; Vals, a notas. «OpenAI ha pausado dos veces», oculta con `hide: true`. La cita de Sutskever acaba en «paneles solares y centros de datos». «Firmad»: fuera «Hay más en pauseai.es»; en su lugar, la de la superinteligencia y la Pro-Human (también en la guía del chat). «Uníos» pasa a «Uníos y hablad de lo que os preocupa». Fuera el último clic de «El caso Hugging Face» (las cifras, a notas) y de «Tareas imposibles, sin querer» (a voz). Revisado en capturas a 1280×720.

## TODOs antes de la charla

- [ ] Revisar las slides nuevas y cambiadas
- [x] Preguntas a mano alzada cambiadas por preguntas en el chat (en las notas)
- [x] Lista «Comprobar antes del 21» del beat sheet. La mañana del 21: la pausa de OpenAI (cambiar «A 18 de octubre» en «OpenAI ha pausado dos veces») y la ONU (21 oct)
- [ ] Pasar `research/chat-moderacion.md` a quien modere
- [x] Quitar `"unlisted": true` de `presentation.json` cuando la charla esté lista (20 oct)
- [x] Changeset (`pnpm release:note`, `@pauseai-es/landing`) antes de subirla (20 oct)

## Dev

```bash
cd presentations/ia-fuera-sandbox-charlas-pauseai-2026-10
pnpm dev      # puerto 3090
```
