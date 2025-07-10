import { NgClass, CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { menu_data } from '../menu-data';

@Component({
    selector: 'app-bottom-header',
    imports: [RouterModule, NgClass, CommonModule],
    templateUrl: './bottom-header.component.html',
    styleUrl: './bottom-header.component.scss'
})
export class BottomHeaderComponent {
  public menu_data:any[] = menu_data
  @Output() menuToggle: EventEmitter<void> = new EventEmitter<void>();
  toggleMenu() {
    this.menuToggle.emit();
  }

  navigateToTop() {
    window.scrollTo(0, 0);
    this.toggleMenu();

  }
  constructor() {}


}
