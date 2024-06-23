import { Component } from '@angular/core';
import { TutorialService } from './tutorials.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TutorialComponent } from "./tutorial/tutorial.component";

@Component({
    selector: 'app-tutorials',
    standalone: true,
    templateUrl: './tutorials.component.html',
    styleUrl: './tutorials.component.scss',
    providers: [TutorialService],
    imports: [CommonModule, HttpClientModule, TutorialComponent]
})
export class TutorialsComponent {
  tutorialData: any;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.tutorialService.getTutorialData().subscribe(data => {
      this.tutorialData = data.container;
    });
  }
}
