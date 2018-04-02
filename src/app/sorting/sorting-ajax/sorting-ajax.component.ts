import { Component, OnInit } from "@angular/core";
import { SortingService } from "../sorting.service";

@Component({
	selector: "app-sorting-ajax",
	templateUrl: "./sorting-ajax.component.html"
})
export class SortingAjaxComponent implements OnInit {
	public items = [];

	constructor(private sortingService: SortingService) {}

	sortItems(key, direction) {
		if (key) {
			this.sortingService.getItems(key, direction).subscribe(resItems => {
				this.items = resItems;
			});
		}
	}

	ngOnInit() {
		this.sortingService.getItems("number", "ASC").subscribe(resItems => {
			console.log(resItems, "fgfdg");
			this.items = resItems;
		});
	}
}
