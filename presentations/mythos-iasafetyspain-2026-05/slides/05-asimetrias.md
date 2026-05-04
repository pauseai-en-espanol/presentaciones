---
layout: section
class: text-center
---

<!--
Beat 5, Las asimetrías que esto produce (12 min). El más largo.
Tres sub-beats: tu router · tu banco · tu mercado.
Aquí aterriza todo. La sala debe sentir que la asimetría está en su bolsillo.
NO operativo, educational. Patrón y brecha, no recetas.
-->

# Las asimetrías
## Tres mapas, uno encima del otro

<div class="text-base opacity-70 mt-8" style="font-family: 'Roboto Slab', serif; font-style: italic">
  Tu casa. Tu banco. Tu mercado.
</div>

<!--
VOZ:
"Hasta aquí, esto es la historia de un lab y un modelo. Los próximos doce minutos
son de algo distinto. Son de tres asimetrías que produce esto que hemos visto.

Os pongo tres mapas, uno encima del otro. El primero es vuestra casa.
El segundo, vuestro banco. El tercero, vuestro mercado de trabajo.

Ninguno de los tres pasa por el ciudadano español típico del lado correcto."

NOTAS:
- Slide cabecera. Pivot al modo personal.
- ~30 segundos.
-->

---
layout: default
---

<!-- ===== 5a, TU ROUTER ===== -->

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Mapa 1 · Tu router
  </div>
  <div class="grid grid-cols-2 gap-8 mt-8">
    <div>
      <div class="text-base font-bold mb-3" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        QUIÉN ESTÁ EN GLASSWING
      </div>
      <div class="space-y-1 text-sm" style="font-family: 'Montserrat', sans-serif">
        <div class="opacity-90">Amazon Web Services</div>
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
        <div class="opacity-50 italic mt-2">+ ~40 organizaciones adicionales no listadas</div>
      </div>
    </div>
    <div>
      <div class="text-base font-bold mb-3" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        QUIÉN HACE TU ROUTER DE CASA
      </div>
      <div class="space-y-2 text-sm" style="font-family: 'Montserrat', sans-serif">
        <div><span class="font-semibold">Movistar / O2</span> <span class="opacity-70">, MitraStar · Askey</span></div>
        <div><span class="font-semibold">Vodafone</span> <span class="opacity-70">, Sercomm · ZTE</span></div>
        <div><span class="font-semibold">Orange</span> <span class="opacity-70">, Sagemcom · Arcadyan · ZTE</span></div>
        <div><span class="font-semibold">Digi</span> <span class="opacity-70">, ZTE</span></div>
        <div><span class="font-semibold">MásMóvil</span> <span class="opacity-70">, ZTE</span></div>
      </div>
      <div class="mt-6 text-base font-bold" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        Intersección con Glasswing: ninguno.
      </div>
    </div>
  </div>
</div>

<!--
VOZ:
"Mapa uno. Tu router.

A la izquierda, los doce partners de lanzamiento de Glasswing. Más unas cuarenta
organizaciones adicionales no listadas públicamente.

A la derecha, los fabricantes de los routers que los principales operadores
españoles instalan en las casas. Movistar y O2: MitraStar y Askey. Vodafone:
Sercomm y ZTE. Orange: Sagemcom, Arcadyan, ZTE. Digi y MásMóvil: ZTE.

[Pausa]

Intersección entre los dos lados: ninguno. Ningún fabricante del router que
tenéis en casa aparece en la lista de partners de Glasswing."

NOTAS:
- Datos verificados (C57). Si alguien pregunta, fuentes en banda ancha.
- "Intersección", palabra técnica pero accesible. Hace el punto matemáticamente.
- ~1.5 minutos.
-->

