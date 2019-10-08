import { Component, OnInit } from "@angular/core";

import { OrderService } from "../../../../../services/order.service";

@Component({
  selector: "app-orderform",
  templateUrl: "./orderform.component.html",
  styleUrls: ["./orderform.component.scss"]
})
export class OrderformComponent implements OnInit {
  order: Order;
  waitressName:string;
  constructor(private orderservice: OrderService) {}
  waitresses: any = [];
  waitressSelected:number;
  
  ngOnInit() {
    this.orderservice.getWaitresses().subscribe(data => {
      console.log(data);
      this.waitresses = data;
      this.waitressSelected=0;
      this.waitressName=this.waitresses[this.waitressSelected].name;
    });
    this.order = {
      orderNum: Math.floor(100000 + Math.random() * 900000).toString(),
      waitress: null,
      total: null,
      type: null,
      calories: null,
      imageUrl: null,
      meals: null
    };
  }

  onWaitressChange(e){
    this.waitressName=this.waitresses[e].name;
  }
}

export interface Meal {
  id: number;
  name: string;
  calories: number;
}
export interface Order {
  orderNum: string;
  waitress: string;
  total: number;
  type: string;
  calories: number;

  imageUrl?: string;
  meals: Meal[];
}
export interface Waitress {
  id: number;
  name: string;
}
export interface Waitress {
  id: number;
  name: string;
}
