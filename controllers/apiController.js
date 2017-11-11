var Burgers = require('../models/burgers.js');
var bodyParser = require('body-parser');
var db = require('../models');

module.exports = function(app) {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	// Routes 
	//------------------------------------------------
	app.get('/api/burgers', function(req, res) {

		db.Burgers.findAll({}).then(function(dbBurger) {

			res.json(dbBurger);
		});
	});

	app.get("/api/burgers/:id", function(req, res) {

	    db.Burgers.findAll({
	      where: {
	        id: req.params.id
	      }
	    }).then(function(dbTodo) {
	      res.json(dbTodo);
	    });
  	});

	app.post('/api/burgers', function(req, res) {

		// check if post is CREATE or UPDATE
		// if it has id -> UPDATE
		if (req.body.id) {
			db.Burgers.update({
				text: req.body.text,
				complete: req.body.complete
			}, {
				where: {
					id: req.body.id
				}
				}).then(function(dbBurger){

					res.json(dbBurger);
				});			
		}

		// if it doesn't have id -> CREATE
		else {
			db.Burgers.create({
				text: req.body.text,
				complete: req.body.complete
			}).then(function(dbBurger) {

				res.json(dbBurger);
			});
		}
	});

	app.delete('/api/burgers/:id', function(req, res) {

		db.Burgers.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbBurger) {

			res.json(dbBurger);
		});

	});
}