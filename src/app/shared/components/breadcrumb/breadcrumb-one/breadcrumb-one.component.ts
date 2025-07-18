import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component,Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-breadcrumb-one',
  templateUrl: './breadcrumb-one.component.html',
  styleUrls: ['./breadcrumb-one.component.scss']
})
export class BreadcrumbOneComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() full_width: boolean = false;
  @Input() shop_1600: boolean = false;
}
