// Editor de cortes: la transcripción palabra a palabra al lado de la grabación. Lo cortado sale tachado y, con
// «Saltar los cortes», el reproductor se lo salta, así que se oye cómo quedará. Cada cambio se guarda en video.json.

import { alinear } from '/lib/alinear.js';
import { ajustar, umbralSilencio } from '/lib/cortes.js';

const $ = (s) => document.querySelector(s);
const pantalla = $('#pantalla');
const camara = $('#camara');
const texto = $('#texto');

const seg = (v) =>
  typeof v === 'number'
    ? v
    : String(v)
        .split(':')
        .map(Number)
        .reduce((t, p) => t * 60 + p, 0);
const reloj = (s, dec = 2) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = (s % 60).toFixed(dec).padStart(dec ? 3 + dec : 2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${r}` : `${m}:${r}`;
};
const corto = (s) => reloj(Math.floor(s), 0);
const segs = (s) => `${s.toFixed(1).replace('.', ',')} s`;

const datos = await (await fetch('/datos')).json();
const total = datos.duracion;
const desfase = datos.video.camara?.desfase ?? 0;
const energia = new Float32Array(await (await fetch('/energia')).arrayBuffer());
const umbral = umbralSilencio(energia);
// Los bordes de un corte van al silencio más cercano, que es donde se queda en video.json y donde corta el render.
const fijar = (t) => (t <= 0 ? 0 : t >= total ? total : ajustar(t, energia, umbral));
document.title = `Cortes: ${datos.titulo}`;
$('#titulo').textContent = datos.titulo;
if (datos.camara) {
  camara.src = '/media/camara';
  camara.hidden = false;
}

const deJson = (c) => ({
  desde: seg(c.desde),
  hasta: c.hasta === 'fin' ? total : seg(c.hasta),
  motivo: c.motivo ?? '',
});
const aJson = (c) => ({
  desde: reloj(c.desde),
  hasta: c.hasta >= total - 0.01 ? 'fin' : reloj(c.hasta),
  ...(c.motivo ? { motivo: c.motivo } : {}),
});
// Las propuestas son cortes sugeridos: no se quitan hasta que se aceptan.
let estado = {
  cortes: (datos.video.cortes ?? []).map(deJson),
  propuestas: (datos.video.propuestas ?? []).map(deJson),
  secciones: (datos.video.secciones ?? []).map((s) => ({ desde: seg(s.desde), titulo: s.titulo })),
  notas: (datos.video.notas ?? []).map((n) => ({ en: seg(n.en), texto: n.texto })),
};

// Palabras y pausas, en orden. Las pausas cortas no se pintan.
const palabras = alinear(datos.palabras, datos.silencios);
const pausas = datos.silencios.filter((s) => s.t1 - s.t0 >= 0.7);
const items = [];
{
  let j = 0;
  const medio = (x) => (x.t0 + x.t1) / 2;
  for (const p of palabras) {
    while (j < pausas.length && medio(pausas[j]) < medio(p))
      items.push({ tipo: 'p', ...pausas[j++] });
    items.push({ tipo: 'w', ...p });
  }
  while (j < pausas.length) items.push({ tipo: 'p', ...pausas[j++] });
}
const indicesPalabra = items.map((x, k) => (x.tipo === 'w' ? k : -1)).filter((k) => k >= 0);

// ---- Guardar y deshacer ----
const historial = [];
let temporizador;
function cambiar(fn, { texto: repintarTexto = false } = {}) {
  historial.push(JSON.stringify(estado));
  fn();
  ordenar();
  if (repintarTexto) pintarTexto();
  pintar();
  guardar();
}
function deshacer() {
  if (!historial.length) return;
  estado = JSON.parse(historial.pop());
  pintarTexto();
  pintar();
  guardar();
}
function guardar() {
  $('#estado').textContent = 'Guardando…';
  clearTimeout(temporizador);
  temporizador = setTimeout(async () => {
    const cuerpo = {
      cortes: estado.cortes.map(aJson),
      propuestas: estado.propuestas.map(aJson),
      secciones: estado.secciones.map((s) => ({ desde: reloj(s.desde), titulo: s.titulo })),
      notas: estado.notas.map((n) => ({ en: reloj(n.en), texto: n.texto })),
    };
    const r = await fetch('/guardar', { method: 'POST', body: JSON.stringify(cuerpo) }).catch(
      () => null,
    );
    $('#estado').textContent = r?.ok
      ? 'Guardado'
      : 'No se ha podido guardar: ¿sigue abierto pnpm video editor?';
  }, 400);
}
// Motivos de cortes fundidos, sin repetir («Pausa; Pausa» → «Pausa»).
const unirMotivos = (...m) => [...new Set(m.join('; ').split('; ').filter(Boolean))].join('; ');
// Los cortes que se tocan se funden en uno.
function ordenar() {
  estado.cortes.sort((a, b) => a.desde - b.desde);
  const fundidos = [];
  for (const c of estado.cortes) {
    const u = fundidos.at(-1);
    if (u && c.desde <= u.hasta + 0.05) {
      u.hasta = Math.max(u.hasta, c.hasta);
      u.motivo = unirMotivos(u.motivo, c.motivo);
    } else fundidos.push({ ...c });
  }
  estado.cortes = fundidos.map((c) => ({ ...c, motivo: unirMotivos(c.motivo) }));
  estado.secciones.sort((a, b) => a.desde - b.desde);
  estado.propuestas.sort((a, b) => a.desde - b.desde);
}

const corteEn = (t) => estado.cortes.find((c) => t >= c.desde && t < c.hasta);
// Segundos de una pausa (o palabra) que quitan los cortes.
const quitadoDe = (x) =>
  estado.cortes.reduce(
    (s, c) => s + Math.max(0, Math.min(c.hasta, x.t1) - Math.max(c.desde, x.t0)),
    0,
  );
const cortado = (x) =>
  x.tipo === 'w' ? Boolean(corteEn((x.t0 + x.t1) / 2)) : quitadoDe(x) >= x.t1 - x.t0 - 0.05;
// Lo que queda de una pausa al acortarla con un clic.
const QUEDA = 0.3;
const propuesto = (x) =>
  estado.propuestas.some(
    (c) => Math.min(c.hasta, x.t1) - Math.max(c.desde, x.t0) > (x.t1 - x.t0) * 0.5,
  );
const extracto = (c) => {
  const t = items
    .filter((x) => x.tipo === 'w' && (x.t0 + x.t1) / 2 >= c.desde && (x.t0 + x.t1) / 2 < c.hasta)
    .map((x) => x.w)
    .join(' ');
  return t.length > 160 ? `${t.slice(0, 160)}…` : t || '(pausa)';
};

// ---- Transcripción ----
function marcar() {
  texto.querySelectorAll('[data-k]').forEach((el) => {
    const x = items[el.dataset.k];
    const corte = cortado(x);
    el.classList.toggle('cut', corte);
    el.classList.toggle('propuesta', !corte && propuesto(x));
    if (x.tipo === 'p') {
      // Una pausa acortada enseña lo que dura ahora.
      const quitado = quitadoDe(x);
      const acortada = !corte && quitado > 0.05;
      el.classList.toggle('acortada', acortada);
      el.textContent = acortada
        ? `${segs(x.t1 - x.t0).slice(0, -2)} → ${segs(x.t1 - x.t0 - quitado)}`
        : segs(x.t1 - x.t0);
    }
  });
}
function pintarTexto() {
  texto.replaceChildren();
  const secciones = [...estado.secciones];
  const notas = [...estado.notas].sort((a, b) => a.en - b.en);
  let parrafo = null;
  const nuevoParrafo = () => {
    parrafo = document.createElement('p');
    texto.append(parrafo);
  };
  nuevoParrafo();
  items.forEach((x, k) => {
    while (secciones.length && x.t0 >= secciones[0].desde - 0.05) {
      const s = secciones.shift();
      const h = document.createElement('h3');
      h.textContent = `${estado.secciones.indexOf(s) + 1}. ${s.titulo}`;
      texto.append(h);
      nuevoParrafo();
    }
    while (notas.length && x.t0 >= notas[0].en) {
      const n = notas.shift();
      const marca = document.createElement('span');
      marca.className = 'nota';
      marca.textContent = '⚑';
      marca.title = n.texto;
      parrafo.append(marca, ' ');
    }
    const el = document.createElement('span');
    el.dataset.k = k;
    if (x.tipo === 'w') {
      el.className = 'w';
      el.textContent = x.w;
      parrafo.append(el, ' ');
    } else {
      el.className = 'p';
      el.textContent = segs(x.t1 - x.t0);
      parrafo.append(el, ' ');
      if (x.t1 - x.t0 >= 1.5) nuevoParrafo();
    }
  });
  marcar();
}

// ---- Paneles ----
function pintar() {
  marcar();
  const quitado = estado.cortes.reduce((s, c) => s + (c.hasta - c.desde), 0);
  $('#resumen').textContent =
    `Grabación ${corto(total)} · cortado ${corto(quitado)} en ${estado.cortes.length} cortes · vídeo ${corto(total - quitado)}`;

  $('#bloque-propuestas').hidden = !estado.propuestas.length;
  $('#propuestas').replaceChildren(
    ...estado.propuestas.map((c, i) => {
      const li = document.createElement('li');
      li.innerHTML = `<div class="fila"><button class="ir" title="Escuchar este trozo">▶ ${corto(c.desde)}</button>
        <span class="dur">${segs(c.hasta - c.desde)}</span><span class="nota-texto"></span>
        <button class="aceptar">Cortar</button><button class="quitar" title="Descartar la propuesta">✕</button></div>
        <div class="extracto prop"></div>`;
      li.querySelector('.nota-texto').textContent = c.motivo;
      li.querySelector('.extracto').textContent = extracto(c);
      li.querySelector('.ir').onclick = () => escuchar(c.desde - 3);
      li.querySelector('.aceptar').onclick = () =>
        cambiar(() => {
          const [p] = estado.propuestas.splice(i, 1);
          estado.cortes.push({ ...p, desde: fijar(p.desde), hasta: fijar(p.hasta) });
        });
      li.querySelector('.quitar').onclick = () => cambiar(() => estado.propuestas.splice(i, 1));
      return li;
    }),
  );

  $('#cortes').replaceChildren(
    ...estado.cortes.map((c, i) => {
      const li = document.createElement('li');
      li.dataset.i = i;
      const fin = c.hasta >= total - 0.01;
      li.innerHTML = `<div class="fila"><button class="ir" title="Escuchar cómo queda">▶</button>
        <span class="rango">${reloj(c.desde, 1)} → ${fin ? 'fin' : reloj(c.hasta, 1)}</span>
        <span class="dur">${segs(c.hasta - c.desde)}</span><input placeholder="Motivo"><button class="quitar" title="Quitar el corte">✕</button></div>
        <div class="fila ajustes">
          ${c.desde > 0 ? 'Empieza <button data-borde="desde" data-d="-0.1" title="0,1 s antes">‹</button><button data-borde="desde" data-d="0.1" title="0,1 s después">›</button>' : ''}
          ${fin ? '' : 'Acaba <button data-borde="hasta" data-d="-0.1" title="0,1 s antes">‹</button><button data-borde="hasta" data-d="0.1" title="0,1 s después">›</button>'}
        </div>
        <div class="extracto"></div>`;
      li.querySelectorAll('[data-borde]').forEach((b) => {
        // Mover un borde 0,1 s y escuchar enseguida cómo queda.
        b.onclick = () => {
          cambiar(() => {
            const corte = estado.cortes[i];
            corte[b.dataset.borde] = Math.min(
              total,
              Math.max(0, corte[b.dataset.borde] + Number(b.dataset.d)),
            );
          });
          escuchar(estado.cortes[i].desde - 2);
        };
      });
      li.querySelector('input').value = c.motivo;
      li.querySelector('.extracto').textContent = extracto(c);
      li.querySelector('.ir').onclick = () => escuchar(c.desde - 3);
      li.querySelector('.quitar').onclick = () => cambiar(() => estado.cortes.splice(i, 1));
      li.querySelector('input').onchange = (e) =>
        cambiar(() => (estado.cortes[i].motivo = e.target.value.trim()));
      return li;
    }),
  );

  $('#secciones').replaceChildren(
    ...estado.secciones.map((s, i) => {
      const li = document.createElement('li');
      li.innerHTML = `<div class="fila"><button class="ir">▶ ${corto(s.desde)}</button><input><button class="quitar" title="Quitar la sección">✕</button></div>`;
      li.querySelector('input').value = s.titulo;
      li.querySelector('.ir').onclick = () => escuchar(s.desde);
      li.querySelector('.quitar').onclick = () =>
        cambiar(() => estado.secciones.splice(i, 1), { texto: true });
      li.querySelector('input').onchange = (e) =>
        cambiar(() => (estado.secciones[i].titulo = e.target.value.trim()), { texto: true });
      return li;
    }),
  );

  $('#bloque-notas').hidden = !estado.notas.length;
  $('#notas').replaceChildren(
    ...estado.notas.map((n, i) => {
      const li = document.createElement('li');
      li.innerHTML = `<div class="fila"><button class="ir">▶ ${corto(n.en)}</button><span class="nota-texto"></span><button class="quitar" title="Hecho">✓</button></div>`;
      li.querySelector('.nota-texto').textContent = n.texto;
      li.querySelector('.ir').onclick = () => escuchar(n.en - 2);
      li.querySelector('.quitar').onclick = () =>
        cambiar(() => estado.notas.splice(i, 1), { texto: true });
      return li;
    }),
  );
}

function escuchar(t) {
  pantalla.currentTime = Math.max(0, t);
  pantalla.play();
}

function cortarSeleccion() {
  const sel = getSelection();
  if (!sel.rangeCount || sel.isCollapsed) return;
  const rango = sel.getRangeAt(0);
  const tocados = [...texto.querySelectorAll('[data-k]')].filter((el) => rango.intersectsNode(el));
  if (!tocados.length) return;
  const desde = fijar(items[tocados[0].dataset.k].t0);
  const hasta = fijar(items[tocados.at(-1).dataset.k].t1);
  sel.removeAllRanges();
  cambiar(() => estado.cortes.push({ desde, hasta, motivo: '' }));
  const i = estado.cortes.findIndex((c) => c.desde <= desde && c.hasta >= hasta);
  $(`#cortes li[data-i="${i}"] input`)?.focus();
}

