import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
// import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
// import { JQ_TOKEN } from './common/jQuery.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeComponent } from './recipes/recipe/recipe.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeApiService } from './services/recipe-api.service';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
// import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LogoutComponent } from './login/logout.component';
import { SessionService } from './services/session.service';
// import { IngredientsPipe } from './services/util/ingredients.pipe';
// import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
// import { StarComponent } from './shared/star/star.component';
import { EditRecipeListComponent } from './admin/edit-recipe-list/edit-recipe-list.component';
import { ApproveRecipeListComponent } from './admin/approve-recipe-list/approve-recipe-list.component';
import { EditUserListComponent } from './admin/edit-user-list/edit-user-list.component';
// import { AdminService } from './services/admin.service';
import { SubmittedComponent } from './recipes/edit-recipe/submitted.component';
import { ApproveRecipeDetailComponent } from './admin/approve-recipe-detail/approve-recipe-detail.component';
import { RecipeSearchComponent } from './recipes/recipe-search/recipe-search.component';
import { SharedModule } from './shared/shared.module';
import { SplashPageComponent } from './user-home/splash-page.component';
import { RecipeModule } from './recipes/recipe.module';

//const toastr: Toastr = window['toastr'];
//const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserHomeComponent,
    // RecipeListComponent,
    // RecipeComponent,
    // RecipeDetailComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    SplashPageComponent,
    // IngredientsPipe,
    // EditRecipeComponent,
    // StarComponent,
    // EditRecipeListComponent,
    // ApproveRecipeListComponent,
    // EditUserListComponent,
    // SubmittedComponent,
    // ApproveRecipeDetailComponent,
    // RecipeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // ReactiveFormsModule,
    SharedModule,
    // RecipeModule
  ],
  providers: [
    RecipeApiService,
    AuthService,
    SessionService,
    // AdminService,
   //  {
      // provide: HTTP_INTERCEPTORS,
      // useClass: AuthInterceptorService,
      // multi: true
    // },
    // {
      // provide: TOASTR_TOKEN,
      // useValue: toastr
    // },
    // {
      // provide: JQ_TOKEN,
      // useValue: jQuery
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
