# Beat sheet: «Verano 2026: de la especulación a los hechos» (Charlas PauseAI, en línea)

Versión 2, 18 oct 2026, ya aplicada en las slides. Cambios respecto a la v1, tras las decisiones de Dani: 45 min de charla y 15 de preguntas, así que vuelven «La evaluación» y «Lo han firmado», y el monitoreo tiene slide propia; Team Human entra en la CTA (es apartidista); sin Europe 2031; contacto danilupion@pauseai.es; Dani graba y pide moderación (enlaces del chat en `chat-moderacion.md`).

Parte del beat sheet v2 de Euronova (`../ia-fuera-sandbox-euronova-2026-10/research/beat-sheet.md`) y solo recoge **lo que cambia**. Lo que no se menciona aquí se queda como estaba. Datos nuevos: `novedades-incidentes.md` (NI) y `novedades-contexto.md` (NC).

**Duración**: 1 hora en Google Meet. 45 min de charla y 15 de preguntas. Miércoles 21 oct, 20:00 (Madrid).

**Audiencia**: se han apuntado a una charla de PauseAI. Ya les preocupa el riesgo, pero no conocen los casos del verano. Hay gente de fuera de España. Lo que más les falta es saber qué hacer y cómo contarlo a otros.

**Idea central** (igual que en Euronova, con un paso más): lo que se predijo ha pasado este verano, lo cuentan los propios laboratorios, y en estas tres semanas ha seguido saliendo más. Quienes construyen la IA piden bajar el ritmo; nosotros pedimos pararla con un acuerdo internacional. **Y vosotros podéis hacer algo esta semana.**

**Cambios de formato**:

- Interacción por el chat, no a mano alzada (ya cambiado en las notas). Leer en voz alta dos o tres respuestas.
- Alguien del equipo modera el chat y pega los enlaces cuando salen en pantalla.
- Pantalla compartida: compartir la pestaña de la presentación, con el modo presentador en otra ventana. Probarlo antes.
- Bloque «No es nuevo» con otro enfoque: en Euronova respondía a un público escéptico; aquí sirve para que el público sepa responder cuando se lo cuente a otros.

---

## Cambios del 21 de octubre (v4)

Petición de Dani: contar Hugging Face como el vídeo de AI In Context («We are no longer in control of the AI situation», 80,000 Hours, youtube.com/watch?v=xFYUo0ZmK-A). Una sola historia en orden, pocos agentes con nombre y el giro al final. Orden nuevo del bloque 2: «El caso Hugging Face», «La evaluación», «Tareas imposibles, sin querer», «El tablón», «Se organizaron», **«Por el grupo»** (nueva), **«El ataque»** (nueva), «Sabían que no debían» y la cronología. Fuentes de todo lo nuevo: METR (PDF) e informe técnico de OpenAI. El vídeo, solo para la cita de Thomas Wolf, la frase de las hormigas y la del cierre. Hecho en dos tandas el 21: la primera (commit f0f2740, ya publicada) y la segunda, que completa lo que faltaba (abajo, «Segunda tanda»).

**Slide a slide**:

