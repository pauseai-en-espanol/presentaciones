---
layout: section
class: text-center
---

<!--
Beat 3, El framework que cambió (7 min). Curiosidad estructural.
La sala empieza a ver patrón. NO editorializar, citar y dejar.
"Yo no os digo qué pensar de eso. Os enseño los datos."
-->

# Capa 2
## El framework que cambió

<!--
VOZ:
"Segunda capa. Anthropic tiene un framework para clasificar el riesgo de sus modelos.
Lo llaman Responsible Scaling Policy, RSP. Política de Escalado Responsable.

Os voy a contar qué pasó con ese framework justo antes de Mythos."

NOTAS:
- Slide cabecera. ~10s.
- Tono más analítico que el Beat 2. Modo investigador.
-->

---
layout: default
---

<div class="max-w-5xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-1" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Antes de seguir, qué es un ASL
  </div>
  <div class="text-3xl font-bold mb-2" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    AI Safety Level
  </div>
  <div class="text-sm opacity-70 mb-4" style="font-family: 'Roboto Slab', serif; font-style: italic">
    Los cinco niveles con los que Anthropic clasifica el riesgo de sus modelos.
  </div>
  <div class="space-y-2 text-sm" style="font-family: 'Montserrat', sans-serif">
    <div class="flex items-baseline gap-4 p-2 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
      <div class="font-bold flex-shrink-0 w-20" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">ASL-1</div>
      <div class="opacity-90">Sin riesgo medible. <span class="opacity-60">Sistemas previos a la frontera actual.</span></div>
    </div>
    <div class="flex items-baseline gap-4 p-2 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
      <div class="font-bold flex-shrink-0 w-20" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">ASL-2</div>
      <div class="opacity-90">Capacidades de frontera, riesgo limitado. <span class="opacity-60">Modelos como Claude 3.5 o GPT-4: muy capaces, pero sin ventaja decisiva sobre un experto humano con buenas herramientas.</span></div>
    </div>
    <div class="flex items-baseline gap-4 p-3 rounded-lg" style="background: rgba(255, 148, 22, 0.12); border-left: 4px solid #ff9416">
      <div class="font-bold flex-shrink-0 w-20" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">ASL-3</div>
      <div>
        <span class="font-semibold">Ayuda significativa a personas sin formación técnica</span>
        <span class="opacity-80"> para crear armas químicas, biológicas, radiológicas o nucleares (CBRN). O para ejecutar ciberataques autónomos.</span>
        <div class="text-xs opacity-70 mt-1 italic">Opus 4.6 fue desplegado bajo este nivel.</div>
      </div>
    </div>
    <div class="flex items-baseline gap-4 p-2 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
      <div class="font-bold flex-shrink-0 w-20" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">ASL-4</div>
      <div class="opacity-90">Ayuda significativa a Estados con sus programas CBRN. <span class="opacity-60">O capacidad de automatizar la investigación en IA: el modelo mejorándose a sí mismo sin humanos en el bucle.</span></div>
    </div>
    <div class="flex items-baseline gap-4 p-2 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
      <div class="font-bold flex-shrink-0 w-20" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">ASL-5</div>
      <div class="opacity-90">Capacidades drásticamente superiores a las humanas. <span class="opacity-60">Umbral donde la pérdida de control humana sobre el sistema deja de ser hipotética.</span></div>
    </div>
  </div>
  <div class="mt-3 text-xs opacity-50 text-center" style="font-family: 'Montserrat', sans-serif">
    Framework definido y autoasignado por Anthropic. No es estándar de ningún regulador.
  </div>
</div>

<!--
VOZ:
"Antes de seguir, una nota rápida. ¿Qué es un ASL?

ASL son las siglas de AI Safety Level, Nivel de Seguridad de IA. Es el framework
con el que Anthropic, hasta hace muy poco, clasificaba el riesgo de sus modelos.
Cinco niveles. Los voy a leer rápido, vale la pena retener especialmente el tres."

[Lectura del slide, lenta para que cale]

"Nivel uno: sin riesgo medible. Sistemas previos a la frontera actual.

Nivel dos: capacidades de frontera, riesgo limitado. Aquí han vivido modelos como
Claude 3.5 o GPT-4. Muy capaces, sí, pero sin ventaja decisiva sobre un experto
humano con buenas herramientas.

Nivel tres, el que hay que retener: ayuda significativa a personas sin formación
técnica para crear armas químicas, biológicas, radiológicas o nucleares. CBRN.
O para ejecutar ciberataques autónomos. Opus 4.6, el modelo anterior a Mythos,
fue desplegado bajo este nivel. Eso significa que Anthropic admite que su modelo
en producción puede dar uplift a alguien sin formación científica para fabricar
un arma de destrucción masiva.

