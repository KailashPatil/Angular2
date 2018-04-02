import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-tab1',
  templateUrl: './second-tab1.component.html'
})
export class SecondTab1Component implements OnInit {

	public isTab1Hidden = true;

  constructor() { }

  ngOnInit() {
  }

}
