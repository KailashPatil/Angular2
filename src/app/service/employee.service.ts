import { Injectable } from '@angular/core';


@Injectable()
export class EmployeeService {

	employees = [
  		{id:'1', name:'Morgan', designation:'Cricket', location:'Bangalore'},
  		{id:'2', name:'Ross', designation:'Rugby', location:'London'},
  		{id:'3', name:'Samuels', designation:'Football', location:'Paris'},
  		{id:'4', name:'Stephen', designation:'Hockey', location:'Adelaid'},
  		{id:'5', name:'Morris', designation:'Badminton', location:'The oval'}
  ]

  getEmployees() {
  	return this.employees;
  }

}