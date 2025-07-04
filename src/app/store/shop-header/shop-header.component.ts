import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser, NgClass } from '@angular/common';
import { CartService } from '../../core/cart.service';
import { CurrencyService } from '../../core/currency.service';
import { LanguageService } from '../../core/language.service';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { NiceSelectComponent } from '../../shared/ui/nice-select/nice-select.component';
import { UtilsService } from '@/core/utils.service';
import { WishlistService } from '@/core/wishlist.service';
import { MobileSidebarComponent } from '@/shared/components/offcanvas/mobile-sidebar/mobile-sidebar.component';
import { CartSidebarComponent, MenuBarComponent } from '@/shared/shared-ui';
import { IProduct } from '@/types/product-type';
import { HeaderCategoryComponent } from './header/header-com/header-category/header-category.component';
import { HeaderSearchComponent } from './header/header-com/header-search/header-search.component';
import { HeaderTopBarComponent } from './header/header-com/header-top-bar/header-top-bar.component';

@Component({
  selector: 'app-shop-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectComponent,
        NgClass,

        CartSidebarComponent,
        MenuBarComponent,
        MobileSidebarComponent,
        HeaderCategoryComponent,
        HeaderSearchComponent,
        HeaderTopBarComponent
],

  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {
  isLanguageActive = false;
  isCurrencyActive = false;
  languages = ['English', 'Swedish', 'عربي'];
  currencies = ['USD', 'SEK', 'الدينار'];
  categories: string[] = [];
  categoryOptions: { value: string; text: string }[] = [];
  searchTerm = '';
  searchControl = new FormControl('');
  selectedCategory = 'All';

  constructor(
    public cartService: CartService,
    public currencyService: CurrencyService,
    public languageService: LanguageService,
    private productService: ProductService,
    private router: Router,

    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isLanguageActive = false;
      this.isCurrencyActive = false;
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.search();
  }

  ngOnInit(): void {
    this.categories = ['All', ...this.productService.getCategories()];
    this.categoryOptions = this.categories.map(c => ({ value: c, text: c }));
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.searchTerm = value || '';
        this.search();
      });
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

  get count(): number {
    return this.cartService.getCartProducts().length;
  }

  toggle(section: 'language' | 'currency'): void {
    if (section === 'language') {
      this.isLanguageActive = !this.isLanguageActive;
      this.isCurrencyActive = false;
    } else {
      this.isCurrencyActive = !this.isCurrencyActive;
      this.isLanguageActive = false;
    }
  }

  changeLanguage(lang: string): void {
    this.languageService.setCurrentLanguage(lang);
  }

  changeCurrency(cur: string): void {
    this.currencyService.setCurrentCurrency(cur);
  }

  onCategoryChange(option: { value: string; text: string }): void {
    this.selectedCategory = option.value;
    this.search();
  }

  search(): void {
    const queryParams: any = {};
    if (this.searchTerm) {
      queryParams.search = this.searchTerm;
    }
    if (this.selectedCategory && this.selectedCategory !== 'All') {
      queryParams.category = this.selectedCategory;
    }
    this.router.navigate(['/shop'], { queryParams });
  }
 public products: IProduct[] = [];
  public searchText: string = '';
  public productType: string = '';



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
  


  }