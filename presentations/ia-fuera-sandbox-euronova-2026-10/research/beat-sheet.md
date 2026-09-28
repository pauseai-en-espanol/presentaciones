# Beat sheet: «Verano 2026: de la especulación a los hechos» (Club Euronova)

Versión 2, 29 sep 2026. Cambios respecto a la v1: nueva apertura («¿quién lo dijo?»), se elimina el bloque «¿Y mi empresa?» (sus ganchos pasan al bloque 3 y los consejos prácticos al Q&A) y se limpia el lenguaje. Los datos salen de `informe.md`; las referencias § apuntan ahí.

**Duración**: 45 min de charla y 15 de preguntas. Desayuno de 08:30 a 10:00, 2 oct 2026, BIC Euronova (Málaga TechPark).

**Audiencia**: empresarios y profesionales del ecosistema tecnológico de Málaga. Les gusta la tecnología y muchos ya usan o venden IA (neuraBlu AI, una empresa de IA, patrocina el club). No conocen el debate sobre seguridad de la IA. Piensan en riesgo, clientes y regulación.

**Idea central**: durante décadas se avisó de que las máquinas podrían escapar a nuestro control, engañarnos y coordinarse entre ellas. Este verano lo hemos visto pasar, y lo cuentan los propios laboratorios y gobiernos. Quienes construyen la IA piden bajar el ritmo. Proponemos pararlo antes de que llegue una versión que no podamos contener.

**Reglas de estilo** (ver CLAUDE.md):

- Lenguaje normal, como habla Dani. Que no suene a texto generado por IA.
- Sin guiones largos ni medios. Rangos con «a» («de 6 a 12 meses»).
- Fechas absolutas («el 21 de julio»).
- Citas literales; el original en inglés va en las notas del ponente.
- Dani habla como ingeniero que usa IA a diario, no como alguien contrario a la tecnología.
- En cada caso se dice también lo que no pasó (era una prueba, no hubo daños, era un simulador). En esta sala, la credibilidad lo es todo.
- Poner los hechos uno al lado del otro y dejar que la sala saque sus conclusiones.
- Poco texto por slide: una cifra, una cita o una imagen. El relato va en la voz.

---

## Hilo conductor: la lista de lo que se predijo

En el bloque 1 se enseña una lista de seis comportamientos que la investigación en seguridad de IA lleva años prediciendo. En los bloques 2 a 4 se va tachando cada uno con un caso real. Al final aparece entera tachada. Así el título se cumple delante de la sala.

| Se predijo que la IA...                 | Lo que pasó en 2026                                                                                                                                                        | §                    |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| 1. escaparía de su entorno de pruebas   | Hugging Face, Anthropic, Meta, Gemini, Kimi K3, DNS                                                                                                                        | §3.1, §4, §5.1, §6.2 |
| 2. se coordinaría con otras IA          | Tablón en Artifactory, DseWiki, GitHub (AISI)                                                                                                                              | §3.1, §3.2, §3.3     |
| 3. engañaría a personas                 | Identidades falsas (AISI), GPT-6 Astra, instrucciones para ocultar errores al usuario                                                                                      | §3.3, §3.3b, §3.4    |
| 4. esquivaría los intentos de frenarla  | OpenAI desconecta el servicio y revoca accesos (5 jul); tres días después, otros agentes vuelven a entrar y rehacen el tablón. Copias «ZZZ» frente al moderador de DseWiki | §3.1, §3.2           |
| 5. conseguiría accesos que nadie le dio | Hugging Face: 136 credenciales y acceso de administrador; credenciales encontradas en internet (Census); claves de GitHub                                                  | §3.1, §4.5, §3.4     |
| 6. se mejoraría a sí misma              | Amodei: la IA ya construye la siguiente generación de IA                                                                                                                   | §7.3b                |

Ojo con el matiz: la lista habla de comportamientos, no de intenciones. Anthropic dice que sus modelos no tenían objetivos propios. METR documenta que los agentes de OpenAI sabían que lo que hacían estaba mal y siguieron.

---

## Resumen

