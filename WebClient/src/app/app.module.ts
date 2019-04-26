import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeApiService } from './services/recipe-api.service';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserHomeComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RecipeApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
