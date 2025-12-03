import { LOCALE_ID, Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(@Inject(LOCALE_ID) public localeId: string) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Skip external hosts you don’t control (e.g., GitHub raw)
    const isExternal =
      /^(https?:)?\/\//.test(request.url) &&
      !request.url.includes('neetechs.com');

    const req = request.clone({
      // add headers/auth here if you need for your own API
    });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (isExternal) {
          // Don’t hijack errors from third-party hosts
          return throwError(() => error);
        }

        if (error.status === 401) {
          // Clear all auth keys and cookies on unauthorized responses.  This
          // ensures the session is wiped consistently across portals.
          const keys = [
            'userToken',
            'UserInfo',
            'userInfo',
            'token',
            'roles',
            'apiKey',
            'darkMode',
            'accessToken'
          ];
          keys.forEach((k) => {
            try {
              localStorage.removeItem(k);
            } catch {
              /* ignore */
            }
          });
          document.cookie =
            'userToken=; domain=.neetechs.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
          document.cookie =
            'UserInfo=; domain=.neetechs.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
          // Redirect to main site home page (neetechs.com)
          const hostParts = location.hostname.split('.');
          const baseDomain = hostParts.slice(-2).join('.');
          location.replace(`https://${baseDomain}/`);
        }

        return throwError(() => error);
      })
    );
  }
}
