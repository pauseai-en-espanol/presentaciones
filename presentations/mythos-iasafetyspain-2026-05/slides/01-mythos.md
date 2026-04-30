---
layout: center
class: text-center
---

<!--
Beat 1 — Qué es Mythos (8 min). Después del minimalismo cinematográfico
del Beat 0, este beat es modo pedagógico: orientación, masa fáctica,
concreto antes que agregado. NO introducir frame de asimetría aquí.
-->

<div class="text-7xl font-black tracking-tight" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416; letter-spacing: 0.02em">
  ¿Qué es Mythos?
</div>

<div class="mt-12 max-w-3xl mx-auto text-2xl leading-relaxed opacity-90" style="font-family: 'Montserrat', sans-serif">
  Un modelo de inteligencia artificial de
  <span style="color: #ff9416; font-weight: 700">Anthropic</span> —
  los mismos que hacen Claude.
</div>

<div class="mt-6 max-w-3xl mx-auto text-xl opacity-70" style="font-family: 'Montserrat', sans-serif">
  Lo anunciaron el 7 de abril de 2026.
  Su modelo más capaz hasta la fecha.
</div>

<!--
VOZ:
"Mythos es un modelo de inteligencia artificial desarrollado por Anthropic —
los mismos que hacen Claude. Lo anunciaron el 7 de abril de 2026 y lo describen
como su modelo más capaz hasta la fecha. Os voy a contar qué significa eso
con un ejemplo concreto."

NOTAS:
- Pivot del Beat 0: del minimalismo cinematográfico al modo pedagógico.
- "Los mismos que hacen Claude" — anchor familiar para sociedad civil.
- ~30 segundos. No alargar. Vamos al ejemplo concreto rápido.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    CVE-2026-4747
  </div>
  <div class="text-6xl font-black mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416; line-height: 1.05">
    Un fallo de 17 años<br/>en FreeBSD
  </div>
  <div class="space-y-4 text-xl leading-relaxed" style="font-family: 'Montserrat', sans-serif">
    <div>
      Está en <span style="color: #ff9416; font-weight: 600">NFS</span> —
      el servicio que comparte ficheros por red.
    </div>
    <div>
      Permite tomar control completo del servidor —
      <span class="font-semibold">root, sin autenticación</span> —
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
"Anthropic dice que su modelo encontró y explotó autonomamente una vulnerabilidad
de 17 años en FreeBSD. Está en NFS — el servicio que comparte ficheros por red.
La vulnerabilidad permite tomar control completo del servidor — root, sin autenticación —
a cualquier atacante con acceso de red al servicio. Bajo código que millones de servidores
ejecutan desde 2009.

CVE-2026-4747.

El descubridor no fue una persona."

[Pausa de 2 segundos]

"Esto es un ejemplo concreto. Veamos los números agregados."

NOTAS:
- Precisión técnica: NFS no necesariamente expuesto a internet. "Acceso de red al servicio".
- CVE público — verificable.
- Si la sala pide más detalle técnico, derivar a Q&A.
- ~2 minutos.
-->

---
layout: center
class: text-center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Firefox 147 — datos de Anthropic
  </div>
  <div class="grid grid-cols-2 gap-12 items-center mt-8">
    <div>
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        Mythos Preview
      </div>
      <div style="font-size: 9rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        181
      </div>
      <div class="text-base opacity-70 mt-2" style="font-family: 'Montserrat', sans-serif">
        exploits funcionales
      </div>
    </div>
    <div>
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        Claude Opus 4.6
      </div>
      <div style="font-size: 9rem; line-height: 1; font-weight: 900; color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        2
      </div>
      <div class="text-base opacity-70 mt-2" style="font-family: 'Montserrat', sans-serif">
        de varios cientos de intentos
      </div>
    </div>
  </div>
  <div class="mt-12 text-sm opacity-50" style="font-family: 'Montserrat', sans-serif">
    Mismo entorno · 50 categorías de fallo · 250 intentos totales
  </div>
</div>

<!--
VOZ:
"En su anuncio, Anthropic dio una cifra para anclar el escalón. Probaron a ambos modelos
contra las mismas vulnerabilidades de Firefox 147. Mismo entorno, mismo número de intentos.
Opus 4.6, el modelo anterior, desarrolló exploits funcionales 2 veces de varios cientos
de intentos. Mythos: 181 veces."

[Pausa de 2 segundos para que la sala procese]

"Casi cien veces más. No es una mejora gradual — es un escalón."

NOTAS:
- Cifra ancla del beat. La sala se la lleva a casa si entra en sus oídos clara.
- Los dos números en pantalla, comparación visual directa.
- 9rem es enorme — comprobar en pnpm dev que no se sale.
-->

