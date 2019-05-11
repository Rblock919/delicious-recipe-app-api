import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: IRecipe;

  constructor() { }

  ngOnInit() {
    console.log('Recipe ' + this.recipe.title + ' id: ' + this.recipe._id);
    console.log('Recipe imgDir: ' + this.recipe.imgDir);
  }

}