Nivel cuatro: ayuda significativa a Estados con sus programas CBRN. O capacidad
de automatizar la investigación en IA. Esto último es el escenario donde el
modelo se mejora a sí mismo sin humanos en el bucle.

Nivel cinco: capacidades drásticamente superiores a las humanas. Anthropic lo
define como el umbral donde la pérdida de control humana sobre el sistema deja
de ser hipotética."

[Pausa]

"Una cosa más, abajo del todo. Este framework lo define Anthropic. Lo asigna
Anthropic. No es un estándar de ningún regulador. La empresa se examina a sí
misma.

Tened presente especialmente ASL-3, el que Anthropic asignó a Opus 4.6.
Vamos con la siguiente slide."

NOTAS:
- Slide pedagógico, ~90 segundos. La sala lo necesita para entender lo que viene.
- Definiciones simplificadas para sociedad civil pero apuntando al dato más
  alarmante: CBRN explícito en ASL-3, automejora del modelo en ASL-4, pérdida
  de control en ASL-5.
- Resaltar ASL-3 visualmente porque es la referencia que aparece en los slides
  siguientes (Opus 4.6 vs Mythos).
- Frase de cierre clave: framework de autorregulación, no estándar regulatorio.
  Aterriza la asimetría de poder.
- Si alguien en Q&A pregunta detalle: estas son las definiciones de RSP v2.x.
  Bajo RSP v3.0 (que es lo que viene en el siguiente slide), Anthropic ha
  retirado la terminología, pero las distinciones conceptuales siguen presentes.
-->

---
layout: center
class: text-center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-12" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Menciones del término "AI Safety Level"
  </div>
  <div class="grid grid-cols-2 gap-12 items-center">
    <div>
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        System card de Opus 4.6
      </div>
      <div class="text-xs opacity-40 mb-3" style="font-family: 'Montserrat', sans-serif">
        Febrero 2026
      </div>
      <div style="font-size: 9rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        61
      </div>
    </div>
    <div>
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        System card de Mythos
      </div>
      <div class="text-xs opacity-40 mb-3" style="font-family: 'Montserrat', sans-serif">
        Abril 2026
      </div>
      <div style="font-size: 9rem; line-height: 1; font-weight: 900; color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        3
      </div>
    </div>
  </div>
  <div class="mt-12 text-base opacity-50 italic" style="font-family: 'Roboto Slab', serif">
    Misma empresa. Mismo tipo de documento. Dos meses de diferencia.
  </div>
</div>

<!--
VOZ:
"Si abrís el system card de Opus 4.6, el modelo anterior, lanzado en febrero,
y buscáis el término 'AI Safety Level', encontráis sesenta y una menciones.

Si abrís el system card de Mythos, encontráis tres."

[Pausa de 2 segundos]

"Misma empresa. Mismo tipo de documento. Dos meses de diferencia. Tres apariciones
en lugar de sesenta y una."

NOTAS:
- Cifra cuantificable y reproducible (yo lo verifiqué con grep).
- No editorializar. La sala saca su propia conclusión.
- ~1 minuto.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-1">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Abstract de cada system card
  </div>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border: 1px solid rgba(255, 148, 22, 0.2)">
      <div class="text-sm font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        OPUS 4.6, FEBRERO 2026
      </div>
      <blockquote class="text-sm leading-relaxed" style="font-family: 'Roboto Slab', serif">
        Informados por las pruebas descritas aquí,
        hemos desplegado Claude Opus 4.6 bajo el
        <span style="color: #ff9416; font-weight: 700; background: rgba(255, 148, 22, 0.15); padding: 2px 4px; border-radius: 3px">
          AI Safety Level 3 Deployment and Security Standard
        </span>.
      </blockquote>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.05); border: 1px solid rgba(148, 163, 184, 0.2)">
      <div class="text-sm font-bold mb-2" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        MYTHOS, ABRIL 2026
      </div>
      <blockquote class="text-sm leading-relaxed" style="font-family: 'Roboto Slab', serif">
        El gran aumento de capacidades de Claude Mythos Preview
        nos ha llevado a decidir no hacerlo de disponibilidad general.
        En su lugar, lo estamos usando como parte de un programa
        de ciberseguridad defensiva con un grupo limitado de partners.
      </blockquote>
      <div class="mt-2 text-xs opacity-50 italic" style="font-family: 'Montserrat', sans-serif">
        No hay frase paralela sobre AI Safety Level.
      </div>
    </div>
  </div>
  <div v-click class="mt-6">
    <div class="text-xs uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
      El propio system card de Mythos lo explica
    </div>
    <blockquote class="text-base leading-relaxed pl-5" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
      Bajo versiones anteriores de nuestra RSP, teníamos que determinar si cada modelo
      requería las mitigaciones asociadas a un determinado
      <span class="opacity-60 line-through">"AI Safety Level"</span>
      para un modelo de amenaza dado.
      <span class="font-semibold" style="color: #ff9416">
        Bajo RSP v3.0, ya no usamos el término "AI Safety Levels"
        para esos umbrales.
      </span>
    </blockquote>
    <div class="mt-2 text-xs opacity-50 pl-5 italic" style="font-family: 'Montserrat', sans-serif">
      "We no longer use the term 'AI Safety Levels' for these thresholds." · Mythos system card §2.1.1
    </div>
  </div>
