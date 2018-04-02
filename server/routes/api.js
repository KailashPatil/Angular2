const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const config = require("config");
const _ = require("underscore");
const btoa = require("btoa");
const md5 = require("MD5");
const CSV = require("csv-string");

const Video = require("../models/video");
const Sorting = require("../models/list");
const SortingItems = require("../models/item");
const User = require("../models/user");
const Pagination = require("../models/pagination");
const Csv = require("../models/csv");
const ImportCsv = require("../models/csvImport");
const MailSender = require("../util/email");
const Helper = require("../util/helper");

const db = "mongodb://Kailash:indian@ds229388.mlab.com:29388/videoplayer";

mongoose.Promise = global.Promise; // to avoid throwing any warning from mongoose
mongoose.connect(db, function(err) {
	console.log(err, "error");
	if (err) {
		console.error("Error! " + err);
	}
});

/* Below code is to fetch all the videos from a db collection */

router.get("/videos", function(req, res) {
	console.log("Get request for all videos");
	Video.find({}).exec(function(err, videos) {
		if (err) {
			console.log("Error while fetching");
		} else {
			res.json(videos);
		}
	});
});

/* Below code is to fetch particular video using an id from a db collection */

router.get("/videos/:id", function(req, res) {
	console.log("Get particular video using an id");
	Video.findById(req.params.id).exec(function(err, video) {
		if (err) {
			console.log("Error while fetching video");
		} else {
			res.json(video);
		}
	});
});

/* Below code is to insert new video to a db collection */

router.post("/video", function(req, res) {
	console.log("Insert new video to a collection", req.body);
	var newVideo = new Video();
	newVideo.title = req.body.title;
	newVideo.url = req.body.url;
	newVideo.description = req.body.description;

	newVideo.save(function(err, insertedVideo) {
		if (err) {
			console.log("Error while inserting new video");
		} else {
			res.json(insertedVideo);
		}
	});
});

/* Below code is to Update a video from a db collection */

router.put("/video/:id", function(req, res) {
	console.log("Updating selected video with new data", req.body, req.params);
	Video.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				title: req.body.title,
				url: req.body.url,
				description: req.body.description
			}
		},
		{
			new: true
		},
		function(err, updatedVideo) {
			if (err) {
				res.send("Error while Updating video");
			} else {
				res.json(updatedVideo);
			}
		}
	);
});

/* Below code is to Delete a video from a db collection */

router.delete("/video/:id", function(req, res) {
	console.log("Deleting selected video from db collection");
	Video.findByIdAndRemove(req.params.id, function(err, deletedVideo) {
		if (err) {
			res.send("Selected video deleted");
		} else {
			res.json(deletedVideo);
		}
	});
});

/* Below code is to access all Authenticated users from a db collection */

router.get("/users", function(req, res) {
	console.log("Get request for all users", req.body);
	User.find({}).exec(function(err, users) {
		if (err) {
			console.log("Error while fetching users");
		} else {
			res.json(users);
		}
	});
});

/* Below code is to add new user to a db collection to perform Login */

router.post("/user", function(req, res) {
	console.log("Add new user to a collection", req.body);
	var newUser = new User(); // creating new user object and adding dependent fields ex: email and password
	newUser.email = req.body.email;
	newUser.password = btoa(req.body.password); // Before storing entered password as it is into db it encrypts here using btoa() Ex: indian converts to aW5kaWFu
	newUser.hash = "";
	let filters = {
		// this filter is to check the field(email) with existing login details, If it matches with any email then it tells "user already exist"
		email: req.body.email
	};
	console.log(newUser.password, "password");
	User.count(filters) // checking the entered email with db login emails and tells the count of same email id's.
		.exec(function(err, count) {
			console.log(count);
			if (err) {
				console.log("Error while fetching users");
			} else {
				if (count > 0) {
					// If entered email matches with any other email(which are in db) then it passes the condition and gives error as "user already exist"
					console.log("am cpmj");
					res.json({ error: "User already exist" });
				} else {
					newUser.save(function(err, insertedUser) {
						// If entered email doesn't match with any email(which are in db) then it consideres it as new user and this line executes
						if (err) {
							console.log("Error while adding new user");
						} else {
							res.json(insertedUser); // adding new user here
						}
					});
				}
			}
		});
});

/* Below code is to check for authorised user from db and allows to login */

