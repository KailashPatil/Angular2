import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { CountryService } from './country.service';
import { Router, ActivatedRoute } from '@angular/router';

import * as $ from "jquery";
import * as _ from 'underscore';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  inputs: ["country"]
})
export class ThirdComponent implements OnInit {

  constructor(
  	private countryService : CountryService,
  	private router : Router,
  	private activatedRouter : ActivatedRoute
  ) { 
  		this.getCountriesInToComponent()
  		// super(countryService)
  }

  public selectedCountry;
  public addingNewCountry = false;
  public countries = [];
  public id: number;
  myValue;
  model2:any={}

  // Click to see the details of particular list(country) //
  onClickingCountry(country) {
  	this.selectedCountry = country;
  }

  // Open the form to add more number of Countries //
  openForm() {
  	this.addingNewCountry = true;
  }

  // Get countries lists from service to component //
  getCountriesInToComponent() {
  	this.countryService.getCountries().then((countries) => this.countries = countries)
  }

  // To add more number of Countries in to the service //
  addCountry(team,sports,color,city) {
  	let country = {
  		team : team,
  		sports : sports,
  		color : color,
  		city : city
  	}
  	this.countryService.insertCountry(country);
  	this.addingNewCountry = false;
  }


  // Delete country from the list of countries //
	deleteCountryFromList(country) {

    // Remove the spaces
    // var str = $(".world li.red").attr("id").replace(/\s/g, '');
    // var count = $('#'+str);
    // console.log('#'+str, 'hey', count);
    // if('#'+str) {
    //   $(this).hide();
    //   console.log($(this));
    // }
    $('#country_India.red').hide();
    $('#country_Windies.red').hide();
    $('#country_South-Africa.red').hide();
    $('#country_New-Zealand.red').hide();
    this.selectedCountry = false;
    console.log(this.countries.length)
    return this.countries.length;
	}

  // Update country changes into the list of countries //
  // updateCountry() {
  //   let k = this.myValue;
  //   console.log(k,101)
  //   for(let i=0; i<this.countries.length; i++) {
  //     console.log(i, '123')
  //     if(i == k) {
  //       this.countries[i] = this.selectedCountry
  //       this.selectedCountry = {}
  //     }
  //   }
  // }

  close() {
  	this.addingNewCountry = false;
  }

  ngOnInit() {

  }

}
