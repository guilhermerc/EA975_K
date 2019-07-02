var ModelFilme = require('../../models/model_filme');

exports.create = function() {

		console.log("estou no mock");
		ModelFilme.deleteMany();

		var rei_leao = 		new ModelFilme({"id": "leao1323", "titulo": "O Rei Leão","ano": 0, "diretor": "","elenco": "","comentarios": [],"imagens": [""]});
		var rei_artur = 		new ModelFilme({"id": "rei art 123w","titulo": "Rei Arthur", "ano": 0, "diretor": "","elenco": "","comentarios": [],"imagens": [""]});
		var vingadores = 		new ModelFilme({"id": "vingativos123","titulo": "Vingadores","ano": 0, "diretor": "","elenco": "","comentarios": [],"imagens": [""]});
		var harry_potter = 	new ModelFilme({"id": "harry potter 8","titulo": "Harry Potter","ano": 0, "diretor": "","elenco": "","comentarios": [],"imagens": [""]});
		var esq = 				new ModelFilme({"id": "esqueceramde min132","titulo": "Esquceram de Mim","ano": 0, "diretor": "","elenco": "","comentarios": [],"imagens": [""]});



		rei_leao.save(function (err, filme) {});
		rei_artur.save(function (err, filme) {});

		vingadores.save(function (err, filme) {});
		harry_potter.save(function (err, filme) {});

		esq.save(function (err, filme) {});


};
