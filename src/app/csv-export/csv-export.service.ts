import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class CsvExportService {
	public getCsvExpoprtUrl = "http://127.0.0.1:3000/api/csv-export";
	public postCsvImportUrl = "http://127.0.0.1:3000/api/csv-import";

	constructor(private http: Http) {}

	getCsvExportLists() {
		return this.http
			.get(this.getCsvExpoprtUrl)
			.map((response: Response) => response.json());
	}

	updateCsv(csvString) {
		let body = {
			csv_string: csvString
		};
		let headers = new Headers({ "Content-Type": "application/json" });
		let options = new RequestOptions({ headers: headers });
		return this.http
			.post(this.postCsvImportUrl, body, options)
			.map((response: Response) => response;
	}
}
