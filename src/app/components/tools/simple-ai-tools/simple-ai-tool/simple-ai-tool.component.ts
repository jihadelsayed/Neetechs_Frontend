import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactBannerComponent } from '../../../shared/contact-banner/contact-banner.component';
import { ApiKeyModalComponent } from '../../../shared/api-key-modal/api-key-modal.component';
import { ToolService } from '../../tool.service';
import { GrammarCheckService } from './services/grammar-check.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-simple-ai-tool',
  standalone: true,
  imports: [FormsModule, CommonModule, ContactBannerComponent, ApiKeyModalComponent],
  providers: [ToolService, GrammarCheckService],
  templateUrl: './simple-ai-tool.component.html',
  styleUrls: ['./simple-ai-tool.component.scss']
})
export class SimpleAiToolComponent implements OnInit, OnDestroy {
  tool: any;
  categoriesId: string | null = null;
  toolId: string | null = null;
  inputText: string = '';
  result: string = '';
  toolMode: 'grammar' | 'spelling' | 'style' = 'grammar'; // Default mode
  @ViewChild(ApiKeyModalComponent) apiKeyModal!: ApiKeyModalComponent;
  apiKey: string = '';
  private subscriptions: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toolService: ToolService,
    private grammarCheckService: GrammarCheckService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoriesId = 'none'; // params.get('categoriesId');
      this.toolId = params.get('toolId');

      if (this.categoriesId && this.toolId) {
        this.fetchData(this.categoriesId, this.toolId);
      } else if (this.categoriesId) {
        this.router.navigate(['/tools/' + this.categoriesId]);
      } else {
        this.router.navigate(['/tools/']);
      }
    });

    // Fetch API key from local storage
    this.apiKey = localStorage.getItem('apiKey') || '';
    if (!this.apiKey) {
      setTimeout(() => {
        this.apiKeyModal.showModal = true;
      }, 0);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private fetchData(categoriesId: string, toolId: string): void {
    this.subscriptions.add(
      this.toolService.getCategoryData(categoriesId, toolId).subscribe((data: any) => {
        this.tool = data;
        // Ensure jobOption values match 'grammar' | 'spelling' | 'style'
        this.tool.jobOption = [
          { value: 'grammar', text: 'Grammar Check' },
          { value: 'spelling', text: 'Spelling Check' },
          { value: 'style', text: 'Style Suggestions' }
        ];
      })
    );
  }

  onApiKeySaved(): void {
    this.apiKey = localStorage.getItem('apiKey') || '';
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard!');
    });
  }

  executeTool(): void {
    if (!this.apiKey && (this.toolMode === 'grammar' || this.toolMode === 'spelling' || this.toolMode === 'style')) {
      this.apiKeyModal.showModal = true;
      return;
    }

    this.performCheck(this.toolMode);
  }

  private performCheck(mode: 'grammar' | 'spelling' | 'style'): void {
    this.subscriptions.add(
      this.grammarCheckService.checkText(this.inputText, this.apiKey, mode).subscribe(
        (response) => {
          console.log(response)
          this.result = response['choices'][0]['message']['content'] || `${mode.charAt(0).toUpperCase() + mode.slice(1)} check performed successfully.`;
        },
        (error) => {
          this.handleError(error, `Error performing ${mode} check:`);
        }
      )
    );
  }

  private handleError(error: any, message: string): void {
    console.error(message, error);
    alert(error.error?.message || 'An error occurred');
  }
}
