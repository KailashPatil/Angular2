const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
	title: String,
	url: String,
	description: String
});

module.exports = mongoose.model('video', videoSchema, 'videos');  // Here it creates model, 'video' is the model name, videoSchema is the order to display data, 'videos' is the collection name (while creating db we created collection, name as 'videos')