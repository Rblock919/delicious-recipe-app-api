import { SessionService } from './../../services/session.service';
import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';

import { IRecipe } from 'src/app/models/recipe.model';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { TOASTR_TOKEN, Toastr } from '../../common/toastr.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: IRecipe;
  @Input()
  userId: number;
  @Output()
  favoriteEvent = new EventEmitter();

  iconColor = 'red';
  favorited: boolean;

  constructor(private apiService: RecipeApiService,
              private sessionService: SessionService,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
    let favoritersList: string[];
    favoritersList = this.recipe.favoriters;
    if (favoritersList.indexOf('' + this.userId) > -1) {
      console.log('user is a favoriter of ' + this.recipe.title);
      this.favorited = true;
    } else {
      this.favorited = false;
    }

    // console.log(this.recipe.title +  ' favoriters: ' + favoritersList);
    // console.log('userId: ' + this.userId);
    // console.log('Recipe ' + this.recipe.title + ' id: ' + this.recipe._id);
    // console.log('Recipe imgDir: ' + this.recipe.imgDir);
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
