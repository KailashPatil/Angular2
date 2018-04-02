import { Component, OnInit } from '@angular/core';
import { EmployeeListServiceComponent } from './employee-list.component';
import { EmployeeDetailServiceComponent } from './employee-detail.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
