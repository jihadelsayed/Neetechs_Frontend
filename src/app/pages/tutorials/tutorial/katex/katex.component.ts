import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import katex from 'katex';

@Component({
  selector: 'app-katex',
  standalone: true,
  imports: [],
  template: `<div class="math-render" #mathContainer></div>`
})
export class KatexComponent implements AfterViewInit {
  @Input() expression: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const container = this.el.nativeElement.querySelector('.math-render');
    if (container && this.expression) {
      container.innerHTML = katex.renderToString(this.expression, {
        throwOnError: false,
        displayMode: true
      });
    }
  }
}
