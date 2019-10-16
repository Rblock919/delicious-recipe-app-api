import {Component, OnInit, OnDestroy, Inject, SecurityContext} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { IRecipe, IRecipesResolved } from 'src/app/models/recipe.model';
import { Toastr, TOASTR_TOKEN } from 'src/app/shared/toastr.service';
import { SessionService } from 'src/app/services/session.service';
import { LoggerService } from '../../services/util/logger.service';

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
  userId: number;

  constructor(private route: ActivatedRoute,
              private sessionService: SessionService,
              private loggerService: LoggerService,
              private router: Router,
              private sanitizer: DomSanitizer,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) { }


  ngOnInit() {
    // this.searchString = this.route.snapshot.params.searchString;

    const resolvedData: IRecipesResolved = this.route.snapshot.data.resolvedData;

    if (resolvedData.error) {
      console.error(`Error in edit recipe ${resolvedData.error}`);
      this.toastr.error(`Error fetching recipes: ${resolvedData.error}`);
      this.router.navigate(['error']);
    } else {
      this.recipeList = resolvedData.recipes;
    }

    this.userId = this.sessionService.getUser._id;
    this.sub = this.route.queryParamMap.subscribe(params => {
      this.loggerService.consoleLog(`Param changed to: ${params.get('searchString')}`);
      this.searchString = params.get('searchString');
      this.filterRecipes();
    });

  }

  filterRecipes(): void {
    this.filteredList = this.recipeList
      .filter(x => x.title.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  favEvent($event): void {
    this.toastr.success(this.sanitizer.sanitize(SecurityContext.HTML, $event));
  }

  rateEvent($event): void {
    this.toastr.success(`${this.sanitizer.sanitize(SecurityContext.HTML, $event)} Successfully Rated!`);
  }

}
