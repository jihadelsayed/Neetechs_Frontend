import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactBannerComponent } from '../../../shared/contact-banner/contact-banner.component';
import { ApiKeyModalComponent } from '../../../shared/api-key-modal/api-key-modal.component';
import { ToolService } from '../../tool.service';
import { GrammarCheckService } from './services/grammar-check.service';
import { checkGrammar, checkSpelling, suggestStyle } from './utils/grammar-check.utils';


@Component({
  selector: 'app-simple-ai-tool',
  standalone: true,
  imports: [FormsModule, CommonModule, ContactBannerComponent, ApiKeyModalComponent],
  providers: [ToolService],
    templateUrl: './simple-ai-tool.component.html',
  styleUrl: './simple-ai-tool.component.scss'
})
export class SimpleAiToolComponent implements OnInit {
  tool: any;
  categoriesId: string | null = null;
  toolId: string | null = null;
  inputText: string = '';
  result: string = '';
  toolMode: string = 'add-emojis-to-text'; // Default mode
  @ViewChild(ApiKeyModalComponent) apiKeyModal!: ApiKeyModalComponent;
  apiKey: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toolService: ToolService,
    private grammarCheckService: GrammarCheckService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoriesId = params.get('categoriesId');
      this.toolId = 'none'; // params.get('toolId');

      if (this.categoriesId && this.toolId) {
        this.fetchData(this.categoriesId, this.toolId);
      } else if (this.categoriesId) {
        this.router.navigate(['/tools/' + this.categoriesId]);
      } else {
        this.router.navigate(['/tools/']);
      }
    });
  }

  private fetchData(categoriesId: string, toolId: string): void {
    this.toolService
      .getCategoryData(categoriesId, toolId)
      .subscribe((data: any) => {
        this.tool = data;
      });
    // Check for API key in local storage
    this.apiKey = localStorage.getItem('apiKey') || '';
    if (!this.apiKey) {
      // Show modal if API key is not found
      setTimeout(() => {
        this.apiKeyModal.showModal = true;
      }, 0);
    }
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
    if (!this.apiKey && (this.toolMode === 'grammar-check' || this.toolMode === 'spelling-check' || this.toolMode === 'style-suggestions')) {
      // If the tool mode requires an API key and it's not available
      this.apiKeyModal.showModal = true;
      return;
    }

    switch (this.toolMode) {
      case 'grammar-check':
        this.performGrammarCheck();
        break;
      case 'spelling-check':
        this.performSpellingCheck();
        break;
      case 'style-suggestions':
        this.performStyleSuggestions();
        break;
      default:
        console.warn('Unknown tool mode:', this.toolMode);
    }
  }

  performGrammarCheck(): void {
    checkGrammar(this.inputText, this.grammarCheckService, this.apiKey).subscribe(
      (response) => {
        this.result = response.correctedText || 'Grammar checked successfully.';
      },
      (error) => {
        console.error('Error checking grammar:', error);
        alert(error.error.error.message);
      }
    );
  }

  performSpellingCheck(): void {
    checkSpelling(this.inputText, this.grammarCheckService, this.apiKey).subscribe(
      (response) => {
        this.result = response.correctedText || 'Spelling checked successfully.';
      },
      (error) => {
        console.error('Error checking spelling:', error);
        alert(error.error.error.message);
      }
    );
  }

  performStyleSuggestions(): void {
    suggestStyle(this.inputText, this.grammarCheckService, this.apiKey).subscribe(
      (response) => {
        console.log(response);
        this.result = response || 'Style suggestions provided successfully.';
      },
      (error) => {
        console.error('Error suggesting style:', error);
        alert(error.error.error.message);
      }
    );
  }
}


