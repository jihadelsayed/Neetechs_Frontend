import { Component } from '@angular/core';
import { BottomHeaderComponent } from "../bottom-header/bottom-header.component";
import { MobileSidebarHeaderComponent } from "../mobile-sidebar-header/mobile-sidebar-header.component";


@Component({
    selector: 'app-mobile-header',
    imports: [BottomHeaderComponent, MobileSidebarHeaderComponent],
    templateUrl: './mobile-header.component.html',
    styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {
    //* menu call *//

  //* menu sidebar humbugger menu *//
  menuOpen: boolean = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  //* menu  *//
  constructor (){};
  ngOnInit() {
    this.menuOpen = false;
  }
}
