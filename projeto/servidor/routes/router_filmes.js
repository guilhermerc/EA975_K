var modelFilme = require('../models/model_filme');

var express = require('express');
var router = express.Router();

// GET /filmes
router.get('/', function(req, res, next) {
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

// POST /filmes
router.post('/', function(req, res, next) {
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	"",
		"filme":					[]
	};
    
    var auth_response = checaAutenticacao(req,res);
    if(auth_response == 'unauthorized'){
        response.houveErro = true;
        response.mensagemErro = "Usuário não autenticado"
        res.send(response);
        return
    }
    else if(auth_response != "moderador"){
        response.houveErro = true;
        response.mensagemErro = "Usuário não tem permissão para inserir um filme"
        res.send(response);
        return
    }
    
	var filme = {
		"id": 			"",
		"titulo":		req.body.titulo,
		"diretores": 	req.body.diretores,
		"ano":			req.body.ano,
		"elenco":		req.body.elenco,
		"sinopse": 		req.body.sinopse,
		"nota":			0,
		"criticas":		[]
	}
	modelFilme.create(filme, function(err, filme) {
		if(err) {
			console.log(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		}
		modelFilme.update({_id: filme._id}, {id: filme._id}, function(err, res) {
			console.log(err);
			console.log(res);
		});
		response.filme =	[filme],
		res.send(response);
	});
});

// GET /filmes/id/:id
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
			response.totalFilmesEncontrados =	filme.length;
			response.filmes =					[filme];
		}
		res.send(response);
	});
});

// PUT /filmes/id/:id
router.put('/id/:id', function(req, res, next) {
	console.log("PUT /filmes");
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	"",
	};
    
    var auth_response = checaAutenticacao(req,res);
    if(auth_response == 'unauthorized'){
        response.houveErro = true;
        response.mensagemErro = "Usuário não autenticado"
        res.send(response);
        return
    }
    else if(auth_response != "moderador"){
        response.houveErro = true;
        response.mensagemErro = "Usuário não tem permissão para inserir um filme"
        res.send(response);
        return
    }
    
	var query = {
		"id":	req.params.id
	};
	console.log(req.body);
	modelFilme.findOne(query, function (err, filme) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		} else if (filme == null) {
			response.houveErro = 	true;
			response.mensagemErro = "Filme inexistente na base de dados!";
		} else {
			modelFilme.update({_id: filme._id}, req.body, function(err, res) {
				if(err)
					console.log(err);
			});
		}
		res.send(response);
	});
});

// DELETE /filmes/id/:id
router.delete('/id/:id', function(req, res, next) {
	console.log("DELETE filmes/id/:id");
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	""
	};
    
    var auth_response = checaAutenticacao(req,res);
    if(auth_response == 'unauthorized'){
        response.houveErro = true;
        response.mensagemErro = "Usuário não autenticado"
        res.send(response);
        return
    }
    else if(auth_response != "moderador"){
        response.houveErro = true;
        response.mensagemErro = "Usuário não tem permissão para inserir um filme"
        res.send(response);
        return
    }
    
	var query = {
		"id":	req.params.id
	};
	console.log(query);
	modelFilme.deleteOne(query, function (err, filme) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		}

		res.send(response);
	});
});

