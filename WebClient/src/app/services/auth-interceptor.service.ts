import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    console.log('In Auth Interceptor');
    const session = this.injector.get(SessionService);
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'token ' + session.token)
    });
    // console.log(req);
    return next.handle(authRequest);
  }

}
