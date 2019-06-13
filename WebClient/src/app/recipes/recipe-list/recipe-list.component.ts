import { SessionService } from './../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { IRecipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeList: IRecipe[];
  selectedRecipeList: IRecipe[];

  topFilteredList: IRecipe[];
  botFilteredList: IRecipe[];

  sortFilter: string;
  sortDirection: string;

  newRecipesList: IRecipe[];
  hotRecipeList: IRecipe[];
  favRecipeList: IRecipe[];

  topSelectedFilter = '';
  botSelectedFilter = '';
  userId: number;


  constructor(private apiService: RecipeApiService, private sessionService: SessionService) { }

  ngOnInit() {
    this.hotRecipeList = [];
    this.favRecipeList = [];

    this.apiService.getRecipeList().subscribe(data => {
      this.recipeList = data;
      this.selectedRecipeList = this.recipeList;
      const tempUser = this.sessionService.getUser;
      this.userId = tempUser._id;

      const recipeLength = this.recipeList.length;
      this.newRecipesList = this.recipeList.slice((recipeLength - 6), (recipeLength));

      this.favRecipeList = this.recipeList.filter(recipe => {
        return (recipe.favoriters.indexOf('' + this.userId) > -1 );
      });

      // hard coding 'hot' recipes for the moment
      this.hotRecipeList.push(this.recipeList[1]);
      this.hotRecipeList.push(this.recipeList[3]);
      this.hotRecipeList.push(this.recipeList[4]);
    }, err => {
      console.log('err in recipeList comp: ' + JSON.stringify(err));
    });
  }

  setBotFilter(input: string): void {
    if (input === 'Hello Fresh') {

      // selected filter was already hello fresh and user clicked again; reset filter
      if (this.botSelectedFilter === 'Hello Fresh') {
        this.botSelectedFilter = '';
        this.botFilteredList = this.recipeList;
      } else {
        this.botFilteredList = this.recipeList.filter((recipe) => {
          return recipe.producer === 'Hello Fresh';
        });
        this.botSelectedFilter = input;
      }

    } else if (input === 'Home Chef') {

      // selected filter was already home chef and user clicked again; reset filter
      if (this.botSelectedFilter === 'Home Chef') {
        this.botSelectedFilter = '';
        this.botFilteredList = this.recipeList;
      } else {
        this.botFilteredList = this.recipeList.filter(recipe => {
          return recipe.producer === 'Home Chef';
        });
        this.botSelectedFilter = input;
      }

    } else if (input === 'Blue Apron') {

      // selected filter was already blue apron and user clicked again; reset filter
      if (this.botSelectedFilter === 'Blue Apron') {
        this.botSelectedFilter = '';
        this.botFilteredList = this.recipeList;
      } else {
        this.botFilteredList = this.recipeList.filter(recipe => {
          return recipe.producer === 'Blue Apron';
        });
        this.botSelectedFilter = input;
      }

    }
    this.joinLists();
  }

  setTopFilter(input: string): void {
    if (input === 'new') {
      if (this.topSelectedFilter === 'new') {
        this.topSelectedFilter = '';
        this.topFilteredList = this.recipeList;
      } else {
        this.topSelectedFilter = input;
        this.topFilteredList = this.newRecipesList;
      }

    } else if (input === 'hot') {

      if (this.topSelectedFilter === 'hot') {
        this.topSelectedFilter = '';
        this.topFilteredList = this.recipeList;
        return;
      } else {
        this.topSelectedFilter = input;
        this.topFilteredList = this.hotRecipeList;
      }
    } else if (input === 'fav') {
      if (this.topSelectedFilter === 'fav') {
        this.topSelectedFilter = '';
        this.topFilteredList = this.recipeList;
      } else {
        this.topSelectedFilter = input;
        this.topFilteredList = this.favRecipeList;
      }
    }
    this.joinLists();
  }

  favEvent(): void {
    const that = this;
    setTimeout(() => {
      that.favRecipeList = that.recipeList.filter(recipe => {
        return (recipe.favoriters.indexOf('' + that.userId) > -1 );
      });
      if (that.topSelectedFilter === 'fav') {
        that.topFilteredList = that.favRecipeList;
      }
      that.joinLists();
    }, 150);
  }

  joinLists(): void {
    //                4 Possible Cases
    // Case 1: No filters have been selected for top and bot
    // Case 2: Filter has been selected for top but not bot
    // Case 3: Filter has been selected for bot but not top
    // Case 4: Filters have been selected for both top and bot

    // Case 3
    if (this.topSelectedFilter === '' && this.botSelectedFilter !== '') {

      this.selectedRecipeList = this.botFilteredList;
      this.sortList('fromJoin');

    } else if (this.topSelectedFilter !== '') {

      // Case 2
      if (this.botSelectedFilter === '') {
        this.selectedRecipeList = this.topFilteredList;
        this.sortList('fromJoin');
      } else { // Case 4
        this.selectedRecipeList = this.topFilteredList.filter(recipe => {
          return recipe.producer === this.botSelectedFilter;
        });
        this.sortList('fromJoin');
      }

      // Case 1
    } else if (this.topSelectedFilter === '' && this.botSelectedFilter === '') {
      this.selectedRecipeList = this.recipeList;
      this.sortList('fromJoin');
    }

  }

  sortList(filter: string): void {

    // this if statement is to maintain the sort filter when the filterBy filter changes
    if (filter === 'fromJoin') {
      if (this.sortDirection === '' || !this.sortDirection) {
        return;
      } else {
        this.sortRecipes();
        return;
      }
    }

    if (this.sortFilter === filter) {
      if (this.sortDirection === 'up') {

        console.log('sort direction is up and turning to down...');
        this.sortDirection = 'down';
        this.sortRecipes();

      } else {
        console.log('sort direction was already down so reseting...');
        this.selectedRecipeList.sort((a, b) => (a._id > b._id ? 1 : -1));
        this.sortDirection = '';
        this.sortFilter = '';
      }
    } else {

      console.log('new filter on sort so setting sort direction to up...');
      this.sortDirection = 'up';
      this.sortFilter = filter;
      this.sortRecipes();

    }


  }

  sortRecipes(): void {
    if (this.sortDirection === 'up') {
      if (this.sortFilter === 'calories') {
          this.selectedRecipeList.sort((a, b) => (a.nutritionValues.calories > b.nutritionValues.calories ? 1 : -1));
        } else if (this.sortFilter === 'rating') {
          // to-do after implementing rating system
        } else if (this.sortFilter === 'title') {
          this.selectedRecipeList.sort((a, b) => (a.title > b.title ? 1 : -1));
        }
    } else if (this.sortDirection === 'down') {
      if (this.sortFilter === 'calories') {
          this.selectedRecipeList.sort((a, b) => (a.nutritionValues.calories > b.nutritionValues.calories ? -1 : 1));
        } else if (this.sortFilter === 'rating') {
          // to-do after implementing rating system
        } else if (this.sortFilter === 'title') {
          this.selectedRecipeList.sort((a, b) => (a.title > b.title ? -1 : 1));
        }
    }
  }

}
