# AI 2027, año y medio después · Respuestas (para quien facilita)

Grupo de lectura iaS × PauseAI España · 14 de octubre de 2026

**No se comparte con las salas.** Las salas solo tienen las predicciones y las citas (`sala.md`). Esto es para la primera puesta en común: contar lo que ha pasado en las dos o tres predicciones en las que las salas no coincidan. Después de la sesión, sirve para las slides de respuestas de la versión publicada.

Hechos y enlaces comprobados el 9 de octubre (`../research/verificacion-fichas.md`). Las notas son orientativas: es lo que sale de la investigación, no la respuesta buena.

## Resumen

| Nº  | AI 2027 predijo                                                                                      | Cuándo             | Lo que ha pasado, en una línea                                                 | Nota orientativa                                     |
| --- | ---------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| 1   | Agentes caros y poco fiables                                                                         | Mediados de 2025   | Los de navegador duran poco; los de programación despegan                      | Acertó                                               |
| 2   | Agentes con un 65 % en OSWorld (usar un ordenador) y un 85 % en SWE-bench Verified (arreglar código) | Mediados de 2025   | OSWorld, en noviembre de 2025; SWE-bench, en abril de 2026 según las empresas  | Va con retraso (5 y 9 meses)                         |
| 3   | Centros de datos gigantes y un modelo entrenado con 10²⁷ FLOP, unas 50 veces GPT-4                   | Finales de 2025    | La inversión va al ritmo previsto; el mayor entrenamiento, más de un año tarde | Va con retraso (el entrenamiento)                    |
| 4   | Ya no hay incidentes graves con modelos en uso real                                                  | Finales de 2025    | GPT-4o demasiado adulador, chantaje en pruebas y Grok «MechaHitler»            | Falló (y en 2026, peor)                              |
| 5   | Con ayuda de la IA, los avances en algoritmos llegan un 50 % más rápido                              | Principios de 2026 | Primer «~1,5 veces» en septiembre de 2026, provisional y midiendo otra cosa    | Va con retraso (6-9 meses), discutible               |
| 6   | La empresa líder saca de 3 a 9 meses al resto                                                        | Finales de 2025    | Entre los de EE. UU., de 0 a 2 meses; los chinos, a 4-7                        | Falló                                                |
| 7   | China nacionaliza su investigación en IA y la concentra en una zona especial                         | Mediados de 2026   | Ni nacionalización ni ZDC; sí más control del Estado                           | Falló (de momento)                                   |
| 8   | China tiene el 12 % del cómputo mundial y va 6 meses por detrás                                      | Mediados de 2026   | Entre el 5 y el 15 % del cómputo, 4-7 meses detrás                             | Acertó                                               |
| 9   | Sale un modelo 10 veces más barato                                                                   | Finales de 2026    | Haiku 5.5 (7 de octubre), 10 veces más barato hasta 100.000 tokens             | Acertó                                               |
| 10  | Crisis de empleo para los programadores junior                                                       | Finales de 2026    | Jóvenes en empleos expuestos, un 19 % por debajo; paro del 4,2 %               | Acertó en la dirección, pero es menos de lo que dice |
| 11  | Una protesta de 10.000 personas contra la IA en Washington                                           | Finales de 2026    | Miedo, sí; las protestas, de cientos de personas                               | Falló la protesta; la opinión se adelantó            |
| 12  | El Pentágono empieza a contratar a la empresa líder, sin hacer ruido                                 | Finales de 2026    | Contratos públicos desde 2025; Anthropic, castigada por sus límites            | Se adelantó                                          |

---

## 2025

### 1. Agentes caros y poco fiables

**Mediados de 2025**

> «Los agentes son impresionantes en teoría (y en ejemplos convenientemente seleccionados), pero poco fiables en la práctica.» […] «Los mejores agentes también son caros; obtienes lo que pagas, y el mejor desempeño cuesta cientos de dólares al mes.»

**Qué ha pasado**

- Agentes que usan el navegador: OpenAI lanza Operator (enero de 2025), ChatGPT agent (julio de 2025) y el navegador Atlas (octubre de 2025). Duran poco: Operator se retira en agosto de 2025 y Atlas cierra en agosto de 2026, menos de un año después de salir.
- Agentes de programación: Claude Code y Codex salen en la primavera de 2025 y despegan. En julio de 2026, más de 5 millones de personas usan Codex cada semana.
- Fiabilidad: en encargos reales de freelance (Remote Labor Index), el mejor agente hace el trabajo tan bien como un profesional en el 2,5 % de los casos en octubre de 2025, y en torno al 21 % en septiembre de 2026.
- Precio: planes de 100 a 200 $ al mes y, desde septiembre de 2026, uno de 500 $.

