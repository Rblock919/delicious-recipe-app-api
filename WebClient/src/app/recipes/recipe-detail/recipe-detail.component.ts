import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { IRecipe } from 'src/app/models/recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: IRecipe;
  recipeId: number;
  showRecipe = false;

  constructor(private recipeApi: RecipeApiService, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {
    this.recipeId = this.route.snapshot.params['id'];
    console.log('Id in detail comp: ' + this.recipeId);
    this.recipeApi.getRecipe(this.recipeId).subscribe((data) => {
      this.recipe = data;
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

}



