import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (
  route,
  segments
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const platformId = inject(PLATFORM_ID);
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      return inject(Router).createUrlTree(['login']);
    }
  }

  return false;
};

export const loginGuard: CanActivateFn = (
  route,
  segments
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const platformId = inject(PLATFORM_ID);
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem('token');

    if (!token) {
      return true;
    } else {
      return inject(Router).createUrlTree(['tasks']);
    }
  }

  return false;
};
