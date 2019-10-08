import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string="http://localhost";

  constructor(private http:HttpClient) { }
  getWaitresses()
  {
return this.http.get(this.url+"/api/orders/getWaitresses.php")
  }
}
