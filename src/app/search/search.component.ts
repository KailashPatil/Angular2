import { Component, OnInit } from "@angular/core";
import { SearchService } from "./search.service";
import { Router } from "@angular/router";
import * as _ from "underscore";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
	public lists = [];
	public searchText;
	public notify = false;

	constructor(private searchService: SearchService, private router: Router) {}

	search(value) {
		let getSearchArray = [];
		if (value != "") {
			getSearchArray = this.setSearchArray(value);
		}

		this.searchService.getLists(getSearchArray).subscribe(resLists => {
			this.lists = resLists;
			if (_.isEmpty(this.lists)) {
				this.notify = true;
			} else {
				this.notify = false;
			}
			this.router.navigate(["/search"], {
				queryParams: { q: encodeURIComponent(value) }
			});
		});
	}

	ngOnInit() {
		this.searchService.getLists([]).subscribe(resLists => {
			this.lists = resLists;
		});
	}

	setSearchArray(searchValue) {
		let tmpArr = [];
		let splitString = searchValue.split(",");
		for (let item of splitString) {
			tmpArr.push(item.trim());
		}
		return tmpArr;
	}
}