// GET filmes/titulo/:titulo
router.get('/titulo/:titulo', function(req, res, next) {
	var response = {
	    "houveErro":              	false,
	    "mensagemErro":           	"",
	    "totalFilmesEncontrados":	0,
	    "filmes":                 	[]
	};
	var query = {
		"titulo":	req.params.titulo
	};
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

// GET /filmes/diretores/:diretor
router.get('/diretores/:diretor', function(req, res, next) {
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	"",
		"totalFilmesEncontrados":	0,
		"filmes":                 	[]
	};
	var query = {
		"diretores.nome":	req.params.diretor
	};
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

// GET /filmes/ano/:ano
router.get('/ano/:ano', function(req, res, next) {
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	"",
		"totalFilmesEncontrados":	0,
		"filmes":                 	[]
	};
	var query = {
		"ano":	req.params.ano
	};
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

// GET /filmes/elenco/:nome
router.get('/elenco/:nome', function(req, res, next) {
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	"",
		"totalFilmesEncontrados":	0,
		"filmes":                 	[]
	};
	var query = {
		'elenco.nome': 	req.params.nome
	};
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


// Comando para simular um POST em /filmes/id/0
// 'curl --header "Content-Type: application/json" -d "{\"username\":\"gabriel\
// ",\"data\":\"22/22/2222\", \"comentario\":\"Achei um lixão\", \"nota\":\"20\"
// }" http://localhost:3000/id/0'
// POST /filmes/id/:id/criticas
router.post('/id/:id/criticas', function(req, res, next) {
	var response = {
		"houveErro":              	false,
		"mensagemErro":           	"",
		"filme":					[]
		};
	var query = {
		"id":	req.params.id
	};
	modelFilme.findOne(query, function (err, filme) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		} else if (filme == null) {
			// 'response' já está pronto para ser enviado
			console.error("Filme não encontrado na base de dados.");
			response.houveErro = 	true;
			response.mensagemErro = "Filme não encontrado na base de dados.";
		} else {
			adicionaCritica(filme.criticas, req.body);
			atualizaNotaMedia(filme, filme.criticas);
			modelFilme.replaceOne({_id: filme._id}, filme, function(err, res){
				if(err){
					console.log(err);
				}
			});
			response.filme = 	[filme];
		}
		res.send(response);
	});
});

// PUT /filmes/id/:id/criticas
router.put('/id/:id/criticas', function(req, res, next) {
	var response = {
		"houveErro":		false,
		"mensagemErro":		"",
		"filme":			[]
	};
	var query = {
		"id":	req.params.id,
	};
	modelFilme.findOne(query, function (err, filme) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		} else if (filme == null) {
			// 'response' já está pronto para ser enviado
			console.error("Filme não encontrado na base de dados.");
			response.houveErro = 	true;
			response.mensagemErro = "Filme não encontrado na base de dados.";
		} else {
			atualizaCritica(filme.criticas, req.body);
			atualizaNotaMedia(filme, filme.criticas);
			modelFilme.replaceOne({_id: filme._id}, filme, function(err, res){
				if(err){
					console.log(err);
				}
			});
			response.filme = 	[filme];
		}
		res.send(response);
	});
});

// DELETE /filmes/id/:id/criticas/:username
router.delete('/id/:id/criticas/:username', function(req, res, next) {
	var response = {
		"houveErro":		false,
		"mensagemErro":		"",
		"filme":			[]
	};
	var query = {
		"id":	req.params.id,
	};
	modelFilme.findOne(query, function (err, filme) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
		} else if (filme == null) {
			console.error("Filme não encontrado na base de dados.");
			response.houveErro = 	true;
			response.mensagemErro = "Filme não encontrado na base de dados.";
		} else {
			removeCritica(filme.criticas, req.params.username);
			atualizaNotaMedia(filme, filme.criticas);
			modelFilme.replaceOne({_id: filme._id}, filme, function(err, res){
				if(err){
					console.log(err);
				}
			});
			response.filme =	[filme];
		}
		res.send(response);
	});
});

function atualizaNotaMedia(filme) {
	var i = 0, notaMedia = 0;
	for (i = 0; i < filme.criticas.length; i++) {
		notaMedia += filme.criticas[i].nota;
	}
	notaMedia /= filme.criticas.length;
	filme.nota = notaMedia;
}

function adicionaCritica(criticas, novaCritica) {
	criticas.push(novaCritica);
}

function atualizaCritica(criticas, novaCritica) {
	for (var i in criticas) {
     	if (criticas[i].username == novaCritica.username) {
    		criticas[i] = novaCritica;
        	break;
     	}
   	}
}

function removeCritica(criticas, username) {
	for (var i in criticas) {
     	if (criticas[i].username == username) {
			criticas.splice(i, 1);
        	break;
     	}
   	}
}

function checaAutenticacao(req, res) {
  cookies = req.cookies;
  if(! cookies || ! cookies.autenticacaoUsuario) return 'unauthorized';
  cauth = cookies.autenticacaoUsuario;
  var content = JSON.parse(cauth);
  var key = content.key;
  var role = content.role;
  if(key == 'secret') return role
  return 'unauthorized';
}

module.exports = router;
