var modelFilme = require('../../models/model_filme');

exports.create = function() {
		console.log("Inserindo um filme pseudoaleatório na UMDB");
		modelFilme.deleteMany();
		var filme = new modelFilme({
			"id": 0,
			"titulo": 	"O Rei Leão",
			"diretor": 	"Segredo",
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
		});
		filme.save(function (err, filme) {
			if(err)
				console.log("ERROU!");
		});
};
