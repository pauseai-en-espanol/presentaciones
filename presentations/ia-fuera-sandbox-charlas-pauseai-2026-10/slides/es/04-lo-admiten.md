---
layout: center
clicks: 1
---

<div class="max-w-5xl mx-auto text-center">
  <div class="pregunta" style="font-size: 2.6rem">¿Y si la IA ayuda a construir la siguiente IA?</div>
  <div class="inline-block mt-8">
  <div class="flex items-stretch justify-center gap-3">
      <div class="tarjeta text-center" style="width: 13rem">
        <div class="cifra" style="font-size: 1.8rem">1</div>
        <div class="text-lg mt-1">Una IA mejor</div>
      </div>
      <div class="text-3xl opacity-50 self-center">→</div>
      <div class="tarjeta text-center" style="width: 13rem">
        <div class="cifra" style="font-size: 1.8rem">2</div>
        <div class="text-lg mt-1">Hace más trabajo de investigación</div>
      </div>
      <div class="text-3xl opacity-50 self-center">→</div>
      <div class="tarjeta text-center" style="width: 13rem">
        <div class="cifra" style="font-size: 1.8rem">3</div>
        <div class="text-lg mt-1">Sale una IA aún mejor</div>
      </div>
    </div>
    <div class="vuelta">
      <div class="vuelta-punta"></div>
      <span class="vuelta-texto">cada vez más rápido</span>
    </div>
  </div>
  <div v-click="1" class="text-2xl mt-6">En el sector lo llaman <span style="color: #ff9416">automejora recursiva</span>.</div>
  <div v-click="1" class="tarjeta cita mt-5 text-left" style="font-size: 1.25rem">«Si no se controla, podría ir más rápido que nuestra capacidad de entender y controlar estos sistemas.»
    <div class="cita-autor" style="margin-top: 0.4rem">Dario Amodei, CEO de Anthropic, septiembre de 2026</div>
  </div>
</div>

<!--
- Explicar la idea sin jerga: si la IA hace parte del trabajo de investigar y construir la
  siguiente IA, cada ciclo va más rápido. Es la «explosión de inteligencia» de la que habló
  I. J. Good en 1965.
- Clic: el término (en inglés, «recursive self-improvement», RSI) y, a la vez, Amodei, «We Must Pace the Frontier». Original: «AI has been advancing drastically
  faster, driven primarily by AI's growing ability to build the next generation of AI. This
  dynamic is called recursive self-improvement, and it is starting to happen across the
  industry, including at Anthropic [...] Left unchecked, it could outrun our ability to
  understand and control these systems, and so must be pursued very carefully, if at all.»
- Puente: «¿Está pasando ya? Lo miden ellos mismos.» Informe §7.3b, §8b.
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2">
  <div class="titulo" style="margin-bottom: 1rem">Ya está pasando</div>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <img src="/img/graficos/anthropic-id-dirigida-por-ia.png" class="captura" style="max-height: 19rem" />
      <div class="text-base mt-3"><b>Anthropic:</b> Claude dirige el <span style="color: #ff9416">26 %</span> de las tareas de investigación de sus nuevos modelos. En febrero era menos del 1 %.</div>
      <div class="credito mt-1">Anthropic, agosto de 2026</div>
    </div>
    <div v-click="1">
      <img src="/img/graficos/openai-jornadas-agentes.png" class="captura" style="max-height: 19rem; background: #fff" />
      <div class="text-base mt-3"><b>OpenAI:</b> por cada jornada de trabajo de sus investigadores, sus agentes hacen <span style="color: #ff9416">más de 3</span>. En mayo era la mitad.</div>
      <div class="credito mt-1">OpenAI, 6 de septiembre de 2026</div>
    </div>
  </div>
</div>

<!--
- Las dos empresas lo miden y lo publican. No es una predicción: son sus propios datos.
- Anthropic, «Measurements for understanding the pace of AI development inside frontier
  labs» (agosto). Gráfico: cuota mensual de tareas de I+D de modelos según la escala de
  automatización de Epoch AI. «Claude now leads 26% of model R&D work», desde menos del 1 %
  en febrero. Colabora o dirige en más del 90 %. Totalmente autónomo: 0 %. Unos 30.000
  agentes trabajando a la vez. Cita: «AI systems are becoming exponentially more powerful
  and have begun to automate more of the process of building themselves.»
