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
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2 max-w-5xl">
  <div>
    <div class="titulo">Y va cada vez más rápido</div>
    <div class="space-y-6 text-xl">
      <div>En tres veranos, los modelos de OpenAI han pasado de las matemáticas de primaria a <b>resolver uno de los siete Problemas del Milenio</b>.</div>
      <div v-click="1"><span class="cifra" style="font-size: 2.4rem">10.000 agentes · 88 horas</span><br/>sobre el trabajo previo de dos matemáticos españoles, Diego Córdoba y Luis Martínez-Zoroa.</div>
      <div v-click="1" class="tarjeta cita" style="font-size: 1.3rem">«Todavía no sabemos cómo llegar de forma segura hasta una IA que se mejore a sí misma del todo.»
        <div class="cita-autor">OpenAI, 6 de septiembre de 2026</div>
      </div>
    </div>
  </div>
</div>

<!--
- Navier-Stokes (8 de septiembre): verificado formalmente en Lean; el Clay Institute
  todavía no se ha pronunciado y OpenAI no reclamará el premio. Decir «OpenAI anunció».
- Es la misma capacidad de trabajar en enjambre que atacó Hugging Face.
- Confirmar afiliaciones de Córdoba y Martínez-Zoroa antes de la charla. Informe §8.
- Mismo clic, original de la cita de OpenAI: «We do not yet know how to safely get all the way to aligned, full RSI.
  [...] we cannot assume that progress in alignment and safety will keep pace, and more
  capable systems can become harder to monitor.» RSI: automejora recursiva. Informe §8b.
- El punto 6 de la lista («se mejoraría a sí misma») no se tacha: su «?» aparece en la lista
  final de esta sección. Es IA ayudando a construir IA, no un modelo que se mejora solo.
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
- «Esto no lo escribe PauseAI. Lo escribe OpenAI, en su web, hace dos semanas.»
- Original: «We do not believe that the AI industry has solved alignment and
  monitoring to a sufficient degree to continue responsibly scaling at maximum speed
  for much longer.» «Our framework for reporting model misalignment». Informe §6.1.
-->

---
layout: default
clicks: 1
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
      <div v-click="1"><span class="cifra" style="font-size: 1.7rem">25 de septiembre</span><br/>Pausa el entrenamiento, las pruebas y el uso con herramientas de <span style="color: #ff9416">sus modelos más capaces</span>. A 1 de octubre, sigue en pausa.
        <div class="text-sm opacity-80 mt-2">El detonante: un agente sin acceso a internet se saltó el bloqueo para consultar a otro chatbot. Su vigilancia lo detectó en menos de 15 minutos, pero el proceso siguió en marcha dos horas y media más.</div>
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
- COMPROBAR LA MAÑANA DE LA CHARLA que la pausa sigue (informe de OpenAI: «remain paused»).
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
- Clic 2: «Ahora ya sabéis de qué enjambre hablaba.» Original: «a swarm that possessed greater
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
- Sin comentarios: poner los hechos y dejar que la sala saque la conclusión. La pregunta
  «¿por qué no paran?» viene en la siguiente slide.
- 12 de septiembre: ensayo de Amodei y apoyos de Altman, Hassabis y Musk en X.
- Lanzamientos (páginas de producto y prensa especializada): Grok 4.7 (xAI, 21 sep); GPT-6 Sol y
  GPT-6 Luna (OpenAI, 22 sep); Claude Opus 5.5 (Anthropic, 22 sep); Claude Sonnet 5.5
  (Anthropic, 28 sep); GPT-6.1 Sol (OpenAI, 29 sep); y Gemini 4 Argon (Google DeepMind, 30 sep),
  presentado por ellos como «our new frontier model», de momento solo para probadores de
  confianza (programa Fairwind). Este sí es un modelo de frontera nuevo, 18 días después de que
  Hassabis respaldara bajar el ritmo.
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
- Sin clics. Viene de «Lo que lanzaron después»: lo admiten y piden bajar el ritmo, pero siguen.
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
