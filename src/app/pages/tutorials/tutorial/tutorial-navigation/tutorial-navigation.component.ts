import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutorial-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tutorial-navigation.component.html',
  styleUrls: ['./tutorial-navigation.component.scss']
})
export class TutorialNavigationComponent {
  @Input() previousTutorial: any = null;
  @Input() nextTutorial: any = null;
  @Input() tutorial: any = {};

  @Output() startQuiz = new EventEmitter<any>();
}
