import { Injectable } from '@angular/core';
import { RuntimeConfigService } from '../authorization/services/runtime-config.service';

/**
 * LogoutService centralizes sign‑out logic for the public frontend.  It
 * clears the authenticated user’s token and info from localStorage,
 * removes root‑domain cookies, and redirects to the accounts signOut
 * endpoint.  The endpoint will clear any remaining cookies on the
 * accounts domain and then send the user back to their origin via
 * query parameters.
 */
@Injectable({ providedIn: 'root' })
export class LogoutService {
  constructor(private runtimeConfig: RuntimeConfigService) {}

  /**
   * Perform a full logout.  This should be called from header
   * components or other UI elements that need to sign the user out.
   */
  logout(): void {
    // Remove the single source of truth keys
    try {
      localStorage.removeItem('userToken');
      localStorage.removeItem('UserInfo');
    } catch {
      /* ignore */
    }
    // Clear any old/legacy keys so stale sessions don’t linger
    ['token', 'accessToken', 'apiKey', 'roles', 'userInfo'].forEach((k) => {
      try {
        localStorage.removeItem(k);
      } catch {
        /* ignore */
      }
    });

    // Expire cookies on the root domain.  We include both keys for
    // completeness even if the site now relies on localStorage only.
    document.cookie =
      'userToken=; domain=.neetechs.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie =
      'UserInfo=; domain=.neetechs.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

    // Compute the accounts signOut URL.  The runtime config service
    // determines the current domain and language.  We append the host
    // and pathname so the accounts portal can redirect back to us
    // after clearing its own cookies.
    const host = window.location.hostname;
    const pathname = window.location.pathname;
    const lang = this.runtimeConfig.language || 'en';
    const logoutBase = this.runtimeConfig.loginUrl.replace(/\/$/, '');
    const signOutUrl = `${logoutBase}/signOut?host=${host}&pathname=${encodeURIComponent(
      pathname
    )}&language=${lang}`;

    // Redirect to the signOut endpoint.  Accounts will send a logout
    // message back to us via postMessage and then return the user.
    window.location.href = signOutUrl;
  }
}