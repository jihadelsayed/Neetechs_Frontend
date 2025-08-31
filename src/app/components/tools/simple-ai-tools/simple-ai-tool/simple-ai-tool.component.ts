import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ToolService } from '../../tool.service';
import { GrammarCheckService, ToolMode } from './services/grammar-check.service';
import { Subscription } from 'rxjs';
import { ApiKeyModalComponent } from '../../../../shared/api-key-modal/api-key-modal.component';
import { ContactBannerComponent } from '../../../../shared/contact-banner/contact-banner.component';

@Component({
  selector: 'app-simple-ai-tool',
  standalone: true,
  imports: [FormsModule, CommonModule, ContactBannerComponent, ApiKeyModalComponent],
  providers: [ToolService, GrammarCheckService],
  templateUrl: './simple-ai-tool.component.html',
  styleUrls: ['./simple-ai-tool.component.scss'],
})
export class SimpleAiToolComponent implements OnInit, OnDestroy {
  tool: any;
  categoriesId: string | null = null;
  toolId: string | null = null;
isLoading = false;
errorOpen = false;
errorMsg = '';
  inputText = '';
  result = '';
  toolMode: ToolMode = 'grammar';

  selectedModel = 'gpt-5-mini'; // default; overwritten from localStorage

  @ViewChild(ApiKeyModalComponent) apiKeyModal!: ApiKeyModalComponent;
  apiKey = '';

  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toolService: ToolService,
    private grammarCheckService: GrammarCheckService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoriesId = 'none';
      this.toolId = params.get('toolId');

      if (this.categoriesId && this.toolId) {
        this.fetchData(this.categoriesId, this.toolId);
      } else if (this.categoriesId) {
        this.router.navigate(['/tools/' + this.categoriesId]);
      } else {
        this.router.navigate(['/tools/']);
      }
    });

    if (typeof localStorage !== 'undefined') {
      this.apiKey = localStorage.getItem('apiKey') || '';
      this.selectedModel = localStorage.getItem('openai:model') || 'gpt-5-mini';
    }

    if (!this.apiKey) {
      setTimeout(() => (this.apiKeyModal.showModal = true), 0);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private fetchData(categoriesId: string, toolId: string): void {
    this.subscriptions.add(
      this.toolService.getCategoryData(categoriesId, toolId).subscribe((data: any) => {
        this.tool = data;
        this.tool.jobOption = [
          { value: 'grammar', text: 'Grammar Check' },
          { value: 'spelling', text: 'Spelling Check' },
          { value: 'style', text: 'Style Suggestions' },
        ];
      })
    );
  }

  // NOTE: updated signature to receive model
  onApiKeySaved(payload: { apiKey: string; model: string }): void {
    this.apiKey = payload.apiKey;
    this.selectedModel = payload.model || 'gpt-5-mini';
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => alert('Copied.'));
  }

  executeTool(): void {
    if (!this.apiKey) {
      this.apiKeyModal.showModal = true;
      return;
    }
    this.performCheck(this.toolMode);
  }



private performCheck(mode: ToolMode): void {
  this.isLoading = true;
  this.subscriptions.add(
    this.grammarCheckService
      .checkText(this.inputText, mode, { apiKey: this.apiKey, model: this.selectedModel /* no temperature by default */ })
      .subscribe(
        (response) => {
          this.isLoading = false;
          // safe path
          this.result =
            response?.choices?.[0]?.message?.content?.trim() ||
            `${mode.charAt(0).toUpperCase() + mode.slice(1)} check complete.`;
        },
        (error) => {
          this.isLoading = false;
          this.handleError(error, `Error performing ${mode} check:`);
        }
      )
  );
}

private handleError(error: any, _label: string): void {
  // Try to extract OpenAI-style error first
  const msg =
    error?.error?.error?.message ||           // OpenAI error.message
    error?.error?.message ||                  // generic API error
    error?.message ||                         // HttpErrorResponse message
    'Unexpected error';

  // Useful extras if present
  const code = error?.error?.error?.code;
  const param = error?.error?.error?.param;
  const status = error?.status;

  const detail = [
    status ? `HTTP ${status}` : null,
    code ? `code: ${code}` : null,
    param ? `param: ${param}` : null,
  ].filter(Boolean).join(' · ');

  this.errorMsg = detail ? `${msg}\n(${detail})` : msg;

  // If it looks like a temperature issue, suggest a fix
  if (/temperature/i.test(this.errorMsg)) {
    this.errorMsg += '\nTip: remove temperature or use an allowed value (try 0 or 1).';
  }

  this.errorOpen = true;   // open modal
}

}
