const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listsSchema = new Schema({
	name: String,
	city: String
});

module.exports = mongoose.model("list", listsSchema, "lists");
