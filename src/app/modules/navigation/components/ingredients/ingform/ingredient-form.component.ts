import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../../../models/ingredient";
import { IngredientService } from "../../../../../services/ingredient.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-ingredient-form",
  templateUrl: "./ingredient-form.component.html",
  styleUrls: ["./ingredient-form.component.scss"]
})
export class IngredientFormComponent implements OnInit {
  model = new Ingredient( null, null,null,null);
  constructor(private service: IngredientService, private router: Router) {}

  ngOnInit() {}
  onSubmit(e) {
    console.log(this.model);

    this.service.addIngredient(this.model).subscribe(data => {
      console.log(data);
      this.goBack();
    });
  }
  goBack() {
    this.router.navigate(["/home/ingredients"]);
  }
}
