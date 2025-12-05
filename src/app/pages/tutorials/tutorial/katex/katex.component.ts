import { 
  Component, 
  Input, 
  AfterViewInit, 
  OnChanges, 
  SimpleChanges, 
  ElementRef, 
  ViewEncapsulation,
  ChangeDetectionStrategy 
} from '@angular/core';
import katex from 'katex';

@Component({
  selector: 'app-katex',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './katex.component.html',
  styleUrl: './katex.component.scss'
})
export class KatexComponent implements AfterViewInit, OnChanges {
  @Input() expression: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.renderMath();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expression'] && !changes['expression'].firstChange) {
      this.renderMath();
    }
  }

  private renderMath(): void {
    const container: HTMLElement | null =
      this.el.nativeElement.querySelector('.math-render');

    if (!container) return;

    if (!this.expression) {
      container.innerHTML = '';
      return;
    }

    container.innerHTML = katex.renderToString(this.expression, {
      throwOnError: false,
      displayMode: true
    });
  }
}
