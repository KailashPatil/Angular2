import { Component, OnInit } from '@angular/core';
import { SortingService } from './sorting.service';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html'
})

export class SortingComponent implements OnInit {

	public lists = [];
  public sortDirection = 'asc';
  public sortField = 'name';

  constructor(
  	private sortingService: SortingService) { }

  public sortFields: Array<string> = ['name','age','city'];

  ngOnInit() {

  	this.sortingService.getLists()
  		.subscribe(resLists => {
  			this.lists = resLists
  		})

    console.log(this.lists, 'lists here');
  }

}
