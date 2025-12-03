import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RuntimeConfigService } from './services/runtime-config.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';

@Component({
    imports: [CommonModule, LoginPromptComponent],
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
frameSrc: SafeResourceUrl = '';
  isBrowser = false;
  showLoginModal = false;
  constructor(
    private config: RuntimeConfigService,
    @Inject(PLATFORM_ID) private platformId: Object,
  private sanitizer: DomSanitizer
  ) {}

 ngOnInit() {
  if (!isPlatformBrowser(this.platformId)) return;

  this.isBrowser = true;

  const lang = window.navigator.language.substring(0, 2);
  // When requesting credentials from the accounts portal we send only the
  // origin (scheme + hostname + optional port) and the pathname.  The
  // accounts portal no longer needs the full href (which includes
  // fragments) because we don’t use hash routing.  Passing the origin
  // prevents double‑encoding of slashes in the pathname.
  const host = window.location.origin;
  const pathname = window.location.pathname;

  const unsafeUrl = `${this.config.loginUrl}getCredential?host=${host}&language=${lang}&pathname=${pathname}`;
  this.frameSrc = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);

  // Attach the iframe src safely
  const iframe = document.getElementById('iframeAccount') as HTMLIFrameElement;
  if (iframe) iframe.src = this.frameSrc as string;

  // ✅ Unified listener for login_required or credential
  const messageHandler = (event: MessageEvent) => {
    // Only accept messages from the trusted accounts origin
    if (event.origin !== `https://accounts.${this.config.mainDomain}`) return;

    // Successful credential response: store token and user info, then reload
    if (event.data?.type === 'credential' && event.data.getToken) {
      localStorage.setItem('userToken', event.data.getToken);
      localStorage.setItem('UserInfo', event.data.getUserInfo);
      if (event.data.darkMode !== undefined) {
        localStorage.setItem('darkMode', event.data.darkMode);
      }
      window.removeEventListener('message', messageHandler);
      window.location.reload();
      return;
    }

    // Prompt user to log in if no credentials
    if (event.data?.type === 'login_required') {
      this.showLoginModal = true;
      return;
    }

    // Handle logout notification from the accounts portal.  Clear
    // stored credentials and refresh the page.  We intentionally keep
    // darkMode so theme preference remains.
    if (event.data?.type === 'logout') {
      try {
        localStorage.removeItem('userToken');
        localStorage.removeItem('UserInfo');
      } catch {
        /* ignore */
      }
      window.location.reload();
      return;
    }
  };

  window.addEventListener('message', messageHandler, false);
}


handleLoginPromptConfirm() {
  // Construct a signIn URL using the runtime config.  We no longer use
  // hash routing on the receiving apps, so the accounts portal simply
  // redirects to https://<host>/<pathname>.  The language is passed
  // through but not used in the path.
  const host = window.location.hostname;
  const pathname = window.location.pathname;
  const lang = this.config.language || 'en';
  const loginBase = this.config.loginUrl.replace(/\/$/, '');
  const redirect = `${loginBase}/signIn?host=${host}&pathname=${encodeURIComponent(
    pathname
  )}&language=${lang}`;
  window.location.href = redirect;
}

handleLoginPromptCancel() {
  this.showLoginModal = false;
}

}
