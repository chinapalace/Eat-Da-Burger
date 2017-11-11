var express = require('express');
var app = express();
var apiController = require('./controllers/apiController.js');


var db = require("./models");

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//Routes 
apiController(app);

db.sequelize.sync().then(function() {
	app.listen(port, function() {
		console.log("App listening on PORT " + port);
	});
});
