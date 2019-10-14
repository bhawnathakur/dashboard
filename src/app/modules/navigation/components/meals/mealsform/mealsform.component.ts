import { Component, OnInit } from "@angular/core";

import { Meal } from "../meals.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddmealsingComponent } from "../addmealsing/addmealsing.component";
import { MealsService } from "../../../../../services/meals.service";
export class Item {
  constructor(public name: string, public weight: number) {}
}
@Component({
  selector: "app-mealsform",
  templateUrl: "./mealsform.component.html",
  styleUrls: ["./mealsform.component.scss"]
})
export class MealsformComponent implements OnInit {
  model: any = new Meal(null, null, null, null);
  items: any = [];
  isNew: boolean = true;
  somenum: number = 0;

  buttonDisabled: boolean = true;
  present_id: number;
  total_calories: number = 0;
  totcals: string;
  constructor(
    private dialog: MatDialog,
    private service: MealsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.items;
    this.model.totcals = 0;
    this.getLastId();
  }
  onSubmit(e) {
    this.model = new Meal(
      e.value.name,
      e.value.totcals,
      e.value.price,
      this.items
    );
    console.log(this.items);
    this.service.addMeals(this.model).subscribe(data => {
      console.log(this.model);
      this.openSnackBar();
      this.model = new Meal(null, null, 0, null);
      this.items = [];
    });
  }
  getLastId() {
    this.service.getLastId().subscribe(lastid => {
      //console.log(lastid);
      //this.present_id=(lastid+1);
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

        this.model.totcals = this.total_calories.toString();
      }
    });
  }

  deleteMeals(e) {
    this.items.splice(e, 1);
    this.total_calories = 0;

    for (let item of this.items) {
      this.total_calories += Number(item.calories);
      this.model.totcals = this.total_calories.toString();
    }
    if (this.items.length == 0) {
      this.total_calories = 0;
      this.model.totcals = this.total_calories;
      this.buttonDisabled = true;
    }
  }
  //edit meals
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
      this.items[e] = data;

      this.total_calories = 0;
      for (let item of this.items) {
        this.total_calories += Number(item.calories);
        this.model.totcals = this.total_calories.toString();
      }
    });
  }

  openSnackBar() {
    this.snackBar.open("Data submitted successfully", "", {
      duration: 3000,
      verticalPosition: "top"
    });
  }
}