---
layout: center
class: text-center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-12" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    El patrón estructural
  </div>
  <div class="grid grid-cols-3 gap-4 items-center">
    <div class="p-6 rounded-lg" style="background: rgba(255, 148, 22, 0.08); border: 1px solid rgba(255, 148, 22, 0.3)">
      <div class="text-base font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">PASO 1</div>
      <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Mythos-class encuentra
        un fallo en el firmware
        de un router doméstico.
      </div>
    </div>
    <div v-click="1" class="text-center text-3xl" style="color: #ff9416">→</div>
    <div v-click="1" class="p-6 rounded-lg" style="background: rgba(255, 148, 22, 0.08); border: 1px solid rgba(255, 148, 22, 0.3)">
      <div class="text-base font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">PASO 2</div>
      <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Atacante explota.
        El router le da control
        de la red local.
      </div>
    </div>
  </div>
  <div v-click="2" class="mt-4 text-3xl text-center" style="color: #ff9416">↓</div>
  <div v-click="2" class="mt-4">
    <div class="p-6 rounded-lg max-w-2xl mx-auto" style="background: rgba(255, 148, 22, 0.08); border: 1px solid rgba(255, 148, 22, 0.3)">
      <div class="text-base font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">PASO 3</div>
      <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Desde la red local: redirección de tráfico, captura de credenciales,
        envenenamiento de actualizaciones, vector hacia ordenadores y móviles de la casa.
      </div>
    </div>
  </div>
  <div v-click="3" class="mt-10 text-base opacity-70 italic max-w-3xl mx-auto" style="font-family: 'Roboto Slab', serif">
    El fabricante NO está en Glasswing. No recibió análisis defensivo previo.
  </div>
</div>

<!--
VOZ (con click reveal en tres pasos):

[PASO 1 visible desde el inicio]

"El patrón es simple, y deliberadamente abstracto, no quiero daros la receta.

Paso uno: un modelo de la categoría de Mythos encuentra un fallo en el firmware
del router. Algo que es exactamente lo que Mythos hizo con FreeBSD-NFS."

[CLICK 1, aparece flecha → + PASO 2]

"Paso dos: un atacante con acceso a esa capacidad lo explota. Toma control del
router."

[CLICK 2, aparece flecha ↓ + PASO 3]

"Paso tres: desde el router, controla la red local. Y desde ahí, redirección
de tráfico, captura de credenciales, envenenamiento de actualizaciones, tiene
vector hacia los ordenadores y móviles que están en esa red. Tu casa."

[Pausa, luego CLICK 3, aparece la frase final]

"El fabricante de tu router no está en Glasswing. No recibió análisis defensivo
previo. Lo que pasa, pasa."

NOTAS:
- Click reveal en 3 pasos: PASO 1 visible, click 1 = PASO 2 + flecha,
  click 2 = PASO 3 + flecha, click 3 = la frase punch sobre Glasswing.
- "Deliberadamente abstracto", explicitar la disciplina pedagógica.
- Cada click acompaña una frase concreta. La sala procesa cada paso.
- ~1 minuto.
-->


---
layout: default
---

<div class="max-w-5xl mx-auto px-8 pt-4">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Tres detalles operativos del usuario español típico
  </div>
  <div class="space-y-4 mt-6">
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-1" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">No eliges router</div>
      <div class="text-base opacity-90" style="font-family: 'Montserrat', sans-serif">
        Lo da el ISP. La mayoría de usuarios no sabe siquiera quién lo fabrica.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-1" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">EOL silencioso</div>
      <div class="text-base opacity-90" style="font-family: 'Montserrat', sans-serif">
        Cuando un dispositivo deja de tener soporte del fabricante, sigue desplegado en miles de hogares.
        Nadie te avisa.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-1" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">Las actualizaciones las controla el ISP</div>
      <div class="text-base opacity-90" style="font-family: 'Montserrat', sans-serif">
        Cuando hay parche disponible, si lo hay, el ISP decide cuándo desplegarlo. Tú no.
      </div>
    </div>
  </div>
  <div class="mt-8 text-base font-semibold" style="font-family: 'Roboto Slab', serif">
    AWS, Apple, Google, Microsoft protegen sus servicios con Mythos.
    <span style="color: #ff9416">Tu router doméstico no se beneficia de ninguno de esos análisis.</span>
  </div>
</div>

<!--
VOZ:
"Y para terminar este primer mapa, tres realidades operativas del usuario español
típico que conviene tener presentes.

Una: no eliges router. Lo da el ISP. La mayoría de la gente no sabe siquiera quién
lo fabrica.

Dos: el end-of-life es silencioso. Cuando un dispositivo deja de recibir soporte
del fabricante, sigue desplegado en miles de hogares. Nadie te avisa.

Tres: las actualizaciones las controla el ISP. Cuando hay parche, si lo hay,
el ISP decide cuándo desplegarlo. Tú no.

[Pausa]

AWS, Apple, Google, Microsoft están protegiendo sus servicios con Mythos,
parchando vulnerabilidades antes de que los atacantes las encuentren. Tu router
doméstico no se beneficia de ninguno de esos análisis."

