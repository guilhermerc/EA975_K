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

// TODO: Trocar de 'findOne' para 'find'
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

// TODO: Trocar de 'findOne' para 'find'
router.get('/diretor/:diretor', function(req, res, next) {
	console.log("GET filmes /diretor/:diretor");
	var response = {};
	var query = {"diretor": req.params.diretor};
	console.log(query);
	modelFilme.findOne(query, function (err, filme) {
		if (err) {
			console.error(err);
			response = {resultado: "Erro em GET filmes /diretor/:diretor"};
		} else if (filme == null) {
			response = {resultado: "Nenhum filme encontrado."}
		} else {
			response = {filme: [filme]};
		}
		res.send(response);
	});
});

router.get('/elenco/:nome', function(req, res, next) {
	console.log("GET filmes/elenco/:nome");
	var response = {};
	var query = {'elenco.nome': req.params.nome};
	console.log(query);
	modelFilme.find(query, function (err, filmes) {
		if (err) {
			console.error(err);
			response = {resultado: "Erro em GET filmes/elenco/:nome"};
		} else if (filmes == null || filmes.length === 0) {
			response = {resultado: "Nenhum filme encontrado."}
		} else {
			response = {filmes: [filmes]};
		}
		res.send(response);
	});
});

// TODO: Trocar de 'findOne' para 'find'
router.get('/ano/:ano', function(req, res, next) {
	console.log("GET filmes /ano/:ano");
	var response = {};
	var query = {"ano": req.params.ano};
	console.log(query);
	modelFilme.findOne(query, function (err, filme) {
		if (err) {
			console.error(err);
			response = {resultado: "Erro em GET filmes /ano/:ano"};
		} else if (filme == null) {
			response = {resultado: "Nenhum filme encontrado."}
		} else {
			response = {filme: [filme]};
		}
		res.send(response);
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
