var modelFilme = require('../models/model_filme');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log("GET /filmes");
	var response = {};
	modelFilme.find(function (err, filmes) {
		if (err) {
			console.error(err);
			response = {resultado: "Erro em GET /filmes"};
		} else {
			response = filmes;
		}
		res.send(response);
	});
});

router.get('/titulo/:titulo', function(req, res, next) {
	console.log("GET filmes/titulo/:titulo");
	var response = {};
	var query = {"titulo": req.params.titulo};
	console.log(query)
	modelFilme.findOne(query, function (err, filme) {
		if (err) {
			console.error(err);
			response = {resultado: "Erro em GET /filmes/titulo/:titulo"};
		} else if (filme == null) {
			response = {resultado: "Nenhum filme encontrado."}
		} else {
			response = {filme: [filme]};
		}
		res.json(response);
	});
});

router.get('/id/:id', function(req, res, next) {
	console.log("GET filmes/id/:id");
	var response = {};
	var query = {"id": req.params.id};
	console.log(query);
	modelFilme.findOne(query, function (err, filme) {
		if (err) {
			console.error(err);
			response = {resultado: "Erro em GET filmes/id/:id"};
		} else if (filme == null) {
			response = {resultado: "Nenhum filme encontrado."}
		} else {
			response = {filme: [filme]};
		}
		res.send(response);
	});
});

module.exports = router;
