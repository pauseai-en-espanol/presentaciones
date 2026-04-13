---
layout: section
---

# IA y salud: lo que os toca

<div class="text-xl opacity-70 mt-2">Vais a trabajar con estas herramientas. Necesitáis saber esto.</div>

<!--
- "Todo lo anterior afecta a todo el mundo. Pero lo que viene ahora os afecta especialmente a vosotros."
- "Vais a trabajar en farmacias y parafarmacias. La IA ya está ahí."
- Este bloque conecta directamente con su futura profesión
-->

---
layout: default
---

# La IA se entrena con datos. ¿Qué datos?

<div class="mt-4 grid grid-cols-2 gap-6">
  <div>
    <div class="space-y-3">
      <div class="p-3 bg-red-50 rounded-lg border border-red-200">
        <div class="text-3xl font-bold text-red-600">78%</div>
        <div class="text-sm">de los estudios genómicos (GWAS)<br/>se hicieron con <span class="font-bold">población europea</span></div>
      </div>
      <div v-click class="p-3 bg-red-50 rounded-lg border border-red-200">
        <div class="text-3xl font-bold text-red-600">80%</div>
        <div class="text-sm">de las imágenes en dermatología<br/>son de <span class="font-bold">piel clara</span> (Fitzpatrick I-III)</div>
      </div>
      <div v-click class="p-3 bg-red-50 rounded-lg border border-red-200">
        <div class="text-3xl font-bold text-red-600">40%</div>
        <div class="text-sm">participación femenina<br/>en <span class="font-bold">ensayos de cardiología</span></div>
      </div>
    </div>
  </div>

  <div v-click class="flex items-center">
    <div class="p-4 bg-orange-50 rounded-lg border border-orange-300">
      <div class="font-bold text-orange-600 mb-2">¿Qué significa esto?</div>
      <div class="text-sm">Si una IA de diagnóstico se entrena con datos de hombres blancos europeos, <span class="font-bold">funciona peor con cualquier otra persona</span>. No es neutral. Refleja los sesgos de sus datos.</div>
      <div class="text-sm mt-2">En farmacia: la dosificación, los efectos secundarios y las interacciones pueden variar por sexo, etnia y genética. <span class="font-bold">La IA no tiene en cuenta lo que no tiene en los datos.</span></div>
    </div>
  </div>
</div>

<!--
- 78% GWAS con europeos: los modelos genéticos son peores para el 85% de la población mundial
- 80% dermatología piel clara: una IA de detección de melanoma falla más en piel oscura
- 40% mujeres en cardiología: el infarto tiene síntomas diferentes en mujeres, pero la IA no lo aprende bien
- "En la farmacia vais a atender a TODO tipo de personas. La IA no fue entrenada para todas."
- Dato clave para ellos: la farmacogenómica varía por etnia. Una IA entrenada con datos sesgados da recomendaciones sesgadas.
-->

---
layout: default
---

# Caso real: UnitedHealth / nH Predict (2023)

<div class="p-5 bg-gray-50 rounded-lg border-l-4 border-red-500 mt-4">

UnitedHealth, la mayor aseguradora de EEUU, usó un algoritmo llamado **nH Predict** para decidir cuántos días de rehabilitación o residencia recibían los pacientes mayores.

De los pacientes que apelaron las decisiones del algoritmo, el **90% ganó su recurso**. El algoritmo se equivocaba constantemente.

<div v-click>

Pero UnitedHealth ordenó a sus empleados **seguir al algoritmo de todas formas**. Pacientes ancianos expulsados de rehabilitación antes de poder caminar.

</div>
</div>

<div v-click class="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-300 text-sm">

**Demanda colectiva** (noviembre 2023), investigación del Congreso de EEUU (2024). La misma empresa ya había sido pillada en 2019 con otro algoritmo que discriminaba pacientes negros.

</div>

<!--
- UnitedHealth / NaviHealth: algoritmo nH Predict
- Decidía cuántos días de post-acute care (rehab, nursing home) recibías
- 90% de apelaciones ganadas por pacientes - solo ~0,2% apelaban (Stat News, caso judicial nov. 2023)
- Pero la empresa instruyó a empleados a seguir el algoritmo igualmente
- Pacientes ancianos echados de centros de rehabilitación prematuramente
- Demanda colectiva noviembre 2023, investigación del Congreso 2024
- Patrón: misma empresa, 2019 discriminación racial, 2023 denegación de cuidados
- "Imaginad que un sistema así decide si vuestro paciente recibe su tratamiento. Y vosotros en la farmacia, ejecutando esa decisión."
- VERIFICAR: buscar fuente exacta (Stat News investigación, caso judicial)
-->

---
layout: default
---