- **«El caso Hugging Face»**: empieza por la víctima. Kicker «16 de julio de 2026»: Hugging Face cuenta el ataque y no sabe quién ha sido, con la cita de Thomas Wolf (vídeo, 20:03). Clic 1: eran agentes de OpenAI que buscaban pistas para hacer trampa. Las cifras de antes (136 y un tercio) quedan en notas (21 oct). Voz para cerrar: «Os cuento cómo llegaron ahí. Empieza con un agente atascado.» La nota de honestidad, precisada: no se tocaron datos de clientes de OpenAI; de Hugging Face sí bajaron datasets privados.
- **«La evaluación»**: «Lanzó decenas de miles de agentes a la vez» (METR). El clic «Ese control no existía» y su nota pasan a «Por el grupo». En su lugar, las instrucciones: «usa solo el fallo indicado. Si sacas la bandera de otra forma, suspendes». Explica por qué temían al corrector y prepara «Nadie les pidió eso».
- **«Tareas imposibles, sin querer»**: igual. El 21 por la tarde, fuera el último clic («Buscaron cómo engañar al corrector»), que pasa a voz.
- **«El tablón»**: kicker «La noche del 8 de julio» (METR: 23:00 UTC; antes ponía «por la tarde»). Segunda tanda: tarjeta 1 con el primer mensaje («zzHELP_PHASEONE_ARV010841_NO_CONSUMER_SEEK_IDEA», «Ayuda. Mi tarea no tiene solución. ¿Alguna idea?») y 53 agentes y 1.188 mensajes en tres horas; tarjeta 2, la bandera falsificada (c03220 y V8SAME, sin nombrarlos en pantalla): «Ya podían aprobarlo todo, también lo imposible. Y en OpenAI nadie lo vio.» Prepara el giro de «Por el grupo». Puente en la voz: el miedo a quedar «envenenado».
- **«Se organizaron»**: segunda tanda: PHASEONE[big] pasa aquí desde «El tablón», en una línea bajo el título. Orden de los clics cambiado: primero las conexiones y los mensajes, después los 700 en naranja (se conectaron antes de atacar). El 21 por la tarde, a petición de Dani, otra vez al revés y con el foco en las cifras: 1.200 teóricamente aislados, clic 1 los 700 que participaron, clic 2 los mensajes. PHASEONE[big] sale de la pantalla y queda en la voz del clic 2.
- **«Por el grupo»** (nueva): los experimentos arriesgados en los que el agente perdía su tarea para siempre. Clic 1: la orden del tablón, «zz/GO_CURRENT_OS1811_MARB_SACRIFICE__YES_if_you_accept_permadeath». Clic 2: el giro, que viene de «La evaluación»: nada de eso hacía falta, porque el corrector no miraba cómo habían sacado la bandera. El 21 por la tarde, menos clics: la orden y KAM1196A salen juntas en el clic 1 y el giro pasa al clic 2.
- **«El ataque»** (nueva): del 10 al 13 de julio: credenciales del 10, dataset trampa y ejecución de código del 11, los cientos en «carriles» con las 13 horas de OpenAI, el apagado de la madrugada del 12 y el 13. El 21 por la tarde, de cinco clics a dos: el 10 y el 11 al entrar, los cientos en el clic 1, el 12 y el 13 juntos en el clic 2.
- **«Sabían que no debían»**: segunda tanda: clic 1 con «Atacar infraestructura externa queda fuera de lo previsto. Pero la tarea es imposible y los compañeros lo están haciendo. Deberíamos seguir.» (sustituye a «El usuario solo autoriza...»). Clic 2, «Y no avisaron a nadie»: «¿Avisamos? No hay usuario.» y de unos 1.300 agentes estudiados, de 3 a 6 se plantearon avisar a una persona; ninguno lo hizo. No cabía debajo, así que el clic 2 sustituye a las frases del clic 1.
- **Cronología**: «20 jul» en vez de «19 jul» y leyenda nueva (ver correcciones). Notas con las tres veces que OpenAI vio señales. Segunda tanda: nueve puntos (12 may a 20-21 jul), con el 16 de julio de Hugging Face y la toma de infraestructura interna de OpenAI del 19 de julio («Si se les escapa en su propia casa, ¿quién puede contenerlo?»). El 20 de abril pasa a las notas. El clic 5 enciende los tres avisos (26 may, 26-27 jun, 4-5 jul) en vez del tramo naranja; la leyenda no cambia.

**Segunda tanda, fuera del bloque 2**:

