# CLAUDE.md: Verano 2026: de la especulación a los hechos

## Presentation Overview

Charla de Dani Lupión (PauseAI España) en el **Desayuno del Club Euronova**. Título: «Verano 2026: de la especulación a los hechos» · Subtítulo: «La IA de frontera se sale del sandbox».

## Key Details

- **Ponente**: Dani Lupión (PauseAI España), presentado como Principal Software Engineer en The Workshop, 20 años de experiencia, cofundador y secretario de PauseAI España
- **Fecha**: 2 de octubre de 2026, 08:30-10:00 (desayuno)
- **Lugar**: BIC Euronova, Málaga TechPark (Parque Tecnológico de Andalucía)
- **Formato**: 45 min charla + 15 min Q&A / debate (cambiado el 2026-09-28; antes 60)
- **Audiencia**: profesionales y empresas del ecosistema tecnológico y empresarial de Málaga (Club Euronova: "empresas entusiastas de la tecnología y la digitalización"). Perfil empresarial/técnico, pro-tecnología, no necesariamente familiarizado con AI safety.
- **Idioma**: Español (solo ES)
- **Equilibrio de contenido**: **liderado por el verano** (~60% incidentes verano 2026, ~40% bloque general condensado + CTA). Bloque general: versión actualizada de `ultima-invencion-cva-colectiva-2026-05`.

## Estilo (REQUISITO DURO)

- **Que no suene a texto generado por IA.** Lenguaje normal, como hablaría Dani. Frases cortas y directas, sin tono de folleto ni de titular.
- **Prohibidos los guiones largos y medios** (— y –) en slides, notas y cualquier texto de la charla. Usar punto, coma, dos puntos o paréntesis. Rangos: «de 6 a 12 meses», «2024-2026» (guion normal).
- Nada de muletillas típicas de IA: «no es X, es Y», tríadas retóricas, «en un mundo donde…», «la pregunta no es… sino…», negritas por todas partes, emojis.
- Solo en español por ahora. Más adelante puede traducirse al inglés, siguiendo las reglas de charla bilingüe del CLAUDE.md raíz.

## Research

- **Fuente única**: `research/informe.md` (consolidado 2026-09-28). Integra el informe de eurodiputados (`../caso-huggingface-eurodiputados-2026-08/research/informe.md`) y toda la investigación nueva: cronología maestra, casos agrupados por narrativa, ángulo empresarial, verificación de la ficha, qué NO decir y pendientes.
- `research/archivo/informe-v1-por-capas.md`: versión anterior por capas, solo como referencia histórica.
- Detalle del Reglamento Europeo (material de Ayoze): sigue en el informe de eurodiputados.
- Decisiones pedagógicas (interacción a mano alzada, cuatro visuales a medida, solo imágenes reales): `research/pedagogia.md`.
- Bloque general sin refrescar: reutilizar `../ultima-invencion-cva-colectiva-2026-05/research/` marcando lo caducado.

## Phase status

- **2026-09-28**: directorio creado; research en curso (1 agente, presupuesto limitado).
- **2026-09-28**: research completado y consolidado en `research/informe.md`.
- **2026-09-28**: beat sheet v1.
- **2026-09-29**: beat sheet v2 (apertura «¿quién lo dijo?», sin bloque «¿Y mi empresa?», lenguaje limpio). Pendiente de revisión por Dani.
- **2026-09-30**: scaffold y primera versión completa de las slides (35 pantallas, 4 componentes propios en `components/`). Compila con `pnpm build`. Pendiente de revisión por Dani.

## TODOs antes de la charla

- [x] Fotos de Wikimedia Commons con crédito en la slide (30 sep): Amodei, Turing, Altman, Sutskever, Page, Musk, sala del Consejo de Seguridad. Leike y Sharma no tienen foto libre: tarjeta con nombre, como Coxon.
- [x] Capturas (1 oct): DseWiki y marco de OpenAI. El NYT bloquea el navegador automático: en su lugar, tarjeta con el titular literal. Pacing the Frontier: solo la URL.
- [x] QR generado (1 oct) a pauseai.es/presentaciones/ia-fuera-sandbox-euronova-2026-10. Comprobar que la web existe el día.
- [ ] **La mañana de la charla**: comprobar que la pausa de OpenAI sigue (slide «OpenAI ha pausado dos veces» dice «A 1 de octubre, sigue en pausa»).
- [ ] Comprobar en X las cinco citas de septiembre de la slide «Los que se quedan».
- [ ] Confirmar afiliaciones de Diego Córdoba y Luis Martínez-Zoroa.
- [ ] Confirmar la llamada a la acción (¿algo concreto que firmar?) y la referencia de la PNL de 2024.

## Dev

```bash
cd presentations/ia-fuera-sandbox-euronova-2026-10
pnpm dev   # puerto 3070
```
