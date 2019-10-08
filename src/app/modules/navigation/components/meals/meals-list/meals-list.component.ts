import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MealsService } from "../../../../../services/meals.service";
import { Meals } from "../meals.model";

@Component({
  selector: "app-meals-list",
  templateUrl: "./meals-list.component.html",
  styleUrls: ["./meals-list.component.scss"]
})
export class MealsListComponent implements OnInit {
  meals: any = [];
  displayedColumns: string[] = ["id", "name", "price", "calories", "actions"];
  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  isLoading: boolean = true;
  constructor(private service: MealsService) {}

  ngOnInit() {
    this.service.getMeals().subscribe(data => {
      console.log(data);
      this.isLoading = false;
      //this.dataSource = data;
      this.meals = data;
      this.dataSource = new MatTableDataSource(this.meals);
      this.dataSource.paginator = this.paginator;
    });
  }
  getAllMeals() {
    this.service.getMeals().subscribe(data => {
      //this.dataSource = data;
      this.meals = data;
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(this.meals);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteMeals(id) {
    this.service.deleteMeals(id).subscribe(() => {
      this.isLoading = true;
      this.getAllMeals();
    });
  }
}
