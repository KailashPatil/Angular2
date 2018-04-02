import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class PaginationService {
	public getPaginationUrl = "http://127.0.0.1:3000/api/pagination";
	public getCustomPaginationUrl = "http://127.0.0.1:3000/api/custom-pagination";

	constructor(private http: Http) {}

	getPaginationLists() {
		return this.http
			.get(this.getPaginationUrl)
			.map((response: Response) => response.json());
	}

	getCustomPaginationLists() {
		// this.getPages = this.getCustomPaginationUrl + "/" + path;
		return this.http
			.get(this.getCustomPaginationUrl)
			.map((response: Response) => response.json());
	}
}
