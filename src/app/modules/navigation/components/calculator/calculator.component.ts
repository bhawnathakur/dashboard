import { Component, OnInit } from "@angular/core";
import { MealsService } from "src/app/services/meals.service";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  meals: any;
  name: any;
  num: number = 1;
  meal: any = [];

  ingredients: Ingredient[] = [
    { id: null, name: null, weight: null, calories: null }
  ];
  selectedmealindex: number = 0;
  selectedMeal: any;
  id: number;
  totcals: number;
  totprice: number;
  isLoading: boolean = true;
  constructor(private service: MealsService) {}

  ngOnInit() {
    this.service.getMeals().subscribe(data => {
      console.log(data);
      this.meals = data;
      this.id = this.meals[this.selectedmealindex].id;
      console.log(this.id);
      this.service.getMeal(this.id).subscribe(dat => {
        console.log(dat);
        this.meal = dat;
        this.totcals = this.meal[0].calories;
        this.totprice = this.meal[0].price;
        this.ingredients = this.meal["ing"];

       
        this.isLoading = false;
      });
    });
  }
  onItemChange(e) {
    this.isLoading = true;
    this.id = this.meals[this.selectedmealindex].id;
    console.log(this.id);
    this.service.getMeal(this.id).subscribe(dat => {
     
      this.isLoading = false;
      this.meal = dat;
      this.totcals = this.meal[0].calories;
      this.totprice = this.meal[0].price;
      this.ingredients = this.meal["ing"];

      console.log(this.meal);
      this.isLoading = false;
    });
  }
  onSubmit(e) {
    console.log(e.value);
  }
}

export interface Ingredient {
  id: number;
  name: string;
  weight: number;
  calories: number;
}
