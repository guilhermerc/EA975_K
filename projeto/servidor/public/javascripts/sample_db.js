var modelFilme = require('../../models/model_filme');
//var modelUsuario = require('../../models/model_usuario');

exports.create = function() {

	console.log("Inserindo filmes na UMDB");
	modelFilme.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Remoção de todo conteúdo da collection filmes');
        }
    });
/*
    console.log("Inserindo usuários na UMDB");
	modelUsuario.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Remoção de todo conteúdo da collection usuários');
        }
    });*/

	new modelFilme({
		"id": "HOLA",
		"titulo": 	"Vingadores: Ultimato",
		"diretores": 	[
			{"nome": "Joe Russo"},
			{"nome": "Anthony Russo"}
		],
		"ano": 2019,
		"elenco": [
			{"nome": 	"Robert Downey Jr."},
			{"nome": 	"Scarlett Johansson"},
			{"nome": 	"Chris Evans"}
		],
		"sinopse": "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, Steve Rogers (Chris Evans) e Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.",
		"nota":	0,
		"criticas": []
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

	new modelFilme({
		"id": 		"0001",
		"titulo":	"O Rei Leão",
		"diretores": 	[
			{"nome":	"Jon Favreau"}
		],
		"ano": 		2019,
		"elenco": [
			{"nome":	"Keegan-Michael Key"},
			{"nome": 	"Donald Glover"},
			{"nome":	"Seth Rogen"}
		],
		"sinopse": 	"Traído e exilado de seu reino, o leãozinho Simba precisa descobrir como crescer e retomar seu destino como herdeiro real nas planícies da savana africana.",
		"nota":		0,
		"criticas":	[]
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

	new modelFilme({
		"id": "QUE",
		"titulo": 	"Harry Potter e a Pedra Filosofal",
		"diretores": 	[
			{"nome":	"	Chris Columbus"}
		],
		"ano": 2001,
		"elenco": [
			{"nome": 	"Daniel Radcliffe"},
			{"nome": 	"Emma Watson"},
			{"nome": 	"Rupert Grint"}
		],
		"sinopse": "EITA BRUXINHA...",
		"nota":	0,
		"criticas": []
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

  /*  new modelUsuario({
		"login": {
            "username":   "xaburao",
            "senha":      "salaminho"
        },
        "nome":          "Augusto",
        dataNascimento:  "11/08/1996",
        sexo:            "Masculino",
        moderador:        true,
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});


    new modelUsuario({
		"login": {
            "username":   "Marcelovi",
            "senha":      "love"
        },
        "nome":          "Marcelo",
        dataNascimento:  "17/05/1995",
        sexo:            "Masculino",
        moderador:        true,
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

    new modelUsuario({
		"login": {
            "username":   "Allado",
            "senha":      "Awholeneworld"
        },
        "nome":          "Guilherme",
        dataNascimento:  "13/08/1995",
        sexo:            "Masculino",
        moderador:        true,
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

    new modelUsuario({
		"login": {
            "username":   "Psycho",
            "senha":      "42earesposta"
        },
        "nome":          "Gabriel",
        dataNascimento:  "18/12/1995",
        sexo:            "Masculino",
        moderador:        true,
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

    new modelUsuario({
		"login": {
            "username":   "mimola",
            "senha":      "xenty"
        },
        "nome":          "Miguel",
        dataNascimento:  "20/12/1999",
        sexo:            "Masculino",
        moderador:        false,
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});*/
}
