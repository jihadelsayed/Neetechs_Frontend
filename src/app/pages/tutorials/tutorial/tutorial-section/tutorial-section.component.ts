import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { KatexComponent } from '../katex/katex.component';

@Component({
  selector: 'app-tutorial-section',
  standalone: true,
  imports: [CommonModule, NgxChartsModule, KatexComponent],
  templateUrl: './tutorial-section.component.html',
  styleUrls: ['./tutorial-section.component.scss']
})
export class TutorialSectionComponent {
  @Input() section: any;
  @Input() sectionId: string = '';
  @Input() stepIndex: number = 0;

  @Output() next = new EventEmitter<void>();

  colorScheme = {
  domain: ['#f7931a', '#3366cc', '#dc3912'],
  name: 'custom',
  selectable: true,
  group: ScaleType.Ordinal // <-- optional but recommended
};

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard!');
    });
  }
}
