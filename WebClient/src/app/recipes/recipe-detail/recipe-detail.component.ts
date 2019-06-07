import { SessionService } from './../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { IRecipe } from 'src/app/models/recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: IRecipe;
  recipeId: number;
  preCookTitle: string;
  showRecipe = false;

  constructor(private recipeApi: RecipeApiService,
              private route: ActivatedRoute,
              private session: SessionService) { }

  ngOnInit() {
    this.recipeId = this.route.snapshot.params['id'];
    console.log('Id in detail comp: ' + this.recipeId);
    this.recipeApi.getRecipe(this.recipeId).subscribe((data) => {
      this.recipe = data;
      if (this.recipe.producer === 'Hello Fresh') {
        this.preCookTitle = 'Bust Out:';
      } else if (this.recipe.producer === 'Home Chef') {
        this.preCookTitle = 'Before You Cook:';
      }
      console.log('Data: ' + this.recipe.title);
      this.showRecipe = true;
    });

    // const newUser: IUser = {
    //   username: 'Testing New User',
    //   password: 'Password'
    // };

    // this.auth.testingSignUp(newUser).subscribe((data) => {
    //   console.log(data);
    // });
  }

  get userIsAdmin(): boolean {
    return this.session.isAdmin;
  }

}



