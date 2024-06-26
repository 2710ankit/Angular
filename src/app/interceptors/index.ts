import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpRequestInterceptor } from './http.interceptor';

/** Array of Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
