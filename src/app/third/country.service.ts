import { Injectable } from "@angular/core";
import { Country } from './country';

import * as $ from "jquery";
import * as _ from 'underscore';

export const countries  = [
    {team: 'India', sports: 'Cricket', color: 'Blue', city: 'Bangalore'}, 
    {team: 'New-Zealand', sports: 'Rugby', color: 'Black', city: 'Aucland'},
    {team: 'South-Africa', sports: 'Football', color: 'Green', city: 'Johansberg'},
    {team: 'Windies', sports: 'Swimming', color: 'Red', city: 'Jamaica'}
  ]

@Injectable()
export class CountryService {

  getCountries() {
    return Promise.resolve(countries);
  }

  insertCountry(country) {
    Promise.resolve(countries).then((countries)=>countries.push(country));
  }

  // deleteCountry(x) {
  //   console.log(x, 'countries')
  //   $(x).hide();
  //   // Promise.resolve(countries).then((countries)=>countries.splice(i,1));
  //   console.log(countries, 'here', x)
  // }

    // Promise.resolve(countries).then((countries)=>countries.splice(i,1));
    // var tab = [], liIndex;

    // for(var i=0;i<countries.length;i++) {
    //   console.log(countries[i], 22);
    //   countries[i].click(function() {
    //     liIndex = tab.indexOf(this.innerHTML);
    //     console.log(this.innerHTML + "INDEX = " + liIndex)
    //   })
    // }

    // var found = _.find(countries, function(selectedCountry){
    //   return selectedCountry;
    // })
    // countries.slice(selectedCountry, 1)
    // console.log(selectedCountry, '5')
    // var filtered = _.filter(countries, function(country) {
    //     return country.team !== selectedCountry
    // });
    // Promise.resolve(countries).then((countries)=>countries.pop(selectedCountry));
    
}