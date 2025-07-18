import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ToastService } from '@/core/toast.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-blog-reply-form',
  templateUrl: './blog-reply-form.component.html',
  styleUrls: ['./blog-reply-form.component.scss']
})
export class BlogReplyFormComponent {
  public blogReplyForm!: FormGroup;
  public formSubmitted = false;
  constructor(private ToastService: ToastService) { }
  ngOnInit () {
    this.blogReplyForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      message:new FormControl(null,Validators.required),
    })
  }
  onSubmit() {
    this.formSubmitted = true;
    if (this.blogReplyForm.valid) {
      console.log('blog-reply-form-value', this.blogReplyForm.value);
      this.ToastService.success(`Message sent successfully`);
      // Reset the form
      this.blogReplyForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
    console.log('contact-form', this.blogReplyForm);
  get name() { return this.blogReplyForm.get('name') }
  get email() { return this.blogReplyForm.get('email') }
  get message() { return this.blogReplyForm.get('message') }
}
