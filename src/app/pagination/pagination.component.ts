import { Component, OnInit } from "@angular/core";
import { PaginationService } from "./pagination.service";

@Component({
	selector: "app-pagination",
	templateUrl: "./pagination.component.html"
})
export class PaginationComponent implements OnInit {
	public paginations = [];

	constructor(private paginationService: PaginationService) {}

	ngOnInit() {
		this.paginationService.getPaginationLists().subscribe(resPaginations => {
			this.paginations = resPaginations;
		});
	}
}
