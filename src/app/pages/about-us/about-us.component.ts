import { Component } from '@angular/core';
import { MissionVisionComponent } from "./mission-vision/mission-vision.component";
import { CompanyInfoComponent } from "./company-info/company-info.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about-us',
    imports: [MissionVisionComponent, CompanyInfoComponent, RouterLink],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