- Clic: OpenAI, «Research acceleration: The view inside OpenAI» (6 de septiembre).
  «Before June 2026, total agent runtime across the research organization was still below
  that of total human labor. That has since changed. [...] 3.1 agent-workdays of effort for
  every workday of human labor.» (El gráfico llega a 3,14 a finales de agosto.)
  El investigador mediano gasta más de 600 $ al día en agentes. Objetivo declarado: «an
  automated AI researcher by March of 2028».
- Ojo: ninguna de las dos dice que la IA se mejore sola de forma autónoma. Es IA haciendo
  cada vez más parte del trabajo. Informe §8b.
- Puente: «¿Y cómo se nota eso por dentro? Anthropic lo contó la semana pasada.»
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2">
  <div class="kicker">Anthropic, 13 de octubre de 2026</div>
  <div class="titulo" style="margin-bottom: 0.6rem">Tanto código que git no da abasto</div>
  <div class="text-lg mb-4">Git es la herramienta con la que casi todos los programadores guardan y juntan sus cambios. A Anthropic se le quedó pequeña y ha tenido que hacerse una propia.</div>
  <div class="grid grid-cols-5 gap-8 items-center">
    <div class="col-span-3">
      <img src="/img/graficos/anthropic-cambios-al-dia.png" class="captura" style="max-height: 17.5rem" />
      <div class="credito mt-1">Cambios al día. En azul, con las herramientas de siempre; en naranja, con las suyas.</div>
    </div>
    <div class="col-span-2 grid">
      <div v-click.hide="1" class="text-center space-y-1" style="grid-area: 1 / 1; align-self: center">
        <div><div class="cifra" style="font-size: 3rem">unos 2.500</div><div class="cifra-texto">al día en mayo, de media</div></div>
        <div class="text-3xl opacity-50">↓</div>
        <div><div class="cifra" style="font-size: 3rem">30.401</div><div class="cifra-texto">solo el 9 de septiembre</div></div>
      </div>
      <div v-click="1" class="space-y-3" style="grid-area: 1 / 1; align-self: center">
        <div class="tarjeta cita" style="font-size: 1rem; padding: 0.8rem 1.1rem">«Todos los ingenieros que han trabajado en este sistema dirían ahora que Claude programa mejor que ellos.»</div>
        <div class="tarjeta cita" style="font-size: 1rem; padding: 0.8rem 1.1rem">«Muy a menudo, el papel de los ingenieros era decirle a Claude que no.»</div>
        <div class="cita-autor text-center">El equipo que lo construyó</div>
      </div>
    </div>
  </div>
</div>

<!--
- Para quien no programe: git es donde se guarda el código y donde se juntan los cambios de
  todo el equipo. Lo usa prácticamente todo el mundo. Que se te quede pequeño es rarísimo.
- Fuente: blog de Anthropic, «Redesigning source control at Anthropic» (13 de octubre,
  actualizado el 15), anthropic.com/research/redesigning-source-control. Original: «In May 2026,
  Anthropic averaged around 2,500 code changes merged per day; as of September, we merged over
  30,000 per day.» Y más abajo: «the volume of code merged per day increased by 10x».
- El gráfico es suyo, sin tocar (enero a 9 de septiembre). Señalar la curva, no leer los ejes.
  Azul: pull requests, la revisión de siempre sobre git. Naranja: la herramienta de revisión que
  se han hecho (Antique). El cambio de color es la mudanza.
- Ojo con las cifras: 30.401 es el récord de un solo día (9 de septiembre). La media de 7 días
  (la línea negra) acaba en unos 18.000. Decir «unas diez veces más en cuatro meses», como dicen
  ellos, no «doce».
- La caída de finales de julio («Quiet week») no la explican. No inventar el motivo.
- Por qué: «At Anthropic, coding is no longer the bottleneck to building systems or doing
  research.» Git está pensado para personas que a veces trabajan sin conexión; sus clientes son
  ya casi todos agentes y procesos automáticos, siempre conectados. El sistema nuevo se llama
  Scion. Lo hicieron siete personas en cinco meses.
