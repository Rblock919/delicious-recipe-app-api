import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IRecipe, IRecipeResolved, IRecipesResolved } from 'src/app/models/recipe.model';
import { RecipeApiService } from './recipe-api.service';
import { RecipeModule } from '../recipes/recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<IRecipeResolved | IRecipesResolved> {

  constructor(private recipeApiService: RecipeApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRecipeResolved> | Promise<IRecipeResolved> |
  IRecipeResolved | Observable<IRecipesResolved>  | Promise<IRecipesResolved> | IRecipesResolved {

    // console.log('in recipe resolver');
    const id = route.params.id;
    const multiple = route.data.multipleRecipes;

    if (multiple) {
      return this.recipeApiService.getRecipeList()
        .pipe(map(recipes => ({recipes})),
        catchError(error => {
          console.error(error);
          return of ({recipes: null, error});
        })
      );
    } else {
      return this.recipeApiService.getRecipe(id)
        .pipe(map(recipe => ({recipe})),
        catchError(error => {
          console.error(error);
          return of ({recipe: null, error});
        })
      );
    }

  }

}
