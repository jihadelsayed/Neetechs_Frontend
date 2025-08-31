import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ModelChoice = 'preset' | 'custom';

@Component({
  selector: 'app-api-key-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api-key-modal.component.html',
  styleUrls: ['./api-key-modal.component.scss']
})
export class ApiKeyModalComponent {
  apiKey = '';
  showModal = true;

  // model selection
  modelChoice: ModelChoice = 'preset';
  presetModel = 'gpt-5-mini'; // sensible default
  customModel = '';

  showKey = false;

  @Output() keySaved = new EventEmitter<{ apiKey: string; model: string }>();

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.apiKey = localStorage.getItem('apiKey') || '';
      const storedModel = localStorage.getItem('openai:model') || '';
      if (storedModel) {
        // if it looks like a real id, treat as preset by default
        this.presetModel = storedModel;
      }
    }
  }

  saveApiKey() {
    const model =
      this.modelChoice === 'custom'
        ? this.customModel.trim()
        : this.presetModel.trim();

    if (!this.apiKey.trim() || !model) {
      alert('Enter an API key and select/provide a model.');
      return;
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('apiKey', this.apiKey.trim());
      localStorage.setItem('openai:model', model);
    }

    this.showModal = false;
    this.keySaved.emit({ apiKey: this.apiKey.trim(), model });
    alert('API key & model saved.');
  }

  closeModal() {
    this.showModal = false;
  }
}
