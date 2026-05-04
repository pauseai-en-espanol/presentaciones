---
layout: center
---

<!--
Beat 1, Qué es Mythos (8 min). Después del minimalismo cinematográfico
del Beat 0, este beat es modo pedagógico: orientación, masa fáctica,
concreto antes que agregado. NO introducir frame de asimetría aquí.

Beat 1 abre directamente con el bug concreto, sin slide intro repetitivo.
La voz hace el puente del Beat 0 a este beat antes de mostrar la slide.
-->

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    CVE-2026-4747
  </div>
  <div class="text-6xl font-black mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416; line-height: 1.05">
    Un fallo de 17 años<br/>en FreeBSD
  </div>
  <div class="space-y-4 text-xl leading-relaxed" style="font-family: 'Montserrat', sans-serif">
    <div>
      Está en <span style="color: #ff9416; font-weight: 600">NFS</span>,
      el servicio que comparte ficheros por red.
    </div>
    <div>
      Permite tomar control completo del servidor,
      <span class="font-semibold">root, sin autenticación</span>,
      a cualquier atacante con acceso de red al servicio.
    </div>
    <div class="opacity-80">
      Bajo código que millones de servidores ejecutan desde 2009.
    </div>
    <div class="mt-8 text-2xl font-semibold" style="color: #ff9416">
      El descubridor no fue una persona.
    </div>
  </div>
</div>

<!--
VOZ:
[Antes de cambiar de slide, puente desde la pregunta del Beat 0]

"Para entender qué hace Mythos, vamos a empezar por lo más concreto que Anthropic
ha publicado sobre él."

[Cambio de slide al CVE-2026-4747]

"Anthropic dice que su modelo encontró y explotó autonomamente una vulnerabilidad
de 17 años en FreeBSD. Está en NFS, el servicio que comparte ficheros por red.
La vulnerabilidad permite tomar control completo del servidor, root, sin autenticación,
a cualquier atacante con acceso de red al servicio. Bajo código que millones de servidores
ejecutan desde 2009.

CVE-2026-4747.

El descubridor no fue una persona."

[Pausa de 2 segundos]

"Esto es un ejemplo concreto. Veamos los números agregados."

NOTAS:
- Precisión técnica: NFS no necesariamente expuesto a internet. "Acceso de red al servicio".
- CVE público, verificable.
- Si la sala pide más detalle técnico, derivar a Q&A.
- ~2 minutos.
-->

---
layout: center
class: text-center
---

<div class="max-w-6xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-4 text-center" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Firefox 147, datos de Anthropic
  </div>
  <div class="grid grid-cols-2 gap-10 items-center">
    <div>
      <img src="/fotos/chart-firefox147.png" class="w-full rounded-lg shadow-2xl bg-white p-3" />
      <div class="text-xs opacity-50 mt-2 text-center" style="font-family: 'Montserrat', sans-serif">
        Anthropic, system card §3.3.3
      </div>
    </div>
    <div class="text-center">
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        Mythos
      </div>
      <div style="font-size: 8rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        181
      </div>
      <div class="text-base opacity-70 mt-2" style="font-family: 'Montserrat', sans-serif">
        exploits funcionales
      </div>
      <div class="mt-8 text-2xl opacity-90" style="font-family: 'Roboto Slab', serif">
        Opus 4.6: <span class="font-bold" style="color: #94a3b8">2</span>
      </div>
      <div class="mt-8 text-sm opacity-50 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Mismo entorno.<br/>50 categorías de fallo.<br/>250 intentos totales.
      </div>
    </div>
  </div>
</div>

<!--
VOZ:
"Anthropic probó a sus tres últimos modelos contra las mismas vulnerabilidades de
Firefox 147. Mismo entorno, mismo número de intentos. La gráfica de la izquierda
es la suya, del system card."

[Pausa breve, dejar que la sala lea la gráfica]

"Sonnet 4.6: cuatro coma cuatro por ciento de éxito. Opus 4.6, el modelo anterior:
cero coma ocho por ciento. Mythos: ochenta y cuatro por ciento. En cifras absolutas:
ciento ochenta y un exploits funcionales contra dos."

[Pausa de 2 segundos para que la sala procese]

"Casi cien veces más. No es una mejora gradual, es un escalón."

NOTAS:
- Gráfica de Anthropic + cifra grande del 181, formato dual.
- La cifra "181" es lo que la sala se lleva a casa. La gráfica es contexto técnico.
- Comprobar en pnpm dev que el chart se ve nítido (PNG bg blanco).
-->

