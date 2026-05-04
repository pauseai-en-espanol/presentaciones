# Kill Chains — Mythos-class capability & el ciudadano español

> **Propósito**: hacer concretas las consecuencias de la asimetría que la charla describe. No son escenarios reales (no hay evidencia de ataques así con Mythos hoy) — son **plausibles dadas las capacidades documentadas**. Cada paso etiquetado:
>
> - 🟢 **Confirmado**: dato verificable hoy con fuente.
> - 🟡 **Plausible**: extrapolación razonable de capacidades documentadas + mecanismos conocidos.
> - 🔴 **Especulativo**: requiere asunción adicional.
>
> **Disciplina pedagógica**: la charla muestra el **patrón** y la **brecha** (quién tiene acceso defensivo y quién no), NO operativos detallados. Si un slide se acerca a "cómo hacerlo", se reformula.
>
> **Para una sala de sociedad civil hispanohablante**: el objetivo no es asustar — es hacer que la asimetría se sienta _en el bolsillo de cada persona de la sala_. La conclusión emerge sola.

---

## Pre-cita: ¿qué hace Mythos-class HOY?

🟢 Confirmado (Mythos system card S2 + announcement S1 + Mozilla S5):

- Encuentra zero-days en software auditado durante décadas (bugs de 16, 17, 27 años).
- Desarrolla exploits funcionales encadenados de forma autónoma (CVE-2026-4747: RCE en FreeBSD via NFS).
- Mozilla pre-identificó **271 vulnerabilidades** en Firefox 150 (vs 22 con Opus 4.6).
- Ha identificado _"thousands of zero-day vulnerabilities across critical infrastructure"_ (Glasswing page).
- En cyber-ranges privados, completó autonomamente un ataque corporativo end-to-end estimado en 10h+ de experto humano.
- Anthropic _misma_ dice: _"capable of conducting autonomous end-to-end cyber-attacks on at least small-scale enterprise networks with weak security posture"_ (Q13).

🟡 Plausible:

- Capacidades similares aparecerán en modelos posteriores broadly-available. Anthropic enmarca Glasswing como ventana hasta que esto ocurra (Q8: _"before models with similar capabilities become broadly available"_).

---

## Kill Chain #1 — De tu router a tu ordenador

### Setup factual

🟢 **Quién está en Glasswing (S3)**: AWS, Apple, Anthropic, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, Linux Foundation, Microsoft, NVIDIA, Palo Alto Networks. + 40 organizaciones no listadas.

🟢 **Quién hace el router doméstico típico en España** _(verificado 2026-04-30 vía S12, C57)_:

- **Movistar / O2** (Telefónica): HGU — **MitraStar** + **Askey** (Asus brand).
- **Vodafone**: **Sercomm** (RHG3006, FG824CD, Vox 3.0) + **ZTE** en transición (F6600P).
- **Orange**: Livebox 6/7 — **Sagemcom** + **Arcadyan** + **ZTE**.
- **Digi**: **ZTE** (H3600P, F8748Q).
- **MásMóvil**: **ZTE**.

→ **Ninguno de estos fabricantes aparece en Glasswing.** Cisco está en Glasswing pero Cisco no equipa al consumidor doméstico español. (C57)

🟢 **Track record CVE de estos fabricantes**: histórico documentado de vulnerabilidades en firmware ISP-distributed (CVE-2017-XXX en ZyXEL/Mitrastar, CVE-2020-XXX en Sagemcom Livebox, etc. — _citar 2-3 CVEs concretos antes de slide_).

🟢 **Realidad operativa del firmware de routers ISP**: el usuario rara vez puede actualizar manualmente — la actualización viene del ISP. El ISP actualiza cuando le toca. Modelos en EOL siguen desplegados durante años.

### El chain