texto.addEventListener('click', (e) => {
  const el = e.target.closest('[data-k]');
  if (!el || !getSelection().isCollapsed) return;
  const x = items[el.dataset.k];
  const c = estado.cortes.find((c) => Math.min(c.hasta, x.t1) > Math.max(c.desde, x.t0));
  if (x.tipo === 'p' && c?.motivo === 'Pausa') {
    // Segundo clic: la pausa vuelve a ser como era.
    cambiar(() => estado.cortes.splice(estado.cortes.indexOf(c), 1));
    escuchar(x.t0 - 2);
  } else if (x.tipo === 'p' && !c && x.t1 - x.t0 > QUEDA + 0.1) {
    // Acortar una pausa: se quedan QUEDA segundos, la mitad a cada lado. Y se escucha cómo queda.
    cambiar(() =>
      estado.cortes.push({ desde: x.t0 + QUEDA / 2, hasta: x.t1 - QUEDA / 2, motivo: 'Pausa' }),
    );
    escuchar(x.t0 - 2);
  } else if (c && (cortado(x) || x.tipo === 'p')) {
    const li = $(`#cortes li[data-i="${estado.cortes.indexOf(c)}"]`);
    li?.scrollIntoView({ block: 'center' });
    li?.classList.add('destaca');
    setTimeout(() => li?.classList.remove('destaca'), 1200);
    pantalla.currentTime = Math.max(0, c.desde - 2);
  } else {
    marcada?.classList.remove('marcada');
    marcada = el;
    el.classList.add('marcada');
    pantalla.currentTime = fijar(x.t0);
  }
});

