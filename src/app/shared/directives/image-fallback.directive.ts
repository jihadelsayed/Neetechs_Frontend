import { Directive, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: 'img[appImageFallback]',
  standalone: true,
  imports: [CommonModule]
})
export class ImageFallbackDirective {
  @Input() appImageFallback = '/assets/images/product-placeholder.png';

  @HostListener('error', ['$event.target'])
  onError(img: HTMLImageElement) {
    img.src = this.appImageFallback;
  }
}
