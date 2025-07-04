import { Component, HostListener, Inject } from '@angular/core';
import { CartService } from '../../../../core/cart.service';
import { IProduct } from '@/types/product-type';
import { WishlistService } from '../../../../core/wishlist.service';
import { Router, RouterModule } from '@angular/router';
import { UtilsService } from '../../../../core/utils.service';
import { PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, NgClass } from '@angular/common';
import { NiceSelectComponent } from '@/shared/ui/nice-select/nice-select.component';
import { FormsModule } from '@angular/forms';
import { CartSidebarComponent } from "../../../../shared/components/offcanvas/cart-sidebar/cart-sidebar.component";
import { MenuBarComponent } from '../header-com/menu-bar/menu-bar.component';
import { MobileSidebarComponent } from '../../../../shared/components/offcanvas/mobile-sidebar/mobile-sidebar.component';

@Component({
  selector: 'app-header-one',
  standalone: true,
  imports: [
    NgClass,
    CommonModule,
    FormsModule, // ✅ For ngModel
    RouterModule, // ✅ For routerLink
    NiceSelectComponent,
    CartSidebarComponent,
    MenuBarComponent,
    MobileSidebarComponent
],
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss'],
})
export class HeaderOneComponent {
  public products: IProduct[] = [];
  public searchText: string = '';
  public productType: string = '';

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // select options for header category
  public niceSelectOptions = [
    { value: 'select-category', text: 'Select Category' },
    { value: 'electronics', text: 'Electronics' },
  ];

  changeHandler(selectedOption: { value: string; text: string }) {
    this.productType = selectedOption.value;
  }

  headerSticky: boolean = false;

  // sticky nav
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.headerSticky = true;
    } else {
      this.headerSticky = false;
    }
  }

  handleSearchSubmit() {
    const queryParams: { [key: string]: string | null } = {};
    if (!this.searchText && !this.productType) {
      return;
    } else {
      if (this.searchText) {
        queryParams['searchText'] = this.searchText;
      }
      if (this.productType) {
        queryParams['productType'] = this.productType;
      }
      this.router.navigate(['/search'], { queryParams });
    }
  }
  name: string | null = null;
  fullname: string | null = null;
  email: string | null = null;
  twitter: string | null = null;
  facebook: string | null = null;
  gender: string | null = null;
  phone: string | null = null;
  address: string | null = null;
  description: string | null = null;
  
  ngOnInit() {
    // Retrieve username from local storage
    let userInfo: any = null;
    if (isPlatformBrowser(this.platformId)) {
      const userInfoString = localStorage.getItem('userInfo');
      userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    }
    
    if(userInfo){
      const name = userInfo['name'];
      const names = name.split(' ');
      const capitalized = names.map((name: string) => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');
      const firstName = name.split(' ')[0].toUpperCase();
      this.name = firstName
      this.email =  userInfo['email']
      this.twitter =  userInfo['twitter']
      this.facebook =  userInfo['facebook']
      this.phone =  userInfo['telephone']
      this.gender =  userInfo['gender']
      this.address =  userInfo['address']
      this.description =  userInfo['description']
      this.fullname = capitalized
      
    }else{

      this.name="Sign In";
    }
  }
}
