import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Pending } from '../pending';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { LeaveDetails } from '../leave-details';
import { Router } from '@angular/router';
import { LeaveDetailsService } from '../leave-details.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  pend : Observable<LeaveDetails[]>;
  empId : number;
  empData : Observable<Employee[]>;
  flagp : number;
  id:number;
  isButtonDisabled:boolean=true;
  leavId : number;
  showButton:boolean = false;
  constructor(private empGet:EmployeeService, private pendingService : LeaveDetailsService,
              private router : Router) { 
    this.empId = parseInt(localStorage.getItem("empId")); 
    this.empData=empGet.getEmployees();
    this.flagp=parseInt(localStorage.getItem("empId"));
    this.pend=pendingService.pending(this.empId);
    this.id=parseInt(localStorage.getItem("empMgrId"));
    // alert(this.flagp);
  } 


  clickRow(x,e) {

    localStorage.setItem("leaveId",e); 
    // alert(x);
    localStorage.setItem("lempId",x);
    // alert(e);
    this.showButton=true;
  //  alert(localStorage.getItem("leaveId"));
  }
  cancel(){
   this.router.navigate(["/Dashboard"]);
 }
 ngOnInit() {
 }
 doApproveDeny() { 
   this.router.navigate(["/ApproveDeny"]);
 }
}
