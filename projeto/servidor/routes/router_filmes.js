// Router Filmes
var express = require('express');
var router = express.Router();
var modelFilme = require('../models/model_filme');


router.get('/', function(req, res, next) {
	console.log("estou em filmes");
	
	var response = {};

	modelFilme.find(function (err, filmes) {
		if (err) {
			console.error(err);
			response = {resultado: "Erro ao acessar filmes!"};
		} else {
			response = filmes;
		}
		res.send(response);
	});
});

router.get('/:titulo', function(req, res, next) {
	var response = {};
	var query = {"titulo": req.params.titulo};

	console.log("estou no get filme /titulo");
	console.log(query);
	modelFilme.find(query, function (err, filmes) {
		if (err) {
			console.error(err);
			response = {resultado: "Erro ao acessar filme!"};
		} else {
			response = filmes;
		}
		res.send(response);
	});
});

module.exports = router;
