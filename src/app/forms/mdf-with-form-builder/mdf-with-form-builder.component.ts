import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-with-form-builder',
  templateUrl: './mdf-with-form-builder.component.html'
})

export class MdfWithFormBuilderComponent implements OnInit {

  // Here 'userForm' is a name of a model
	// Need to create FormControl for all the form fields within a FormGroup

	userForm : FormGroup;

	// userForm = new FormGroup({
	// 	name: new FormControl('Kailash', [Validators.required, Validators.minLength(2)]),   // First parameter will be the prefill value
	// 	email: new FormControl(),
	// 	address: new FormGroup({
	// 		street: new FormControl(),
	// 		city: new FormControl(),
	// 		postalcode: new FormControl(null, [Validators.required, Validators.pattern('^[1-9][0-9]{4}$')])
	// 	})
	// })

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.userForm = this._formBuilder.group({
  		name: ['Kailash', [Validators.required, Validators.minLength(2)]],
  		email: [],
  		address: this._formBuilder.group({
  			street: [],
  			city: [],
  			postalcode: [null, [Validators.required, Validators.pattern('^[1-9][0-9]{4}$')]]
  		})
  	})
  }

  onSubmit() {
  	console.log(this.userForm.value)
  }

}
