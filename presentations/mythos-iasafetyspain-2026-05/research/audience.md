# Audience & Goal — Mythos y Glasswing (AISafety España)

## Who is in the room

- **Host**: AISafety España.
- **Audiencia**: hispanohablante, **predominantemente sociedad civil**. Algunos técnicos ML, algunos ingenieros de software. Lado policy/governance: incierto, probablemente poco representado.
- **Idioma**: Español.
- **Duración**: **60-75 minutos** (charla + Q&A — formato Q&A TBD).

### Implicaciones de este perfil

- **Registro**: técnico-accesible, no técnico-académico. Evitar jerga AI safety sin definir (mesa-optimization, instrumental convergence, deceptive alignment) — usar solo si se ancla con ejemplo.
- **No se puede asumir**: que la sala conozca Mythos (apenas se ha cubierto en hispanohablante). Ni la mayoría de incidentes recientes. Ni el detalle de cómo funciona deployment responsible.
- **Sí se puede asumir**: interés genuino por AI safety, vocabulario básico de IA, familiaridad con que los LLMs frontier son cosa de pocos labs.
- **Cuidado**: en sociedad civil, la temptación es simplificar de más. Mantener el rigor — esta sala viene precisamente porque quiere el dato técnico bien presentado.

## What they believe coming in

> Best guesses recalibradas a sociedad civil hispanohablante AI-safety-curiosa — confirmar/corregir con Dani:
>
> - "Los labs frontier (Anthropic, OpenAI, GDM) más o menos saben lo que hacen y vigilan los riesgos."
> - "Cuando algo es peligroso, no lo liberan — el sistema se autorregula."
> - "El gran riesgo de IA es a 5-10 años; lo de ahora es manejable."
> - "Yo no he oído hablar de Mythos." ← probablemente cierto para la mayoría.
> - "PauseAI es la organización que protesta pidiendo parar la IA." ← primera asociación.

## What they should leave with

**Una sola idea load-bearing** (revisada — sin call-to-pause explícito; dejar que el dato hable):

> Mythos no es "un modelo más capaz". Es la primera evidencia pública de que las capacidades ofensivas emergen más rápido que las defensivas en frontier IA. La asimetría — entre lo que un modelo puede atacar y lo que el mundo puede defender — es la variable que importa, y crece con cada modelo. Glasswing es la mejor respuesta posible dentro del marco actual, y aun así es insuficiente.

**Conclusión que la sala debe llegar sola** (no se la decimos): si la asimetría es estructural, el modelo de "deployment responsable post-hoc" tiene un límite duro.

## What we can assume (don't waste minutes on)

- Que LLMs como ChatGPT/Claude existen y son útiles.
- Quién es Anthropic, OpenAI (al menos los nombres).
- Concepto general de "IA peligrosa" — la sala viene de AI safety.

## What we need to establish (con cuidado pedagógico)

- Qué es un zero-day y por qué importa (con ejemplo concreto).
- Qué hace Mythos específicamente — no asumir que se ha oído.
- Qué es Project Glasswing y la decisión de no-release.
- Por qué los datos concretos (181× vs 2× en Firefox, bugs de 16-27 años) son cualitativamente distintos a "más capaz" — anclar con analogía si hace falta.
- La asimetría ofensiva/defensiva — concepto nuevo para mucha gente, requiere construcción cuidadosa.
- Cómo encaja esto en el panorama de governance IA.

## Objections we should preempt

> TODO Dani — qué crees que la sala va a contraargumentar:
>
> - "Glasswing demuestra que el modelo de responsible deployment funciona."
> - "Si Anthropic no lo libera, el riesgo es otros lo repliquen — mejor que esté en manos seguras."
> - "PauseAI pide algo políticamente imposible."
> - "Los 16-27 años de los bugs es selection bias — solo nos enseñan los hits."
> - "Esto es una historia de cybersecurity, no de x-risk."

## Why PauseAI España specifically

- **Importer value**: Mythos apenas se ha cubierto en español. Esta charla es probablemente el primer análisis serio en el ecosistema hispanohablante.
- **Voz sin hedging**: la sala AI safety oye matiz constante. PauseAI presenta el dato sin diluirlo, lo cual no significa "pedir pausa" en cada slide — significa no pedir disculpas por el dato.
- **Frame analítico, no activista**: en esta charla específicamente, hablar como analistas que leen el anuncio de Anthropic con rigor, no como activistas pidiendo algo. El branding PauseAI está en el footer; la charla es sobre Mythos.

## Success criteria

Tres niveles de éxito (de menor a mayor), recalibrados a sociedad civil:

1. **Mínimo**: la sala sale sabiendo qué es Mythos, la cifra ancla (181× vs 2×) y por qué Anthropic decidió no liberarlo. Si alguien le pregunta mañana "¿qué es Mythos?", puede explicarlo en una frase.
2. **Esperado**: ≥30% de la sala sale con la asimetría ofensiva/defensiva articulada como concepto, y entendiendo por qué Glasswing es necesario pero limitado.
3. **Aspiracional**: la sala empieza a cuestionar internamente si el modelo de "deployment responsable post-hoc" tiene techo. (No necesitamos que adopten la posición PauseAI — necesitamos que la pregunta esté instalada.)
