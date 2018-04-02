import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SortingService {
	constructor(private http: Http) {}

	public getListsUrl = "http://127.0.0.1:3000/api/lists";
	public getItemsUrl = "http://127.0.0.1:3000/api/items";
	public itemUrl;

	getLists() {
		return this.http
			.get(this.getListsUrl)
			.map((response: Response) => response.json());
	}

	// getAscItems(key, asc) {
	// 	console.log(this.getItemsUrl, key, "keys");
	// 	console.log(this.getItemsUrl, direction, "keys");
	// 	this.itemAscUrl = this.getItemsUrl + "/" + key + "/" + asc;
	// 	return this.http
	// 		.get(this.itemAscUrl)
	// 		.map((response: Response) => response.json());
	// }

	getItems(key, direction) {
		console.log(this.getItemsUrl, key, "keys");
		this.itemUrl = this.getItemsUrl + "/" + key + "/" + direction;
		return this.http
			.get(this.itemUrl)
			.map((response: Response) => response.json());
	}
}
