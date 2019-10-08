import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "../../../models/employee.model";
import { EmployeeService } from "../../../../../services/employee.service";
@Component({
  selector: "app-empform",
  templateUrl: "./empform.component.html",
  styleUrls: ["./empform.component.scss"]
})
export class EmpformComponent implements OnInit {
  model = new Employee("", "", null);
  constructor(private service: EmployeeService, private router: Router) {}

  ngOnInit() {}
  onSubmit(e) {
    console.log(e.value.name);

    this.service.addEmployee(this.model).subscribe(data => {
      this.goBack();
    });
  }
  goBack() {
    this.router.navigate(["/home"]);
  }
}
