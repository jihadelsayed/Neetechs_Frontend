import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../core/toast.service';

@Component({
    selector: 'app-contact-form',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'] // Correct the typo from `styleUrl` to `styleUrls`
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private toastr: ToastService,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.contactService.submitContactForm(this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = 'Thanks for reaching out!';
        this.toastr.success('Form successfully submitted!');
        this.contactForm.reset();
      },
      error: () => {
        this.errorMessage = 'Error submitting form. Please try again.';
        this.toastr.error('Error submitting form. Please try again.');
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
