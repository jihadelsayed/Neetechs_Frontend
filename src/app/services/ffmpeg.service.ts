import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

@Injectable({ providedIn: 'root' })
export class FfmpegService {
  private ff?: FFmpeg;
  private loaded = false;

  // If you prefer hosting locally, set to '/assets/ffmpeg'
  // and copy the three core files there (see note below).
  private coreBase =
    'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';

  constructor(@Inject(PLATFORM_ID) private pid: Object) {}

  get isReady() { return this.loaded; }


async init(onLog?: (m: string) => void) {
  if (!isPlatformBrowser(this.pid)) return;
  if (this.loaded) return;

  this.ff = new FFmpeg();

  if (onLog) this.ff.on('log', ({ message }) => onLog(message));

  // point at CDN or local assets
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';

  const coreURL   = await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript');
  const wasmURL   = await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm');
  const workerURL = await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript');

  await this.ff.load({ coreURL, wasmURL, workerURL });
  this.loaded = true;
}


  async toMp3(
    file: File,
    opts?: { bitrateKbps?: number; vbrQuality?: number; sampleRate?: number }
  ) {
    if (!this.loaded || !this.ff) throw new Error('FFmpeg not loaded');

    const inputName = 'input.' + (file.name.split('.').pop() || 'mp4');
    const outputName = 'output.mp3';

    await this.ff.writeFile(inputName, await fetchFile(file));

    const args = ['-i', inputName, '-vn'];
    if (opts?.sampleRate) args.push('-ar', String(opts.sampleRate));
    if (typeof opts?.vbrQuality === 'number') {
      args.push('-c:a', 'libmp3lame', '-q:a', String(opts.vbrQuality));
    } else {
      const kbps = opts?.bitrateKbps ?? 192;
      args.push('-c:a', 'libmp3lame', '-b:a', `${kbps}k`);
    }
    args.push(outputName);

    await this.ff.exec(args);

    // Avoid SAB issues: copy to a normal ArrayBuffer before Blob
    const data = (await this.ff.readFile(outputName)) as Uint8Array;
    const buf = new ArrayBuffer(data.byteLength);
    new Uint8Array(buf).set(data);
    const blob = new Blob([buf], { type: 'audio/mpeg' });

    try { await this.ff.deleteFile(inputName); } catch {}
    try { await this.ff.deleteFile(outputName); } catch {}

    const base = file.name.replace(/\.[^.]+$/, '') || 'audio';
    return { blob, fileName: `${base}.mp3` };
  }
}
