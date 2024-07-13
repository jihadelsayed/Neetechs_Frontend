import { NgClass, CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import category_data from '../category-data';
import { IMenuItem } from './menu-d-type';
import { menu_data } from './menu-data';

@Component({
  selector: 'app-bottom-header',
  standalone: true,
  imports: [RouterModule, NgClass,CommonModule],
  templateUrl: './bottom-header.component.html',
  styleUrl: './bottom-header.component.scss'
})
export class BottomHeaderComponent {
  public menu_data:IMenuItem[] = menu_data

  ////** */
  public categoryItems = category_data.filter(c => c.productType === "electronics");
  public isActive:boolean = false;
 
  constructor(private router: Router, private renderer: Renderer2) {}
 
 public handleActive(): void {
   this.isActive = !this.isActive;
 }
 
   public handleParentCategory(value: string): void {
     const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
     this.router.navigate(['/shop'], { queryParams: { category: newCategory } });
   }
 
   public handleSubCategory(value: string): void {
     const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
     this.router.navigate(['/shop'], { queryParams: { subcategory: newCategory } });
   }
}
