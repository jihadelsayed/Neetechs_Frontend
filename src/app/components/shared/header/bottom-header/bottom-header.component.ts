import { NgClass, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { menu_data } from '../menu-data';

@Component({
  selector: 'app-bottom-header',
  standalone: true,
  imports: [RouterModule, NgClass,CommonModule],
  templateUrl: './bottom-header.component.html',
  styleUrl: './bottom-header.component.scss'
})
export class BottomHeaderComponent {
  public menu_data:any[] = menu_data

  constructor() {}


}
