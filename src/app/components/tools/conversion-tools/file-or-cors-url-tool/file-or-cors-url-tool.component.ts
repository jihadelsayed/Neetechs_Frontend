import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FfmpegService } from './utils/ffmpeg.service';

@Component({
  selector: 'app-file-or-cors-url-tool',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './file-or-cors-url-tool.component.html',
  styleUrls: ['./file-or-cors-url-tool.component.scss']
})
export class FileOrCorsUrlToolComponent implements OnInit {
  // Provided by ToolRunner via [tool] Input
  tool: any;

  file?: File;
  url = '';
  mode = ''; // jobOption.value
  logs: string[] = [];
  busy = false;

  downloadUrl = '';
  downloadName = 'output.mp3';

  constructor(private ff: FfmpegService) {}

  async ngOnInit() {
    await this.ff.init((m) => this.logs.push(m));
    if (this.tool?.jobOption?.length) this.mode = this.tool.jobOption[0].value;
  }

  onFile(e: Event) {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (f) this.file = f;
  }

  private async fetchCorsFile(u: string): Promise<File> {
    const r = await fetch(u, { mode: 'cors' });
    if (!r.ok) throw new Error('Fetch failed: ' + r.status);
    const b = await r.blob();
    const name = (u.split('/').pop() || 'video').split('?')[0] || 'video.mp4';
    return new File([b], name, { type: b.type || 'video/mp4' });
  }

  private preset() {
    switch (this.mode) {
      case 'high-quality': return { vbrQuality: 2 }; // VBR q=2
      case 'small-size':   return { bitrateKbps: 128 };
      default:             return { vbrQuality: 2 };
    }
  }

  async run() {
    try {
      this.busy = true;
      this.logs = [];
      const input = this.file || (this.url ? await this.fetchCorsFile(this.url) : undefined);
      if (!input) throw new Error('Select a file or enter a CORS-enabled URL.');
      const { blob, fileName } = await this.ff.toMp3(input, this.preset());
      this.downloadUrl = URL.createObjectURL(blob);
      this.downloadName = fileName;
    } catch (e: any) {
      this.logs.push('ERROR: ' + (e?.message || String(e)));
    } finally {
      this.busy = false;
    }
  }
}
