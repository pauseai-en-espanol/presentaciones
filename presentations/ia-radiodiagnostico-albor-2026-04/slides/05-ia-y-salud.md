---
layout: section
---

# IA en imagen: lo que os toca

<div class="text-xl opacity-70 mt-2">Qué hace bien, qué hace mal, qué queda para vosotros</div>

<!--
- "Hemos visto cómo falla la IA en imagen. Ahora: ¿dónde funciona? ¿Y dónde aún no llega?"
- Este bloque conecta directamente con su trabajo día a día
- Volvemos a Hinton: su predicción era simplista. La realidad es más interesante.
-->

---
layout: default
---

# Volvamos a Hinton: ¿en qué tenía razón?

<div class="mt-4 grid grid-cols-2 gap-6">
  <div>
    <div class="text-lg mb-3 font-bold text-green-700">La IA sí funciona en...</div>
    <div class="space-y-2 text-sm">
      <div class="p-3 bg-green-50 rounded-lg border border-green-200">
        <div class="font-bold">Cribado mamográfico</div>
        <div class="opacity-80">Detección de lesiones en cáncer de mama. En algunos estudios iguala o mejora al radiólogo medio.</div>
      </div>
      <div v-click class="p-3 bg-green-50 rounded-lg border border-green-200">
        <div class="font-bold">Triaje de ictus en TC</div>
        <div class="opacity-80">Viz.ai, RapidAI: detectan oclusión de grandes vasos en segundos, avisan al neurólogo.</div>
      </div>
      <div v-click class="p-3 bg-green-50 rounded-lg border border-green-200">
        <div class="font-bold">Nódulos pulmonares</div>
        <div class="opacity-80">TC de tórax. Medición y seguimiento automáticos.</div>
      </div>
      <div v-click class="p-3 bg-green-50 rounded-lg border border-green-200">
        <div class="font-bold">Retinopatía diabética</div>
        <div class="opacity-80">IDx-DR: primera IA autónoma aprobada por la FDA en 2018.</div>
      </div>
    </div>
  </div>

  <div v-click="4" class="flex items-center justify-center">
    <div class="p-5 bg-orange-50 rounded-lg border border-orange-200 max-w-sm">
      <div class="text-3xl font-bold text-orange-600">+800</div>
      <div class="text-sm mt-2 opacity-80">productos de IA aprobados por la FDA para uso clínico.</div>
      <div class="text-sm mt-2 opacity-80"><span class="font-bold">La mayoría son de radiología.</span></div>
      <div class="text-xs opacity-60 mt-3 italic">Datos 2025</div>
    </div>
  </div>
</div>

<!--
- Hinton no se equivocó del todo: la IA SÍ entró en imagen médica.
- Repasar las áreas una por una
- Mamografía: DeepMind 2020, varios estudios con resultados mixtos pero prometedores
- Viz.ai / RapidAI: triaje de ictus, se usa en cientos de hospitales
- Nódulos: herramientas de CAD muy establecidas
- IDx-DR: primer dispositivo de IA autónoma aprobado por la FDA (2018), retinopatía diabética
- Click final: 800+ herramientas FDA-approved. La mayoría radiología. Es la especialidad más "invadida" por IA.
- "No es que la IA no sirva. Es que no hace lo que Hinton pensaba que haría."
- TODO source: FDA list of AI/ML-enabled medical devices (actualizar fecha y cifra)
-->

---
layout: default
---

# ...y ¿en qué se equivocó?

