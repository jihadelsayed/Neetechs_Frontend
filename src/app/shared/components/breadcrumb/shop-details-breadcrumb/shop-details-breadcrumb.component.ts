import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IProduct } from '@/types/product-type';
import { Component,Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-shop-details-breadcrumb',
  templateUrl: './shop-details-breadcrumb.component.html',
  styleUrls: ['./shop-details-breadcrumb.component.scss']
})
export class ShopDetailsBreadcrumbComponent {
  @Input () product!:IProduct
}
