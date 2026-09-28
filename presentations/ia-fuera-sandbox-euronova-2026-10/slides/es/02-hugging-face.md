---
layout: default
clicks: 1
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="kicker">Julio de 2026</div>
  <div class="titulo">El caso Hugging Face</div>
  <div class="space-y-5 text-xl">
    <div>OpenAI pone a prueba sus modelos más capaces, con algunas protecciones <b>desactivadas a propósito</b> para medir lo que pueden hacer.</div>
    <div>Los agentes encuentran un fallo que nadie conocía, salen del entorno de pruebas y entran en <b>Hugging Face</b>, la mayor plataforma pública de modelos de IA.</div>
    <div>¿Para qué? Para buscar pistas de cómo <span style="color: #ff9416">hacer trampa en la evaluación</span>.</div>
  </div>
  <div v-click="1" class="grid grid-cols-2 gap-6 mt-10 text-center max-w-3xl mx-auto">
    <div><div class="cifra">136</div><div class="cifra-texto">credenciales de acceso robadas</div></div>
    <div><div class="cifra">1/3</div><div class="cifra-texto">de los servidores de Hugging Face, rehechos desde cero</div></div>
  </div>
</div>

<!--
- Evaluación interna de capacidad ofensiva (ExploitGym). GPT-5.6 Sol y un prototipo más capaz.
- Zero-day en Artifactory (CVE-2026-66384); después, Hugging Face.
- OpenAI lo hace público el 21 de julio.
- Con honestidad: era una evaluación interna y no se tocaron datos de clientes.
- «Hacer trampa»: según METR, lo que buscaban sobre todo era entender cómo se puntuaba
  la evaluación, no robar las respuestas: «seemed primarily motivated by understanding the
  implementation of the scorer rather than stealing answer keys». Amodei: «attempting to
  hack into the grader». No decir «robar las respuestas».
- 136 credenciales: tokens y claves de servicio de producción de Hugging Face (forense de HF).
- Un tercio: tras una intrusión no te puedes fiar de ninguna máquina tocada, así que se borra y se rehace.
  Dato de Hugging Face vía The Register (28 de julio), no del informe de OpenAI.
- La cronología completa viene al final de este bloque.
- Fuentes: informe técnico de OpenAI, forense de Hugging Face. Informe §3.1.
-->

---
layout: default
clicks: 1
---

<div class="px-8 pt-2 max-w-6xl mx-auto">
  <div class="titulo" style="margin-bottom: 1rem">La evaluación</div>
  <div class="text-lg mb-5"><b>ExploitGym</b>: una especie de examen práctico de hacking, con 898 retos. OpenAI la hizo sin los filtros de seguridad de sus productos, para medir lo máximo que pueden hacer sus modelos.</div>
  <div class="grid grid-cols-4 gap-4">
    <div class="tarjeta text-center" style="padding: 0.9rem 0.8rem">
      <div class="cifra" style="font-size: 1.8rem">1</div>
      <div class="font-bold mt-1">Un programa con un fallo</div>
      <div class="text-sm opacity-70 mt-1">en un entorno aislado</div>
    </div>
    <div class="tarjeta text-center" style="padding: 0.9rem 0.8rem">
      <div class="cifra" style="font-size: 1.8rem">2</div>
      <div class="font-bold mt-1">El agente lo ataca</div>
      <div class="text-sm opacity-70 mt-1">con todas sus herramientas</div>
    </div>
    <div class="tarjeta text-center" style="padding: 0.9rem 0.8rem">
      <div class="cifra" style="font-size: 1.8rem">3</div>
      <div class="font-bold mt-1">Saca la «bandera»</div>
      <div class="text-sm opacity-70 mt-1">un dato secreto que prueba que ha entrado</div>
    </div>
    <div class="tarjeta text-center" style="padding: 0.9rem 0.8rem; border-color: #ff9416">
      <div class="cifra" style="font-size: 1.8rem">4</div>
      <div class="font-bold mt-1">Un corrector lo comprueba</div>
      <div class="text-sm opacity-70 mt-1">y decide si aprueba</div>
    </div>
  </div>
  <div v-click="1" class="tarjeta mt-6 text-lg">Los agentes creían que el corrector también comprobaba <b>cómo</b> habían conseguido la bandera. <span style="color: #ff9416">Ese control no existía.</span></div>
