import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConstantsService } from "./constants.service";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  url: string;

  constructor(
    private httpclient: HttpClient,
    private service: ConstantsService
  ) {
    this.url = this.service.url;
  }
  getWaitresses() {
    return this.httpclient.get(this.url + "orders/getWaitresses.php");
  }
  getOrders() {
    return this.httpclient.get(this.url + "orders/getOrders.php");
  }
  addOrder(info) {
    return this.httpclient.post(this.url + "orders/addOrder.php", info);
  }
  getOneOrder(id) {
    return this.httpclient.post(this.url + "orders/getSingleOrder.php", {
      id: id
    });
  }
  updateOrder(info) {
    return this.httpclient.post(this.url + "orders/updateOrder.php", info);
  }
}
