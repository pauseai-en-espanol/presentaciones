---
layout: section
---

# Cuando la IA se equivoca en imagen

<div class="text-xl opacity-70 mt-2">Y lo hace con la misma confianza con la que acierta</div>

<!--
- Pivote: hasta ahora hemos hablado de IA en general. Ahora entramos en vuestro terreno.
- "La IA en imagen médica es de las áreas más avanzadas. Y también de las que más fallan en silencio."
-->

---
layout: default
---

# El logo del hospital

<div class="mt-4 grid grid-cols-2 gap-8">
  <div>
    <div class="text-lg mb-3">Zech et al., 2018</div>
    <div class="space-y-3 text-base">
      <div>Una IA aprendió a detectar <span class="font-bold">neumonía</span> en radiografías de tórax con alta precisión.</div>
      <div>Al analizar qué miraba la red, descubrieron algo incómodo.</div>
      <div v-click="1" class="p-3 bg-red-50 rounded border border-red-200">
        <div class="font-bold text-red-700">No miraba los pulmones.</div>
        <div class="text-sm opacity-80 mt-1">Miraba el <span class="font-bold">logo del hospital pediátrico</span> en la esquina de la placa.</div>
      </div>
    </div>
  </div>

  <div v-click="1" class="flex items-center justify-center">
    <div class="p-5 bg-gray-50 rounded-lg border border-gray-200 max-w-sm">
      <div class="text-sm opacity-80 leading-relaxed">
        Las placas del hospital pediátrico tenían más neumonías.<br/><br/>
        La IA aprendió el atajo:<br/>
        <span class="font-mono">"¿Logo pediátrico? → Neumonía"</span>.<br/><br/>
        <span class="opacity-70">Dentro de ese hospital, precisión alta.</span><br/>
        <span class="font-bold">En otro hospital sin el logo: se desplomó.</span>
      </div>
    </div>
  </div>
</div>

<div v-click="2" class="mt-6 text-center text-lg font-bold text-orange-500">
  A esto se le llama <span class="italic">shortcut learning</span>.<br/>
  <span class="font-normal opacity-70 text-base">Aprender el atajo, no la tarea.</span>
</div>

<!--
- Caso clásico de shortcut learning: Zech et al., PLOS Medicine 2018
- La IA no aprendió a ver neumonía. Aprendió a reconocer de qué hospital venía la imagen.
- Click 1: el reveal — la IA no miraba lo que creíamos + explicación del atajo (ambos a la vez)
- Punto clave: con los datos del propio hospital pediátrico, las métricas parecían buenas. Solo al validarla externamente se descubrió el atajo.
- Click 2: el nombre técnico — shortcut learning.
- "Cuando validáis una IA solo con datos del mismo sitio donde la entrenasteis, podéis estar midiendo cualquier cosa menos lo que creéis."
- TODO source: Zech JR et al., PLOS Medicine 2018, "Variable generalization performance of a deep learning model..."
-->

---
layout: default
---

# Sesgo invisible: no todos los pacientes son iguales para la IA

<div class="mt-4">
  <div class="text-lg mb-2">Seyyed-Kalantari et al., <span class="font-mono text-sm opacity-70">Nature Medicine 2021</span></div>

  <div class="p-4 bg-gray-50 rounded-lg">
    <div class="text-base">Auditaron las IAs de Rx tórax más usadas en EE.UU. Todas aprobadas. Todas "funcionando bien" según sus métricas.</div>
  </div>

  <div v-click class="mt-5 grid grid-cols-3 gap-3 text-center">
    <div class="p-4 bg-red-50 rounded-lg border border-red-200">
      <div class="text-2xl font-bold text-red-600">↑ error</div>
      <div class="text-xs opacity-80 mt-1">en pacientes<br/><span class="font-bold">negros</span></div>
    </div>
    <div class="p-4 bg-red-50 rounded-lg border border-red-200">
      <div class="text-2xl font-bold text-red-600">↑ error</div>
      <div class="text-xs opacity-80 mt-1">en<br/><span class="font-bold">mujeres</span></div>
    </div>
    <div class="p-4 bg-red-50 rounded-lg border border-red-200">
      <div class="text-2xl font-bold text-red-600">↑ error</div>
      <div class="text-xs opacity-80 mt-1">en pacientes de<br/><span class="font-bold">renta baja</span></div>
    </div>
  </div>

  <div v-click class="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
    <div class="text-base">
      Las IAs <span class="font-bold">infradiagnosticaban</span> sistemáticamente a estos grupos.
    </div>
    <div class="text-sm opacity-80 mt-2">No por mala fe. Porque estaban entrenadas con datos donde esos pacientes estaban infrarrepresentados o peor anotados.</div>
  </div>
</div>

<!--
- Seyyed-Kalantari et al., Nature Medicine 2021: "Underdiagnosis bias of artificial intelligence algorithms applied to chest radiographs"
- La IA es un espejo de los datos. Datos sesgados → IA sesgada.
- En imagen, esto es especialmente grave porque el sesgo es invisible para quien lee el informe.
- "Si la IA dice 'normal' en una mujer negra y el hospital confía, la enfermedad queda sin ver."
- Punto pedagógico: la precisión global (accuracy) puede ser alta y el sesgo demográfico enorme. La métrica engaña.
- TODO source: Seyyed-Kalantari L et al., Nature Medicine 2021
-->

---
layout: center
class: text-center
---

<div class="max-w-2xl mx-auto">
  <div class="text-3xl font-bold leading-tight">
    Una IA convencida<br/>nunca dice "no sé".
  </div>

  <div v-click class="mt-8 text-xl opacity-80">
    Sus errores llegan<br/>con la misma voz segura que sus aciertos.
  </div>

  <div v-click class="mt-10 text-2xl font-bold text-orange-500">
    Vosotros sí podéis decir "no sé".<br/>
    <span class="font-normal text-lg opacity-80">Y eso, hoy, es un superpoder.</span>
  </div>
</div>

<!--
- Cierre del bloque: la idea central.
- La IA actual no cuantifica bien su incertidumbre. Da respuestas seguras cuando no sabe.
- Un humano entrenado puede dudar, pedir una segunda opinión, repetir la placa. Una IA no.
- "Esa capacidad vuestra de decir 'esto no me cuadra' es lo que la máquina AÚN no tiene."
- Transición natural al bloque 4: "cuando la IA hace daño (no solo en imagen, en general)"
-->
