console.log("The bot is running");

var Twit = require("twit");

var config = require("./config");

var T = new Twit(config);

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Who is this?", (name) => {

  T.post('statuses/update', { status: 'Hi from ' + name}, tweeted);
  
  rl.close();
});

function tweeted(err, data, response) {
	if (err) {
		console.log("Something went wrong...\n" + data);
	} else {
		console.log("It worked!\nText:" + data.text);
	}
}