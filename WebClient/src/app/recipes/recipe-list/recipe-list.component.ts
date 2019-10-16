import {ActivatedRoute, Router} from '@angular/router';
import {Component, Inject, OnInit, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {IRecipe, IRecipesResolved} from 'src/app/models/recipe.model';
import {SessionService} from '../../services/session.service';
import {Toastr, TOASTR_TOKEN} from '../../shared/toastr.service';

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

  constructor(private sessionService: SessionService,
              private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
    this.hotRecipeList = [];
    this.favRecipeList = [];

    const resolvedData: IRecipesResolved = this.route.snapshot.data.resolvedData;

    if (resolvedData.error) {
      console.error(`Error from resolver: ${JSON.stringify(resolvedData.error)}`);
      this.router.navigate(['error'])
        .then(r => console.log('Routed away from recipe list due to error'));
    } else {
      this.recipeList = resolvedData.recipes;
      this.selectedRecipeList = this.recipeList;
      this.userId = this.sessionService.getUser._id;

      const recipeLength = this.recipeList.length;
      this.newRecipesList = this.recipeList.slice((recipeLength - 6), (recipeLength));

      this.favRecipeList = this.recipeList.filter(recipe => {
        return (recipe.favoriters.indexOf('' + this.userId) > -1 );
      });

      this.createHotList();
    }

  }

  createHotList(): void {
    this.hotRecipeList = [];
    let tempList: any[];
    tempList = this.recipeList.slice(0);

    tempList.sort((a, b) => {
      let aAvg = 0;
      let bAvg = 0;
      let counter = 0;
      for (const value of Object.values(a.raters)) {
        aAvg += Number(value);
        counter++;
      }
      aAvg /= counter;

      counter = 0;
      for (const value of Object.values(b.raters)) {
        bAvg += Number(value);
        counter++;
      }
      bAvg /= counter;

      // console.log(`Avg of recipeA(${a.title}): ${aAvg} compared to avg of recipeB(${b.title}): ${bAvg}`);

      if (isNaN(aAvg)) {
        aAvg = 0;
      }
      if (isNaN(bAvg)) {
        bAvg = 0;
      }

      if (aAvg > bAvg) {
        return -1;
      } else {
        return 1;
      }

    });

    // make sure each of the top 12 rated recipes has actually been rated before pushing to top 12 array
    for (let i = 0; i < 12; i++) {
      if (Object.values(tempList[i].raters).length > 0) {
        this.hotRecipeList.push(tempList[i]);
      }
    }

    if (this.topSelectedFilter === 'hot') {
      this.selectedRecipeList = this.hotRecipeList;
    }

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

  favEvent($event): void {
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

    this.toastr.success(this.sanitizer.sanitize(SecurityContext.HTML, $event));
  }

  rateEvent($event): void {
    this.createHotList();
    if (this.sortFilter === 'rating') {

        this.selectedRecipeList.sort((a, b) => {
          let aAvg = 0;
          let bAvg = 0;
          let counter = 0;
          for (const value of Object.values(a.raters)) {
            aAvg += Number(value);
            counter++;
          }
          aAvg /= counter;

          counter = 0;
          for (const value of Object.values(b.raters)) {
            bAvg += Number(value);
            counter++;
          }
          bAvg /= counter;

          // console.log(`Avg of recipeA(${a.title}): ${aAvg} compared to avg of recipeB(${b.title}): ${bAvg}`);

          if (isNaN(aAvg)) {
            aAvg = 0;
          }
          if (isNaN(bAvg)) {
            bAvg = 0;
          }

          if (this.sortDirection === 'up') {
            if (aAvg > bAvg) {
              return 1;
            } else {
              return -1;
            }
          } else if (this.sortDirection === 'down') {
            if (aAvg > bAvg) {
              return -1;
            } else {
              return 1;
            }
          }

        });

    }

    this.toastr.success(this.sanitizer.sanitize(SecurityContext.HTML, $event));
    // this.toastr.success($event);

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
      } else {
        // Case 4
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
        console.log('sort direction was already down so resetting...');
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

          this.selectedRecipeList.sort((a, b) => {
            let aAvg = 0;
            let bAvg = 0;
            let counter = 0;
            for (const value of Object.values(a.raters)) {
              aAvg += Number(value);
              counter++;
            }
            aAvg /= counter;

            counter = 0;
            for (const value of Object.values(b.raters)) {
              bAvg += Number(value);
              counter++;
            }
            bAvg /= counter;

            // console.log(`Avg of recipeA(${a.title}): ${aAvg} compared to avg of recipeB(${b.title}): ${bAvg}`);

            if (isNaN(aAvg)) {
              aAvg = 0;
            }
            if (isNaN(bAvg)) {
              bAvg = 0;
            }

            if (aAvg > bAvg) {
              return 1;
            } else {
              return -1;
            }

          });
        } else if (this.sortFilter === 'title') {
          this.selectedRecipeList.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
        }
    } else if (this.sortDirection === 'down') {
      if (this.sortFilter === 'calories') {
          this.selectedRecipeList.sort((a, b) => (a.nutritionValues.calories > b.nutritionValues.calories ? -1 : 1));
        } else if (this.sortFilter === 'rating') {

          this.selectedRecipeList.sort((a, b) => {
          let aAvg = 0;
          let bAvg = 0;
          let counter = 0;
          for (const value of Object.values(a.raters)) {
            aAvg += Number(value);
            counter++;
          }
          aAvg /= counter;

          counter = 0;
          for (const value of Object.values(b.raters)) {
            bAvg += Number(value);
            counter++;
          }
          bAvg /= counter;

          // console.log(`Avg of recipeA(${a.title}): ${aAvg} compared to avg of recipeB(${b.title}): ${bAvg}`);

          if (isNaN(aAvg)) {
            aAvg = 0;
          }
          if (isNaN(bAvg)) {
            bAvg = 0;
          }

          if (aAvg > bAvg) {
            return -1;
          } else {
            return 1;
          }

        });

        } else if (this.sortFilter === 'title') {
          this.selectedRecipeList.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1));
        }
    }
  }

}
