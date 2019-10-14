import { Component, OnInit, ViewChild } from "@angular/core";
import { OrderService } from "../../../../../services/order.service";
import { ConstantsService } from "../../../../../services/constants.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: "app-orderlist",
  templateUrl: "./orderlist.component.html",
  styleUrls: ["./orderlist.component.scss"]
})
export class OrderlistComponent implements OnInit {
  url: string;
  orders: any = [];
  displayedColumns: string[] = [
    "imgUrl",
    "orderNum",
    "type",
    "waitress",
    "total",
    "calories",
    "actions"
  ];
  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  isLoading: boolean = true;
  constructor(
    private service: OrderService,
    private constantservice: ConstantsService
  ) {}

  ngOnInit() {
    this.getAllOrders();
    this.url = this.constantservice.url + "uploads/";
  }
  getAllOrders() {
    this.service.getOrders().subscribe(data => {
      //this.dataSource = data;
      this.orders = data;

      console.log(this.orders);
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(this.orders);
      this.dataSource.paginator = this.paginator;
    });
  }
  EditMeals(e) {}
}
