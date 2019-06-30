import { Component, OnInit, Inject } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe.model';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';
import { JQ_TOKEN } from './../../common/jQuery.service';

@Component({
  selector: 'app-edit-recipe-list',
  templateUrl: './edit-recipe-list.component.html',
  styleUrls: ['./edit-recipe-list.component.scss']
})
export class EditRecipeListComponent implements OnInit {

  recipeList: IRecipe[];
  selectedRecipe: IRecipe;
  selectedRecipeTitle = '';

  constructor(private apiService: RecipeApiService,
              @Inject(TOASTR_TOKEN) private toastr: Toastr,
              @Inject(JQ_TOKEN) private $: any
              ) { }

  ngOnInit() {
    this.apiService.getRecipeList().subscribe(data => {
      this.recipeList = data;
    });
  }

  triggerModal(recipe: IRecipe): void {
    this.selectedRecipe = recipe;
    this.selectedRecipeTitle = recipe.title;
    console.log('Selected Recipe: ' + this.selectedRecipe.title);
  }

  deleteRecipe(recipeId: number): void {
    this.apiService.deleteRecipe(recipeId).subscribe(res => {
      console.log('Res: ' + res);
      this.recipeList = this.recipeList.filter(x => x._id !== recipeId);
      this.toastr.success('Recipe Successfully Deleted');
    }, err => {
      console.error(err);
      this.toastr.error('Error Deleting Recipe');
    });
  }

}
