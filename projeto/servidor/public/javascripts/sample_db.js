var modelFilme = require('../../models/model_filme');

exports.create = function() {

	console.log("Inserindo filmes na UMDB");
	modelFilme.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Remoção de todo conteúdo da collection filmes');
        }
    });

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
		"id": "CHE",
		"titulo": 	"O Rei Leão",
		"diretores": 	[
			{"nome":	"Mufasa"},
			{"nome":	"SEGREDO"}
		],
		"ano": 2019,
		"elenco": [
			{"nome": 	"Timão"},
			{"nome": 	"Pumba"}
		],
		"sinopse": "O CARA É UM LEÃO E É REI",
		"nota":	0,
		"criticas": []
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
}
