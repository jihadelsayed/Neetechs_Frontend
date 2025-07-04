import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import category_data from '../../../category-data';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-electronic-category',
  templateUrl: './electronic-category.component.html',
  styleUrls: ['./electronic-category.component.scss']
})
export class ElectronicCategoryComponent {
  public category_items = category_data.filter(
    (c) => c.productType === "electronics"
  );
}
