import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component,Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-product-details-rating-item',
  templateUrl: './product-details-rating-item.component.html',
  styleUrls: ['./product-details-rating-item.component.scss']
})
export class ProductDetailsRatingItemComponent {
  @Input() star!: number;
  @Input() width!: string;
}
