import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Ingredient } from "../../../models/ingredient";
import { IngredientService } from "../../../../../services/ingredient.service";
@Component({
  selector: "app-ingedit",
  templateUrl: "./ingedit.component.html",
  styleUrls: ["./ingedit.component.scss"]
})
export class IngeditComponent implements OnInit {
  model = new Ingredient(null, null, null, null);
  constructor(
    private service: IngredientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id = this.route.snapshot.params["id"];
  ngOnInit() {
    this.getSingleIngredient();
  }
  getSingleIngredient() {
    this.service.getIngredient(this.id).subscribe(ingredient => {
      console.log(ingredient);
      this.model = ingredient[0];
    });
  }
  onSubmit(e) {
    this.service.updateIngredient(this.model).subscribe(() => this.goBack());
  }
  goBack() {
    this.router.navigate(["/home/ingredients"]);
  }
}
