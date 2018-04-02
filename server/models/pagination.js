const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paginationSchema = new Schema({
	number: Number,
	name: String,
	country: String
});

module.exports = mongoose.model("pagination", paginationSchema, "paginations");
