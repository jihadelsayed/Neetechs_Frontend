import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-plotly',
  standalone: true,
  imports: [],
  templateUrl: './plotly.component.html',
  styleUrl: './plotly.component.scss'
})
export class PlotlyComponent implements AfterViewInit {
  @Input() data: any[] = [];
  @Input() layout: any = {};
  @Input() config: any = {};

  @ViewChild('plotContainer', { static: true })
  plotContainerRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    if (this.plotContainerRef) {
      Plotly.newPlot(
        this.plotContainerRef.nativeElement,
        this.data,
        this.layout,
        this.config
      );
    }
  }
}
