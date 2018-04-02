import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { CsvExportService } from "../csv-export.service";

@Component({
	selector: "app-csv-import",
	templateUrl: "./csv-import.component.html"
})
export class CsvImportComponent implements OnInit {
	public csvLists = [];
	public csvString;
	public status;
	public notification;
	public csvImportLists;
	constructor(
		private _router: Router,
		private csvExportService: CsvExportService
	) {}

	fileChangeListener(files: FileList) {
		if (files && files.length > 0) {
			let file: File = files.item(0);
			// console.log(file.name);
			// console.log(file.size);
			// console.log(file.type);
			let reader: FileReader = new FileReader();
			reader.readAsText(file);
			reader.onload = e => {
				this.csvString = reader.result;
				this.csvExportService
					.updateCsv(this.csvString)
					.subscribe(resUpdatedCsv => (
						this.csvLists = resUpdatedCsv.json(), 
						this.status = resUpdatedCsv.status);
			};
			this.csvImportLists = true;
			setTimeout(() => {
				this.status = "";
			},3000)
		}
	}

	ngOnInit() {
}