// La palabra seleccionada o, si no hay selección, la última en la que se ha hecho clic.
let marcada = null;
function palabraElegida(ultima) {
  const sel = getSelection();
  if (sel.rangeCount && !sel.isCollapsed) {
    const tocadas = [...texto.querySelectorAll('.w')].filter((el) =>
      sel.getRangeAt(0).intersectsNode(el),
    );
    sel.removeAllRanges();
    if (tocadas.length) return items[(ultima ? tocadas.at(-1) : tocadas[0]).dataset.k];
  }
  return marcada ? items[marcada.dataset.k] : null;
}
$('#empieza').onclick = () => {
  const p = palabraElegida(false);
  if (p)
    cambiar(() =>
      estado.cortes.push({ desde: 0, hasta: fijar(p.t0), motivo: 'Antes del principio' }),
    );
};
$('#acaba').onclick = () => {
  const p = palabraElegida(true);
  if (p)
    cambiar(() =>
      estado.cortes.push({ desde: fijar(p.t1), hasta: total, motivo: 'Después del final' }),
    );
};

$('#cortar').onclick = cortarSeleccion;
$('#nueva-seccion').onclick = () => {
  const t = pantalla.currentTime;
  const p = palabras.find((w) => w.t1 > t) ?? { t0: t };
  cambiar(() => estado.secciones.push({ desde: p.t0, titulo: 'Nueva sección' }), { texto: true });
  [...$('#secciones').querySelectorAll('input')].find((i) => i.value === 'Nueva sección')?.select();
};
$('#velocidad').onchange = (e) => (pantalla.playbackRate = Number(e.target.value));

