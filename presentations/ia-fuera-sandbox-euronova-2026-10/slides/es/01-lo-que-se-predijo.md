---
layout: default
---

<div class="grid grid-cols-5 gap-10 items-center max-w-6xl mx-auto pt-6">
  <div class="col-span-3">
    <ListaPrediccion />
  </div>
  <div class="col-span-2">
    <div class="pregunta" style="font-size: 2.4rem">¿Cuáles de estas creéis que ya han pasado?</div>
  </div>
</div>

<!--
- «Durante años esto se discutía en artículos y congresos. En las pruebas ya se
  veían cosas raras, pero los modelos no eran lo bastante capaces como para que importara.»
- Pregunta abierta: que la sala diga cuáles en voz alta. Recoger algunas respuestas. No dar la respuesta.
- «Este verano ha cambiado. Vamos a ir tachando.»
-->

---
layout: center
clicks: 1
---

<div class="max-w-5xl mx-auto">
  <div class="titulo text-center">Qué es un agente</div>
  <div class="grid grid-cols-2 gap-10 mt-4">
    <div class="tarjeta">
      <div class="text-2xl font-bold mb-4" style="font-family: 'Saira Condensed', sans-serif">UN CHATBOT</div>
      <div class="space-y-3 text-lg">
        <div><span style="color: #ff9416">1.</span> Le preguntas.</div>
        <div><span style="color: #ff9416">2.</span> Te contesta con texto.</div>
        <div><span style="color: #ff9416">3.</span> Tú decides qué hacer.</div>
      </div>
    </div>
    <div v-click="1" class="tarjeta" style="border-color: #ff9416">
      <div class="text-2xl font-bold mb-4" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">UN AGENTE</div>
      <div class="space-y-3 text-lg">
        <div><span style="color: #ff9416">1.</span> Le das un objetivo.</div>
        <div><span style="color: #ff9416">2.</span> Decide el siguiente paso.</div>
        <div><span style="color: #ff9416">3.</span> Lo hace: navega, ejecuta código, usa contraseñas, envía correos, paga.</div>
        <div><span style="color: #ff9416">4.</span> Mira el resultado y vuelve al paso 2, hasta terminar.</div>
      </div>
    </div>
  </div>
  <div v-click="1" class="text-center text-2xl mt-10">Puede dar cientos de pasos <span style="color: #ff9416">sin que nadie apruebe cada uno</span>.</div>
</div>

<!--
- Treinta segundos, para quien no lo tenga claro.
- Partir de lo que conocen: casi todos han usado ChatGPT. Eso es un chatbot.
- Clic: el agente trabaja en bucle y actúa en el mundo con vuestras herramientas y permisos.
- Muchos en la sala ya los usan o los venden.
-->
