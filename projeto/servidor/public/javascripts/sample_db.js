var modelFilme = require('../../models/model_filme');

exports.create = function() {
		console.log("Inserindo um filme pseudoaleatório na UMDB");
		modelFilme.deleteMany({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log('Remoção do conteúdo da collection Filmes');
            }
        });
		
		var filme = new modelFilme({
			"id": 0,
			"titulo": 	"Vingadores",
			"diretor": 	"Deus",
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
/******************************************************************************/
		var filme2 = new modelFilme({
			"id": 0,
			"titulo": 	"O Rei Leão",
			"diretor": 	"Mufasa",
			"ano": 2019,
			"elenco": [
				{"nome": 	"Timão"},
				{"nome": 	"Pumba"}
			],
			"criticas": [
				{
					"username": 	"guilherme",
					"data": 		"00/00/0000",
					"comentario": "Gostei",
					"nota": 2
				},
				{
					"username": 	"marcelo",
					"data": 		"11/11/1994",
					"comentario": "Esperando live action desde 1994",
					"nota": 10
				}
			]
		});
		filme2.save(function (err, filme) {
			if(err)
				console.log("ERROU!");
		});
/******************************************************************************/	
};
