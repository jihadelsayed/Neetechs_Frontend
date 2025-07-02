// social-login.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { Observable } from 'rxjs';

declare const AppleID: any;
@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss'],
})
export class SocialLoginComponent {
  user: SocialUser | undefined;
  private bankIdApiUrl = 'https://api.bankid.com/';

  constructor(
    private http: HttpClient,
    private authService: SocialAuthService,
    private ngZone: NgZone
  ) {}

  signInWithGoogle(): void {
    this.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFacebook(): void {
    this.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithApple(): void {
    AppleID.auth.init({
      clientId: 'your-client-id',
      scope: 'email', // Specify the desired scope
      redirectURI: 'your-redirect-uri',
    });

    AppleID.auth
      .signIn()
      .then((response: any) => {
        this.ngZone.run(() => {
          console.log(response); // Handle the Apple Sign In response
          // Perform any necessary actions with the user data
        });
      })
      .catch((error: any) => {
        console.error('Error during Apple sign-in:', error);
      });
  }
  signInWithBankID(): Observable<any> {
    const endpoint =
      'bankid:///?autostarttoken=a4904c4c-3bb4-4e3f-8ac3-0e950e529e5f&redirect=https%3a%2f%2fdemo.bankid.com%2fnyademobanken%2fCavaClientRedirReceiver.aspx%3forderRef%3dbedea56d-7b46-47b1-890b-f787c650bc93%26returnUrl%3d.%2fCavaClientAuth.aspx%26Environment%3dKundtest';
    const payload = {
      // Your BankID authentication payload
    };
    return this.http.post(`${this.bankIdApiUrl}${endpoint}`, payload);
  }
  private signIn(providerId: string): void {
    this.authService
      .signIn(providerId)
      .then((user) => {
        this.user = user;
        console.log(user);
        // Do something with the user data
      })
      .catch((error) => {
        console.error(`Error during ${providerId} sign-in:`, error);
      });
  }
}
