import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 add this
import { DigitalProductService } from '../../../services/digital-product.service';
import { DigitalProduct } from '../../../models/digital-product.model';

@Component({
  standalone: true,
  selector: 'app-digital-product-page',
  imports: [CommonModule, RouterModule], // 👈 include RouterModule
  templateUrl: './digital-product-page.component.html',
  styleUrls: ['./digital-product-page.component.scss'],
})
export class DigitalProductPageComponent implements OnInit {
  product?: DigitalProduct;
  loading = true;
  buying = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private digitalProductService: DigitalProductService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.digitalProductService.getBySlug(slug).subscribe({
      next: (p) => {
        this.product = p;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate(['/digital-products']);
      },
    });
  }

  onBuy(): void {
    if (!this.product) return;
    this.buying = true;

    this.digitalProductService.startCheckout(this.product.slug).subscribe({
      next: (res) => {
        window.location.href = res.checkout_url;
      },
      error: () => {
        this.buying = false;
        // TODO: show toast
      },
    });
  }
}
