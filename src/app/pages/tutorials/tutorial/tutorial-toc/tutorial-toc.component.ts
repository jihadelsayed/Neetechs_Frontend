import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutorial-toc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutorial-toc.component.html',
  styleUrls: ['./tutorial-toc.component.scss']
})
export class TutorialTOCComponent {
  @Input() sections: any[] = [];
  @Input() activeSection: string = '';
 
  @Output() sectionClicked = new EventEmitter<string>();

  onClick(title: string) {
    this.sectionClicked.emit(title);
  }

  slugify(text: string): string {
    return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  }
}
