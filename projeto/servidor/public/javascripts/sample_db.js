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
		"id": 0,
		"titulo": 	"Vingadores",
		"diretores": 	[
			{"nome": "Deus"}
		],
		"ano": 2019,
		"elenco": [
			{"nome": 	"Robert Downey Jr."},
			{"nome": 	"Chris Evans"}
		],
		"criticas": [
			{
				"username": 	"guilherme",
				"data": 		"00/00/0000",
				"comentario": "Oloquinho meu",
				"nota": 2
			},
			{
				"username": 	"marcelo",
				"data": 		"11/11/1111",
				"comentario": "Um grande pedaço de merda",
				"nota": 10
			}
		]
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});

	new modelFilme({
		"id": 0,
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
		"criticas": [
			{
				"username": 	"guilherme",
				"data": 		"00/00/0000",
				"comentario": 	"Gostei",
				"nota": 2
			},
			{
				"username": 	"marcelo",
				"data": 		"11/11/1994",
				"comentario": 	"Esperando live action desde 1994",
				"nota": 10
			}
		]
	}).save(function (err, filme) {
		if(err)
			console.log("Erro na inclusão de um filme na BD!");
	});
}
