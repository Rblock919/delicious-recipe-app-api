import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { Subscription } from 'rxjs';
import { IRecipe, IRecipesResolved } from 'src/app/models/recipe.model';
import { Toastr, TOASTR_TOKEN } from 'src/app/shared/toastr.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit, OnDestroy {

  searchString: string;
  private sub: Subscription;
  recipeList: IRecipe[];
  filteredList: IRecipe[];
  showRecipes = false;
  counter = 0;
  userId: number;

  constructor(private route: ActivatedRoute,
              private sessionService: SessionService,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) { }


  ngOnInit() {
    this.searchString = this.route.snapshot.params.searchString;

    this.sub = this.route.paramMap.subscribe(params => {
      this.searchString = params.get('searchString');
      if (this.counter > 0) {
        this.filterRecipes();
      }
    });

    const resolvedData: IRecipesResolved = this.route.snapshot.data.resolvedData;
    this.recipeList = resolvedData.recipes;

    if (resolvedData.error) {
      console.error(`Error in edit recipe ${resolvedData.error}`);
    }
    this.filterRecipes();
    this.userId = this.sessionService.getUser._id;

  }

  filterRecipes(): void {
    this.filteredList = this.recipeList
      .filter(x => x.title.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
    this.showRecipes = true;
    this.counter++;
    console.log(this.filteredList.length);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  favEvent($event): void {
    this.toastr.success(`${$event}`);
  }

  rateEvent($event): void {
    this.toastr.success(`${$event} Successfully Rated!`);
  }

}
