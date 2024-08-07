import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the API key from local storage
    const apiKey = localStorage.getItem('apiKey');

    if (apiKey) {
      // Clone the request and add the API key to the headers
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      return next.handle(clonedReq);
    }

    return next.handle(req);
  }
}
