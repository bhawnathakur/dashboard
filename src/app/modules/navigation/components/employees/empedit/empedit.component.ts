import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { EmployeeService } from "../../../../../services/employee.service";
import { Employee } from "../../../models/employee.model";
@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.scss']
})
export class EmpeditComponent implements OnInit {
model=new Employee('','',null);

  constructor(private empservice:EmployeeService,private router: Router,
    private route: ActivatedRoute,) { }
    id = this.route.snapshot.params['id']
  ngOnInit() {
    this.getSingleEmployee();
  }

  getSingleEmployee(){
    
    this.empservice.getEmployee(this.id).subscribe(employee=>
      {
this.model=employee[0];
      }
    )
  };
  onSubmit(e)
  {
this.empservice.updateEmployee(this.model).subscribe(()=> this.goBack());
  }
  goBack(){
    this.router.navigate(['/home']);
  }
}
