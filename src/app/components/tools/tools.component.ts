import { Component } from '@angular/core';
import { ToolsHeroComponent } from './tools-hero/tools-hero.component';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [ToolsHeroComponent],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {

}
