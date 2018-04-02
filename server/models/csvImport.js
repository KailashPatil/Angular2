const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImportCsvSchema = new Schema({
	jersey: Number,
	name: String,
	country: String
});

module.exports = mongoose.model("csvImport", ImportCsvSchema, "importCsv"); // importCsv - collection name && csvImport - model name
