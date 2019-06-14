import { JQ_TOKEN } from './../../common/jQuery.service';
import { SessionService } from './../../services/session.service';
import { Component, OnInit, Input, Inject, EventEmitter, Output, AfterContentInit, AfterViewInit } from '@angular/core';

import { IRecipe } from 'src/app/models/recipe.model';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { TOASTR_TOKEN, Toastr } from '../../common/toastr.service';

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

  iconColor = 'red';
  favorited: boolean;
  avgRating: number;
  userRating = 0;

  modalContentID: string;

  constructor(private apiService: RecipeApiService,
              private sessionService: SessionService,
              @Inject(TOASTR_TOKEN) private toastr: Toastr,
              @Inject(JQ_TOKEN) private $: any
              ) { }

  ngOnInit() {
    // this.recipe.raters = new Map<number, number>();
    let favoritersList: string[];
    favoritersList = this.recipe.favoriters;
    if (favoritersList.indexOf('' + this.userId) > -1) {
      console.log('user is a favoriter of ' + this.recipe.title);
      this.favorited = true;
    } else {
      this.favorited = false;
    }
    this.modalContentID = this.recipe.title.charAt(0) + this.recipe.nutritionValues.calories +
      this.recipe.title.charAt(1) + this.recipe.nutritionValues.fat + this.recipe.title.charAt(2);
    console.log('modalContentID: ' + this.modalContentID);

    const userId = this.sessionService.getUser._id;
    if (this.recipe.raters[userId]) {
      console.log('user has rated ' + this.recipe.title + ' and gave it a: ' + this.recipe.raters[userId]);
    }
    // console.log(this.recipe.title +  ' favoriters: ' + favoritersList);
    // console.log('userId: ' + this.userId);
    // console.log('Recipe ' + this.recipe.title + ' id: ' + this.recipe._id);
    // console.log('Recipe imgDir: ' + this.recipe.imgDir);
  }

  ngAfterViewInit() {
    const modalButton = '#' + this.recipe._id;
    // let tempAttr = this.$(modalButton).attr('data-target');
    // console.log('modal button data-target (1): ' + tempAttr);

    const thisModalContentId = '#' + this.modalContentID;
    this.$(modalButton).attr({'data-target': thisModalContentId});

    // let tempAttr2 = this.$(modalButton).attr('data-target');
    // console.log('modal button data-target (2): ' + tempAttr2);

    // let tempAttr3 = this.$(thisModalContentId).attr('role');
    // console.log('modal content role attr: ' + tempAttr3);
  }

  rate($event): void {
    console.log($event);
  }

  setRating(rating: number): void {
    this.userRating = rating;
  }

  submitRate(rating: number) {
    console.log('rating in submitRate: ' + rating);
    const userId = this.sessionService.getUser._id;
    this.recipe.raters[userId] = rating;
    this.apiService.rateRecipe(this.recipe).subscribe(res => {
      console.log('res in submiteRate: ' + res);
    }, err => {
      console.log('err in submitRate: ' + err);
    });
  }

  changeRate(rating: number) {

  }

  favorite(): void {
    this.favorited = !this.favorited;
    if (this.favorited) {
      this.apiService.favoriteRecipe(this.recipe).subscribe(res => {
        console.log('res from fav api call: ' + res);
        this.recipe.favoriters.push('' + this.userId);
        this.toastr.success(this.recipe.title + ' Favorited!');
      });
    } else if (!this.favorited) {
      this.apiService.unFavoriteRecipe(this.recipe).subscribe(res => {
        this.recipe.favoriters = this.recipe.favoriters.filter(uId => uId !== '' + this.userId);
        this.toastr.success(this.recipe.title + ' Unfavorited!');
      });
    }

    this.favoriteEvent.emit();

  }

}
