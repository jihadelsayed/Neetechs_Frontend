import { Component } from '@angular/core';
import { TutorialService } from './tutorials.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tutorials',
  standalone: true,
  imports: [CommonModule,HttpClientModule ],
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.scss',
  providers: [TutorialService]
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