document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, select, textarea') || e.target === pantalla) return;
  if (e.key === ' ') {
    e.preventDefault();
    if (pantalla.paused) pantalla.play();
    else pantalla.pause();
  } else if (e.key.toLowerCase() === 'x' && !e.metaKey && !e.ctrlKey) {
    cortarSeleccion();
  } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z') {
    e.preventDefault();
    deshacer();
  }
});

// ---- Reproducción: saltar cortes, cámara sincronizada y palabra actual ----
let actual = -1;
function bucle() {
  const t = pantalla.currentTime;
  if ($('#saltar').checked && !pantalla.paused) {
    const c = corteEn(t);
    if (c) pantalla.currentTime = Math.min(total, c.hasta + 0.01);
  }
  if (datos.camara) {
    const objetivo = pantalla.currentTime + desfase;
    if (Math.abs(camara.currentTime - objetivo) > 0.25) camara.currentTime = Math.max(0, objetivo);
    if (pantalla.paused !== camara.paused) {
      if (pantalla.paused) camara.pause();
      else camara.play().catch(() => {});
    }
    camara.playbackRate = pantalla.playbackRate;
  }
  const k = palabraEn(t);
  if (k !== actual) {
    texto.querySelector(`[data-k="${actual}"]`)?.classList.remove('now');
    const el = texto.querySelector(`[data-k="${k}"]`);
    el?.classList.add('now');
    actual = k;
    if (el && $('#seguir').checked && !pantalla.paused) {
      const r = el.getBoundingClientRect();
      if (r.top < 120 || r.bottom > innerHeight - 80)
        el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }
  requestAnimationFrame(bucle);
}
function palabraEn(t) {
  let lo = 0;
  let hi = indicesPalabra.length - 1;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (items[indicesPalabra[mid]].t0 <= t) lo = mid;
    else hi = mid - 1;
  }
  return indicesPalabra[lo];
}

ordenar();
pintarTexto();
pintar();
$('#estado').textContent = 'Guardado';
requestAnimationFrame(bucle);