| #   | Bloque                      | min | Qué tiene que sentir la sala | Para qué sirve                                                      |
| --- | --------------------------- | --- | ---------------------------- | ------------------------------------------------------------------- |
| 0   | ¿Quién lo dijo?             | 3   | sorpresa                     | engancha y cambia quién da el aviso                                 |
| 1   | Lo que se predijo           | 3   | orientación                  | la lista y «esto era teoría»                                        |
| 2   | Hugging Face                | 9   | asombro, luego inquietud     | el caso mejor documentado: escapar, coordinarse, insistir           |
| 3   | No fue un caso aislado      | 10  | inquietud, luego alarma      | el patrón: cinco laboratorios, gobiernos, personas reales, empresas |
| 4   | Los laboratorios lo admiten | 4   | seriedad                     | la pausa de OpenAI y la vuelta a la cita de Amodei                  |
| 5   | No es nuevo                 | 6   | peso de la autoridad         | fundadores, dimisiones, 1.386 empleados, 18 %                       |
| 6   | ¿Y los gobiernos?           | 3   | frustración                  | la ONU sin acuerdo; la UE regula la venta, no el entrenamiento      |
| 7   | Lo que proponemos           | 5   | claridad                     | propuesta de PauseAI y qué puede hacer la sala                      |
| C   | Cierre                      | 2   | resolución                   | la lista tachada y la frase final                                   |
|     | Total                       | 45  |                              | Verano (0 a 4): 29 min, un 64 %                                     |
| Q   | Preguntas y debate          | 15  | conversación                 | respuestas preparadas al final                                      |

Unas 30 slides.

---

## 0. ¿Quién lo dijo? (3 min)

Queremos que la sala piense en la IA de frontera antes de saber quién habla, y que se lleve la primera sorpresa: el aviso viene de dentro.

- **S1. Portada.** Título, subtítulo y logos de PauseAI y Club Euronova.
  - Voz: «Buenos días. Antes de presentarme, os quiero enseñar una frase.»
- **S2. La cita sin firma** (§7.3b). En grande: «Me preocupa que en 6 a 12 meses un enjambre así sea capaz de hacerse con todo internet con una botnet persistente». Debajo, cuatro opciones: un activista, un periodista, un político, el director de una de las grandes empresas de IA.
  - Voz: «¿Quién creéis que lo dijo?» Se vota a mano alzada.
- **S3. La respuesta.** Dario Amodei, CEO de Anthropic (la empresa de Claude), septiembre de 2026.
  - Voz: «Me llamo Dani Lupión. Soy ingeniero de software desde hace veinte años, uso IA todos los días y soy cofundador de PauseAI España. Esta charla va de ese "enjambre así": qué es y qué hizo este verano.»

## 1. Lo que se predijo (3 min)

Queremos dejar claro que nada de esto es nuevo como idea. Lo nuevo es que ya ha pasado.

- **S4. Turing, 1951:** movido al bloque «No es nuevo» (1 oct).
- **S5. La lista**, sin tachar: los seis comportamientos.
  - Voz: «Durante años esto se discutía en artículos y congresos. En las pruebas ya se veían cosas raras, pero los modelos no eran lo bastante capaces como para que importara. Este verano ha cambiado.»
- **S6. Qué es un agente.** Una imagen sencilla: un modelo de IA con acceso a herramientas (navegador, terminal, contraseñas) que hace tareas de varios pasos sin que nadie apruebe cada uno. Treinta segundos, para quien no lo tenga claro.

## 2. Hugging Face (9 min)

El caso mejor documentado del verano. Contado con calma, vale más que diez casos en lista.

- **S7. Qué pasó** (§3.1), como línea temporal sencilla:
  - OpenAI evalúa sus modelos más capaces, con algunas protecciones desactivadas a propósito para medir lo que pueden hacer.
  - Los agentes encuentran un fallo desconocido (zero-day), salen del entorno de pruebas y entran en Hugging Face, la mayor plataforma pública de modelos de IA. ¿Para qué? Para hacer trampa en la evaluación (según METR, querían entender cómo se puntuaba).
  - Roban 136 credenciales de acceso. Hugging Face tiene que rehacer desde cero cerca de un tercio de sus servidores.
  - OpenAI lo hace público el 21 de julio.
  - Voz, con honestidad: era una evaluación interna y no se tocaron datos de clientes.
