import { Injectable } from '@angular/core';
import { CanActivate, Router, CanDeactivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { SessionService } from './session.service';
import { EditRecipeComponent } from '../recipes/edit-recipe/edit-recipe.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate, CanDeactivate<EditRecipeComponent> {

  constructor(
    private router: Router,
    private sessionService: SessionService) { }

  public canActivate() {

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

  public canDeactivate(component: EditRecipeComponent, route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const context = route.data.context;

    if (context === 'editRecipe') {
      if (component.recipeForm.dirty) {
        const recipeName = component.recipeForm.get('title').value || 'New Recipe';
        return confirm(`Navigate away and lose all changes to ${recipeName}?`);
      }
      return true;
    } else if (context === 'register') {
      return confirm('Navigate away and lose all changes to new profile?');
    }


  }

}
