import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolService } from './tool.service';
import { CommonModule } from '@angular/common';
import { ContactBannerComponent } from "../../../shared/contact-banner/contact-banner.component";

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
  translationMode: string = 'add-emojis-to-text'; // Default mode

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
        this.tool = data.data;
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
    if (this.translationMode === 'text-to-emoji') {
      this.translateToEmoji();
    } else if (this.translationMode === 'emoji-to-text') {
      this.translateToText();
    } else if (this.translationMode === 'add-emojis-to-text') {
      this.addEmojisToText();
    }
  }

  private translateToEmoji(): void {
    this.translatedText = this.inputText;
    const EMOJIS = this.tool;
    for (const emojiKey in EMOJIS) {
      if (Object.prototype.hasOwnProperty.call(EMOJIS, emojiKey)) {
        const emoji = EMOJIS[emojiKey];
        emoji.keywords.forEach((keyword: any) => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
          this.translatedText = this.translatedText.replace(
            regex,
            emoji.char
          );
        });
      }
    }
  }

  private translateToText(): void {
    this.translatedText = this.inputText;
    const EMOJIS = this.tool;
    for (const emojiKey in EMOJIS) {
      if (Object.prototype.hasOwnProperty.call(EMOJIS, emojiKey)) {
        const emoji = EMOJIS[emojiKey];
        const regex = new RegExp(`${emoji.char}`, 'g');
        this.translatedText = this.translatedText.replace(regex, emojiKey);
      }
    }
  }

  private addEmojisToText(): void {
    this.translatedText = this.inputText;
    const EMOJIS = this.tool;
    for (const emojiKey in EMOJIS) {
      if (Object.prototype.hasOwnProperty.call(EMOJIS, emojiKey)) {
        const emoji = EMOJIS[emojiKey];
        emoji.keywords.forEach((keyword: any) => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
          this.translatedText = this.translatedText.replace(
            regex,
            `${keyword} ${emoji.char}`
          );
        });
      }
    }
  }
}
