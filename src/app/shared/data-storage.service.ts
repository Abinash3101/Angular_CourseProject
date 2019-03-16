import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service"
import "rxjs/Rx";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService,
  private authService: AuthService) {}

  storeRecipies() {
    console.log(this.recipeService.getRecipes());
    const token = this.authService.getToken();
    return this.http.put(
      "https://ng-recipe-book-7ff3e.firebaseio.com/recipes.json?auth="+token,
      this.recipeService.getRecipes()
    );
  }

  getRecipies() {
    const token = this.authService.getToken();
    /*const headers = new Headers({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token });*/
    return this.http
      .get("https://ng-recipe-book-7ff3e.firebaseio.com/recipes.json?auth="+token)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            console.log(recipe);
            recipe["ingredients"] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
