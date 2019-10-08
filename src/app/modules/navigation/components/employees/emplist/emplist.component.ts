import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { EmployeeService } from "../../../../../services/employee.service";
import { Employee } from "../../../models/employee.model";
@Component({
  selector: "app-emplist",
  templateUrl: "./emplist.component.html",
  styleUrls: ["./emplist.component.scss"]
})
export class EmplistComponent implements OnInit {
  isLoading = true;
  employees: Employee[] = [];
  displayedColumns: string[] = ["id", "name", "position", "salary", "actions"];
  public dataSource = new MatTableDataSource<Employee>();
  constructor(private service: EmployeeService) {}
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  ngOnInit() {
    this.getEmployees();
  }
getEmployees()
{
  this.service.getEmployees().subscribe(data => {
    console.log(data);
    //this.dataSource = data;
    // this.ingredients = data;
    this.isLoading = false;
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  });
}
  deleteEmployee(id){
    this.service.deleteEmployee(id).subscribe(() => {
      this.getEmployees();
    } )
}

}
