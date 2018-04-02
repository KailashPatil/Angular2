import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailServiceComponent implements OnInit {

  public employees = [];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  	this.employees = this.employeeService.getEmployees();
  }

}
