import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ShoppinglistComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@NgModule({
  declarations: [ShoppinglistComponent, ShoppingEditComponent],
  imports: [CommonModule, FormsModule]
})
export class ShoppingListModule {}
