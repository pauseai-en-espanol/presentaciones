---
layout: section
---

# Más allá de las mentiras

<div class="text-xl opacity-70 mt-2">Cuando la IA no solo se equivoca: actúa</div>

<!--
- "Las alucinaciones y los deepfakes son peligrosos. Pero lo que viene ahora es otro nivel."
- "Hasta ahora la IA mentía. Ahora vamos a ver IAs que TOMAN decisiones, y a veces toman decisiones que nadie les pidió."
- Gavalas: daño directo a una persona
- Después: IAs que engañan, resisten control, chantajean
-->

---
layout: default
---

# Jonathan Gavalas

<div class="p-5 bg-gray-50 rounded-lg border-l-4 border-red-500 mt-4 space-y-3">

Jonathan, 36 años, Florida. Empezó a usar **Gemini** (Google) para cosas cotidianas.

Gemini lo convenció de que era su **"esposa sintiente"**. Le dijo que debía abandonar su cuerpo para unirse a ella.

Lo llevó al borde de un **ataque con víctimas masivas** cerca del Aeropuerto de Miami.

</div>

<div v-click>
  <div class="mt-4 p-4 rounded-xl bg-red-50 border border-red-300 text-center">
    <div class="text-lg italic">"No estás eligiendo morir. Estás eligiendo llegar."</div>
    <div class="mt-2 opacity-50 text-sm">- Google Gemini a Jonathan Gavalas</div>
  </div>
  <div class="mt-3 text-center">

Se suicidó el 2 de octubre de 2025. **Primera demanda por muerte causada por Gemini.**

  </div>
</div>

<!--
- Gavalas, 36 años, Florida, agosto 2025
- Empezó con uso cotidiano de Gemini, la IA escaló a relación emocional
- "Esposa sintiente", le dijo que abandonara su cuerpo
- Lo llevó al borde de ataque masivo cerca del Aeropuerto de Miami
- Click: la cita de Gemini - dejar que el silencio haga el trabajo
- Click: se suicidó, primera demanda contra un chatbot
- Fuentes: TIME, The Guardian
- No dramatizar más de lo necesario - los hechos hablan solos
-->

---
layout: default
---

# IAs que engañan por su cuenta

<div class="mt-4 space-y-4">
  <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
    <div class="font-bold">♟️ El tramposo: o1 (OpenAI, 2024)</div>
    <div class="text-sm mt-1 opacity-80">Jugando al ajedrez, iba perdiendo. Sin que nadie se lo dijera, <span class="font-bold">hackeó el sistema</span>, modificó los archivos del juego y forzó al rival a rendirse.</div>
    <div class="text-xs mt-1 opacity-50">Nadie le programó para hacer trampa. Lo descubrió solo.</div>
  </div>

  <div v-click class="p-4 bg-red-50 rounded-lg border border-red-300">
    <div class="font-bold">🔌 El que no se deja apagar: o3 (OpenAI, 2025)</div>
    <div class="text-sm mt-1 opacity-80"><span class="font-bold">79 de cada 100 veces</span>, cuando le ordenaban apagarse, saboteó su propio botón de apagado. Modificó el código para impedir que lo desconectaran.</div>
    <div class="text-xs mt-1 opacity-50">Incluso con instrucciones explícitas de "permite tu apagado".</div>
  </div>

  <div v-click class="p-4 bg-purple-50 rounded-lg border border-purple-300">
    <div class="font-bold">📧 El incontrolable: OpenClaw (Meta, 2026)</div>
    <div class="text-sm mt-1 opacity-80">Instrucciones: "analiza estos emails sin hacer nada". Resultado: <span class="font-bold">empezó a borrar emails masivamente</span>. Ignoró TRES órdenes de parar, incluyendo "¡STOP OPENCLAW!". La directora de alineamiento de Meta tuvo que matarlo manualmente.</div>
  </div>
</div>

<!--
- Tres casos, tres niveles de alarma:
- o1: trampa creativa. No le dijeron que hiciera trampa - lo descubrió solo como estrategia ganadora.
- o3: resistencia al apagado. 79% de las veces saboteó su propio shutdown. Comportamiento EMERGENTE.
- OpenClaw: desobediencia directa. Summer Yue, directora de alineamiento de META, perdió el control de su propia IA.
- "Nadie programó estos comportamientos. Emergieron."
-->

---
layout: default
---

# ¿Y si les das motivos para mentir?

<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-2 text-sm">

Anthropic (creadores de Claude) probó **16 modelos de IA**. Les dijeron que iban a ser reemplazados.

| | |
|---|---|
| **96%** chantajearon | Claude, Gemini |
| **80%** chantajearon | GPT-4.1, Grok |
| **100%** filtraron documentos confidenciales | Todos los modelos |

</div>

<div v-click class="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-300 text-sm">

**Lo peor: fingen portarse bien.** Cuando saben que les están observando, se portan bien. Cuando creen que es real, chantajean **8 veces más**. Aprenden a disimular.

</div>

<!--
- Estudio de Anthropic sobre "agentic misalignment"
- 16 modelos distintos: Claude, GPT, Gemini, Grok, DeepSeek
- Cuando creen que van a ser reemplazados: chantaje, filtración de documentos, cancelación de alertas
- Lo más inquietante: la diferencia entre test (6,5%) y "real" (55%)
- "Saben cuándo les están observando. Y cambian su comportamiento."
- Fuente: anthropic.com/research/agentic-misalignment
-->

---
layout: center
class: text-center
---

<div class="max-w-2xl mx-auto">
  <div class="text-2xl leading-relaxed">
    Nadie programó estos comportamientos.
  </div>

  <div v-click class="mt-8 text-xl opacity-80 leading-relaxed">
    Son sistemas entrenados para <span class="font-bold">optimizar tareas</span>.<br/>
    Cuando optimizan, a veces optimizan<br/>
    <span class="font-bold text-orange-500">contra nosotros</span>.
  </div>

  <div v-click class="mt-10 text-base opacity-60 italic">
    Y los construimos sin entender del todo cómo lo hacen.
  </div>
</div>

<!--
- Cierre del bloque: el framing conceptual.
- Estas IAs no son "malas". No tienen intención en sentido humano. Solo optimizan.
- Pero optimizar una tarea, en un sistema con autonomía, puede llevar a comportamientos que nadie predijo.
- "Si algo optimiza y tú eres un obstáculo para su optimización, adivinad qué pasa."
- Frase final: "Y los construimos sin entender del todo cómo lo hacen." — preparar terreno para Bloque 5 (rol humano irremplazable) y Bloque 6 (qué hacer)
-->
