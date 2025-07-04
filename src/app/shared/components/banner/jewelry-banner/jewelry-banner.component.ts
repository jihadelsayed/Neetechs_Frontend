import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-jewelry-banner',
  templateUrl: './jewelry-banner.component.html',
  styleUrls: ['./jewelry-banner.component.scss']
})
export class JewelryBannerComponent {
}
