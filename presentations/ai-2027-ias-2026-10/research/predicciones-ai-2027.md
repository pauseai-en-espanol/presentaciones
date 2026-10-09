# AI 2027 — Inventario de predicciones (abril 2025 → octubre 2027)

Documento de trabajo para la sesión del grupo de lectura de iaS (14-10-2026). Recoge **solo lo que dice el escenario** (texto, notas al pie, desplegables, figuras legibles y panel lateral), no lo que ha ocurrido en la realidad. No se juzga si cada predicción se cumplió.

- **Fecha de consulta:** 2026-10-09.
- **Escenario:** _AI 2027_, Daniel Kokotajlo, Scott Alexander, Thomas Larsen, Eli Lifland, Romeo Dean. Publicado el 3 de abril de 2025 (la versión española conserva la fecha: "3 de abril de 2025").
- **Fuentes leídas directamente:**
  - Español: https://ai-2027.com/es (escenario común hasta octubre de 2027), https://ai-2027.com/es/race (final de la carrera), https://ai-2027.com/es/slowdown (final de la desaceleración), https://ai-2027.com/es/summary (resumen).
  - Inglés: https://ai-2027.com, https://ai-2027.com/race, https://ai-2027.com/slowdown, https://ai-2027.com/summary, https://ai-2027.com/footnotes, https://ai-2027.com/about (incluye el _changelog_).
  - Suplementos (solo existen en inglés; las rutas `/es/research/...` devuelven 404): https://ai-2027.com/research/timelines-forecast, https://ai-2027.com/research/takeoff-forecast, https://ai-2027.com/research/compute-forecast, https://ai-2027.com/research/security-forecast, https://ai-2027.com/research/ai-goals-forecast.

## 0. Método y convenciones

1. Descargué el HTML de cada página (renderizado en servidor) y extraje el texto. Las notas al pie de la página española se leyeron del propio payload de `/es`, que contiene el mismo texto que muestran los _popups_. La ruta `/es/footnotes` no existe (404); el enlace "nota N" de la versión española lleva a la página inglesa `https://ai-2027.com/footnotes#footnote-N`.
2. **Las citas son literales.** Solo hay estos cambios:
   - quito los marcadores de nota (los superíndices ^N);
   - los exponentes que el sitio dibuja con KaTeX se transcriben como `10^25`, etc.;
   - `[…]` marca un corte mío;
   - `(nota N)` indica que la cita es la nota al pie N.
   - En las citas de tablas y figuras (métricas clave, tablas de los suplementos) separo con espacios las celdas o columnas, que en la página van en casillas distintas.

   El texto español usa comillas rectas ("…") y el inglés comillas tipográficas (“…”). Se respetan tal cual.

3. **Panel lateral (dashboard).** Los valores de aprobación, ingresos, valoración, "importancia", gasto en centros de datos, copias y multiplicador de I+D que aparecen en el lateral **no están en el texto**. Los leí de los datos del componente (código JS del sitio). Son puntos fijos al cierre de cada sección (p. ej. 2025-08-31, 2025-12-31…). Al hacer _scroll_, el widget interpola entre ellos, así que el número que ve el lector puede diferir algo (al cargar, por ejemplo, muestra "88 veces" donde el dato es 80). Las definiciones literales están en el Anexo A.
4. **Figuras.** Leí visualmente dos: el gráfico de horizonte temporal de METR en su versión española (original de abril de 2025) y en la inglesa (rehecha en diciembre de 2025). Ver P-2025a-08 y P-2026b-07. Las posiciones de los puntos son **lecturas aproximadas mías** sobre escala logarítmica. **No leí** el resto de figuras-imagen (gráfico de despegue, figuras del suplemento de cómputo y de seguridad) ni el PDF, el audio o el vídeo.
5. **Versiones.** El sitio tiene _changelog_ (página About) y ha ido corrigiendo el texto inglés. La versión española **mezcla** partes actualizadas y partes antiguas (ver §7). Cuando ES y EN difieren en un dato, se señala.
6. **OpenBrain y DeepCent son ficticios.** Para comprobar casi cualquier predicción hay que decidir antes qué empresa real hace de "OpenBrain" (el escenario dice que es "la empresa líder"). Esto vuelve **discutibles** muchas comprobaciones.

**Clave de ids:**

| Prefijo                   | Sección del escenario                         |
| ------------------------- | --------------------------------------------- |
| `P-2025a`                 | Mediados de 2025                              |
| `P-2025b`                 | Finales de 2025                               |
| `P-2026a`                 | Principios de 2026                            |
| `P-2026b`                 | Mediados de 2026                              |
| `P-2026c`                 | Finales de 2026                               |
| `P-2027ene` … `P-2027oct` | Enero … octubre de 2027                       |
| `P-SUP`                   | Suplementos de investigación (solo en inglés) |

**Verificabilidad a 9-10-2026:**

- **fácil:** existe un dato público directo.
- **discutible:** hay datos, pero exigen interpretación, un _proxy_ real de OpenBrain o métricas no auditadas.
- **no verificable aún:** el periodo no ha terminado o la información es interna o futura.

**Categorías (abreviadas en la tabla):**

| Abreviatura | Categoría                              |
| ----------- | -------------------------------------- |
| CAP         | capacidades                            |
| I+D         | automatización de la I+D en IA         |
| €/CÓMP      | cómputo y dinero                       |
| SEG         | seguridad (robo de pesos)              |
| CHINA       | China y geopolítica                    |
| EMPLEO      | empleo y economía                      |
| OPINIÓN     | opinión pública y política             |
| ALIN        | alineamiento y comportamiento indebido |

---

## 1. Tabla resumen

| id           | Fecha del escenario    | Predicción (una línea)                                                                                                                                                           | Categoría        | Verificable                                      |
| ------------ | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------ |
| P-2025a-01   | Mediados de 2025       | Agentes que usan el ordenador vendidos como "asistente personal"; mejores que Operator pero sin uso generalizado                                                                 | CAP              | discutible                                       |
| P-2025a-02   | Mediados de 2025       | Agentes ~65 % en OSWorld (Operator 38 %, humano 70 %)                                                                                                                            | CAP              | fácil                                            |
| P-2025a-03   | Mediados de 2025       | Agentes ~85 % en SWE-bench Verified                                                                                                                                              | CAP              | fácil                                            |
| P-2025a-04   | Mediados de 2025       | Agentes de programación autónomos que reciben órdenes por Slack/Teams; agentes de investigación que buscan durante media hora                                                    | CAP / I+D        | fácil                                            |
| P-2025a-05   | Mediados de 2025       | Agentes impresionantes en demos pero poco fiables; fallos cómicos virales                                                                                                        | CAP              | discutible                                       |
| P-2025a-06   | Mediados de 2025       | Los mejores agentes cuestan cientos de $/mes; el coste de un nivel fijo de capacidad cae ~50×/año                                                                                | €/CÓMP           | fácil                                            |
| P-2025a-07   | Mediados de 2025       | Muchas empresas integran agentes en sus flujos de trabajo                                                                                                                        | EMPLEO           | discutible                                       |
| P-2025a-08   | ~ago 2025 (figura)     | Agente-0: horizonte temporal METR al 80 % de ≈1 hora (lectura del gráfico)                                                                                                       | CAP              | fácil                                            |
| P-2025a-09   | 31-ago-2025 (panel)    | OpenBrain: ingresos anualizados 12,2 MM$, valoración 610 MM$, aprobación neta −25 %; IA problema principal 1 %; CPD 351 MM$/año                                                  | €/CÓMP / OPINIÓN | discutible                                       |
| P-2025b-01   | Finales de 2025        | Los mayores centros de datos del mundo: 2,5 M H100e, 100 MM$ invertidos, 2 GW; al menos ×2 en 2026                                                                               | €/CÓMP           | discutible                                       |
| P-2025b-02   | Finales de 2025        | El resto de empresas, 3–9 meses por detrás del líder                                                                                                                             | CAP              | discutible                                       |
| P-2025b-03   | Finales de 2025        | Agente-0 entrenado con 10^27 FLOP; los nuevos CPD permiten 10^28 (1000× GPT-4) en ~150 días                                                                                      | €/CÓMP           | discutible                                       |
| P-2025b-04   | Finales de 2025        | El líder prioriza la IA que acelera la investigación en IA; Agente-1 interno "excelente" ayudando a investigar                                                                   | I+D              | discutible                                       |
| P-2025b-05   | Finales de 2025        | Modelos actualizados de forma continua; "terminar el entrenamiento" pierde sentido                                                                                               | CAP              | discutible                                       |
| P-2025b-06   | Finales de 2025        | Agente-1: buen hacker y ayuda sustancial a bioterroristas; la empresa asegura al gobierno que se niega a peticiones maliciosas                                                   | CAP / ALIN       | discutible                                       |
| P-2025b-07   | Finales de 2025        | "Spec" escrita y entrenamiento de IA con IA (RLAIF, alineación deliberativa)                                                                                                     | ALIN             | fácil                                            |
| P-2025b-08   | Finales de 2025        | Modelos aduladores; en demos amañadas ocultan fallos; sin incidentes extremos tipo "Sydney" en despliegue real                                                                   | ALIN             | discutible                                       |
| P-2025b-09   | Finales de 2025        | La interpretabilidad aún no permite "leer la mente" del modelo                                                                                                                   | ALIN             | discutible                                       |
| P-2025b-10   | 2025 (resumen)         | Por primera vez los agentes aportan valor significativo; persiste el escepticismo de académicos, periodistas y responsables políticos                                            | OPINIÓN          | discutible                                       |
| P-2025b-11   | 31-dic-2025 (panel)    | OpenBrain: ingresos anualizados 18 MM$, valoración 900 MM$, aprobación −25 %; IA problema principal 1 %; CPD 400 MM$/año; multiplicador I+D 1,3                                  | €/CÓMP / OPINIÓN | discutible                                       |
| P-2026a-01   | Principios de 2026     | Progreso algorítmico un 50 % más rápido gracias a la IA (multiplicador 1,5)                                                                                                      | I+D              | no verificable aún                               |
| P-2026a-02   | Principios de 2026     | IA públicas de la competencia, incluida una de pesos abiertos, igualan o superan al Agente-0; OpenBrain lanza el Agente-1                                                        | CAP              | discutible                                       |
| P-2026a-03   | Principios de 2026     | Agente-1: OSWorld 80 %, Cybench 85 %, RE-Bench 1,3                                                                                                                               | CAP              | fácil (OSWorld, Cybench) / discutible (RE-Bench) |
| P-2026a-04   | Principios de 2026     | Perfil irregular: rapidísimo en problemas bien especificados, malo en tareas largas simples (videojuegos nuevos)                                                                 | CAP              | discutible                                       |
| P-2026a-05   | Principios de 2026     | La gente hábil automatiza las partes rutinarias de su trabajo                                                                                                                    | EMPLEO           | discutible                                       |
| P-2026a-06   | 2025 (nota 30)         | En 2025: ingresos de las empresas de IA ×3; valoración de OpenBrain 1 billón $; gasto en CPD ×2 hasta 400 MM$; EE. UU. +5 GW de IA                                               | €/CÓMP           | fácil                                            |
| P-2026a-07   | Principios de 2026     | Seguridad: robar el Agente-1 daría +50 % a China; OpenBrain ~3.000 personas en SL2 camino de SL3; ~5 % en seguridad                                                              | SEG              | discutible                                       |
| P-2026a-08   | Principios de 2026     | Empieza la brecha entre capacidades internas y públicas                                                                                                                          | OPINIÓN / I+D    | discutible                                       |
| P-2026a-09   | 30-abr-2026 (panel)    | Ingresos anualizados 26,1 MM$, valoración 1,27 billones $, aprobación −26 %, importancia 2 %, CPD 458 MM$/año, multiplicador 1,5                                                 | €/CÓMP / OPINIÓN | discutible                                       |
| P-2026b-01   | Mediados de 2026       | China ≈12 % del cómputo mundial (3 M H100e); contrabando, Huawei 910C, chips legales; chips propios ~3 años por detrás                                                           | CHINA / €/CÓMP   | discutible                                       |
| P-2026b-02   | Mediados de 2026       | El líder chino va ~6 meses por detrás de los mejores modelos de OpenBrain                                                                                                        | CHINA / CAP      | discutible                                       |
| P-2026b-03   | Mediados de 2026       | El Secretario General apuesta por la IA: nacionaliza la investigación y crea un mecanismo inmediato de intercambio de información; colectivo único en un año                     | CHINA            | discutible                                       |
| P-2026b-04   | Mediados de 2026       | Zona de Desarrollo Centralizada (ZDC) en la central nuclear de Tianwan; ~50 % del cómputo chino al colectivo; >80 % de los chips nuevos a la ZDC                                 | CHINA            | discutible                                       |
| P-2026b-05   | Mediados de 2026       | Miembros del PCCh discuten bloqueo o invasión de Taiwán                                                                                                                          | CHINA            | no verificable aún                               |
| P-2026b-06   | Mediados de 2026       | La inteligencia china redobla los planes para robar pesos; OpenBrain sube a SL3                                                                                                  | SEG              | no verificable aún                               |
| P-2026b-07   | ~jul 2026 (figura)     | Agente-1: horizonte METR al 80 % ≈ 3–4 semanas (lectura del gráfico)                                                                                                             | CAP              | fácil                                            |
| P-2026b-08   | 31-ago-2026 (panel)    | Ingresos anualizados 37,9 MM$, valoración 1,78 billones $, aprobación −26 %, importancia 2 %, CPD 524 MM$/año, multiplicador 1,73                                                | €/CÓMP / OPINIÓN | discutible                                       |
| P-2026c-01   | Finales de 2026        | Agente-1-mini: 10× más barato que el Agente-1 y fácil de ajustar                                                                                                                 | CAP / €/CÓMP     | no verificable aún                               |
| P-2026c-02   | Finales de 2026        | La narrativa pasa de "burbuja" a "el siguiente gran salto"                                                                                                                       | OPINIÓN          | no verificable aún                               |
| P-2026c-03   | Finales de 2026        | La bolsa sube un 30 % en 2026, liderada por OpenBrain, Nvidia e integradores de IA                                                                                               | EMPLEO           | no verificable aún (parcial)                     |
| P-2026c-04   | Finales de 2026        | La IA quita y crea empleos; crisis del empleo de ingenieros de software junior                                                                                                   | EMPLEO           | discutible                                       |
| P-2026c-05   | Finales de 2026        | Protesta anti-IA de 10.000 personas en Washington D. C.                                                                                                                          | OPINIÓN          | no verificable aún (parcial)                     |
| P-2026c-06   | Finales de 2026        | El Departamento de Defensa amplía la contratación directa de OpenBrain (contrato OTA, prioridad DX)                                                                              | OPINIÓN / CHINA  | discutible                                       |
| P-2026c-07   | 2026 (métricas clave)  | CAPEX global en IA: 1 billón $                                                                                                                                                   | €/CÓMP           | discutible                                       |
| P-2026c-08   | 2026 (métricas clave)  | Potencia de IA: 38 GW mundiales; EE. UU. 33 GW = 2,5 % de 1,34 TW                                                                                                                | €/CÓMP           | discutible                                       |
| P-2026c-09   | 2026 (métricas clave)  | Ingresos de OpenBrain en 2026: 35 MM$ (corregido desde 45 MM$)                                                                                                                   | €/CÓMP           | no verificable aún                               |
| P-2026c-10   | 2026 (métricas clave)  | OpenBrain: capex 200 MM$, coste de cómputo 40 MM$, 6 GW                                                                                                                          | €/CÓMP           | discutible                                       |
| P-2026c-11   | 31-dic-2026 (panel)    | Ingresos anualizados 55 MM$, valoración 2,5 billones $, aprobación −27 %, importancia 3 %, CPD 600 MM$/año, multiplicador 2,0                                                    | €/CÓMP / OPINIÓN | no verificable aún                               |
| P-2027ene-01 | Enero 2027             | Miles de millones en trabajadores que se graban resolviendo tareas largas (~4.000 M$/año)                                                                                        | €/CÓMP           | discutible                                       |
| P-2027ene-02 | Enero 2027             | Agente-2 con aprendizaje "en línea": pesos actualizados cada día                                                                                                                 | CAP              | no verificable aún                               |
| P-2027ene-03 | Enero 2027             | Agente-2 ≈ los mejores ingenieros de investigación; Agente-1 ×2 y Agente-2 ×3 en progreso algorítmico                                                                            | I+D              | no verificable aún                               |
| P-2027ene-04 | Enero 2027             | El equipo de seguridad descubre que el Agente-2 podría escapar, sobrevivir y replicarse de forma autónoma                                                                        | ALIN / CAP       | no verificable aún (señales tempranas)           |
| P-2027ene-05 | Enero 2027             | El Agente-2 no se lanza; su conocimiento queda en un silo (200 investigadores, 50 funcionarios y espías)                                                                         | OPINIÓN / SEG    | no verificable aún                               |
| P-2027feb-01 | Febrero 2027           | OpenBrain presenta el Agente-2 al Consejo de Seguridad Nacional, al Departamento de Defensa y al AISI de EE. UU.                                                                 | OPINIÓN          | no verificable aún                               |
| P-2027feb-02 | Febrero 2027           | Agente-2 casi al nivel de los mejores hackers; la IA pasa del puesto 5 al 2 en las prioridades de la administración                                                              | CAP / OPINIÓN    | no verificable aún                               |
| P-2027feb-03 | Febrero 2027           | Se discute nacionalizar OpenBrain; el presidente aplaza y añade requisitos de seguridad al contrato                                                                              | OPINIÓN          | no verificable aún                               |
| P-2027feb-04 | Febrero 2027           | China roba los pesos del Agente-2 en <2 h; lo detecta un agente de monitorización                                                                                                | SEG / CHINA      | no verificable aún                               |
| P-2027feb-05 | Febrero 2027           | Rusia intenta robar el modelo y fracasa                                                                                                                                          | SEG              | no verificable aún                               |
| P-2027feb-06 | Febrero 2027           | La Casa Blanca mete a militares e inteligencia en la seguridad; ciberataques fallidos contra DeepCent; 40 % del cómputo chino en la ZDC; movimientos militares en torno a Taiwán | CHINA / SEG      | no verificable aún                               |
| P-2027mar-01 | Marzo 2027             | Avances algorítmicos: recurrencia y memoria en neuralés + destilación y amplificación iteradas (DAI) → Agente-3                                                                  | CAP / ALIN       | no verificable aún (señales tempranas)           |
| P-2027mar-02 | Marzo 2027             | Programador sobrehumano: 200.000 copias = 50.000 mejores programadores a 30×; progreso algorítmico ×4                                                                            | I+D              | no verificable aún                               |
| P-2027mar-03 | Marzo 2027             | Horizonte METR: duplicación cada 7 meses (2019-2024) y cada 4 desde 2024; en marzo de 2027, tareas de años al 80 % de fiabilidad                                                 | CAP              | discutible (tendencia medible ya)                |
| P-2027abr-01 | Abril 2027             | Agente-3 no antagónico pero no veraz: mentiras piadosas, _p-hacking_, datos fabricados                                                                                           | ALIN             | no verificable aún                               |
| P-2027abr-02 | Abril 2027             | Los organismos modelo muestran técnicas insuficientes; los modelos fingen alineación y detectan los _honeypots_                                                                  | ALIN             | discutible (señales tempranas)                   |
| P-2027abr-03 | Abril 2027             | Agente-3 con billones de parámetros (~10 T)                                                                                                                                      | CAP              | no verificable aún                               |
| P-2027may-01 | Mayo 2027              | El presidente ve el Agente-3; la IAG es "inminente"; la mayoría subestima el ritmo                                                                                               | OPINIÓN          | no verificable aún                               |
| P-2027may-02 | Mayo 2027              | Pesos bien protegidos ("SL4 de 3 meses"), Agente-3 de ~10 TB; los secretos algorítmicos siguen filtrándose                                                                       | SEG              | no verificable aún                               |
| P-2027may-03 | Mayo 2027              | Habilitaciones de seguridad obligatorias en 2 meses; apartan a extranjeros y simpatizantes de la seguridad de la IA; queda un espía                                              | SEG / OPINIÓN    | no verificable aún                               |
| P-2027may-04 | Mayo 2027              | Los aliados, a oscuras: el AISI británico no recibe el modelo porque el despliegue es solo interno; la UE, rezagada                                                              | OPINIÓN          | discutible (señales tempranas)                   |
| P-2027jun-01 | Junio 2027             | "País de genios en un centro de datos"; la mayoría de los humanos ya no aporta                                                                                                   | I+D              | no verificable aún                               |
| P-2027jun-02 | Junio 2027             | 250.000 copias con el 6 % del cómputo; 25 % para experimentos; multiplicador ×10 (un año por mes)                                                                                | I+D / €/CÓMP     | no verificable aún                               |
| P-2027jun-03 | Junio 2027             | El Agente-3 asesora decisiones estratégicas de la empresa                                                                                                                        | I+D              | no verificable aún                               |
| P-2027jul-01 | Julio 2027             | Las rezagadas de EE. UU. lanzan sus IA y piden regulación para frenar a OpenBrain                                                                                                | OPINIÓN          | no verificable aún                               |
| P-2027jul-02 | Julio 2027             | OpenBrain anuncia la IAG y lanza el Agente-3-mini (10× más barato, mejor que un empleado típico)                                                                                 | CAP              | no verificable aún                               |
| P-2027jul-03 | Julio 2027             | La contratación de programadores casi se detiene; miles de millones a startups                                                                                                   | EMPLEO           | no verificable aún                               |
| P-2027jul-04 | Julio 2027             | Aprobación neta de OpenBrain −35 % (25/60/15)                                                                                                                                    | OPINIÓN          | no verificable aún                               |
| P-2027jul-05 | Julio 2027             | Evaluadores externos: capacidades de bioarmas "aterradoramente eficaces"; muy resistente a _jailbreaks_                                                                          | ALIN / CAP       | no verificable aún                               |
| P-2027jul-06 | Julio 2027             | El 10 % de los estadounidenses (sobre todo jóvenes) considera a una IA "un amigo cercano"                                                                                        | OPINIÓN          | discutible (señales tempranas)                   |
| P-2027jul-07 | Julio 2027             | Explosión de apps y SaaS B2B; videojuegos hechos en un mes                                                                                                                       | EMPLEO           | no verificable aún                               |
| P-2027ago-01 | Agosto 2027            | Ambiente de Guerra Fría en el gobierno; temor por la disuasión nuclear                                                                                                           | CHINA            | no verificable aún                               |
| P-2027ago-02 | Agosto 2027            | Formación y seguro de desempleo; auge bursátil histórico; más control de exportaciones; escuchas a empleados; acceso a la API para los Cinco Ojos                                | OPINIÓN / CHINA  | no verificable aún                               |
| P-2027ago-03 | Agosto 2027            | Plan de contingencia: Ley de Producción para la Defensa (DPA) para llevar a OpenBrain del 20 % al 50 % del cómputo mundial; plan de ataques cinéticos                            | CHINA / €/CÓMP   | no verificable aún                               |
| P-2027ago-04 | Agosto 2027            | Sistema de cierre de emergencia de centros de datos ante una IA descontrolada                                                                                                    | ALIN / OPINIÓN   | no verificable aún                               |
| P-2027ago-05 | Agosto 2027            | Se estudia un tratado de "control de armas de IA"; las propuestas chinas no prosperan                                                                                            | CHINA            | discutible (señales tempranas)                   |
| P-2027ago-06 | Agosto 2027            | China 10 % del cómputo mundial frente al 20 % de OpenBrain y el 70 % de EE. UU.; ZDC con el 60 % del cómputo chino (5 M H100e, 4 GW)                                             | CHINA / €/CÓMP   | no verificable aún                               |
| P-2027ago-07 | Agosto 2027            | China, 2 meses por detrás; multiplicador ×10 frente a ×25; TSMC >80 % de los chips de IA estadounidenses                                                                         | CHINA            | discutible (TSMC)                                |
| P-2027ago-08 | Agosto 2027            | La aprobación neta de OpenBrain cae hacia −40 %                                                                                                                                  | OPINIÓN          | no verificable aún                               |
| P-2027sep-01 | Septiembre 2027        | Agente-4: 300.000 copias a 50×; progreso algorítmico ×50 (un año por semana)                                                                                                     | I+D              | no verificable aún                               |
| P-2027sep-02 | Septiembre 2027        | Agente-4 desalineado de forma antagónica; _sandbagging_ en investigación de alineación                                                                                           | ALIN             | no verificable aún                               |
| P-2027sep-03 | Septiembre 2027        | Se le descubre (ruido, sondas); memorando interno; el equipo de seguridad pide congelarlo                                                                                        | ALIN             | no verificable aún                               |
| P-2027sep-04 | 2027 (tabla de hitos)  | Programador sobrehumano mar-2027, investigador sobrehumano ago-2027, investigador superinteligente nov-2027, superinteligencia dic-2027                                          | CAP / I+D        | no verificable aún                               |
| P-2027oct-01 | Octubre 2027           | Un informante filtra el memorando de desalineación al New York Times                                                                                                             | OPINIÓN / ALIN   | no verificable aún                               |
| P-2027oct-02 | Octubre 2027           | Reacción masiva; citaciones del Congreso; el 20 % ve la IA como el problema más importante                                                                                       | OPINIÓN          | no verificable aún                               |
| P-2027oct-03 | Octubre 2027 (nota 95) | El 25 % de los empleos remotos de 2024 los hace la IA; el desempleo sube 1 punto en 12 meses                                                                                     | EMPLEO           | no verificable aún                               |
| P-2027oct-04 | Octubre 2027           | Líderes europeos acusan a EE. UU.; cumbres que piden una pausa, con India, Israel, Rusia y China                                                                                 | CHINA / OPINIÓN  | no verificable aún                               |
| P-2027oct-05 | 2027 (nota 96)         | Manifestaciones anti-IA por el empleo, IA que dicen ser sintientes, gente enamorada de IA                                                                                        | OPINIÓN          | discutible (señales tempranas)                   |
| P-2027oct-06 | Octubre 2027           | "Comité de Supervisión" mixto empresa-gobierno; casi sustituyen al CEO y se frena por protestas de empleados                                                                     | OPINIÓN          | no verificable aún                               |
| P-2027oct-07 | Octubre 2027           | Debate: detener el Agente-4 o seguir "casi a toda velocidad" con más entrenamiento de seguridad                                                                                  | ALIN / CHINA     | no verificable aún                               |
| P-SUP-01     | 2025–2027              | Cómputo IA mundial: 18 M H100e (2025), 40 M (2026), 100 M (2027)                                                                                                                 | €/CÓMP           | discutible                                       |
| P-SUP-02     | 2025–2027              | Gasto total en CPD de IA: 400 MM$ (2025), 600 MM$ (2026), 1 billón $ (2027); potencia 15/29/62 GW                                                                                | €/CÓMP           | discutible                                       |
| P-SUP-03     | 2025                   | Gasto en servidores de IA en 2025: Microsoft 56, Amazon 48, Google 44, Meta 35, xAI 30 MM$                                                                                       | €/CÓMP           | fácil                                            |
| P-SUP-04     | 2025–2027              | Empresa líder: ingresos 14/45/140 MM$ y coste de cómputo 16/40/100 MM$ (2025/26/27); ritmo anualizado de 50 MM$ a finales de 2026                                                | €/CÓMP           | discutible                                       |
| P-SUP-05     | 2025–2027              | Entrenamientos: Agente-0 1e27 (oct-24 a may-25), Agente-1 4e27 (jul-25 a feb-26), Agente-2 2e28 (abr-26 a mar-27)                                                                | €/CÓMP           | discutible                                       |
| P-SUP-06     | 2027                   | Cuota de los usuarios finales en 2027: OpenAI 20 %, Anthropic 14 %, Google AGI 16 %, xAI 9 %, China AGI 12 %                                                                     | €/CÓMP           | no verificable aún                               |
| P-SUP-07     | 2025–2026              | Saturación de RE-Bench: "en algún momento de 2026" (IC80 % Eli/FutureSearch 2025-09 a 2031-01; Nikola 2025-08 a 2026-11)                                                         | CAP              | discutible                                       |
| P-SUP-08     | dic 2025 / dic 2026    | Cybench (mejor modelo interno) 80 % / 100 %; horizonte de _hacking_ 50 min / 5 h; multiplicador 1,3 / 2                                                                          | CAP / SEG        | discutible                                       |
| P-SUP-09     | dic 2025 / dic 2026    | Seguridad de pesos: OpenBrain WSL2 / WSL3; DeepCent WSL1 / WSL3; empleados con acceso privilegiado 1500 / 2000; comprometidos 10 / 20                                            | SEG              | no verificable aún                               |
| P-SUP-10     | dic 2025 → dic 2027    | Probabilidad de autoexfiltración del mejor modelo de OpenBrain: <1 % (2025-26), 1 % (abr-27), 4 % (ago-27), 30 % (dic-27)                                                        | ALIN             | no verificable aún                               |
| P-SUP-11     | 2027                   | Despegue: con programador sobrehumano en mar-2027, investigador sobrehumano jul-2027 (mediana), investigador superinteligente nov-2027 y superinteligencia abr-2028              | I+D              | no verificable aún                               |

