import { Component, OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core'
import { SecondTab1Component } from './second-tab1/second-tab1.component';
import { SecondTab2Component } from './second-tab2/second-tab2.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {

	public isTab1Show = true;
	public isTab2Show = false;
	public activeTab = false;

	public isTabXShow = true;
	public isTabYShow = false;

	public selectedTab = null;


  // public active : boolean;

  constructor() { 

  }

  active: boolean;

  tabs = [
    {title:"Saving", active: true},
    {title:"Current", active: true},
    {title:"FD", active: true},
    {title:"PPF", active: true}
  ]

  onSelect(tab) {
    this.selectedTab = tab;
    console.log(this.selectedTab, tab, 'tabs');
    // this.tabs.forEach((selectedTab) => {
    //   this.selectedTab = false;
    //   console.log(selectedTab, tab)
    // });
    // this.selectedTab = true;
    // console.log(this.selectedTab);
  }

  onClickTab1() {
  	this.isTab1Show = true;
  	this.isTab2Show = false;
  }

  onClickTab2() {
  	this.isTab1Show = false;
  	this.isTab2Show = true;
  }

  onClickTabX() {
  	this.isTabXShow = true;
  	this.isTabYShow = false;
  }

  onClickTabY() {
  	this.isTabXShow = false;
  	this.isTabYShow = true;
  }

  ngOnInit() {
   
  }

}
