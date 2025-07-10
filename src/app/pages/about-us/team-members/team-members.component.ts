import { Component } from '@angular/core';
import { GenericSliderComponent } from '../../../shared/generic-slider/generic-slider.component';
import { TeamService } from './team.service';

@Component({
    selector: 'app-team-members',
    imports: [GenericSliderComponent],
    templateUrl: './team-members.component.html',
    styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {
  team: any = [];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    if (this.team.length === 0) {
      this.fetchData();
    }
  }

  fetchData() {
    this.teamService.getTeamData().subscribe((data) => {
      this.team = data.team;
    });
  }
}