---
layout: center
class: text-center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Firefox 150 — Mozilla, fuente independiente
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
"Y ese dato no viene solo de Anthropic. Mozilla, esta misma semana — el 21 de abril —
publicó que con acceso a Mythos había pre-identificado y parcheado 271 vulnerabilidades
en su versión de Firefox antes de lanzarla. Doce veces más que con el modelo anterior.
Con Opus 4.6, hace dos meses, encontraron 22."

[Pausa de 1 segundo]

"Misma fuente — Mozilla — confirmando la magnitud que reportó Anthropic. Independiente."

NOTAS:
- Énfasis en "fuente independiente". Esto es lo que blinda contra "fear-based marketing".
- 21 de abril es absoluto, no relativo. Si la charla es la semana siguiente, "esta misma
  semana" se mantiene válido. Si es más tarde, ajustar.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-5xl font-bold mb-10" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Y eso es la punta del iceberg
  </div>
  <div class="space-y-5 text-xl" style="font-family: 'Montserrat', sans-serif">
    <div class="flex items-baseline gap-4">
      <div class="text-4xl font-black flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; min-width: 12rem">
        miles
      </div>
      <div class="opacity-90">
        de zero-days identificados en infraestructura crítica.
      </div>
    </div>
    <div class="flex items-baseline gap-4">
      <div class="text-4xl font-black flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; min-width: 12rem">
        100%
      </div>
      <div class="opacity-90">
        en Cybench — el benchmark estándar de capacidad ciber.
        Saturado.
      </div>
    </div>
    <div class="flex items-baseline gap-4">
      <div class="text-4xl font-black flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; min-width: 12rem">
        10 h+
      </div>
      <div class="opacity-90">
        de un experto humano: tiempo estimado para resolver
        un cyber-range corporativo.
        <span class="opacity-70">Mythos lo resolvió end-to-end. Solo.</span>
      </div>
    </div>
  </div>
  <div class="mt-10 text-base opacity-50" style="font-family: 'Montserrat', sans-serif">
    Fuentes: Anthropic system card · página de Project Glasswing
  </div>
</div>

<!--
VOZ:
"Y hay más. La página oficial de Project Glasswing dice que Mythos ha identificado
miles de zero-days en infraestructura crítica.

En Cybench — un benchmark estándar de capacidades ciber que la comunidad usa para medir
estos modelos — Mythos saca el cien por cien. Lo saturó. Anthropic dice explícitamente
que las evaluaciones que tenían ya no miden a este modelo.

Y en pruebas externas, Mythos completó autonomamente un cyber-range corporativo —
una simulación de ataque a una empresa — que se estima en más de 10 horas
de trabajo de un experto humano. Primer modelo en lograrlo."

[Pausa de 1 segundo]

NOTAS:
- "Saturó" es palabra técnica pero accesible. La sala lo entiende: "ya no se puede subir más".
- 10h+ es el dato cuantificable que más pega — tiempo humano comparable.
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
    Despliegue defensivo restringido a 12 partners de lanzamiento + ~40 organizaciones adicionales.
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
    + commitments criptográficos SHA-3 para probar posesión de las vulnerabilidades
    sin revelar detalles hasta que estén parcheadas.
  </div>
</div>

<!--
VOZ:
"En su lugar, Anthropic distribuye Mythos a través de un programa que llaman
Project Glasswing. Doce partners de lanzamiento — los grandes nombres del sector
tecnológico estadounidense más JPMorgan Chase. Más unas cuarenta organizaciones
adicionales no listadas públicamente.

Y para no revelar las vulnerabilidades antes de parchearlas, usan commitments
criptográficos — hashes SHA-3 — que prueban que tienen el hallazgo sin revelar cuál es."

[Pausa de 1 segundo]

NOTAS:
- Lista de partners SIN comentar todavía. Eso es Beat 5.
- En esta slide la sala ve la lista por primera vez. Su reacción inicial probablemente
  será "tiene sentido — son grandes que pueden defender". El frame crítico viene en Beat 5.
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
    <div class="opacity-80">Y está bien que la cuenten así.</div>
  </div>
  <div class="mt-12 text-2xl font-semibold opacity-90" style="font-family: 'Montserrat', sans-serif">
    Pero la historia tiene tres capas más.
  </div>
</div>

<!--
VOZ:
"Hasta aquí es la historia que Anthropic quiere contar. Y está bien que la cuenten así.

Pero la historia tiene tres capas más."

[Pausa de 2 segundos. Esta transición es la apertura del Beat 2]

NOTAS:
- Frase puente. Cierra Beat 1, abre Beat 2.
- "Tres capas más" es promesa estructural — corresponde a Beats 2, 3, 4.
  El Beat 5 (asimetrías) es la consecuencia de las tres capas, no una cuarta capa.
- El tono cambia aquí: de orientación a inquietud reflexiva.
- ~30 segundos.
-->
