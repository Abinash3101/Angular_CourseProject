import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "shopping-edit.component.html"
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild("f") slform: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slform.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.onAddIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
    //this.ingredientAdded.emit(newIngredient);
  }

  onClearForm() {
    this.editMode = false;
    this.slform.reset();
  }

  onDelete() {
    this.shoppingListService.deleteAnIngredient(this.editedItemIndex);
    this.onClearForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