router.post("/authorise", function(req, res) {
	console.log(req.body);
	let filters = {
		// this filter is to check the fields(email and password) from db logins, If it matches with any fields then it executes otherwisw it tells "user doesn't exist"
		email: req.body.email,
		password: req.body.password
	};
	User.find(filters) // this line checks current user details with db users login details, if it matches executes further otherwise gives error as "user does not exist"
		.exec(function(err, user) {
			if (err) {
				console.log("Error while fetching users");
			} else {
				console.log(user, "user data");
				if (_.isEmpty(user)) {
					// checks current user details with db users, If doesn'tmatch with any(nothing but empty response) then gives error as "user does not exist"
					res.json({ error: "User does not exist" });
				} else {
					res.json(user);
				}
			}
		});
});

/* Below code is to check while settng forgot password, entered email is in db or not, If yes then gives valid email and creates hash extension to expire after it being used*/

router.post("/forgot-password", function(req, res) {
	console.log("Reset password", req.body);
	let filters = {
		email: req.body.email // It takes entered email id(in forgot password form) and stores in filter
	};
	User.find(filters) // This line checks the filter what it contains(here email id) and checks in db
		.exec(function(err, user) {
			// after checking in db it executes
			if (err) {
				console.log("Error while upadting password"); // If any other errors like internet problem then this line executes
			} else {
				console.log(user, "No error fp");
				if (_.isEmpty(user)) {
					// while checking entered email in db, if it gets empty(which means if entered email doen't exist in db)
					console.log(user, "fp user in empty");
					res.json({ error: "Entered user email doesn't exist " }); // If empty then this error displays(you can see it in UI as error notification)
				} else {
					// If that entered email exist in db or matches then below code sends email to reset password with hash code
					console.log(user, "checking why we used user[0] in next line"); // user[0] used because 'user' object comes in array so to access id(fisrt element)
					let hash = md5(user[0]._id + config.get("salt")); // Generating hash code by encrypting user_id using md5 plus adding dummy salt variable as extension. salt defined in config file. as (salt=kailash123)
					let filters = { _id: user[0]._id }; // id is the unique element so id used in filters, checks id and update new field called hash in db for that particular user
					let updateParams = {
						// upadting params as hash here
						hash: hash
					};
					User.findByIdAndUpdate(
						user[0]._id, // So now that user have fields like id, email, password and hash. Hash is used for security reasons and it expires(we need write code for that) once user reset the password
						{
							$set: { hash: hash } // setting the hash field in db for that particular id or user
						},
						{
							upsert: true
						},
						function(err, updatedUser) {
							if (err) {
								res.json({ error: err }); // If any random error like internet issue
							} else {
								// Below is the line gives URL after clicking link from reset password email Ex: Click here to reset password
								// config.get("web_app.url") - takes url what we mentioned in confilg file and extends hash code which already we generated above and saved in db
								// ** Also it checks the path(/reset-password/?hash=" + hash) and goes to routing.ts to match and display correspondent page **
								let activation_link =
									config.get("web_app.url") + "/reset-password/?hash=" + hash;
								let values = {
									to: user[0].email, // takes the email which we entered in forgot-password form
									subject: "Set your password", // is the email subject
									html:
										"<b>Click here to Reset your password.</b><br><a href='" +
										activation_link +
										"'>Click here to Reset Password</a>'" // email body content
								};
								MailSender.send(values); // ** this sends the mail **
								res.json(updatedUser); // Upadtes user with all fields - id, email, password and hash
							}
						}
					);
				}
			}
		});
});

router.post("/validate-hash", function(req, res) {
	console.log(req.body, "hash body");
	// Aftre once resetting password from mail, If user uses same mail to reset again then it checks the hash(mentioned in filters below) in db to match(for which user are we resetting anta)
	let filters = {
		hash: req.body.hash
	};
	User.find(filters) // checks for hash in db (here user wont get hash because he using same mail again to reset pwd)
		.exec(function(err, user) {
			if (err) {
				console.log("Error while fetching users"); // If any random error
			} else {
				console.log(user, "user data");
				if (_.isEmpty(user)) {
					// checks for hash in db, If its empty(doesn;t match with any) then
					res.json({ error: "Hash is expired or does not exist" }); // displays error, which means already expired anta
				} else {
					res.json(user);
				}
			}
		});
});

