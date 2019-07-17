import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ApproveRecipeDetailComponent } from './approve-recipe-detail/approve-recipe-detail.component';
import { ApproveRecipeListComponent } from './approve-recipe-list/approve-recipe-list.component';
import { EditRecipeListComponent } from './edit-recipe-list/edit-recipe-list.component';
import { EditUserListComponent } from './edit-user-list/edit-user-list.component';
import { AdminService } from './../services/admin.service';
import { RecipeResolverService } from '../services/recipe-resolver.service';
import { UserResolverService } from './../services/user-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'editRecipeList',
        component: EditRecipeListComponent,
        resolve: { resolvedData: RecipeResolverService },
        data: { multipleRecipes: true}
      },
      { path: 'approve', component: ApproveRecipeListComponent},
      { path: 'approve/:id', component: ApproveRecipeDetailComponent},
      {
        path: 'editUserList',
        component: EditUserListComponent,
        resolve: { resolvedData: UserResolverService },
        data: { multipleUsers: true}
      },
    ]),
    ReactiveFormsModule
  ],
  declarations: [
    EditUserListComponent,
    EditRecipeListComponent,
    ApproveRecipeListComponent,
    ApproveRecipeDetailComponent
  ],
  providers: [AdminService, UserResolverService]
})
export class AdminModule { }
