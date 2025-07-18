// role.guard.ts
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
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated =
      typeof localStorage !== 'undefined' && localStorage.getItem('token') !== null;
    const excludedRoutes = ['/login', '/register', '/forgot'];
    const isExcludedRoute = excludedRoutes.includes(state.url);

    if (isAuthenticated && !isExcludedRoute) {
      // If authenticated and not on an excluded route, handle specific scenarios
      if (state.url === '/profile') {
        // Do something specific for the profile route if needed
      }

      return true;
    } else if (isExcludedRoute) {
      return true; // Allow access to excluded routes without additional checks
    } else {
      // If not authenticated and not on an excluded route, navigate to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
