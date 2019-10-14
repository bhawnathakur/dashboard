import { Component, OnInit, Inject } from "@angular/core";
import { MealsService } from "../../../../../services/meals.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-order-dialog",
  templateUrl: "./order-dialog.component.html",
  styleUrls: ["./order-dialog.component.scss"]
})
export class OrderDialogComponent implements OnInit {
  meals: any = [];
  meal: any = [];
  mealsid: number = 0;
  sentItem: any = [];
  constructor(
    private mealsservice: MealsService,

    public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {
    this.mealsservice.getMeals().subscribe(mealsdata => {
      console.log(mealsdata);
      this.meals = mealsdata;
      this.meal = this.meals[0];
    });
  }
  onItemChange(e) {
    this.meal = this.meals[e];
  }
  onSubmit(form) {
    this.sentItem = {
      mealsid: this.meal.id,
      name: this.meal.name,
      num: 1,
      price: this.meal.price,
      calories: this.meal.calories
    };
    console.log(this.sentItem);
    this.dialogRef.close(this.sentItem);
  }
}