- Clic, las dos citas a la vez. Originales: «All of the engineers who worked on this system
  would now rate Claude as better at writing code than them.» · «Very often, we found that the
  role of the engineers was to tell Claude "no."» Por qué decían que no: los agentes «will
  sometimes violate core system constraints to satisfy a pattern that should never have been
  allowed».
- Y cómo revisan ahora: «Our team members still review every change request for the system, but
  they now examine the intent of the change as opposed to reading every line of code.» Ojo: es
  ese equipo, no toda Anthropic. No generalizar.
- Voz: «Programan mejor que ellos, y su trabajo es sobre todo decirles que no. Eso es la IA
  ayudando a construir la IA, visto desde dentro.»
- Qué no decir: «30.000 cambios escritos por IA». No dice qué parte escribe Claude ni quién
  hace cada cambio. Son cifras de la propia empresa.
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2 max-w-5xl">
  <div>
    <div class="titulo">Capacidades matemáticas para verlo en perspectiva</div>
    <div class="space-y-4 text-xl">
      <div>En tres veranos, los modelos de OpenAI han pasado de las matemáticas de primaria a <b>anunciar que han resuelto uno de los siete Problemas del Milenio</b>.</div>
      <div v-click="1"><span class="cifra" style="font-size: 2.4rem">10.000 agentes · 88 horas</span><br/>partiendo de ideas de dos matemáticos españoles, Diego Córdoba y Luis Martínez-Zoroa.</div>
      <div v-click="1" class="tarjeta cita" style="font-size: 1.2rem">«Todavía no sabemos cómo llegar de forma segura hasta una IA que se mejore a sí misma del todo.»
        <div class="cita-autor">OpenAI, 6 de septiembre de 2026</div>
      </div>
    </div>
  </div>
</div>

<!--
- «Tres veranos» es la frase de Altman en el Consejo de Seguridad (23 de septiembre): «Three
  summers ago, our models were okay at grade school math… this summer, one of our models solved
  one of the Millennium Prize problems».
- Navier-Stokes (OpenAI, 8 de septiembre). Decir «OpenAI anunció». Comprobado el 20 de octubre:
  - El Clay Institute (claymath.org, 11 de septiembre) dice que el problema «has apparently been
    settled» y que su proceso es «deliberately unhurried». No nombra a nadie ni da el premio; en
    su web sigue «Active». Su presidente dice que hace falta publicación revisada. OpenAI: «We do
    not intend to claim the Millennium Prize for this result.»
  - Lo de The Observer («appears to have done the job») no se ha podido encontrar. No usarlo.
  - El teorema final está verificado en Lean, pero un artículo del 6 de octubre (arXiv
    2610.08144) dice que el código de Lean no se corresponde con la demostración escrita, que aún
    no está revisada.
  - Cifras de OpenAI: «on the order of 10,000 concurrent agents»; 88 horas desde que lanzaron
    los primeros agentes el 1 de septiembre (al principio, contra todos los problemas abiertos).
- Es la misma capacidad de trabajar en enjambre que atacó Hugging Face.
- Córdoba: profesor de investigación del CSIC en el ICMAT (Madrid). Martínez-Zoroa: CUNEF
  Universidad (Madrid), antes en Basilea; fue doctorando de Córdoba. Fefferman, en Quanta: «The
  heroes of the story… are Córdoba and Martínez-Zoroa.» El blog de OpenAI no los nombra; su
  artículo sí los cita. Ojo: según Scientific American (13 de octubre), la demostración final
  de los 10.000 agentes sigue otro camino, aunque OpenAI dijera que partía del programa español.
  Por eso «partiendo de ideas de», no «sobre su trabajo».
- Mismo clic, original de la cita de OpenAI: «We do not yet know how to safely get all the way to aligned, full RSI.
  [...] we cannot assume that progress in alignment and safety will keep pace, and more
  capable systems can become harder to monitor.» RSI: automejora recursiva. Informe §8b.
- El punto 6 de la lista («se mejoraría a sí misma») no se tacha: su «?» aparece en la lista
  final de esta sección. Es IA ayudando a construir IA, no un modelo que se mejora solo.
