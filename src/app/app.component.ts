import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  //loadedFeature: String = "recipe";
  // onNavigate(feature: String) {
  //   this.loadedFeature = feature;
  // }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB-n-hAirItzmQJPn9VJaYVdWcb0JTh2L4",
      authDomain: "ng-recipe-book-7ff3e.firebaseapp.com"
    });
  }
}
