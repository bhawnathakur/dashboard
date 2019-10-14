import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ingredient } from "../modules/navigation/models/ingredient";
import {ConstantsService} from './constants.service' ;
@Injectable({
  providedIn: "root"
})
export class IngredientService {
  formIngredient: Ingredient;
  constructor(private httpclient: HttpClient,private service:ConstantsService) {
    this.url=this.service.url;
  }
  url : string;
  getIngredients(): Observable<Ingredient[]> {
    
    return this.httpclient.get<Ingredient[]>(
      this.url + "ingredients/getIngredients.php"
    );
  }
  getIngredient(id) {
    return this.httpclient.post(
      this.url + "ingredients/getSingleIngredient.php",
      {
        id: id
      }
    );
  }
  updateIngredient(info) {
    return this.httpclient.post(
      this.url + "ingredients/updateIngredient.php",
      info
    );
  }

  deleteIngredient(id) {
    return this.httpclient.post(
      this.url + "ingredients/deleteIngredient.php",
      {
        id: id
      }
    );
  }
  addIngredient(info) {
    return this.httpclient.post(
      this.url + "ingredients/addIngredient.php",
      info
    );
  }
}
