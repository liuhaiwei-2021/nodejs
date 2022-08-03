// const EventEmiter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//Register a listener
logger.on("messageLogged", function (arg) {
	console.log("listener called", arg);
});

logger.log("message");
