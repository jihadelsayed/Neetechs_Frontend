import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import Swiper, { Pagination, EffectFade } from 'swiper';
import { ProductBanner } from '@/data/banner-data';
import { IProductBanner } from '@/types/banner-d-type';
import { CurrencyService } from '@/core/currency.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-electronic-product-banner',
  templateUrl: './electronic-product-banner.component.html',
  styleUrls: ['./electronic-product-banner.component.scss'],
})
export class ElectronicProductBannerComponent {
  // banner slider data
  public productBannerData: IProductBanner[] = ProductBanner;
  constructor(public currencyService: CurrencyService) {}
  getCurrencySymbol(): string {
    const currentCurrency = this.currencyService.getCurrentCurrency();
    return currentCurrency ? currentCurrency.symbol : ''; // Return an empty string or handle the default case as needed
  }
  ngOnInit(): void {
    new Swiper('.tp-product-banner-slider-active', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      effect: 'fade',
      modules: [Pagination, EffectFade],
      pagination: {
        el: '.tp-product-banner-slider-dot',
        clickable: true,
      },
    });
}
