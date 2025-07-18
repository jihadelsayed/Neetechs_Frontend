import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import Swiper, { Pagination } from 'swiper';
import { ProductService } from '@/shared/services/product.service';
import { IProduct } from '@/types/product-type';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-electronic-offer-products',
  templateUrl: './electronic-offer-products.component.html',
  styleUrls: ['./electronic-offer-products.component.scss']
})
export class ElectronicOfferProductsComponent {
  // electronic prd
  public electronic_prd:IProduct[] = [];
  // product offer
  public offer_products:IProduct[] = []
  constructor(public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.electronic_prd = products.filter((p) => p.productType === 'electronics');
      this.offer_products = products.filter((p) => p.productType === 'electronics').filter(
        (p) => p.productType === 'electronics' && p.offerDate
      );
    });
  }
  ngOnInit(): void {
    new Swiper('.tp-product-offer-slider-active', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: false,
      modules: [Pagination],
      pagination: {
        el: ".tp-deals-slider-dot",
        clickable: true,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 3,
        },
        '992': {
          slidesPerView: 2,
        '768': {
        '576': {
          slidesPerView: 1,
        '0': {
      }
}
