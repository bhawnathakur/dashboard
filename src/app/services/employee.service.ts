import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../modules/navigation/models/employee.model";
import {ConstantsService} from './constants.service' ;
@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private httpclient: HttpClient,private service:ConstantsService) {}
  url: string ;
  getEmployees(): Observable<Employee[]> {
    this.url = this.service.url;
    return this.httpclient.get<Employee[]>(
      
      this.url + "employees/getEmployees.php"
    );
  }
  getEmployee(id) {
    return this.httpclient.post(
      this.url + "employees/getSingleEmployee.php",
      {
        id: id
      }
    );
  }
  updateEmployee(info) {
    return this.httpclient.post(
      this.url + "employees/updateEmployees.php",
      info
    );
  }

  deleteEmployee(id) {
    return this.httpclient.post(
      this.url + "employees/deleteEmployee.php",
      {
        id: id
      }
    );
  }
  addEmployee(info) {
    return this.httpclient.post(
      this.url + "employees/addEmployee.php",
      info
    );
  }
}
