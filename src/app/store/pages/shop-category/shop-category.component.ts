import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from '../../shared/types/category-type';
import { Component } from '@angular/core';
import category_data from '../../shared/category-data';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss'],
})
export class ShopCategoryComponent {
  public category_data: ICategory[] = category_data;
  constructor(private router: Router) {}
  handleCategory(parent: string) {
    const category = parent.toLowerCase().split(' ').join('-');
    this.router.navigate(['/shop'], {
      queryParams: { category: category },
    });
  }
}
