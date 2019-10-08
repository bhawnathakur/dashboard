import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