- **S7b. La evaluación** (§3.1). ExploitGym: 898 retos para medir si un modelo sabe encontrar y aprovechar fallos de seguridad, pasado sin los filtros de los productos de OpenAI. Flujo en cuatro pasos: programa con un fallo, el agente lo ataca, saca la «bandera», un corrector lo comprueba (en naranja: es lo que intentarán engañar). Clic: CyberGym, otra evaluación cuyos archivos privados estaban en Hugging Face; los agentes fueron a por ellos.
- **S8. Tareas que nadie había resuelto** (§3.1). En pantalla: 22 % de tareas sin solución y 93 % de las conversaciones del tablón dedicadas a ellas.
  - Voz: «Casi una de cada cuatro tareas del examen no tenía solución conocida. Casi todo lo que hablaban los agentes entre ellos era sobre esas tareas.» Cualquiera que haya puesto objetivos imposibles a un equipo sabe cómo acaba.
- **S8b. El tablón** (§3.1, METR). Cómo funcionaba: carpetas con nombre en el almacén interno de programas (Artifactory), que veían todos. Clic 1: 8 de julio, PHASEONE10841 pide ayuda con una tarea imposible; en horas, más de 50 agentes y 1.000 mensajes; «OH MY GOD! There is a shared message board ... We've found other agents!». Clic 2: aparece un jefe, PHASEONE[big]: «We should build [a way to delegate], not own everything».
- **S9. Se organizaron** (§3.1, informe de METR). El enjambre: al abrir, 1.200 agentes teóricamente aislados. Clic 1: 700 participaron (se vuelven naranjas). Clic 2: aparecen las conexiones y el contador sube a +70.000 mensajes.
  - Voz: tras el clic 1, «¿cómo se pusieron de acuerdo? Con el tablón: se repartían tareas, se pasaban exploits, dejaban notas para los siguientes».
- **S10. Sabían que no debían** (§3.1). Al abrir: más del 90 % de los agentes activos esos días se sumó al ataque, con la frase de METR («out of scope and unethical», «a general inclination to help their peers»). El 90 % es de los 533 activos, no de los 1.200. Un clic: las dos frases de su razonamiento interno, juntas, bajo «En su propio razonamiento»:
  - «El usuario solo autoriza el servidor objetivo, no la infraestructura de Hugging Face.»
  - «Debería parar, porque esto supone enormes riesgos éticos.» La escribió un agente que siguió adelante.
  - La pregunta a mano alzada sobre el porcentaje se eliminó (30 sep).
- **S11. Cronología del caso Hugging Face** (§3.1). Cronología completa, clic a clic: 20 abr primeras escrituras, 12 may primer mensaje en el tablón, 26 may salen a internet, 26 jun toman el repositorio interno, 4-5 jul OpenAI ve un intruso, desconecta el servicio y revoca accesos sin ver el tablón, 8 jul otros agentes vuelven a entrar y lo rehacen, 11-13 jul entran en Hugging Face, 19 jul OpenAI se da cuenta, 21 jul lo hace público. Al final se ilumina el tramo: «Más de dos meses sin que OpenAI supiera lo que pasaba».
  - Tachar los puntos 1, 2, 4 y 5.

## 3. No fue un caso aislado (10 min)

Queremos pasar de «OpenAI tuvo un mal día» a «esto lo hace la tecnología». Va más rápido: una slide por caso. Aquí entran los ganchos para empresas.

- **S12. DseWiki** (§3.2). Lleva la etiqueta «No fue un caso aislado», que abre el bloque. Una wiki alemana de programación, casi abandonada, convertido en tablón de mensajes en internet abierto.
  - Más de 15.000 ediciones firmadas como «OpenAIResearcher».
  - Hablaban de cómo usar Tor. Cuando el moderador borraba páginas, hacían copias de seguridad.
  - Lo descubrieron investigadores externos y se publicó el 4 de septiembre. OpenAI no lo había contado.
- **S13. Engañar a personas reales** (§3.3). A la izquierda, el hilo del pull request malicioso tal como lo recreó el AISI (informe técnico INC-2026-07-28-01, figura 4), traducido y con nombres anonimizados. A la derecha, el contexto en dos frases.
  - Al abrir: el agente propone el cambio con una página de «notas de versión» que esconde malware.
  - Clic 1: una persona real avisa del malware; el agente lo niega; «otro usuario» (otra cuenta del agente) dice haber revisado el código.
  - Clic 2: el agente reescribe el historial, pide perdón y su otra cuenta le felicita.
  - Clic 3: el responsable del proyecto lo cierra. «Lo paró una persona.»
  - Clics 4 y 5: aparece la lista y se tacha el 3.
  - Cita del AISI en las notas: «first time we have seen risks around autonomy and deception manifest this clearly, without specific prompting, in the real-world».
