import { Component, OnInit, Inject } from "@angular/core";
import { IngredientService } from "../../../../../services/ingredient.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
@Component({
  selector: "app-addmealsing",
  templateUrl: "./addmealsing.component.html",
  styleUrls: ["./addmealsing.component.scss"]
})
export class AddmealsingComponent implements OnInit {
  selectind: number;
  status: any;
  calories: any;
  ingredients_id: number = 6;
  totcal: number;
  sentItem: any = [];
  items: any = [];
  wt: any;
  name: string;
  weight: any = 100;
  caloriesratio: string;
  isNew: boolean = false;
  val: any;
  val1: any;
  constructor(
    private service: IngredientService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddmealsingComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.selectind = 4;
    if (data.val) {
      this.selectind = data.val;
      console.log(this.selectind);
    } else {
      this.selectind = 0;
    }
    if (data.val1) {
      this.val1 = data.val1;
      console.log(this.val1);
    } else {
      this.isNew = false;
    }
  }

  ngOnInit() {
    this.isNew = false;
    this.service.getIngredients().subscribe(data => {
      this.items = data;

      this.ingredients_id = this.items[0].id;
      this.calories = this.items[0].cals;
      this.wt = this.items[0].weight;
      this.totcal = (this.weight * this.calories) / this.wt;
      this.name = this.items[this.selectind].name;
      console.log(this.name);
      if (this.val1) {
        this.isNew = true;
        console.log(this.val1);
        for (let i = 0; i < this.items.length; i++) {
          console.log(this.items[i].id);
          if (this.val1 == this.items[i].id) {
            this.selectind = i;
            console.log(this.val1);
          }
        }
      }
    });
  }
  onItemChange(e) {
    console.log(this.items[e].weight);
    this.ingredients_id = this.items[e].id;
    this.calories = this.items[e].cals;
    this.wt = this.items[e].weight;
    this.totcal = Math.round((this.weight * this.calories) / this.wt);
    this.name = this.items[e].name;
    console.log(this.totcal);
  }
  onSubmit(form) {
    this.weight = form.value.weight;
    this.totcal = Math.round((this.weight * this.calories) / this.wt);
    console.log(this.totcal);

    this.sentItem = {
      id: this.ingredients_id,
      name: this.name,
      weight: form.value.weight,
      calories: this.totcal
    };
    console.log(this.sentItem);
    this.dialogRef.close(this.sentItem);
  }
}