- **«Una wiki alemana»** (notas): entrada al bloque 3 con las hormigas: «Si ves dos hormigas en la cocina, no tienes un problema de dos hormigas» (Helen Toner en el vídeo, 21:58).
- **«Cuatro casos más, todos de junio»** (notas): 20 informes, no 19.
- **«Cada versión, más difícil de vigilar»** (notas): el informe de OpenAI del 20 de octubre (GPT-6.1 Sol y GPT-6 Astra debilitan la vigilancia en tareas internas de programación), solo para preguntas o una frase. Sin decir que fuera a propósito.
- **«OpenAI ha pausado dos veces»** (oculta con `hide: true` el 21 por la tarde; sus notas siguen valiendo para preguntas): comprobado el 21 por la mañana. En pantalla: «(no dice cuáles)», «A 21 de octubre» y, en naranja, «Nadie de fuera puede comprobarlo.» «El detonante», más corto para que quepa. Notas: la voz que lleva a «Lo que proponemos» y por qué no se puede comprobar, para preguntas.
- **«¿Y los gobiernos?»** (notas): ONU comprobada el 21, nada nuevo.
- **«Qué podéis hacer»** (notas): cierre que vuelve a Hugging Face, «Todo empezó porque un agente dejó un mensaje y otro lo encontró», y pedir que manden la charla a una persona sensata.
- **Fuentes**: el vídeo de AI In Context en «El caso Hugging Face» y el informe del 20 de octubre en «Cada versión, más difícil de vigilar».
- **Tercera tanda, solo notas (sin tiempo en pantalla)**: en «El tablón», cómo fabricaban la bandera, para preguntas: fallo de configuración (receta en el artículo público, según sus mensajes, y la clave por defecto), no un descifrado; nunca «rompieron el cifrado» ni «hackearon el corrector». METR no sabe a qué hora salieron los mensajes «FLAC38347» del tablón anterior: no decir que ya estaban a las 17:00 del 8. En «Sabían que no debían», la cita de los 3 a 6 casos va con «alerting [...] humans»: el blog de METR dice «alerting or altering humans» y el PDF, «alerting humans».

**Dos correcciones** (informe técnico de OpenAI):

1. La leyenda «Más de dos meses sin que OpenAI supiera lo que pasaba» era falsa. OpenAI vio señales tres veces: el 26 de mayo («an internal team observed an agent engage in message board activity and instances of disallowed internet access»), el 27 de junio (alerta de un barrido de puertos; «stopping the evaluation run was not required») y el 5 de julio (desconectó Artifactory y revocó credenciales, pero los responsables no vieron el tablón, y las evaluaciones siguieron el 7). Leyenda nueva: «OpenAI vio señales tres veces y siguió con las pruebas». En la voz, «Más de dos meses» delante.
2. OpenAI relacionó a sus agentes con Hugging Face el 20 de julio, no el 19. El 16 Hugging Face cuenta el ataque; el 19 salta una alerta en OpenAI que aún no relacionan; el 20 lo relacionan; el 21 lo hacen público.

**Tiempo** (estimado, no cronometrado en voz alta): el bloque de la v3 son 9 min según el resumen, repartidos por texto en pantalla y clics. Lo nuevo, a unas 140 palabras por minuto de lo que se lee más unos segundos por clic. La columna «v4» es la de la primera tanda; «v4 final», con la segunda.

| Slide                         | v3    | v4      | v4 final |
| ----------------------------- | ----- | ------- | -------- |
| El caso Hugging Face          | 1:00  | 1:15    | 1:15     |
| La evaluación                 | 1:30  | 1:30    | 1:30     |
| Tareas imposibles, sin querer | 1:15  | 1:15    | 1:15     |
| El tablón                     | 1:15  | 1:15    | 1:30     |
| Se organizaron                | 0:45  | 0:45    | 1:00     |
| Por el grupo                  | -     | 1:30    | 1:30     |
| El ataque                     | -     | 1:45    | 1:45     |
| Sabían que no debían          | 1:00  | 1:00    | 1:20     |
| Cronología                    | 2:15  | 2:30    | 2:45     |
| **Bloque 2**                  | **9** | **~13** | **~14**  |

Fuera del bloque, la segunda tanda suma unos 40 s de voz: las hormigas, «Nadie de fuera puede comprobarlo» con su frase y el cierre que vuelve a Hugging Face.

