// Initialize the express object
var app = require('express')();

// Initialize monk
var monk = require('monk');
function getCruDB() {
	// Connect to the CRU db using an environment variable specified at runtime for security
	// ALWAYS close db after doing desired operations
	return monk(process.env.MONGO_URI);
}

app.get('/', function (req, res, next) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/users', function (req, res, next) {
	res.writeHead(200, {
    	'Content-Type': 'text/html',
  	});

	var cruDB = getCruDB();
	cruDB.get('users').find({}, function (err, data) {
		if (err) {
			console.log(err);
		}

		cruDB.close();
		res.end(generateHTMLHeader('Users') + generateHTMLBody('Users', data));
	});
});

app.get('/campuses', function (req, res, next) {
	res.writeHead(200, {
    	'Content-Type': 'text/html',
  	});

	var cruDB = getCruDB();
	cruDB.get('campus').find({}, function (err, data) {
		if (err) {
			console.log(err);
		}

		cruDB.close();
		res.end(generateHTMLHeader('Campuses') + generateHTMLBody('Campuses', data));
	});
});

app.get('/summer_missions', function (req, res, next) {
	res.writeHead(200, {
    	'Content-Type': 'text/html',
  	});

	var cruDB = getCruDB();
	cruDB.get('summermissions').find({}, function (err, data) {
		if (err) {
			console.log(err);
		}

		cruDB.close();
		res.end(generateHTMLHeader('Summer Missions') + generateHTMLBody('Summer Missions', data));
	});
});

app.get('/ministries', function (req, res, next) {
	res.writeHead(200, {
    	'Content-Type': 'text/html',
  	});

	var cruDB = getCruDB();
	cruDB.get('ministries').find({}, function (err, data) {
		if (err) {
			console.log(err);
		}

		cruDB.close();
		res.end(generateHTMLHeader('Ministries') + generateHTMLBody('Ministries', data));
	});
});

app.get('/events', function (req, res, next) {
	res.writeHead(200, {
    	'Content-Type': 'text/html',
  	});

	var cruDB = getCruDB();
	cruDB.get('events').find({}, function (err, data) {
		if (err) {
			console.log(err);
		}

		cruDB.close();
		res.end(generateHTMLHeader('Events') + generateHTMLBody('Events', data));
	});
});

app.get('/community_groups', function (req, res, next) {
	res.writeHead(200, {
    	'Content-Type': 'text/html',
  	});

	var cruDB = getCruDB();
	cruDB.get('comunitygroups').find({}, function (err, data) {
		if (err) {
			console.log(err);
		}

		cruDB.close();
		res.end(generateHTMLHeader('Community Groups') + generateHTMLBody('Community Groups', data));
	});
});

app.get('/ministry_teams', function (req, res, next) {
	res.writeHead(200, {
    	'Content-Type': 'text/html',
  	});

	var cruDB = getCruDB();
	cruDB.get('teams').find({}, function (err, data) {
		if (err) {
			console.log(err);
		}

		cruDB.close();
		res.end(generateHTMLHeader('Ministry Teams') + generateHTMLBody('Ministry Teams', data));
	});
});

function generateHTMLHeader(title) {
	// create the html header and add bootstrap styling
	return '<!DOCTYPE html> <html> <head> <title>' + title + '</title> ' + 
	'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous"></head>';
}

function generateHTMLBody(title, data) {
	var body = '<body><h1>' + title + '</h1><table class="table-border table-striped"><tr>';
	var values = Object.keys(data[0]);

	for (var i = 0; i < values.length; ++i) {
		body += '<td><b>' + values[i] + '</b></td>';
	} 
	body += '</tr>';

	for (var i = 0; i < data.length; ++i) {
		var object = data[i];
		body += '<tr>';

		for (var key in object) {
			body += '<td>' + JSON.stringify(object[key]) + '</td>';
		}

		body += '</tr>';
	}

	body += '</table></body></html>';
	return body;
}

app.listen(3030);