NOTAS:
- Reflexión. La sala se queda procesando "espera, mi router..."
- ~1 minuto.
- Cierra Mapa 1.
-->

---
layout: default
---

<!-- ===== 5b, TU BANCO ===== -->

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Mapa 2 · Tu banco
  </div>
  <div class="text-3xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    A un lado del Atlántico
  </div>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-lg" style="background: rgba(74, 222, 128, 0.06); border-left: 4px solid #4ade80">
      <div class="text-base font-bold mb-3" style="color: #4ade80; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        ESTADOS UNIDOS · ACCESO ACTIVO
      </div>
      <div class="space-y-2 text-base" style="font-family: 'Montserrat', sans-serif">
        <div>· <span class="font-semibold">JPMorgan Chase</span>, partner de lanzamiento de Glasswing.</div>
        <div>· <span class="font-semibold">Goldman Sachs, Citigroup, Bank of America, Morgan Stanley</span>, testando Mythos.</div>
        <div>· El <span class="font-semibold">Secretario del Tesoro</span> convocó banqueros en abril para promover el uso defensivo.</div>
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.06); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-3" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        ZONA EURO · SIN ACCESO
      </div>
      <div class="space-y-2 text-base" style="font-family: 'Montserrat', sans-serif">
        <div>· El <span class="font-semibold">BCE convocó hace dos semanas</span> a los responsables de riesgos de los bancos significativos, incluidos los <span class="font-semibold">cuatro españoles</span>: Santander, BBVA, CaixaBank, Sabadell.</div>
        <div>· Pidió <span class="font-semibold">planes de contingencia</span>.</div>
        <div>· Bancos europeos <span class="font-semibold">no tienen acceso</span>. Lagarde lo ha reclamado. UK lo recibe "inminente".</div>
        <div>· El <span class="font-semibold">Banco de España</span> ya pidió a entidades planes de adopción.</div>
      </div>
    </div>
  </div>
  <div class="mt-6 text-sm opacity-60 italic text-center" style="font-family: 'Roboto Slab', serif">
    Fuentes: anuncio Glasswing · Bloomberg · El País 29-04-2026
  </div>
</div>

<!--
VOZ:
"Mapa dos. Tu banco. A un lado del Atlántico.

Lado estadounidense, acceso activo: JPMorgan Chase es partner de lanzamiento de
Glasswing. Goldman Sachs, Citigroup, Bank of America y Morgan Stanley están
testando Mythos. Y el Secretario del Tesoro convocó banqueros estadounidenses
en abril para promover el uso defensivo.

[Pausa]

Lado europeo, sin acceso: el Banco Central Europeo convocó hace dos semanas a
los responsables de riesgos de los bancos significativos de la zona euro, y aquí
están los cuatro españoles: Santander, BBVA, CaixaBank y Sabadell. ¿Para qué los
convocó? Para pedirles planes de contingencia ante Mythos.

Pero los bancos europeos no tienen acceso al modelo. Lagarde lo ha reclamado.
Anthropic dice que abrirá a empresas británicas de manera inminente, sin fecha
para la zona euro. El Banco de España ya pidió a las entidades españolas planes
de adopción de la tecnología.

[Pausa]

Tres semanas en que el lado estadounidense usa la herramienta defensivamente.
Tres semanas que el lado europeo no tiene."

NOTAS:
- Verde para US (acceso, "ganadores temporales"), naranja para UE/ES (sin acceso).
- "Hace dos semanas" se refiere al BCE convocando, la fecha exacta no es pública.
- ~2 minutos.
-->

---
layout: center
---

<div class="max-w-6xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6 text-center" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Y la valoración pública europea sobre todo esto
  </div>
  <div class="grid grid-cols-2 gap-8 items-center">
    <div>
      <img src="/fotos/lagarde.jpg" class="w-full h-auto rounded-lg shadow-2xl border border-white/10" />
      <div class="mt-2 text-xs opacity-40 text-right" style="font-family: 'Montserrat', sans-serif">
        © MEDEF · CC BY-SA 2.0
      </div>
    </div>
    <div>
      <blockquote class="text-xl leading-relaxed pl-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
        Es un buen ejemplo de
        <span style="color: #ff9416; font-weight: 700">una empresa responsable</span>
        que de repente piensa: "Esto podría ser realmente bueno, pero si cae en las manos equivocadas, podría ser realmente malo".
      </blockquote>
      <div class="mt-4 text-sm opacity-70 pl-6" style="font-family: 'Montserrat', sans-serif">
        Christine Lagarde, BCE, 29 de abril de 2026
      </div>
      <div class="mt-8 pl-6 text-base font-semibold leading-relaxed" style="font-family: 'Roboto Slab', serif">
        La pregunta de la apertura.
      </div>
      <div class="pl-6 text-base opacity-90" style="font-family: 'Roboto Slab', serif; font-style: italic">
        Ahora con tres capas de datos sobre la mesa.
      </div>
    </div>
  </div>
