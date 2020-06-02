import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenAuthService } from './auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor( private authService : TokenAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
     const token = this.authService.getToken();

    if (token) {
      const clonedRequest = req.clone({
        headers: req.headers.set('Authorization', "Token ".concat(token) )
      });

      return next.handle(clonedRequest);
    }

    return next.handle(req);
  }
}
