import {ActivatedRoute, Router} from '@angular/router';
import {Component, Inject, OnInit, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {IRecipe, IRecipesResolved} from 'src/app/models/recipe.model';
import {SessionService} from '../../services/session.service';
import {Toastr, TOASTR_TOKEN} from '../../shared/toastr.service';
import {RecipeApiService} from '../../services/api/recipe-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeList: IRecipe[];

  // // For modal purposes
  // selectedRecipe: IRecipe;
  // rated: boolean;
  // userRating = 0;

  sortFilter: string;
  sortDirection: string;

  topSelectedFilter = '';
  botSelectedFilter = '';

  userId: number;

  constructor(private sessionService: SessionService,
              private apiService: RecipeApiService,
              private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
    const resolvedData: IRecipesResolved = this.route.snapshot.data.resolvedData;

    if (resolvedData.error) {
      console.error(`Error from resolver: ${JSON.stringify(resolvedData.error)}`);
      this.router.navigate(['error'])
        .then(r => console.log('Routed away from recipe list due to error'));
    } else {
      this.recipeList = resolvedData.recipes;
      this.userId = this.sessionService.getUser._id;

      // just temporarily assign it to 1st recipe to avoid errors
      // this.selectedRecipe = this.recipeList[0];
    }

  }

  setSortFilter(input: string): void {
    if (this.sortFilter === input) {

      if (this.sortDirection === 'down') {
        this.sortFilter = this.sortDirection = '';
      } else {
        this.sortDirection = 'down';
      }

    } else {
      this.sortFilter = input;
      this.sortDirection = 'up';
    }

  }

  setBotFilter(input: string): void {
    this.botSelectedFilter = this.botSelectedFilter === input ? '' : input;
  }

  setTopFilter(input: string): void {
    this.topSelectedFilter = this.topSelectedFilter === input ? '' : input;
  }

  favEvent($event): void {
    const tmp = $event.recipe as IRecipe;
    const favoriting = $event.favoriting as boolean;

    if (favoriting) {
      this.apiService.favoriteRecipe(tmp).subscribe((res) => {
        const message = `${tmp.title} Has Been Favorited!`;
        this.toastr.success(this.sanitizer.sanitize(SecurityContext.HTML, message));
        this.recipeList = this.recipeList.slice(0); // re-trigger pipes
      }, (err) => {
        console.error(`err: ${err}`);
        this.toastr.error('Error favoriting recipe');
      });
    } else {
      this.apiService.unFavoriteRecipe(tmp).subscribe((res) => {
        const message = `${tmp.title} Has Been Unfavorited!`;
        this.toastr.success(this.sanitizer.sanitize(SecurityContext.HTML, message));
        this.recipeList = this.recipeList.slice(0); // re-trigger pipes
      }, (err) => {
        console.error(`err: ${err}`);
        this.toastr.error('Error unfavoriting recipe');
      });
    }
  }

  rateEvent($event): void {
    const tmp = $event as IRecipe;
    this.apiService.rateRecipe(tmp).subscribe((res) => {
      console.log(`res: ${res}`);
      this.recipeList = this.recipeList.slice(0); // re-trigger pipes
      this.toastr.success(this.sanitizer.sanitize(SecurityContext.HTML, tmp.title));
    }, (err) => {
      console.error(`err: ${err}`);
      this.toastr.error('Error rating recipe');
    });
  }

  // setRating(rating: number): void {
  //   this.userRating = rating;
  // }
  //
  // submitRate(): void {
  //   this.selectedRecipe.raters[this.userId] = this.userRating;
  //   this.apiService.rateRecipe(this.selectedRecipe).subscribe((res) => {
  //     console.log(`res: ${res}`);
  //     this.rated = true;
  //     this.toastr.success('Recipe successfully rated!');
  //
  //     const index = this.recipeList.indexOf(this.selectedRecipe);
  //     this.recipeList[index] = this.selectedRecipe;
  //
  //     if (this.selectedRecipeList.indexOf(this.selectedRecipe) > -1) {
  //       const index2 = this.selectedRecipeList.indexOf(this.selectedRecipe);
  //       this.selectedRecipeList[index2] = {} as IRecipe;
  //       this.selectedRecipeList[index2] = this.selectedRecipe;
  //       this.selectedRecipeList[index2].raters[this.userId] = this.userRating;
  //     }
  //
  //     this.createHotList();
  //     this.sortRecipes();
  //     if (this.sortFilter === 'rating') {
  //
  //       this.selectedRecipeList.sort((a, b) => {
  //         let aAvg = 0;
  //         let bAvg = 0;
  //         let counter = 0;
  //         for (const value of Object.values(a.raters)) {
  //           aAvg += Number(value);
  //           counter++;
  //         }
  //         aAvg /= counter;
  //
  //         counter = 0;
  //         for (const value of Object.values(b.raters)) {
  //           bAvg += Number(value);
  //           counter++;
  //         }
  //         bAvg /= counter;
  //
  //         // console.log(`Avg of recipeA(${a.title}): ${aAvg} compared to avg of recipeB(${b.title}): ${bAvg}`);
  //
  //         if (isNaN(aAvg)) {
  //           aAvg = 0;
  //         }
  //         if (isNaN(bAvg)) {
  //           bAvg = 0;
  //         }
  //
  //         if (this.sortDirection === 'up') {
  //           if (aAvg > bAvg) {
  //             return 1;
  //           } else {
  //             return -1;
  //           }
  //         } else if (this.sortDirection === 'down') {
  //           if (aAvg > bAvg) {
  //             return -1;
  //           } else {
  //             return 1;
  //           }
  //         }
  //
  //       });
  //
  //     }
  //     this.selectedRecipeList = this.selectedRecipeList.slice(0);
  //   }, (err) => {
  //     console.error(`err rating recipe: ${err}`);
  //     this.toastr.error('Error rating recipe');
  //   })
  // }

}
