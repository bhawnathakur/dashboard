import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MealsService } from "src/app/services/meals.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddmealsingComponent } from "../addmealsing/addmealsing.component";
export class Item {
  constructor(
    public calories: string,
    public id: string,
    public name: string,
    public price: string,
    public ingredients: any
  ) {}
}

@Component({
  selector: "app-edit-meals",
  templateUrl: "./edit-meals.component.html",
  styleUrls: ["./edit-meals.component.scss"]
})
export class EditMealsComponent implements OnInit {
  model: any = [];
  ingredients: any;
  items: any = [];
  total_calories: number;
  somenum: number;
  buttonDisabled: boolean;
  constructor(
    private service: MealsService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}
  id = this.route.snapshot.params["id"];

  ngOnInit() {
    this.getSingleMeal();
  }
  getSingleMeal() {
    this.service.getMeal(this.id).subscribe(meal => {
      console.log(meal);
      this.model = meal[0];

      console.log(this.model);
      this.ingredients = meal["ing"];
      for (let ingredient of this.ingredients) {
        let calories: number = Math.round(
          (ingredient.wt * ingredient.cals) / ingredient.weight
        );
        console.log(ingredient);
        this.items.push({
          name: ingredient.name,
          weight: ingredient.wt,
          calories: calories
        });
      }
      this.total_calories = 0;
      for (let item of this.items) {
        this.total_calories += Number(item.calories);

        this.model.totcals = this.total_calories;
      }
    });
  }
  editMeals(e, f) {
    console.log(f);
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.disableClose = true;
    dialogconfig.width = "70%";
    this.somenum = Math.round(e);
    console.log(this.somenum);
    dialogconfig.data = {
      isNew: false,
      val: e,
      val1: f
    };

    dialogconfig.position = {
      top: "0"
    };

    this.buttonDisabled = false;
    let dialogRef = this.dialog.open(AddmealsingComponent, dialogconfig);

    dialogRef.afterClosed().subscribe(data => {
      console.log("Dialog output:", data);
      this.items[e].name = data.name;
      this.items[e].weight = data.weight;
      this.items[e].calories = data.calories;
      console.log(data);
      this.total_calories = 0;
      for (let item of this.items) {
        this.total_calories += Number(item.calories);
        this.model.totcals = this.total_calories;
      }
      this.model.totcals = this.total_calories;
    });
  }

  AddIngredient() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.disableClose = true;
    dialogconfig.width = "70%";
    dialogconfig.data = {
      isNew: true,
      val: 0
    };
    dialogconfig.position = {
      top: "0"
    };
    this.buttonDisabled = false;
    let dialogRef = this.dialog.open(AddmealsingComponent, dialogconfig);

    dialogRef.afterClosed().subscribe(data => {
      this.items.push(data);
      this.total_calories = 0;
      for (let item of this.items) {
        this.total_calories += Number(item.calories);

        this.model.totcals = this.total_calories;
      }
    });
  }
  onSubmit(e) {
    this.model = [
      {
        name: e.value.name,
        totcals: e.value.totcals,
        price: e.value.price,
        ingredients: this.items
      }
    ];
    console.log(this.model);

    this.model = [
      { name: null, totcals: null, price: null, ingredients: this.items }
    ];
    this.items = [];
  }
}
