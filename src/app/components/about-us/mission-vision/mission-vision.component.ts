import { Component } from '@angular/core';
import { AboutService } from './about.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  imports: [NgClass,CommonModule],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.scss'
})
export class MissionVisionComponent {
  sections: any = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.aboutService.getMissionVisionData().subscribe(data => {
      this.sections = data.sections;
    });
  }

  isOdd(index: number): boolean {
    return index % 2 !== 0;
  }
}
