import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { LoggerService } from './util/logger.service';
import { SessionService } from './session.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private injector: Injector,
    private loggerService: LoggerService,
    private cookieService: CookieService) { }

  intercept(req, next) {

    // this.loggerService.consoleLog('In Auth Interceptor');
    const session = this.injector.get(SessionService);

    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'token ' + session.token),
      withCredentials: true
    });

    return next.handle(authRequest);
  }

}