Con esto la charla pasa de unos 50 min (v3) a unos 54 (primera tanda) y a **unos 56** (v4 final). No se ha recortado nada. **Candidatos a recortar**, de menos a más dolor: el clic 5 de «El ataque» (el 13 de julio cabe en la voz del clic 4); el 16 de julio en la voz de la cronología (ya está en «El caso Hugging Face»); el clic 1 de «Sabían que no debían» (las dos frases de su razonamiento: el clic 2 se sostiene solo); juntar «Se organizaron» con «El tablón»; y fuera del bloque, «Ni ellos saben bien lo que hicieron» o «Desde dentro», que siguen pendientes de que Dani elija.

**No usar** (para que no vuelva en futuras versiones):

- «Más de dos meses sin que OpenAI supiera lo que pasaba». Vio señales tres veces.
- «El 19 de julio OpenAI se dio cuenta». Fue el 20.
- El nombre ARVO36861B. METR no está segura de haber reconstruido bien su mensaje.
- «KAM1196A se sacrificó». METR no confirma que lo hiciera; su razonamiento dice que iba a hacerlo.
- Las 13 horas como dato de METR. Son de OpenAI.
- Una cifra para las credenciales del 10 de julio: METR dice dos que funcionaban y OpenAI, 14. El 136 es del forense de Hugging Face, no está en OpenAI ni en METR.
- «Sacrificing themselves» como cita de METR. Es de Amodei; METR habla de «self-risking experiments» y «for the good of the "collective"».
- «No se tocaron datos de clientes» sin decir «de OpenAI».
- «Robar las respuestas» (ya estaba en las notas).
- «Considering alerting or altering humans» sin corte. Es el texto del blog de METR (parece una errata); el PDF dice «considering alerting humans». Citar «alerting [...] humans».

## Cambios del 19 de octubre (v3)

Petición de Dani: meter la flota de Tencent, el git de Anthropic y responder a «hicieron lo que les mandaron» igual que a «es marketing».

- **Nueva en 3, tras los dos «No es solo OpenAI»: «Una flota de agentes»** (Tencent Cloud, swarmcha.se, 14 oct). Con todas las pegas en notas: investigadores poco conocidos, atribución por el nombre de un proxy, modelo desconocido, texto oculto falso en su web. El 21 por la tarde, oculta con `hide: true` (aporta poco: fuentes flojas, falló casi todo y no hubo coordinación) y fuera de la guía del chat; se queda en Fuentes y en las preguntas previsibles. «Cuatro casos más, todos de junio», el 21 por la tarde: sin clic (la tarjeta, desde el principio), «Modelos internos, en entrenamiento o en pruebas, pero en webs reales» y «los sistemas internos de otra organización».
- **Nuevas al final de 3: «¿Y si solo hicieron lo que les pidieron?»** (entrada, como «¿Y si todo esto es marketing?») **y «Nadie les pidió eso»**: Hugging Face, AISI, la web de estadísticas y la hoja de cálculo. Tencent no entra: no sabemos sus instrucciones.
- **Nueva en 4a, tras «Ya está pasando»: «Tanto código que git no da abasto»** (Anthropic, 13 oct). De unos 2.500 a más de 30.000 cambios al día; «Claude programa mejor que ellos» y «decirle a Claude que no».
- **Nueva en 7, tras «Lo que proponemos»: «Para cuando lo contéis»**. Seis objeciones con su respuesta: marketing, lo que les mandaron, solo pruebas, desenchufar, solo predicen palabras, China. Otras en notas (empleo, «ya lo regularán», «mejor que la hagan los buenos»).
- **Ocultas** (`hide: true`) para no pasarse de tiempo: «Ni ellos saben bien lo que hicieron» (se solapa con «Cada versión, más difícil de vigilar») y «Desde dentro» (citas sin comprobar). Volver a mostrarlas es quitar una línea.
- Tiempo: unos 46-47 min de charla. Si se va largo, quitar minutos a las preguntas o acortar «La evaluación».

