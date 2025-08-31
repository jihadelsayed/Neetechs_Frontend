import { Injectable } from '@angular/core';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FfmpegService {
  private ff?: FFmpeg;
  private loaded = false;
constructor(@Inject(PLATFORM_ID) private pid: Object) {}

async init(onLog?: (m: string) => void) {
  if (!isPlatformBrowser(this.pid)) return; // skip on server
  if (this.loaded) return;
  this.ff = new FFmpeg();
  if (onLog) this.ff.on('log', ({ message }) => onLog(message));
  await this.ff.load();
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

    // Copy off SAB to avoid COOP/COEP issues
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
