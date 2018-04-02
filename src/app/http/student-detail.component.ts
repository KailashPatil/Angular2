import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html'
})
export class StudentDetailComponent implements OnInit {

  public students = [];

  constructor(private studentService : StudentService) { }

  ngOnInit() {
  	// this.students = this.studentService.getStudents();
  	this.studentService.getStudents()
  		.subscribe(resStudentdata => this.students = resStudentdata);
  }

}
