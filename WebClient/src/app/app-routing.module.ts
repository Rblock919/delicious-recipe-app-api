import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminGuard } from './services/admin.guard';
import { RouteGuard } from './services/route.guard';
import { ApproveRecipeListComponent } from './admin/approve-recipe-list/approve-recipe-list.component';
import { EditRecipeListComponent } from './admin/edit-recipe-list/edit-recipe-list.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { SplashPageComponent } from './user-home/splash-page.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { EditUserListComponent } from './admin/edit-user-list/edit-user-list.component';
import { SubmittedComponent } from './recipes/edit-recipe/submitted.component';
import { ApproveRecipeDetailComponent } from './admin/approve-recipe-detail/approve-recipe-detail.component';
import { RecipeSearchComponent } from './recipes/recipe-search/recipe-search.component';

const routes: Routes = [
  { path: 'index', component: SplashPageComponent},
  { path: 'home', component: UserHomeComponent},
  { path: 'recipes', component: RecipeListComponent, canActivate: [RouteGuard]},
  { path: 'recipe/:id', component: RecipeDetailComponent, canActivate: [RouteGuard]},
  { path: 'recipe/:id/edit', component: EditRecipeComponent, canActivate: [RouteGuard], canDeactivate: [RouteGuard],
    data: {context: 'editRecipe'}},
  { path: 'search/:searchString', component: RecipeSearchComponent, canActivate: [RouteGuard]},
  { path: 'submitted', component: SubmittedComponent },
  { path: 'register', component: RegisterComponent,
    canActivate: [RouteGuard], canDeactivate: [RouteGuard],
    data: {context: 'register'}},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'admin/editRecipeList', component: EditRecipeListComponent, canActivate: [AdminGuard] },
  { path: 'admin/approve', component: ApproveRecipeListComponent, canActivate: [AdminGuard] },
  { path: 'admin/approve/:id', component: ApproveRecipeDetailComponent, canActivate: [AdminGuard] },
  // { path: 'admin/approve/:id', component: EditRecipeComponent, canActivate: [AdminGuard] },
  { path: 'admin/editUserList', component: EditUserListComponent, canActivate: [AdminGuard] },
  { path: '**', redirectTo: 'home'},
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
