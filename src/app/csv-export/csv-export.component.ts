import { Component, OnInit } from "@angular/core";
import { CsvExportService } from "./csv-export.service";
import { Angular2Csv } from "angular2-csv/Angular2-csv";

@Component({
	selector: "app-csv-export",
	templateUrl: "./csv-export.component.html"
})
export class CsvExportComponent implements OnInit {
	public csvFile = [];
	constructor(private csvExportService: CsvExportService) {}

	exportCsv() {
		this.csvExportService.getCsvExportLists().subscribe(data => {
			this.csvFile = this.removeIdFromData(data);
			this.csvFile = data;
			console.log(data, "data");
			var options = {
				fieldSeparator: ",",
				quoteStrings: '"',
				decimalseparator: ".",
				showLabels: true,
				showTitle: false,
				useBom: false,
				headers: ["Jersey no.", "Name", "Country"]
			};
			new Angular2Csv(this.csvFile, "Players", options);
		});
	}

	removeIdFromData(data) {
		for (let csv of data) {
			delete csv._id;
		}
		return data;
	}

	ngOnInit() {
		this.csvExportService.getCsvExportLists().subscribe(resCsvLists => {
			this.csvFile = resCsvLists;
		});
	}
}
