import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MealsService {
  constructor(private httpclient: HttpClient) {}
  url: string = "http://localhost";
  getLastId() {
    return this.httpclient.get(this.url + "/api/meals/getlastid.php");
  }
  addMeals(info) {
    return this.httpclient.post(this.url + "/api/meals/addMeals.php", info);
  }
  getMeals() {
    return this.httpclient.get(this.url + "/api/meals/getMeals.php");
  }

  deleteMeals(id) {
    return this.httpclient.post(this.url + "/api/meals/deleteMeals.php", {
      id: id
    });
  }
  getMeal(id) {
    return this.httpclient.post(this.url + "/api/meals/getSingleMeal.php", {
      id: id
    });
  }
}
