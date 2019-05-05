import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { path: 'home', component: UserHomeComponent},
  { path: 'recipes', component: RecipeListComponent, canActivate: [RouteGuardService]},
  { path: 'recipe/:id', component: RecipeDetailComponent, canActivate: [RouteGuardService]},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '**', redirectTo: 'home'},
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
