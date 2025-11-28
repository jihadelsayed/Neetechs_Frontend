import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DigitalProductService } from '../../../services/digital-product.service';
import { DigitalProduct } from '../../../data/digital-products.data';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-digital-product-page',
  imports: [CommonModule],
  templateUrl: './digital-product-page.component.html',
  styleUrls: ['./digital-product-page.component.scss'],
})
export class DigitalProductPageComponent {
  product?: DigitalProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private digitalProductService: DigitalProductService
  ) {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    const p = this.digitalProductService.getBySlug(slug);
    if (!p) {
      this.router.navigate(['/digital-products']); // أو صفحة 404
      return;
    }
    this.product = p;
  }
}
