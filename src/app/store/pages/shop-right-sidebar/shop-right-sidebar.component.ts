import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-shop-right-sidebar',
  templateUrl: './shop-right-sidebar.component.html',
  styleUrls: ['./shop-right-sidebar.component.scss']
})
export class ShopRightSidebarComponent {
}
