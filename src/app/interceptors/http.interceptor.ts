import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

const baseUrl = 'http://localhost:3001/api';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('interceptor', req.url);
    req = req.clone({ url: `${baseUrl}/${req.url}` });

    // console.log(req)
    // const authToken = 'YOUR_AUTH_TOKEN_HERE';

    // // Clone the request and add the authorization header
    // const authReq = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${authToken}`,
    //   },
    // });

    return next.handle(req) 
  }
}
