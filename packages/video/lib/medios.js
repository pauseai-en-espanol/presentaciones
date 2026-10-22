// Llamadas a ffmpeg, ffprobe y whisper-cli (Homebrew: brew install ffmpeg whisper-cpp).

import { execFile, spawn } from 'node:child_process';
import { promisify } from 'node:util';

export async function duracion(archivo) {
  const { stdout } = await promisify(execFile)('ffprobe', [
    '-v',
    'error',
    '-show_entries',
    'format=duration',
    '-of',
    'csv=p=0',
    archivo,
  ]);
  return Number(stdout.trim());
}

// Ejecuta un programa y devuelve su stderr (ffmpeg escribe ahí lo que mide). Con `progreso`, ffmpeg informa de por
// dónde va y se pinta un porcentaje sobre `total` segundos.
export function ejecutar(programa, args, { progreso, total } = {}) {
  return new Promise((resolve, reject) => {
    const extra = progreso ? ['-progress', 'pipe:1', '-nostats'] : [];
    const hijo = spawn(programa, [...extra, ...args], { stdio: ['ignore', 'pipe', 'pipe'] });
    let err = '';
    hijo.stderr.on('data', (d) => (err += d));
    hijo.stdout.on('data', (d) => {
      const m = /out_time_us=(\d+)/.exec(String(d));
      if (progreso && m && total) {
        process.stdout.write(
          `\r${progreso}: ${Math.min(100, (Number(m[1]) / 1e6 / total) * 100).toFixed(0)} %   `,
        );
      }
    });
    hijo.on('error', reject);
    hijo.on('close', (codigo) => {
      if (progreso) process.stdout.write('\n');
      if (codigo === 0) resolve(err);
      else
        reject(
          new Error(
            `${programa} terminó con código ${codigo}:\n${err.split('\n').slice(-15).join('\n')}`,
          ),
        );
    });
  });
}

export const ffmpeg = (args, opciones) =>
  ejecutar('ffmpeg', ['-nostdin', '-hide_banner', '-y', ...args], opciones);

// Envolvente de volumen en dB, una muestra cada 10 ms, de un WAV mono de 16 bits (el que sale de `preparar`).
export function envolvente(wav, frecuencia = 16000) {
  // ffmpeg puede meter más bloques antes de los datos (LIST), así que se busca el bloque «data».
  let inicio = 12;
  while (wav.toString('ascii', inicio, inicio + 4) !== 'data')
    inicio += 8 + wav.readUInt32LE(inicio + 4);
  inicio += 8;
  const copia = wav.subarray(inicio, inicio + Math.floor((wav.length - inicio) / 2) * 2);
  const datos = new Int16Array(
    copia.buffer.slice(copia.byteOffset, copia.byteOffset + copia.length),
  );
  const ventana = frecuencia / 100;
  const db = new Float32Array(Math.floor(datos.length / ventana));
  for (let i = 0; i < db.length; i++) {
    let suma = 0;
    for (let j = i * ventana; j < (i + 1) * ventana; j++) suma += datos[j] * datos[j];
    db[i] = 10 * Math.log10(suma / ventana / 32768 ** 2 + 1e-10);
  }
  return db;
}