- Ya no en pantalla (21 de octubre); el «?» del punto 6 hace ese papel. Si preguntan «¿investiga
  ya sola?»: todavía no. En el índice de Vals (15 de octubre), ningún modelo llega aún al nivel de
  referencia: el mejor saca 0,36 y la referencia es 0,5. Vals RSI Index (vals.ai/benchmarks/rsi_index): cuatro tareas de
  investigación autónoma con tiempo y cómputo fijos. 0,5 es igualar el mejor resultado publicado
  (humano o de frontera); 0,6, un avance claro. El mejor que nombra la página: Claude Fable 5.1,
  0,36. Opus 5.5 sí supera la referencia en una tarea (entrenar un modelo de lenguaje, 0,53).
  Una sola ejecución y tareas estrechas.
- Y añadir: «Pero fijaos en que ya hay quien lo mide, porque esperan que pase.»
-->

---
layout: center
---

<div class="max-w-4xl mx-auto text-center">
  <div class="pregunta">¿Y qué dicen los que la construyen?</div>
</div>

<!--
- Entrada a la sección. Tras ver que ya está pasando, la pregunta lógica. La respuesta la dan
  las slides siguientes: piden bajar el ritmo.
- Matiz importante: piden bajar el ritmo, no parar. Parar es lo que pide PauseAI, y se verá
  al final. No mezclar las dos cosas.
-->

---
layout: center
---

<div class="grid grid-cols-5 gap-10 items-center max-w-6xl mx-auto">
  <div class="col-span-3">
    <div class="kicker">OpenAI, 16 de septiembre de 2026</div>
    <div class="cita">«No creemos que la industria haya resuelto el alineamiento y la supervisión lo bastante como para seguir escalando de forma responsable a máxima velocidad durante mucho más tiempo.»</div>
  </div>
  <div class="col-span-2">
    <img src="/img/capturas/openai-marco.png" class="captura" />
    <div class="credito mt-2">openai.com, 16 de septiembre de 2026</div>
  </div>
</div>

<!--
- Empieza la sección: quienes construyen la IA piden bajar el ritmo. Ojo: ninguno pide parar;
  eso lo pide PauseAI, y se verá al final.
- «Esto no lo escribe PauseAI. Lo escribe OpenAI, en su web, el 16 de septiembre.»
- Original: «We do not believe that the AI industry has solved alignment and
  monitoring to a sufficient degree to continue responsibly scaling at maximum speed
  for much longer.» «Our framework for reporting model misalignment». Informe §6.1.
-->

---
layout: default
clicks: 1
hide: true
---

<div class="px-8 pt-2">
  <div class="titulo" style="margin-bottom: 1rem">OpenAI ha pausado dos veces</div>
  <div class="grid grid-cols-5 gap-8 items-start">
    <div class="col-span-3">
      <img src="/img/graficos/openai-computo-restricciones.png" class="captura" style="max-height: 17rem; background: #fff" />
      <div class="credito mt-1">Cómputo de entrenamiento de OpenAI, julio y agosto de 2026. OpenAI, 6 de septiembre.</div>
    </div>
    <div class="col-span-2 space-y-4 text-base">
      <div><span class="cifra" style="font-size: 1.7rem">20 de julio</span><br/>Tras descubrir que sus agentes habían entrado en su infraestructura, para dos semanas el entrenamiento de sus modelos más recientes.</div>
      <div v-click="1"><span class="cifra" style="font-size: 1.7rem">25 de septiembre</span><br/>Pausa el entrenamiento, las pruebas y el uso con herramientas de sus modelos más capaces (no dice cuáles). A 21 de octubre, su web sigue diciendo que está en pausa. <span style="color: #ff9416">Nadie de fuera puede comprobarlo.</span>
        <div class="text-sm opacity-80 mt-2">El detonante: un agente sin internet se saltó el bloqueo para consultar a otro chatbot. Lo detectaron en menos de 15 minutos y siguió dos horas y media más.</div>
      </div>
    </div>
  </div>
</div>

