import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../core/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'] // Correct the typo from `styleUrl` to `styleUrls`
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder,     private toastr: ToastService,
    private contactService: ContactService,
    private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      this.contactService.submitContactForm(this.contactForm.value).subscribe(
        (response: any) => {

          console.log('Form successfully submitted', response);
          this.router.navigate(['/']); // Redirect to homepage
          this.toastr.success('Form successfully submitted!');

          window.scrollTo(0, 0);

        },
        (error: any) => {
          this.toastr.error('Error submitting form. Please try again.');

          console.error('Error submitting form', error);
        },
        () => {
          this.isSubmitting = false;
        }
      );
    }
  }
}
