import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component,Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-breadcrumb-two',
  templateUrl: './breadcrumb-two.component.html',
  styleUrls: ['./breadcrumb-two.component.scss']
})
export class BreadcrumbTwoComponent {
  @Input() title! : string;
  @Input() subtitle! : string;
}
