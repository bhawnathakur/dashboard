import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ingredient } from "../modules/navigation/models/ingredient";
@Injectable({
  providedIn: "root"
})
export class IngredientService {
  formIngredient: Ingredient;
  constructor(private httpclient: HttpClient) {}
  url = "http://localhost";
  getIngredients(): Observable<Ingredient[]> {
    return this.httpclient.get<Ingredient[]>(
      this.url + "/api/ingredients/getIngredients.php"
    );
  }
  getIngredient(id) {
    return this.httpclient.post(
      this.url + "/api/ingredients/getSingleIngredient.php",
      {
        id: id
      }
    );
  }
  updateIngredient(info) {
    return this.httpclient.post(
      this.url + "/api/ingredients/updateIngredient.php",
      info
    );
  }

  deleteIngredient(id) {
    return this.httpclient.post(
      this.url + "/api/ingredients/deleteIngredient.php",
      {
        id: id
      }
    );
  }
  addIngredient(info) {
    return this.httpclient.post(
      this.url + "/api/ingredients/addIngredient.php",
      info
    );
  }
}
