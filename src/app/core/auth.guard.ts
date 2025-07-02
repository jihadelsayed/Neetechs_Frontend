import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = typeof localStorage !== 'undefined'
      ? localStorage.getItem('token')
      : null;
    if (token) {
      return true;
    }
    this.router.navigate(['/account/login'], { queryParams: { redirect: state.url } });
    return false;
  }
}
