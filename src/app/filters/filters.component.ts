import { Component, OnInit } from '@angular/core';
import { FiltersService } from './filters.service';
import { FilterPipe } from './filter.pipe';
import { FilterMediumPipe } from './filter-medium.pipe';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit {

	public lists = [];

  constructor(
  	private filtersService: FiltersService) { }

  searchableList = ['name', 'age', 'city'];  // This is used to filter array from these values - name, age and city => mentined in advanced filter html

  public simples = ['pipe', 'array', 'filter', 'boolean', 'function'];  // Only for Simple search purpose

  ngOnInit() {

  	return this.filtersService.getLists()
  		.subscribe(resLists => {
  			this.lists = resLists;
  		});

  }

}
