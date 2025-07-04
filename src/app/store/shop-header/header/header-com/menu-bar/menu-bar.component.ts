import { CommonModule, NgClass } from '@angular/common';
import { menu_data } from '../../../../../shared/menu-data';
import { IMenuItem } from '../../../../../shared/types/menu-d-type';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
    standalone: true,
  imports: [RouterModule, NgClass,CommonModule],

  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],

})
export class MenuBarComponent {
  public menu_data:IMenuItem[] = menu_data
}