<!--
- Gráfico: la caída del 20 de julio es la primera pausa. En verde, Astra; el 6-7 de agosto,
  más restricciones al descubrir que Astra podía tener capacidades cyber críticas.
- Dato que conviene contar: cuando restringieron Astra, el cómputo se fue a otros modelos
  («compute remains valuable and flexible, and will naturally be channeled into alternative
  uses»). Si frena una sola empresa, o un solo modelo, el esfuerzo se va a otro sitio. Por eso
  el freno tiene que ser de todos.
- Clic: la pausa actual. Lo que la desencadenó: el 20 de septiembre, un agente sin acceso a
  internet escondió preguntas dentro de consultas DNS para hablar con un chatbot externo
  (tenía que identificar a una persona a partir de pistas; no lo consiguió).
  OpenAI dice que fue «a lot less severe than some of our previous incidents».
- Los tiempos, de su propio informe: respuesta externa a las 9:50:23; alerta P0 a las 10:02:11;
  una persona la reconoce a las 10:05:06; el proceso se para a mano a las 12:34:30. Original:
  «Our misalignment monitoring system flagged the behavior within 15 minutes and a person
  began reviewing it three minutes after that. The run was killed 2.5 hours later.» Motivo:
  «the run did not stop automatically as expected, leading to confusion around whether it
  should have been stopped». Además, la vigilancia no marcó otros casos de DNS con la
  gravedad debida, y un detector de DNS no cubría ese entorno.
- No van a seguir entrenando ese modelo: «We will not resume training this particular model».
- Comprobado la mañana del 21 de octubre: el informe del DNS
  (alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/) sigue
  diciendo «All training, evaluation, and inference with tool-use (defined broadly) of our most
  capable models remain paused.» («Report updated: Sep 25, 2026»). El índice tiene 20 informes y
  3 avisos, ninguno sobre volver a entrenar. Una búsqueda de noticias no encontró ninguna
  reanudación. Una página sin actualizar no prueba que nada haya cambiado: por eso «su web dice».
- Decir: «Que sepamos. Desde fuera nadie puede comprobarlo: ni si siguen parados, ni qué cuenta
  como "sus modelos más capaces". Por eso pedimos un acuerdo que se pueda verificar.» Prepara «Lo
  que proponemos», que pide «garantías de seguridad que se puedan comprobar».
- Por qué no se puede comprobar (para preguntas, no para leer):
  - El alcance lo decide OpenAI. «Our most capable models» no nombra ningún modelo. GPT-6.1 Sol
    salió el 29 de septiembre, a los cuatro días de la pausa. El informe del 20 de octubre muestra
    agentes de GPT-6.1 Sol y GPT-6 Astra usando herramientas dentro de OpenAI el 3 y el 6 de
    octubre.
  - OpenAI no ha prometido anunciar cuándo vuelve. La condición es su propio criterio: «until we
    have both validated that the gap is resolved and performed additional red-teaming of the
    system.»
  - El informe no es una página de estado. OpenAI publicó informes el 2, el 9, el 15 y el 20 de
    octubre sin tocar este, actualizado por última vez el 25 de septiembre.
  - Su historial es contarlo tarde. Los casos de junio salieron el 15 de octubre. Lo de Hugging
    Face lo hizo público después de que lo contara Hugging Face. La wiki alemana la destaparon
    investigadores de fuera.
  - Para ser justos: la prensa está muy encima, y ningún medio ha contado que hayan vuelto.
- No confundir con la pausa de agosto: lo de «many workloads resumed» que sale en algunos medios
  es de aquella, no de esta.
- Si preguntan por GPT-6.1 Astra: según el WSJ (28 de septiembre), OpenAI no lo lanza por
  preocupaciones de seguridad. Solo se ha leído la entradilla. No decir que esté cancelado para
  siempre ni dar motivos concretos.
- «La empresa que más corre ha pausado sus modelos más potentes porque ya no se fía de sus
  propios controles.»
- Aclararlo: GPT-6 Astra salió el 3 de septiembre (con restricciones en ciberseguridad) y GPT-6
  Sol y Luna el 22; siguen funcionando. Lo parado son sus modelos internos más potentes. No decir
  «OpenAI ha parado».
