const EventEmiter = require("events");

var url = "http://log";
class Logger extends EventEmiter {
	log(message) {
		// send a http request

		console.log(message);

		//Rasie an event
		this.emit("messageLogged", { id: 1, url: "http://" });
	}
}
module.exports = Logger;
