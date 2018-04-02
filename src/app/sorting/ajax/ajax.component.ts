import { Component, OnInit } from "@angular/core";
import { SortingService } from "../sorting.service";
import * as $ from "jquery";
import * as _ from "underscore";

@Component({
	selector: "app-ajax",
	templateUrl: "./ajax.component.html"
})
export class AjaxComponent implements OnInit {
	public lists = [];

	constructor(private sortingService: SortingService) {}

	ngOnInit() {
		this.sortingService.getLists().subscribe(resLists => {
			this.lists = resLists;
		});
	}
}
