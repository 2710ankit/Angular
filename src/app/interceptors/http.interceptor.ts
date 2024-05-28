import { inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

import { catchError, Observable, tap, throwError } from 'rxjs';
import { error } from 'console';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:3001/api';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const router = inject(Router);
    console.log('interceptor', req.url);
    req = req.clone({ url: `${baseUrl}/${req.url}` });
    const token = localStorage.getItem('token');

    const authReq = req.clone({
      setHeaders: {
        Authorization: `${token}`,
      },
    });

    return next.handle(authReq).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log(event.status);
          const token = event.headers.get('Authorization');
          if (token) {
            localStorage.setItem('token', token); // Save token to local storage
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if ([401, 402, 403].includes(error.status)) {
          localStorage.clear();
          router.navigate(['/login']);
        }
        return throwError(() => new Error('error'));
      })
    );
  }
}