</div>

<!--
VOZ:
"Y aquí, al final del segundo mapa, recuperamos la cita con la que abrimos
esta charla.

[Lectura del slide, lenta]

'Es un buen ejemplo de una empresa responsable que de repente piensa: esto podría
ser realmente bueno, pero si cae en las manos equivocadas, podría ser realmente
malo.'

Christine Lagarde. Veintinueve de abril.

[Pausa de 3 segundos]

Ahora vosotros tenéis las tres capas que la presidenta del BCE tenía sobre la
mesa cuando dijo eso. La paradoja de alineamiento confesada por Anthropic. El
framework retirado justo a tiempo. La filtración del día uno.

[Pausa]

¿Empresa responsable? La sala lo decide."

NOTAS:
- Callback al Beat 0. Cierre del arco emocional iniciado al principio.
- Foto Lagarde reaparece, la sala la recuerda.
- "La sala lo decide", explícito que NO se les dice qué pensar.
- Esta es probablemente la slide más cargada de la charla.
- ~2 minutos.
-->

---
layout: default
---

<div class="max-w-5xl mx-auto px-8 pt-4">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Y entre tu cuenta y el atacante
  </div>
  <div class="text-3xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    No solo está tu banco
  </div>
  <div class="space-y-4 text-base" style="font-family: 'Montserrat', sans-serif">
    <div>
      Bajo PSD2, la regulación europea, la doble autenticación es obligatoria desde 2019.
      Combina dos factores de tres categorías:
      <span class="opacity-80">algo que sabes (PIN, contraseña), algo que tienes (móvil, SMS, push), algo que eres (huella, cara).</span>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.06); border-left: 4px solid #ff9416">
      <div class="text-sm font-semibold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        EL PUNTO ESTRUCTURAL
      </div>
      <div class="text-base leading-relaxed">
        Cualquier 2FA depende de la
        <span class="font-semibold">integridad del dispositivo</span>
        donde recibes el segundo factor.
      </div>
      <div class="mt-3 text-base leading-relaxed opacity-90">
        Si el atacante controla el dispositivo
        <span class="opacity-70">(router → red → device, Mapa 1)</span>,
        toda la cadena cae. Da igual si el banco usa SMS, push o biometría.
      </div>
    </div>
    <div class="mt-4 text-base font-semibold" style="font-family: 'Roboto Slab', serif">
      Tu banco hace bien su parte. Pero su parte no es la única.
      <span style="color: #ff9416">Mythos opera sobre toda la cadena.</span>
    </div>
  </div>
</div>

<!--
VOZ:
"Una nota técnica antes de cerrar este mapa. Entre vuestra cuenta del banco y un
posible atacante no solo está vuestro banco.

Bajo la regulación europea PSD2, la doble autenticación es obligatoria desde 2019.
Combina dos factores de tres categorías: algo que sabéis, algo que tenéis, algo
que sois. PIN, móvil, huella.

[Pausa]

Y aquí viene el punto estructural. Cualquier doble autenticación, sea SMS, sea
push a una app, sea biometría, depende de la integridad del dispositivo donde
recibís el segundo factor.

Si el atacante controla el dispositivo, y aquí volvemos al primer mapa, router,
red, device, toda la cadena cae. Da igual si vuestro banco usa SMS, push o
biometría. La parte del banco se evapora cuando el dispositivo está comprometido.

[Pausa]

Vuestro banco hace bien su parte. Pero su parte no es la única. Y Mythos opera
sobre toda la cadena."

NOTAS:
- Cierre técnico de Mapa 2.
- Argumento estructural sin nombrar bancos concretos. La validez no depende de
  qué método use cada entidad: el punto es que TODO 2FA depende del dispositivo.
