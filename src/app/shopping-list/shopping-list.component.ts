import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-shopping-list",
  templateUrl: "shopping-list.component.html"
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Array<Ingredient> = [];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  /*onIngredientAdded(ingredientsAdded: Ingredient) {
    this.ingredients.push(ingredientsAdded);
  }*/

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientAdded.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