<div class="mt-4">
  <div class="text-lg mb-3 font-bold text-red-700">Lo que la IA <span class="italic">aún no</span> hace bien:</div>

  <div class="grid grid-cols-2 gap-3">
    <div class="p-3 bg-red-50 rounded-lg border border-red-200">
      <div class="font-bold text-sm">Integrar contexto clínico</div>
      <div class="text-xs opacity-80 mt-1">La historia del paciente, síntomas, medicación, antecedentes familiares. La IA ve la imagen. Vosotros veis al paciente.</div>
    </div>
    <div v-click class="p-3 bg-red-50 rounded-lg border border-red-200">
      <div class="font-bold text-sm">Detectar hallazgos incidentales</div>
      <div class="text-xs opacity-80 mt-1">Lo que se ve "de pasada" fuera del protocolo: un nódulo tiroideo en una TC cervical, una masa ósea inesperada.</div>
    </div>
    <div v-click class="p-3 bg-red-50 rounded-lg border border-red-200">
      <div class="font-bold text-sm">Adaptarse a pacientes atípicos</div>
      <div class="text-xs opacity-80 mt-1">Anatomías variantes, prótesis, pediatría, obesidad extrema. Fuera de sus datos de entrenamiento, falla en silencio.</div>
    </div>
    <div v-click class="p-3 bg-red-50 rounded-lg border border-red-200">
      <div class="font-bold text-sm">Decir "esto no me cuadra"</div>
      <div class="text-xs opacity-80 mt-1">Una máquina descalibrada, un artefacto sutil, una posición mal hecha. La IA da una respuesta. Vosotros levantáis la mano.</div>
    </div>
    <div v-click class="p-3 bg-red-50 rounded-lg border border-red-200">
      <div class="font-bold text-sm">Hablar con el paciente</div>
      <div class="text-xs opacity-80 mt-1">Explicar, tranquilizar, recolocar, pedir que aguante la respiración. El componente humano de vuestro trabajo.</div>
    </div>
    <div v-click class="p-3 bg-red-50 rounded-lg border border-red-200">
      <div class="font-bold text-sm">Responsabilidad legal y ética</div>
      <div class="text-xs opacity-80 mt-1">Ninguna IA firma un informe. Ninguna asume la decisión. El humano sigue siendo responsable.</div>
    </div>
  </div>
</div>

<!--
- Aquí está el corazón del mensaje: qué queda para vosotros
- Repasar cada punto despacio, dar ejemplos de su profesión
- "Integrar contexto": la IA de mamografía no sabe que esta paciente acaba de perder 30kg
- "Hallazgos incidentales": el radiólogo ve cosas fuera del motivo de la prueba. La IA mira solo lo que se le ha dicho.
- "Pacientes atípicos": el niño con escoliosis severa, el paciente obeso en RM, el anciano con múltiples implantes
- "No me cuadra": vuestro superpoder. La IA no duda.
- "Hablar con el paciente": el aspecto humano del trabajo. Imposible automatizar bien (hoy).
- "Responsabilidad": nadie demanda a un algoritmo
-->

---
layout: default
---

# Lo que la IA no ve... y vosotros sí

<div class="mt-4">
  <div class="p-5 bg-gray-50 rounded-lg border-l-4 border-orange-500">
    <div class="text-base italic opacity-90">
      El técnico de imagen es quien <span class="font-bold">ve al paciente entrar</span>,
      <span class="font-bold">posiciona</span> el cuerpo para que la máquina pueda ver,
      <span class="font-bold">detecta</span> cuando algo no va bien en la adquisición,
      y <span class="font-bold">avisa</span> cuando nota algo fuera del protocolo.
    </div>
  </div>

  <div v-click class="mt-6 grid grid-cols-2 gap-4">
    <div class="p-3 bg-white rounded-lg border border-gray-300">
      <div class="text-sm font-bold text-orange-600">Antes de la imagen</div>
      <div class="text-xs opacity-80 mt-1">
        Preparación del paciente, contrastes, seguridad radiológica, posicionamiento correcto, protocolo adecuado al caso clínico
      </div>
    </div>
    <div class="p-3 bg-white rounded-lg border border-gray-300">
      <div class="text-sm font-bold text-orange-600">Durante</div>
      <div class="text-xs opacity-80 mt-1">
        Monitorización del paciente, detección de artefactos, calidad de imagen, seguridad, comunicación
      </div>
    </div>
    <div class="p-3 bg-white rounded-lg border border-gray-300">
      <div class="text-sm font-bold text-orange-600">Después</div>
      <div class="text-xs opacity-80 mt-1">
        Post-proceso, reconstrucciones, envío al PACS, detección de incidencias, comunicación con el radiólogo
      </div>
    </div>
    <div class="p-3 bg-white rounded-lg border border-gray-300">
      <div class="text-sm font-bold text-orange-600">Siempre</div>
      <div class="text-xs opacity-80 mt-1">
        Trato humano. Mirar a los ojos. Notar que algo no va bien. Pedir ayuda. Dudar.
      </div>
    </div>
  </div>
