import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nice-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nice-select.component.html',
  styleUrls: ['./nice-select.component.scss']
})
export class NiceSelectComponent {
  @Input() options: { value: string; text: string }[] = [];
  @Input() defaultCurrent = 0;
  @Input() placeholder = '';
  @Input() className = '';
  @Input() name = '';

  open = false;
  current: { value: string; text: string } | undefined;

  @Output() onChange = new EventEmitter<{ value: string; text: string }>();

  toggleOpen(): void {
    this.open = !this.open;
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  ngOnInit(): void {
    this.current = this.options[this.defaultCurrent];
  }

  currentHandler(item: { value: string; text: string }, index: number): void {
    this.current = this.options[index];
    this.onChange.emit(item);
    this.onClose();
  }

  onClose(): void {
    this.open = false;
  }
}
