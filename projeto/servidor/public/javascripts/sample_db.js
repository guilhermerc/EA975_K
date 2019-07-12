var modelFilme = require('../../models/model_filme');
//var modelUsuario = require('../../models/model_usuario');

exports.create = function() {

	modelFilme.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Remoção de todo conteúdo da collection filmes');
        }
    });

	/*
	modelUsuario.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Remoção de todo conteúdo da collection usuários');
        }
    });
	*/

	console.log("Inserindo filmes na UMDB");

	new modelFilme({
		"id": 		"0000",
		"titulo":	"The Avengers",
		"diretores": 	[
			{"nome": "Joss Whedon"}
		],
		"ano":		2012,
		"elenco": [
			{"nome": 	"Robert Downey Jr."},
			{"nome": 	"Chris Evans"},
			{"nome": 	"Scarlett Johansson"}
		],
		"sinopse":	"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
		"nota":		0,
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
		"id": 		"0002",
		"titulo":	"Pulp Fiction",
		"diretores": 	[
			{"nome":	"Chris Columbus"}
		],
		"ano": 		1994,
		"elenco": [
			{"nome": 	"John Travolta"},
			{"nome": 	"Uma Thurman"},
			{"nome": 	"Samuel L. Jackson"}
		],
		"sinopse": "The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
		"nota":		0,
		"criticas":	[]
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

	new modelFilme({
		"id": 		"0003",
		"titulo":	"Lady Bird",
		"diretores": 	[
			{"nome":	"Greta Gerwig"}
		],
		"ano": 		2017,
		"elenco": [
			{"nome": 	"Saoirse Ronan"},
			{"nome": 	"Laurie Metcalf"},
			{"nome": 	"Tracy Letts"}
		],
		"sinopse": 	"In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.",
		"nota":		0,
		"criticas":	[]
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

	/*
	console.log("Inserindo usuários na UMDB");

	new modelUsuario({
		"login": {
            "username":   	"guilherme",
            "senha":      	"098765"
        },
        "nome":				"Guilherme R. C.",
        dataNascimento:  	"08/13/1995",
        sexo:            	"Masculino",
        moderador:        	true,
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

    new modelUsuario({
		"login": {
            "username":		"marcelo",
            "senha":		"123456"
        },
        "nome":				"Marcelo M. J.",
        dataNascimento:		"00/00/0000",
        sexo:				"Masculino",
        moderador:			false,
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

    new modelUsuario({
		"login": {
            "username":  	"gabriel",
            "senha":      	"098321"
        },
        "nome":          	"Gabriel S. R.",
        dataNascimento:  	"12/18/1995",
        sexo:            	"Masculino",
        moderador:        	false,
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});
	*/
}
