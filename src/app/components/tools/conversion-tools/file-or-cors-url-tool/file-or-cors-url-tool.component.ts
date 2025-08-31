import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ToolService } from '../../tool.service';
import { FfmpegService } from '../../../../services/ffmpeg.service'; // keep this path if that's where you placed it

@Component({
  selector: 'app-file-or-cors-url-tool',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ToolService],
  templateUrl: './file-or-cors-url-tool.component.html',
  styleUrls: ['./file-or-cors-url-tool.component.scss']
})
export class FileOrCorsUrlToolComponent implements OnInit, OnDestroy {
  tool: any;

  // routing params
  categoriesId: string | null = 'conversion_tools';
  toolId: string | null = null;

  // UI state
  file?: File;
  url = '';
  mode = '';              // from jobOption.value
  logs: string[] = [];
  busy = false;

  // result
  downloadUrl = '';
  downloadName = 'output.mp3';

  private subs = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toolService: ToolService,
    private ff: FfmpegService
  ) {}

  async ngOnInit() {
    await this.ff.init((m) => this.logs.push(m));

    this.subs.add(
      this.route.paramMap.subscribe((params) => {
        this.toolId = params.get('toolId');
        // if you ever pass category via route, pick it from url; else keep fixed
        this.categoriesId = 'conversion_tools';

        if (this.toolId) {
          this.fetchData(this.categoriesId!, this.toolId);
        } else {
          this.router.navigate(['/tools']);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private fetchData(categoriesId: string, toolId: string): void {
    this.subs.add(
      this.toolService.getCategoryData(categoriesId, toolId).subscribe((data: any) => {
        this.tool = data;
        // Default mode = first option if exists
        if (this.tool?.jobOption?.length) this.mode = this.tool.jobOption[0].value;
      })
    );
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
      case 'high-quality': return { vbrQuality: 2 };  // ~190–220 kbps VBR
      case 'small-size':   return { bitrateKbps: 128 };
      default:             return { vbrQuality: 2 };
    }
  }

  async run() {
    try {
      this.busy = true;
      this.logs = [];

      const input =
        this.file ||
        (this.url ? await this.fetchCorsFile(this.url) : undefined);

      if (!input) throw new Error('Select a file or enter a CORS-enabled URL.');

      const { blob, fileName } = await this.ff.toMp3(input, this.preset());

      // Force MP3 filename if needed
      const safeName = (fileName && fileName.endsWith('.mp3'))
        ? fileName
        : (input.name.replace(/\.[^.]+$/, '') || 'audio') + '.mp3';

      // Ensure correct content-type
      const mp3Blob = blob.type === 'audio/mpeg' ? blob : new Blob([await blob.arrayBuffer()], { type: 'audio/mpeg' });

      this.downloadUrl = URL.createObjectURL(mp3Blob);
      this.downloadName = safeName;
    } catch (e: any) {
      this.logs.push('ERROR: ' + (e?.message || String(e)));
    } finally {
      this.busy = false;
    }
  }
}
