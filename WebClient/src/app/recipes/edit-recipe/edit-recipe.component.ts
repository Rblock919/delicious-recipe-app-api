import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { IRecipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  private sub: Subscription;

  pageTitle: any;
  id: any;
  recipe: IRecipe;

  constructor(private route: ActivatedRoute, private apiService: RecipeApiService) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id of recipe edit: ' + this.id);
      if (this.id === '0') {
        this.pageTitle = 'Add Recipe';
      } else {
        this.getRecipeInfo();
      }
    });

  }

  getRecipeInfo(): void {
    this.apiService.getRecipe(this.id).subscribe(res => {
      // console.log('RES IN EDIT RECIPE: ' + JSON.stringify(res));
      this.recipe = res;
      this.pageTitle = 'Edit Recipe';
    });
  }

}