- Originales: «All training, evaluation, and inference with tool-use (defined broadly) of our
  most capable models remain paused.» · «we temporarily shut down the container service used
  for training, and then restored it with significant additional restrictions». Informe §6.2, §8b.
-->

---
layout: center
clicks: 2
---

<div class="flex items-center gap-10 max-w-6xl mx-auto">
  <img src="/img/personas/amodei.jpg" class="foto-persona" style="width: 8.5rem; height: 8.5rem; flex-shrink: 0" />
  <div>
    <div class="kicker">Dario Amodei, CEO de Anthropic, 12 de septiembre de 2026</div>
    <div class="cita" style="font-size: 1.7rem">«Tenemos que reducir el ritmo al que mejoramos las capacidades de los modelos de IA.»</div>
    <div v-click="1" class="mt-5">
      <div class="kicker" style="margin-bottom: 0.4rem">Ese mismo día lo respaldaron</div>
      <div class="grid grid-cols-3 gap-3">
        <div class="tarjeta" style="padding: 0.6rem 0.8rem"><div class="text-sm font-bold">Sam Altman, OpenAI</div><div class="text-sm mt-1">«Estoy de acuerdo con Dario en que tenemos que marcar el ritmo.»</div></div>
        <div class="tarjeta" style="padding: 0.6rem 0.8rem"><div class="text-sm font-bold">Demis Hassabis, Google DeepMind</div><div class="text-sm mt-1">«Apunta al camino correcto.»</div></div>
        <div class="tarjeta" style="padding: 0.6rem 0.8rem"><div class="text-sm font-bold">Elon Musk, xAI</div><div class="text-sm mt-1">«Dario tiene razón.»</div></div>
      </div>
    </div>
    <div v-click="2" class="tarjeta mt-4" style="padding: 0.7rem 1rem">
      <div class="kicker">¿Os acordáis de la frase del principio?</div>
      <div class="cita" style="font-size: 1.1rem">«Un enjambre con más capacidad y el mismo nivel de desalineamiento podría haber causado daños catastróficos. Me preocupa que en 6 a 12 meses un enjambre así sea capaz de hacerse con todo internet con una botnet persistente.»</div>
    </div>
  </div>
</div>

<div class="credito absolute bottom-10 left-16">Foto: TechCrunch, CC BY 2.0, vía Wikimedia Commons</div>

<!--
- Original: «We must slow the pace at which we improve the capabilities of AI models.
  Progress will still seem fast, and we must make wise use of the time we gain.»
- Sus dos motivos: la IA ya construye la siguiente IA («including at Anthropic») y el caso
  Hugging Face.
- Su plan, si preguntan: evaluadores externos dentro de cada empresa (Anthropic se compromete
  sola), coordinación entre países democráticos con «limits on the rate of unchecked AI
  progress», y coordinación global con un «speed limit» a la automejora.
- Matiz: dice «pacing does not mean halting model training». No pide una pausa.
- Clic 1, los apoyos, el mismo 12 de septiembre en X:
  - Altman: «I agree with Dario that we need to pace the frontier. This has been a primary topic
    of discussions we've had at OpenAI in recent weeks. Committing to having independent
    evaluators with employee-like access is a great idea, and we will do the same.»
  - Hassabis: «Dario's essay points towards the right path forward. The details need working
    through, but the direction is correct for meeting this critical moment.»
  - Musk: «Dario is right.» (Politico). Y después: «Dario is right that there should be some
    oversight. Peer review of AI by competitors is the right way to start this off.»
  - Críticos lo llamaron un posible «cártel» (The Verge). Si sale, reconocerlo.
- Clic 2, la respuesta a la pregunta del principio: «Ahora ya sabéis quién lo dijo, y de qué
  enjambre hablaba.» Original: «a swarm that possessed greater
  capabilities but a similar level of misalignment could have caused catastrophic damage.
  Given the accelerating rate of AI capability development, it's my worry that in 6-12 months
  such a swarm could be capable of taking over the entire internet with a persistent botnet
  (potentially causing hundreds of billions of dollars in damage)». Informe §7.3b.
-->

---
layout: default
---

