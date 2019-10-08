import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { Auth1Guard } from "./auth1.guard";

const routes: Routes = [
  {
    path: "home",
    loadChildren: "./modules/navigation/navigation.module#NavigationModule"
  },
  {
    path: "",
    loadChildren: "./modules/auth/auth.module#AuthModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
