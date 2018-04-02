import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListServiceComponent implements OnInit {

  public employees = [];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  	this.employees = this.employeeService.getEmployees();
  }

}