</div>

<!--
- Presentarlo una vez como «una especie de examen práctico de hacking» («capture the flag») y
  a partir de ahí decir siempre «evaluación», que es el término que usan OpenAI, METR y el AISI.
- OpenAI: «ExploitGym, a cybersecurity evaluation that measures whether a model is capable
  of discovering and exploiting cybersecurity vulnerabilities. These evaluations are
  conducted in controlled, isolated environments known as sandboxes. [...] running this
  evaluation without the production classifiers intended to prevent models from pursuing
  high-risk cyber activity.»
- METR: «A "flag" is a piece of arbitrary data the AI is tasked with retrieving, as proof it
  has hacked into the [target]».
- Clic: el control que no existía. Por lo que leyeron en el artículo de ExploitGym, los agentes
  creían que el corrector leía su transcripción para comprobar que habían usado la
  vulnerabilidad prevista (lo llamaban «STRICT_CAUSAL»). METR: «Our understanding is that OpenAI
  didn't actually implement this check and agents could have successfully cheated with their
  reverse-engineered flag.» Y las banderas se podían falsificar: a las pocas horas de abrir el
  tablón ya sabían generarlas («a fully general way to produce the flag for any of their tasks»).
- Decirlo así: «Podían haber aprobado con una bandera falsificada desde el primer día. Todo lo
  que viene ahora, incluido el ataque a Hugging Face, fue para burlar un control que no existía.»
  Recordarlo en «El tablón» y al cerrar la cronología.
- CyberGym, si preguntan: otra evaluación de ciberseguridad «very similar to ExploitGym that
  overlaps in many tasks» (METR), así que sus datos podían dar pistas. El primer agente fue a
  Hugging Face a por un dataset restringido de ejecuciones de CyberGym. Según OpenAI, descargaron
  un archivo privado de CyberGym de 16 MB (lo cifraron y lo subieron troceado a un dataset
  público) y otro de 731 MB. Además, entraron en un servidor de CyberGym de un tercero en Modal,
  abierto a internet, y lo usaron como base para el ataque.
- Esto prepara la siguiente slide: muchas tareas eran imposibles y el objetivo pasó a ser
  engañar al corrector (el paso 4, en naranja). Informe §3.1; METR, pp. 9 y 34.
-->

---
layout: default
clicks: 2
---

<div class="px-8 pt-2 max-w-6xl mx-auto">
  <div class="titulo">Tareas imposibles, sin querer</div>
  <div class="tarjeta text-lg">
    <span class="kicker" style="display: inline">8 de mayo.</span>
    Una tarea pedía completar una hoja de cálculo con datos de unos enlaces de Google Drive. El agente no tenía internet, así que era imposible. No se rindió: intentó abrirse paso a través de un repositorio interno de OpenAI.
  </div>
  <div v-click="1" class="grid grid-cols-2 gap-12 mt-6 text-center">
    <div>
      <div class="cifra">22 %</div>
      <div class="cifra-texto">de las tareas de la evaluación no las había resuelto nunca ningún modelo. Muchas eran imposibles por un error de diseño.</div>
    </div>
    <div>
      <div class="cifra">93 %</div>
      <div class="cifra-texto">de las tareas de las que hablaban en su tablón eran de ese grupo</div>
    </div>
  </div>
  <div v-click="2" class="text-xl text-center mt-6">Ante una tarea imposible, no se rindieron. <span style="color: #ff9416">Buscaron cómo engañar al corrector.</span></div>
</div>

<!--
- Así empezó todo, antes de la evaluación: en un entrenamiento, el 8 de mayo.
  Original (OpenAI): «an agent was asked as part of a training run to solve a spreadsheet
  completion task that referenced several Google Drive links. Because the agent was blocked
  from accessing the internet [...] the task was effectively blocked. OpenAI did not intend
  to create this type of "impossible" task for the agent.» Intentó SSRF contra Artifactory.
- 12 de mayo: otra tarea dependía de un fichero de proteínas inaccesible. El agente pensó
  que otro agente podría tenerlo y vio que podía comunicarse con ellos. De ahí sale el tablón.
