import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolService } from './tool.service';
import { CommonModule } from '@angular/common';
import { ContactBannerComponent } from "../../../shared/contact-banner/contact-banner.component";
import { addEmojisToText, translateToEmoji, translateToText } from '../utils/emoji.utils';

@Component({
  selector: 'app-tool',
  standalone: true,
  imports: [FormsModule, CommonModule, ContactBannerComponent],
  providers: [ToolService],
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
})
export class ToolComponent {
  tool: any;
  categoriesId: string | null = null;
  toolId: string | null = null;
  inputText: string = '';
  translatedText: string = '';
  toolMode: string = 'add-emojis-to-text'; // Default mode

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toolService: ToolService
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
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(function () {
      alert('Code copied to clipboard!');
    });
  }

  translateText(): void {
    switch (this.toolMode) {
      case 'text-to-emoji':
        this.translatedText = translateToEmoji(this.inputText, this.tool?.data);
        break;
      case 'emoji-to-text':
        this.translatedText = translateToText(this.inputText, this.tool?.data);
        break;
      case 'add-emojis-to-text':
        this.translatedText = addEmojisToText(this.inputText, this.tool?.data);
        break;
      default:
        console.warn('Unknown tool mode:', this.toolMode);
    }
  }

}
