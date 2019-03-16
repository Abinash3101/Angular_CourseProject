import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A super-testy Schnitzel - just awesome!",
      "https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Hot Chip",
      "Backed hot chip just test it!",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VPhd1Q23s0itTwxg-K1quNh55THPv7uooJ6O584EyOZku5k9",
      [
        new Ingredient("flour", 3),
        new Ingredient("sugar", 5),
        new Ingredient("butter", 2)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsFromRecipePage(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
