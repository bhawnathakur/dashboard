import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigationRoutingModule } from "./navigation-routing.module";
import { NavComponent } from "./components/nav/nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { EmployeesComponent } from "./components/employees/employees.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { SuppliesComponent } from "./components/supplies/supplies.component";
import { EmpformComponent } from "./components/employees/empform/empform.component";
import { EmplistComponent } from "./components/employees/emplist/emplist.component";
import { EmpeditComponent } from "./components/employees/empedit/empedit.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { SupplyformComponent } from "./components/supplies/supplyform/supplyform.component";
import { OrderformComponent } from "./components/orders/orderform/orderform.component";
import { OrderlistComponent } from "./components/orders/orderlist/orderlist.component";
import { OrdereditComponent } from "./components/orders/orderedit/orderedit.component";
import { OrderitemsComponent } from "./components/orders/orderitems/orderitems.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MealsComponent } from "./components/meals/meals.component";
import { IngredientsComponent } from "./components/ingredients/inglist/ingredients.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { IngredientHomeComponent } from "./components/ingredients/ingredient-home.component";
import { IngredientFormComponent } from "./components/ingredients/ingform/ingredient-form.component";
import { IngeditComponent } from "./components/ingredients/ingedit/ingedit.component";
import { MealsformComponent } from "./components/meals/mealsform/mealsform.component";
import { AddmealsingComponent } from "./components/meals/addmealsing/addmealsing.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MealsListComponent } from "./components/meals/meals-list/meals-list.component";
import { EditMealsComponent } from "./components/meals/edit-meals/edit-meals.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { OrderDialogComponent } from "./components/orders/order-dialog/order-dialog.component";
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
  entryComponents: [AddmealsingComponent, OrderDialogComponent],
  declarations: [
    NavComponent,
    EmployeesComponent,
    OrdersComponent,
    SuppliesComponent,
    EmpformComponent,
    EmplistComponent,
    EmpeditComponent,
    SupplyformComponent,
    OrderformComponent,
    OrderlistComponent,
    OrdereditComponent,
    OrderitemsComponent,
    MealsComponent,
    IngredientsComponent,

    IngredientHomeComponent,
    IngredientFormComponent,
    IngeditComponent,
    MealsformComponent,
    AddmealsingComponent,
    MealsListComponent,
    EditMealsComponent,
    OrderDialogComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    FontAwesomeModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatProgressBarModule
  ]
})
export class NavigationModule {}
