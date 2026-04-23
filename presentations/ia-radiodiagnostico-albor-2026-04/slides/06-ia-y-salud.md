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
layout: center
---

# El último filtro eres tú

<div class="mt-6 space-y-4 text-left max-w-2xl mx-auto">

- 🏥 La IA **ya está** en los PACS, en los mamógrafos, en las TC de urgencias. Vais a convivir con ella a diario.

- ⚠️ Pero la IA **no duda**. No sabe qué no sabe. No conoce a vuestro paciente.

- 🧑‍⚕️ **Vosotros sí.** Un técnico que sabe lo que habéis visto hoy es la diferencia entre una máquina bien usada y un error silencioso.

</div>

<!--
- Cierre del bloque: mensaje empoderador, sin tranquilidad falsa
- La IA ya convive con ellos. Punto.
- Lo que importa es saber QUÉ hace bien y QUÉ hace mal. Hoy lo saben.
- Transición al Bloque 7: "¿Qué podéis hacer?"
-->