# MegaSyn: de curar a matar en 6 horas

<div class="grid grid-cols-2 gap-6 mt-4">
  <div class="p-5 bg-green-50 rounded-lg border border-green-300">

**💊 Diseñado para**

Descubrir nuevos fármacos seguros. Un modelo de IA que predice toxicidad molecular para **evitar compuestos peligrosos**.

<span class="text-xs opacity-60">Collaborations Pharmaceuticals, 2022</span>

  </div>
  <div v-click class="p-5 bg-red-50 rounded-lg border border-red-300">

**☠️ Invertido para**

En lugar de "busca moléculas seguras", le dijeron "busca moléculas **lo más tóxicas posible**".

**6 horas → 40.000 moléculas potencialmente letales**

<span class="text-xs opacity-60">Incluyendo variantes de agentes nerviosos como el VX</span>

  </div>
</div>

<div v-click class="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-300 text-center text-sm">

La misma herramienta que puede descubrir el próximo antibiótico **puede diseñar el próximo arma bioquímica**. Esto se llama "uso dual".

</div>

<!--
- MegaSyn: caso real, publicado en Nature Machine Intelligence
- La empresa hacía drug discovery - buscaba fármacos seguros
- Los investigadores se preguntaron: "¿y si invertimos la función objetivo?"
- 6 horas. 40.000 moléculas especialmente tóxicas. Algunas similares al VX (agente nervioso prohibido).
- "La IA que puede descubrir vuestra próxima medicina puede diseñar el próximo veneno."
- Uso dual: la misma herramienta, dos direcciones opuestas
- Relevancia directa para farmacia: la IA farmacéutica no es inherentemente buena ni mala
-->

---
layout: default
---

# El empleo: hablemos claro

<div class="mt-4 space-y-4">
  <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
    <div class="text-sm opacity-50">Dario Amodei, CEO de Anthropic (creadores de Claude):</div>
    <blockquote class="mt-2 text-lg">
      "La IA eliminará el 50% de los puestos de trabajo junior de oficina en 1 a 5 años."
    </blockquote>
  </div>

  <div v-click class="grid grid-cols-2 gap-4">
    <div class="p-3 bg-red-50 rounded-lg text-center">
      <div class="text-2xl font-bold text-red-600">92 millones</div>
      <div class="text-xs opacity-70">empleos desplazados<br/>para 2030 (Foro Económico Mundial)</div>
    </div>
    <div class="p-3 bg-red-50 rounded-lg text-center">
      <div class="text-2xl font-bold text-red-600">-14%</div>
      <div class="text-xs opacity-70">contratación de jóvenes 22-25<br/>en sectores expuestos a IA (Anthropic)</div>
    </div>
  </div>

  <div v-click class="p-4 bg-green-50 rounded-lg border border-green-300 text-sm">

**Pero la farmacia tiene una ventaja.** El trato humano, la presencia física, el juicio clínico y la responsabilidad legal no se automatizan fácilmente. **Vuestra profesión es de las más resistentes, si os formáis bien.**

  </div>
</div>

<!--
- Amodei es el CEO de la empresa que hace Claude. No es un pesimista - es el que construye la IA.
- 92 millones de empleos (WEF): número brutal
- -14% contratación de jóvenes: el dato de Anthropic sobre "labor exposure" - les afecta directamente
- PERO: la farmacia es especial. Trato humano, presencia física, responsabilidad legal.
- "Una IA puede sugerir una dosis. No puede mirar al paciente a los ojos y decidir si está bien."
- Mensaje: no es "no habrá trabajo", es "el trabajo será diferente"
-->

---
layout: center
---

# El último filtro eres tú

<div class="mt-6 space-y-4 text-left max-w-2xl mx-auto">

- 🏥 Ya hay **dispensadores automáticos**, sistemas de verificación de interacciones por IA, y chatbots de salud en farmacias.

- ⚠️ La IA no sabe que no sabe. **No tiene dudas. No pide una segunda opinión.** No conoce al paciente que tenéis delante.

- 🧑‍⚕️ **Vosotros sí.** Un técnico de farmacia que sabe lo que habéis visto hoy es la diferencia entre un sistema que funciona y uno que daña.

</div>


<!--
- "Vais a ser técnicos de farmacia. Entre un algoritmo y un paciente, vais a estar VOSOTROS."
- La IA en farmacia ya existe: dispensadores automáticos, alertas de interacciones, chatbots
- Pero la IA no duda, no pregunta, no conoce al paciente
- VOSOTROS sí podéis hacer eso
- Mensaje empoderador: no estáis siendo reemplazados. Estáis siendo MÁS necesarios.
- "No os van a sustituir por una IA. Pero sí por alguien que sepa usarla Y cuestionarla."
-->