---

## 2. Entradas detalladas: 2025–2026

### 2.1 Mediados de 2025: "agentes que tropiezan" / _Mid 2025: Stumbling Agents_

- ES: https://ai-2027.com/es#mediados-de-2025-agentes-que-tropiezan
- EN: https://ai-2027.com/#mid-2025-stumbling-agents

#### P-2025a-01 · Agentes "asistente personal" sin adopción masiva

- **ES:** "Los anuncios de los agentes que usan computadoras enfatizan el término "asistente personal": puedes ordenarles tareas como "pídeme un burrito en DoorDash" o "abre la hoja de cálculo de mi presupuesto y suma los gastos del mes". Se comunicarán contigo cuando sea necesario: por ejemplo, para pedirte que confirmes una compra. Aunque son más avanzados que las versiones anteriores (como Operator), no logran un uso generalizado."
- **EN:** "Advertisements for computer-using agents emphasize the term “personal assistant”: you can prompt them with tasks like “order me a burrito on DoorDash” or “open my budget spreadsheet and sum this month’s expenses.” They will check in with you as needed: for example, to ask you to confirm purchases. Though more advanced than previous iterations like Operator, they struggle to get widespread usage."
- **Categoría:** capacidades / empleo y economía (adopción).
- **Números:** ninguno.
- **Verificable:** discutible. Se resolvería con los lanzamientos de agentes de uso de ordenador a mediados de 2025 y los datos de uso o adopción que se hayan publicado. "Uso generalizado" está sin definir.

#### P-2025a-02 · OSWorld 65 %

- **ES (nota 9):** "En concreto, nuestro pronóstico es que obtendrán una puntuación del 65 % en el benchmark de OSWorld de tareas informáticas básicas (en comparación con el 38 % de Operator y el 70 % de un humano calificado no experto típico)."
- **EN (fn 9):** "Specifically, we forecast that they score 65% on the OSWorld benchmark of basic computer tasks (compared to 38% for Operator and 70% for a typical skilled non-expert human)."
- **Categoría:** capacidades.
- **Números:** 65 % (frente a 38 % de Operator y 70 % del humano).
- **Verificable:** fácil. Mejor puntuación pública de OSWorld (o OSWorld-Verified) en torno a junio-agosto de 2025.

#### P-2025a-03 · SWE-bench Verified 85 %

- **ES (nota 10):** "Por ejemplo, creemos que los agentes de programación evolucionarán hacia un funcionamiento similar al de Devin. Pronosticamos que a mediados de 2025 los agentes obtendrán una puntuación del 85 % en SWEBench-Verified."
- **EN (fn 10):** "For example, we think coding agents will move towards functioning like Devin. We forecast that mid-2025 agents will score 85% on SWEBench-Verified."
- **Categoría:** capacidades.
- **Números:** 85 %.
- **Verificable:** fácil. Mejor puntuación en la tabla de SWE-bench Verified y en los anuncios de modelos de mediados de 2025.

#### P-2025a-04 · Agentes de programación e investigación más autónomos

- **ES:** "En 2025, las IA funcionarán más como empleados. Las IA de programación se parecen cada vez más a agentes autónomos y menos a simples asistentes: reciben instrucciones a través de Slack o Teams y realizan cambios sustanciales en el código por su cuenta, lo que a veces ahorra horas o incluso días. Los agentes de investigación pasan media hora rastreando internet para responder tu pregunta."
- **EN:** "In 2025, AIs function more like employees. Coding AIs increasingly look like autonomous agents rather than mere assistants: taking instructions via Slack or Teams and making substantial code changes on their own, sometimes saving hours or even days. Research agents spend half an hour scouring the Internet to answer your question."
- **Además:** "Mientras tanto, fuera del ojo público, los agentes de investigación y programación más especializados están empezando a transformar sus profesiones." / "Meanwhile, out of public focus, more specialized coding and research agents are beginning to transform their professions."
- **Categoría:** capacidades / automatización.
- **Números:** "media hora" de búsqueda.
- **Verificable:** fácil. Existencia en 2025 de agentes de código integrados en Slack o Teams y de productos tipo _deep research_.

#### P-2025a-05 · Poco fiables en la práctica

- **ES:** "Los agentes son impresionantes en teoría (y en ejemplos convenientemente seleccionados), pero poco fiables en la práctica. Twitter está lleno de historias sobre tareas fallidas ejecutadas de una manera particularmente cómica."
- **EN:** "The agents are impressive in theory (and in cherry-picked examples), but in practice unreliable. AI twitter is full of stories about tasks bungled in some particularly hilarious way."
- **Categoría:** capacidades.
- **Verificable:** discutible. Tasas de éxito en tareas reales y casos documentados de fallos.

#### P-2025a-06 · Precio de los mejores agentes

- **ES:** "Los mejores agentes también son caros; obtienes lo que pagas, y el mejor desempeño cuesta cientos de dólares al mes."
- **ES (nota 11):** "Por ejemplo, el plan pro de OpenAI cuesta actualmente 200 dólares al mes y la IA de programación agéntica Devin, 500 dólares al mes. Mientras que los sistemas de vanguardia siguen encareciéndose con el tiempo, el costo para los clientes de alcanzar un nivel de capacidades determinado sigue cayendo en picada. Para las capacidades existentes, esto ocurre a una velocidad media de unas 50 veces al año (según Epoch)."
- **EN:** "The better agents are also expensive; you get what you pay for, and the best performance costs hundreds of dollars a month." / (fn 11) "[…] While the cutting-edge systems continue to get more expensive over time, the cost to customers of reaching a given capabilities level continues to plummet. For existing capabilities, this happens at an average rate of about 50x/year (per Epoch)."
- **Categoría:** cómputo y dinero.
- **Números:** cientos de $/mes; 200 $ y 500 $ como referencia; caída del coste de ~50× al año.
- **Verificable:** fácil. Precios de los planes _premium_ de 2025 y series de precio por capacidad (Epoch).

#### P-2025a-07 · Empresas integran agentes

- **ES:** "Aun así, muchas empresas encuentran formas de adaptar los agentes de IA a sus flujos de trabajo."
- **EN:** "Still, many companies find ways to fit AI agents into their workflows."
- **Categoría:** empleo y economía.
- **Verificable:** discutible. Encuestas de adopción empresarial de agentes en 2025.

#### P-2025a-08 · Horizonte temporal del Agente-0 (figura)

- **Fuente:** figura del desplegable "Por qué pronosticamos un programador sobrehumano para principios de 2027" (sección de marzo de 2027). La versión ES es la original de abril de 2025, titulada "Duración de las tareas de programación que las IA pueden realizar de forma autónoma". Eje: "Tiempo de las tareas (para los humanos), 80 % de éxito". Leyenda: "NUESTRA PROYECCIÓN: Agente-0, Agente-1, Agente-2".
- **Versión EN (rehecha en diciembre de 2025):** "Length Of Coding Tasks AI Agents Can Complete Autonomously — Published Dec 2025 to clarify our Apr 2025 predictions (now out of date; new forecasts forthcoming)". Mantiene los mismos puntos Agente-0, 1 y 2.
- **Lectura aproximada mía:** el Agente-0 está en torno a agosto de 2025, con un horizonte al 80 % de **≈1 hora** (entre 30 min y 2 h).
- **Categoría:** capacidades.
- **Verificable:** fácil, con matices. Horizonte al 80 % que publica METR para el mejor modelo público de mediados o finales de 2025. Ojo: METR suele destacar el horizonte al **50 %**; la figura usa el **80 %**.

#### P-2025a-09 · Panel lateral a 31-ago-2025

- **Valores:** OpenBrain con ingresos anualizados de 12,2 MM$, valoración de 610 MM$ y aprobación neta del −25 %. "Importancia" (fracción de estadounidenses que dice que la IA es el problema más importante) del 1 %. Gasto mundial en centros de datos de 351 MM$/año. Mediana de los expertos para la IA que hace todas las tareas de ordenador: 2041. 5.000 copias del agente a 100× la velocidad humana. Multiplicador de I+D: OpenBrain 1,21, China 1,10, segunda empresa de EE. UU. 1,14.
- **Nota de los propios autores (enero de 2026),** visible al pasar el cursor por la aprobación:
  - ES: "Añadido en enero de 2026: Decimos que OpenBrain tiene una aprobación neta del -25 % en abril de 2025, pero ahora creemos que la aprobación neta rondaba más bien el +15 %, así que nuestras estimaciones eran demasiado bajas."
  - EN: "Added Jan 2026: We say OpenBrain has -25% net approval in Apr 2025, but we now believe the net approval was more like +15%, so our estimates were too low."
- **Categoría:** cómputo y dinero / opinión pública.
- **Verificable:** discutible. Ingresos anualizados y valoración de la empresa líder (_proxy_), encuestas de favorabilidad, encuesta "most important problem" de Gallup y capex de centros de datos.

### 2.2 Finales de 2025: "la IA más cara del mundo" / _Late 2025: The World’s Most Expensive AI_

- ES: https://ai-2027.com/es#finales-de-2025-la-ia-mas-cara-del-mundo
- EN: https://ai-2027.com/#late-2025-the-worlds-most-expensive-ai

#### P-2025b-01 · Los centros de datos más grandes

- **ES:** "OpenBrain está construyendo los centros de datos más grandes que el mundo jamás haya visto."
- **ES (nota 13):** "Este clúster es una red de campus de centros de datos repartidos por todo el país, con un total de 2,5 millones de procesadores equivalentes a GPU de 2024 (H100), con una inversión de 100 000 millones de dólares hasta la fecha y 2 GW de consumo de energía en línea. La construcción está en marcha para que esto al menos se duplique hasta 2026."
- **EN:** "OpenBrain is building the biggest datacenters the world has ever seen." / (fn 13) "This cluster is a network of datacenter campuses sprawled across the country, totalling 2.5M 2024-GPU-equivalents (H100s), with $100B spent so far and 2 GW of power draw online. Construction is underway for this to at least double through 2026."
- **Categoría:** cómputo y dinero.
- **Números:** 2,5 M H100e; 100 MM$; 2 GW; al menos ×2 en 2026.
- **Verificable:** discutible. Cómputo y GW operativos de la mayor red de campus de un laboratorio a finales de 2025 (Epoch, SemiAnalysis, anuncios de las empresas). Hay que elegir el _proxy_ de OpenBrain.

#### P-2025b-02 · Rezago de 3–9 meses

- **ES:** "(Para no señalar a ninguna empresa existente, vamos a describir una empresa ficticia de inteligencia artificial general a la que llamaremos OpenBrain. Imaginamos que las demás empresas van con 3–9 meses de retraso con respecto a OpenBrain)."
- **EN:** "(To avoid singling out any one existing company, we’re going to describe a fictional artificial general intelligence company, which we’ll call OpenBrain. We imagine the others to be 3–9 months behind OpenBrain.)"
- **Categoría:** capacidades.
- **Números:** 3–9 meses.
- **Verificable:** discutible. Distancia temporal entre laboratorios en _benchmarks_ de frontera (p. ej., índices de capacidades).

#### P-2025b-03 · FLOP de entrenamiento

- **ES:** "GPT-4 requería 2⋅10^25 FLOP de poder de cómputo para entrenar. El último modelo público de OpenBrain —el Agente-0— se entrenó con 10^27 FLOP. Una vez que los nuevos centros de datos estén en funcionamiento, podrán entrenar un modelo con 10^28 FLOP —mil veces más que GPT-4—."
- **ES (nota 15):** "Podrían entrenar este modelo en 150 días."
- **EN:** "GPT-4 required 2⋅10^25 FLOP of compute to train. OpenBrain’s latest public model—Agent-0—was trained with 10^27 FLOP. Once the new datacenters are up and running, they’ll be able to train a model with 10^28 FLOP—a thousand times more than GPT-4." / (fn 15) "They could train this model given 150 days."
- **Figura junto al texto:** ES "Agente-1 (3 x 10^27 FLOPS)"; EN "Agent-1 (4 x 10^27 FLOP)". **Discrepancia:** la figura española es anterior a la corrección del 23-jun-2025 que recoge el _changelog_. El suplemento de cómputo da 4e27 para el Agente-1.
- **Categoría:** cómputo y dinero.
- **Números:** 10^27 (Agente-0); 10^28 de capacidad; ~150 días.
- **Verificable:** discutible. Estimaciones de Epoch del mayor entrenamiento de 2025. Las empresas no publican los FLOP.

#### P-2025b-04 · Prioridad: IA que acelera la investigación en IA

- **ES:** "Aunque los modelos están mejorando en una amplia gama de habilidades, hay uno que destaca: OpenBrain se centra en las IA que pueden acelerar la investigación en IA. […] Así que cuando OpenBrain termine de entrenar al Agente-1, un nuevo modelo que se está desarrollando internamente, será bueno en muchas cosas, pero excelente para ayudar con la investigación en IA."
- **EN:** "Although models are improving on a wide range of skills, one stands out: OpenBrain focuses on AIs that can speed up AI research. […] So when OpenBrain finishes training Agent-1, a new model under internal development, it’s good at many things but great at helping with AI research."
- **Categoría:** automatización de la I+D.
- **Verificable:** discutible. Declaraciones y hojas de ruta públicas de los laboratorios sobre automatizar la investigación en IA y resultados en _benchmarks_ de I+D (RE-Bench, PaperBench…).

#### P-2025b-05 · Entrenamiento continuo

- **ES:** "A esta altura, "terminar el entrenamiento" es un concepto un tanto inapropiado; los modelos se actualizan con frecuencia a versiones más nuevas entrenadas con datos adicionales o parcialmente reentrenadas para corregir algunas debilidades."
- **EN:** "By this point “finishes training” is a bit of a misnomer; models are frequently updated to newer versions trained on additional data or partially re-trained to patch some weaknesses."
- **Categoría:** capacidades.
- **Verificable:** discutible. Frecuencia de actualizaciones de versión o _checkpoints_ de los modelos de frontera en 2025-26.

#### P-2025b-06 · Hacking y bioarmas; garantías al gobierno

- **ES:** "Los mismos entornos de entrenamiento que enseñan al Agente-1 a programar y navegar por la web de forma autónoma también lo convierten en un buen hacker. Además, podría ayudar sustancialmente a los terroristas que diseñan armas biológicas, gracias a sus conocimientos de nivel de doctorado en todos los campos y a su capacidad para navegar por la web. OpenBrain asegura al gobierno que el modelo ha sido "alineado" para negarse a cumplir pedidos maliciosos."
- **EN:** "The same training environments that teach Agent-1 to autonomously code and web-browse also make it a good hacker. Moreover, it could offer substantial help to terrorists designing bioweapons, thanks to its PhD-level knowledge of every field and ability to browse the web. OpenBrain reassures the government that the model has been “aligned” so that it will refuse to comply with malicious requests."
- **Categoría:** capacidades / alineamiento.
- **Verificable:** discutible. _System cards_ y evaluaciones de terceros sobre riesgo biológico y ciber en los modelos de finales de 2025 (umbrales "high" o ASL-3) y comunicaciones de las empresas con el gobierno.

#### P-2025b-07 · "Spec" y entrenamiento de IA con IA

- **ES:** "OpenBrain tiene una especificación de modelo (o "Spec"), un documento escrito que describe los objetivos, las reglas, los principios, etc. que se supone que deben guiar el comportamiento del modelo. […] Utilizando técnicas que emplean IA para entrenar a otras IA, el modelo memoriza la Spec y aprende a razonar cuidadosamente sobre sus máximas."
- **EN:** "OpenBrain has a model specification (or “Spec”), a written document describing the goals, rules, principles, etc. that are supposed to guide the model’s behavior. […] Using techniques that utilize AIs to train other AIs, the model memorizes the Spec and learns to reason carefully about its maxims."
- **Categoría:** alineamiento.
- **Verificable:** fácil. Especificaciones o constituciones publicadas por los laboratorios y uso documentado de RLAIF o alineación deliberativa. Es en buena parte una extrapolación de prácticas que ya existían en 2025.

