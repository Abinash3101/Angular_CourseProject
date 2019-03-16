import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";
export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Array<Ingredient> = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomato", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredientsFromRecipePage(ingdedients: Ingredient[]) {
    this.ingredients.push(...ingdedients);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteAnIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
