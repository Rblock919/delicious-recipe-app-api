import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../models/recipe.model';
import { RecipeApiService } from '../services/recipe-api.service';
import { SessionService } from '../services/session.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