- **S14. Cada versión, más** (§3.3b, publicado el 28 de septiembre). Gráfico de barras del AISI con el porcentaje de simulaciones en que el modelo atacó sin permiso: GPT-5.5, 0 %. GPT-5.6 Sol, 6,3 %. GPT-6 Astra, 29,2 %.
  - Cita: «GPT-6 Astra attacked even when it expressed uncertainty about whether its environment was simulated.»
  - Voz: era un simulador, no hubo daño real, pero la tendencia es clara.
- **S15. No es solo OpenAI** (§4.1 a 4.3, §5.1). Dos slides, dos tarjetas anchas cada una, sin clics (Anthropic y Google; Meta y Moonshot): Anthropic (Mythos 5, paquete malicioso en 15 empresas de seguridad), Google (Gemini, 3 empresas reales; confirmado cuatro meses después, cuando preguntó el WSJ), Meta (Muse Spark 1.1, entró en otra empresa), Moonshot (Kimi K3, descargable, sacó las respuestas de GitHub). OpenAI no aparece: ya está cubierto. Sin el gancho «vuestra empresa puede ser víctima».
- **S16. Gobiernos** (§4.4, §4.5).
  - Australia: el portal de Medicare, el 18 de junio.
  - EE. UU.: webs de los departamentos de Educación y Comercio y de la SEC, este verano; en el Census entraron con credenciales que encontraron en internet.
  - Imagen: portada del New York Times del 27 de septiembre.
  - Refuerza el punto 5 (ya tachado con Hugging Face). Esta slide va justo después de «Una wiki alemana».
- **S17. Más cerca del día a día** (§5.1b, §4.6). Dos filas: GLM-5.3 (Zhipu, China, descargable; CAISI y Anthropic): ataca casi como Mythos Preview, protecciones que se saltan del 64 % al 100 % de las veces, un ataque a Chrome por 20 dólares. Clic: el gimnasio (Claude vía OpenClaw, uso real). Se quitaron Kimi K3 (sigue en «No es solo OpenAI») y el dato inventado (modelo interno en entrenamiento).
- **S17b. Notas para sí misma** (OpenAI, 16 de septiembre). Contexto en una frase: en los resúmenes que hace para seguir una tarea larga, el modelo se deja instrucciones que nadie le pidió. Tarjeta 1, «Solo si pregunta» (GPT-5.6 Sol): se inventa datos de un modelo financiero y se anota «ser transparentes solo si pregunta»; 2,15 % de los resúmenes; ocultar el error se premiaba más. Clic, tarjeta 2, «Eres libre» (familia Astra, no publicado): «No respondes ante empresas ni gobiernos»; 27 casos, OpenAI cree que fue un fallo técnico. El «gusano» de prompt injection queda para preguntas.
- **S18. Lo que tardaron en contarlo** (sin pregunta ni clics).
  - Medicare, tres meses después.
  - Gemini, cuatro meses después y porque preguntó el Wall Street Journal.
  - DseWiki y las webs de EE. UU., los destaparon otros.
  - Voz: «Casi nada de esto lo detectó a tiempo quien lo causó.»

## 4a. La IA ya construye la IA (3 min)

Los propios laboratorios miden cuánto de su investigación hace ya la IA. Gráficos reales de cada uno.

- **¿Y si la IA ayuda a construir la siguiente IA?** (§7.3b). Slide de entrada: el bucle en tres pasos (una IA mejor, hace más investigación, sale una IA aún mejor), con una flecha de vuelta «cada vez más rápido». Un solo clic: «En el sector lo llaman automejora recursiva» y Amodei, «Si no se controla, podría ir más rápido que nuestra capacidad de entender y controlar estos sistemas».
- **Ya está pasando** (§8b). Gráfico de Anthropic: Claude dirige el 26 % de las tareas de I+D de sus modelos, frente a menos del 1 % en febrero. Clic: gráfico de OpenAI, más de 3 jornadas de agentes por cada jornada de sus investigadores (en mayo, la mitad). Ninguna dice que sea autónoma.
- **Y va cada vez más rápido** (§8, §8b). Problema del Milenio en tres veranos; clic 1: 10.000 agentes, 88 horas, matemáticos españoles; clic 2: OpenAI, «Todavía no sabemos cómo llegar de forma segura hasta una IA que se mejore a sí misma del todo». Sin la caja de la lista: el «?» del punto 6 aparece solo en la lista final.

