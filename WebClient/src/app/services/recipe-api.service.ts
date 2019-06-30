import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IRecipe } from '../models/recipe.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  uri = 'http://localhost:3000';
  testVar: any;

  constructor(private httpClient: HttpClient) { }

  getRecipeList(): Observable<IRecipe[]> {
    return this.httpClient.get<IRecipe[]>(`${this.uri}/Recipes`, {responseType: 'json'});
    // .pipe(catchError(this.handleError<IRecipe[]>('getRecipeList', [])));
  }

  getRecipe(recipeId: number): Observable<IRecipe> {
    return this.httpClient.get<IRecipe>(`${this.uri}/Recipes/${recipeId}`, {responseType: 'json'});
    // .pipe(catchError(this.handleError<IRecipe>('getRecipe')));
  }

  submitRecipeForApproval(recipe: IRecipe): Observable<any> {
    return this.httpClient.post(`${this.uri}/Recipes/submit`, recipe, {responseType: 'json'});
  }

  addRecipe(recipe: IRecipe, approvalId: number): Observable<any> {
    const data = {
      recipe,
      approvalId
    };
    return this.httpClient.post(`${this.uri}/Recipes/add`, data, {responseType: 'json'});
  }

  updateRecipe(recipe: IRecipe): Observable<any> {
    return this.httpClient.patch(`${this.uri}/Recipes/update`, recipe, {responseType: 'text'});
  }

  deleteRecipe(recipeId: number): Observable<any> {
    return this.httpClient.delete(`${this.uri}/Recipes/delete/${recipeId}`, {responseType: 'text'});
  }

  favoriteRecipe(recipe: IRecipe): Observable<any> {
    const recipeToUpdate = {recipe, favoriting: true};
    return this.httpClient.post(`${this.uri}/Recipes/favorite`, recipeToUpdate, {responseType: 'text'});
  }

  unFavoriteRecipe(recipe: IRecipe): Observable<any> {
    const recipeToUpdate = {recipe, favoriting: false};
    return this.httpClient.post(`${this.uri}/Recipes/favorite`, recipeToUpdate, {responseType: 'text'});
  }

  rateRecipe(recipe: IRecipe): Observable<any> {
    return this.httpClient.post(`${this.uri}/Recipes/rate`, recipe, {responseType: 'text'});
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
