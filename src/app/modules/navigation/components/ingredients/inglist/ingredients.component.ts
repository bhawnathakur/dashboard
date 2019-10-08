import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { IngredientService } from "../../../../../services/ingredient.service";
import { Ingredient } from "../../../models/ingredient";


@Component({
  selector: "app-ingredients",
  templateUrl: "./ingredients.component.html",
  styleUrls: ["./ingredients.component.scss"]
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[] = [];
  displayedColumns: string[] = ["id", "name", "weight", "cost","cals" ,"actions"];
  public dataSource = new MatTableDataSource<Ingredient>();
  constructor(private service: IngredientService) {}
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  isLoading:boolean=true;
  ngOnInit() {
    this.service.getIngredients().subscribe(data => {
      console.log(data);
      this.isLoading=false;
      //this.dataSource = data;
      this.ingredients = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  deleteIngredient(id){
    this.service.deleteIngredient(id).subscribe(() => {
      this.isLoading=true;
      this.getAllIngredients();
    } )
}
getAllIngredients(){
  this.service.getIngredients().subscribe(data => {
    console.log(data);
    //this.dataSource = data;
    this.ingredients = data;
    this.isLoading=false;
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  });
}
}
