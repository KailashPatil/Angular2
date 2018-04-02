import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html'
})

export class ModelDrivenFormsComponent implements OnInit {

	// Here 'userForm' is a name of a model
	// Need to create FormControl for all the form fields within a FormGroup

	userForm = new FormGroup({
		name: new FormControl('Kailash', [Validators.required, Validators.minLength(2)]),   // First parameter will be the prefill value
		email: new FormControl(),
		address: new FormGroup({
			street: new FormControl(),
			city: new FormControl(),
			postalcode: new FormControl(null, [Validators.required, Validators.pattern('^[1-9][0-9]{4}$')])
		})
	})

  constructor() { }

  onSubmit() {
  	console.log(this.userForm.value);
  }

  ngOnInit() {
  }

}
