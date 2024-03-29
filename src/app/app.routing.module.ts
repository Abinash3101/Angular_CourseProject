import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppinglistComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  //{ path: "recipes", loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: "shopping-list", component: ShoppinglistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
