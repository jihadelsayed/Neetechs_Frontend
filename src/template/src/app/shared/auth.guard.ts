// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = localStorage.getItem('token') !== null;

    if (isAuthenticated) {
      return true;
    } else {
      // If not authenticated, navigate to the login page and save the current URL for redirection after login
      this.router.navigate(['/pages/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
