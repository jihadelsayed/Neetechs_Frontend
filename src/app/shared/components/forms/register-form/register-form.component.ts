import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastService } from '@/core/toast.service';
import { AuthService } from '@/services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  isShowPass = false;
  handleShowPass() {
    this.isShowPass = !this.isShowPass;
  }
  public registerForm!: FormGroup;
  public formSubmitted = false;
  constructor(
    private ToastService: ToastService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  onSubmit() {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      const userDetails = this.registerForm.value;
      // Call the AuthService to perform the signup
      this.authService.signup(userDetails).subscribe(
        (response: any) => {
          // Assuming the response has a 'message' property
          const { accessToken,userInfo, roles, email, username, id, message } = response;
          // Display a success message
          this.ToastService.success(message);
          // Reset the form
          this.registerForm.reset();
          this.formSubmitted = false; // Reset formSubmitted to false
          // Store the token in local storage (or other secure storage)
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('token', accessToken);
            localStorage.setItem('userInfo', accessToken);
            localStorage.setItem('roles', roles);
          }
          // Optionally, navigate to a different route or perform other actions
        },
        (error: any) => {
          console.log(error);
          if (error) {
            this.ToastService.error(error.error.message);
          } else {
            // Handle signup error
            this.ToastService.error('Signup failed. Please try again.');
        }
      );
    }
  get name() {
    return this.registerForm.get('name');
  get email() {
    return this.registerForm.get('email');
  get password() {
    return this.registerForm.get('password');
}