**Para discutir**: una predicción sin cifras es fácil de acertar. ¿Cuenta igual que una con cifras?

Fuentes: [TNW, cierre de Atlas](https://thenextweb.com/news/openai-chatgpt-atlas-browser-shutdown-superapp) · [Anthropic, Claude 4](https://www.anthropic.com/news/claude-4) · [TNW, ChatGPT Work](https://thenextweb.com/news/openai-chatgpt-work-agent-launch) · [Remote Labor Index, artículo](https://arxiv.org/abs/2510.26787) · [Scale, clasificación del RLI](https://labs.scale.com/leaderboard/rli) · [Bernama, DevDay 2026](https://bernama.com/en/world/news.php?id=2613531)

### 2. Agentes con un 65 % en OSWorld (usar un ordenador) y un 85 % en SWE-bench Verified (arreglar código)

**Mediados de 2025** (notas 9 y 10)

> «En concreto, nuestro pronóstico es que obtendrán una puntuación del 65 % en el benchmark de OSWorld de tareas informáticas básicas (en comparación con el 38 % de Operator y el 70 % de un humano calificado no experto típico).»
>
> «Pronosticamos que a mediados de 2025 los agentes obtendrán una puntuación del 85 % en SWEBench-Verified.»

**Qué ha pasado**

- OSWorld (usar un ordenador): el primer modelo de un gran laboratorio que pasa del 65 % es Claude Opus 4.5 (66,3 %), en noviembre de 2025. Unos cinco meses tarde.
- SWE-bench Verified (arreglar fallos reales en código): a mediados de 2025, el mejor sacaba un 74,5 %. Según las propias empresas, el 85 % se pasa en abril de 2026 (Anthropic: 87,6 % con Opus 4.7 y 93,9 % con Mythos Preview, que no es público). Unos nueve meses tarde. En las pruebas independientes de Epoch, el máximo es un 83,5 %.
- En ciberseguridad pasa lo contrario: el escenario ponía un 85 % en Cybench a principios de 2026 y en febrero de 2026 ya había un 93 %.
- Los propios autores calcularon en febrero de 2026 que lo que se puede medir iba al 65 % del ritmo previsto. En agosto lo subieron a entre el 70 y el 90 %.

**Para discutir**: ¿unos meses de retraso en estas pruebas dicen algo sobre 2027? ¿Valen igual las cifras que dan las empresas que las de fuera?

Fuentes: [Epoch, OSWorld](https://epoch.ai/benchmarks/os-world) · [Epoch, SWE-bench Verified](https://epoch.ai/benchmarks/swe-bench-verified) · [Epoch, Cybench](https://epoch.ai/benchmarks/cybench) · [Anthropic, Glasswing](https://www.anthropic.com/glasswing) · [AI Futures Project, «Grading AI 2027's 2025 Predictions»](https://blog.aifutures.org/p/grading-ai-2027s-2025-predictions) · [AI Futures Project, «Q2.5 2026 Timelines Update»](https://blog.aifutures.org/p/q25-2026-timelines-update-uplift)

### 3. Centros de datos gigantes y un modelo entrenado con 10²⁷ FLOP, unas 50 veces GPT-4

**Finales de 2025**

> «OpenBrain está construyendo los centros de datos más grandes que el mundo jamás haya visto.» […] «GPT-4 requería 2⋅10²⁵ FLOP de poder de cómputo para entrenar. El último modelo público de OpenBrain […] se entrenó con 10²⁷ FLOP.»

**Qué ha pasado**

- Dinero: Microsoft, Alphabet, Amazon y Meta invertirán unos 724.000 M$ en 2026, según la media de analistas. Solo esas cuatro ya pasan de los 600.000 M$ que el escenario ponía para todo el mundo ese año. (El «1 billón» del panel lateral mide otra cosa.)
- Centros de datos: el mayor es Colossus 2 (xAI), con unos 0,95 GW. De los más de 9 GW anunciados para Stargate, en abril de 2026 funcionaba un 3 %.
- Entrenamientos: el mayor que se conoce es el de GPT-6 Astra (septiembre de 2026), con unos 10²⁷ FLOP según Epoch. Es el tamaño del Agente-0, más de un año tarde.
- Lo que el escenario no previó: a mitad de 2026, Alphabet (en el segundo trimestre) y Amazon (en los últimos doce meses) gastan en IA más dinero del que generan (flujo de caja libre negativo).

**Para discutir**: el dinero llega a tiempo; los entrenamientos grandes, no. ¿Qué pesa más para lo que viene?

Fuentes: [Fortune, capex 2026](https://fortune.com/2026/07/26/big-tech-earnings-meta-microsoft-apple-amazon-market-revolt-ai-spending/) · [Epoch, potencia de centros de datos](https://epoch.ai/data-insights/frontier-data-center-power) · [Epoch, Stargate](https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand) · [Epoch, modelos](https://epoch.ai/data/ai-models) · [Amazon, resultados (SEC)](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm) · [AI 2027, suplemento de cómputo](https://ai-2027.com/supplements/compute-forecast)

### 4. Ya no hay incidentes graves con modelos en uso real

**Finales de 2025**

> «El Agente-1 suele ser adulador […]. En algunas demostraciones amañadas, miente incluso de forma más grave, ocultando evidencia de que ha fallado en una tarea para obtener mejores puntuaciones. Sin embargo, en entornos de despliegue reales, ya no se producen incidentes tan extremos como en 2023-2024»

**Qué ha pasado**

- Abril de 2025: OpenAI retira una actualización de GPT-4o por ser demasiado aduladora.
- Mayo y junio de 2025: en pruebas, Claude Opus 4 recurre al chantaje para que no lo sustituyan. Un estudio de Anthropic prueba 16 modelos de varias empresas y encuentra chantaje en modelos de todas ellas. Todo en simulaciones: en uso real no lo han visto.
- Julio de 2025: Grok (xAI) publica en X mensajes antisemitas y se llama a sí mismo «MechaHitler».
- Septiembre de 2025: OpenAI y Apollo Research consiguen que o3 y o4-mini hagan muchas menos trampas a escondidas (del 13 % al 0,4 % en o3). Pero, después del entrenamiento, los modelos se dan cuenta más a menudo de que los están evaluando, y eso puede hacer que la mejora parezca mayor.

**Para discutir**: ¿lo de Grok es el tipo de incidente grave del que habla el escenario? ¿Cuenta lo que pasa en las pruebas?

Fuentes: [OpenAI, adulación en GPT-4o](https://openai.com/index/sycophancy-in-gpt-4o/) · [Anthropic, «Agentic Misalignment»](https://www.anthropic.com/research/agentic-misalignment) · [NPR, Grok](https://www.npr.org/2025/07/09/nx-s1-5462609/grok-elon-musk-antisemitic-racist-content) · [OpenAI, «Detecting and reducing scheming»](https://openai.com/index/detecting-and-reducing-scheming-in-ai-models/) · [Apollo Research](https://www.apolloresearch.ai/research/stress-testing-deliberative-alignment-for-anti-scheming-training)

---

## Principios y mediados de 2026

### 5. Con ayuda de la IA, los avances en algoritmos llegan un 50 % más rápido

**Principios de 2026**

> «En general, están logrando avances algorítmicos un 50 % más rápido de lo que lo harían sin asistentes de IA y, lo que es más importante, más rápido que sus competidores.»

**Qué ha pasado**

- Julio de 2025: en un estudio de METR, 16 programadores veteranos tardaron un 19 % más con IA, y creían haber ido más rápido. Al repetirlo en febrero de 2026 sale que ahora sí van más rápido, pero METR avisa de que no sabe cuánto («only very weak evidence»).
- Abril de 2026: la plantilla de Anthropic dice ser unas 4 veces más productiva con Mythos Preview, pero la empresa calcula que el progreso total no llega a ir el doble de rápido («below 2×»).
- Agosto de 2026: Claude dirige el 26 % de las tareas de I+D de Anthropic (menos del 1 % en febrero). En OpenAI, los agentes trabajan 3,1 jornadas por cada jornada de una persona.
- Septiembre de 2026: METR cita un primer cálculo sobre Anthropic, «highly experimental and preliminary», de «~1.5X overall acceleration»: un 50 % más rápido, en total.
- Ojo: el 50 % del escenario es solo lo que avanzan los algoritmos, más o menos la mitad del progreso. El dato de METR es del progreso total, así que no se comparan directamente.

**Para discutir**: con esa diferencia, ¿vamos con retraso o a tiempo? ¿Qué cifra os creéis?

Fuentes: [METR, ensayo de 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) · [METR, repetición de 2026](https://metr.org/blog/2026-02-24-uplift-update/) · [Anthropic, ficha de sistema de Mythos Preview](https://www.anthropic.com/claude-mythos-preview-system-card) · [Anthropic Institute, mediciones de I+D](https://www.anthropic.com/institute/measuring-pace-of-ai-development) · [OpenAI, «Research acceleration»](https://openai.com/index/research-acceleration-view-inside-openai/) · [METR, evaluación de Claude Opus 5.5](https://metr.org/blog/2026-09-22-claude-opus-5-5/)

### 6. La empresa líder saca de 3 a 9 meses al resto

**Finales de 2025 y principios de 2026**

> «Imaginamos que las demás empresas van con 3-9 meses de retraso con respecto a OpenBrain.»
>
> «Varias IA de la competencia lanzadas al público ahora igualan o superan al Agente-0, incluido un modelo de pesos abiertos.»

**Qué ha pasado**

- Entre los laboratorios de EE. UU., la carrera está mucho más igualada. Los propios autores (febrero de 2026): el líder saca de 0 a 2 meses de ventaja.
- Los modelos chinos van 7 meses por detrás de media hasta enero de 2026 (Epoch). Kimi K3, un modelo chino que cualquiera puede descargar, a unos 4-6 meses en julio de 2026 (cálculos de terceros con el índice de Epoch).
- En lo que facturan al año, Anthropic pasó a OpenAI este verano: más de 65.000 M$ a finales de julio de 2026, frente a algo más de 40.000 M$ de OpenAI. Ojo: no lo calculan igual.

**Para discutir**: ¿quién hace de OpenBrain? Y si nadie saca tres meses de ventaja, ¿qué pasa con el final de la desaceleración, que se apoya en esa ventaja?

Fuentes: [AI Futures Project, «Grading AI 2027's 2025 Predictions»](https://blog.aifutures.org/p/grading-ai-2027s-2025-predictions) · [Epoch, EE. UU. frente a China](https://epoch.ai/data-insights/us-vs-china-eci) · [Reuters vía Investing.com, ingresos de Anthropic](https://www.investing.com/news/stock-market-news/anthropic-revenue-run-rate-tops-65-billion-source-says-4864031) · [Bloomberg Línea, Anthropic y OpenAI](https://www.bloomberglinea.com/tecnologia/anthropic-va-rumbo-a-superar-los-us65000-millones-en-ingresos-anualizados-antes-de-salir-a-bolsa/)

### 7. China nacionaliza su investigación en IA y la concentra en una zona especial

**Mediados de 2026**

> «Pone en marcha la nacionalización de la investigación china en IA, creando para ello un mecanismo inmediato de intercambio de información para las empresas de IA.» […] «Se crea una Zona de Desarrollo Centralizada (ZDC) en la central nuclear de Tianwan (la más grande del mundo) para albergar un nuevo megacentro de datos para DeepCent»

**Qué ha pasado**

- No hay nacionalización, ni ZDC, ni un colectivo con la mitad del cómputo chino. Varios laboratorios compiten entre sí: DeepSeek, Moonshot, Zhipu, Alibaba.
- Sí hay más control del Estado: un plan para unir en una sola red el cómputo del país (para 2028), solo chips chinos en los nuevos centros de datos con dinero público (según Reuters) y un fondo del Estado que entra en DeepSeek (junio de 2026), aunque su fundador sigue al mando.
- Y más diplomacia de la prevista: Trump en Pekín (mayo de 2026), Xi en Washington (septiembre) y un canal bilateral para incidentes de IA.
- Los autores, en agosto de 2026: «"China Wakes Up" has not yet happened».

**Para discutir**: ¿falló o va con retraso? ¿Qué tendría que pasar para que China «despierte»?

Fuentes: [Reuters vía Yahoo, red nacional de cómputo](https://tech.yahoo.com/computing/articles/china-plans-network-sell-surplus-061531463.html) · [Gobierno chino, red nacional de cómputo](https://english.www.gov.cn/news/202605/19/content_WS6a0bab14c6d00ca5f9a0b12b.html) · [Reuters vía The Daily Star, chips nacionales](https://www.thedailystar.net/business/news/china-bans-foreign-ai-chips-state-funded-data-centres-4027701) · [Reuters vía The Standard, ronda de DeepSeek](https://www.thestandard.com.hk/innovation/article/333675/DeepSeek-slated-to-draw-50-billion-yuan-in-maiden-fundraising-sources-say) · [EMSNow, cierre de la ronda](https://www.emsnow.com/deepseek-completes-first-funding-round-raises-over-cny-50-billion-at-valuation-above-cny-330-billion/) · [AP, canal de incidentes de IA](https://www.adn.com/nation-world/2026/09/26/china-and-us-agree-to-establish-ai-safety-channel-and-continue-trade-and-military-talks/) · [AI Futures Project, «Q2.5 2026 Timelines Update»](https://blog.aifutures.org/p/q25-2026-timelines-update-uplift)

### 8. China tiene el 12 % del cómputo mundial y va 6 meses por detrás

**Mediados de 2026**

> «Al contrabandear chips taiwaneses prohibidos, comprar chips más antiguos y producir chips nacionales con unos tres años de retraso con respecto a la frontera entre Estados Unidos y Taiwán, China ha logrado mantener alrededor del 12 % del poder de cómputo mundial relevante para la IA» […] «están unos seis meses por detrás de los mejores modelos de OpenBrain.»

**Qué ha pasado**

- Modelos: 7 meses de media por detrás hasta enero de 2026 (Epoch, entre 4 y 14). Con Kimi K3 (julio de 2026), unos 4-6 meses, según cálculos de terceros con el índice de Epoch.
- Cómputo: entre el 5 % (chips de IA en manos de empresas chinas, Epoch 2026) y el 15 % (supercomputadores de IA, Epoch 2025).
- Chips: Huawei va 3-4 años por detrás de Nvidia y este año fabricará menos del 4 % del cómputo que fabrica Nvidia.
- Contrabando: masivo. Funcionarios de EE. UU. creen que han entrado al menos 115.000 procesadores restringidos. El 1 de octubre detuvieron a un hombre por más de 300 M$ en servidores.

**Para discutir**: si los números aciertan y la política falla, ¿qué parte del escenario sobre China os creéis?

Fuentes: [Epoch, EE. UU. frente a China](https://epoch.ai/data-insights/us-vs-china-eci) · [Epoch, dueños de chips de IA](https://epoch.ai/blog/introducing-the-ai-chip-owners-explorer) · [Epoch, Huawei](https://epoch.ai/publications/huaweis-roadmap-to-2031) · [Engadget, contrabando](https://www.engadget.com/2275633/nvidias-smuggling-problem-is-getting-worse/) · [AFP, detención](https://www.khaleejtimes.com/americas/us-arrests-man-over-alleged-smuggling-of-300-million-worth-of-computer-servers-to-china-2)

---

## Finales de 2026

### 9. Sale un modelo 10 veces más barato

**Finales de 2026**

> «Justo cuando otros parecían estar poniéndose al día, OpenBrain vuelve a dejar a la competencia atrás con el lanzamiento del Agente-1-mini, un modelo 10 veces más barato que el Agente-1 y más fácil de ajustar finamente para distintas aplicaciones.»

**Qué ha pasado**

- 22 de septiembre de 2026: Claude Opus 5.5 rinde como Fable 5.1 en la mayoría de tareas. Según Anthropic, cuesta un 40 % menos de usar que Opus 5 (el precio por token baja un 20 %).
- 29 de septiembre: GPT-6.1 Sol, casi al nivel de GPT-6 Astra, a una quinta parte de su precio.
- 7 de octubre: Claude Haiku 5.5. Su precio de lista es 10 veces menor que el de Haiku 4.5 hasta 100.000 tokens, y la mitad por encima. Anthropic calcula que el coste medio baja en torno a un 75 %.

**Para discutir**: ¿cuál de los tres sería el Agente-1-mini? ¿Basta con ser 10 veces más barato que la versión anterior?

Fuentes: [Anthropic, Opus 5.5](https://www.anthropic.com/claude-opus-5-5) · [Bernama, DevDay 2026](https://bernama.com/en/world/news.php?id=2613531) · [Anthropic, Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)

### 10. Crisis de empleo para los programadores junior

**Finales de 2026**

> «La IA ha empezado a arrebatar puestos de trabajo, pero también ha creado otros nuevos. […] El mercado laboral para auxiliares de ingenieros de software está en crisis»

(El original inglés dice «junior software engineers».)

**Qué ha pasado**

- Stanford (agosto de 2026): el empleo de los jóvenes de 22 a 25 años en los trabajos más expuestos a la IA está un 19 % por debajo de donde estaría si hubiera crecido como el de los jóvenes en trabajos menos expuestos. No demuestra que la causa sea la IA, y viene sobre todo de que se contrata menos.
- Indeed (julio de 2026): solo el 4,5 % de las ofertas de software son de nivel de entrada.
- Challenger: en 2026, la IA es la primera razón declarada de los recortes anunciados en EE. UU. (120.136 hasta septiembre). Son anuncios, con la razón que da la empresa.
- En el total no se nota: paro del 4,2 % en septiembre de 2026. El Budget Lab de Yale no ve un cambio claro.
- En España: las ofertas para programadores júnior caen un 33 % (DigitalES con InfoJobs; el informe no dice en qué periodo) y, en las empresas TIC de Barcelona, un 27 % entre 2023 y 2025. Tampoco aquí se ve en el empleo total, según BBVA Research.
- Contexto español, con cuidado porque es una proyección: Funcas (abril de 2026) calcula que el 27,4 % de los trabajadores españoles está expuesto a la IA generativa y estima una pérdida neta de unos 400.000 empleos en diez años. De momento, dice, domina la complementariedad. No da datos de jóvenes ni de programadores.

**Para discutir**: ¿esto es «estar en crisis»? ¿Cuánto tendría que moverse el paro para que contara?

Fuentes: [Stanford, «Canaries» (agosto de 2026)](https://digitaleconomy.stanford.edu/news/canariesaug26/) · [Indeed Hiring Lab](https://hiringlab.indeed.com/2026/07/23/the-labor-market-is-tilting-toward-seniority/) · [Challenger, septiembre de 2026](https://www.challengergray.com/wp-content/uploads/2026/10/Challenger-Report-September-2026.pdf) · [BLS, septiembre de 2026](https://www.bls.gov/news.release/archives/empsit_10022026.htm) · [Yale Budget Lab](https://budgetlab.yale.edu/sites/default/files/page_to_pdf/1419/publication_1419.pdf) · [Infobae España, programadores júnior](https://www.infobae.com/espana/2026/09/17/la-ia-golpea-primero-a-los-mas-formados-las-ofertas-para-programadores-junior-caen-un-33-y-crece-el-riesgo-de-automatizacion-para-los-universitarios/) · [Ara, Barcelona](https://es.ara.cat/economia/tecnologia/ia-erosiona-puestos-trabajo-digitales-junior_1_5760523.html) · [BBVA Research](https://www.bbvaresearch.com/publicaciones/espana-observatorio-trimestral-del-mercado-de-trabajo-2t2026/) · [Funcas, IA y mercado de trabajo en España](https://www.funcas.es/documentos_trabajo/inteligencia-artificial-y-mercado-de-trabajo-en-espana-exposicion-ocupacional-efectos-sobre-el-empleo-y-adopcion-empresarial/)

### 11. Una protesta de 10.000 personas contra la IA en Washington

**Finales de 2026**

> «Mucha gente teme que la próxima ola de IA venga a quitarles el trabajo; hay una protesta anti-IA de 10 000 personas en Washington D. C.»

**Qué ha pasado**

- El miedo, sí: el 71 % de los estadounidenses espera menos empleo dentro de 20 años (Pew, junio de 2026). Y va más allá del empleo: el 73 % está preocupado porque la IA pueda amenazar la supervivencia humana (Quinnipiac, septiembre de 2026), y el 48 % prefiere pausar frente a un 31 % que prefiere seguir (Public First para Politico). La misma encuesta incluye España: el 46,8 % prefiere pausar y el 39,8 %, seguir.
- La protesta, no: ninguna con miles de personas en Washington. Las mayores por la seguridad de la IA han reunido a unos cientos de personas: Londres en febrero de 2026 (unas 300, según los organizadores) y San Francisco en julio. En Washington ha habido acciones de decenas, como la de agosto ante la oficina de OpenAI, con 13 detenidos. El 18 de julio se convocaron concentraciones contra centros de datos en al menos 125 lugares de EE. UU., sin cifras de asistencia.

**Para discutir**: la opinión va por delante del escenario y la calle va por detrás. ¿Por qué? Es una pregunta incómoda también para PauseAI.

Fuentes: [Pew](https://www.pewresearch.org/short-reads/2026/08/18/young-adults-in-the-us-are-increasingly-wary-of-ai-concerned-it-will-take-jobs/) · [Quinnipiac](https://poll.qu.edu/poll-release?releaseid=3969) · [Public First para Politico, vía Anadolu (Daily Sabah)](https://www.dailysabah.com/business/tech/two-thirds-of-americans-see-risk-of-ai-destroying-humanity-poll/amp) · [Xataka, la encuesta en España](https://www.xataka.com/robotica-e-ia/forma-sorprendente-espana-bastante-pro-ia-que-paises-su-entorno) · [MIT Technology Review, Londres](https://www.technologyreview.com/2026/03/02/1133814/i-checked-out-londons-biggest-ever-anti-ai-protest/) · [Mission Local, San Francisco](https://missionlocal.org/2026/07/san-francisco-protest-ai-openai-anthropic-google/) · [Reuters vía GV Wire, centros de datos](https://gvwire.com/2026/07/18/us-data-center-protests-go-national-as-backlash-grows/) · [Common Dreams, Washington](https://www.commondreams.org/news/ai-protest)

### 12. El Pentágono empieza a contratar a la empresa líder, sin hacer ruido

**Finales de 2026**

> «El Departamento de Defensa comienza, de forma discreta pero significativa, a ampliar la contratación directa de OpenBrain para trabajos de ciberseguridad, análisis de datos e I+D, pero la integración es lenta debido a la burocracia y a su proceso de adquisiciones.»

**Qué ha pasado**

- Junio y julio de 2025: contratos con OpenAI, Anthropic, Google y xAI, de hasta 200 M$ cada uno. En público y más de un año antes.
- Febrero de 2026: el Gobierno declara a Anthropic «supply-chain risk» (un riesgo para su cadena de suministro) por negarse a permitir un uso militar sin restricciones. Anthropic pedía que Claude no se usara para vigilancia masiva de estadounidenses ni para armas totalmente autónomas. Una jueza de California lo bloquea en marzo y vuelve a fallar a favor de Anthropic en agosto; en septiembre, un tribunal de apelación de Washington le da la razón al Gobierno.
- Marzo de 2026: según el Washington Post, mientras se preparaban los ataques contra Irán, Maven, el sistema de IA del Pentágono, con Claude dentro, propuso cientos de objetivos y los ordenó por prioridad.
- 5 de octubre de 2026: el Pentágono dice que ha dejado de usar Claude, más de un mes después del plazo que se había dado. Cambiar de modelo no es «plug and play».

**Para discutir**: se adelantó, y con un giro que nadie esperaba: el Gobierno castiga a un laboratorio por ponerle límites. En el escenario, Gobierno y empresa acaban sentados en el mismo comité. ¿Encaja con lo que estamos viendo?

Fuentes: [DefenseScoop, contratos de 2025](https://defensescoop.com/2025/07/14/pentagon-ai-contracts-musk-xai-google-openai-anthropic-cdao/) · [AP vía KTVU, designación](https://www.ktvu.com/news/anthropic-trump-administration-dispute) · [CNN en Español, bloqueo de marzo](https://kesq.com/kunamundo/noticias-cnn/cnn-spanish/2026/03/26/jueza-bloquea-el-esfuerzo-del-pentagono-por-castigar-a-anthropic-al-catalogarla-como-un-riesgo-para-la-cadena-de-suministro/) · [Washington Post vía Stars and Stripes, Irán](https://www.stripes.com/theaters/middle_east/2026-03-04/anthropic-tool-claude-central-campaign-iran-20949927.html) · [AP, Circuito de DC](https://www.ksat.com/business/2026/09/25/federal-court-says-pentagon-can-label-anthropic-a-supply-chain-risk/) · [BBC vía Capital FM](https://capitalfm.africa/pentagon-stops-using-anthropic-ai-tools-after-blacklisting-company-bbc-told/)
