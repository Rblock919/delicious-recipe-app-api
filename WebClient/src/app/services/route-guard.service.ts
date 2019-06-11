import { Injectable, Component } from '@angular/core';
import { CanActivate, Router, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { SessionService } from './session.service';
import { EditRecipeComponent } from '../recipes/edit-recipe/edit-recipe.component';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../login/register.component';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate, CanDeactivate<Component> {

  constructor(
    private router: Router,
    private sessionService: SessionService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log(state.url);
    if (state.url === '/register') {
      console.log('route is to register');
      if (this.sessionService.isAuthenticated) {
        console.log('user is logged in an attempting to access register page');
        return false;
      }
    }

    return true;

    if (this.sessionService.isAuthenticated) {
      // console.log('in route guard, and user is auth');
      return true;
    } else {
      // console.log('in route guard and user is not auth');
      this.router.navigate(['index']);
      return false;
    }
  }

  public canDeactivate(component: Component, route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const context = route.data.context;
    let tempComponent: any;

    if (context === 'editRecipe') {
      tempComponent = component as EditRecipeComponent;
      if (tempComponent.recipeForm.dirty) {
        const recipeName = tempComponent.recipeForm.get('title').value || 'New Recipe';
        return confirm(`Navigate away and lose all changes to ${recipeName}?`);
      }
      return true;
    } else if (context === 'register') {
      tempComponent = component as RegisterComponent;
      if (tempComponent.userInfo.username !== '' || tempComponent.userInfo.password !== '' || tempComponent.confirmPassword) {
        console.log('username or password(s) fields have been touched');
        return confirm('Navigate away and lose all changes to new profile?');
      } else {
        return true;
      }
    }

  }

}