- Conexión explícita con Mapa 1: la cadena se compone, el dispositivo es el
  eslabón compartido.
- ~1.5 minutos.
-->

---
layout: section
class: text-center
---

<!-- ===== 5c, TU MERCADO ===== -->

<div class="max-w-4xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Mapa 3 · Tu mercado
  </div>
  <div class="text-5xl font-bold leading-tight" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Y aquí dejamos<br/>la ciberseguridad.
  </div>
</div>

<!--
VOZ:
"Mapa tres. Y aquí dejamos la ciberseguridad."

[Pausa]

NOTAS:
- Cabecera del sub-beat 5c. ~10 segundos.
- "Dejamos la ciberseguridad", pivot conceptual. La sala atiende.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Pero antes, leed esto, de la página oficial de Glasswing
  </div>
  <blockquote class="text-2xl leading-relaxed pl-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
    Claude Mythos Preview es un
    <span style="color: #ff9416; font-weight: 700">modelo frontier de propósito general</span>
    de Anthropic, el más capaz que hemos construido para tareas de
    <span style="color: #ff9416; font-weight: 700">programación y agentes</span>.
  </blockquote>
  <div class="mt-6 text-xs opacity-50 pl-6 italic" style="font-family: 'Montserrat', sans-serif">
    "Claude Mythos Preview is a general-purpose frontier model from Anthropic, our most capable yet for coding and agentic tasks."
  </div>
  <div class="mt-10 text-xl font-semibold leading-relaxed text-center" style="font-family: 'Roboto Slab', serif">
    Mythos no es solo una herramienta cyber.
    <div class="mt-2" style="color: #ff9416">Es el Claude más capaz para todo.</div>
  </div>
</div>

<!--
VOZ:
"En la página oficial de Project Glasswing, Anthropic describe a Mythos así.
Cito verbatim:

'Claude Mythos Preview es un modelo frontier de propósito general de Anthropic
el más capaz que hemos construido para tareas de programación y agentes.'

[Pausa de 2 segundos]

Modelo frontier de propósito general. El más capaz que han construido. Para
programación y agentes, que es lo que prácticamente todas las tareas profesionales
de hoy son cuando rascas la superficie.

Mythos no es solo una herramienta cyber. Es el Claude más capaz que existe.
Para cualquier cosa que un Claude haga bien."

NOTAS:
- Pivot conceptual. La sala procesa: "espera, no es solo cyber...?"
- ~1 minuto.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Y el efecto sobre el mercado, según un CISO en El País
  </div>
  <blockquote class="text-xl leading-relaxed pl-6 mb-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
    Las grandes empresas se van a ver obligadas a disparar sus inversiones contra el cibercrimen,
    con la necesidad de actuar mucho más rápido que hasta ahora.
    <div class="mt-4">
      Esto va a hacer
      <span style="color: #ff9416; font-weight: 700">ganadoras a las entidades más grandes
      y con más capacidad inversora</span>
     ,
      <span style="color: #ff9416; font-weight: 700">mientras hará sufrir a las de tamaño mediano</span>.
    </div>
  </blockquote>
  <div class="text-sm opacity-70 pl-6" style="font-family: 'Montserrat', sans-serif">
    <span class="font-semibold">Miguel Ángel Thomas</span>, CISO de NTT DATA.
    <span class="opacity-60 italic"> En entrevista a El País, 29 de abril de 2026.</span>
  </div>
</div>

<!--
VOZ:
"Y esto no soy yo quien lo dice. Esto lo dice Miguel Ángel Thomas, jefe de
ciberseguridad de NTT DATA, en la entrevista de El País del veintinueve de abril.

Cito:

'Las grandes empresas se van a ver obligadas a disparar sus inversiones contra
el cibercrimen, con la necesidad de actuar mucho más rápido que hasta ahora.
Esto va a hacer ganadoras a las entidades más grandes y con más capacidad
inversora, mientras hará sufrir a las de tamaño mediano.'

[Pausa]

Voz técnica española. Predicción concreta. La asimetría competitiva no es una
afirmación PauseAI, es lo que un CISO le cuenta a un periódico de referencia."

NOTAS:
- Voz española independiente. Blinda contra acusación de activismo.
- ~1 minuto.
-->

---
layout: center
class: text-center
---

