import { JQ_TOKEN } from '../../shared/jQuery.service';
import { SessionService } from './../../services/session.service';
import { Component, OnInit, Input, Inject, EventEmitter, Output, AfterContentInit, AfterViewInit } from '@angular/core';

import { IRecipe } from 'src/app/models/recipe.model';
import { RecipeApiService } from 'src/app/services/api/recipe-api.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, AfterViewInit {

  @Input()
  recipe: IRecipe;
  @Input()
  userId: number;
  @Output()
  favoriteEvent = new EventEmitter();
  @Output()
  rateEvent = new EventEmitter();

  rated: boolean;
  favorited: boolean;
  avgRating = 0;
  userRating = 0;

  modalContentID: string;

  constructor(private apiService: RecipeApiService,
              @Inject(JQ_TOKEN) private $: any
              ) { }

  ngOnInit() {
    let favoritersList: string[];
    favoritersList = this.recipe.favoriters;
    if (favoritersList.indexOf('' + this.userId) > -1) {
      this.favorited = true;
    } else {
      this.favorited = false;
    }
    // this.modalContentID = this.recipe.title.charAt(0) + this.recipe.nutritionValues.calories +
      // this.recipe.title.charAt(1) + this.recipe.nutritionValues.fat + this.recipe.title.charAt(2);
    this.modalContentID = this.makeModalId(15);
    // console.log('MODAL CONTENT ID: ' + this.modalContentID);

    if (Object.keys(this.recipe.raters).length > 0) {

      // console.log(`${this.recipe.title} has user ratings present.`);

      if (this.recipe.raters[this.userId]) {
        this.rated = true;
        this.userRating = this.recipe.raters[this.userId];
      }

      let ratingCounter = 0;
      for (const value of Object.values(this.recipe.raters)) {
        this.avgRating += Number(value);
        ratingCounter++;
      }

      this.avgRating /= ratingCounter;

    }

  }

  makeModalId(length): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  ngAfterViewInit() {
    const modalButton = '#' + this.recipe._id;
    const thisModalContentId = '#' + this.modalContentID;
    this.$(modalButton).attr({'data-target': thisModalContentId});
  }

  logRate($event): void {
    console.log($event);
  }

  setRating(rating: number): void {
    this.userRating = rating;
  }

  submitRate(rating: number) {
    // console.log('rating in submitRate: ' + rating);
    this.recipe.raters[this.userId] = rating;

    this.apiService.rateRecipe(this.recipe).subscribe(res => {
      // console.log('res in submitRate: ' + res);
      this.rated = true;

      // update average rating
      let ratingCounter = 0;
      this.avgRating = 0;
      for (const value of Object.values(this.recipe.raters)) {
        this.avgRating += Number(value);
        ratingCounter++;
      }
      this.avgRating /= ratingCounter;
      this.rateEvent.emit(this.recipe.title);

    }, err => {
      console.log('err in submitRate: ' + err);
    });
  }

  favorite(): void {
    this.favorited = !this.favorited;
    if (this.favorited) {
      this.apiService.favoriteRecipe(this.recipe).subscribe(res => {
        // console.log('res from fav api call: ' + res);
        this.recipe.favoriters.push('' + this.userId);
        this.favoriteEvent.emit(this.recipe.title + ' Has Been Favorited!');
      });
    } else if (!this.favorited) {
      this.apiService.unFavoriteRecipe(this.recipe).subscribe(res => {
        this.recipe.favoriters = this.recipe.favoriters.filter(uId => uId !== '' + this.userId);
        this.favoriteEvent.emit(this.recipe.title + ' Has Been Unfavorited!');
      });
    }

  }

}
