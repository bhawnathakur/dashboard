import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

import { FormsModule } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
@NgModule({
  declarations: [LoginComponent, RegisterComponent, PageNotFoundComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  providers: [AuthService]
})
export class AuthModule {}
