var express = require('express');
var app = express();
var monk = require('monk');

// This creates a server that runs on localhost, port 3000
// in your browser go to http://localhost:3000/ to view the web page
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/test.html');
	console.log('Test!');
});

app.listen(3000);