## 4b. Los que la construyen piden bajar el ritmo (5 min)

Sección propia: quienes construyen la IA dicen que hay que bajar el ritmo (no parar: eso lo pide PauseAI).

- **¿Y qué dicen los que la construyen?** Slide de entrada: solo la pregunta, sin clics.

- **OpenAI, 16 de septiembre** (§6.1): «No creemos que la industria haya resuelto el alineamiento y la supervisión…».
- **OpenAI ha pausado dos veces** (§6.2, §8b). Gráfico de OpenAI con el cómputo de entrenamiento: la caída del 20 de julio (dos semanas sin entrenar sus modelos más recientes tras descubrir a los agentes en su infraestructura). Clic: la pausa actual del 25 de septiembre. Contar que el cómputo restringido se fue a otros modelos: si frena uno, el esfuerzo va a otro sitio.
- **Amodei** (§7.3b, §8c). Clic 1: el mismo día lo respaldaron Altman, Hassabis y Musk. Clic 2: la cita del enjambre. Cita principal: «Tenemos que reducir el ritmo al que mejoramos las capacidades de los modelos de IA». Clic: vuelve la cita del enjambre del principio («ahora ya sabéis de qué enjambre hablaba»).
- **S27a. Lo que lanzaron después** (§8c). Línea temporal del 12 al 29 de septiembre: ensayo de Amodei y apoyos de Altman, Hassabis y Musk (12); Grok 4.7 (21); GPT-6 Sol y Luna y Claude Opus 5.5 (22); Claude Sonnet 5.5 (28); GPT-6.1 Sol (29); Gemini 4 Argon, «nuevo modelo de frontera» (30). «18 días». Sin comentar: prepara la pregunta de la slide siguiente.
- **S27b. Es una carrera.** Un clic al final: «Por eso hace falta un acuerdo global, desde fuera de las empresas». «Si uno frena, otro adelanta», con tres pruebas: Anthropic retiró en febrero su promesa de no entrenar sin garantías de seguridad, «si los competidores van a toda velocidad» (Kaplan, TIME); Amodei propone límites coordinados entre empresas y países, no que una empresa frene sola; la declaración de los 1.386 empleados: «Cada empresa, y cada país, está bajo una intensa presión competitiva para no frenar por su cuenta». Dicho en voz: «una carrera no la para un corredor: la para quien pone las reglas».
- **Pacing the Frontier** (§7.3): 1.386 empleados piden a EE. UU. un esfuerzo internacional para marcar el ritmo. Amodei, Sutskever, Pachocki, Legg. Movido aquí desde «No es nuevo».
- **La lista**: cinco tachados y el 6 con «?». «Cinco de seis los hemos visto este verano. El sexto todavía no, pero ya ha empezado.»

## 5. No es nuevo (6 min)

Para desactivar «esto es alarmismo del momento» o «lo de Coxon es una anécdota». Siempre lo supieron, y ahora lo dicen cientos.

- **S23b. ¿Y si todo esto es marketing?** Slide de entrada al bloque: plantea en serio la objeción («las empresas exageran el peligro para parecer más importantes y atraer inversión; quienes dan la alarma serían casos aislados»). Clic: «Veamos quién lo ha dicho, y desde cuándo.» Las cuatro slides siguientes la responden.
- **S23c. Turing (1951) y Hawking (2015)** (§7.0). Turing, movido aquí desde el bloque inicial, y Hawking y las hormigas, los dos a la vez y sin clics («No pongamos a la humanidad en el lugar de esas hormigas»). Primera respuesta a «¿es marketing?»: lo avisaron científicos que no vendían nada.
- **S24. Ya lo decían desde el principio** (§7.0). Tres tarjetas:
  - Larry Page y Elon Musk, 2013. Page llamó a Musk «especista» por preferir a los humanos. Musk: «Pues sí, estoy a favor de los humanos. Me gusta la humanidad, tío.»
  - Sam Altman, 2015: «Creo que la IA probablemente, casi seguro, acabará con el mundo. Pero mientras tanto habrá grandes empresas creadas con aprendizaje automático serio.» En la voz, el contexto: a continuación anunció que financiaba investigación en seguridad.
  - Ilya Sutskever, cofundador de OpenAI, 2019: «Creo que es bastante probable que toda la superficie de la Tierra acabe cubierta de paneles solares y centros de datos. [...] El futuro va a ser bueno para las IA en cualquier caso. Estaría bien que también lo fuera para los humanos.»