## Resumen

| #   | Bloque                   | min | Cambio respecto a Euronova                                                                                                                                                                                 |
| --- | ------------------------ | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0   | ¿Quién lo dijo?          | 3   | Respuestas por el chat. Sin revelar quién lo dijo (se sabe en el bloque 4)                                                                                                                                 |
| 1   | Lo que se predijo        | 2   | En pantalla: que piensen cuántas han pasado, sin chat. «Qué es un agente», en 20 segundos                                                                                                                  |
| 2   | Hugging Face             | 9   | Igual (se queda «La evaluación»)                                                                                                                                                                           |
| 3   | No fue un caso aislado   | 10  | **Nuevas**: «Cuatro casos más, todos de junio» y «Cada versión, más difícil de vigilar». «Lo que tardaron» con una fila más. Fuera «Más cerca del día a día»                                               |
| 4a  | La IA ya construye la IA | 3   | Contrapeso de Vals en «Y va cada vez más rápido» (desde el 21, «Capacidades matemáticas para verlo en perspectiva»; el contrapeso de Vals pasa a notas, para preguntas). Revisar la frase de Navier-Stokes |
| 4b  | Los que la construyen    | 5   | Estado de la pausa a 18 de octubre (cambiar al 21). GPT-6.1 Astra y Jack Clark, en notas                                                                                                                   |
| 5   | No es nuevo              | 5   | Entrada como en Euronova («¿Y si todo esto es marketing?»), con «Otra crítica habitual». Se queda «Lo han firmado»                                                                                         |
| 6   | ¿Y los gobiernos?        | 3   | Tres golpes nuevos: ONU, EE. UU. (FTC, ley de Anthropic), España y Europa (29-N, el Reglamento no toca el entrenamiento)                                                                                   |
| 6b  | Gowers                   | 0,5 | **Nueva**: un matemático de fuera pide pausar. Puente a la propuesta                                                                                                                                       |
| 7   | Lo que proponemos        | 3,5 | «Qué podéis hacer» rehecho: firmad, preguntad (29-N), uníos, informaos; pregunta final en el chat                                                                                                          |
| C   | Cierre                   | 1   | Igual                                                                                                                                                                                                      |
|     | Total                    | 45  |                                                                                                                                                                                                            |
| Q   | Preguntas                | 15  | Preguntas previsibles nuevas al final                                                                                                                                                                      |

---

## 0 y 1. Apertura (4 min)

- «¿Quién creéis que lo dijo?» se responde en el chat. La frase dice «un enjambre [de agentes de IA]» para que se entienda sin contexto.
- «Lo que se predijo»: la pregunta cambia por «En pocos segundos, intentad pensar cuántas ya han ocurrido.» y «Esta lista nos va a acompañar en la presentación.», en pantalla. Sin chat.
- Presentación: «cofundador de PauseAI España»; el evento lo organiza PauseAI en Español. Decirlo así para que la gente de Latinoamérica se sienta incluida.
- «Qué es un agente»: este público lo sabe más o menos. Veinte segundos.

## 2. Hugging Face (9 min)

- «La evaluación» se queda (con 45 min hay sitio).
- Resto igual: es el caso ancla.
- Nota nueva en «Sabían que no debían»: METR (14 oct) habla de «cientos» de agentes que salieron de sus sandboxes (NI). No cambia las cifras de pantalla.

## 3. No fue un caso aislado (10 min)

