import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})

export class PipesComponent implements OnInit {

	public name = 'Kailashpatil';

	date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
