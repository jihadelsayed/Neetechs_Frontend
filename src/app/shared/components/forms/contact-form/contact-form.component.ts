import { Component } from '@angular/core';
import { ToastService } from '@/core/toast.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public contactForm!: FormGroup;
  public formSubmitted = false;

  constructor(private ToastService: ToastService,
    private contactService: ContactService) { }

  ngOnInit () {
    this.contactForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      phone:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      subject:new FormControl(null,Validators.required),
      description:new FormControl(null,Validators.required),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.contactService.sendMessage(formData).subscribe(
        (response) => {
          console.log('API response:', response);
          this.ToastService.success(`Message sent successfully`);
          this.contactForm.reset();
          this.formSubmitted = false;
        },
        (error) => {
          console.error('API error:', error);
        }
      );}
    console.log('contact-form', this.contactForm);
  }

  get name() { return this.contactForm.get('name') }
  get phone() { return this.contactForm.get('phone') }
  get email() { return this.contactForm.get('email') }
  get subject() { return this.contactForm.get('subject') }
  get description() { return this.contactForm.get('description') }
}
