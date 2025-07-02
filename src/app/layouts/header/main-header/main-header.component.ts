import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
 import { NgClass, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilsService } from '../../../core/utils.service';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [RouterModule, NgClass,CommonModule,FormsModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  public searchText: string = '';
  public productType: string = '';
  constructor (public utilsService:UtilsService, private router: Router){};

  public categories: string[] = ["electronics", "fashion", "beauty", "jewelry"];

  handleProductType(productType: string) {
    this.productType = productType;
  }

  handleSearchSubmit() {
    const queryParams: { [key: string]: string | null } = {};
    if(!this.searchText && !this.productType){
      return
    }
    else {
      if (this.searchText) {
        queryParams['searchText'] = this.searchText;
      }
      if (this.productType) {
        queryParams['productType'] = this.productType;
      }
      this.router.navigate(['/pages/search'], { queryParams });
    }
  }
}
