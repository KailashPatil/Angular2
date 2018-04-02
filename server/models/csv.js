const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CsvSchema = new Schema({
	number: Number,
	name: String,
	country: String
});

module.exports = mongoose.model("csv", CsvSchema, "paginations");