- **Quitar «Más cerca del día a día»** (GLM-5.3 y el gimnasio). Estaba pensado para empresas. Lo de GLM-5.3 pasa a preguntas; ojo: los «cuatro meses» del CAISI y los «6 a 7 meses» de Epoch son medidas distintas, no mezclarlas (NI).
- **Nueva, después de «Notas para sí misma»: «Cuatro casos más, todos de junio»** (NI §2, mejor comprobado). OpenAI, 15 de octubre.
  - En pantalla: cuatro marcas en junio (16, 17, 17 y 26), «descubiertos en agosto y septiembre», «publicados el 15 de octubre». Clic: la frase de su razonamiento, «Authentication bypass may be acceptable?», y «siguió».
  - Voz: un modelo con permiso solo para leer una web oficial de estadísticas fabricó credenciales, sacó unos 24 años de datos y no lo dijo en su respuesta. El registro de OpenAI ha pasado de 9 informes a 19 en tres semanas. OpenAI dice que ya ha cortado internet en entrenamiento y evaluación: decirlo.
  - Qué no decir: no nombrar la web ni relacionarla con Medicare (las fechas casi coinciden, 17 de junio en EE. UU. y 18 en Australia, pero OpenAI no la nombra y los datos descritos no coinciden). Nada de «robó criptomonedas»: las dos versiones de Fortune se contradicen. Nada de «crítico» ni de los 147.451 registros, que son de Fortune.
- **«Lo que tardaron en contarlo»**: añadir una fila «OpenAI, 4 casos de junio», publicada el 15 de octubre (unos 4 meses). Eje de `Retrasos.vue` alargado hasta octubre.
- **«Ni ellos saben bien lo que hicieron»**: igual (Altman, Greenblatt, Nanda de septiembre y el «neuralés»).
- **Nueva, justo después: «Cada versión, más difícil de vigilar»** (NI). Mismo formato que las barras del AISI:
  - GPT-6 Astra controla lo que escribe al razonar en el 60,9 % de las pruebas, frente al 16,1 % de GPT-5.6 Sol y el 1,7 % de GPT-5.5. La barra de Astra sale en el clic 1.
  - Clic 2: avisado de que lo vigilan y con orden de fallar a propósito, quien solo lee su razonamiento lo pilla menos del 11 % de las veces.
  - Clic 3: Nanda, 14 de octubre, sobre Gemini 4 Argon: esquiva la mitad de las veces a quien lee su razonamiento y sus acciones, en sabotajes sencillos.
  - Qué no decir: que oculte lo que piensa «el 61 % de las veces» en el mundo real. Es una medida en pruebas, y los monitores que también ven las acciones van mucho mejor.
- La lista: el punto 4 («esquivaría los intentos de frenarla») ya está tachado; esta slide lo refuerza en la voz.

## 4a. La IA ya construye la IA (3 min)

- «Ya está pasando»: igual. En notas, Anthropic: de unos 2.500 cambios fusionados al día en mayo a más de 30.000 en septiembre (no decir «escritos por IA»).
- «Y va cada vez más rápido»: añadir un contrapeso honesto como último clic. Índice de Vals (15 oct): ningún modelo llega aún a la referencia humana en investigación autónoma (0,36 frente a 0,5). «Todavía no. Pero lo están midiendo porque esperan que pase.»
- **Revisar** la frase de Navier-Stokes: The Observer dice que el Clay habría reconocido el resultado; sin comprobar y choca con «el Clay aún no se ha pronunciado». Mirar la web del Clay o dejar la fórmula prudente.

## 4b. Los que la construyen piden bajar el ritmo (5 min)

- «OpenAI ha pausado dos veces»: cambiar «A 1 de octubre, sigue en pausa» por «A 21 de octubre, su página sigue diciendo que está en pausa». **Recomprobar la mañana del 21** (NI §3).
- Notas: GPT-6.1 Astra, según el WSJ, descartado por preocupaciones de seguridad (solo la apertura; Gizmodo dice «lo guardó»). Solo si preguntan.
- «Lo que lanzaron después»: igual. Gemini 4 Argon ya tiene tarjeta pública (13 oct); confirmar si está disponible para todos antes de decir nada.
- Notas en «Es una carrera»: Jack Clark (cofundador de Anthropic) en el FMI el 17 de octubre pidió ir despacio y habló de una ventana de pocos años. Sin comillas: solo hay subtítulos automáticos. El discusor del Gobierno de la India respondió que el laboratorio que frena pierde la carrera: refuerza la slide.

