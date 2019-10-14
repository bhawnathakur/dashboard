import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {ConstantsService} from './constants.service' ;
@Injectable({
  providedIn: "root"
})
export class MealsService {
  url: string ;
  constructor(private httpclient: HttpClient,private service:ConstantsService) {

    this.url=this.service.url;
  }
  
  getLastId() {
    return this.httpclient.get(this.url + "meals/getlastid.php");
  }
  addMeals(info) {
    return this.httpclient.post(this.url + "meals/addMeals.php", info);
  }
  getMeals() {
    return this.httpclient.get(this.url + "meals/getMeals.php");
  }

  deleteMeals(id) {
    return this.httpclient.post(this.url + "meals/deleteMeals.php", {
      id: id
    });
  }
  getMeal(id) {
    return this.httpclient.post(this.url + "meals/getSingleMeal.php", {
      id: id
    });
  }
}
