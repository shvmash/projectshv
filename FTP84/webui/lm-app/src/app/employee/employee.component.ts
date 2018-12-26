import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee : Observable<Employee[]>;
  constructor(private employeeService : EmployeeService,private router : Router) {
    this.employee = employeeService.getEmployees();
   }
    empId : number;
    empName : string;
    empMgrId : number;
   details(empId,empMgrId) {
     this.empId = empId;
     this.empMgrId = empMgrId;
     localStorage.setItem("empId",empId);
     localStorage.setItem("mgrId",empMgrId);
    //  alert(this.empMgrId);
     this.router.navigate(['/Login',this.empId]);
   }
  ngOnInit() {
  }
}