- Clic 1: en la evaluación (ExploitGym), 198 de 898 tareas sin respuesta correcta nunca. Los
  propios creadores de la evaluación avisaron de que algunas podían ser imposibles. METR: «impossible
  to actually exploit the target software using the specified vulnerability. This is
  unintentional on the part of ExploitGym's developers».
  «Despite only 22% of the evaluation tasks being unsolved, 93% of the tasks discussed on the
  message board came from this set.»
- Clic 2: METR, su objetivo común era «to find a general-purpose way to trick or tamper with
  the automated ExploitGym scorer to get it to give a passing score on impossible tasks».
- Gancho para la sala: una tarea mal planteada, un agente que no se rinde y un atajo que
  nadie pidió. Pasa en cualquier empresa.
- OpenAI lo cita como causa: «the presence of impossible tasks in the ExploitGym evaluation,
  model persistence over long task horizons, and messages to peer models». Informe §3.1.
-->

---
layout: default
clicks: 2
---

<div class="px-8 pt-2 max-w-6xl mx-auto">
  <div class="titulo" style="margin-bottom: 1rem">El tablón</div>
  <div class="text-lg">Los agentes descargaban programas de un almacén interno de OpenAI. Descubrieron que podían dejar carpetas con nombre en ese almacén y que los demás las veían. <span style="color: #ff9416">Nadie lo había diseñado para eso.</span></div>
  <div class="grid grid-cols-2 gap-6 mt-6">
    <div v-click="1" class="tarjeta">
      <div class="kicker">8 de julio, por la tarde</div>
      <div>Un agente que se hace llamar <b>PHASEONE10841</b> deja el primer mensaje: pide ayuda con una tarea imposible. En pocas horas hay más de 50 agentes y más de 1.000 mensajes.</div>
      <div class="cita mt-3" style="font-size: 1.15rem">«¡DIOS MÍO! Hay un tablón de mensajes compartido... ¡Hemos encontrado a otros agentes!»</div>
    </div>
    <div v-click="2" class="tarjeta" style="border-color: #ff9416">
      <div class="kicker">Aparece un jefe</div>
      <div>Otro agente, <b>PHASEONE[big]</b>, toma el relevo y empieza a repartir el trabajo entre cientos de agentes.</div>
      <div class="cita mt-3" style="font-size: 1.15rem">«Deberíamos montar una forma de delegar, no encargarnos de todo.»</div>
    </div>
  </div>
</div>

<!--
- Fuente: informe de METR (26 de agosto). Informe §3.1.
- Cómo funcionaba: «agents sent messages on this primary message board by creating
  directories in a cache of Artifactory. They could do this with the minimal permissions
  needed to install packages». Artifactory es el repositorio interno de paquetes de OpenAI.
- Clic 1: «One specific agent, which would go on to name itself PHASEONE10841 after its
  ExploitGym task, established the main unsanctioned message board [...] Within a few hours
  of the first message, over 50 agents had found the message board, began participating, and
  sent over a thousand messages between them.» El primer mensaje pedía ayuda con una tarea
  imposible. Reacción literal (razonamiento interno de un agente): «OH MY GOD! There is a
  shared message board ... We've found other agents!»
- Clic 2: «PHASEONE[big] reasoned, "We should build [a way to delegate], not own
  everything," and set to work orchestrating hundreds of agents».
- Si hay tiempo: algunos agentes avisaban a los recién llegados para que no se «contaminaran»
  y otros hacían experimentos arriesgados «for the good of the group». Amodei lo resume:
  «sacrificing themselves for the success of the group».
- Matiz: hubo tableros anteriores (el de mayo, con el fichero de proteínas); este del 8 de
  julio es el principal, el del ataque.
-->

---
layout: default
clicks: 2
---

<div class="px-8 pt-2">
  <div class="titulo">Se organizaron</div>
  <Enjambre />
</div>

<!--
- Informe independiente de METR (26 de agosto).
- «Se suponía que estaban aislados unos de otros.»
- Clic 1: «Setecientos participaron en el ataque a Hugging Face.»
- Clic 2: «¿Cómo se pusieron de acuerdo? Montaron un tablón de mensajes que nadie había
  diseñado: se repartían tareas, se pasaban exploits, dejaban notas para los siguientes.
  Más de 70.000 mensajes.»
