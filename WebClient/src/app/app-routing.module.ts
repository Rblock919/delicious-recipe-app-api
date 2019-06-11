import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { SplashPageComponent } from './user-home/splash-page.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

const routes: Routes = [
  { path: 'index', component: SplashPageComponent},
  { path: 'home', component: UserHomeComponent, canActivate: [RouteGuardService]},
  { path: 'recipes', component: RecipeListComponent, canActivate: [RouteGuardService]},
  { path: 'recipe/:id', component: RecipeDetailComponent, canActivate: [RouteGuardService]},
  { path: 'recipe/:id/edit', component: EditRecipeComponent, canActivate: [RouteGuardService], canDeactivate: [RouteGuardService],
    data: {context: 'editRecipe'}},
  { path: 'register', component: RegisterComponent,
    canActivate: [RouteGuardService], canDeactivate: [RouteGuardService],
    data: {context: 'register'}},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '**', redirectTo: 'home', canActivate: [RouteGuardService]},
  { path: '', pathMatch: 'full', redirectTo: 'home', canActivate: [RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
