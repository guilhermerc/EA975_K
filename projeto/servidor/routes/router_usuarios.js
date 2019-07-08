var express = require('express');
var modelUsuario = require('../models/model_usuario');

var router = express.Router();

router.get('/username/:username', function(req, res, next) {
    console.log("GET/usuarios/username/:username");
	console.log("Usuário recebido:" + /*req.body.usuario*/ JSON.stringify(req.params));
    
    var response = {
		"houveErro":  false,
		"mensagemErro":   "",
        "usuario":        "" 
	};
    
    if(checaAutenticacao(req, res) == 'unauthorized') {
        response.houveErro = true;
        response.mensagemErro = "Usuário não autenticado";
        res.send(response);
        return;
    } 
    
    var query = {
			"login.username":	req.params.username
	};
    
    console.log("query:" + JSON.stringify(query));
    
    modelUsuario.findOne(query, function (err, usuario) {
        if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
        } else if (usuario == null) {
            // usuário não existe
			var mensagem = "Usuário não existente.";
			console.error(mensagem);
			response.houveErro = 	true;
			response.mensagemErro = mensagem;
        } else {
            response.usuario = usuario;
        }
        
        res.send(response);
    });
});

/*POST/usuarios/autenticacao - Autenticação de usuário */
router.post('/autentica', function(req, res, next) {
    console.log("POST/usuarios/autenticacao");
	console.log("Usuário recebido:" + /*req.body.usuario*/ JSON.stringify(req.body));
    
    var response = {
		"houveErro":  false,
		"mensagemErro":   "",
        "usuario":        "" 
	};
    
    var query = {
			"login.username":	req.body.usuario.login.username
	};
    
    console.log("query:" + JSON.stringify(query));
    
    modelUsuario.findOne(query, function (err, usuario) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
        } else if (usuario == null) {
            // usuário não existe
			var mensagem = "Usuário não existente.";
			console.error(mensagem);
			response.houveErro = 	true;
			response.mensagemErro = mensagem;
        } else {
            
            senha_dada = req.body.usuario.login.senha;
            if(usuario.login.senha != senha_dada){
                response.mensagem = "Senha incorreta";
                response.houveErro = true;                
                console.error(mensagem)
            }
            else {
                // resposta já pronta
                var role = (usuario.moderador) ? "moderador":"usuario"; 
                var content = {"key":"secret", "role": role};
                res.cookie('autenticacaoUsuario', JSON.stringify(content), {'maxAge': 3600000*24*5});  
                
                response.usuario = usuario;
            }
        }
        
        res.send(response);
    });
});

/*POST /usuarios/cadastro - Cadastra um usuário*/
router.post('/cadastro', function(req, res, next) {
	console.log("POST /usuarios/cadastro");
	console.log("Usuário recebido:" + /*req.body.usuario*/ JSON.stringify(req.body));
	
	var response = {
		"houveErro":              	false,
		"mensagemErro":           		""
	};
    
	var query = {
			"login.username": req.body.usuario.login.username

	};
	
	console.log("query:" + JSON.stringify(query));

	modelUsuario.findOne(query, function (err, usuario) {
		if (err) {
			console.error(err);
			response.houveErro = 	true;
			response.mensagemErro = err;
			
		} else if (usuario != null) {
		// não pode usar usse usuário
			var mensagem = "Usuário já existente, tente outro.";
			console.error(mensagem);
			response.houveErro = 	true;
			response.mensagemErro = mensagem;
			
		} else {
			// response já está pronta
			var novoUsuario = new modelUsuario(req.body.usuario);
			
			novoUsuario.save( function(err, res){
				if(err){
					console.log(err);
				}
			});
		}
					
		res.send(response);
	});
});

/*PUT/usuarios/login - Altera os dados do usuário*/
router.put('/username/:username', function(req, res, next) {
    console.log("PUT /usuarios/login");
	console.log("Usuário recebido:" + /*req.body.usuario*/ JSON.stringify(req.body));
    
    var response = {
        "houveErro":              	false,
		"mensagemErro":           		"",
    };
    
    if(checaAutenticacao(req, res) == 'unauthorized') {
        response.houveErro = true;
        response.mensagemErro = "Usuário não autenticado";
        res.send(response);
        return;
    } 
    
    var query = {
        "login.username":	req.params.username
    };

    console.log("query:" + JSON.stringify(query));
    
    modelUsuario.findOne(query, function (err, usuario) {
        if (err) {
            console.error(err);
            response.houveErro = 	true;
            response.mensagemErro = err;
        } else if (usuario == null) {
            // usuário não existe na bd
            var mensagem = "Usuário não existe.";
            console.error(mensagem);
            response.houveErro = 	true;
            response.mensagemErro = mensagem;
        } else {
            usuario.login.senha = (req.body.usuario.login.senha !== "") ? req.body.usuario.login.senha : usuario.login.senha;
            usuario.nome = (req.body.usuario.nome !== "") ? req.body.usuario.nome : usuario.nome ;
            usuario.dataNascimento = (req.body.usuario.dataNascimento !== "") ? req.body.usuario.dataNascimento : usuario.dataNascimento;
            usuario.sexo = (req.body.usuario.sexo !== "") ? req.body.usuario.sexo : usuario.sexo;
            
            var modified_user = {
                "login":{
                    "username": usuario.login.username, 
                    "senha": usuario.login.senha
                },
                "nome": usuario.nome,
                "dataNascimento": usuario.dataNascimento,
                "sexo": usuario.sexo,
                "moderador": usuario.moderador                
            }
            
            modelUsuario.findOneAndUpdate(query, modified_user, function(err, updatedUser){
                if(err){
                    console.error(err);
                    response.houveErro = true;
                    response.mensagemErro = err;
                } 
            });
        }
        res.send(response);
    });
});

/*Encerramento de sessão do usuário */
router.delete('/autentica', function(req, res, next) {
    console.log("DELETE /usuarios");
	
	var response = {
		"houveErro":              	false,
		"mensagemErro":           		""
	};
    
    if(checaAutenticacao(req, res) != 'unauthorized') {
        res.clearCookie('autenticacaoUsuario');	 // remove cookie no cliente
        res.send(response);
    } else {
        response.houveErro = true;
        response.mensagemErro = "Usuário não autenticado"
        res.send(response);
        return;
    } 
});

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