</div>

<!--
VOZ (con click reveal):

[Visible desde el inicio: ambos abstracts side by side]

"Esto se ve mejor en los abstracts de los dos documentos.

En el abstract de Opus 4.6, frase literal: 'hemos desplegado Claude Opus 4.6 bajo
el AI Safety Level 3 Deployment and Security Standard'. Una clasificación dentro
del marco. ASL-3.

En el abstract de Mythos, frase paralela: 'el gran aumento de capacidades nos ha
llevado a decidir no hacerlo de disponibilidad general'. Una decisión, no una
clasificación. La clasificación dentro del marco no aparece."

[Pausa de 2 segundos]

"¿Por qué desaparece?"

[CLICK, aparece la cita explicativa abajo]

"El propio system card de Mythos lo explica. Página quince, sección dos punto uno.
Cito verbatim:

'Bajo versiones anteriores de nuestra RSP, teníamos que determinar si cada modelo
requería las mitigaciones asociadas a un determinado AI Safety Level para un
modelo de amenaza dado. Bajo RSP v3.0, ya no usamos el término AI Safety Levels
para esos umbrales.'"

[Pausa de 2 segundos]

"Anthropic acaba de retirar, su palabra, la terminología con la que clasificaba
sus modelos. Lo dice ella misma."

NOTAS:
- Click reveal: setup (los abstracts paralelos) + pregunta "¿por qué?" en voz +
  click que entrega la respuesta directamente del propio system card.
- "AI Safety Level" tachado en el bloque inferior, visual de retirada del término.
- Side-by-side visual potente para los abstracts; cita verbatim para cerrar.
- ~2 min total.
-->


---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Cuándo cambió el framework
  </div>
  <div class="space-y-1">
    <div class="flex items-center gap-6 p-4 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="text-xl font-bold w-40 flex-shrink-0" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        FEB 2026
      </div>
      <div class="flex-1 text-base" style="font-family: 'Montserrat', sans-serif">
        Anthropic adopta <span class="font-semibold">RSP v3.0</span>, el framework abandona el término "AI Safety Levels".
      </div>
    </div>
    <div class="flex items-center gap-6 p-4 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="text-xl font-bold w-40 flex-shrink-0" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        FEB 2026
      </div>
      <div class="flex-1 text-base" style="font-family: 'Montserrat', sans-serif">
        Lanzamiento de <span class="font-semibold">Opus 4.6</span>, clasificado bajo el marco anterior, ASL-3.
      </div>
    </div>
    <div class="flex items-center gap-6 p-4 rounded-lg" style="background: rgba(255, 148, 22, 0.08)">
      <div class="text-xl font-bold w-40 flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        ABR 2026
      </div>
      <div class="flex-1 text-base" style="font-family: 'Montserrat', sans-serif">
        Anthropic actualiza a <span class="font-semibold">RSP v3.1</span>.
      </div>
    </div>
    <div class="flex items-center gap-6 p-4 rounded-lg" style="background: rgba(255, 148, 22, 0.08)">
      <div class="text-xl font-bold w-40 flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        ABR 2026
      </div>
      <div class="flex-1 text-base" style="font-family: 'Montserrat', sans-serif">
        Lanzamiento de <span class="font-semibold">Mythos</span>, primer system card publicado bajo la nueva RSP.
      </div>
    </div>
  </div>
  <blockquote class="mt-8 text-lg italic pl-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
    "This determination involves judgment calls."
    <div class="text-sm opacity-70 mt-2 not-italic">
      Esta determinación involucra decisiones de criterio.
    </div>
  </blockquote>
</div>

<!--
VOZ:
"La cronología completa.

Febrero de 2026: Anthropic adopta la versión 3.0 de su Responsible Scaling Policy.
En ese mismo mes, lanzan Opus 4.6, todavía clasificado bajo el marco anterior, como ASL-3.

