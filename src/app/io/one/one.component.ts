import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html'
})

export class OneComponent implements OnInit {

	public childValue:string;

  constructor(private route: Router) { }

  goToPipes() {
  	this.route.navigate(['/io/pipes']);
  }

  ngOnInit() {
  }

}
