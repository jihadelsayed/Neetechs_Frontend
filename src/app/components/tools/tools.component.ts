import { Component } from '@angular/core';
import { ToolsService } from './tools.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactBannerComponent } from "../../shared/contact-banner/contact-banner.component";

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, FormsModule, ContactBannerComponent],
  providers: [ToolsService],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {
  tools: any[] = [];
  filteredTools: any[] = [];
  uniqueTypes: string[] = [];
  searchTerm: string = '';
  selectedType: string = '';

  constructor(private toolsService: ToolsService, private router: Router) {}

  ngOnInit(): void {
    this.toolsService.getToolsData().subscribe((data: any) => {
      this.tools = data.tools;
      this.filteredTools = this.tools;
      this.uniqueTypes = [...new Set(this.tools.map(tool => tool.type))];
    });
  }

  filterTools(): void {
    this.filteredTools = this.tools.filter(tool => {
      return (
        (this.selectedType === '' || tool.type === this.selectedType) &&
        (this.searchTerm === '' || tool.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    });
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
