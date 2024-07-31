import { Component } from '@angular/core';
import { MissionVisionComponent } from "./mission-vision/mission-vision.component";
import { TeamMembersComponent } from "./team-members/team-members.component";
import { CompanyInfoComponent } from "./company-info/company-info.component";
import { ContactBannerComponent } from "../shared/contact-banner/contact-banner.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MissionVisionComponent, TeamMembersComponent, CompanyInfoComponent, ContactBannerComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