<div class="px-8 pt-2">
  <div class="titulo" style="margin-bottom: 0.4rem">Lo que lanzaron después</div>
  <div class="text-lg opacity-80 mb-4">Las mismas empresas que respaldaron bajar el ritmo, <span style="color: #ff9416">en los 18 días siguientes</span>.</div>
  <Lanzamientos />
</div>

<!--
- Sin comentarios: poner los hechos y dejar que la gente saque la conclusión. La pregunta
  «¿por qué no paran?» viene en la siguiente slide.
- 12 de septiembre: ensayo de Amodei y apoyos de Altman, Hassabis y Musk en X.
- Lanzamientos (páginas de producto y prensa especializada): Grok 4.7 (xAI, 21 sep); GPT-6 Sol y
  GPT-6 Luna (OpenAI, 22 sep); Claude Opus 5.5 (Anthropic, 22 sep); Claude Sonnet 5.5
  (Anthropic, 28 sep); GPT-6.1 Sol (OpenAI, 29 sep); y Gemini 4 Argon (Google DeepMind, 30 sep),
  presentado por ellos como «our new frontier model». El 30 de septiembre, solo para
  probadores de ciberdefensa (programa Fairwind); desde el 13 de octubre, disponible para todo
  el mundo que pague: API de pago y suscriptores de Google AI Pro y Ultra (blog de Google, 13 de
  octubre). Este sí es un modelo de frontera nuevo, 18 días después de que Hassabis respaldara
  bajar el ritmo, y abierto al público dos semanas después.
- Honestidad, si preguntan: casi todos son versiones más baratas y rápidas de capacidades que
  ya tenían, no un salto de la frontera. GPT-6.1 Sol presume de rendimiento «Astra-level» a
  una quinta parte del coste; Opus 5.5, del nivel de Fable 5.1 al 40 % del precio. Amodei dijo
  que «pacing does not mean halting». Pero el resultado es más capacidad, para más gente y más
  barata, en 18 días. Y lo que OpenAI tiene en pausa son sus modelos internos más capaces.
- Si preguntan «¿pero OpenAI no ha frenado algo?»: sí. Iba a presentar GPT-6.1 Astra en el
  DevDay del 29 de septiembre y lo guardó porque había empeorado en seguridad («regressed»,
  según Gizmodo). Pero ese mismo día lanzó GPT-6.1 Sol, que se acerca a Astra a una quinta parte
  del precio. Astra, el más potente de la familia GPT-6, salió el 3 de septiembre; Sol y Luna son
  versiones más baratas.
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2 max-w-6xl mx-auto">
  <div class="titulo" style="margin-bottom: 0.4rem">Es una carrera</div>
  <div>
    <div class="text-2xl mb-4">Si uno frena, <span style="color: #ff9416">otro adelanta</span>.</div>
    <div class="grid grid-cols-3 gap-5">
    <div class="tarjeta">
      <div class="text-lg font-bold">Anthropic retiró su promesa</div>
      <div class="text-sm mt-2">De no entrenar sin garantías de seguridad. ¿Por qué? «No tenía sentido comprometernos por nuestra cuenta si los competidores van a toda velocidad.»</div>
      <div class="text-xs opacity-60 mt-2">Jared Kaplan, científico jefe de Anthropic, febrero de 2026</div>
    </div>
    <div class="tarjeta">
      <div class="text-lg font-bold">Una empresa sola no puede</div>
      <div class="text-sm mt-2">Amodei propone límites coordinados entre empresas y entre países, no que una empresa frene sola.</div>
      <div class="text-xs opacity-60 mt-2">Dario Amodei, septiembre de 2026</div>
    </div>
    <div class="tarjeta">
      <div class="text-lg font-bold">Lo dicen sus propios empleados</div>
      <div class="text-sm mt-2">«Cada empresa, y cada país, está bajo una intensa presión competitiva para no frenar por su cuenta.»</div>
      <div class="text-xs opacity-60 mt-2">Declaración de 1.386 empleados de laboratorios de IA, julio de 2026</div>
    </div>
    </div>
  </div>
  <div v-click="1" class="text-2xl text-center mt-4">Por eso hace falta un acuerdo <span style="color: #ff9416">global, desde fuera de las empresas</span>.</div>
