import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { SubmittedComponent } from './edit-recipe/submitted.component';
import { IngredientsPipe } from '../services/util/ingredients.pipe';
import { RouteGuard } from '../services/route.guard';
import { RecipeResolverService } from '../services/recipe-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'list',
        component: RecipeListComponent,
        resolve: { resolvedData: RecipeResolverService },
        data: { multipleRecipes: true }
      },
      {
        path: 'submitted',
        component: SubmittedComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: { resolvedData: RecipeResolverService},
        data: { multipleRecipes: false }
      },
      {
        path: ':id/edit',
        component: EditRecipeComponent,
        canDeactivate: [RouteGuard],
        resolve: { resolvedData: RecipeResolverService },
        data: { context: 'editRecipe', multipleRecipes: false }
      },
      {
        path: 'search/:searchString',
        component: RecipeSearchComponent,
        resolve: { resolvedData: RecipeResolverService },
        data: { multipleRecipes: true }
      }
    ]),
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    RecipeSearchComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeComponent,
    EditRecipeComponent,
    SubmittedComponent,
    IngredientsPipe,
  ],
  providers: []
})
export class RecipeModule { }
