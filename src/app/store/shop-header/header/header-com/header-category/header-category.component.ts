import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router  } from '@angular/router';
import { Component,Renderer2  } from '@angular/core';
import category_data from '../../../../../shared/category-data';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss']
})
export class HeaderCategoryComponent {
  public categoryItems = category_data.filter(c => c.productType === 'electronics');
  public isActive: boolean = false;

  constructor(private router: Router) {}

  public handleActive(): void {
    this.isActive = !this.isActive;
  }

  public handleParentCategory(value: string): void {
    const formatted = this.formatSlug(value);
    this.router.navigate(['/shop'], { queryParams: { category: formatted } });
  }

  public handleSubCategory(value: string): void {
    const formatted = this.formatSlug(value);
    this.router.navigate(['/shop'], { queryParams: { subcategory: formatted } });
  }

  private formatSlug(value: string): string {
    return value.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-');
  }
}