router.post("/reset-password", function(req, res) {
	let filters = {
		// To replace password with old one we need to find for which user we have to reset the password so we are finding using hash
		hash: req.body.hash
	};
	let password = req.body.password; // this is the field we need to reset
	User.update(
		filters, // It finds the user to reset password using 'filters'
		{
			$set: {
				hash: "", // Clearing hash here so that if any person tries to reset again from mail, it wont find any hash in db so gives error(security reason)
				password: password // Setting the reset password and updating in below code
			}
		},
		function(err, updatedUser) {
			console.log(err, updatedUser, "dksjhfk fetching users");
			if (err) {
				console.log("Error while fetching users"); // If any random error
			} else {
				res.json(updatedUser); // In this updatedUser, user will have email, latest password(password which we reset in reset-password form) and cleared hash(which means it was there but not now because it is cleared)
			}
		}
	);
});

router.get("/lists", function(req, res) {
	console.log(req.body, "sorting lists api");
	Sorting.find({}).exec(function(err, lists) {
		if (err) {
			console.log("Error while fetching");
		} else {
			res.json(lists);
		}
	});
});

router.get("/items/:key/:direction", function(req, res) {
	let sortVal;
	let key = req.params.key;
	let sortOrder = 1;
	let direction = req.params.direction;
	if (direction == "ASC") {
		sortOrder = 1;
	} else {
		sortOrder = -1;
	}
	console.log(key, "key");
	if (key != null) {
		console.log(req.params.key);
		sortVal = key;
	} else {
		console.log("am ge");
		sortVal = "number";
	}
	let sortFilters = {
		[sortVal]: sortOrder
	};
	console.log(sortFilters, "sorting lists api using ajax");
	SortingItems.find({})
		.sort(sortFilters)
		.exec(function(err, items) {
			// console.log(items, "items");
			if (err) {
				console.log("Error while fetching");
			} else {
				res.json(items);
			}
		});
});

router.get("/sort-items", function(req, res) {
	console.log(req.query);
	let filters = {
		[req.query.sortVar]: req.query.sortOrder
	};
	console.log(req.body, "sorting items api");
	Sorting.find({})
		.sort({ age: 1 })
		.exec(function(err, lists) {
			if (err) {
				console.log("Error while fetching");
			} else {
				res.json(lists);
			}
		});
});

router.get("/search-lists", function(req, res) {
	let searchText = JSON.parse(req.query.searchText);
	let filters;
	if (_.isEmpty(searchText)) {
		filters = {};
	} else {
		filters = {
			name: { $in: searchText }
		};
	}

	console.log(filters, "filters");
	Sorting.find(filters).exec(function(err, lists) {
		console.log(lists, "lists");
		if (err) {
			console.log("Error while fetching seached list");
		} else {
			res.json(lists);
		}
	});
});

router.get("/search-form-lists", function(req, res) {
	console.log(req.query.searchText, "sfdf");
	let searchText = JSON.parse(req.query.searchText);
	let filters;
	if (_.isEmpty(searchText)) {
		filters = {};
	} else {
		filters = {
			$or: [
				{ name: { $in: searchText } },
				{ age: { $in: searchText } },
				{ city: { $in: searchText } }
			]
		};
	}
	console.log(filters, "dfdf");
	Sorting.find(filters).exec(function(err, lists) {
		// console.log(lists, "lists");
		if (err) {
			console.log("Error while fetching");
		} else {
			res.json(lists);
		}
	});
});

router.get("/pagination", function(req, res) {
	console.log("Get request for all pagination");
	Pagination.find({}).exec(function(err, paginations) {
		// console.log(paginations, "pg");
		if (err) {
			console.log("Error while fetching pagination lists");
		} else {
			res.json(paginations);
		}
	});
});

router.get("/custom-pagination", function(req, res) {
	console.log("Get request for all custom pagination lists");
	Pagination.find().exec(function(err, paginations) {
		if (err) {
			console.log("Error while fetching pagination lists");
		} else {
			res.json(paginations);
		}
	});
});

router.get("/csv-export", function(req, res) {
	console.log("Get request to export lists in csv");
	Csv.find({}).exec(function(err, paginations) {
		if (err) {
			console.log("Error while fetching export lists");
		} else {
			res.json(paginations);
			console.log(paginations, "sdfds");
		}
	});
});

router.post("/csv-import", function(req, res) {
	console.log("Import csv lists");
	try {
		let csvJson = Helper.csvToJson(req.body.csv_string);
		ImportCsv.insertMany(csvJson);
		res.json(csvJson);
	} catch (e) {
		res.json(e.message);
	}
});

module.exports = router;