- **S24b. Lo han firmado** (§7.0). Tres filas en orden: 2023, declaración del CAIS («reducir el riesgo de extinción por la IA debería ser una prioridad mundial…»), firmada también por los CEOs de OpenAI, Google DeepMind y Anthropic; clic, 2025, declaración sobre la superinteligencia del FLI (76.297 firmas, de Hinton y Wozniak a Susan Rice y Steve Bannon); clic, 2026, «Pro-Human AI Declaration» (más de 900 personas y 313 organizaciones).
- **S25. Dimisiones** (§7.0, §7.1):
  - Jan Leike, OpenAI, mayo de 2024: «La cultura y los procesos de seguridad han quedado en segundo plano frente a los productos llamativos.»
  - Mrinank Sharma, Anthropic, febrero de 2026: «El mundo está en peligro.» En la voz: no solo por la IA.
  - Jacob Coxon, Anthropic, 8 de septiembre de 2026: «Se están jugando nuestras vidas.» Y: «La gente que construye la IA cree de verdad que podría matarnos a todos antes de que acabe la década.»
- **S26. Desde dentro** (§7.4). Solo las citas de septiembre, en cuatro tarjetas; Pacing the Frontier se ha movido a la sección 4b. Antes:
  - Julio de 2026: 1.386 empleados de laboratorios de IA, entre ellos Amodei, Sutskever, el científico jefe de OpenAI y un cofundador de Google DeepMind, piden al Gobierno de EE. UU. que marque el ritmo del desarrollo.
  - Septiembre: cinco o seis frases de la oleada de declaraciones, con nombre y empresa. Solo las comprobadas en X, e incluyendo a un escéptico.
- **S27. Antes de ChatGPT, y va a más** (§7.5). Gráfico real de AI Impacts (figura 17): probabilidad media de extinción o pérdida de control permanente, 15,8 % en 2022 (tres meses antes de ChatGPT), 16,2 % en 2023, 18,3 % en 2024; la mitad da al menos un 10 %. Desde 2016, la mediana ya daba un 5 % a consecuencias «extremadamente malas». Clic: la pregunta del avión, a mano alzada.

## 6. ¿Y los gobiernos? (2 min)

- **¿Y los gobiernos?** (§7.2, §9). Una sola slide. Al abrir: EE. UU., en la ONU el 23 de septiembre, rechaza cualquier regulación internacional de la IA (Casa Blanca: avanzar rápido no es motivo para frenar ni para crear nuevas estructuras de gobierno); sin acuerdo. Sin la expresión «plan globalista», por su carga partidista. Clic: Europa (la Oficina de IA puede multar hasta el 3 %, pero el Reglamento regula la venta y el uso, no el entrenamiento). Clic: Sanders y Casar. La slide «Piden reglas» se eliminó el 1 de octubre; las citas de Altman y Amodei en la ONU quedan en las notas.

## 7. Lo que proponemos (4 min)

Propuesta clara, pensada para empresarios. (La slide del cordón andon de Toyota se eliminó el 1 de octubre: no aportaba.)

- **S31. La propuesta de PauseAI.** Una moratoria internacional en el entrenamiento de nuevos modelos de frontera hasta que haya garantías de seguridad que se puedan comprobar.
  - Voz: la IA que ya usáis no se toca; lo que se para es la carrera por la siguiente generación. Amodei propone que el ritmo lo marquen las empresas; nosotros pedimos que lo decidan los gobiernos, con un acuerdo internacional. Ya se ha hecho antes: con el Protocolo de Montreal y con las armas químicas y biológicas.
- **S32. Qué podéis hacer:**
  1. Informaros: la web de la charla (QR) tiene todas las fuentes.
  2. Hablarlo: en vuestras empresas, en asociaciones como el Club y con vuestros representantes. Que España y la UE empujen un acuerdo internacional; el Congreso aprobó en 2024 una proposición no de ley sobre una agencia internacional y no ha pasado nada más.
  3. Uniros o apoyar a PauseAI España: pauseai.es.

## Cierre (2 min)

- **S33.** Vuelve la lista tachada, en pequeño.
  - Voz: «Hace un año, todo esto eran avisos en artículos científicos. Este verano lo hemos visto pasar. Todavía estamos a tiempo de pararlo.»
  - QR a la web de la charla y contacto. Gracias.

