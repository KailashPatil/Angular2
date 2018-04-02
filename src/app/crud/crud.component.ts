import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})

export class CrudComponent implements OnInit {

  constructor() { }

  employees = [ 
  			{name: "James", designation: "SE", company: "Dell"},
  			{name: "Carlos", designation: "Manager", company: "TCS"},
  			{name: "Bravo", designation: "Admin", company: "Wipro"},
  			{name: "Chris", designation: "QA", company: "IBM"}
  		]

  model:any={}   // Object to copy entered data from 'addEmployeeForm' to 'Read and delete employee' table //
  selectedEmployee:any={}
  public openEmployeeForm;
  public updateEmployeeForm;
  indexValueOfEditedRow;
  deleteMessage:any="";
  addMessage:any="";
  updateMessage:any="";

  addEmployee() {
  	this.employees.push(this.model);
  	this.model = " ";
  	this.addMessage = "New employee has been added successfully!";
  	$('.add').show()
  	setTimeout(function() {
		  $('.add').hide();
		}, 5000);
  }

  deleteEmployee(i) {
  	this.employees.splice(i,1)
  	$('.delete').show();
  	this.deleteMessage = "New employee has been deleted successfully!";
  	setTimeout(function() {
		  $('.delete').hide();
		}, 5000);
  }

  editEmployee(k) {
  	this.selectedEmployee.name = this.employees[k].name;
  	this.selectedEmployee.designation = this.employees[k].designation;
  	this.selectedEmployee.company = this.employees[k].company;
  	this.indexValueOfEditedRow = k;
  	this.updateEmployeeForm = true;
  }

  updateEmployee() {
  	var k = this.indexValueOfEditedRow;
  	for(var i=0; i<this.employees.length; i++) {
  		if(i == k) {
  			this.employees[i] = this.selectedEmployee;
  			this.selectedEmployee = {};
  		}
  	}
  	this.updateMessage = "Selected employee has been updated successfully!";
  	$('.update').show()
  	setTimeout(function() {
			$('.update').hide();
		}, 5000);
  }

  close() {
  	$('.add').hide();
  	$('.update').hide();
  	$('.delete').hide();
  }

  ngOnInit() {
  }

}
