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
          // Only act for your own domain
          localStorage.removeItem('userToken');

          // Avoid redirecting during local dev
          const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
          if (!isLocal) {
            const host = location.hostname;
            const rootDomain = host.substring(host.lastIndexOf('.', host.lastIndexOf('.') - 1) + 1) || 'neetechs.com';
            location.replace(`https://accounts.${rootDomain}`);
          }
        }

        return throwError(() => error);
      })
    );
  }
}
