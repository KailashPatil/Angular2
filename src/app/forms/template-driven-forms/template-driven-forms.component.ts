import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html'
})

export class TemplateDrivenFormsComponent implements OnInit {

	myName = "Kailash";

  constructor() { }

  onSubmit(value:any) {
  	console.log(value)
  }

  ngOnInit() {
  }

}
