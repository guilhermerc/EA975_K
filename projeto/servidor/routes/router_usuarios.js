var express = require('express');
var modelUsuario = require('../models/model_usuario');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({titulo: "Avengers", ano: 2019});
});

/* Post usuário */
router.post('/', function(req, res, next) {
	console.log("POST /usuarios/");
	console.log("Usuário recebido:" + req.body.login);
	
	var response = {
		"houveErro":              	false,
		"mensagem":           		""
	};

	
	var query = {
			"login.username":	req.body.login.username
	};
	
	console.log("query:" + JSON.stringify(query));

	modelUsuario.findOne(query, function (err, usuario) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
			
		} else if (usuario != null) {
		// não pode usar usse usuário
			var mensagem = "Usuário já existente, tente outro."
			console.error(mensagem);
			response.houveErro = 	true;
			response.mensagemErro = mensagem;
			
		} else {
			// response já está pronta
			novoUsuario = new modelUsuario(req.body);
			
			novoUsuario.save( function(err, res){
				if(err){
					console.log(err);
				}
			});
		}
					
		res.send(response);
	});
});

module.exports = router;
