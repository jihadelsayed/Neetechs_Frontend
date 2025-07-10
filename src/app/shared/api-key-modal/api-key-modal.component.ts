import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-api-key-modal',
    imports: [CommonModule, FormsModule],
    templateUrl: './api-key-modal.component.html',
    styleUrl: './api-key-modal.component.scss'
})
export class ApiKeyModalComponent {
  apiKey: string = '';
  showModal: boolean = true; // Control the visibility of the modal

  @Output() keySaved: EventEmitter<void> = new EventEmitter<void>();

  saveApiKey() {
    if (this.apiKey) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('apiKey', this.apiKey);
        alert('API Key saved successfully!');
        this.showModal = false;
        this.keySaved.emit(); // Emit event to notify parent component
      }

    } else {
      alert('Please enter a valid API key.');
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