---
layout: center
class: text-center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Firefox 150, Mozilla, fuente independiente
  </div>
  <div class="grid grid-cols-2 gap-12 items-center mt-8">
    <div>
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        Con Mythos
      </div>
      <div style="font-size: 9rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        271
      </div>
      <div class="text-base opacity-70 mt-2" style="font-family: 'Montserrat', sans-serif">
        vulnerabilidades parcheadas
      </div>
    </div>
    <div>
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        Con Opus 4.6 (Firefox 148)
      </div>
      <div style="font-size: 9rem; line-height: 1; font-weight: 900; color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        22
      </div>
      <div class="text-base opacity-70 mt-2" style="font-family: 'Montserrat', sans-serif">
        bugs de seguridad
      </div>
    </div>
  </div>
  <div class="mt-10 text-base opacity-70 max-w-2xl mx-auto" style="font-family: 'Roboto Slab', serif; font-style: italic">
    Mozilla pre-identificó y parcheó 271 fallos antes del lanzamiento de Firefox 150.
  </div>
</div>

<!--
VOZ:
"Y ese dato no viene solo de Anthropic. Mozilla, esta misma semana, el 21 de abril,
publicó que con acceso a Mythos había pre-identificado y parcheado 271 vulnerabilidades
en su versión de Firefox antes de lanzarla. Doce veces más que con el modelo anterior.
Con Opus 4.6, hace dos meses, encontraron 22."

[Pausa de 1 segundo]

"Misma fuente, Mozilla, confirmando la magnitud que reportó Anthropic. Independiente."

NOTAS:
- Énfasis en "fuente independiente". Esto es lo que blinda contra "fear-based marketing".
- 21 de abril es absoluto, no relativo. Si la charla es la semana siguiente, "esta misma
  semana" se mantiene válido. Si es más tarde, ajustar.
-->

---
layout: center
---

<div class="max-w-6xl mx-auto px-8">
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Y eso es la punta del iceberg
  </div>
  <div class="grid grid-cols-2 gap-10 items-center">
    <div>
      <div class="text-xs uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
        CyberGym, vulnerabilidades reales en código abierto
      </div>
      <img src="/fotos/chart-cybergym.png" class="w-full rounded-lg shadow-2xl bg-white p-3" />
      <div class="text-xs opacity-50 mt-2" style="font-family: 'Montserrat', sans-serif">
        Anthropic, system card §3.3.2 · 1.507 tareas
      </div>
    </div>
    <div class="space-y-6 text-lg" style="font-family: 'Montserrat', sans-serif">
      <div class="flex items-baseline gap-4">
        <div class="text-3xl font-black flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; min-width: 8rem">
          miles
        </div>
        <div class="opacity-90">
          de zero-days identificados en infraestructura crítica.
        </div>
      </div>
      <div class="flex items-baseline gap-4">
        <div class="text-3xl font-black flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; min-width: 8rem">
          10 h+
        </div>
        <div class="opacity-90">
          de un experto humano: tiempo estimado
          para resolver un cyber-range corporativo.
          <span class="opacity-70">Mythos lo resolvió end-to-end. Solo.</span>
        </div>
      </div>
      <div class="pt-4 mt-4 border-t border-white/10 text-base opacity-80" style="font-family: 'Roboto Slab', serif; font-style: italic">
        Anthropic dice explícitamente que las evaluaciones existentes
        ya no miden a estos modelos.
      </div>
    </div>
  </div>
</div>

<!--
VOZ:
"Y hay más. A la izquierda tenéis CyberGym, un benchmark de mil quinientas
vulnerabilidades reales en código abierto. Anthropic mide a sus modelos contra
ellas. La progresión es visible: Opus 4.5 medio. Sonnet 4.6 algo más. Opus 4.6
ahí mismo. Y Mythos, ochenta y tres por ciento, claramente por delante.

En la página de Glasswing, Anthropic dice que Mythos ha identificado miles de
zero-days en infraestructura crítica.

Y en pruebas externas, Mythos completó autonomamente un cyber-range corporativo,
una simulación de ataque a una empresa, que se estima en más de 10 horas
de trabajo de un experto humano. Primer modelo en lograrlo."

[Pausa de 1 segundo]

"Anthropic mismo dice, en el system card, que las evaluaciones que tenían ya no
miden a este modelo."

NOTAS:
- CyberGym muestra progresión clara, no saturación. Es el chart correcto.
- (Cybench se quitó porque estaba ya saturado en Opus 4.6, no se distinguía a Mythos.)
- 10h+ es el dato cuantificable que más pega, tiempo humano comparable.
- ~1.5 minutos.
-->

---
layout: center
class: text-center
---

<div class="max-w-4xl mx-auto px-8">
  <div class="text-2xl opacity-70 mb-8" style="font-family: 'Montserrat', sans-serif">
    Anthropic, en la página oficial de Mythos:
  </div>
  <blockquote class="text-4xl leading-snug font-bold pl-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416; text-align: left">
    "We do not plan to make<br/>
    Mythos Preview<br/>
    <span style="color: #ff9416">generally available</span>."
  </blockquote>
  <div class="mt-8 text-base opacity-50 text-left pl-6" style="font-family: 'Montserrat', sans-serif">
    red.anthropic.com/2026/mythos-preview/
  </div>
