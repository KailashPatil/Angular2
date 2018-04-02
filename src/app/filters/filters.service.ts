import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class FiltersService {

  constructor(
  	private http: Http) { }

  public getListsUrl = "http://127.0.0.1:3000/api/lists";

  getLists() {
  	return this.http.get(this.getListsUrl)
  		.map((response: Response)=>response.json())
  }

}