</div>

<!--
- Vuestro trabajo es mucho más que "apretar botones"
- Recorrido cronológico del proceso: antes / durante / después / siempre
- Cada una de estas cosas la IA no sabe hacer (o hace mal)
- "Cuando alguien os diga 'la IA os va a sustituir', preguntadle: ¿me va a sustituir posicionando al paciente? ¿notando un artefacto? ¿calmando a alguien claustrofóbico? ¿hablando con el radiólogo?"
-->

---
layout: default
---

# La otra cara: uso dual en imagen

<div class="mt-4 space-y-3">
  <div class="p-4 bg-red-50 rounded-lg border border-red-200">
    <div class="font-bold">🧠 Reconstrucción facial desde resonancia cerebral</div>
    <div class="text-sm opacity-80 mt-1">Modelos generativos pueden reconstruir la cara del paciente a partir de una RM cerebral. Anonimizar "borrando el nombre" ya no basta.</div>
    <div class="text-xs opacity-60 mt-1">Schwarz et al., NEJM 2019</div>
  </div>

  <div v-click class="p-4 bg-red-50 rounded-lg border border-red-200">
    <div class="font-bold">🔓 Deanonimización de datasets públicos</div>
    <div class="text-sm opacity-80 mt-1">Bases de datos de imagen médica "anónimas" han sido reidentificadas cruzándolas con otros datos. Cara, edad, patología: huella digital.</div>
  </div>

  <div v-click class="p-4 bg-red-50 rounded-lg border border-red-200">
    <div class="font-bold">🖼️ Adversarial examples</div>
    <div class="text-sm opacity-80 mt-1">Cambios mínimos, invisibles al ojo humano, pueden hacer que una IA clasifique un melanoma como lunar benigno. Atacable.</div>
    <div class="text-xs opacity-60 mt-1">Finlayson et al., Science 2019</div>
  </div>

  <div v-click class="mt-5 p-4 bg-orange-50 rounded-lg border border-orange-300 text-center text-base">
    La imagen médica no es neutral. <span class="font-bold">Tiene identidad, valor, vulnerabilidades.</span>
  </div>
</div>

<!--
- Uso dual: la IA que mejora la imagen también puede atacarla, revelar al paciente, o engañar al diagnóstico.
- Schwarz et al. NEJM 2019: reconstrucción facial desde MRI
- Deanonimización: caso general, múltiples papers
- Finlayson et al. Science 2019: "Adversarial attacks on medical machine learning" - pueden engañar sistemas de clasificación de melanoma
- "Vais a manejar datos que son más identificables de lo que pensáis. Las leyes de protección de datos se quedan cortas."
- Relevancia para ellos: no compartir imágenes por WhatsApp, no usar LLMs con datos reales, no subir a herramientas gratuitas
- TODO source: confirmar referencias exactas
-->

---
layout: center
---

# El último filtro eres tú

<div class="mt-6 space-y-4 text-left max-w-2xl mx-auto">

- 🏥 La IA **ya está** en los PACS, en los mamógrafos, en las TC de urgencias. Vais a convivir con ella a diario.

- ⚠️ Pero la IA **no duda**. No sabe qué no sabe. No conoce a vuestro paciente.

- 🧑‍⚕️ **Vosotros sí.** Un técnico que sabe lo que habéis visto hoy es la diferencia entre una máquina bien usada y un error silencioso.

</div>

<div v-click class="mt-8 text-center text-xl font-bold text-orange-500 max-w-2xl mx-auto">
  No os van a sustituir por una IA.<br/>
  <span class="font-normal opacity-80 text-base">Os van a sustituir por alguien que sepa usarla Y cuestionarla.</span>
</div>

<!--
- Cierre del bloque: mensaje empoderador, sin tranquilidad falsa
- La IA ya convive con ellos. Punto.
- Lo que importa es saber QUÉ hace bien y QUÉ hace mal. Hoy lo saben.
- La frase final es clave: "no os sustituye la IA, os sustituye quien la sabe manejar mejor que vosotros"
- Transición al Bloque 6: "¿Qué podéis hacer?"
-->
