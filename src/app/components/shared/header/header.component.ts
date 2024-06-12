import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { TopHeaderComponent } from "./top-header/top-header.component";
import { BottomHeaderComponent } from "./bottom-header/bottom-header.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'], // Corrected styleUrls
    imports: [RouterModule, NavbarComponent, TopHeaderComponent, BottomHeaderComponent]
})
export class HeaderComponent {

}
