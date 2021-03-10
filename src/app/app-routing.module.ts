import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () => import('./modules/recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./modules/shopping/shopping.module').then(m => m.ShoppingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