Abril de 2026: Anthropic actualiza el framework a versión 3.1. En ese mismo mes,
lanzan Mythos, el primer system card publicado bajo la nueva RSP. Y en él, ASL
ya no se usa para los umbrales.

Y la propia RSP nueva dice algo más. La determinación de riesgo deja de ser binaria,
'cruzas el umbral o no', y pasa a ser, frase de Anthropic verbatim, 'una decisión
de criterio'."

[Pausa de 2 segundos]

NOTAS:
- Cronología visual. La coincidencia temporal está documentada.
- "Judgment calls" en inglés con traducción debajo, la frase clave del cambio.
- ~1.5 minutos.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Y la nueva RSP define "riesgo catastrófico" así
  </div>
  <blockquote class="text-xl leading-relaxed pl-6 mb-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
    Riesgos previsibles y materiales de daño a gran escala provenientes de los modelos
    más avanzados, incluyendo, pero no limitado a:
  </blockquote>
  <div class="grid grid-cols-2 gap-6 mt-6">
    <div class="text-center p-6 rounded-lg" style="background: rgba(255, 148, 22, 0.1); border: 1px solid rgba(255, 148, 22, 0.3)">
      <div style="font-size: 5rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        50+
      </div>
      <div class="text-base mt-2 opacity-90" style="font-family: 'Montserrat', sans-serif">
        muertes en un único incidente
      </div>
    </div>
    <div class="text-center p-6 rounded-lg" style="background: rgba(255, 148, 22, 0.1); border: 1px solid rgba(255, 148, 22, 0.3)">
      <div style="font-size: 5rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        $1B+
      </div>
      <div class="text-base mt-2 opacity-90" style="font-family: 'Montserrat', sans-serif">
        en daños financieros
      </div>
    </div>
  </div>
  <div class="mt-8 text-sm opacity-50 italic" style="font-family: 'Roboto Slab', serif">
    Por debajo de estos umbrales, no entra en la categoría "catastrophic risk".
  </div>
</div>

<!--
VOZ:
"Y la nueva RSP define qué es un 'riesgo catastrófico' así. Cito su definición:
'riesgos previsibles y materiales de daño a gran escala provenientes de los modelos
más avanzados, incluyendo, pero no limitado a, más de cincuenta muertes en un único
incidente, o mil millones de dólares en daños financieros'.

Cincuenta muertes. O mil millones de dólares.

Por debajo de esos umbrales, no entra en la categoría de riesgo catastrófico
en su nuevo framework."

[Pausa de 2 segundos]

NOTAS:
- Datapoint llamativo. La sala se queda procesando: "espera, 49 muertes no es
  catastrófico oficialmente?".
- "Incluyendo, pero no limitado a", Anthropic deja la puerta abierta a otros
  criterios. No editorializar.
- ~1.5 minutos.
-->

---
layout: center
class: text-center
---

<div class="max-w-3xl mx-auto px-8">
  <div class="text-2xl leading-relaxed font-light" style="font-family: 'Roboto Slab', serif">
    Tenemos
    <div class="my-3"><span style="color: #ff9416; font-weight: 700">un modelo cualitativamente nuevo</span>,</div>
    <div class="my-3">una <span style="color: #ff9416; font-weight: 700">paradoja de alineamiento</span> confesada por Anthropic,</div>
    <div class="my-3">y un <span style="color: #ff9416; font-weight: 700">framework de medición que cambia</span> justo a tiempo.</div>
  </div>
  <div class="mt-12 text-2xl font-semibold" style="font-family: 'Montserrat', sans-serif">
    ¿Cómo gestionan el despliegue?
  </div>
</div>

<!--
VOZ:
"Hagamos balance.

Tenemos un modelo cualitativamente nuevo, capaz de descubrir y explotar
vulnerabilidades a una velocidad que las evaluaciones existentes ya no miden.

Tenemos una paradoja de alineamiento confesada por la propia Anthropic, el modelo
mejor alineado y a la vez el más arriesgado, según ellos, debido al ritmo de las
capacidades.

Y tenemos un framework de medición que cambia justo a tiempo, la terminología
con la que se clasificaba este tipo de riesgos se ha retirado, y los umbrales
que la sustituyen son ahora 'decisiones de criterio'.

Tres capas. La pregunta lógica siguiente es:

¿Cómo gestionan el despliegue de este modelo?"

[Transición directa a Beat 4]

NOTAS:
- Recapitulación + bridge a Beat 4.
- "Justo a tiempo", fraseo deliberado, plantea la sospecha sin afirmarla.
  La sala completa.
- ~1 minuto.
-->