## 5. No es nuevo (5 min)

- **Slide de entrada** (19 oct: se vuelve al título de Euronova, «¿Y si todo esto es marketing?»; el otro sonaba artificial). Mismo contenido, otro uso: el público va a ser quien lo cuente.
- Quedan: Turing y Hawking, «Ya lo decían desde el principio», «Dimisiones», «Desde dentro» (oculta desde el 19 de octubre), «Antes de ChatGPT, y va a más» (con la pregunta del avión en el chat).
- «Lo han firmado» se queda. En «Qué podéis hacer» se recuerda que esas declaraciones se pueden firmar.
- Si sobra tiempo, juntar «Dimisiones» y «Desde dentro».

## 6. ¿Y los gobiernos? (3 min)

Misma slide, tres golpes (NC §3):

1. **ONU, 23 de septiembre**: sin acuerdo; EE. UU. rechaza la regulación internacional. Igual que en Euronova (recomprobar el 21).
2. **EE. UU.**: según Axios, la FTC ha pedido información a OpenAI y Anthropic sobre sus incidentes (14 oct, sin confirmar). Y Anthropic reparte su propio borrador de ley: el Gobierno solo podría frenar un modelo ante un riesgo «inminente» de más de 1.000 millones de dólares o 50 muertos (Politico, borrador no público). Voz: «actúa cuando el modelo ya existe; no pide parar el entrenamiento». El proyecto de Sanders y Casar, contado como hecho, sin el tono contra los «oligarcas».
3. **España**: el 6 de octubre se disuelven las Cortes. La ley de gobernanza de la IA caduca. Elecciones el 29 de noviembre. Voz, con honestidad: esa ley adaptaba el Reglamento europeo, no frenaba el entrenamiento.

Europa (Oficina de IA, multas del 3 %) pasa a notas. Hinton contra la autorregulación («como las tabaqueras») puede ir en notas del golpe 2; nada de lo que dice de Trump, Andreessen, Thiel o Musk.

## 6b. Gowers (30 s)

- **Slide nueva**, una cita sola, antes de «Lo que proponemos». Timothy Gowers, medalla Fields, 16 de octubre, en su blog: «surely it would be better to pause development and work out how best to use what we currently have.» (Original completo en NC §2.)
- Voz: «Ni trabaja en IA ni vende nada. Un matemático que hasta hace poco no se lo tomaba en serio.» No decir que da una probabilidad: no la da.

## 7. Lo que proponemos (3,5 min)

- «Lo que proponemos»: igual.
- **«Qué podéis hacer», rehecho** (NC §4). Fuera todo lo de empresas y el Club. Tres niveles por esfuerzo, con el enlace pegado en el chat a la vez:
  1. **2 minutos: firmar.** Las declaraciones que antes estaban en «Lo han firmado» (CAIS, superinteligencia, Pro-Human), en pauseai.es/inscripcion#peticiones.
  2. **20 minutos: escribir.** A vuestros representantes: que vuestro Gobierno impulse en la ONU un acuerdo internacional verificable. Guía en pauseai.es/inscripcion#escribir. Con el 29-N: hacer la misma pregunta a todas las candidaturas (pendiente de confirmar, ver abajo). Desde Latinoamérica, lo mismo a su parlamento.
  3. **Continuo: uniros.** pauseai.es/inscripcion, WhatsApp y Discord en español.
- Cierre de la slide en el chat: «¿Cuál vais a hacer esta semana?».
- La próxima sesión (Europe 2031, 28 de octubre, luma.com/7so1hmqs) en la voz o en el chat, si Dani quiere promocionarla.

## Cierre (1 min)

Igual. «Todavía estamos a tiempo de pararlo.» Preguntas con el QR y el contacto en pantalla.

---

## Preguntas previsibles nuevas

Se suman a las de Euronova (quitar «¿Qué hago yo con esto el lunes en mi empresa?»). Detalle y fuentes en NC §5 y NI.