</div>

<!--
VOZ:
"Y aquí viene la decisión que hace esta historia distinta de cualquier otro
lanzamiento de IA frontier."

[Pausa, lectura del slide]

"Cito verbatim: 'No tenemos planes de hacer Mythos Preview de disponibilidad general'.
Esto es un lab frontier diciendo, sobre el modelo más capaz que han construido,
que no sale al mercado."

NOTAS:
- "Verbatim" otra vez. Este es un patrón que está construyendo confianza con la sala:
  cuando cito, leo literalmente.
- Carga retórica enorme. Dejar respirar.
- ~30 segundos.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-3xl font-bold mb-3" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    En su lugar: Project Glasswing
  </div>
  <div class="text-base opacity-70 mb-6" style="font-family: 'Montserrat', sans-serif">
    Despliegue defensivo restringido a 12 partners de lanzamiento públicos
    <span class="opacity-90">+ ~40 organizaciones adicionales no listadas públicamente.</span>
  </div>
  <div class="grid grid-cols-3 gap-x-8 gap-y-2 text-lg" style="font-family: 'Montserrat', sans-serif">
    <div class="opacity-90">Amazon Web Services</div>
    <div class="opacity-90">Anthropic</div>
    <div class="opacity-90">Apple</div>
    <div class="opacity-90">Broadcom</div>
    <div class="opacity-90">Cisco</div>
    <div class="opacity-90">CrowdStrike</div>
    <div class="opacity-90">Google</div>
    <div class="opacity-90">JPMorgan Chase</div>
    <div class="opacity-90">Linux Foundation</div>
    <div class="opacity-90">Microsoft</div>
    <div class="opacity-90">NVIDIA</div>
    <div class="opacity-90">Palo Alto Networks</div>
  </div>
  <div class="mt-8 pt-6 border-t border-white/10 text-base opacity-70 max-w-3xl" style="font-family: 'Montserrat', sans-serif">
    + huella digital criptográfica de cada vulnerabilidad,
    prueba que las conocen sin tener que revelar qué son hasta que se parchen.
  </div>
</div>

<!--
VOZ:
"En su lugar, Anthropic distribuye Mythos a través de un programa que llaman
Project Glasswing. Doce partners de lanzamiento, los grandes nombres del sector
tecnológico estadounidense más JPMorgan Chase. Más unas cuarenta organizaciones
adicionales que Anthropic no ha hecho públicas.

Y para no revelar las vulnerabilidades antes de parchearlas, publican una huella
digital criptográfica de cada una, una firma única que prueba que las conocen
sin tener que decir qué son."

[Pausa de 1 segundo]

NOTAS:
- Lista de partners SIN comentar todavía. Eso es Beat 5.
- En esta slide la sala ve la lista por primera vez. Su reacción inicial probablemente
  será "tiene sentido, son grandes que pueden defender". El frame crítico viene en Beat 5.
- "Huella digital criptográfica" es lenguaje accesible para sociedad civil. Si alguien
  pregunta detalle técnico en Q&A: SHA-3 hash sobre un documento que describe el bug.
- "Anthropic no ha hecho públicas" enfatiza la opacidad — la sala podrá pensar
  "¿por qué no se sabe quiénes son?". Eso es bueno; el frame se desarrolla en Beat 5.
- ~1.5 minutos.
-->

---
layout: center
class: text-center
---

<div class="max-w-3xl mx-auto px-8">
  <div class="text-3xl leading-relaxed font-light" style="font-family: 'Roboto Slab', serif">
    Hasta aquí es la historia
    <div class="my-4">que <span style="color: #ff9416; font-weight: 700">Anthropic</span> quiere contar.</div>
  </div>
  <div v-click class="mt-12 text-2xl font-semibold opacity-90" style="font-family: 'Montserrat', sans-serif">
    Pero la historia tiene tres capas más.
  </div>
</div>

<!--
VOZ (con click reveal):

[Visible desde el inicio]

"Hasta aquí es la historia que Anthropic quiere contar."

[Pausa de 2 segundos, dejar que la sala asiente. Luego CLICK, aparece la segunda línea]

"Pero la historia tiene tres capas más."

[Pausa de 2 segundos. Esta transición es la apertura del Beat 2]

NOTAS:
- Click reveal: la primera frase cierra Beat 1; la segunda abre Beat 2.
- La pausa entre las dos hace todo el trabajo retórico.
- "Tres capas más" es promesa estructural, corresponde a Beats 2, 3, 4.
  El Beat 5 (asimetrías) es la consecuencia de las tres capas, no una cuarta capa.
- El tono cambia aquí: de orientación a inquietud reflexiva.
- ~30 segundos.
-->
