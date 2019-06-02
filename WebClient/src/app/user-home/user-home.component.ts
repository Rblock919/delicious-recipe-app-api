import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../models/recipe.model';
import { RecipeApiService } from '../services/recipe-api.service';
import { SessionService } from '../services/session.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  recipeList: IRecipe[];
  newRecipesList: IRecipe[];
  selectedRecipeList: IRecipe[];
  hotRecipeList: IRecipe[];
  favRecipeList: IRecipe[];
  userId: number;

  pageTitle: string;
  selectedFilter: string;

  constructor(private apiService: RecipeApiService, private session: SessionService) { }

  ngOnInit() {
    this.hotRecipeList = [];
    this.favRecipeList = [];
    this.apiService.getRecipeList().subscribe(data => {
      const user = this.session.getUser as IUser;
      this.userId = user._id;
      this.recipeList = data;
      const recipeLength = this.recipeList.length;
      this.newRecipesList = this.recipeList.slice((recipeLength - 6), (recipeLength));

      this.favRecipeList = this.recipeList.filter(recipe => {
        return (recipe.favoriters.indexOf('' + this.userId) > -1 );
      });

      // temp solution to fill hot & fav recipe lists until functionality is implemented
      this.hotRecipeList.push(this.recipeList[1]);
      this.hotRecipeList.push(this.recipeList[3]);
      this.hotRecipeList.push(this.recipeList[4]);
      this.setFilter('new');
      // console.log('Newer recipes: ' + JSON.stringify(this.newRecipesList));
    }, err => {
      console.log('err in recipeList comp: ' + JSON.stringify(err));
    });

  }

  setFilter(input: string): void {
    this.selectedFilter = input;
    if (this.selectedFilter === 'new') {
      this.pageTitle = 'Newly Added Recipes';
      this.selectedRecipeList = this.newRecipesList;
    } else if (this.selectedFilter === 'hot') {
      this.pageTitle = 'Highly Rated Recipes';
      this.selectedRecipeList = this.hotRecipeList;
    } else {
      this.pageTitle = 'Favorited Recipes';
      this.selectedRecipeList = this.favRecipeList;
    }
  }

  favEvent() {
    const that = this;
    setTimeout(() => {
      that.favRecipeList = that.recipeList.filter(recipe => {
        return (recipe.favoriters.indexOf('' + that.userId) > -1 );
      });
      if (that.selectedFilter === 'fav') {
        that.selectedRecipeList = that.favRecipeList;
      }
      console.log('timeout over');
    }, 150);
  }

}
