import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipeItemComponent } from './components/recipes-list/recipe-item/recipe-item.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