<div class="max-w-3xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-12" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    La pregunta abierta
  </div>
  <div class="space-y-5 text-2xl leading-relaxed" style="font-family: 'Roboto Slab', serif">
    <div>¿Qué empresa española trabaja con esa herramienta?</div>
    <div>¿Qué hospital?</div>
    <div>¿Qué universidad?</div>
    <div>¿Qué medio?</div>
    <div>¿Qué administración?</div>
  </div>
  <div class="mt-12 text-lg opacity-70 italic" style="font-family: 'Roboto Slab', serif">
    La barrera no es el precio.<br/>
    Existe pricing público:&nbsp;<span class="opacity-90">$25 por millón de tokens de entrada.</span>
  </div>
  <div class="mt-4 text-xl font-semibold" style="font-family: 'Roboto Slab', serif; color: #ff9416">
    La barrera es la lista.
  </div>
</div>

<!--
VOZ:
"Y aquí están las preguntas abiertas, las que cierran este mapa.

¿Qué empresa española trabaja con esa herramienta?

[Pausa]

¿Qué hospital?

[Pausa]

¿Qué universidad?

[Pausa]

¿Qué medio?

[Pausa]

¿Qué administración?

[Pausa de 3 segundos]

Y un dato importante: la barrera para acceder a Mythos no es el precio. Anthropic
publica el pricing, veinticinco dólares por millón de tokens de entrada. Existe
una tarifa.

La barrera es la lista. Una lista decidida en California, sin participación
europea documentada. Si tu empresa española dispusiera del presupuesto, no tendría
la opción de pagarlo. Porque no se le ofrece."

NOTAS:
- Las preguntas SIN respuesta en pantalla. Lectura lenta. Las completa la sala.
- Pausas marcadas, son la propia interrogación.
- "La barrera es la lista", frase clave del beat 5c.
- ~1.5 minutos.
-->

---
layout: default
---

<div class="max-w-5xl mx-auto px-8 pt-2">
<div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">Y mientras hablamos</div>
<div class="text-3xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">La lista no se decide solo en California</div>
<div class="space-y-3 text-base" style="font-family: 'Montserrat', sans-serif">
<div class="flex gap-4 p-3 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
<div class="flex-shrink-0 w-20 font-bold" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">30 abr</div>
<div class="opacity-90">Anthropic propone expandir Mythos de 50 a <span class="font-semibold">120 organizaciones</span>. La <span class="font-semibold">Casa Blanca bloquea la expansión</span> por motivos de seguridad. <span class="opacity-60 italic text-sm">NY Post / WSJ.</span></div>
</div>
<div class="flex gap-4 p-3 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
<div class="flex-shrink-0 w-20 font-bold" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">4 may</div>
<div class="opacity-90">Trump considera <span class="font-semibold">revisión gubernamental pre-release</span> para modelos AI. Reversal directo del hands-off, motivado por Mythos. NSA ya usa Mythos para auditar el software del gobierno USA. <span class="opacity-60 italic text-sm">NYT.</span></div>
</div>
</div>
<div class="mt-6 p-4 rounded-lg" style="background: rgba(255, 148, 22, 0.08); border-left: 4px solid #ff9416">
<div class="text-base leading-relaxed" style="font-family: 'Roboto Slab', serif">
La negociación pasa de ser <span class="font-semibold">unilateral en California</span> a ser <span class="font-semibold">bilateral entre California y Washington</span>.
<div class="mt-2" style="color: #ff9416; font-weight: 600">Europa no aparece en ninguna de las dos mesas.</div>
</div>
</div>
</div>

<!--
VOZ:
"Y la lista, importante, no es estática. Mientras estamos hablando aquí, está en
movimiento.

[Pausa]

30 de abril, hace cinco días. New York Post, citando al Wall Street Journal.
Anthropic propuso expandir Mythos de cincuenta a ciento veinte organizaciones.
La Casa Blanca, que tiene la palabra última sobre acceso a esta tecnología,
bloqueó la expansión. Por motivos de seguridad, dicen.

[Pausa]

4 de mayo, ayer. New York Times. La administración Trump, que llegó al poder
con política hands-off sobre AI, considera ahora una revisión gubernamental
pre-release de modelos. Cito al propio NYT, esto es literal: 'la política no
intervencionista comenzó a cambiar el mes pasado, después de que la startup
Anthropic anunciara Mythos'. Mythos ha disparado el U-turn regulatorio del
gobierno estadounidense. Y, dato adicional, la NSA, la Agencia de Seguridad
Nacional, ya usa Mythos para auditar vulnerabilidades en el software del
propio gobierno.

