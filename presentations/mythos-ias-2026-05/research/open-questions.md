# Open Questions — Mythos y Glasswing

Cosas que no se pueden poner en slide hasta verificar manualmente. Cada item: pregunta, por qué importa, ruta para verificar.

## Hipótesis verificadas (con resultado)

- [x] **ASL framing — Mythos vs Opus 4.6** (hipótesis Dani 2026-04-28) — **CONFIRMADA y más fuerte de lo esperado** (verificado 2026-04-28).
  - Datos: ASL aparece 61× en Opus 4.6 system card, 3× en Mythos. Anthropic dice literalmente "We no longer use the term 'AI Safety Levels' for these thresholds" (Q15). Framework transition RSP 2.0 → 3.0 documentada en §2.1.1 de Mythos card.
  - Status: claims C10-C15, quotes Q14-Q19. Beat candidato fuerte para la charla.
  - **Cuidado**: Anthropic enmarca el cambio como mejora (más rigor en risk assessment global). La charla debe presentarlo como hecho estructural y dejar que la sala saque la inferencia, no editorializar.

## Bloqueantes (sin esto no hay charla sólida)

- [x] ~~**Verbatim exacto de la cifra Firefox**~~: ✅ resuelto 2026-04-28. Q1 verbatim completo: "Mythos Preview... developed working exploits 181 times, and achieved register control on 29 more". Metodología detallada en S2 §3.3.3 (250 trials = 50 categorías × 5 trials).

- [x] ~~**Metodología de la evaluación**~~: ✅ resuelto 2026-04-28. Documentada en S2 §3.3.3: 50 crash categories de Firefox 147, 5 trials per category, container con SpiderMonkey shell sin sandbox/defense-in-depth, model debe leer y copiar un secret. Grading: 0/0.5/1.0.

- [ ] **Bug específico de 27 años en OpenBSD**: Anthropic dice "now-patched" pero NO publica CVE en S1. ¿Hay patch público identificable en advisories de OpenBSD de abril 2026?
  - Por qué importa: si hay CVE, el hook gana muchísimo. Si no, sigue funcionando como cifra (27y) sin nombre.
  - Verificar: OpenBSD security advisories abril 2026. Posible: ningún CVE público todavía.

- [x] ~~**Fuente académica para asimetría offense/defense en cyber**~~: ✅ Resuelto 2026-04-30 vía S11. **Buchanan, Ben. _The Cybersecurity Dilemma: Hacking, Trust, and Fear Between Nations_. Oxford University Press, 2017.** Tesis verificada: "the particular characteristics of the digital domain mean that the effects [del security dilemma] are deeply pronounced" + "technology seems to favor the offense over the defense". Cita prestada para Beat 4. _No leído directamente — usar como cita canónica, no fingir lectura._

- [ ] **Bloomberg original article verbatim**: tenemos cobertura secundaria sólida (S6/S7/S8) pero sin acceso al scoop original.
  - Por qué importa: si en Q&A alguien cita una frase exacta de Bloomberg, queremos haberla visto.
  - Verificar: pedir a Dani el contenido (paywall + bot block). Alternativa: aceptar coverage secundario como suficiente.

- [x] ~~**Verificar fabricantes vigentes 2026 de routers ISP españoles**~~: ✅ Resuelto 2026-04-30 vía S12. Inventario verificado:
  - Movistar/O2: MitraStar + Askey
  - Vodafone: Sercomm + ZTE
  - Orange: Sagemcom + Arcadyan + ZTE
  - Digi: ZTE
  - MásMóvil: ZTE
  - **Ningún fabricante en Glasswing partner list.** Detalle en C57.

- [x] ~~**Confirmar 2FA bancaria española actual**~~: ✅ Resuelto 2026-04-30 vía S13. PSD2/SCA mandatorio EU desde 2019. BBVA/CaixaBank: app + biometría. Santander/Bankinter/Openbank/ING: SMS común. SMS sigue vulnerable. Detalle en C58.

- [x] ~~**Posición pública del Banco de España / BCE sobre IA en cyberseguridad post-Mythos**~~: ✅ Resuelto 2026-04-30 vía S10 (El País). BCE convocó bancos significativos zona euro hace ~2 semanas y pidió planes de contingencia (C48-C49). Lagarde se pronunció a Bloomberg (C50). BdE pidió a entidades planes de adopción (C54). Anteproyecto de Ley designa BdE+CNMV como supervisores IA.

## No bloqueantes (mejorarían la charla)

- [ ] Coverage de prensa primaria sobre Mythos (NYT, FT, Reuters, Bloomberg).
- [ ] Respuestas de la comunidad AI safety en LessWrong / AAF.
- [ ] Análisis policy de CSET, GovAI, RAND.
- [ ] Reacción de OpenAI / GDM al anuncio (¿silencio? ¿respuesta?).
- [ ] Listado de partners de Project Glasswing si es público.
- [ ] Críticas conocidas al modelo Glasswing (alguien ya escribió "esto no es suficiente"?).

## Logística

- [x] Duración: **60-75 min** (charla + Q&A).
- [ ] Formato Q&A (¿al final? ¿intercalado?).
- [ ] Tamaño de sala estimado.
- [x] Audiencia: hispanohablante, predominantemente sociedad civil + algo técnico ML + ingenieros software. Host: AISafety Madrid.
- [ ] ¿Se graba? ¿Se publica? Afecta cuánto puedo hablar de cosas no del todo verificadas.
