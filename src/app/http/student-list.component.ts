import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {

  public students = [];

  constructor( private studentService : StudentService) {}

  ngOnInit() {
  	// this.students = this.studentService.getStudents();
  	console.log('student list component');
  	this.studentService.getStudents()
  		.subscribe(resStudentdata => this.students = resStudentdata);
  }

}
