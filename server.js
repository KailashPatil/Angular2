const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const api = require("./server/routes/api");
const config = require("config");

const port = config.get("web_app.port");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// after the code that uses bodyParser and other cool stuff
var originsWhitelist = [
	"http://localhost:4500" //this is my front-end url for development
];
var corsOptions = {
	origin: function(origin, callback) {
		var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
		callback(null, isWhitelisted);
	},
	credentials: true
};

//here is the magic
app.use(cors(corsOptions));

app.use("/api", api);
// app.use("pagination", pagination);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "dist/index.html"));
});
app.listen(port, function() {
	console.log("Server running on localhost:" + port);
});
