import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-generic-slider',
    imports: [CommonModule],
    templateUrl: './generic-slider.component.html',
    styleUrl: './generic-slider.component.scss'
})
export class GenericSliderComponent {
  @Input()
  items!: Array<{ image: string; title?: string; name?: string; position?: string; description: string; }>;
  @Input() isBlackClass!: boolean;

  currentIndex = 0;

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.items.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.items.length - 1) ? this.currentIndex + 1 : 0;
  }
}