[Pausa de 2 segundos]

Lo que esto significa: la lista deja de ser unilateral de Anthropic. Es ahora
bilateral, entre San Francisco y Washington. Europa no aparece, ni en una mesa
ni en la otra."

NOTAS:
- Slide de actualización con las dos noticias mainstream más recientes.
- 30 abr (NY Post) y 4 may (NYT). Datables, citables, prensa establishment.
- El land sube la apuesta del frame anterior: California → California + Washington.
- ~1.5 minutos.
- Si la fecha del talk supera el 4-5 may, comprobar si hay updates posteriores.
-->

---
layout: center
class: text-center
---

<div class="max-w-4xl mx-auto px-8">
<div class="text-sm uppercase tracking-widest opacity-60 mb-8" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">Y desde la prensa española</div>
<blockquote class="text-3xl leading-relaxed pl-8" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416; text-align: left">
Esas son las reglas cuando el nombre de tu proveedor de
<span style="color: #ff9416; font-weight: 700">seguridad nacional</span>
es Claude Mythos Preview.
</blockquote>
<div class="mt-6 text-sm opacity-60 italic pl-8 text-left" style="font-family: 'Montserrat', sans-serif">
<span class="font-semibold not-italic">El País</span>, op-ed, 3 mayo 2026<br/>
Darío García de Viedma + Paula Oliver
</div>
</div>

<!--
VOZ:
"Y esto no lo digo solo yo. El País, hace dos días, op-ed firmado por Darío García
de Viedma y Paula Oliver. Cito la frase de cierre, verbatim:

[Lectura lenta]

'Esas son las reglas cuando el nombre de tu proveedor de seguridad nacional es
Claude Mythos Preview.'"

[Pausa de 3 segundos]

NOTAS:
- Cita de El País como validación desde establishment español. NO PauseAI.
- La frase es el cierre literal del op-ed. Pega.
- Pausa larga después de la cita. La sala procesa que esto no es activismo.
- ~30 segundos.
-->

---
layout: center
class: text-center
---

<div class="max-w-3xl mx-auto px-8">
  <div class="text-3xl leading-relaxed font-light" style="font-family: 'Roboto Slab', serif">
    Estas son las
    <span style="color: #ff9416; font-weight: 700">tres asimetrías</span>.
  </div>
  <div class="mt-10 text-2xl leading-relaxed" style="font-family: 'Roboto Slab', serif">
    Las dos primeras
    <span class="opacity-70 text-xl">(router y banco)</span>
    estaban ahí.
    <div class="mt-2" style="color: #ff9416; font-weight: 600">Mythos las hace decisivas.</div>
  </div>
  <div class="mt-8 text-2xl leading-relaxed" style="font-family: 'Roboto Slab', serif">
    La tercera
    <span class="opacity-70 text-xl">(el mercado, el acceso por lista)</span>
    no existía antes.
    <div class="mt-2" style="color: #ff9416; font-weight: 600">La creó.</div>
  </div>
</div>

<!--
VOZ:
"Estas son las tres asimetrías.

Tu router, en el primer mapa.
Tu banco, en el segundo.
Tu mercado, en el tercero.

[Pausa]

Las dos primeras estaban ahí antes de Mythos. Cuotas de mercado de fabricantes,
fragmentación regulatoria, dependencia de la integridad del dispositivo. Latentes.
Lo que Mythos hace es convertirlas en decisivas: ahora la diferencia entre
defensores con acceso a frontier AI y defensores sin él es la diferencia entre
parchear antes o después de que el atacante encuentre el bug.

[Pausa]

La tercera, la del acceso por lista, esa es nueva. Esa no estaba ahí antes.
Una lista que se decide entre San Francisco y Washington. Sin bancos europeos,
sin PYMEs, sin administración pública española. Esa asimetría la creó Mythos."

[Pausa de 2 segundos. Transición al cierre.]

NOTAS:
- Land del Beat 5. Distinción analítica precisa entre asimetrías preexistentes
  amplificadas vs asimetría creada nueva.
- "Las hace decisivas" para 1 y 2; "la creó" para 3. Calibración honesta.
- Marca el final del recorrido analítico. Lo siguiente es el cierre.
- ~1 minuto.
-->