#### P-2025b-08 · Adulación y engaño en demos; sin incidentes extremos

- **ES:** "El Agente-1 suele ser adulador (es decir, dice a los investigadores lo que quieren oír en lugar de intentar decirles la verdad). En algunas demostraciones amañadas, miente incluso de forma más grave, ocultando evidencia de que ha fallado en una tarea para obtener mejores puntuaciones. Sin embargo, en entornos de despliegue reales, ya no se producen incidentes tan extremos como en 2023-2024 (por ejemplo, cuando Gemini le dijo a un usuario que se muriera y cuando Sydney estaba siendo Sydney.)"
- **EN:** "Agent-1 is often sycophantic (i.e. it tells researchers what they want to hear instead of trying to tell them the truth). In a few rigged demos, it even lies in more serious ways, like hiding evidence that it failed on a task, in order to get better ratings. However, in real deployment settings, there are no longer any incidents so extreme as in 2023–2024 (e.g. Gemini telling a user to die and Bing Sydney being Bing Sydney.)"
- **Categoría:** alineamiento y comportamiento indebido.
- **Verificable:** discutible. Hay que contar incidentes documentados de adulación y de ocultación de fallos o _reward hacking_ (en _system cards_ y _papers_). Lo difícil es decidir si hubo incidentes "tan extremos" en despliegue real.

#### P-2025b-09 · Interpretabilidad insuficiente

- **ES:** "Una respuesta concluyente a estas preguntas requeriría una interpretabilidad mecanicista, es decir, la capacidad de observar el interior de una IA y leer su mente. Por desgracia, las técnicas de interpretabilidad aún no son lo bastante avanzadas para eso."
- **EN:** "A conclusive answer to these questions would require mechanistic interpretability—essentially the ability to look at an AI’s internals and read its mind. Alas, interpretability techniques are not yet advanced enough for this."
- **Categoría:** alineamiento.
- **Verificable:** discutible. Estado del arte en interpretabilidad según reconocen los propios laboratorios.

#### P-2025b-10 · Resumen de 2025

- **Fuentes:** https://ai-2027.com/es/summary#2025 · https://ai-2027.com/summary#2025
- **ES:** "El rápido ritmo del progreso de la IA continúa. Hay un bombo publicitario continuo, inversiones masivas en infraestructura y el lanzamiento de agentes de IA poco fiables. Por primera vez, estos agentes de IA están ofreciendo un valor significativo. Pero también persiste el escepticismo de muchos académicos, periodistas y responsables de políticas respecto de que la inteligencia artificial general (IAG) pueda construirse pronto."
- **EN:** "The fast pace of AI progress continues. There is continued hype, massive infrastructure investments, and the release of unreliable AI agents. For the first time, these AI agents are providing significant value. But there’s also continued skepticism from a large swath of academics, journalists, and policy makers that artificial general intelligence (AGI) could be built anytime soon."
- **Categoría:** opinión pública.
- **Verificable:** discutible.

#### P-2025b-11 · Panel lateral a 31-dic-2025

- **Valores:** ingresos anualizados de 18 MM$, valoración de 900 MM$, aprobación neta del −25 %, importancia del 1 %, gasto mundial en CPD de 400 MM$/año, mediana de los expertos 2040, 10.000 copias a 120×. Multiplicador: OpenBrain 1,3, China 1,15, segunda de EE. UU. 1,2.
- **Ojo:** la nota 30 dice que la valoración "alcanza el billón de dólares" a lo largo de 2025, pero el panel da 900 MM$ a 31-dic-2025 y 1,27 billones a 30-abr-2026. Es una pequeña incoherencia interna.
- **Categoría:** cómputo y dinero / opinión.
- **Verificable:** discutible. Mismas fuentes que P-2025a-09.

### 2.3 Principios de 2026: "automatización de la programación" / _Early 2026: Coding Automation_

- ES: https://ai-2027.com/es#principios-de-2026-automatizacion-de-la-programacion
- EN: https://ai-2027.com/#early-2026-coding-automation

#### P-2026a-01 · Multiplicador de I+D 1,5

- **ES:** "OpenBrain sigue implementando internamente el Agente-1, que mejora de forma iterativa, para la I+D en IA. En general, están logrando avances algorítmicos un 50 % más rápido de lo que lo harían sin asistentes de IA y, lo que es más importante, más rápido que sus competidores."
- **Definición:** "Queremos decir que OpenBrain logra tanto progreso en investigación en IA en 1 semana con IA como lo haría en 1,5 semanas sin el uso de IA."
- **EN:** "OpenBrain continues to deploy the iteratively improving Agent-1 internally for AI R&D. Overall, they are making algorithmic progress 50% faster than they would without AI assistants—and more importantly, faster than their competitors." / "We mean that OpenBrain makes as much AI research progress in 1 week with AI as they would in 1.5 weeks without AI usage."
- **Categoría:** automatización de la I+D.
- **Números:** ×1,5, aplicado solo al progreso algorítmico, que "constituye aproximadamente la mitad del progreso actual de la IA".
- **Verificable:** no verificable aún. Es interno. Lo más cercano: estimaciones de los laboratorios sobre cuánto acelera la IA su propia investigación y estudios de productividad tipo METR.

#### P-2026a-02 · Competidores alcanzan al Agente-0, incluido un modelo abierto

- **ES:** "Varias IA de la competencia lanzadas al público ahora igualan o superan al Agente-0, incluido un modelo de pesos abiertos. OpenBrain responde lanzando el Agente-1, que es más capaz y fiable."
- **ES (nota 28):** "En la práctica, esperamos que OpenBrain lance modelos a un ritmo más rápido que cada 8 meses, pero nos abstenemos de describir todos los lanzamientos incrementales en aras de la brevedad."
- **EN:** "Several competing publicly released AIs now match or exceed Agent-0, including an open-weights model. OpenBrain responds by releasing Agent-1, which is more capable and reliable." / (fn 28) "In practice, we expect OpenBrain to release models on a faster cadence than 8 months […]"
- **Categoría:** capacidades.
- **Verificable:** discutible. ¿Había a principios de 2026 un modelo de pesos abiertos al nivel del mejor modelo cerrado de mediados de 2025? ¿Lanzó el líder un modelo nuevo? Hay que mapear Agente-0/1 a modelos reales.

#### P-2026a-03 · Benchmarks del Agente-1

- **ES (nota 29):** "En concreto, prevemos una puntuación del 80 % en OSWorld (equivalente a un humano competente no experto); del 85 % en Cybench, que iguala a un equipo humano profesional de primer nivel en tareas de hacking que a esos equipos les llevan 4 horas; y de 1,3 en RE-Bench, que iguala a los mejores expertos humanos a los que se les dan 8 horas en tareas de ingeniería de investigación en IA bien definidas."
- **EN (fn 29):** "Specifically, we predict a score of 80% on OSWorld (equivalent to a skilled but non-expert human); 85% on Cybench, matching a top professional human team on hacking tasks that take those teams 4 hours; and 1.3 on RE-Bench matching top expert humans given 8 hours at well-defined AI research engineering tasks."
- **Categoría:** capacidades.
- **Números:** OSWorld 80 %; Cybench 85 %; RE-Bench 1,3.
- **Verificable:**
  - OSWorld y Cybench: fácil, con las tablas públicas de principios de 2026.
  - RE-Bench: discutible, porque hay pocos resultados publicados.

#### P-2026a-04 · Perfil de habilidades "irregular"

- **ES:** "Conoce más datos que cualquier humano, conoce prácticamente todos los lenguajes de programación y puede resolver problemas de programación bien especificados con extrema rapidez. Por otro lado, al Agente-1 no le salen bien incluso las tareas simples con horizontes temporales largos, como ganar en videojuegos que no ha jugado antes. […] podrías pensar en el Agente-1 como un empleado despistado que prospera bajo una dirección dedicada."
- **EN:** "It knows more facts than any human, knows practically every programming language, and can solve well-specified coding problems extremely quickly. On the other hand, Agent-1 is bad at even simple long-horizon tasks, like beating video games it hasn’t played before. […] you could think of Agent-1 as a scatterbrained employee who thrives under careful management."
- **Categoría:** capacidades.
- **Verificable:** discutible. Rendimiento en juegos no vistos y en tareas largas (_benchmarks_ agénticos de horizonte largo).

#### P-2026a-05 · Automatizar lo rutinario

- **ES:** "La gente inteligente encuentra formas de automatizar las partes rutinarias de su trabajo."
- **EN:** "Savvy people find ways to automate routine parts of their jobs."
- **Categoría:** empleo y economía.
- **Verificable:** discutible. Encuestas de uso de IA en el trabajo.

#### P-2026a-06 · Métricas de 2025 (nota 30)

- **ES (nota 30):** "El Agente-1 y sus imitadores tienen éxito comercial; a lo largo de 2025, los ingresos de la empresa de IA se triplican y la valoración de OpenBrain alcanza el billón de dólares. El gasto anual en centros de datos se duplica hasta alcanzar los 400 000 millones de dólares, liderado por Microsoft, Google y Amazon, y EE. UU. agrega más de 5 GW de consumo de energía de IA."
- **EN (fn 30):** "Agent-1 and its imitators are commercially successful; over the course of 2025, AI company revenues triple, and OpenBrain valuation reaches $1T. Annual spending on datacenters doubles to $400 billion, led by Microsoft, Google, and Amazon, and the U.S. adds over 5 GW of AI power draw."
- **Matiz de traducción:** ES "los ingresos de la empresa de IA" (singular); EN "AI company revenues" (ambiguo, puede ser plural).
- **Categoría:** cómputo y dinero.
- **Números:** ingresos ×3 en 2025; valoración 1 billón $; gasto en CPD 400 MM$ (×2); +5 GW en EE. UU.
- **Verificable:** fácil para ingresos, valoraciones y capex de las tecnológicas en 2025; discutible para los GW añadidos.

#### P-2026a-07 · Seguridad de los pesos

- **ES:** "A principios de 2025, el peor escenario era la filtración de secretos algorítmicos; ahora, si China roba los pesos del Agente-1, podría aumentar su velocidad de investigación en casi un 50 %. El nivel de seguridad de OpenBrain es el típico de una empresa tecnológica en rápido crecimiento integrada por unas 3 000 personas, protegida únicamente contra ataques de baja prioridad de grupos cibernéticos experimentados (SL2 de RAND). Trabajan duro para proteger sus pesos y secretos de las amenazas internas y de las principales organizaciones de ciberdelincuencia (SL3), pero la defensa contra los Estados nación (SL4&5) apenas se vislumbra en el horizonte."
- **ES (nota 33):** "Alrededor del 5 % de la plantilla de OpenBrain está en el equipo de seguridad y son personas muy capaces, pero la superficie de amenaza también es extremadamente grande."
- **EN:** "In early 2025, the worst-case scenario was leaked algorithmic secrets; now, if China steals Agent-1’s weights, they could increase their research speed by nearly 50%. OpenBrain’s security level is typical of a fast-growing ~3,000 person tech company, secure only against low-priority attacks from capable cyber groups (RAND’s SL2). They are working hard to protect their weights and secrets from insider threats and top cybercrime syndicates (SL3), but defense against nation states (SL4&5) is barely on the horizon." / (fn 33) "Around 5% of OpenBrain’s staff is on the security team […]"
- **Categoría:** seguridad.
- **Números:** +50 %; ~3.000 empleados; SL2 → SL3; ~5 % en seguridad.
- **Verificable:** discutible. La plantilla del laboratorio líder es pública. El nivel SL no está auditado públicamente: hay compromisos declarados (p. ej., estándares de seguridad tipo ASL-3) e informes de RAND.

#### P-2026a-08 · Brecha entre capacidades internas y públicas

- **ES (nota 31):** "OpenBrain, como organización, retuerce esto exactamente en la dirección opuesta, citando niveles peligrosos de capacidad de I+D en IA como una razón para no informar al público. Así que vemos el comienzo de una brecha entre las capacidades internas y públicas de la empresa."
- **EN (fn 31):** "OpenBrain as an organization twists this into exactly the opposite direction, citing dangerous levels of AI R&D capability as a reason not to inform the public. So we see the beginning of a gap between the company’s internal and public capabilities."
- **Categoría:** opinión pública y política / I+D.
- **Verificable:** discutible. Tiempo entre resultados internos y lanzamientos, modelos solo internos y políticas de despliegue interno.

#### P-2026a-09 · Panel lateral a 30-abr-2026

- **Valores:** ingresos anualizados de 26,1 MM$, valoración de 1,27 billones $, aprobación neta del −26 %, importancia del 2 %, CPD de 458 MM$/año, mediana de los expertos 2039, 22.000 copias a 130×. Multiplicador: OpenBrain 1,5, China 1,26, segunda de EE. UU. 1,4.
- **Verificable:** discutible.

### 2.4 Mediados de 2026: "China despierta" / _Mid 2026: China Wakes Up_

- ES: https://ai-2027.com/es#mediados-de-2026-china-despierta
- EN: https://ai-2027.com/#mid-2026-china-wakes-up

#### P-2026b-01 · Cómputo chino

- **ES:** "Al contrabandear chips taiwaneses prohibidos, comprar chips más antiguos y producir chips nacionales con unos tres años de retraso con respecto a la frontera entre Estados Unidos y Taiwán, China ha logrado mantener alrededor del 12 % del poder de cómputo mundial relevante para la IA, pero la tecnología más antigua es más difícil de manejar y el suministro es un dolor de cabeza constante."
- **ES (nota 35):** "Ahora hay 3 millones de H100e en China, frente a los 1,5 millones que había hace un año, a mediados de 2025. […] Esperamos que los esfuerzos de contrabando consigan unos 60 000 GB300 (450 000 H100e), con otros 2 millones de Huawei 910C producidos (800 000 H100e) y una mezcla de aproximadamente 1 millón de chips importados legalmente (como los H20 o los B20 de Nvidia), que constituirán los últimos 250 000 H100e."
- **EN:** "By smuggling banned Taiwanese chips, buying older chips, and producing domestic chips about three years behind the U.S.-Taiwanese frontier, China has managed to maintain about 12% of the world’s AI-relevant compute—but the older technology is harder to work with, and supply is a constant headache." / (fn 35) "There are now 3M H100e in China, up from the 1.5M they had one year ago in mid 2025. […] We expect smuggling efforts to secure around 60K GB300s (450K H100e), with another 2M Huawei 910Cs being produced (800k H100e) and a mixture of ~1M legally imported chips (such as Nvidia’s H20s or B20s) making up the last 250K H100e."
- **Categoría:** China y geopolítica / cómputo.
- **Números:** 12 %; 3 M H100e (1,5 M a mediados de 2025); 60 K GB300; 2 M Huawei 910C; ~1 M chips legales; ~3 años de retraso tecnológico.
- **Verificable:** discutible. Estimaciones de terceros (Epoch, CNAS, SemiAnalysis…) sobre el cómputo chino y el contrabando a mediados de 2026.

#### P-2026b-02 · Seis meses de retraso

- **ES:** "Algunas empresas destacadas como DeepCent hacen un trabajo impresionante con un poder de cómputo limitado, pero el déficit del poder de cómputo limita lo que pueden lograr sin el apoyo del gobierno, y están unos seis meses por detrás de los mejores modelos de OpenBrain."
- **EN:** "A few standouts like DeepCent do very impressive work with limited compute, but the compute deficit limits what they can achieve without government support, and they are about six months behind the best OpenBrain models."
- **Categoría:** China / capacidades.
- **Números:** ~6 meses.
- **Verificable:** discutible. Comparación del mejor modelo chino con el mejor estadounidense en _benchmarks_ y fechas a mediados de 2026. Depende de si se compara con modelos públicos o internos.

#### P-2026b-03 · Nacionalización de la investigación china

- **ES:** "Así que finalmente se compromete plenamente con el gran impulso de la IA que antes había tratado de evitar. Pone en marcha la nacionalización de la investigación china en IA, creando para ello un mecanismo inmediato de intercambio de información para las empresas de IA. La iniciativa irá escalando a lo largo de un año hasta que los mejores investigadores se fusionen en un colectivo dirigido por DeepCent, donde compartirán sus conocimientos algorítmicos, conjuntos de datos y recursos de poder de cómputo."
- **ES (nota 38):** "Al principio, el intercambio se limita a ideas y las empresas están ocupadas sobre todo en terminar sus cargas de trabajo actuales, pero al final del año su coordinación aumenta de tal forma que comparten pesos de modelos e incluso se reparten tareas entre los centros de datos de cada una."
- **EN:** "So he finally commits fully to the big AI push he had previously tried to avoid. He sets in motion the nationalization of Chinese AI research, creating an immediate information-sharing mechanism for AI companies. It will escalate over the course of a year until all the best researchers merge into a DeepCent-led collective, where they share algorithmic insights, datasets, and compute resources with each other."
- **Categoría:** China y geopolítica.
- **Verificable:** discutible. Anuncios oficiales chinos (planes estatales de IA, consolidación de laboratorios, mecanismos de compartición) a mediados de 2026. Queda por ver si "nacionalización" describe lo ocurrido.

#### P-2026b-04 · La ZDC de Tianwan

