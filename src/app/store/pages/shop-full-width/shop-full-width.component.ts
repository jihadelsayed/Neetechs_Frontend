import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-shop-full-width',
  templateUrl: './shop-full-width.component.html',
  styleUrls: ['./shop-full-width.component.scss']
})
export class ShopFullWidthComponent {
}
