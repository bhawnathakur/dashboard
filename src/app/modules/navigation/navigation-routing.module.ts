import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavComponent } from "./components/nav/nav.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { SuppliesComponent } from "./components/supplies/supplies.component";
import { EmpformComponent } from "./components/employees/empform/empform.component";
import { EmplistComponent } from "./components/employees/emplist/emplist.component";
import { OrderlistComponent } from "./components/orders/orderlist/orderlist.component";
import { OrderformComponent } from "./components/orders/orderform/orderform.component";
import { OrdereditComponent } from "./components/orders/orderedit/orderedit.component";
import { MealsComponent } from "./components/meals/meals.component";
import { IngredientsComponent } from "./components/ingredients/inglist/ingredients.component";
import { IngredientHomeComponent } from "./components/ingredients/ingredient-home.component";
import { AuthGuard } from "../../auth.guard";
import { Auth1Guard } from "../../auth1.guard";
import { IngredientFormComponent } from "./components/ingredients/ingform/ingredient-form.component";
import { EmpeditComponent } from "./components/employees/empedit/empedit.component";
import { IngeditComponent } from "./components/ingredients/ingedit/ingedit.component";

import { MealsformComponent } from "./components/meals/mealsform/mealsform.component";
import { MealsListComponent } from './components/meals/meals-list/meals-list.component';
import { EditMealsComponent } from './components/meals/edit-meals/edit-meals.component';
const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      {
        path: "orders",
        component: OrdersComponent,

        children: [
          {
            path: "list",
            component: OrderlistComponent
          },
          {
            path: "",
            component: OrderformComponent
          },
          {
            path: "edit",
            component: OrdereditComponent
          }
        ]
      },
      {
        path: "",
        component: EmployeesComponent,
        children: [
          {
            path: "",
            component: EmplistComponent
          },
          {
            path: "new",
            component: EmpformComponent
          },
          {
            path: "edit/:id",
            component: EmpeditComponent
          }
        ]
      },

      {
        path: "meals",
        component: MealsComponent,
        children: [
          {
            path: "new",
            component: MealsformComponent
          },
          {
            path: "",
            component : MealsListComponent
          },
          {
            path: "edit/:id",
            component:EditMealsComponent
          }
        ]
      },

      {
        path: "supplies",
        component: SuppliesComponent
      },
     
      {
        path: "ingredients",
        component: IngredientHomeComponent,
        children: [
          {
            path: "",
            component: IngredientsComponent
          },
          {
            path: "new",
            component: IngredientFormComponent
          },
          {
            path: "edit/:id",
            component: IngeditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {}
