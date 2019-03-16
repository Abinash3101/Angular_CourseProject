import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "../auth/signin/signin.component";
import { SignupComponent } from "../auth/signup/signup.component";

const authRoutes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