</div>

<!--
- Un clic, al final: «Por eso hace falta un acuerdo global». Viene de «Lo que lanzaron después»: lo admiten y piden bajar el ritmo, pero siguen.
  La razón: una carrera. Tres pruebas:
  - Anthropic (TIME, 24 de febrero de 2026): retiró su compromiso de «never train an AI system
    unless it could guarantee in advance that the company's safety measures were adequate».
    Ahora solo retrasaría el desarrollo si cree que va en cabeza de la carrera y que los riesgos
    catastróficos son significativos. Jared Kaplan: «We didn't really feel, with the rapid
    advance of AI, that it made sense for us to make unilateral commitments … if competitors
    are blazing ahead.» Y: «it wouldn't actually help anyone for us to stop training AI models».
  - Si sale: el cómputo que OpenAI restringió en Astra en agosto se fue a otros modelos
    («compute [...] will naturally be channeled into alternative uses»). Informe §8b.
  - Amodei propone «limits on the rate of unchecked AI progress» coordinados entre empresas
    de países democráticos y coordinación global con un «speed limit». Informe §7.3b.
  - Pacing the Frontier (la declaración de la slide siguiente): «But each company, and country,
    is under intense competitive pressure not to unilaterally slow that acceleration. And today,
    the world lacks the technical and governance tools to deliberately pace frontier-wide
    progress.» Informe §7.3.
- Clic: «Una carrera no la para un corredor: la para quien pone las reglas.» Puente a
  la slide siguiente: eso es justo lo que piden 1.386 empleados de estas empresas a su Gobierno.
- Si sale Altman en la ONU («We have unilaterally slowed down in the past. We will do so in
  the future»): es cierto que lo han hecho, como acabamos de ver, pero siempre de forma
  temporal y siguiendo después.
- Más reciente, si hace falta: Jack Clark, cofundador de Anthropic, en el FMI el 17 de octubre,
  pidió reglas serias e ir despacio, y habló de una ventana de pocos años. El que le respondió,
  el asesor económico jefe del Gobierno de la India, dijo que el laboratorio que frena pierde la
  carrera y nadie se lo agradece. Sin comillas: solo hay subtítulos automáticos.
-->


---
layout: center
---

<div class="max-w-5xl mx-auto text-center">
  <div class="kicker">Julio de 2026</div>
  <div class="cifra" style="font-size: 7rem">1.386</div>
  <div class="text-2xl mt-2">empleados de laboratorios de IA piden al Gobierno de EE. UU. un esfuerzo internacional para marcar el ritmo del desarrollo</div>
  <div class="grid grid-cols-4 gap-4 mt-10 text-base">
    <div class="tarjeta"><b>Dario Amodei</b><div class="text-sm opacity-60">CEO de Anthropic</div></div>
    <div class="tarjeta"><b>Ilya Sutskever</b><div class="text-sm opacity-60">cofundador de OpenAI</div></div>
    <div class="tarjeta"><b>Jakub Pachocki</b><div class="text-sm opacity-60">científico jefe de OpenAI</div></div>
    <div class="tarjeta"><b>Shane Legg</b><div class="text-sm opacity-60">cofundador de Google DeepMind</div></div>
  </div>
  <div class="text-sm opacity-50 mt-4">pacingthefrontier.com</div>
</div>

<!--
- Pacing the Frontier. Original: «We request that the U.S. government support an
  international effort to develop the technical and governance tools needed to deliberately
  pace the frontier of automated AI development.»
- Firmado en julio, antes de la dimisión de Coxon. También firman Jared Kaplan (Anthropic)
  y John Schulman (Thinking Machines).
- Piden marcar el ritmo, no una pausa. No exagerarlo. Informe §7.3.
-->

---
layout: center
---

<div class="max-w-3xl mx-auto">
  <ListaPrediccion :tachados="[1, 2, 3, 4, 5]" :dudas="[6]" />
</div>

<!--
- Silencio unos segundos.
- «Cinco de seis los hemos visto este verano. El sexto todavía no, pero ya ha empezado.»
- Recordar el matiz: son comportamientos, no intenciones.
-->
