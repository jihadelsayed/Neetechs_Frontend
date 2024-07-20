import { NgClass, CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { menu_data } from '../menu-data';

@Component({
  selector: 'app-mobile-sidebar-header',
  standalone: true,
  imports: [RouterModule, NgClass,CommonModule],
  templateUrl: './mobile-sidebar-header.component.html',
  styleUrl: './mobile-sidebar-header.component.scss'
})
export class MobileSidebarHeaderComponent {
  //** menu call **/
  public menu_data:any[] = menu_data

  //** menu control **/
  @Input() menuOpen: boolean = false;
  @Output() menuToggle: EventEmitter<void> = new EventEmitter<void>();
  toggleMenu() {
    this.menuToggle.emit();
  }

  navigateToTop() {
    window.scrollTo(0, 0);
    this.toggleMenu();

  }
}
