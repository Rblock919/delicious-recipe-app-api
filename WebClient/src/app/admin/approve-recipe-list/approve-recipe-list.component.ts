import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { IRecipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-approve-recipe-list',
  templateUrl: './approve-recipe-list.component.html',
  styleUrls: ['./approve-recipe-list.component.scss']
})
export class ApproveRecipeListComponent implements OnInit {

  recipeList: IRecipe[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getApprovalList().subscribe(recipes => {
      this.recipeList = recipes;
    }, err => {
      console.log('Error: ' + err);
    });
  }

}
