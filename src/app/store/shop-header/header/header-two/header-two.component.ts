import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, HostListener,Input } from '@angular/core';
import { CartService } from '../../../../core/cart.service';
import { WishlistService } from '../../../../core/wishlist.service';
import { UtilsService } from '../../../../core/utils.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
})
export class HeaderTwoComponent {
  @Input () style_2 : boolean = false;
  public searchText: string = '';
  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    private router: Router
  ) {}
  sticky : boolean = false;
  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.sticky = true
    }
    else{
      this.sticky = false
  }
  handleSearchSubmit() {
    const queryParams: { [key: string]: string | null } = {};
    if(!this.searchText){
      return
    else {
      if (this.searchText) {
        queryParams['searchText'] = this.searchText;
      }
      this.router.navigate(['/search'], { queryParams });
}
