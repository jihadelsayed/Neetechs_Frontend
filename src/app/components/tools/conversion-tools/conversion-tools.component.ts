import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-conversion-tools',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [ToolService],
  templateUrl: './conversion-tools.component.html',
  styleUrls: ['./conversion-tools.component.scss']
})
export class ConversionToolsComponent implements OnInit {
  tools: any[] = [];

  constructor(private toolService: ToolService) {}

  ngOnInit(): void {
    this.toolService.getAllTools().subscribe((all: any) => {
      // Filter only conversion tools
      this.tools = all.tools.filter((t: any) => t.type === 'Conversion Tools' && !t.disable);
    });
  }
}
