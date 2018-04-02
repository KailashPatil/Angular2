import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  inputs: ['parentValue'],
  outputs: ['childEvent']
})

export class TwoComponent implements OnInit {

	public parentValue: string;
	public childEvent = new EventEmitter<string>();

  constructor() { }

  onChange(value:string) {
  	this.childEvent.emit(value);
  }

  ngOnInit() {
  }

}
