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
    const token = getCookie('token');

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
    const token = getCookie('token');

    if (!token) {
      return true;
    } else {
      return inject(Router).createUrlTree(['tasks']);
    }
  }

  return false;
};

const getCookie = (cname: string) => {
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
