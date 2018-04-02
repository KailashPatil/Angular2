const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
	number: Number,
	name: String,
	country: String
});

module.exports = mongoose.model("item", itemsSchema, "items");
