import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ComService } from "./services/com.service";
import { OrderService } from "./services/order.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./auth.guard";
import { Auth1Guard } from "./auth1.guard";
import { IngredientService } from "./services/ingredient.service";
import { EmployeeService } from "./services/employee.service";
import { MealsService } from "./services/meals.service";
import { MatDialogModule } from "@angular/material";
@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,

    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ComService,
    OrderService,
    AuthService,
    IngredientService,
    EmployeeService,
    Auth1Guard,
    AuthGuard,
    MealsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
