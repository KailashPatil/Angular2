"use strict";

const Helper = {
	csvToJson: function(csv) {
		var lines = csv.split("\n");

		var result = [];

		var headers = lines[0].split(",");

		for (var i = 1; i < lines.length; i++) {
			var obj = {};
			var currentline = lines[i].split(",");
			for (var j = 0; j < headers.length; j++) {
				if (currentline[j]) {
					headers[j] = headers[j].trim().toLowerCase();
					obj[headers[j]] = currentline[j].trim();
				}
			}
			result.push(obj);
		}
		return result; //JSON
	}
};
module.exports = Helper;
