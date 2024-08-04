import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolService } from './tool.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  providers: [ToolService],
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.scss'
})
export class ToolComponent {
  tool: any;
  categoriesId: string | null = null;
  toolId: string | null = null;
  constructor(private route: ActivatedRoute,private router: Router, private toolService: ToolService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriesId = params.get('categoriesId');
      this.toolId = "none"//params.get('toolId');

      if (this.categoriesId && this.toolId) {
        this.fetchData(this.categoriesId,this.toolId);
      }else if(this.categoriesId){
        this.router.navigate(['/tools/'+this.categoriesId]);
      }else{
        this.router.navigate(['/tools/']);
      }
    });
  }

  private fetchData(categoriesId: string, toolId: string): void {
    this.toolService.getCategoryData(categoriesId, toolId).subscribe((data: any) => {
      this.tool = data.data;
    });
  }
  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(function() {
      alert('Code copied to clipboard!');
    });
  }

  inputText: string = '';
  translatedText: string = '';

  translateText(): void {
    this.translatedText = this.inputText;
    var EMOJIS = this.tool;
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
}
