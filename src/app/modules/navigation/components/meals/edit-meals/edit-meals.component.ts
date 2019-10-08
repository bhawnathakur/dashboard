import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MealsService } from "src/app/services/meals.service";
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
  constructor(
    private service: MealsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id = this.route.snapshot.params["id"];

  ngOnInit() {
    this.getSingleMeal();
  }
  getSingleMeal() {
    this.service.getMeal(this.id).subscribe(meal => {
      
      this.model = meal[0];
      this.items = meal[0];
      this.items['ing']=meal["ing"];
      this.ingredients = meal["ing"];
      
    });
  }
}
