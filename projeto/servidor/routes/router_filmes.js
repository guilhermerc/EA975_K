var modelFilme = require('../models/model_filme');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log("GET /filmes");
	var response = {
	    "houveErro":              	false,
	    "mensagemErro":           	"",
	    "totalFilmesEncontrados":	0,
	    "filmes":                 	[]
	};
	modelFilme.find(function (err, filmes) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		} else {
			response.totalFilmesEncontrados =	filmes.length;
			response.filmes =					filmes;
		}
		res.send(response);
	});
});

router.get('/titulo/:titulo', function(req, res, next) {
	console.log("GET filmes/titulo/:titulo");
	var response = {
	    "houveErro":              	false,
	    "mensagemErro":           	"",
	    "totalFilmesEncontrados":	0,
	    "filmes":                 	[]
	};
	var query = {
		"titulo":	req.params.titulo
	};
	console.log(query)
	modelFilme.find(query, function (err, filmes) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		} else if (filmes == null || filmes.length === 0) {
			// 'response' já está pronto para ser enviado
		} else {
			response.totalFilmesEncontrados =	filmes.length;
			response.filmes =					filmes;
		}
		res.json(response);
	});
});

router.get('/diretor/:diretor', function(req, res, next) {
	console.log("GET filmes /diretor/:diretor");
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	"",
		"totalFilmesEncontrados":	0,
		"filmes":                 	[]
	};
	var query = {
		"diretor":	req.params.diretor
	};
	console.log(query);
	modelFilme.find(query, function (err, filme) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		} else if (filmes == null || filmes.length === 0) {
			// 'response' já está pronto para ser enviado
		} else {
			response.totalFilmesEncontrados =	filmes.length;
			response.filmes =					filmes;
		}
		res.send(response);
	});
});

router.get('/elenco/:nome', function(req, res, next) {
	console.log("GET filmes/elenco/:nome");
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	"",
		"totalFilmesEncontrados":	0,
		"filmes":                 	[]
	};
	var query = {
		'elenco.nome': 	req.params.nome
	};
	console.log(query);
	modelFilme.find(query, function (err, filmes) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		} else if (filmes == null || filmes.length === 0) {
			// 'response' já está pronto para ser enviado
		} else {
			response.totalFilmesEncontrados =	filmes.length;
			response.filmes =					filmes;
		}
		res.send(response);
	});
});

router.get('/ano/:ano', function(req, res, next) {
	console.log("GET filmes /ano/:ano");
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	"",
		"totalFilmesEncontrados":	0,
		"filmes":                 	[]
	};
	var query = {
		"ano":	req.params.ano
	};
	console.log(query);
	modelFilme.find(query, function (err, filme) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		} else if (filmes == null || filmes.length === 0) {
			// 'response' já está pronto para ser enviado
		} else {
			response.totalFilmesEncontrados =	filmes.length;
			response.filmes =					filmes;
		}
		res.send(response);
	});
});

router.get('/id/:id', function(req, res, next) {
	console.log("GET filmes/id/:id");
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	"",
		"totalFilmesEncontrados":	0,
		"filmes":                 	[]
	};
	var query = {
		"id":	req.params.id
	};
	console.log(query);
	modelFilme.findOne(query, function (err, filme) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		} else if (filme == null) {
			// 'response' já está pronto para ser enviado
		} else {
			response.totalFilmesEncontrados =	filmes.length;
			response.filmes =					filmes;
		}
		res.send(response);
	});
});

module.exports = router;
