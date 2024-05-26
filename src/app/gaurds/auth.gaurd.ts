import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
// import { Router } from "express";
import { Observable } from 'rxjs';

import { CanMatchFn } from '@angular/router';

export const authGuard: CanMatchFn = (
  route,
  segments
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
    console.log(1)
  return inject(Router).createUrlTree(['login']);
  //   return true;
};


export const homeGuard: CanMatchFn = (
    route,
    segments
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
        console.log(2)
    return inject(Router).createUrlTree(['/tasks']);
    //   return true;
  };