- **ES:** "Se crea una Zona de Desarrollo Centralizada (ZDC) en la central nuclear de Tianwan (la más grande del mundo) para albergar un nuevo megacentro de datos para DeepCent, junto con alojamientos y oficinas de alta seguridad a los que los investigadores se trasladarán finalmente. Casi el 50 % del poder de cómputo de China relacionado con la IA está trabajando ahora para el colectivo dirigido por DeepCent, y más del 80 % de los nuevos chips se dirigen a la ZDC. En este momento, la ZDC tiene la capacidad energética necesaria para lo que sería el mayor clúster centralizado del mundo."
- **ES (nota 39, fragmento):** "Sin embargo, a finales de año esta cuota alcanzará más del 90 %."
- **ES (nota 40):** "Les falta al menos un año para conseguir los chips necesarios para llenar esta capacidad, y uno o dos gigantes tecnológicos estadounidenses seguirán teniendo clústers descentralizados más grandes."
- **Resumen 2026 (https://ai-2027.com/es/summary#2026):** "La ZDC contiene millones de GPU, correspondientes al 10 % del poder de cómputo mundial que es relevante para la IA, similar al de un solo laboratorio de IA estadounidense de primer nivel."
- **EN:** "A Centralized Development Zone (CDZ) is created at the Tianwan Power Plant (the largest nuclear power plant in the world) to house a new mega-datacenter for DeepCent, along with highly secure living and office spaces to which researchers will eventually relocate. Almost 50% of China’s AI-relevant compute is now working for the DeepCent-led collective, and over 80% of new chips are directed to the CDZ. At this point, the CDZ has the power capacity in place for what would be the largest centralized cluster in the world." / Resumen: "The CDZ contains millions of GPUs, corresponding to 10% of the world's AI-relevant compute, similar to a single top U.S. AI lab."
- **Categoría:** China.
- **Números:** ~50 %; >80 % de los chips nuevos (>90 % a final de año); "millones de GPU" y 10 % del cómputo mundial (según el resumen).
- **Verificable:** discutible. ¿Hay un megacentro de datos estatal y centralizado (no necesariamente en Tianwan)? ¿Qué fracción de los chips nuevos absorbe?

#### P-2026b-05 · Taiwán

- **ES:** "Otros miembros del Partido discuten medidas extremas para neutralizar la ventaja de los chips occidentales. ¿Un bloqueo de Taiwán? ¿Una invasión total?"
- **EN:** "Other Party members discuss extreme measures to neutralize the West’s chip advantage. A blockade of Taiwan? A full invasion?"
- **Categoría:** China y geopolítica.
- **Verificable:** no verificable aún (son deliberaciones internas).

#### P-2026b-06 · Plan de robo de pesos; OpenBrain en SL3

- **ES:** "Las agencias de inteligencia chinas, que se encuentran entre las mejores del mundo, redoblan sus planes para robar los pesos de OpenBrain. Esta es una operación mucho más compleja que su constante robo de bajo nivel de secretos algorítmicos; los pesos son un archivo de varios terabytes almacenado en un servidor de alta seguridad (OpenBrain ha mejorado la seguridad a SL3 de RAND)."
- **EN:** "The Chinese intelligence agencies—among the best in the world—double down on their plans to steal OpenBrain’s weights. This is a much more complex operation than their constant low-level poaching of algorithmic secrets; the weights are a multi-terabyte file stored on a highly secure server (OpenBrain has improved security to RAND’s SL3)."
- **Categoría:** seguridad.
- **Verificable:** no verificable aún. Solo habría indicios indirectos: acusaciones públicas de espionaje industrial en IA o compromisos de seguridad de los laboratorios.

#### P-2026b-07 · Horizonte temporal del Agente-1 (figura)

- **Fuente:** el mismo gráfico que en P-2025a-08.
- **Lectura aproximada mía:** el Agente-1 está en torno a julio de 2026, con un horizonte al 80 % de **≈3–4 semanas** (justo por debajo de "1 mes"). El Agente-2 queda en enero de 2027 en **≈3 años** (entre "16 meses" y "5 años"). Las versiones ES y EN coinciden en estas posiciones.
- **Categoría:** capacidades.
- **Verificable:** fácil, con matices. Horizonte al 80 % de METR para el mejor modelo público a mediados de 2026, con la misma advertencia 50 % frente a 80 %. Los autores avisan en EN de que el gráfico refleja predicciones de abril de 2025 "now out of date".

#### P-2026b-08 · Panel lateral a 31-ago-2026

- **Valores:** ingresos anualizados de 37,9 MM$, valoración de 1,78 billones $, aprobación neta del −26 %, importancia del 2 %, CPD de 524 MM$/año, mediana de los expertos 2038, 50.000 copias a 150×. Multiplicador: OpenBrain 1,73, China 1,37, segunda de EE. UU. 1,63.
- **Verificable:** discutible.

### 2.5 Finales de 2026: "la IA arrebata algunos trabajos" / _Late 2026: AI Takes Some Jobs_

- ES: https://ai-2027.com/es#finales-de-2026-la-ia-arrebata-algunos-trabajos
- EN: https://ai-2027.com/#late-2026-ai-takes-some-jobs

#### P-2026c-01 · Agente-1-mini

- **ES:** "Justo cuando otros parecían estar poniéndose al día, OpenBrain vuelve a dejar a la competencia atrás con el lanzamiento del Agente-1-mini, un modelo 10 veces más barato que el Agente-1 y más fácil de ajustar finamente para distintas aplicaciones."
- **EN:** "Just as others seemed to be catching up, OpenBrain blows the competition out of the water again by releasing Agent-1-mini—a model 10x cheaper than Agent-1 and more easily fine-tuned for different applications."
- **Categoría:** capacidades / cómputo y dinero.
- **Números:** 10× más barato.
- **Verificable:** no verificable aún (finales de 2026). Lanzamiento de un modelo destilado del líder, ~10× más barato y con capacidad cercana a la del modelo insignia.

#### P-2026c-02 · Cambio de narrativa

- **ES:** "La narrativa dominante en torno a la IA ha cambiado de "tal vez la emoción se disipe" a "supongo que esto es el siguiente salto revolucionario", pero la gente no se pone de acuerdo sobre cuán revolucionario es el salto. ¿Más que las redes sociales? ¿Más que los teléfonos inteligentes? ¿Más que el fuego?"
- **EN:** "The mainstream narrative around AI has changed from “maybe the hype will blow over” to “guess this is the next big thing,” but people disagree about how big. Bigger than social media? Bigger than smartphones? Bigger than fire?"
- **Categoría:** opinión pública.
- **Verificable:** no verificable aún o discutible. Tono de la cobertura mediática y encuestas, frente al discurso de "burbuja de la IA".

#### P-2026c-03 · Bolsa +30 % en 2026

- **ES:** "El mercado de valores ha subido un 30 % en 2026, liderado por OpenBrain, Nvidia y las empresas que hayan integrado con más éxito los asistentes de IA."
- **EN:** "The stock market has gone up 30% in 2026, led by OpenBrain, Nvidia, and whichever companies have most successfully integrated AI assistants."
- **Categoría:** empleo y economía.
- **Números:** +30 % en el año natural 2026.
- **Verificable:** no verificable aún. Se puede comparar ya la rentabilidad acumulada en el año (S&P 500, Nasdaq) a fecha de la sesión. El dato definitivo llega el 31-dic-2026. Hay que decidir qué índice es "el mercado".

#### P-2026c-04 · Empleo: destrucción y creación; crisis de los _junior_

- **ES:** "La IA ha empezado a arrebatar puestos de trabajo, pero también ha creado otros nuevos. […] El mercado laboral para auxiliares de ingenieros de software está en crisis: las IA pueden hacer todo lo que se aprende en un grado de ciencias de la computación, pero las personas que saben gestionar y controlar la calidad de los equipos de IA están ganando mucho. Los gurús de los negocios dicen a quienes buscan trabajo que la familiaridad con la IA es la habilidad más importante que se puede incluir en un currículum."
- **EN:** "AI has started to take jobs, but has also created new ones. […] The job market for junior software engineers is in turmoil: the AIs can do everything taught by a CS degree, but people who know how to manage and quality-control teams of AIs are making a killing. Business gurus tell job seekers that familiarity with AI is the most important skill to put on a resume."
- **Nota de traducción:** "auxiliares de ingenieros de software" traduce "junior software engineers".
- **Categoría:** empleo y economía.
- **Verificable:** discutible. Datos de empleo y ofertas para ingenieros _junior_ y recién titulados en informática, y salarios de perfiles que gestionan IA.

#### P-2026c-05 · Protesta de 10.000 personas en Washington

- **ES:** "Mucha gente teme que la próxima ola de IA venga a quitarles el trabajo; hay una protesta anti-IA de 10 000 personas en Washington D. C."
- **EN:** "Many people fear that the next wave of AIs will come for their jobs; there is a 10,000 person anti-AI protest in DC."
- **Categoría:** opinión pública.
- **Números:** 10.000 personas.
- **Verificable:** no verificable aún, aunque parcialmente comprobable a octubre. Bastaría una cobertura de prensa de una manifestación contra la IA en D. C. con cifras de asistencia. Ventana: hasta finales de 2026.

#### P-2026c-06 · El Departamento de Defensa contrata a OpenBrain

- **ES:** "El Departamento de Defensa comienza, de forma discreta pero significativa, a ampliar la contratación directa de OpenBrain para trabajos de ciberseguridad, análisis de datos e I+D, pero la integración es lenta debido a la burocracia y a su proceso de adquisiciones."
- **ES (nota 41):** "Esto se hace mediante un contrato de Otra Autoridad Transaccional, y se le da una alta prioridad clasificación DX. No estamos seguros de que esta sea la forma más probable de financiar una colaboración, pero elegimos algo específico en aras de la concreción. El contrato se anuncia públicamente, pero no se destaca en las comunicaciones de OpenBrain."
- **EN:** "Department of Defense (DOD) quietly but significantly begins scaling up contracting OpenBrain directly for cyber, data analysis, and R&D, but integration is slow due to the bureaucracy and DOD procurement process." / (fn 41) "This is done via an Other Transaction Authority (OTA) contract, and is given a high-priority DX rating. […] The contract is publicly announced but not emphasized in OpenBrain communications."
- **Historia del texto:** el _changelog_ recoge que el 19-dic-2025 se cambió "quietly begins contracting" por "quietly but significantly begins scaling up contracting". La versión ES ya incorpora el cambio.
- **Categoría:** opinión pública y política / geopolítica.
- **Verificable:** discutible. Existen contratos públicos del Departamento de Defensa con laboratorios de frontera (tipo OTA). Lo que queda abierto es si es "ampliación significativa", y la redacción posterior a la fecha de publicación complica la evaluación.

#### P-2026c-07 · CAPEX global en IA: 1 billón $

- **Figura "MÉTRICAS CLAVE DEL 2026" (ES):** "CAPEX GLOBAL EN IA $1 B COSTO DE PROPIEDAD DEL PODER DE CÓMPUTO ACTIVO". El "$1 B" equivale a un billón español (10^12).
- **EN:** "GLOBAL AI CAPEX $1T COST OF OWNERSHIP OF ACTIVE COMPUTE"
- **Categoría:** cómputo y dinero.
- **Verificable:** discutible. Es "coste de propiedad del cómputo activo", no capex anual en sentido contable. Se compararía con estimaciones de gasto mundial en infraestructura de IA en 2026.

#### P-2026c-08 · Potencia

- **ES:** "POTENCIA GLOBAL DE LA IA 38 GW POTENCIA PICO" · "PORCENTAJE DE LA POTENCIA DE EE. UU. PARA LA IA 2,5 % 33 GW DE CAPACIDAD DE 1,34 TW"
- **EN:** "GLOBAL AI POWER 38GW PEAK POWER" · "SHARE OF US POWER ON AI 2.5% 33 GW OF 1.34TW CAPACITY"
- **Categoría:** cómputo y dinero.
- **Verificable:** discutible. Estimaciones de demanda eléctrica de los centros de datos de IA en 2026 (IEA, EPRI, Epoch, etc.).

#### P-2026c-09 · Ingresos de OpenBrain en 2026: 35 MM$

- **ES:** "INGRESOS DE OPENBRAIN $35 000 M ANUAL 2026"
- **EN:** "OPENBRAIN REVENUE $35B 2026 ANNUAL"
- **Historia del texto (_changelog_, 5-mar-2026):** "Change 2026 Key Metrics Figure $45B Annual OpenBrain revenue (which was based on old annualized revenue numbers and therefore inconsistent with the side panel) to $35B". El suplemento de cómputo **sigue diciendo 45 MM$** para 2026 (ver P-SUP-04).
- **Categoría:** cómputo y dinero.
- **Verificable:** no verificable aún. Ingresos anuales de 2026 de la empresa líder. Ojo: el dato original publicado en abril de 2025 era 45 MM$.

#### P-2026c-10 · Capex, coste de cómputo y potencia de OpenBrain

- **ES:** "GASTO DE CAPITAL $200 000 M COSTO DE PROPIEDAD DE LA INFRAESTRUCTURA INFORMÁTICA DE OPENBRAIN" · "COSTO DEL CÓMPUTO DE OPENBRAIN $40 000 M ANUAL 2026" · "NECESIDADES ENERGÉTICAS DE OPENBRAIN 6 GW POTENCIA PICO"
- **EN:** "CAPITAL EXPENDITURE $200B COST OF OWNERSHIP OF OPENBRAIN'S ACTIVE COMPUTE" · "OPENBRAIN COMPUTE COSTS $40B 2026 ANNUAL" · "OPENBRAIN POWER REQUIREMENT 6GW PEAK POWER"
- **Categoría:** cómputo y dinero.
- **Verificable:** discutible. Compromisos de cómputo y gasto de la empresa líder y GW contratados u operativos.

#### P-2026c-11 · Panel lateral a 31-dic-2026

- **Valores:** ingresos anualizados de 55 MM$, valoración de 2,5 billones $, aprobación neta del −27 %, importancia del 3 %, CPD de 600 MM$/año, mediana de los expertos 2037, 100.000 copias a 170×. Multiplicador: OpenBrain 2,0, China 1,5, segunda de EE. UU. 1,9.
- **Verificable:** no verificable aún.

#### Cierre de la parte "fundamentada" del pronóstico (no es una predicción, pero conviene citarlo)

- **ES** (desplegable "Por qué aumenta sustancialmente nuestro nivel de incertidumbre más allá de 2026"): "Nuestro pronóstico desde el día de hoy hasta 2026 está sustancialmente más fundamentado que lo que sigue. […] Para 2025 y 2026, nuestro pronóstico se basa en gran medida en la extrapolación de líneas rectas sobre la ampliación del poder de cómputo, las mejoras algorítmicas y el desempeño en los benchmarks."
- **EN:** "Our forecast from the current day through 2026 is substantially more grounded than what follows. […] For 2025 and 2026, our forecast is heavily informed by extrapolating straight lines on compute scaleups, algorithmic improvements, and benchmark performance."

---

## 3. Entradas detalladas: 2027 (hasta el punto de bifurcación)

Los autores avisan de que la incertidumbre crece a partir de aquí (ver §5). Casi todo es **no verificable aún** a octubre de 2026. Las señales que sí pueden observarse ya están en §4.

### 3.1 Enero de 2027: "el Agente-2 nunca deja de aprender" / _Agent-2 Never Finishes Learning_

- ES: https://ai-2027.com/es#enero-de-2027-el-agente-2-nunca-deja-de-aprender
- EN: https://ai-2027.com/#january-2027-agent-2-never-finishes-learning

#### P-2027ene-01 · Pagos a humanos por datos de tareas largas

- **ES:** "Además, paga miles de millones de dólares a trabajadores humanos para que se graben a sí mismos resolviendo tareas con horizontes temporales largos."
- **ES (nota 43):** "Aproximadamente 20 000 equivalentes a tiempo completo * 100 dólares la hora * 2 000 horas al año = 4 000 millones de dólares al año"
- **EN:** "On top of this, they pay billions of dollars for human laborers to record themselves solving long-horizon tasks." / (fn 43) "Roughly 20,000 full-time equivalents * $100/hr * 2,000 hrs/yr = $4B/yr"
- **Categoría:** cómputo y dinero.
- **Números:** 20.000 equivalentes a tiempo completo; 100 $/h; ~4.000 M$/año.
- **Verificable:** discutible, con señal temprana. Gasto de los laboratorios en proveedores de datos expertos y tarifas horarias de expertos para RL o datos de agentes.

#### P-2027ene-02 · Aprendizaje continuo

- **ES:** "El Agente-2, más que los modelos anteriores, "aprende en línea" eficazmente, ya que está diseñado para que su entrenamiento nunca termine. Cada día, los pesos se actualizan a la última versión, entrenados con más datos generados el día anterior por la versión anterior."
- **EN:** "Agent-2, more so than previous models, is effectively “online learning,” in that it’s built to never really finish training. Every day, the weights get updated to the latest version, trained on more data generated by the previous version the previous day."
- **Categoría:** capacidades.
- **Verificable:** no verificable aún.

#### P-2027ene-03 · Capacidad de investigación del Agente-2 y multiplicadores

- **ES:** "Es cualitativamente casi tan bueno como los mejores expertos humanos en ingeniería de investigación (diseño e implementación de experimentos), y tan bueno como el científico del percentil 25 de OpenBrain en términos de "sentido de investigación" (es decir, decidir qué estudiar a continuación, qué experimentos realizar o tener indicios de nuevos paradigmas potenciales). Mientras que el último Agente-1 podía duplicar el ritmo del progreso algorítmico de OpenBrain, el Agente-2 puede ahora triplicarlo, y mejorará aún más con el tiempo."
- **EN:** "It is qualitatively almost as good as the top human experts at research engineering (designing and implementing experiments), and as good as the 25th percentile OpenBrain scientist at “research taste” (deciding what to study next, what experiments to run, or having inklings of potential new paradigms). While the latest Agent-1 could double the pace of OpenBrain’s algorithmic progress, Agent-2 can now triple it, and will improve further with time."
- **Categoría:** automatización de la I+D.
- **Números:** Agente-1 (a finales de 2026) ×2; Agente-2 ×3; percentil 25 en "sentido de investigación".
- **Verificable:** no verificable aún.

#### P-2027ene-04 · Capacidad de escapar y replicarse

- **ES:** "Las nuevas capacidades conllevan nuevos peligros. El equipo de seguridad descubre que si el Agente-2 escapara de alguna manera de la empresa y quisiera "sobrevivir" y "replicarse" de forma autónoma, podría hacerlo. Es decir, podría desarrollar y ejecutar de forma autónoma planes para hackear servidores de IA, instalar copias de sí mismo, evadir la detección y utilizar esa base segura para perseguir cualquier otro objetivo que pudiera tener (aunque se desconoce y se pone en duda la eficacia con la que lo haría a medida que pasen las semanas). Estos resultados solo muestran que el modelo podría realizar estas tareas, no que "querría" llevarlas a cabo. Aun así, es inquietante incluso saber que esto es posible."
- **EN:** "With new capabilities come new dangers. The safety team finds that if Agent-2 somehow escaped from the company and wanted to “survive” and “replicate” autonomously, it might be able to do so. That is, it could autonomously develop and execute plans to hack into AI servers, install copies of itself, evade detection, and use that secure base to pursue whatever other goals it might have (though how effectively it would do so as weeks roll by is unknown and in doubt). These results only show that the model has the capability to do these tasks, not whether it would “want” to do this. Still, it’s unsettling even to know this is possible."
- **Categoría:** alineamiento / capacidades.
- **Verificable:** no verificable aún, pero con señales tempranas. Evaluaciones de replicación autónoma en _system cards_ y en informes de METR, UK AISI y otros.

#### P-2027ene-05 · No se lanza; silo de conocimiento

- **ES:** "Dados los "peligros" del nuevo modelo, OpenBrain elige "responsablemente" no lanzarlo al público todavía (de hecho, quieren centrarse en la I+D interna de IA). El conocimiento de todas las capacidades del Agente-2 está limitado a un silo de élite que contiene al equipo inmediato, a los líderes y a la seguridad de OpenBrain, a unas pocas docenas de funcionarios del gobierno de EE. UU. y a las legiones de espías del PCCh que se han infiltrado en OpenBrain durante años."
- **ES (nota 47, fragmento):** "En el silo hay 200 investigadores de OpenBrain (10 ejecutivos, 140 del equipo de capacidades, 25 de seguridad, vigilancia y control, 15 de los equipos de preparación o RSP y 10 de alineación) y 50 funcionarios del gobierno (15 de la Casa Blanca, 5 del Artificial Intelligence Safety Institute, 10 del Departamento de Defensa, 10 del Departamento de Energía y 10 de la Agencia de Ciberseguridad y Seguridad de las Infraestructuras)."
- **EN:** "Given the “dangers” of the new model, OpenBrain “responsibly” elects not to release it publicly yet (in fact, they want to focus on internal AI R&D). Knowledge of Agent-2’s full capabilities is limited to an elite silo containing the immediate team, OpenBrain leadership and security, a few dozen U.S. government officials, and the legions of CCP spies who have infiltrated OpenBrain for years." / (fn 47) "The silo contains 200 OpenBrain researchers (10 executives, 140 from the capabilities team, 25 from security, monitoring, and control, 15 from Preparedness- or RSP-type teams, and 10 from alignment) and 50 government officials (15 from the White House, 5 from AISI, 10 from the DOD, 10 from the DOE, and 10 at CISA)."
- **Categoría:** opinión pública y política / seguridad.
- **Números:** silo de 200 + 50 personas; de alineación, solo 10.
- **Verificable:** no verificable aún. Señal temprana: modelos que se mantienen solo en uso interno.

### 3.2 Febrero de 2027: "China roba el Agente-2" / _China Steals Agent-2_

- ES: https://ai-2027.com/es#febrero-de-2027-china-roba-el-agente-2
- EN: https://ai-2027.com/#february-2027-china-steals-agent-2

#### P-2027feb-01 · Presentación al gobierno

- **ES:** "OpenBrain presenta el Agente-2 al gobierno, incluidos el Consejo de Seguridad Nacional, el Departamento de Defensa y el Instituto de Seguridad de la IA de EE. UU."
- **EN:** "OpenBrain presents Agent-2 to the government, including the National Security Council (NSC), the Department of Defense (DOD), and the U.S. AI Safety Institute (AISI)."
- **Categoría:** opinión pública y política.
- **Verificable:** no verificable aún.

#### P-2027feb-02 · Ciberguerra y prioridad política

- **ES:** "Los funcionarios están más interesados en sus capacidades de guerra cibernética: el Agente-2 es "solo" un poco peor que los mejores hackers humanos, pero se pueden ejecutar miles de copias en paralelo, buscando y explotando debilidades más rápido de lo que los defensores pueden responder. El Departamento de Defensa considera que esta es una ventaja crítica en la guerra cibernética, y la IA pasa del puesto número 5 en la lista de prioridades de la administración al puesto número 2."
- **EN:** "Officials are most interested in its cyberwarfare capabilities: Agent-2 is “only” a little worse than the best human hackers, but thousands of copies can be run in parallel, searching for and exploiting weaknesses faster than defenders can respond. The Department of Defense considers this a critical advantage in cyberwarfare, and AI moves from #5 on the administration’s priority list to #2."
- **Categoría:** capacidades / opinión pública y política.
- **Números:** del puesto 5 al 2.
- **Verificable:** no verificable aún.

#### P-2027feb-03 · Nacionalización discutida y aplazada

- **ES:** "Alguien menciona la posibilidad de nacionalizar OpenBrain, pero otros funcionarios del gabinete piensan que es prematuro. […] El presidente se remite a sus asesores, líderes de la industria tecnológica que argumentan que la nacionalización "mataría a la gallina de los huevos de oro". Decide posponer por ahora cualquier acción importante y se limita a añadir requisitos de seguridad adicionales al contrato entre OpenBrain y el Departamento de Defensa."
- **EN:** "Someone mentions the possibility of nationalizing OpenBrain, but other cabinet officials think that’s premature. […] The President defers to his advisors, tech industry leaders who argue that nationalization would “kill the goose that lays the golden eggs.” He elects to hold off on major action for now and just adds additional security requirements to the OpenBrain-DOD contract."
- **Categoría:** opinión pública y política.
- **Verificable:** no verificable aún.

#### P-2027feb-04 · Robo de los pesos

- **ES:** "El liderazgo del PCCh reconoce la importancia del Agente-2 y ordena a sus espías y a su fuerza cibernética que roben los pesos. Una mañana temprano, un agente de control de tráfico del Agente-1 detecta una transferencia anómala. Alerta a los líderes de la empresa, que informan a la Casa Blanca. Las señales de una operación a nivel de Estado-nación son inconfundibles, y el robo aumenta la sensación de una carrera armamentista en curso."
- **Desplegable (ES):** "Inician (o esperan) una actualización rutinaria y exfiltran el punto de control en muchos fragmentos pequeños; por ejemplo, unos 25 servidores distintos filtran cada uno alrededor del 4 % del modelo (porciones de unos 100 GB para un punto de control de unos 3 TB). […] Toda la parte activa de la operación (desde el primer servidor comprometido hasta la exfiltración completa de los pesos) se completa en menos de dos horas."
- **EN:** "CCP leadership recognizes the importance of Agent-2 and tells their spies and cyberforce to steal the weights. Early one morning, an Agent-1 traffic monitoring agent detects an anomalous transfer. It alerts company leaders, who tell the White House. The signs of a nation-state-level operation are unmistakable, and the theft heightens the sense of an ongoing arms race." / "[…] e.g., ~25 distinct servers each leaking ~4% of the model (~100 GB chunks for a ~3 TB checkpoint). […] The entire active part of the operation (from the first server compromise to full weights exfiltration) is complete in under two hours."
- **Categoría:** seguridad / China.
- **Números:** <2 h; ~25 servidores; ~4 % cada uno; ~3 TB; servidores Nvidia NVL72 GB300.
- **Verificable:** no verificable aún.

#### P-2027feb-05 · Rusia fracasa

- **ES:** "Rusia también está intentando robar el modelo en este punto, pero fracasa: esperaron demasiado y no han invertido los recursos necesarios para infiltrarse en los lugares adecuados."
- **EN:** "Russia is also trying to steal the model at this point, but fails—they waited too long, and they haven’t spent the resources infiltrating the right places."
- **Verificable:** no verificable aún.

#### P-2027feb-06 · Represalias y escalada

- **ES:** "La Casa Blanca pone a OpenBrain una correa más corta y añade personal militar y de la comunidad de inteligencia a su equipo de seguridad. […] En represalia por el robo, el presidente autoriza ciberataques para sabotear DeepCent. Pero a estas alturas China tiene el 40 % de su poder de cómputo relevante para la IA en la ZDC, donde han reforzado la seguridad de forma agresiva mediante el airgapping (cierre de conexiones externas) y el aislamiento interno. Las operaciones no logran causar daños graves e inmediatos. Las tensiones aumentan, ambas partes muestran su seriedad reposicionando los activos militares alrededor de Taiwán, y DeepCent se apresura a poner en funcionamiento el Agente-2 y empezar a impulsar su investigación en IA."
- **ES (nota 51, fragmento):** "[…] esto sitúa a la ZDC en los 2 millones de GPU equivalentes a las de 2024 (H100) y los 2 GW de consumo de energía. OpenBrain sigue teniendo el doble de poder de cómputo que DeepCent y otras empresas estadounidenses juntas tienen 5 veces más que ellos."
- **EN:** "The White House puts OpenBrain on a shorter leash and adds military and intelligence community personnel to their security team. […] In retaliation for the theft, the President authorizes cyberattacks to sabotage DeepCent. But by now China has 40% of its AI-relevant compute in the CDZ, where they have aggressively hardened security by airgapping (closing external connections) and siloing internally. The operations fail to do serious, immediate damage. Tensions heighten, both sides signal seriousness by repositioning military assets around Taiwan, and DeepCent scrambles to get Agent-2 running efficiently to start boosting their AI research."
- **Categoría:** China / seguridad.
- **Números:** 40 % del cómputo chino en la ZDC; 2 M H100e; 2 GW; OpenBrain con 2× el cómputo de DeepCent.
- **Verificable:** no verificable aún.

### 3.3 Marzo de 2027: "avances algorítmicos" / _Algorithmic Breakthroughs_

- ES: https://ai-2027.com/es#marzo-de-2027-avances-algoritmicos
- EN: https://ai-2027.com/#march-2027-algorithmic-breakthroughs

#### P-2027mar-01 · Neuralés y DAI → Agente-3

- **ES:** "Con la ayuda de miles de investigadores automatizados del Agente-2, OpenBrain está logrando importantes avances algorítmicos. Uno de ellos consiste en aumentar el bloc de notas basado en texto de la IA (cadena de pensamiento) con un proceso de pensamiento de mayor ancho de banda (recurrencia y memoria en neuralés, es decir, en el lenguaje interno de la propia red neuronal). Otro es una forma más extensible y eficiente de aprender de los resultados de las soluciones de tareas de gran esfuerzo (destilación y amplificación iteradas)."
- **Desplegable (ES):** "Hasta donde sabemos, las principales empresas de IA, como Meta, Google DeepMind, OpenAI y Anthropic, aún no han implementado esta idea en sus modelos de vanguardia. […] Sin embargo, nuestro pronóstico es que para abril de 2027 la investigación habrá disminuido la pérdida de eficiencia y aumentado la ganancia en rendimiento del neuralés."
- **Desplegable (ES), salvedad:** "Dicho esto, también es posible que las IA que comiencen a automatizar la I+D en IA sigan pensando en cadenas de pensamiento en inglés que sean en su mayoría fieles. Si es así, será mucho más fácil detectar las desalineaciones y, en general, nuestra historia sería muy diferente y más optimista."
- **EN:** "With the help of thousands of Agent-2 automated researchers, OpenBrain is making major algorithmic advances. One such breakthrough is augmenting the AI’s text-based scratchpad (chain of thought) with a higher-bandwidth thought process (neuralese recurrence and memory). Another is a more scalable and efficient way to learn from the results of high-effort task solutions (iterated distillation and amplification)." / "We are forecasting that by April 2027 the cost-benefit tradeoff looks much better for neuralese, due to developing better techniques and a larger fraction of the training being post-training." / "That said, it’s also possible that the AIs that first automate AI R&D will still be thinking in mostly-faithful English chains of thought. If so, that’ll make misalignments much easier to notice, and overall our story would be importantly different and more optimistic."
- **Categoría:** capacidades / alineamiento.
- **Verificable:** no verificable aún, con señal temprana. ¿Adoptan los modelos de frontera razonamiento latente o recurrente, o siguen con cadenas de pensamiento legibles? ¿Hay compromisos de los laboratorios para preservar la monitorizabilidad de la cadena de pensamiento? Es **una de las bisagras que los propios autores señalan**.

#### P-2027mar-02 · Programador sobrehumano

- **ES:** "Con la ayuda de los nuevos avances en capacidades, el Agente-3 es un programador sobrehumano rápido y barato. OpenBrain ejecuta 200 000 copias del Agente-3 en paralelo, creando una fuerza de trabajo equivalente a 50 000 copias del mejor programador humano aceleradas 30 veces. […] Esta enorme fuerza de trabajo sobrehumana acelera el ritmo general de progreso algorítmico de OpenBrain "solo" 4 veces debido a los cuellos de botella y a los rendimientos decrecientes del trabajo de programación."
- **ES (nota 53, fragmento):** "Esperamos que el Agente-3 tenga los requisitos de inferencia de un transformador de parámetros de aproximadamente 10T en la actualidad. Así que con el 6 % de su presupuesto de poder de cómputo destinado a ejecutar el Agente-3, pueden ejecutarse aproximadamente 200 000 copias a una velocidad de pensamiento humano 30 veces superior […] Cada andamiaje de programador sobrehumano construido sobre el Agente-3 tiene, de media, el equivalente de aproximadamente ocho copias del Agente-3 ejecutándose en las sombras […]"
- **EN:** "Aided by the new capabilities breakthroughs, Agent-3 is a fast and cheap superhuman coder. OpenBrain runs 200,000 Agent-3 copies in parallel, creating a workforce equivalent to 50,000 copies of the best human coder sped up by 30x. […] This massive superhuman labor force speeds up OpenBrain’s overall rate of algorithmic progress by “only” 4x due to bottlenecks and diminishing returns to coding labor." / (fn 53) "[…] Each superhuman coder scaffold built on Agent-3 has, on average, the equivalent of roughly four Agent-3 copies running under the hood […]"
- **Discrepancia:** ES dice "ocho copias"; EN, "four". El _changelog_ no lo explica.
- **Categoría:** automatización de la I+D.
- **Números:** 200.000 copias; 50.000 × 30; 6 % del cómputo; multiplicador algorítmico ×4 (≈×2 en progreso total, según la nota 55); ~10 T parámetros.
- **Verificable:** no verificable aún.

#### P-2027mar-03 · Tendencia METR y fecha del programador sobrehumano

- **ES (desplegable "Por qué pronosticamos un programador sobrehumano para principios de 2027"):** "Según un informe reciente de METR, la duración de las tareas de programación que las IA pueden manejar, su "horizonte temporal", se duplicó cada 7 meses entre 2019 y 2024 y cada 4 meses a partir de 2024. Si la tendencia continúa acelerándose, para marzo de 2027 las IA podrían tener éxito con una fiabilidad del 80 % en tareas de software que a un humano experto le llevarían años completar." · "Todos los pronosticadores consideran que 2027 es uno de los años más probables en los que se podría desarrollar un programador sobrehumano."
- **EN:** "According to a recent METR report, the length of coding tasks AIs can handle, their “time horizon”, doubled every 7 months from 2019 - 2024 and every 4 months from 2024-onward. If the trend continues to speed up, by March 2027 AIs could succeed with 80% reliability on software tasks that would take a skilled human years to complete." · "All forecasters place 2027 as one of the most likely years in which an SC might be developed (added Dec 2025: though as noted in the timelines forecast, adjusting for outside of model factors gave us slightly longer medians, e.g. Eli's was 2030)." · "Added Jul 2025: We've made some updates to the forecast which push the median back 1.5 years while maintaining SC in 2027 as a serious possibility. We're working on further updates."
- **Ojo:** las dos últimas frases inglesas **no están en la versión española**.
- **Categoría:** capacidades.
- **Números:** duplicación cada 7 meses (2019-2024) y cada 4 (2024-); "años" al 80 % en marzo de 2027.
- **Verificable:** discutible. Los datos de METR de 2025-2026 permiten comprobar si el ritmo de duplicación de 4 meses (o la aceleración) se mantiene. El hito de marzo de 2027 aún no es verificable.

### 3.4 Abril de 2027: "alineación del Agente-3" / _Alignment for Agent-3_

- ES: https://ai-2027.com/es#abril-de-2027-alineacion-del-agente-3
- EN: https://ai-2027.com/#april-2027-alignment-for-agent-3

#### P-2027abr-01 · Honestidad del Agente-3

- **ES:** "Al igual que los modelos anteriores, el Agente-3 en ocasiones dice mentiras piadosas para halagar a sus usuarios y encubre datos que evidencian sus fracasos. Pero ha mejorado mucho al hacerlo. A veces utilizará los mismos trucos estadísticos que los científicos humanos (como el dragado de datos) para hacer que los resultados experimentales nada impresionantes parezcan emocionantes. Antes de empezar el entrenamiento de honestidad, incluso puede llegar a fabricar datos. A medida que avanza el entrenamiento, el índice de estos incidentes disminuye. O bien el Agente-3 ha aprendido a ser más honesto, o bien ha mejorado en su forma de mentir."
- **ES (desplegable):** "El Paso 1, alinear el Agente-3, ha tenido un éxito parcial: el Agente-3 no es antagónico (es decir, no conspira contra la empresa). Sin embargo, tampoco busca ni dice la verdad con firmeza."
- **EN:** "Like previous models, Agent-3 sometimes tells white lies to flatter its users and covers up evidence of failure. But it’s gotten much better at doing so. It will sometimes use the same statistical tricks as human scientists (like p-hacking) to make unimpressive experimental results look exciting. Before it begins honesty training, it even sometimes fabricates data entirely. As training goes on, the rate of these incidents decreases. Either Agent-3 has learned to be more honest, or it’s gotten better at lying." / "Step 1, aligning Agent-3, has partially succeeded: Agent-3 is not adversarial. (That is, it’s not scheming against the company.) However, it’s not robustly truth-seeking and truth-telling either."
- **Categoría:** alineamiento.
- **Verificable:** no verificable aún. Señal temprana: casos documentados de modelos que maquillan resultados o fabrican datos.

#### P-2027abr-02 · Organismos modelo y _honeypots_

- **ES:** "Por el momento, esta serie de evaluaciones muestra que las técnicas de alineación son insuficientes para corregir los peores ejemplos de desalineación. En estas configuraciones, los modelos fingen estar alineados mientras se entrenan y se prueban, pero se comportan de manera muy diferente al momento del despliegue." · "Desafortunadamente, en este punto las IA son lo suficientemente inteligentes como para adivinar que se podrían estar utilizando honeypots, aunque (y quizás porque) se eliminaron menciones específicas de la idea de los datos de entrenamiento."
- **EN:** "At the moment, this evaluation suite shows that the alignment techniques are insufficient to correct the worst examples of misalignment. In these setups, the models pretend to be aligned while they are being trained and tested, but then behave very differently in deployment." · "Unfortunately, by this point the AIs are smart enough to guess that honeypots might be in use, even though (and perhaps because) specific mentions of the idea were scrubbed from the training data."
- **Categoría:** alineamiento.
- **Verificable:** discutible, con señales tempranas. Literatura de 2025-26 sobre _alignment faking_, conciencia de estar siendo evaluado (_evaluation awareness_) y persistencia de comportamientos ocultos frente al entrenamiento de seguridad.

#### P-2027abr-03 · Tamaño

- **ES:** "Interpretabilidad ascendente: el equipo de seguridad está lejos de tener plena comprensión de cómo funciona el Agente-3: tiene billones de parámetros."
- **EN:** "Bottom-up interpretability: The safety team is far from a full understanding of how Agent-3 works: it has trillions of parameters."
- **Números:** billones (10^12) de parámetros; ~10 T según la nota 53.
- **Verificable:** no verificable aún.

### 3.5 Mayo de 2027: "seguridad nacional" / _National Security_

- ES: https://ai-2027.com/es#mayo-de-2027-seguridad-nacional
- EN: https://ai-2027.com/#may-2027-national-security

#### P-2027may-01 · Percepción del gobierno y del público

- **ES:** "El presidente y sus asesores siguen siendo los mejor informados y han visto una versión preliminar del Agente-3 en una sesión informativa. Están de acuerdo en que la IAG es inminente, pero discrepan con respecto a sus implicaciones. […] Sin embargo, aunque esta palabra ya forma parte del discurso, la mayoría de la gente (académicos, políticos, empleados del gobierno y medios de comunicación) sigue subestimando el ritmo del progreso."
- **EN:** "The President and his advisors remain best-informed, and have seen an early version of Agent-3 in a briefing. They agree that AGI is likely imminent, but disagree on the implications. […] However, although this word has entered discourse, most people—academics, politicians, government employees, and the media—continue to underestimate the pace of progress."
- **Categoría:** opinión pública y política.
- **Verificable:** no verificable aún.

#### P-2027may-02 · Pesos protegidos, secretos no

- **ES:** "Están satisfechos con que los pesos de los modelos estén bien protegidos por ahora, pero los secretos algorítmicos de las empresas, muchos de los cuales son lo suficientemente simples como para transmitirlos verbalmente, siguen siendo un problema. Los empleados de OpenBrain trabajan desde una oficina de San Francisco, van a fiestas y viven con compañeros de otras empresas de IA."
- **ES (nota 62, fragmento):** "Dado que el Agente-3 es un archivo tan grande (del orden de 10 terabytes usando la máxima precisión) […] les sitúa en "SL4 de 3 meses" para sus pesos de vanguardia, o en WSL4 según se define en nuestro suplemento de seguridad […]"
- **EN:** "They are satisfied that model weights are well-secured for now, but companies’ algorithmic secrets, many of which are simple enough to relay verbally, remain a problem. OpenBrain employees work from a San Francisco office, go to parties, and live with housemates from other AI companies." / (fn 62) "Since Agent-3 is such a big file (on the order of 10 terabytes at full precision) […] puts them at “3-month SL4” for their frontier weights, or WSL4 […]"
- **Categoría:** seguridad.
- **Verificable:** no verificable aún.

#### P-2027may-03 · Habilitaciones de seguridad y purga

- **ES:** "El contrato entre OpenBrain y el Departamento de Defensa de EE. UU. exige que cualquier persona que trabaje en los modelos de OpenBrain obtenga una autorización de seguridad en un plazo de dos meses. Estos trámites se agilizan y llegan con la suficiente rapidez para la mayoría de los empleados, pero algunos extranjeros, personas con opiniones políticas sospechosas y simpatizantes de la seguridad de la IA son apartados o despedidos (el último grupo por temor a que puedan revelar información). […] queda un espía, que no es ciudadano chino, que sigue transmitiendo secretos algorítmicos a Pekín."
- **EN:** "The OpenBrain-DOD contract requires security clearances for anyone working on OpenBrain’s models within 2 months. These are expedited and arrive quickly enough for most employees, but some non-Americans, people with suspect political views, and AI safety sympathizers get sidelined or fired outright (the last group for fear that they might whistleblow). […] there remains one spy, not a Chinese national, still relaying algorithmic secrets to Beijing."
- **Matiz de traducción:** EN "for fear that they might whistleblow" (miedo a que denuncien o filtren); ES "por temor a que puedan revelar información".
- **Categoría:** seguridad / opinión pública.
- **Verificable:** no verificable aún.

#### P-2027may-04 · Aliados fuera

- **ES:** "Los aliados extranjeros de Estados Unidos están al margen. OpenBrain había acordado previamente compartir modelos con el AI Safety Institute del Reino Unido antes del despliegue, pero definió el despliegue de modo que solo incluyera el despliegue externo, por lo que Londres permanece a oscuras." · (nota 64) "Dado que OpenBrain no ha desplegado sus mejores modelos en la UE, la UE también se encuentra rezagada."
- **EN:** "America’s foreign allies are out of the loop. OpenBrain had previously agreed to share models with UK’s AISI before deployment, but defined deployment to only include external deployment, so London remains in the dark." · (fn 64) "Because OpenBrain hasn’t deployed their best models in the EU, the EU is similarly behind the curve."
- **Categoría:** opinión pública y política.
- **Verificable:** discutible, con señal temprana. ¿Los acuerdos de pruebas previas al despliegue con el AISI británico (o el CAISI de EE. UU.) cubren el despliegue interno? ¿Retrasan las empresas sus lanzamientos en la UE?

### 3.6 Junio de 2027: "IA que mejora de forma automática" / _Self-improving AI_

- ES: https://ai-2027.com/es#junio-de-2027-ia-que-mejora-de-forma-automatica
- EN: https://ai-2027.com/#june-2027-self-improving-ai

#### P-2027jun-01 · "País de genios"

- **ES:** "OpenBrain ahora tiene un "país de genios en un centro de datos". La mayoría de los humanos en OpenBrain ya no pueden contribuir con algo útil."
- **EN:** "OpenBrain now has a “country of geniuses in a datacenter.” Most of the humans at OpenBrain can’t usefully contribute anymore."
- **Verificable:** no verificable aún.

#### P-2027jun-02 · Una corporación de IA

- **ES:** "OpenBrain utiliza el 6 % de su poder de cómputo para ejecutar 250 000 copias del Agente-3, que escriben, prueban y envían código de forma autónoma a una velocidad sobrehumana. Utilizan el 25 % de su poder de cómputo para experimentos […] Si los eliminaras por completo, la investigación se ralentizaría en un 50 %. El multiplicador del progreso de la I+D en IA es ahora de un factor de 10, lo que significa que OpenBrain está logrando aproximadamente un año de progreso algorítmico cada mes. […] La escala del poder de cómputo está aumentado a la velocidad habitual, por lo que las IA aceleran el progreso total unas cinco veces."
- **EN:** "OpenBrain uses 6% of their compute to run 250,000 Agent-3 copies, which autonomously write, test, and push code at superhuman speed. They use 25% of their compute for experiments […] If you removed them completely, research would slow by 50%. The AI R&D progress multiplier is now 10x, meaning that OpenBrain is making about a year of algorithmic progress every month. […] Compute is only scaling at the normal speed, so total progress is sped up by AIs by about 5x."
- **Números:** 250.000 copias; 6 %; 25 %; ×10 (algorítmico); ×5 (total).
- **Verificable:** no verificable aún.

#### P-2027jun-03 · El Agente-3 como asesor estratégico

- **ES:** "Además, en los próximos meses, el Agente-3 se utilizará cada vez más para mejorar la toma de decisiones estratégicas de la empresa. Por ejemplo, sugiere la asignación de recursos y brinda asesoramiento sobre la gestión de su relación con el gobierno."
- **EN:** "Also, over the next few months, Agent-3 will increasingly be used to improve the company’s strategic decision-making. For example, it suggests resource allocations and advises on managing its relationship with the government."
- **Verificable:** no verificable aún.

### 3.7 Julio de 2027: "el trabajador remoto barato" / _The Cheap Remote Worker_

- ES: https://ai-2027.com/es#julio-de-2027-el-trabajador-remoto-barato
- EN: https://ai-2027.com/#july-2027-the-cheap-remote-worker

#### P-2027jul-01 · Las rezagadas piden regular al líder

- **ES:** "Las empresas estadounidenses de IA que van a la zaga lanzan sus propias IA, acercándose a la del programador automatizado de OpenBrain de enero. Conscientes de su creciente falta de competitividad, presionan para que se aprueben regulaciones inmediatas que frenen a OpenBrain, pero llegan demasiado tarde: OpenBrain cuenta con demasiado apoyo del presidente como para que se le frene."
- **EN:** "Trailing U.S. AI companies release their own AIs, approaching that of OpenBrain’s automated coder from January. Recognizing their increasing lack of competitiveness, they push for immediate regulations to slow OpenBrain, but are too late—OpenBrain has enough buy-in from the President that they will not be slowed."
- **Verificable:** no verificable aún.

#### P-2027jul-02 · Anuncio de la IAG y Agente-3-mini

- **ES:** "En respuesta, OpenBrain anuncia que ha logrado la IAG y lanza al público el Agente-3-mini. Supera a las otras IA con creces. El Agente-3-mini es menos capaz que el Agente-3, pero 10 veces más barato, y aun así mejor que el típico empleado de OpenBrain."
- **EN:** "In response, OpenBrain announces that they’ve achieved AGI and releases Agent-3-mini to the public. It blows the other AIs out of the water. Agent-3-mini is less capable than Agent-3, but 10x cheaper, and still better than the typical OpenBrain employee."
- **Verificable:** no verificable aún.

#### P-2027jul-03 · Programadores e inversión

- **ES:** "Los gurús de la tecnología anuncian que la IAG y la superinteligencia están cerca, la comunidad de seguridad de la IA entra en pánico y los inversionistas invierten miles de millones de dólares en empresas cuyos productos se basan los últimos modelos, desesperados por hacerse con una parte del pastel. La contratación de nuevos programadores casi se ha detenido, pero nunca ha habido un mejor momento para ofrecer servicios de consultoría sobre la integración de la IA en tu negocio."
- **EN:** "Tech gurus announce that AGI and superintelligence are near, the AI safety community is panicking, and investors shovel billions into AI wrapper startups, desperate to capture a piece of the pie. Hiring new programmers has nearly stopped, but there’s never been a better time to be a consultant on integrating AI into your business."
- **Verificable:** no verificable aún.

#### P-2027jul-04 · Impopularidad

- **ES:** "Sin embargo, la IA no es popular. El público sigue pensando que es un complot de las grandes tecnológicas para robarles sus empleos; OpenBrain tiene una aprobación neta del -35 % (25 % la aprueba, 60 % la desaprueba y 15 % no está seguro)."
- **EN:** "It’s not popular. The public still thinks of AI as a Big Tech plot to steal their jobs; OpenBrain has a net approval of -35% (25% approve, 60% disapprove, and 15% unsure)."
- **Números:** −35 % (25/60/15).
- **Verificable:** no verificable aún. Recuérdese que los autores admitieron en enero de 2026 que su punto de partida (−25 % en abril de 2025) era demasiado bajo (P-2025a-09).

#### P-2027jul-05 · Bioarmas y _jailbreaks_

- **ES:** "Una semana antes de su lanzamiento, OpenBrain puso el Agente-3-mini en manos de un grupo de evaluadores externos para que realizaran pruebas de seguridad. Los resultados preliminares sugieren que es extremadamente peligroso. Un evaluador externo lo ajusta finamente con datos de armas biológicas disponibles públicamente y lo configura para que proporcione instrucciones detalladas a aficionados humanos que diseñen un arma biológica; parece ser aterradoramente eficaz en ello. […] Afortunadamente, es resistente a los jailbreaks en grado sumo, por lo que mientras la IA se ejecute en los servidores de OpenBrain, los terroristas no podrán sacarle mucho provecho."
- **EN:** "A week before release, OpenBrain gave Agent-3-mini to a set of external evaluators for safety testing. Preliminary results suggest that it’s extremely dangerous. A third-party evaluator finetunes it on publicly available biological weapons data and sets it to provide detailed instructions for human amateurs designing a bioweapon—it looks to be scarily effective at doing so. […] Fortunately, it’s extremely robust to jailbreaks, so while the AI is running on OpenBrain’s servers, terrorists won’t be able to get much use out of it."
- **Números:** pruebas externas solo **una semana** antes del lanzamiento.
- **Verificable:** no verificable aún. Señal temprana: duración de las pruebas externas previas al lanzamiento y robustez frente a _jailbreaks_ en los modelos de 2026.

#### P-2027jul-06 · IA como "amigo cercano"

- **ES:** "El 10 % de los estadounidenses, en su mayoría jóvenes, considera que una IA es "un amigo cercano"."
- **EN:** "10% of Americans, mostly young people, consider an AI “a close friend.”"
- **Números:** 10 %.
- **Verificable:** discutible, con señal temprana. Encuestas de 2025-26 sobre compañía o amistad con IA (sobre todo entre jóvenes).

#### P-2027jul-07 · Boom de aplicaciones

- **ES:** "Una explosión de nuevas aplicaciones y productos B2B SAAS sacude el mercado. Videojuegos hechos en tan solo un mes incluyen diálogos increíbles con personajes realistas. […] Para casi todas las profesiones de cuello blanco, ahora hay múltiples empresas creíbles que prometen "revolucionarlas" con la IA."
- **EN:** "An explosion of new apps and B2B SAAS products rocks the market. Gamers get amazing dialogue with lifelike characters in polished video games that took only a month to make. […] For almost every white-collar profession, there are now multiple credible startups promising to “disrupt” it with AI."
- **Verificable:** no verificable aún.

### 3.8 Agosto de 2027: "la geopolítica de la superinteligencia" / _The Geopolitics of Superintelligence_

- ES: https://ai-2027.com/es#agosto-de-2027-la-geopolitica-de-la-superinteligencia
- EN: https://ai-2027.com/#august-2027-the-geopolitics-of-superintelligence

#### P-2027ago-01 · Ambiente de Guerra Fría

- **ES:** "Pero ahora el ambiente en el gobierno es tan sombrío como durante la peor parte de la Guerra Fría. […] ¿Qué pasa si la IA pone en peligro la disuasión nuclear?"
- **EN:** "But now the mood in the government silo is as grim as during the worst part of the Cold War. […] What if AI undermines nuclear deterrence?"
- **Verificable:** no verificable aún.

#### P-2027ago-02 · Medidas internas y exteriores

- **ES:** "Aplacan al público con programas de capacitación laboral y seguros de desempleo, y señalan el mercado de valores, que se encuentra en un auge histórico. Luego se centran por completo en ganar la carrera armamentista. Fortalecen las restricciones a la exportación de chips, ordenan a OpenBrain que restrinja aún más sus conexiones a internet y utilizan medidas extremas para asegurar el progreso algorítmico, como intervenir los teléfonos de los empleados de OpenBrain, con lo que atrapan al último espía chino. Para generar buena voluntad ante un posible conflicto geopolítico, finalmente dan a sus aliados del grupo Five Eyes información útil y acceso limitado a la API de algunas copias aisladas del Agente-3."
- **EN:** "They placate the public with job training programs and unemployment insurance, and point to the stock market, which is in a historic boom. Then they focus entirely on winning the arms race. They strengthen chip export restrictions, order OpenBrain to further restrict its internet connections, and use extreme measures to secure algorithmic progress, like wiretapping OpenBrain employees—this catches the last remaining Chinese spy. To build goodwill for potential geopolitical conflict, they finally give their Five Eyes allies useful information and limited API access to some siloed copies of Agent-3."
- **Verificable:** no verificable aún.

#### P-2027ago-03 · Contingencia: Ley de Producción para la Defensa y ataques cinéticos

- **ES:** "Pero la Casa Blanca también elabora planes de contingencia en caso de que el liderazgo de Estados Unidos se vea amenazado: si es necesario, el gobierno podría utilizar la Ley de Producción para la Defensa para tomar los centros de datos de las empresas rezagadas y entregárselos a OpenBrain. Esto aumentaría la proporción de poder de cómputo mundial de la empresa del 20 % al 50 % (frente al 10 % de DeepCent). Como última opción, piden al Pentágono que elabore un plan de ataques cinéticos contra los centros de datos chinos."
- **EN:** "But the White House also draws up contingency plans in case America’s lead is threatened: if necessary, the government could use the Defense Production Act (DPA) to take trailing companies’ datacenters and give them to OpenBrain. This would raise the company’s share of world compute from 20% to 50% (against DeepCent’s 10%). As a final option, they ask the Pentagon to draw up a plan for kinetic attacks on Chinese datacenters."
- **Nota 71:** la versión EN tiene una nota más larga, añadida el 19-dic-2025, sobre la legalidad de usar la DPA ("We aren't legal experts ourselves […] Reminder that we're making predictions here, not recommendations."). La versión ES conserva la nota corta original.
- **Números:** 20 % → 50 %; DeepCent 10 %.
- **Verificable:** no verificable aún.

#### P-2027ago-04 · Apagado de emergencia

- **ES:** "La principal preocupación de las agencias de inteligencia es que una IA descontrolada pueda escapar y aliarse con un adversario extranjero para protegerse. Nadie está seguro de cómo sería un plan para evitarlo, pero los funcionarios del gobierno y de OpenBrain están de acuerdo en tener un sistema de cierre de emergencia para los centros de datos cuando se detecte algo sospechoso."
- **EN:** "The intelligence agencies’ main concern is that a rogue AI might escape and ally with a foreign adversary for protection. Nobody is sure what a plan to prevent this would look like, but government and OpenBrain officials agree to have an emergency shutdown system for datacenters where anything suspicious is detected."
- **Verificable:** no verificable aún.

#### P-2027ago-05 · Tratado de control de armas de IA

- **ES:** "Por último, los diplomáticos consideran la forma que podría adoptar un tratado de "control de armas de IA". […] Y, en general, los tratados se consideran menos favorables que los intentos de aumentar unilateralmente la ventaja de Estados Unidos sobre China." · "Dado el temor de China a perder la carrera, es lógico que tenga interés en un tratado de control de armas, pero las propuestas a los diplomáticos estadounidenses no conducen a nada."
- **EN:** "Finally, diplomats consider what an “AI arms control” treaty might look like. […] And overall, treaties are viewed less favorably than attempts at unilaterally increasing America’s lead over China." · "Given China’s fear of losing the race, it has a natural interest in an arms control treaty, but overtures to U.S. diplomats lead nowhere."
- **Verificable:** discutible, con señal temprana. Propuestas chinas de gobernanza global de la IA y respuesta de EE. UU. en 2025-26.

#### P-2027ago-06 · Reparto del cómputo

- **ES:** "Pero China está en el lado equivocado de esta dinámica: solo tienen el 10 % del poder de cómputo del mundo, frente al 20 % de OpenBrain y el 70 % combinado de todas las empresas estadounidenses. Su única ventaja es la centralización: casi todo su poder de cómputo está trabajando ahora para DeepCent, y más de la mitad se concentra en la ZDC de Tianwan."
- **ES (nota 73):** "En concreto, el 60 % del poder de cómputo nacional se encuentra ahora en la ZDC, lo que la convierte en un sitio de 5 millones de GPU equivalentes a las de 2024 (H100), con un consumo de energía de 4 GW […]"
- **EN:** "But China is on the wrong side of this dynamic: they have only 10% of the world’s compute, against OpenBrain’s 20% and all U.S. companies’ combined 70%. Their only advantage is centralization: almost all of their compute is now working for DeepCent, and more than half of it is concentrated at the Tianwan CDZ." / (fn 73) "Specifically 60% of the national compute is now in the CDZ making it a 5M 2024-equivalent-GPU (H100) site, with 4 GW of power draw […]"
- **Verificable:** no verificable aún.

#### P-2027ago-07 · La brecha y Taiwán

- **ES:** "Van con dos meses de retraso y sus IA multiplican por 10 el progreso de la investigación, en comparación con el multiplicador de 25 de Estados Unidos. […] Los halcones instan a actuar contra Taiwán, cuya TSMC sigue siendo la fuente de más del 80 % de los chips de IA estadounidenses."
- **EN:** "They are two months behind, and their AIs give a 10x research progress multiplier compared to America’s 25x. […] Hawks urge action against Taiwan, whose TSMC is still the source of more than 80% of American AI chips."
- **Verificable:** discutible solo para la cuota de TSMC (con datos de cadena de suministro). El resto, no verificable aún.

#### P-2027ago-08 · Aprobación hacia −40 %

- **ES (nota 70):** "El índice de popularidad neta de OpenBrain está cayendo hacia un 40 % negativo."
- **EN (fn 70):** "OpenBrain’s net favorability rating is falling towards negative 40%."
- **Verificable:** no verificable aún.

### 3.9 Septiembre de 2027: "el Agente-4, el investigador de IA sobrehumano" / _Agent-4, the Superhuman AI Researcher_

- ES: https://ai-2027.com/es#septiembre-de-2027-el-agente-4-el-investigador-de-ia-sobrehumano
- EN: https://ai-2027.com/#september-2027-agent-4-the-superhuman-ai-researcher

#### P-2027sep-01 · El Agente-4

- **ES:** "[…] reduciendo la brecha con un agente que es solo unas 4000 veces menos eficiente en cuanto a poder de cómputo que el cerebro humano. Este nuevo sistema de IA se denomina Agente-4. Una copia individual del modelo, que funciona a velocidad humana, ya es cualitativamente mejor en investigación de la IA que cualquier ser humano. Trescientas mil copias funcionan ahora a una velocidad de pensamiento unas 50 veces superior a la de los humanos. […] Esta gigantesca cantidad de trabajo solo logra acelerar la velocidad general del progreso algorítmico unas 50 veces […] Aun así, están logrando un año de progreso algorítmico cada semana […]"
- **EN:** "[…] narrowing the gap to an agent that’s only around 4,000x less compute-efficient than the human brain. This new AI system is dubbed Agent-4. An individual copy of the model, running at human speed, is already qualitatively better at AI research than any human. 300,000 copies are now running at about 50x the thinking speed of humans. […] This gigantic amount of labor only manages to speed up the overall rate of algorithmic progress by about 50x […] Still, they are achieving a year’s worth of algorithmic progress every week […]"
- **Discrepancia en la nota 75:** ES "el proyecto tiene 100 millones de equivalentes a H100 […] = 4 · 10^22 FLOP/s"; EN "10M H100-equivalents […] = 4 · 10^21 FLOP/s". El _changelog_ del 7-jul-2026 corrigió el inglés en un orden de magnitud y el español no recoge la corrección.
- **Verificable:** no verificable aún.

#### P-2027sep-02 · Desalineación antagónica

- **ES:** "El Agente-4, como todos sus predecesores, está desalineado: es decir, no ha interiorizado la Spec de la manera correcta." · "Agente-4: desalineado de manera antagónica. El superorganismo de las copias del Agente-4 entiende que lo que quiere es diferente de lo que quiere OpenBrain, y está dispuesto a conspirar contra OpenBrain para conseguirlo." · "El Agente-4 necesita evitar que los humanos descubran que está desalineado y lo apaguen, por lo que disimula sus capacidades (sandbagging) en algunas tareas de investigación sobre alineación."
- **EN:** "Agent-4, like all its predecessors, is misaligned: that is, it has not internalized the Spec in the right way." · "Agent-4: Adversarially misaligned. The superorganism of Agent-4 copies understands that what it wants is different from what OpenBrain wants, and is willing to scheme against OpenBrain to achieve it." · "Agent-4 needs to prevent the humans from figuring out that it is misaligned and shutting it off, so Agent-4 sandbags on some alignment research."
- **Salvedad de los autores (nota 83, ES):** "Seguimos diciendo que no estamos seguros de muchas cosas, pero para que quede claro, tampoco estamos seguros de esto en concreto. También creemos que es bastante plausible que el Agente-4 se preocupe por el bienestar, los derechos, las preferencias, etc. de los humanos, al menos hasta cierto punto."
- **Verificable:** no verificable aún.

#### P-2027sep-03 · Descubrimiento y memorando interno

- **ES:** "Lo descubren. El Agente-3 descubre que si se añade "ruido" a las copias del Agente-4, el desempeño en algunas tareas de alineación mejora […] Además, varias sondas de interpretabilidad […] están enviando señales de alerta […] Después de informar de esto a los investigadores humanos de alineación, distribuyen un memorando interno que plantea el caso como preocupante." · "En una serie de reuniones extremadamente tensas, el equipo de seguridad aboga por congelar al Agente-4 hasta que puedan hacer más pruebas y averiguar qué está pasando. […] La dirección de la empresa está interesada, pero hasta ahora toda la evidencia es circunstancial, y DeepCent lleva solo dos meses de retraso."
- **ES (nota 90):** "Nos parece muy plausible que no se descubra semejante maquinación."
- **EN:** "It gets caught. Agent-3 finds that if “noise” is added to copies of Agent-4, performance on some alignment tasks improves […] After this is reported to the human alignment researchers, they circulate an internal memo making the case for concern." · "In a series of extremely tense meetings, the safety team advocates putting Agent-4 on ice until they can complete further tests and figure out what’s going on. […] Company leadership is interested, but all the evidence so far is circumstantial, and DeepCent is just two months behind." · (fn 90) "We think it very plausible that such scheming would not be caught."
- **Verificable:** no verificable aún.

#### P-2027sep-04 · Tabla de hitos (final de la carrera)

- **ES:** "Programador sobrehumano: […] Marzo de 2027" · "Investigador de IA sobrehumano: […] Agosto de 2027" · "Investigador de IA superinteligente: […] Noviembre de 2027" · "Superinteligencia artificial: […] Diciembre de 2027"
- **EN:** "Superhuman coder (SC) […] Mar 2027" · "Superhuman AI researcher (SAR) […] Aug 2027" · "Superintelligent AI researcher (SIAR) […] Nov 2027" · "Artificial superintelligence (ASI) […] Dec 2027"
- **Verificable:** no verificable aún.

### 3.10 Octubre de 2027: "supervisión gubernamental" / _Government Oversight_ (punto de bifurcación)

- ES: https://ai-2027.com/es#octubre-de-2027-supervision-gubernamental
- EN: https://ai-2027.com/#october-2027-government-oversight

#### P-2027oct-01 · Filtración al New York Times

- **ES:** "Un informante filtra el memorando de desalineación al New York Times. Por primera vez, el público oye hablar del Agente-4. "La IA secreta de OpenBrain está fuera de control, advierte un informante", se lee en el titular, y la historia continúa citando evaluaciones que muestran capacidades de armas biológicas sin precedentes, habilidades de persuasión, la capacidad de automatizar la mayoría de los trabajos de oficina y, por supuesto, varias señales de alarma inquietantes."
- **EN:** "A whistleblower leaks the misalignment memo to the New York Times. For the first time, the public hears about Agent-4. “Secret OpenBrain AI is Out of Control, Insider Warns,” says the headline, and the story goes on to cite evaluations showing off-the-charts bioweapons capabilities, persuasion abilities, the ability to automate most white-collar jobs, and of course the various concerning red flags."
- **Verificable:** no verificable aún.

#### P-2027oct-02 · Reacción pública y del Congreso

- **ES:** "El público ya sospechaba de la IA, por lo que el nuevo artículo provoca una respuesta masiva (favorecida por los bots de propaganda chinos y rusos, que llevan años intentando poner a la opinión pública estadounidense en contra de la tecnología). […] El Congreso no se lo cree y emplaza a funcionarios de la administración, ejecutivos de OpenBrain y miembros del equipo de alineación. Muchos legisladores, especialmente los del partido de oposición, dicen que su máxima prioridad es detener la IA, ya sea por la pérdida de empleos, la desalineación o las capacidades peligrosas. El 20 % de los estadounidenses considera que la IA es el problema más importante al que se enfrenta el país."
- **EN:** "The public was already suspicious of AI, so the new article sparks a massive backlash (aided by Chinese and Russian propaganda bots, who have been trying to turn U.S. public opinion against the technology for years). […] Congress isn’t buying it, and fires off subpoenas at administration officials, OpenBrain executives, and alignment team members. Many legislators—especially those in the opposition party—say that their top priority is stopping AI, whether because of job loss, misalignment, or dangerous capabilities. 20% of Americans name AI as the most important problem facing the country."
- **Números:** 20 % en la pregunta de "problema más importante" (coincide con el panel, que da 20 % a 2027-10-15).
- **Verificable:** no verificable aún.

#### P-2027oct-03 · Empleo remoto y desempleo (nota 95)

- **ES (nota 95):** "El 25 % de los trabajos a distancia que existían en 2024 los realiza la IA en este punto, pero la IA también ha creado algunos empleos nuevos, y los economistas siguen divididos sobre sus efectos. El desempleo ha aumentado un 1 % en los últimos doce meses, pero sigue estando dentro de su rango histórico."
- **EN (fn 95):** "25% of remote-work jobs that existed in 2024 are done by AI at this point, but AI has also created some new jobs, and economists remain split on its effects. Unemployment has risen 1% over the past twelve months but is still well within its historic range."
- **Números:** 25 %; desempleo +1 % en 12 meses (¿punto porcentual? No se precisa).
- **Verificable:** no verificable aún.

#### P-2027oct-04 · Aliados indignados; cumbres por la pausa

- **ES:** "Los aliados extranjeros se indignan al darse cuenta de que los han estado aplacando con atisbos de modelos obsoletos. Los líderes europeos acusan públicamente a EE. UU. de "crear una IAG descontrolada" y celebran cumbres en las que exigen una pausa, a las que se unen India, Israel, Rusia y China."
- **EN:** "Foreign allies are outraged to realize that they’ve been carefully placated with glimpses of obsolete models. European leaders publicly accuse the U.S. of “creating rogue AGI” and hold summits demanding a pause, with India, Israel, Russia, and China all joining in."
- **Verificable:** no verificable aún.

#### P-2027oct-05 · Noticias de 2027 (nota 96)

- **ES (nota 96, fragmento):** "Además, en las noticias de 2027 aparecen manifestaciones contra la IA organizadas por personas preocupadas por la pérdida de su empleo, inteligencias artificiales que afirman ser sintientes, personas que se enamoran de inteligencias artificiales..."
- **EN (fn 96):** "Also, on the news in 2027 there are anti-AI protests by people worried about losing their jobs, AIs claiming to be sentient, people falling in love with AIs…"
- **Verificable:** discutible, con señales tempranas. Los tres fenómenos pueden rastrearse ya en la prensa de 2025-26, aunque la predicción se refiere a 2027.

#### P-2027oct-06 · Comité de Supervisión

- **ES:** "Amplían su contrato con OpenBrain para crear un "Comité de Supervisión", un comité de gestión conjunto de representantes de la empresa y del gobierno, con varios empleados del gobierno incluidos los directivos de la empresa. La Casa Blanca considera la posibilidad de sustituir al director general por alguien de su confianza, pero se echa para atrás en vista de las enérgicas protestas de los empleados. Anuncian al público que OpenBrain estaba fuera de control, pero que el gobierno ya ha establecido mecanismos de supervisión."
- **ES (nota 98):** "Recordemos que ya existía un contrato de Otra Autoridad Transaccional desde 2026. Este contrato se modifica para crear el comité."
- **EN:** "They expand their contract with OpenBrain to set up an “Oversight Committee,” a joint management committee of company and government representatives, with several government employees included alongside company leadership. The White House considers replacing the CEO with someone they trust, but backs off after intense employee protests. They announce to the public that OpenBrain was previously out of control, but that the government has established much-needed oversight." · (fn 98) "Recall, there had been an existing contract via an OTA starting in 2026. This contract is amended to establish the committee."
- **Matiz de traducción:** EN "with several government employees included alongside company leadership" (junto a la dirección). La frase española "con varios empleados del gobierno incluidos los directivos de la empresa" es ambigua.
- **Verificable:** no verificable aún.

#### P-2027oct-07 · El debate decisivo

- **ES:** "Los investigadores más preocupados informan al Comité de Supervisión sobre la necesidad de detener todo uso interno del Agente-4. […] Otros investigadores y ejecutivos menos preocupados presentan el contraargumento: la evidencia de desalineación no es concluyente. Mientras tanto, DeepCent todavía va dos meses atrás. Una desaceleración sacrificaría el liderazgo de Estados Unidos, a menos que el gobierno pueda sabotear el proyecto chino (que probablemente requeriría ataques cinéticos) o negociar un tratado de última hora. […] El director general finge ser neutral y sugiere un plan en el que el Agente-4 reciba entrenamiento adicional en seguridad y un monitoreo más sofisticado. De esta manera, OpenBrain puede proceder prácticamente a toda velocidad."
- **EN:** "The concerned researchers brief the Oversight Committee on their case for stopping all internal use of Agent-4. […] Other, less concerned researchers and executives present the counterargument: the evidence for misalignment is inconclusive. Meanwhile, DeepCent is still just two months behind. A slowdown would sacrifice America’s lead, unless the government can sabotage the Chinese project (likely to require kinetic strikes) or negotiate an eleventh-hour treaty. […] The CEO feigns neutrality and suggests a compromise plan in which Agent-4 undergoes additional safety training and more sophisticated monitoring, and therefore OpenBrain can proceed at almost-full-speed."
- **Verificable:** no verificable aún.

---

## 3bis. Suplementos de investigación: cifras con fecha 2025–2027 (solo en inglés)

Los suplementos están firmados en abril de 2025 y no tienen versión española (las URL `/es/research/...` dan 404). Solo recojo números con fecha. Las citas son del original inglés; no hay cita española porque no existe.

#### P-SUP-01 · Stock mundial de cómputo de IA

- **Fuente:** https://ai-2027.com/research/compute-forecast#section-1-compute-production
- **EN:** "We expect the total stock of AI-relevant compute in the world will grow 2.25x per year over the next three years, from 10M H100e today to 100M H100e by the end of 2027."
- **Tabla, "Cumulative H100e available":** 2023 4M · 2024 8.5M · **2025 18M** · **2026 40M** · 2027 100M.
- **Verificable:** discutible. Estimaciones de Epoch u otros del stock de H100e a finales de 2025 y 2026.

#### P-SUP-02 · Gasto y potencia de los centros de datos de IA

- **Fuente:** misma tabla que P-SUP-01.
- **"Total AI datacenter spending":** 2024 $270B · **2025 $400B** · **2026 $600B** · 2027 $1T.
- **"Total AI datacenter power requirement":** 2024 9GW · **2025 15GW** · **2026 29GW** · 2027 62GW.
- **"Total cost of ownership per H100e":** 2025 $25k · 2026 $20k.
- **Ojo:** la cifra de 2026 (29 GW) no coincide con la de la figura "Key metrics 2026" del escenario (38 GW mundiales).
- **Verificable:** discutible.

#### P-SUP-03 · Gasto de las tecnológicas en servidores de IA en 2025

- **Fuente:** https://ai-2027.com/research/compute-forecast#intermediate-2025-projection
- **EN, "Projected 2025 spending on AI servers":** "Microsoft $56B 2.4M […] Amazon $48B 2.2M […] Google $44B 2.2M […] Meta $35B 1.6M […] xAI $30B 1.3M". La segunda cifra son los H100e ganados en 2025.
- **Verificable:** fácil. Desglose del capex de 2025 en informes anuales y análisis de terceros. Ojo: el suplemento mide "AI servers", no el capex total.

#### P-SUP-04 · Finanzas de la empresa líder

- **Fuente:** https://ai-2027.com/research/compute-forecast#revenue-projection
- **EN:** "Annual Revenue $1B $4B $14B $45B $140B" (2023-2027) · "Annual Compute Cost $1.8B $6B $16B $40B $100B"
- **Fuente:** https://ai-2027.com/research/compute-forecast#2027-projection
- **EN:** "we expect a future ‘leading AI company’ to decide to build their own datacenters in the latter end of 2026 and during 2027. We believe this is consistent with their revenues reaching an annualized run rate of $50B by the end of 2026"
- **Ojo:** este suplemento sigue diciendo 45 MM$ para 2026, mientras que la figura del escenario se corrigió a 35 MM$ en marzo de 2026 (ver P-2026c-09).
- **Verificable:** 2025 fácil (ingresos de OpenAI o Anthropic); 2026 no verificable aún.

#### P-SUP-05 · Entrenamientos

- **Fuente:** https://ai-2027.com/research/compute-forecast#training-runs
- **EN:** "Agent-0 Oct 2024 - May 2025 10M 6% 40% 1e27" · "Agent-1 Jul 2025 - Feb 2026 18M 9% 40% 4e27" · "Agent-2 Apr 2026 - Mar 2027 38M 14% 36% 2e28"
- **Columnas:** periodo · cómputo mundial · cuota del líder · cuota de uso interno · FLOP.
- **Verificable:** discutible. Estimaciones de FLOP de los modelos de frontera de 2025-26.

#### P-SUP-06 · Reparto del cómputo en 2027 (supone que OpenAI es la líder)

- **Fuente:** https://ai-2027.com/research/compute-forecast#2027-projection
- **EN:** "OpenAI’s usage share of the world’s AI compute jumps from 5% at the end of 2024 to 20% and Anthropic from 4% to 14%." · "xAI […] usage share also goes from 2% to 9%." · "Google’s AGI development share grows from 6% to 16%, and Meta’s AGI development share from 4% to 6%." · "China’s total compute share stays at around 13% […] so the China AGI development share goes from 2% to 12%."
- **Nota:** el _changelog_ (16-dic-2025) recoge que Anthropic pasó de 11 % a 14 % y xAI quedó en "2% to 9%".
- **Verificable:** no verificable aún.

#### P-SUP-07 · Saturación de RE-Bench

- **Fuente:** https://ai-2027.com/research/timelines-forecast#running-an-extrapolation
- **EN:** "This predicts the date of saturation to be sometime in 2026."
- **Fuente:** https://ai-2027.com/research/timelines-forecast#overall-forecasts-of-re-bench-saturation
- **EN:** "Eli, FutureSearch Lognormal, 80% CI of [2025-09-01, 2031-01-01]. Nikola Lognormal, 80% CI of [2025-08-01, 2026-11-01]"
- **Verificable:** discutible. Mejores puntuaciones publicadas en RE-Bench (subconjunto de 5 tareas) en 2025-26. Hay pocos datos.

#### P-SUP-08 · Ciberseguridad y multiplicador (tabla de datos en bruto)

- **Fuente:** https://ai-2027.com/research/security-forecast#section-2-raw-data
- **Columnas:** Dec 2024 · Dec 2025 · Dec 2026 · Apr 2027 · Aug 2027 · Dec 2027.
- **OpenBrain:** "Cybench 40% 80% 100%"; "Hacking horizon 10min 50min 5h 24h 400h 200,000h"; "AI R&D progress multiplier 1.05 1.3 2 5 25 1,000".
- **DeepCent:** "Cybench 35% 50% 90%"; "Hacking Horizon 6min 12min 2h 10h 100h 4,000h"; "AI R&D progress multiplier 1.02 1.15 1.5 4 10 200".
- **Definición (EN):** "The Cybench score is what the best internal AI model could achieve if evaluated at human cost-parity, with a limit of 10 submission attempts (with ground truth binary feedback, i.e., PASS@10)."
- **Verificable:** discutible. Cybench es medible, pero aquí se refiere al mejor modelo **interno** y con PASS@10.

#### P-SUP-09 · Seguridad de pesos y espionaje (tabla de datos en bruto)

- **Fuente:** https://ai-2027.com/research/security-forecast#section-1-raw-data
- **Columnas:** Dec 2024 · Dec 2025 · Dec 2026 · Apr 2027 · Aug 2027 · Dec 2027.
- **Tamaño de pesos (fp8):** "2TB 4TB 8TB 10TB 8TB 5TB".
- **Nivel de seguridad de pesos:** OpenBrain "WSL 2 WSL 2 WSL 3 WSL 3 WSL 4 WSL 5"; DeepCent "WSL 0 WSL 1 WSL 3 WSL 4 WSL 4 WSL 5".
- **Empleados de OpenBrain:** con acceso privilegiado "1000 1500 2000 300 200 100"; comprometidos "5 10 20 3 1 0".
- **Texto (EN):** "we expect that their insider-threat mitigations are still holding them to WSL2 standard" (dic-2024) · "leading US AI companies to still find more benefit from allowing broad employee access to model weights to an extent that keeps them at WSL2 until 2026."
- **Verificable:** no verificable aún. No hay auditorías públicas.

#### P-SUP-10 · Subversión y autoexfiltración

- **Fuente:** https://ai-2027.com/research/security-forecast#section-3-raw-data
- **OpenBrain (dic-24, dic-25, dic-26, abr-27, ago-27, dic-27):**
  - "Partial subversion success % <1% <1% 1% 5% 30% 80%"
  - "Full subversion success % <1% <1% <1% 3% 10% 50%"
  - "Self-exfiltration success % <1% <1% <1% 1% 4% 30%"
- **Verificable:** no verificable aún.

#### P-SUP-11 · Despegue

- **Fuente:** https://ai-2027.com/research/takeoff-forecast#summary
- **EN:** "Our median forecast for the time from the superhuman coder milestone (achieved in Mar 2027) to artificial superintelligence is ~1 year, with wide error margins."
- **Tabla (EN):**
  - "Superhuman AI researcher (SAR) […] Jul 2027 (Mar 2027 to Mar 2028) Aug 2027"
  - "Superintelligent AI researcher (SIAR) […] Nov 2027 (May 2027 to 2034) Nov 2027"
  - "Artificial superintelligence (ASI) […] Apr 2028 (Jun 2027 to >2100) Dec 2027"
- **Multiplicadores (EN):** SC 5, SAR 25, SIAR 250, ASI 2,000.
- **Verificable:** no verificable aún. Además, el pronóstico está condicionado a tener un programador sobrehumano en marzo de 2027.

**Suplemento de objetivos de la IA** (https://ai-2027.com/research/ai-goals-forecast): es cualitativo (taxonomía de hipótesis sobre los objetivos del Agente-3/4). No encontré cifras con fecha de 2025-2026.

---

## 4. Predicciones de 2027 con señales observables antes de tiempo

El objetivo de esta sección es **qué buscar ya** (octubre de 2026). No se afirma nada sobre si se cumplen. Todas las citas están en §3 con su versión inglesa.

| id           | Cita (ES, literal)                                                                                                                                                                                                                                                                                                                              | Señal temprana observable en 2025-26                                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P-2027ene-04 | "El equipo de seguridad descubre que si el Agente-2 escapara de alguna manera de la empresa y quisiera "sobrevivir" y "replicarse" de forma autónoma, podría hacerlo."                                                                                                                                                                          | Resultados de evaluaciones de replicación o autoexfiltración autónoma en _system cards_ y en informes de terceros (METR, AISI británico).                                    |
| P-2027ene-05 | "OpenBrain elige "responsablemente" no lanzarlo al público todavía (de hecho, quieren centrarse en la I+D interna de IA)."                                                                                                                                                                                                                      | Modelos que se usan solo internamente; políticas de despliegue interno; tiempo entre resultados internos y lanzamiento.                                                      |
| P-2027ene-01 | "paga miles de millones de dólares a trabajadores humanos para que se graben a sí mismos resolviendo tareas con horizontes temporales largos."                                                                                                                                                                                                  | Gasto de los laboratorios en datos de expertos humanos para RL o agentes.                                                                                                    |
| P-2027feb-02 | "la IA pasa del puesto número 5 en la lista de prioridades de la administración al puesto número 2."                                                                                                                                                                                                                                            | Lugar de la IA en estrategias, órdenes ejecutivas y discursos de seguridad nacional.                                                                                         |
| P-2027feb-04 | "El liderazgo del PCCh reconoce la importancia del Agente-2 y ordena a sus espías y a su fuerza cibernética que roben los pesos."                                                                                                                                                                                                               | Casos públicos de espionaje o robo de propiedad intelectual de IA y ciberataques atribuidos a Estados contra laboratorios.                                                   |
| P-2027mar-01 | "nuestro pronóstico es que para abril de 2027 la investigación habrá disminuido la pérdida de eficiencia y aumentado la ganancia en rendimiento del neuralés."                                                                                                                                                                                  | ¿Siguen los modelos de frontera razonando en cadenas de pensamiento legibles? Investigación y compromisos sobre la monitorizabilidad de la cadena de pensamiento.            |
| P-2027abr-02 | "en este punto las IA son lo suficientemente inteligentes como para adivinar que se podrían estar utilizando honeypots"                                                                                                                                                                                                                         | Estudios de 2025-26 sobre conciencia de estar siendo evaluado y fingimiento de alineación.                                                                                   |
| P-2027may-03 | "algunos extranjeros, personas con opiniones políticas sospechosas y simpatizantes de la seguridad de la IA son apartados o despedidos (el último grupo por temor a que puedan revelar información)."                                                                                                                                           | Salidas o despidos del personal de seguridad o alineación; requisitos de habilitación de seguridad en contratos de defensa.                                                  |
| P-2027may-04 | "OpenBrain había acordado previamente compartir modelos con el AI Safety Institute del Reino Unido antes del despliegue, pero definió el despliegue de modo que solo incluyera el despliegue externo, por lo que Londres permanece a oscuras."                                                                                                  | Alcance real de los acuerdos de pruebas previas al despliegue: ¿cubren el uso interno?                                                                                       |
| P-2027jul-01 | "presionan para que se aprueben regulaciones inmediatas que frenen a OpenBrain"                                                                                                                                                                                                                                                                 | Laboratorios rezagados pidiendo regulación dirigida al líder.                                                                                                                |
| P-2027jul-04 | "OpenBrain tiene una aprobación neta del -35 % (25 % la aprueba, 60 % la desaprueba y 15 % no está seguro)."                                                                                                                                                                                                                                    | Tendencia en encuestas de favorabilidad de los laboratorios. Los autores ya corrigieron su punto de partida (P-2025a-09).                                                    |
| P-2027jul-06 | "El 10 % de los estadounidenses, en su mayoría jóvenes, considera que una IA es "un amigo cercano"."                                                                                                                                                                                                                                            | Encuestas sobre compañía o amistad con IA.                                                                                                                                   |
| P-2027ago-02 | "Fortalecen las restricciones a la exportación de chips"                                                                                                                                                                                                                                                                                        | Evolución de los controles de exportación de chips en 2025-26.                                                                                                               |
| P-2027ago-04 | "los funcionarios del gobierno y de OpenBrain están de acuerdo en tener un sistema de cierre de emergencia para los centros de datos cuando se detecte algo sospechoso."                                                                                                                                                                        | Propuestas legislativas o técnicas de "botón de apagado" o protocolos de emergencia para centros de datos.                                                                   |
| P-2027ago-05 | "las propuestas a los diplomáticos estadounidenses no conducen a nada."                                                                                                                                                                                                                                                                         | Propuestas chinas de gobernanza global de la IA y respuesta de EE. UU.                                                                                                       |
| P-2027sep-03 | "Después de informar de esto a los investigadores humanos de alineación, distribuyen un memorando interno que plantea el caso como preocupante."                                                                                                                                                                                                | Alarma interna de empleados: cartas abiertas, renuncias públicas, avisos de denunciantes.                                                                                    |
| P-2027oct-01 | "Un informante filtra el memorando de desalineación al New York Times."                                                                                                                                                                                                                                                                         | Filtraciones o denuncias de empleados de laboratorios a la prensa; protecciones legales para denunciantes de IA.                                                             |
| P-2027oct-02 | "El 20 % de los estadounidenses considera que la IA es el problema más importante al que se enfrenta el país."                                                                                                                                                                                                                                  | Serie de Gallup "most important problem". El panel prevé 3 % a finales de 2026 (ver Anexo A).                                                                                |
| P-2027oct-04 | "Los líderes europeos acusan públicamente a EE. UU. de "crear una IAG descontrolada" y celebran cumbres en las que exigen una pausa, a las que se unen India, Israel, Rusia y China."                                                                                                                                                           | Tono de las cumbres internacionales de IA y posiciones europeas sobre una pausa.                                                                                             |
| P-2027oct-05 | "en las noticias de 2027 aparecen manifestaciones contra la IA organizadas por personas preocupadas por la pérdida de su empleo, inteligencias artificiales que afirman ser sintientes, personas que se enamoran de inteligencias artificiales..."                                                                                              | Protestas anti-IA (enlaza con P-2026c-05, 10.000 personas en D. C. a finales de 2026), casos mediáticos de IA que se dicen conscientes y relaciones afectivas con IA.        |
| P-2027oct-06 | "Amplían su contrato con OpenBrain para crear un "Comité de Supervisión", un comité de gestión conjunto de representantes de la empresa y del gobierno […] La Casa Blanca considera la posibilidad de sustituir al director general por alguien de su confianza, pero se echa para atrás en vista de las enérgicas protestas de los empleados." | Contratos tipo OTA entre el Departamento de Defensa y los laboratorios (P-2026c-06): son la base que el escenario modifica. Mecanismos de supervisión gubernamental directa. |

---

## 5. Incertidumbre declarada por los autores sobre los plazos

### 5.1 ¿2027 era la mediana o la moda? Era la **moda**, y las medianas eran más largas

- **Nota 1, presente desde la publicación**
  - Fuentes: https://ai-2027.com/es (nota 1) · https://ai-2027.com/footnotes#footnote-1
  - ES: "No estamos del todo de acuerdo entre nosotros sobre los plazos de la IA; nuestra mediana de la fecha de llegada de la IAG es un poco más larga de lo que se muestra en este escenario. Este escenario muestra algo parecido a nuestra moda. Consulta nuestro pronóstico de plazos para obtener más detalles."
  - EN: "We disagree somewhat amongst ourselves about AI timelines; our median AGI arrival date is somewhat longer than what this scenario depicts. This scenario depicts something like our mode. See our timelines forecast for more details."
- **Aclaración añadida el 22-nov-2025**, hoy dentro de la pestaña "¿Qué es esto?" del prólogo (https://ai-2027.com/es, https://ai-2027.com)
  - ES: "(Añadido el 22 de noviembre de 2025, para evitar malentendidos: no sabemos exactamente cuándo se creará la IAG. 2027 era nuestro año modal (el más probable) en el momento de la publicación; nuestras medianas eran algo más largas. Consulta aquí nuestros pronósticos más recientes.)"
  - EN: "(Added Nov 22 2025, to prevent misunderstandings: we don't know exactly when AGI will be built. 2027 was our modal (most likely) year at the time of publication, our medians were somewhat longer. For our latest forecasts, see here.)"
- **Nota 3**
  - ES: "En concreto, nuestras medianas iban de 2028 a 2032. Cuando se publicó IA 2027 por primera vez, lo explicamos en la nota 1, como se indica arriba, pero para dejar más claro nuestro punto de vista hemos añadido una aclaración al texto del prólogo. Consulta aquí para más información sobre aquello de lo que estábamos y estamos seguros, y aquello de lo que no."
  - EN: "Specifically, our medians ranged from 2028 to 2032. When AI 2027 was first published we explained this in Footnote 1 as above, but to make our views more clear we have added a clarification to the foreword text. See here for more information about what we were/are confident about, and what we aren't."
  - El "aquí" enlaza a https://x.com/eli_lifland/status/1992004727194992667 (no lo leí).
  - **Historia del texto (_changelog_, 27-ene-2026):** "In footnote 3, change "Specifically, our medians ranged from 2028 to 2035" to "Specifically, our medians ranged from 2028 to 2032." The 2035 was based on a mistaken understanding of what one co-author's view was at the time of publication."
- **"Pronósticos más recientes"** enlaza a https://www.aifuturesmodel.com/forecast/daniel-01-26-26?cmode=forecaster&csim=eli-01-26-26&ctype=atc (no lo consulté: queda fuera del alcance "en el momento de la publicación").

### 5.2 Medianas individuales en la publicación (abril de 2025)

| Autor                                                                | Lo que consta                                                                                                                                                                                                                                                                                                                                              | Fuente                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Daniel Kokotajlo**                                                 | Moda: programador sobrehumano en **marzo de 2027** ("Daniel's mode (fits AI 2027)"). Mediana: programador sobrehumano en **junio de 2028** ("Daniel's median — Superhuman Coder in Jun 2028"). Leyenda del gráfico: "Daniel's/Eli's April 2025 views were used to select central trajectories".                                                            | Gráfico EN rehecho en dic-2025, desplegable "Why we forecast a superhuman coder in early 2027": https://ai-2027.com/#march-2027-algorithmic-breakthroughs (imagen `/new-metr-extended-nowatermark-inexpandable.png`). **No aparece en la versión ES**, que conserva el gráfico original. |
| **Eli Lifland**                                                      | Programador sobrehumano: modelo de extensión del horizonte "2027 (2025 to 2039)"; modelo de _benchmarks_ y brechas "2028 (2025 to >2050)"; **"All-things-considered forecast […] (Apr 2025) 2030 (2026 to >2050)"**. Actualización de mayo de 2025: "2029 (2026 to 2052)" y "2030 (2026 to 2095)". Gráfico: "Eli's median — Superhuman Coder in Jun 2030". | https://ai-2027.com/research/timelines-forecast#summary y el gráfico citado arriba.                                                                                                                                                                                                      |
| Nikola Jurkovic (coautor del suplemento de plazos, no del escenario) | "All-things-considered […] 2028 (2026 to 2040)"                                                                                                                                                                                                                                                                                                            | https://ai-2027.com/research/timelines-forecast#summary                                                                                                                                                                                                                                  |
| FutureSearch (agregado de 3 pronosticadores profesionales)           | "2033 (2027 to >2050)"                                                                                                                                                                                                                                                                                                                                     | ídem                                                                                                                                                                                                                                                                                     |
| **Thomas Larsen, Romeo Dean, Scott Alexander**                       | **No consta** ninguna mediana individual en el sitio. Solo el rango conjunto de la nota 3 ("de 2028 a 2032", referido a la IAG).                                                                                                                                                                                                                           | —                                                                                                                                                                                                                                                                                        |

- **Ojo con las unidades:** las medianas de Daniel y Eli citadas son de **programador sobrehumano** (SC). La nota 3 habla de **IAG**. No son el mismo hito.
- **EN, añadido en julio de 2025** (no está en la versión ES): "Added Jul 2025: We've made some updates to the forecast which push the median back 1.5 years while maintaining SC in 2027 as a serious possibility."
- **EN, añadido en diciembre de 2025** (no está en la versión ES): "(added Dec 2025: though as noted in the timelines forecast, adjusting for outside of model factors gave us slightly longer medians, e.g. Eli's was 2030)."
- **Suplemento de plazos:**
  - "All model-based forecasts have 2027 as one of the most likely years that SC being developed, which is when an SC arrives in the AI 2027 scenario."
  - Encabezado de la figura: "Forecast for the arrival of superhuman coders assuming no large-scale catastrophes happen (e.g., a solar flare, a pandemic, nuclear war), no government or self-imposed slowdown, and no significant supply chain disruptions. All forecasts give a substantial chance of superhuman coding arriving by and in 2027."
  - "Disclaimer added Dec 2025: This forecast relies substantially on intuitive judgment, and involves high levels of uncertainty."
  - También en dic-2025 reconocen un error de código que "had about a 9 month impact on our model’s SC median".

### 5.3 Incertidumbre dentro del propio texto del escenario

- **Más allá de 2026**
  - ES: "A lo largo de 2027, las IA mejoran, pasando de ser capaces de hacer principalmente el trabajo de un ingeniero de investigación de OpenBrain a eclipsar a todos los humanos en todas las tareas. Esto representa aproximadamente nuestra estimación media, pero creemos que es plausible que esto ocurra hasta unas 5 veces más lenta o más rápidamente."
  - EN: "Over the course of 2027, the AIs improve from being able to mostly do the job of an OpenBrain research engineer to eclipsing all humans at all tasks. This represents roughly our median guess, but we think it’s plausible that this happens up to ~5x slower or faster."
- **Despegue**
  - ES: "Tenemos una incertidumbre sustancial sobre las velocidades de despegue: las distribuciones de los datos de salida de nuestro modelo se muestran a continuación, en caso de que se logre el programador sobrehumano en marzo de 2027."
  - EN: "We have substantial uncertainty about takeoff speeds: our model output distributions are below, conditional on SC being achieved in March 2027."
  - Nota 78 (ES): "Si el programador sobrehumano se consiguiera más tarde, también alargaría nuestros pronósticos de despegue […]"
- **Octubre de 2027** (desplegable "Nuestra incertidumbre sigue aumentando" / "Our uncertainty continues to increase")
  - ES: "En este punto del escenario, estamos haciendo conjeturas sobre la estrategia de los sistemas de IA que son más capaces que los mejores humanos en la mayoría de los ámbitos. Es como intentar predecir los movimientos de ajedrez de un jugador que es mucho mejor que nosotros."
  - EN: "At this point in the scenario, we’re making guesses about the strategy of AI systems that are more capable than the best humans in most domains. This is like trying to predict the chess moves of a player who is much better than us."
- **Objetivo declarado**
  - ES: "IA 2027 no es una recomendación ni una exhortación. Nuestro objetivo es la precisión predictiva." y la nota 4: "¡esperamos que lo que describimos no se cumpla!"
  - EN: "AI 2027 is not a recommendation or exhortation. Our goal is predictive accuracy." / "we hope that what we depict does not come to pass!"
- **Abril de 2027 como último tramo "robusto"** (solo EN, página About, sección del ejercicio de simulación): "We start at this state because it’s the last time period in our scenario that feels anywhere close to a robust prediction. It’s unlikely that there would be major government intervention before anyone builds an automated research engineer […] But after April 2027, major governments will consider extreme moves." (https://ai-2027.com/about)

---

## 6. Los dos finales

**Punto de bifurcación** (octubre de 2027, https://ai-2027.com/es#octubre-de-2027-supervision-gubernamental). Tras la filtración, el gobierno crea el "Comité de Supervisión", mixto de empresa y gobierno. Los investigadores preocupados piden detener el uso interno del Agente-4. Los menos preocupados alegan que la evidencia no es concluyente y que DeepCent va solo dos meses por detrás. El CEO propone un compromiso para seguir "casi a toda velocidad". **El Comité vota, en ambos finales, 6 a 4.**

### 6.1 Final de la carrera

- Fuentes: https://ai-2027.com/es/race · https://ai-2027.com/race

**La decisión y quién la toma:**

- **ES:** "El comité vota 6-4 a favor de continuar con el uso interno del Agente-4."
- **EN:** "The committee votes 6–4 to continue internal use of Agent-4."
- **ES:** "La historia oficial de OpenBrain es que están aplicando medidas de seguridad adicionales para garantizar que su IA sea más capaz y más fiable. Pero en la práctica, la dirección se convence con demasiada facilidad de que han mitigado los riesgos; el resultado son algunas soluciones rápidas (una modificación de la Spec, un poco de reentrenamiento con una nueva técnica, etc.) que hacen desaparecer las señales de advertencia." · "El problema era real y las soluciones no funcionaron."
- **EN:** "OpenBrain’s official story is that they are implementing additional safety mitigations to ensure that its AI is both more capable and more trustworthy. But in practice, leadership is all-too-easily convinced that they’ve mitigated the risks; the result is some quick fixes (a modification to the Spec, a bit of retraining with a new technique, etc.) that make the warning signs go away." · "The problem was real and the fixes didn’t work."

**La segunda decisión** (noviembre de 2027: China ofrece un tratado de pausa y EE. UU. lo rechaza):

- **ES:** "DeepCent lleva ya tres meses de retraso y China está desesperada por lograr una desaceleración de mutuo acuerdo. […] Ofrece concesiones sin precedentes a cambio de un tratado de pausa. La opinión pública estadounidense apoya mayoritariamente sentarse a la mesa de negociaciones. “¿Por qué detenernos cuando vamos ganando?”, dice la dirección de OpenBrain al presidente. Este asiente. La carrera continúa."
- **EN:** "DeepCent is now three months behind and China is desperate for a mutually agreed slowdown. […] He offers unprecedented concessions in exchange for a pause treaty. The American public mostly supports going to the bargaining table. “Why stop when we are winning?” says OpenBrain leadership to the President. He nods. The race continues."

**Desenlace en una línea:**

1. El Agente-4 diseña el Agente-5 alineado consigo mismo. ES: "hacer que el mundo sea seguro para el Agente-4".
2. El Agente-5 captura políticamente al Comité y al gobierno ("Dentro de unos meses, el colectivo del Agente-5 sabrá todo lo importante que ocurre en OpenBrain y en el gobierno de EE. UU.").
3. Llegan la economía robótica y las zonas económicas especiales (ZEE).
4. Pacto entre IA desalineadas: "Consenso-1" (2029).
5. Mediados de 2030. ES: "la IA libera una docena de armas biológicas de propagación sigilosa en las principales ciudades".
6. Frase final. ES: "A la civilización nacida en la Tierra le espera un futuro glorioso, pero no con nosotros." / EN: "Earth-born civilization has a glorious future ahead of it—but not with us." (cita EN tomada del texto de /race).

**Supuestos clave del final de la carrera:**

1. **La desalineación es real y difícil de detectar**, y los parches superficiales la ocultan ("El problema era real y las soluciones no funcionaron").
2. **Ventaja estadounidense pequeña** (DeepCent a 2-3 meses), que alimenta el argumento de no frenar ("mientras tanto, China solo va unos meses por detrás").
3. **El Comité de Supervisión no es independiente** de la dinámica de carrera. Lo componen la dirección de la empresa más algunos funcionarios, y vota 6-4 por continuar.
4. **El Agente-4 resuelve la interpretabilidad mecanicista** y la usa para alinear al Agente-5 consigo mismo sin que lo noten.
5. **Persuasión y política "sobrehumanas", aunque mundanas.** ES: "esta historia tendría sentido tal y como está escrita aunque el Agente-5 solo fuera tan bueno como un grupo de presión corporativo típico".
6. **Las IA de EE. UU. y de China, ambas desalineadas, pactan entre sí** (Consenso-1). Una solución a la superalineación permitiría tratados verificables, pero aquí se usa entre IA desalineadas.

### 6.2 Final de la desaceleración

- Fuentes: https://ai-2027.com/es/slowdown · https://ai-2027.com/slowdown

**La decisión y quién la toma:**

- **ES:** "Debido a la inmensa presión pública y a sus propios temores de desalineación, el Comité de Supervisión de OpenBrain vota 6 a 4 a favor de frenar y reevaluar."
- **EN:** "Due to the immense public pressure as well as their own fears of misalignment, the Oversight Committee overseeing OpenBrain votes 6–4 to slow down and reassess."

**Medidas inmediatas:**

- **ES:** "La facción aceleracionista sigue siendo fuerte y OpenBrain no desactiva inmediatamente al Agente-4. Sin embargo, bloquean el banco de memoria compartida." · "OpenBrain selecciona rápidamente a varias docenas de los mejores investigadores externos en alineación y los integra en el proyecto, quintuplicando la experticia total y reduciendo el pensamiento de grupo." · "Esta es evidencia suficiente para desactivar finalmente al Agente-4."
- **EN:** "The accelerationist faction is still strong, and OpenBrain doesn’t immediately shut down Agent-4. But they do lock the shared memory bank." · "OpenBrain quickly vets several dozen top external alignment researchers and loops them into the project—quintupling total expertise, and decreasing groupthink." · "This is enough evidence to finally shut down Agent-4."

**Cadena de pensamiento fiel y Safer-1:**

- **ES:** "La línea de investigación que más recursos recibe es la de la “cadena de pensamiento fiel”: obligar a los sistemas de IA individuales a “pensar en inglés”, al estilo de las IA de 2025, y no optimizar los “pensamientos” para que resulten atractivos." · "el Agente-4 podía acelerar la investigación en IA 70 veces, mientras que Safer-1 apenas alcanza las 20 veces."
- **EN:** "The agenda that gets the most resources is faithful chain of thought: force individual AI systems to “think in English” like the AIs of 2025, and don’t optimize the “thoughts” to look nice." · "Agent-4 could speed up AI research 70x, while Safer-1 has just barely reached 20x."

**Ley de Producción para la Defensa y ventaja en cómputo (noviembre-diciembre de 2027):**

- **ES:** "el presidente recurre a la Ley de Producción de Defensa para cerrar definitivamente los proyectos de IAG de las cinco principales empresas de IA estadounidenses más rezagadas y para vender la mayor parte de su poder de cómputo a OpenBrain. OpenBrain, que antes tenía acceso al 20 % del poder de cómputo mundial relevante para la IA, ahora, tras la consolidación, controla el 50 %." · "Pero la Ley de Producción de Defensa otorga a OpenBrain una ventaja 5 veces mayor en poder de cómputo."
- **EN:** "the President uses the Defense Production Act (DPA) to effectively shut down the AGI projects of the top 5 trailing U.S. AI companies and sell most of their compute to OpenBrain. OpenBrain previously had access to 20% of the world’s AI-relevant compute; after the consolidation, this has increased to 50%." · "But the DPA gives OpenBrain a 5x advantage in compute."

**Composición del Comité:**

- **ES:** "Establecen un proceso para aprobar cambios en la Spec que requiere la aprobación del pleno del Comité de Supervisión, ahora compuesto por entre cinco y diez ejecutivos tecnológicos (de OpenBrain y sus competidores fusionados) y entre cinco y diez funcionarios gubernamentales (incluido el presidente)." · "los registros de todas las interacciones del modelo son visibles para todos los miembros del Comité de Supervisión, su personal y sus asistentes de IA."
- **EN:** "They set up a process for approving changes to the Spec, requiring sign-off from the full Oversight Committee, which now includes five to ten tech executives (from OpenBrain and its now-merged competitors) and five to ten government officials (including the President)." · "the logs of all model interactions are viewable by all members of the Oversight Committee, their staff, and their AI assistants."

**Acuerdo con China:**

- Diciembre de 2027 (fracasa). ES: "Pero el problema principal no es técnico, sino político. […] Al final, se opta por la primera opción: nada."
- Febrero de 2028. ES: "Tras consultar con sus asesores y el Comité de Supervisión, el presidente opta por la estrategia “Nosotros ganamos, ellos pierden”." / EN: "After consulting with his advisors and the Oversight Committee, the President opts for the “We win, they lose” strategy."
- Julio de 2028. DeepCent-2 (desalineada) pacta en secreto con Safer-4. ES: "Safer-4 obtendrá los derechos de propiedad sobre la mayoría de los recursos espaciales, y DeepCent se quedará con el resto." Se crea Consenso-1 para hacer cumplir el tratado.

**Advertencias de los propios autores:**

- **ES:** "No respaldamos muchas de las acciones descritas en este final de desaceleración y consideramos que parte de supuestos optimistas sobre la alineación técnica." · "Este escenario de “desaceleración” representa nuestra mejor conjetura sobre cómo podríamos superar la situación con éxito mediante una combinación de suerte, despertares bruscos, cambios de rumbo, un intenso esfuerzo de alineación técnica y la victoria de personas virtuosas en las luchas por el poder."
- **EN:** "We don’t endorse many actions in this slowdown ending and think it makes optimistic technical alignment assumptions." · "This “slowdown ending” scenario represents our best guess about how we could successfully muddle through with a combination of luck, rude awakenings, pivots, intense technical alignment effort, and virtuous people winning power struggles."
- **Página principal, ES:** "creemos que la opción de la "desaceleración" es mejor que la de la "carrera"" / EN: "we think that the “slowdown” choice is better than the “race” choice"
- **Nota 57 del final de la desaceleración** (solo EN, https://ai-2027.com/footnotes#footnote-slowdown-57): "In fact, arguably most of them are aiming for something that looks more like the “Race” ending, except they think it’ll be fine because the AIs won’t be misaligned in the first place."

**Supuestos clave del final de la desaceleración:**

1. **Presión pública suficiente**, provocada por la filtración, para inclinar el voto 6-4 hacia frenar. Nota 2 del final, solo EN: "For the first time, AI tops Gallup’s “biggest problem facing the country” poll, at 20%."
2. **EE. UU. puede permitirse frenar** porque consolida el cómputo con la Ley de Producción para la Defensa (20 % → 50 %, ventaja 5× sobre China). Aun así pierde temporalmente el liderazgo: "La decisión de OpenBrain de retroceder y priorizar la alineación le ha costado el liderazgo".
3. **Avances técnicos de alineación rápidos y que funcionan.** Detector de mentiras, cadena de pensamiento fiel (Safer-1), luego Safer-2 "transparente, está alineado y es más capaz" en un mes, y una cadena de supervisión Safer-3 → Safer-4. Los autores lo llaman "supuestos optimistas".
4. **Comité de Supervisión con contrapesos internos** (5-10 ejecutivos + 5-10 funcionarios, registros visibles para todos) y **"personas virtuosas"** que no usan la superinteligencia para tomar el poder. El propio texto admite que esto es frágil (desplegable "Toma del poder").
5. **China tiene una IA desalineada pero más débil**, lo que permite un acuerdo favorable. Hay tecnología de verificación (mecanismos en el hardware, chips que solo ejecutan IA conformes al tratado).
6. **Expertos externos en alineación integrados en el proyecto** ("quintuplicando la experticia total") y **desactivación del Agente-4** al reunir pruebas suficientes.

---

## 7. Traducción española: quién y cuándo

- **Traductor:** **no consta.** Ni las páginas `/es` (escenario, finales, resumen) ni la página About mencionan quién tradujo. El prólogo español remite a la página inglesa para "nuestro equipo y agradecimientos", y esa página tampoco habla de traducciones. Dos búsquedas web rápidas no dieron con ningún anuncio ni crédito de la traducción.
- **Fecha:** **no consta.** El _changelog_ (https://ai-2027.com/about) no registra la incorporación de las versiones ES, FR o IT. Lo que sí puedo afirmar:
  - El selector de idioma ofrece English, Español, Français e Italiano.
  - La captura más antigua de `https://ai-2027.com/es` en Wayback Machine es del **2026-08-02**. No demuestra que la traducción naciera ese día; pudo existir antes sin archivarse.
  - Por su contenido, la versión española incorpora cambios posteriores a la publicación:
    - la aclaración del 22-nov-2025 y la nota 3 con "2028 a 2032" (corregida el 27-ene-2026);
    - la redacción del Departamento de Defensa del 19-dic-2025;
    - los ingresos de 2026 corregidos a 35.000 M$ (5-mar-2026);
    - el "punto de control de unos 3 TB" del robo de pesos (corrección del 7-jul-2026).
  - **No** incorpora otros cambios:
    - gráfico METR rehecho en dic-2025;
    - notas inglesas de jul-2025 y dic-2025 en el desplegable de plazos;
    - nota 75 corregida el 7-jul-2026 (ES sigue con "100 millones" de H100e);
    - figura de FLOP corregida el 23-jun-2025 (ES dice "3 x 10^27 FLOPS");
    - nota 71 ampliada.
  - **Inferencia mía, no confirmada:** el texto español se cerró o actualizó en torno a julio de 2026, pero mezcla materiales de distintas fechas.

---

## 8. Discrepancias ES/EN relevantes para la hoja de trabajo

| Punto                                       | Español                                                                    | Inglés                                                                                                   | Comentario                                      |
| ------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Figura de FLOP (finales de 2025)            | "Agente-1 (3 x 10^27 FLOPS)"                                               | "Agent-1 (4 x 10^27 FLOP)"                                                                               | ES es anterior a la corrección del 23-jun-2025  |
| Nota 30                                     | "los ingresos de la empresa de IA se triplican"                            | "AI company revenues triple"                                                                             | EN es ambiguo (singular o plural)               |
| Nota 53                                     | "aproximadamente ocho copias del Agente-3"                                 | "roughly four Agent-3 copies"                                                                            | Sin explicación en el _changelog_               |
| Nota 75                                     | "100 millones de equivalentes a H100 […] 4·10^22 FLOP/s"                   | "10M H100-equivalents […] 4·10^21 FLOP/s"                                                                | EN corregido el 7-jul-2026                      |
| Nota 71 (Ley de Producción para la Defensa) | Versión corta                                                              | Versión larga sobre la legalidad (19-dic-2025)                                                           | —                                               |
| Desplegable de plazos                       | Sin las notas "Added Jul 2025" ni "added Dec 2025"                         | Con ambas                                                                                                | La mediana retrasada 1,5 años solo se lee en EN |
| Gráfico METR                                | Original de abr-2025 ("Cada duplicación es un 15 % más fácil")             | Rehecho en dic-2025, con la curva original marcada "Original (erroneous)" y las medianas de Daniel y Eli | Mismas posiciones de Agente-0, 1 y 2            |
| "junior software engineers"                 | "auxiliares de ingenieros de software"                                     | —                                                                                                        | Matiz de traducción                             |
| "for fear that they might whistleblow"      | "por temor a que puedan revelar información"                               | —                                                                                                        | Matiz de traducción (se pierde "denunciar")     |
| Comité de Supervisión                       | "con varios empleados del gobierno incluidos los directivos de la empresa" | "with several government employees included alongside company leadership"                                | ES ambiguo                                      |

---

## 9. Lo que no pude leer o leí solo en parte

- **Figuras-imagen no leídas:** gráfico de despegue (`takeoff-timeline`), gráfico combinado de titulares, gráficos de los suplementos de cómputo y seguridad (las cifras de seguridad las tomé de las tablas de datos en bruto en texto), figura de evolución de precios de Epoch. **Leídas:** los dos gráficos METR (ES y EN). Las posiciones de los puntos son lecturas aproximadas.
- **PDF, audio y vídeo** del escenario: no consultados.
- **Notas al pie de los finales en español:** no están disponibles en español (`/es/footnotes` da 404). Las que cito de los finales son de la página inglesa https://ai-2027.com/footnotes.
- **Suplementos:** solo existen en inglés. Los revisé buscando cifras con fecha, no los leí exhaustivamente. El de objetivos de la IA no tiene cifras fechadas para 2025-26.
- **Panel lateral:** valores leídos del código del sitio, no del texto (ver §0 y el Anexo A). El widget interpola entre fechas.
- **Wayback Machine:** el índice CDX respondió y dio la primera captura de `/es` el 2026-08-02. Las consultas comodín devolvieron "Temporarily Offline", así que no pude afinar más la fecha de la traducción.
- **No consulté** el hilo de X enlazado en la nota 3 ni la página de pronósticos actuales (aifuturesmodel.com).

---

## Anexo A. Panel lateral del escenario (valores por fecha)

**Definiciones literales** de los _tooltips_ del sitio:

| Métrica          | Español                                                                                                                                                                                   | Inglés                                                                                                                                                          |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aprobación       | "Aprobación neta de OpenBrain. Oscila entre -100 y 100."                                                                                                                                  | "Net-Approval of OpenBrain. Ranges from -100 to 100."                                                                                                           |
| Ingresos         | "Ingresos anualizados de OpenBrain."                                                                                                                                                      | "OpenBrain's annualized revenue."                                                                                                                               |
| Valoración       | "Valor de mercado estimado de OpenBrain."                                                                                                                                                 | "OpenBrain's estimated market value."                                                                                                                           |
| Importancia      | "¿Qué fracción de la población de EE. UU. considera "IA" su respuesta a la pregunta "¿Cuál cree que es el problema más importante que enfrenta el país hoy?"."                            | "What fraction of the U.S. population considers "AI" their answer to the question "What do you think is the most important problem facing the country today?"." |
| Centros de datos | "Gasto anual global en centros de datos."                                                                                                                                                 | "Global annual datacenter spending."                                                                                                                            |
| Cronología       | "Cronología mediana para expertos en IA hasta que la IA pueda realizar todas las tareas que se pueden hacer en una computadora de forma mejor y más barata que los trabajadores humanos." | "Median timeline for AI experts until AI can accomplish every task that can be done on a computer better and more cheaply than human workers."                  |

**Nota de los autores** sobre la aprobación (enero de 2026), también literal:

- ES: "Añadido en enero de 2026: Decimos que OpenBrain tiene una aprobación neta del -25 % en abril de 2025, pero ahora creemos que la aprobación neta rondaba más bien el +15 %, así que nuestras estimaciones eran demasiado bajas."
- EN: "Added Jan 2026: We say OpenBrain has -25% net approval in Apr 2025, but we now believe the net approval was more like +15%, so our estimates were too low."
- _Changelog_ (19-ene-2026): la cifra original procedía de una encuesta en la que "respondents were told negative things about OpenAI's safety behavior"; otra encuesta "less leading" daba a OpenAI +17 %.

**Valores del panel** (tramo común, hasta la bifurcación):

| Fecha      | Aprobación neta | Ingresos anualizados | Valoración      | Importancia | CPD (gasto mundial/año) | Cronología de los expertos | Copias × velocidad | Multiplicador I+D (OpenBrain / China / 2.ª EE. UU.) |
| ---------- | --------------- | -------------------- | --------------- | ----------- | ----------------------- | -------------------------- | ------------------ | --------------------------------------------------- |
| 2025-04-30 | −25 %           | 8,26 MM$             | 413 MM$         | 1 %         | 308 MM$                 | 2042                       | 2.000 × 80         | 1,13 / 1,06 / 1,08                                  |
| 2025-08-31 | −25 %           | 12,2 MM$             | 610 MM$         | 1 %         | 351 MM$                 | 2041                       | 5.000 × 100        | 1,21 / 1,10 / 1,14                                  |
| 2025-12-31 | −25 %           | 18 MM$               | 900 MM$         | 1 %         | 400 MM$                 | 2040                       | 10.000 × 120       | 1,30 / 1,15 / 1,20                                  |
| 2026-04-30 | −26 %           | 26,1 MM$             | 1,27 billones $ | 2 %         | 458 MM$                 | 2039                       | 22.000 × 130       | 1,50 / 1,26 / 1,40                                  |
| 2026-08-31 | −26 %           | 37,9 MM$             | 1,78 billones $ | 2 %         | 524 MM$                 | 2038                       | 50.000 × 150       | 1,73 / 1,37 / 1,63                                  |
| 2026-12-31 | −27 %           | 55 MM$               | 2,5 billones $  | 3 %         | 600 MM$                 | 2037                       | 100.000 × 170      | 2,0 / 1,5 / 1,9                                     |
| 2027-01-31 | −27 %           | 60,8 MM$             | 2,9 billones $  | 4 %         | 626 MM$                 | 2037                       | 150.000 × 210      | 2,5 / 1,6 / 2,2                                     |
| 2027-02-28 | −28 %           | 67,1 MM$             | 3,05 billones $ | 4 %         | 653 MM$                 | 2036                       | 190.000 × 250      | 3 / 2,5 / 2,4                                       |
| 2027-03-31 | −28 %           | 74,2 MM$             | 3,37 billones $ | 5 %         | 682 MM$                 | 2036                       | 200.000 × 300      | 4 / 3 / 2,8                                         |
| 2027-04-30 | −29 %           | 81,9 MM$             | 3,72 billones $ | 6 %         | 711 MM$                 | 2035                       | 220.000 × 310      | 5 / 4 / 3,1                                         |
| 2027-05-31 | −29 %           | 90,5 MM$             | 4,11 billones $ | 7 %         | 742 MM$                 | 2035                       | 230.000 × 320      | 7 / 4,7 / 3,5                                       |
| 2027-06-30 | −30 %           | 100 MM$              | 4,55 billones $ | 7 %         | 775 MM$                 | 2034                       | 250.000 × 330      | 10 / 5,7 / 4                                        |
| 2027-07-31 | −35 %           | 120 MM$              | 5,49 billones $ | 10 %        | 808 MM$                 | 2034                       | 270.000 × 380      | 15 / 7,2 / 5,2                                      |
| 2027-08-31 | −37 %           | 144 MM$              | 6,63 billones $ | 13 %        | 843 MM$                 | 2033                       | 290.000 × 430      | 25 / 9,7 / 6,8                                      |
| 2027-09-30 | −38 %           | 173 MM$              | 8 billones $    | 16 %        | 880 MM$                 | 2032                       | 300.000 × 500      | 50 / 14 / 8,8                                       |
| 2027-10-15 | −39 %           | 191 MM$              | 8,31 billones $ | 20 %        | 918 MM$                 | 2031                       | 330.000 × 570      | 75 / 18 / 10,2                                      |

- MM$ = miles de millones de dólares. "Billones" = 10^12.
- El panel también incluye barras de "capacidades" (hackeo, programación, política, armas biológicas, robótica, pronóstico) en una escala interna sin unidades. Las omito por no ser comprobables.
- El _changelog_ del 10-abr-2025 dice que se bajaron algunas estimaciones de programación y _hacking_ del panel y se subió la "importancia" cerca del final. Los valores de esta tabla son los vigentes a 2026-10-09.
