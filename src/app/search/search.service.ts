import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SearchService {
	constructor(private http: Http) {}

	public getListsUrl = "http://127.0.0.1:3000/api/search-lists";
	public getFormListsUrl = "http://127.0.0.1:3000/api/search-form-lists";
	public listUrl;
	public formListUrl;

	getLists(searchVal) {
		searchVal = JSON.stringify(searchVal);
		this.listUrl = this.getListsUrl + "/?searchText=" + searchVal;
		return this.http
			.get(this.listUrl)
			.map((response: Response) => response.json());
	}

	getFormSearchLists(searchText) {
		console.log(searchText, "form search value");
		searchText = JSON.stringify(searchText);
		console.log(searchText, 'searchTextryrtytr');
		this.formListUrl = this.getFormListsUrl + "/?searchText=" + searchText; // the text we typed in search field -> searchText

		return this.http
			.get(this.formListUrl)
			.map((response: Response) => response.json());
	}
}
