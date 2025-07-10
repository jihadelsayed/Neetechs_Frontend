import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsService } from '../../../../../core/utils.service';

@Component({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    selector: 'app-header-search',
    templateUrl: './header-search.component.html',
    styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent {
  public searchText: string = '';
  public productType: string = '';
  constructor(public utilsService: UtilsService, private router: Router) {}

  public categories: string[] = ['electronics', 'fashion', 'beauty', 'jewelry'];

  handleProductType(productType: string): void {
    this.productType = productType;
  }

  handleSearchSubmit(): void {
    const queryParams: { [key: string]: string | null } = {};
    if (!this.searchText && !this.productType) {
      return;
    }
    if (this.searchText) {
      queryParams['searchText'] = this.searchText;
    }
    if (this.productType) {
      queryParams['productType'] = this.productType;
    }
    this.router.navigate(['/search'], { queryParams });
  }
}
