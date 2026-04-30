# Thesis — Mythos y Glasswing

## En una frase

> **Mythos demuestra que la asimetría entre capacidad ofensiva y capacidad defensiva en IA frontier no es un detalle técnico — es una propiedad estructural que crece con cada modelo, y que ningún esquema de despliegue responsable post-hoc puede cerrar por completo.**

## En un párrafo

> En abril de 2026, Anthropic anunció Claude Mythos Preview: un modelo que descubre vulnerabilidades en sistemas auditados durante décadas y desarrolla exploits encadenados de forma autónoma. La cifra clave — 181 exploits funcionales contra Firefox donde Opus 4.6 logró 2 — no es una mejora gradual; es un escalón. Anthropic decidió no liberarlo de forma general; lo distribuye via Project Glasswing a partners defensivos, mantiene >99% de los hallazgos sin disclosure, y usa cryptographic commitments para probar posesión sin revelar detalles. Es la mejor implementación posible de despliegue responsable. Y aun así, la asimetría que el modelo expone — entre lo que puede atacar y lo que el mundo puede defender — no se cierra con responsible disclosure: solo se redistribuye. Glasswing reduce el daño marginal de _este_ modelo; no reduce la asimetría de _los siguientes_. Mythos es el primer caso donde podemos ver con datos públicos cómo se ve esa asimetría — y cómo escala.

## La idea load-bearing

Si la sala se queda con UNA sola cosa:

> **La asimetría ofensiva/defensiva no es una consecuencia accidental del scaling — es estructural. Glasswing es necesario y bien hecho, y aun así no la cierra.**

## Lo que NO es la thesis (para esta sala específicamente)

- **No es "ralentizar el frontier"**. Esta sala (sociedad civil hispanohablante AI-safety-curiosa) leerá esa frase como branding PauseAI y dejará de procesar el argumento. La conclusión policy debe quedar implícita — que la saquen ellos. Si alguien la pregunta en Q&A, ahí sí explícita.
- **No es "Anthropic es malo"**. Glasswing es admirable. La crítica es estructural, no a Anthropic.
- **No es "los LLMs son peligrosos"**. Demasiado genérico. La sala ya lo cree.
- **No es "necesitamos más alignment research"**. Genérico, desactiva el resto del argumento.
- **No es un alegato moral**. Es un análisis técnico-estructural; la moralidad está en lo que la sala haga con él.

## Tono

- Analista presentando un caso, no activista pidiendo algo.
- Sin hedging del dato (Mythos es lo que es).
- Con respeto al movimiento de Anthropic (Glasswing está bien hecho — y por eso es importante el límite que muestra).
- Sin call-to-action explícito de PauseAI durante la charla (footer + Q&A si emerge).

## Test de la thesis

Después de la charla, la sala debe poder responder en una frase:

- ¿Qué hace Mythos que Opus 4.6 no? → cifra concreta + descripción cualitativa.
- ¿Qué es Project Glasswing y por qué Anthropic lo eligió? → no-release + distribución defensiva controlada + por qué.
- ¿Qué es la asimetría ofensiva/defensiva, y por qué Glasswing no la cierra del todo? → respuesta articulada (no perfecta).

Si una persona normal de la sala no puede responder las tres, fallamos.

## Riesgo principal

El frame "asimetría como variable estructural" es analíticamente fuerte pero puede sentirse abstracto en sociedad civil. **Mitigación**: cada momento abstracto debe llegar después de un momento concreto. La cifra Firefox antes de la teoría. El bug de OpenBSD antes de la asimetría conceptual. _Concrete before abstract_ — siempre.
