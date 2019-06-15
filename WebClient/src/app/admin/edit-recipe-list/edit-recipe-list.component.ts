import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe.model';
import { RecipeApiService } from 'src/app/services/recipe-api.service';

@Component({
  selector: 'app-edit-recipe-list',
  templateUrl: './edit-recipe-list.component.html',
  styleUrls: ['./edit-recipe-list.component.scss']
})
export class EditRecipeListComponent implements OnInit {

  recipeList: IRecipe[];

  constructor(private apiService: RecipeApiService) { }

  ngOnInit() {
    this.apiService.getRecipeList().subscribe(data => {
      this.recipeList = data;
    });
  }

}
