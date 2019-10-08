import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../modules/navigation/models/employee.model";
@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private httpclient: HttpClient) {}
  url: string = "http://localhost";
  getEmployees(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(
      this.url + "/api/employees/getEmployees.php"
    );
  }
  getEmployee(id) {
    return this.httpclient.post(
      this.url + "/api/employees/getSingleEmployee.php",
      {
        id: id
      }
    );
  }
  updateEmployee(info) {
    return this.httpclient.post(
      this.url + "/api/employees/updateEmployees.php",
      info
    );
  }

  deleteEmployee(id) {
    return this.httpclient.post(
      this.url + "/api/employees/deleteEmployee.php",
      {
        id: id
      }
    );
  }
  addEmployee(info) {
    return this.httpclient.post(
      this.url + "/api/employees/addEmployee.php",
      info
    );
  }
}
