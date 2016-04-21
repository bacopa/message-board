"use strict";

const PORT = process.env.PORT || 3000;

let jade = require("jade");
let http = require("http");
let nodeStatic = require("node-static");
let moment = require("moment");
let now = moment().format("MMM Do YY");
//read and understand the dif between this and previous server option
let file = new nodeStatic.Server("./public");
// let fn = jade.compile(??????)


// console.log(messagesObj.m1.pic);

http.createServer( (req, res) => {
	let html;


	switch (req.url) {

		case "/":
			html = jade.renderFile("./views/index.jade", {
				
					m1handle: "Dalia",
					m1pic: "http://vignette4.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437",
					m1date: now,
					m1text: "I love boxers!",
				
					m2handle: "Catherine",
					m2pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKafuPlwS47qbDQa-PCslrPIPE6wwwuSOoDS5llYr9hnnVZNfQ",
					m2date: "April 18, 16",
					m2text: "Sensors indicate human life forms 30 meters below the planet's surface. Stellar flares are increasing in magnitude and frequency. Set course for Rhomboid Dronegar 006, warp seven. There's no evidence of an advanced communication network. Total guidance system failure, with less than 24 hours' reserve power. Shield effectiveness has been reduced 12 percent. We have covered the area in a spherical pattern which a ship without warp drive could cross in the given time."

			});

			res.end(html);
			break;

		case "/new":
			html = jade.renderFile("./views/new.jade", {
				title: "Post a Message"
			});

			res.end(html)
			break;


		default:
			html = jade.renderFile("./views/index.jade", {
				title: "Message Board"
			});
			res.end(html);
			break;
	}

})
.listen(PORT, err => {
	if(err) return console.log("Error:", err);
	console.log(`Listening on port ${PORT}`);
});
