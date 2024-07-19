import { Component } from '@angular/core';
import { Router } from 'express';
import { UtilsService } from '../../../../services/utils.service';
import { CartService } from '../cart.service';
import { BottomHeaderComponent } from "../bottom-header/bottom-header.component";

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [BottomHeaderComponent],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {
  constructor (public utilsService:UtilsService, private router: Router,public cartService: CartService){};

}
