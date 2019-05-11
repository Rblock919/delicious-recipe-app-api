import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../models/recipe.model';
import { RecipeApiService } from '../services/recipe-api.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  recipeList: IRecipe[];

  newRecipes = [
    { title: 'New Recipe 1', producer: 'Hello Fresh', cookTime: '30'},
    { title: 'New Recipe 2', producer: 'Blue Apron', cookTime: '40'},
    { title: 'New Recipe 3', producer: 'Home Chef', cookTime: '50'}
  ];

  constructor(private apiService: RecipeApiService) { }

  ngOnInit() {
      this.apiService.getRecipeList().subscribe(data => {
      console.log('Id for recipe 1: ' + data[0]._id);
      this.recipeList = data;
      // console.log('Data: ' + JSON.stringify(data));
      // console.log('Recipe List Length: ' + this.recipeList.length);
      // console.log('Recipe List: ' + this.recipeList);
    }, err => {
      console.log('err in recipeList comp: ' + JSON.stringify(err));
    });
  }

}
