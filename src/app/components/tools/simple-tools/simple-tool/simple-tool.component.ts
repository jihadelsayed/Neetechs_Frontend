import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ToolService } from '../../tool.service';
import { addEmojisToText, translateToEmoji, translateToText } from './utils/emoji.utils';
import { ContactBannerComponent } from '../../../../shared/contact-banner/contact-banner.component';

type EmojiMode = 'text-to-emoji' | 'emoji-to-text' | 'add-emojis-to-text';

@Component({
  selector: 'app-simple-tool',
  standalone: true,
  imports: [FormsModule, CommonModule, ContactBannerComponent],
  providers: [ToolService],
  templateUrl: './simple-tool.component.html',
  styleUrl: './simple-tool.component.scss',
})
export class SimpleToolComponent implements OnInit {
  tool: any;
  categoriesId: string | null = null;
  toolId: string | null = null;

  inputText = '';
  result = '';
  toolMode: EmojiMode = 'add-emojis-to-text';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toolService: ToolService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoriesId = 'none'; // fixed category
      this.toolId = params.get('toolId');

      if (this.categoriesId && this.toolId) {
        this.fetchData(this.categoriesId, this.toolId);
      } else {
        this.router.navigate(['/tools']);
      }
    });
  }

  private fetchData(categoriesId: string, toolId: string): void {
    this.toolService.getCategoryData(categoriesId, toolId).subscribe((data: any) => {
      this.tool = data;

      // default mode = first option if exists, else keep emoji default
      if (this.tool?.jobOption?.length) {
        this.toolMode = this.tool.jobOption[0].value as EmojiMode;
      }
    });
  }

  copyToClipboard(text: string): void {
    if (!text) return;
    navigator.clipboard.writeText(text);
  }

  executeTool(): void {
    switch (this.toolMode) {
      case 'text-to-emoji':
        this.result = translateToEmoji(this.inputText, this.tool?.data);
        break;
      case 'emoji-to-text':
        this.result = translateToText(this.inputText, this.tool?.data);
        break;
      case 'add-emojis-to-text':
      default:
        this.result = addEmojisToText(this.inputText, this.tool?.data);
        break;
    }
  }
}
