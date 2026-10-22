// Transcripción palabra a palabra con whisper-cli (whisper.cpp). La usan `preparar`, con la grabación, y los
// subtítulos, con el audio del vídeo ya montado.

import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { availableParallelism, homedir } from 'node:os';
import { join } from 'node:path';

import { ejecutar } from './medios.js';

const MODELO =
  process.env.WHISPER_MODEL ?? join(homedir(), '.cache', 'whisper', 'ggml-large-v3-turbo.bin');

// Lee lo que dejó whisper en <base>.json.
export async function leerPalabras(base) {
  const { transcription } = JSON.parse(await readFile(`${base}.json`, 'utf8'));
  return transcription
    .map((s) => ({ w: s.text.trim(), t0: s.offsets.from / 1000, t1: s.offsets.to / 1000 }))
    .filter((p) => p.w && !/^\[.*\]$/.test(p.w));
}

// Transcribe un WAV mono de 16 kHz y devuelve las palabras con sus tiempos.
export async function transcribir(cfg, wav, base) {
  if (!existsSync(MODELO)) {
    throw new Error(
      `No encuentro el modelo de whisper en ${MODELO}. Descárgalo (1,6 GB) con:\n` +
        `curl -L -o ${MODELO} https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin\n` +
        'o indica otro con la variable WHISPER_MODEL.',
    );
  }
  // En frases normales: con «Nombre, Organización.» whisper empieza a poner «Nombre:» delante de las frases.
  const vocabulario = cfg.video.vocabulario?.length
    ? ` Aparecen nombres como ${cfg.video.vocabulario.join(', ')}.`
    : '';
  // -ml 1 -sow: un segmento por palabra, con su tiempo.
  await ejecutar('whisper-cli', [
    '-m',
    MODELO,
    '-l',
    cfg.lang,
    '-t',
    String(Math.min(8, availableParallelism())),
    '-ml',
    '1',
    '-sow',
    '-ojf',
    '-of',
    base,
    '--prompt',
    `Transcripción de la charla «${cfg.meta.title}», de ${cfg.meta.speaker} (PauseAI España).${vocabulario}`,
    '-f',
    wav,
  ]);
  return leerPalabras(base);
}