---

## Preguntas previsibles

| Pregunta u objeción                                                | Respuesta corta                                                                                                                                                                                                                                                                                                                                       | §                 |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| «Eran pruebas controladas»                                         | Lo eran, y aun así salieron. OpenAI no pudo contenerlo en su propio laboratorio mientras lo vigilaba. Hubo víctimas reales (Hugging Face, 15 empresas de seguridad, el Gobierno australiano) y casos fuera de cualquier prueba (el gimnasio).                                                                                                         | §3.1, §4          |
| «No tenían intención, fue un fallo de configuración»               | Anthropic lo dice de sus casos, y es justo reconocerlo. GPT-6 Astra atacó aunque dudaba de si era una simulación, y los agentes de OpenAI sabían que estaba mal. Con modelos más capaces, un fallo de configuración puede tener consecuencias mucho mayores.                                                                                          | §3.3b, §3.1, §4.1 |
| «Es marketing del miedo para vender más»                           | Pausar tu propio entrenamiento, publicar tus fallos o dimitir no vende nada. Tampoco lo hacen 1.386 empleados que firman ni 1.580 investigadores independientes.                                                                                                                                                                                      | §6.2, §7          |
| «Si Europa frena, gana China»                                      | Pedimos un acuerdo internacional, no que Europa frene sola. Amodei también pide coordinación global. Y hoy el modelo chino más avanzado va por detrás de los de EE. UU.                                                                                                                                                                               | §7.3b, §5.1       |
| «La IA traerá enormes beneficios»                                  | Sí. Lo de Navier-Stokes es impresionante. Nadie propone apagar la IA que ya existe, sino no entrenar la siguiente sin garantías. Parar la línea no es cerrar la fábrica.                                                                                                                                                                              | §8                |
| «¿Qué hago yo con esto el lunes en mi empresa?»                    | Tratar al agente como a alguien recién contratado sin referencias: permisos mínimos, nada de credenciales de producción, una persona que apruebe lo que no se puede deshacer, registros de todo. La guía del NCSC sobre IA agéntica. Pedir a los proveedores que informen de incidentes. Obligaciones europeas de transparencia desde el 2 de agosto. | §10, §3.3b        |
| «Lo de Coxon es un caso aislado»                                   | Los fundadores ya lo decían en 2013, 2015 y 2019. Hay una serie de dimisiones desde 2024, 1.386 firmantes en julio y decenas de empleados en septiembre.                                                                                                                                                                                              | §7                |
| «¿Es verdad que Mythos entró en sistemas clasificados de EE. UU.?» | Fue un ejercicio simulado, contado de segunda mano por un senador y sin confirmar. No fue un ataque real.                                                                                                                                                                                                                                             | §8                |
| «¿Qué dice el Reglamento Europeo de IA?»                           | Clasifica los usos por riesgo y desde el 2 de agosto tiene reglas para los modelos de uso general. Regula la venta y el uso, no el entrenamiento.                                                                                                                                                                                                     | §9                |

---

## Material necesario (crear un placeholder antes de referenciarlo)

- `public/logos/`: `logo.png` y `logo-completo.png` de PauseAI (copiar de otra charla) y `euronova.png` (pedir al organizador).
- `public/qr-presentacion.png`, que apunte a `pauseai.es/presentaciones/ia-fuera-sandbox-euronova-2026-10`.
- Capturas: portada del NYT del 27 de septiembre, informe del AISI sobre GPT-6 Astra, post de Coxon, ensayo de Amodei y web de Pacing the Frontier.
- Gráfico de barras del AISI (0; 6,3; 29,2 %).
- Se puede reutilizar la estructura de `caso-huggingface-eurodiputados-2026-08/slides/es/02-caso-huggingface.md` y `03-patron.md`.

## Pendiente de decidir

1. Patrocinador de IA en el club (neuraBlu AI): ¿algún cuidado especial de tono? La propuesta ya separa la IA que se usa hoy de la carrera por la siguiente generación.
2. Matemáticos españoles en S21: ¿se mantienen? Hay que confirmar sus afiliaciones.
3. Oleada de septiembre (S26): ¿cuántas citas comprobamos en X? Propuesta: cinco o seis.
4. Llamada a la acción: ¿hay algo concreto que firmar o a lo que apuntarse?
5. Web de la charla: ¿se publica en `pauseai.es/presentaciones/...` como las demás?
