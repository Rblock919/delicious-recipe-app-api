import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private router: Router,
    private sessionService: SessionService) { }

  public canActivate() {

    if (this.sessionService.isAuthenticated) {
      // console.log('in route guard, and user is auth');
      return true;
    } else {
      // console.log('in route guard and user is not auth');
      this.router.navigate(['home']);
      return false;
    }
  }

}