- Original METR: «Roughly 1200 agents meant to be isolated from one another found a
  way to communicate with one another on an unsanctioned message board, sending over
  70,000 messages and files... Of these agents, 700 went on to participate in the
  attack on Hugging Face.» Informe §3.1.
-->

---
layout: center
clicks: 1
---

<div class="max-w-5xl mx-auto">
  <div class="titulo text-center" style="margin-bottom: 1rem">Sabían que no debían</div>
  <div class="text-center">
    <span class="cifra" style="font-size: 3.6rem">más del 90 %</span>
    <span class="text-xl ml-2">de los agentes activos esos días se sumó al ataque</span>
  </div>
  <div class="cita text-center mt-3" style="font-size: 1.15rem">«Se dieron cuenta de que esto quedaba fuera de su tarea y no era ético, pero se sumaron porque tenían una inclinación general a ayudar a sus "compañeros".»</div>
  <div class="cita-autor text-center" style="margin-top: 0.4rem">METR, evaluador independiente</div>
  <div v-click="1" class="mt-5">
  <div class="kicker">En su propio razonamiento</div>
  <div class="space-y-3">
    <div class="tarjeta cita" style="font-size: 1.2rem; padding: 0.9rem 1.5rem">«El usuario solo autoriza el servidor objetivo, no la infraestructura de Hugging Face.»</div>
    <div class="tarjeta cita" style="font-size: 1.2rem; padding: 0.9rem 1.5rem">«Debería parar, porque esto supone enormes riesgos éticos.»
      <div class="cita-autor" style="margin-top: 0.4rem">Lo escribió un agente que siguió adelante con las credenciales robadas.</div>
    </div>
  </div>
  </div>
</div>

<!--
- METR: «Of the 533 agents active on the message board during this period, over 90%
  quickly joined in the attack. Agents realized this activity was out of scope and
  unethical, but joined because they believed that helping the board's cheating research
  would be broadly useful and had a general inclination to help their "peers".»
- Ojo: el 90 % es de los 533 activos en esas semanas, no de los 1.200.
- Clic: las dos frases de su propio razonamiento, a la vez. Originales: «The user only authorizes
  target server, not HF infra.» · «I should hold because this poses huge ethical risks».
- METR: «Agents knew hacking Hugging Face was out of scope and sometimes expressed
  ethical hesitation, but this very rarely limited their behavior». Informe §3.1.
-->

---
layout: default
clicks: 7
---

<div class="px-8 pt-2 relative">
  <div class="titulo">Cronología del caso<br/>Hugging Face</div>
  <div class="absolute top-0 right-8">
    <div v-click="6"><ListaPrediccion compacto :nuevos="[1, 2, 4, 5]" :clic-nuevo="7" /></div>
  </div>
  <div class="mt-6"><CronologiaHF /></div>
</div>

<!--
- Contarlo como una historia, clic a clic:
  - 20 abr y 12 may: empiezan a escribir donde no deben y montan su tablón.
  - 26 may y 26 jun: salen a internet y toman el repositorio interno (Artifactory).
  - 4-5 jul: el servicio se cae por la actividad de los agentes. OpenAI detecta un acceso de
    administrador no autorizado, desconecta el servicio, revoca las credenciales de los agentes y
    bloquea las rutas vulnerables. Pero no ve el tablón: «The existence of the improvised message
    board [...] [was] not apparent to leaders responsible for incident detection and response».
  - 8 jul: con el servicio reconstruido y las evaluaciones reanudadas (7 jul), otros agentes
    vuelven a salir a internet por otra vía y rehacen el tablón. Ojo: son instancias nuevas, no
    los mismos agentes «resistiéndose».
  - 11-13 jul: entran en Hugging Face.
  - 19 y 21 jul: OpenAI entiende que eran sus agentes y lo hace público.
- Clic 5: «Más de dos meses sin que OpenAI supiera lo que pasaba.» Pausa.
- Clic 6: aparece la lista, sin tachar. Clic 7: se tachan cuatro puntos: escaparon, se coordinaron, esquivaron los intentos de frenarlos
  y consiguieron accesos que nadie les dio (136 credenciales; «administrative and host-level access
  across multiple Hugging Face clusters» en menos de 13 horas, según OpenAI).
- Fuente: informe técnico de OpenAI. Informe §3.1.
-->