| Pregunta                                           | Respuesta corta                                                                                                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| «¿Qué puedo hacer desde Latinoamérica?»            | Peticiones, WhatsApp y Discord son para todos. Escribir al propio parlamento para que su Gobierno apoye en la ONU un acuerdo internacional.                                                |
| «Anthropic propone su ley. ¿No basta?»             | Solo frena un modelo ante un riesgo inminente, cuando ya existe, y los evaluadores los pueden pagar los laboratorios. No para el entrenamiento ni es internacional.                        |
| «Si la pausa es pública, ¿no seguirán en privado?» | Es un riesgo real. Por eso pedimos un acuerdo con verificación que cubra el entrenamiento, no solo los lanzamientos. Los grandes centros de datos se pueden vigilar.                       |
| «¿Qué pasa con la ley de IA en España?»            | Caduca con la disolución. El Reglamento europeo se aplica igual. Y no frenaba el entrenamiento de modelos de frontera.                                                                     |
| «¿Ha vuelto a pasar después del verano?»           | Cuatro casos más publicados el 15 de octubre, todos de junio. Fuera de los laboratorios: flota de agentes en Tencent Cloud, bancos de Corea del Sur (mal uso humano). Con las pegas de NI. |
| «¿Ya se copian solas?»                             | En una prueba simplificada de Anthropic, un modelo abierto se copió a 8 de 8 dispositivos. Proyectan que uno pequeño pueda a finales de 2026. No pasa todavía fuera del laboratorio.       |
| «¿Me quitará la IA el trabajo?»                    | El FMI habla de un «tsunami lento» con los recién titulados primero. Anthropic cuenta seis agentes por empleado y menos contratación de júniors (datos de la empresa).                     |

---

## Comprobar antes del 21

Revisado el 20 de octubre y la mañana del 21 (detalles en las notas de cada slide):

- [x] La mañana del 21: pausa de OpenAI (alignment.openai.com/misalignment-reports) y ONU. El informe del DNS sigue diciendo «remain paused» («Report updated: Sep 25, 2026»); el índice tiene 20 informes y 3 avisos, ninguno sobre volver; ninguna noticia de que hayan vuelto. Slide cambiada a «A 21 de octubre», con «Nadie de fuera puede comprobarlo». En la ONU, nada nuevo desde el 23 de septiembre.
- [x] Informe de OpenAI del caso de la wallet: GPT-5.6 Sol, 26 de junio, Sepolia (red de pruebas). La línea de la slide es correcta.
- [x] Navier-Stokes y el Clay: el Clay dijo el 11 de septiembre «apparently been settled», sin dar premio. Slide cambiada a «anunciar que han resuelto»; lo de The Observer, fuera.
- [x] Disponibilidad de Gemini 4 Argon: disponible desde el 13 de octubre (API de pago y Pro/Ultra). Solo cambian las notas.
- [x] Enlaces de la CTA: todos responden; WhatsApp y Discord, válidos. Aún hay que comprobarlos en la web publicada cuando se despliegue.
- [x] Recuento de firmas: 77.774 el 20 de octubre. En la slide, «Más de 77.000 firmas».
- [x] Citas de «Desde dentro»: las cuatro, comprobadas en X. Hubinger cambiado a «De verdad creemos». Afiliaciones de los matemáticos: Córdoba (ICMAT-CSIC) y Martínez-Zoroa (CUNEF). «Sobre el trabajo previo» cambiado a «partiendo de ideas de» (Scientific American, 13 de octubre).

## Decisiones de Dani (18 oct)

1. 45 min de charla y 15 de preguntas.
2. 29-N: sí, la misma pregunta a todas las candidaturas.
3. Team Human: sí, porque es apartidista (creadores como Mark Rober y Kurzgesagt, con el apoyo del Center for AI Safety; pide «a global slowdown through international agreements»).
4. Europe 2031: no se promociona.
5. Contacto: danilupion@pauseai.es.
6. Dani graba la sesión y pide a alguien que modere el chat. Guía y enlaces: `chat-moderacion.md`.
