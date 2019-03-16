import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../../shared/data-storage.service";
import { Response } from "@angular/http";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  // @Output() featureSelected = new EventEmitter<String>();

  constructor(
    private dsService: DataStorageService,
    private authService: AuthService,
    private router: Router
  ) {
    //this.isShowRecipes.emit(true);
  }

  /* onSelect(feature: String) {
    this.featureSelected.emit(feature);
  }*/

  onSaveData() {
    this.dsService.storeRecipies().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.dsService.getRecipies();
  }

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(["signin"]);
  }
}