| Paso | Estado  | Descripción                                                                                                                                                                                                                                                                                            |
| ---- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | 🟢 / 🟡 | Modelo Mythos-class encuentra zero-day en firmware de un router ISP español (Mitrastar/Sagemcom/Sercomm). 🟢 Mythos lo _puede_ hacer hoy según S2 §3.1. 🟡 Que ocurra contra estos fabricantes específicos requiere actor con acceso (vid. C32: ya hay grupo no autorizado con acceso desde el día 1). |
| 2    | 🟡      | El zero-day es serio (RCE remoto autenticado o no, similar al patrón de CVE-2026-4747 FreeBSD/NFS). El fabricante NO está en Glasswing → no recibió análisis defensivo previo.                                                                                                                         |
| 3    | 🟢      | Atacante explota router internet-facing. Patrón conocido: routers ISP exponen interfaces de gestión, UPnP, servicios DLNA, etc.                                                                                                                                                                        |
| 4    | 🟢      | Desde el router, atacante controla la LAN: DNS hijacking, manipulación de certificados (no MITM en HTTPS si los certs son válidos, pero sí en cualquier servicio sin HSTS o con descarga inicial), inyección en tráfico HTTP plano, captura de paquetes.                                               |
| 5    | 🟢 / 🟡 | Vector hacia dispositivos de la red: actualizaciones envenenadas (apps mal firmadas o sin firmar), exploit de browser via página inyectada, acceso a IoT/Smart TVs/asistentes (todos con superficie de ataque conocida y mal mantenida).                                                               |
| 6    | 🟢 / 🟡 | Code execution en el ordenador / móvil → persistencia → exfiltración o uso del equipo en botnet/proxy.                                                                                                                                                                                                 |

### Reflexión (Beat de la charla)

- **Elección de equipo**: el español típico no elige router. Lo da el ISP. Quien sí elige, casi nunca verifica si el fabricante recibe análisis defensivo IA-asistido.
- **EOL (End of Life)**: equipos sin soporte siguen siendo el equipo doméstico de millones. Una vez fuera de soporte, ningún parche llega.
- **Updates**: incluso cuando hay parche, el ciclo ISP→usuario es lento. Y si el usuario tiene que aprobar, muchos no lo hacen.
- **Asymmetry of who's protected**: AWS, Apple, Cisco (enterprise), Microsoft, Google → tu cuenta de Gmail probablemente está protegida defensivamente con Mythos-class análisis. Tu router doméstico, no.

### Lo que NO entra en el slide

- CVEs específicos que sigan vigentes / sin parchear en equipo desplegado.
- Detalles operativos de cómo encadenar exploits.
- Nombres concretos de modelos de router con el bug, si se pudieran identificar.

El slide muestra: la **lista Glasswing** + el **fabricante de tu router** lado a lado. La conclusión la saca la sala.

---

## Kill Chain #2 — De Mythos a tu cuenta del banco

### Setup factual

🟢 **Bancos en Glasswing oficial (S3)**: JPMorganChase. (Único.)

🟢 **Bancos US testando Mythos (S8/Q43)**: Goldman Sachs, Citigroup, Bank of America, Morgan Stanley.

🟢 **Push gubernamental US (S8/Q44)**: Treasury Secretary Scott Bessent convocó banqueros US en abril 2026 para promover el uso defensivo de Mythos.

🟢 **Bancos españoles**: BBVA, Santander, CaixaBank, Sabadell, Bankinter, Unicaja, etc. → **Ningún anuncio público de acceso a Mythos o programa equivalente.** (C41)

🟢 **Mecanismos 2FA bancarios típicos en España (verificado 2026-04-30 vía S13, C58)**:

- PSD2/SCA obligatorio EU desde 2019. **2 factores de 3 categorías** (sabes / tienes / eres).
- BBVA, CaixaBank: app móvil + **biometría** (huella/facial/iris) como factor "tienes/eres".
- Santander, Bankinter, Openbank, ING: **SMS** sigue común como factor "tienes".
- _SMS-2FA es el más vulnerable_ (SIM swap, SS7, malware en móvil).
- _Push-to-app y biometría son más resistentes pero ambos dependen de la integridad del dispositivo_. Si el atacante controla el móvil (vía Kill Chain #1 → router → device, o vía exploit en app), incluso push notifications se pueden interceptar/abusar.

🟢 **Realidad**: la mayoría de operaciones se autorizan vía app móvil de banco español → la app móvil es la superficie de ataque crítica.

### El chain (variante A — vía vuln en app/web del banco)

| Paso | Estado  | Descripción                                                                                                                                                                                                                  |
| ---- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 🟡      | Modelo Mythos-class identifica vulnerabilidad en backend de banco español O en app móvil del banco. _Plausible dado que esto es exactamente lo que hizo Mozilla con Firefox y Mythos en sistemas auditados durante décadas._ |
| 2    | 🟢      | El banco español NO está en Glasswing. NO recibió análisis defensivo previo.                                                                                                                                                 |
| 3    | 🟡 / 🔴 | Actor con acceso (recordar C32: grupo no autorizado lo tiene desde día 1; C39 Lindner: probablemente actores estatales también) explota la vulnerabilidad.                                                                   |
| 4    | 🟢      | Patrones conocidos: session hijacking, broken authentication, IDOR, vulnerabilidades en flujos de autenticación 2FA.                                                                                                         |
| 5    | 🟢      | Si la 2FA es SMS: ataques colaterales bien conocidos (SIM swap, SS7, malware en móvil para interceptar).                                                                                                                     |
| 6    | 🟢      | Acceso a cuenta → operaciones autorizadas o bypass de límites.                                                                                                                                                               |

### El chain (variante B — vía router → móvil → app banco)

Encadenamiento con Kill Chain #1: si el atacante controla la LAN doméstica, el móvil que ejecuta la app del banco está en una red comprometida → vector adicional para envenenar actualizaciones, MITM en flujos no HSTS, etc.

### Reflexión (Beat de la charla)

- **Asimetría geográfica**: el regulador US empuja adopción defensiva. El BCE/Banco de España no tiene programa equivalente público.
- **Asimetría del usuario**: si tienes cuenta en JPM Chase (US) tu banco está usando Mythos defensivamente. Si tienes cuenta en CaixaBank, no se sabe.
- **Tiempo defensivo**: la "ventana" de Glasswing (Q8) está siendo usada por bancos US para securizar. Bancos UE/españoles no están en esa ventana.
- **Reflejo del marco general**: la asimetría en cyber refleja la asimetría en gobernanza IA. Quien hace el modelo, quien recibe el modelo, quien queda fuera.

---

---

## Asymmetry #3 — Ventaja competitiva: Mythos no es solo "escudo cyber", es el modelo más capaz para _cualquier cosa_

> Esto **no es una kill chain** — no hay atacante. Es una asimetría estructural de acceso a la herramienta más potente disponible. Pero compone con las anteriores y merece su propia reflexión.

### Setup factual

🟢 **Anthropic describe Mythos como general-purpose** (Q29b, S3): _"Claude Mythos Preview is a general-purpose frontier model from Anthropic, our most capable yet for coding and agentic tasks."_

🟢 **El abstract del system card** (Q29c, S2): _"Claude Mythos Preview is our most capable frontier model to date, and shows a striking leap in scores on many evaluation benchmarks compared to our previous frontier model, Claude Opus 4.6."_

→ Mythos no es una variante cyber — es el frontier de Anthropic para todo.

🟢 **Pricing existe** (S3): $25/$125 per million tokens input/output. Es comercial — pero solo para los listados.

🟢 **La barrera no es económica, es la lista** (C47): si fueras una empresa española dispuesta a pagar el precio, no se te ofrece la opción.

🟢 **Evidencia empírica del uso general** (C46, vía Q36): el grupo no autorizado, teniendo acceso a un modelo "demasiado peligroso para liberar generalmente por sus capacidades cyber", lo usa para _construir webs simples_. Porque el modelo es útil para todo.

### El "chain" (asimetría compuesta)

| Punto | Estado | Descripción                                                                                                                                                                                                                              |
| ----- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | 🟢     | Tu empresa española (PYME, startup, ONG, sector público) usa Claude Opus 4.6 / Sonnet / GPT-5.5 / etc. — modelos públicos.                                                                                                               |
| 2     | 🟢     | AWS / Apple / Google / Microsoft / NVIDIA / Cisco / Broadcom / Palo Alto / JPM Chase / etc. usan Claude Mythos Preview.                                                                                                                  |
| 3     | 🟢     | Mythos es objetivamente más capaz en _coding y agentic tasks_ (Q29b, Q29c).                                                                                                                                                              |
| 4     | 🟡     | Diferencial de productividad en software dev, agentes autónomos, análisis. _Plausible y consistente con los datos: si la diferencia entre Opus 4.6 y Mythos es la que reportan en cyber, la diferencia en otros dominios es comparable._ |
| 5     | 🟡     | Empresas con acceso lanzan productos más rápido, con menos bugs (Mozilla 271 vulns prevenidas como ejemplo _publicado_), con menos coste de desarrollo.                                                                                  |
| 6     | 🔴     | Distorsión competitiva sostenida → concentración de mercado → menor competencia efectiva en mercados donde los partners actúan. _Especulativo pero coherente con dinámicas de moats tecnológicos._                                       |

### Reflexión (Beat de la charla)

- **Quién decide quién accede al frontier**: Anthropic. No un regulador, no un estándar de mercado. Una empresa privada decide quién está en la lista. Esa decisión configura el panorama de adopción IA en el sector real.
- **El argumento de "dual use" funciona en ambas direcciones**: lo que se restringe por seguridad cyber se concede como ventaja general. La lista de partners obtiene capacidades de código, análisis, agentes que el resto del mercado no tiene.
- **Asimetría geográfica sin equivalente UE**: 12 launch partners — todos US (excepto Linux Foundation que es trans-nacional pero con base US). 4 bancos US adicionales testando. Push del Treasury US. Sin contraparte BCE/UE/España. Las empresas y administraciones europeas trabajan con menos capacidad neta.
- **Sovereignty implicit**: la conversación europea sobre "soberanía digital" y "AI sovereignty" tiene un dato concreto que añadir — la herramienta IA más capaz hoy es accesible a una lista decidida en Palo Alto, sin participación europea documentada.
- **No es un argumento de antitrust** (esta charla no entra ahí), pero sí una observación: la asimetría que documenta Mythos no se limita al tablero cyber — atraviesa el tablero económico-competitivo.

### Para el slide / la sala

- Mostrar la lista Glasswing.
- Mostrar la frase verbatim Q29b ("our most capable yet for coding and agentic tasks").
- Preguntar (no responder): ¿qué empresa española trabaja con esa herramienta? ¿qué administración? ¿qué hospital, qué medio, qué universidad?
- Dejar la pregunta colgando.

---

## Caveats globales

1. **Estos escenarios son ilustrativos, no predicciones**. La probabilidad de ocurrencia específica con Mythos-actual es baja (Glasswing partners están enfocados defensivamente, el grupo no autorizado declara objetivo no-malicioso). Los presentamos para hacer concreta la _estructura_ del riesgo.

2. **El argumento NO es "Mythos te va a hackear"**. El argumento es: _"si la asimetría que documenta Mythos es estructural, los siguientes modelos broadly-available cierran la asimetría — y ahí es donde el ciudadano sin acceso defensivo paga el coste"_.

3. **No editorializar en sala**. Presentar la lista, presentar el dato, dejar que la conclusión emerja. La sala es AI-safety-curious, no necesita que se le diga qué pensar.

4. **Verbatim de defenders ON**: la charla debe citar a Holley (S5) — _"defenders finally have a chance to win, decisively"_ — y a Mozilla logrando 271 vulns. Honesto. La pregunta queda: ¿quién más tiene acceso al "winning"?

5. **Verbatim de skeptics ON**: Sam Altman _"fear-based marketing"_ (Q41). Honesto. La respuesta: independientemente de la intención narrativa, lo que pasó en 24h después del anuncio (acceso no autorizado, día 1) es un hecho.

---

## TODOs antes de slide

- [x] ~~Verificar fabricantes vigentes 2026 de routers ISP españoles~~: ✅ resuelto 2026-04-30 (C57, S12).
- [ ] Identificar 2-3 CVEs históricos (parcheados) de fabricantes españoles para ilustrar track record sin nombrar vulns vigentes. _Opcional — el slide funciona sin esto._
- [x] ~~Confirmar mecanismo 2FA típico actual en bancos españoles~~: ✅ resuelto 2026-04-30 (C58, S13). PSD2/SCA + mix biometría + SMS.
- [x] ~~Buscar declaraciones públicas de bancos españoles o BdE/BCE sobre IA y ciberseguridad post-Mythos~~: ✅ resuelto 2026-04-30 (S10, C48-C56). Lagarde + BCE + BdE + Anteproyecto Ley IA.
- [ ] Revisar el lenguaje de los slides para asegurar no-operatividad: _educational, no operacional_. _Pendiente para fase de slides._

## Sources used

- S1 (Mythos announcement) — capacidades, ventana
- S2 (Mythos system card) — métricas cyber, mitigaciones, "most capable frontier model to date"
- S3 (Glasswing page) — lista de partners, "general-purpose frontier model"
- S5 (Ars Technica / Mozilla) — 271 vulns, defender frame
- S6/S7/S8 (TC/Fortune/Euronews) — acceso no autorizado, banks US, Treasury push, Lindner, Altman

## Claims used

- C7-C9 (capacidades Mythos)
- C22-C25 (Glasswing structure)
- C29-C30 (Mozilla 271 + Holley)
- C32-C38 (acceso no autorizado + Lindner + Altman)
- C39-C42 (banking + routers ES)
- C43-C47 (ventaja competitiva — general-purpose, lista no precio)
