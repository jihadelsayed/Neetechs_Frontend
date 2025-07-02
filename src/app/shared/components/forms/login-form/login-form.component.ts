import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '@/core/toast.service';
import { AuthService } from '@/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  isShowPass = false;

  handleShowPass() {
    this.isShowPass = !this.isShowPass;
  }

  public loginForm!: FormGroup;
  public formSubmitted = false;

  constructor(
    private ToastService: ToastService,
    private authService: AuthService,
    private router: Router // Inject the Router service
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      // Call the AuthService to perform the login
      this.authService.login(credentials).subscribe(
        (response: any) => {
          // Assuming the response has a 'token' property
          console.log(response)
          const { accessToken,userInfo, roles, email, username, id  } = response;

          // Store the token in local storage (or other secure storage)
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('token', accessToken);
            localStorage.setItem('userInfo', userInfo);
            localStorage.setItem('roles', roles);
          }

          // Display a success message
          this.ToastService.success('Login successful');

          // Reset the form
          this.loginForm.reset();
          this.formSubmitted = false; // Reset formSubmitted to false
          // Navigate to the profile page after successful login
          this.router.navigate(['/profile']);
          // Optionally, navigate to a protected route or perform other actions
        },
        (error: any) => {
          // Handle login error
          console.log(error);

          if (error.error) {
            this.ToastService.error(error.error.message);
          } else {
            this.ToastService.error('Invalid credentials. Please try again.');
          }
        }
      );
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
