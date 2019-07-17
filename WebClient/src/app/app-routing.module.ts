import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminGuard } from './services/admin.guard';
import { RouteGuard } from './services/route.guard';
import { UserHomeComponent } from './user-home/user-home.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { SplashPageComponent } from './user-home/splash-page.component';
import { SelectiveStrategy } from './selective-strategy.service';

const routes: Routes = [
  { path: 'index', component: SplashPageComponent},
  { path: 'home', component: UserHomeComponent},
  {
    path: 'recipe',
    loadChildren: 'src/app/recipes/recipe.module#RecipeModule',
    canActivate: [RouteGuard],
    data: { preload: true }
  },
  {
    path: 'admin',
    loadChildren: 'src/app/admin/admin.module#AdminModule',
    canActivate: [AdminGuard]
  },
  { path: 'register',
    component: RegisterComponent,
    canActivate: [RouteGuard], canDeactivate: [RouteGuard],
    data: {context: 'register'}},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: SelectiveStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
