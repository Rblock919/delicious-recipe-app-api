import {
  Component,
  OnInit,
  Input,
  Inject,
  EventEmitter,
  Output,
  AfterViewInit,
} from '@angular/core';

import { JQ_TOKEN } from '../../shared/jQuery.service';
import { IRecipe } from 'src/app/models/recipe.model';

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

  rated = false;
  favorited = false;
  avgRating = 0;
  userRating = 0;

  modalContentID: string;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
    let favoritersList: string[];
    favoritersList = this.recipe.favoriters;
    this.favorited = favoritersList.indexOf('' + this.userId) > -1;
    this.modalContentID = this.makeModalId(20);
    // console.log('MODAL CONTENT ID: ' + this.modalContentID);

    if (Object.keys(this.recipe.raters).length > 0) {

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

  makeModalId(length: number): string {
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

  setRating(rating: number): void {
    this.userRating = rating;
  }

  submitRate(): void {
    this.recipe.raters[this.userId] = this.userRating;
    this.rated = true;

    // update average rating
    let ratingCounter = 0;
    this.avgRating = 0;
    for (const value of Object.values(this.recipe.raters)) {
      this.avgRating += Number(value);
      ratingCounter++;
    }
    this.avgRating /= ratingCounter;
    this.rateEvent.emit(this.recipe);
  }

  favorite(): void {
    this.favorited = !this.favorited;
    this.favoriteEvent.emit({recipe: this.recipe, favoriting: this.favorited});

    if (this.favorited) {
      this.recipe.favoriters.push('' + this.userId);
    } else {
      this.recipe.favoriters = this.recipe.favoriters.filter(uId => uId !== '' + this.userId);
    }
  }

}
