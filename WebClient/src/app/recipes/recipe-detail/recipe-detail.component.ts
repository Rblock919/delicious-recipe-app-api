import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RecipeApiService } from 'src/app/services/api/recipe-api.service';
import { IRecipe, IRecipeResolved } from 'src/app/models/recipe.model';
import { SessionService } from './../../services/session.service';
import { Toastr, TOASTR_TOKEN } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: IRecipe;
  recipeId: number;
  preCookTitle: string;
  favorited: boolean;
  rated: boolean;
  userRating = 0;
  avgRating = 0;

  constructor(private recipeApi: RecipeApiService,
              private route: ActivatedRoute,
              private session: SessionService,
              private router: Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr
              ) { }

  ngOnInit() {
    const resolvedData: IRecipeResolved = this.route.snapshot.data.resolvedData;

    if (resolvedData.error) {
      console.error(`Error in recipe detail comp: ${resolvedData.error}`);
      console.log('routing to error page...');
      this.router.navigate(['error']);
    } else {
      this.recipe = resolvedData.recipe;
      this.recipeId = this.recipe._id;
      let favoriters: string[];
      favoriters = this.recipe.favoriters;
      if (favoriters.indexOf('' + this.session.getUser._id) > -1) {
        this.favorited = true;
      } else {
        this.favorited = false;
      }
      if (this.recipe.producer === 'Hello Fresh') {
        this.preCookTitle = 'Bust Out:';
      } else if (this.recipe.producer === 'Home Chef') {
        this.preCookTitle = 'Before You Cook:';
      }

      if (Object.keys(this.recipe.raters).length > 0) {

        // console.log(`${this.recipe.title} has user ratings present.`);

        if (this.recipe.raters[this.session.getUser._id]) {
          // console.log('user has rated ' + this.recipe.title + ' and gave it a: ' + this.recipe.raters[this.session.getUser._id]);
          this.rated = true;
          this.userRating = this.recipe.raters[this.session.getUser._id];
        }

        let ratingCounter = 0;
        for (const value of Object.values(this.recipe.raters)) {
          this.avgRating += Number(value);
          ratingCounter++;
        }

        this.avgRating /= ratingCounter;
        // console.log('avgRating: ' + this.avgRating);

      }

    }


  }

  get userIsAdmin(): boolean {
    return this.session.isAdmin;
  }

  setRating(rating: number): void {
    this.userRating = rating;
  }

  logRate($event) {
    console.log($event);
  }

  submitRate(rating: number) {
    // console.log('rating in submitRate: ' + rating);
    this.recipe.raters[this.session.getUser._id] = rating;

    this.recipeApi.rateRecipe(this.recipe).subscribe(res => {
      // console.log('res in submitRate: ' + res);
      this.rated = true;
      this.toastr.success(`${this.recipe.title} Successfuly Rated!`);

      // update average rating
      let ratingCounter = 0;
      this.avgRating = 0;
      for (const value of Object.values(this.recipe.raters)) {
        this.avgRating += Number(value);
        ratingCounter++;
      }
      this.avgRating /= ratingCounter;

    }, err => {
      this.toastr.error(`ERROR RATING RECIPE`);
      console.log('err in submitRate: ' + err);
    });
  }

  favorite(): void {
    this.favorited = !this.favorited;
    if (this.favorited) {
      this.recipeApi.favoriteRecipe(this.recipe).subscribe(res => {
        // console.log('res from fav api call: ' + res);
        this.recipe.favoriters.push('' + this.session.getUser._id);
        this.toastr.success(`${this.recipe.title} Has Been Favorited`);
      });
    } else if (!this.favorited) {
      this.recipeApi.unFavoriteRecipe(this.recipe).subscribe(res => {
        this.recipe.favoriters = this.recipe.favoriters.filter(uId => uId !== '' + this.session.getUser._id);
        this.toastr.success(`${this.recipe.title} Has Been Unfavorited`);
      });
    }
  }

}



