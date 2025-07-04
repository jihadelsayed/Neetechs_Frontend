import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BottomHeaderComponent } from './bottom-header/bottom-header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CartSidebarHeaderComponent } from './cart-sidebar-header/cart-sidebar-header.component';
import { MobileSidebarHeaderComponent } from './mobile-sidebar-header/mobile-sidebar-header.component';

import { CartService } from '../../core/cart.service';
import { WishlistService } from '../../core/wishlist.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { UtilsService } from '../../core/utils.service';
import { IProduct } from '../../types/product-type';
import { ShopHeaderComponent } from '../../store/shop-header/shop-header.component';
import { LayoutService } from '@/services/layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // Corrected styleUrls
  imports: [
    RouterModule,
    NavbarComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    MainHeaderComponent,
    CartSidebarHeaderComponent,
    MobileSidebarHeaderComponent,
    FormsModule,
    CommonModule,
    MobileHeaderComponent,

    ShopHeaderComponent,
  ],
})
export class HeaderComponent {
  public products: IProduct[] = [];
  public searchText: string = '';
  public productType: string = '';
  isMobile: boolean = false;
  headerSticky: boolean = false;
  showShopHeader = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    private layoutService: LayoutService,
    private router: Router
  ) {
    this.layoutService.showShopHeader$.subscribe(v => (this.showShopHeader = v));
  }
  checkWindowSize(width: number) {
    this.isMobile = width <= 1000;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkWindowSize(event.target.innerWidth);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.headerSticky = window.scrollY > 80;
    }
  }

  // select options for header category
  public niceSelectOptions = [
    { value: 'select-category', text: 'Select Category' },
    { value: 'electronics', text: 'Electronics' },
  ];

  changeHandler(selectedOption: { value: string; text: string }) {
    this.productType = selectedOption.value;
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
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth) {
        this.checkWindowSize(window.innerWidth);
      }
    }
    // Retrieve username from local storage
    if (typeof localStorage !== 'undefined') {
      const userInfoString = localStorage.getItem('userInfo');
      const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
      if (userInfo) {
        const name = userInfo['name'];
        const names = name.split(' ');
        const capitalized = names
          .map((name: string) => name.charAt(0).toUpperCase() + name.slice(1))
          .join(' ');
        const firstName = name.split(' ')[0].toUpperCase();
        this.name = firstName;
        this.email = userInfo['email'];
        this.twitter = userInfo['twitter'];
        this.facebook = userInfo['facebook'];
        this.phone = userInfo['telephone'];
        this.gender = userInfo['gender'];
        this.address = userInfo['address'];
        this.description = userInfo['description'];
        this.fullname = capitalized;
      } else {
        this.name = 'Sign In';
      }
    } else {
    }
  }
}
