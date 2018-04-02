import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";
import { Router } from "@angular/router";
import * as _ from "underscore";

@Component({
	selector: "app-search-form",
	templateUrl: "./search-form.component.html"
})
export class SearchFormComponent implements OnInit {
	public lists = [];
	public message;
	public notify;
	constructor(private route: Router, private searchService: SearchService) {}

	onSearchForm(body) {
		console.log(body, 'body');
		let getSearchFormArray = [];

		if(body.search_value != "") {
			getSearchFormArray = this.setSearchFormItems(body.search_value);
			console.log(getSearchFormArray, 'getSearchFormArray');
		}

		// if (body.search_value != "") {
			this.searchService
				.getFormSearchLists(getSearchFormArray)
				.subscribe(resLists => {
					this.lists = resLists;
					console.log(this.lists, "aaa", getSearchFormArray);
					if (_.isEmpty(this.lists)) {
						this.notify = true;
					} else {
						this.notify = false;
					}
					this.route.navigate(["/search-form"], {
						queryParams: { q: body.search_value }
					});
				});
		// } 
	}

	setSearchFormItems(searchValue) {
		let tmpArray = [];
		let splitString = searchValue.split(",");
		for( let item of splitString) {
			tmpArray.push(item.trim());
		}
		return tmpArray;
	}

	ngOnInit() {
		this.searchService.getFormSearchLists([]).subscribe(resLists => {
			this.lists = resLists;
		});
	}
}
