var ModelFilme = require('../../models/model_filme');

exports.create = function() {

		console.log("estou no mock");
		ModelFilme.deleteMany();

		var rei_leao = new ModelFilme({"titulo": "O Rei Leão","ano": 0, "diretor": "","elenco": "","comentarios": [],"imagens": [""]});
		var rei_artur = new ModelFilme({"titulo": "Rei Arthur", "ano": 0, "diretor": "","elenco": "","comentarios": [],"imagens": [""]});
		var vingadores = new ModelFilme({"titulo": "Vingadores","ano": 0, "diretor": "","elenco": "","comentarios": [],"imagens": [""]});
		var harry_potter = new ModelFilme({"titulo": "Harry Potter","ano": 0, "diretor": "","elenco": "","comentarios": [],"imagens": [""]});
		var esq = new ModelFilme({"titulo": "Esquceram de Mim","ano": 0, "diretor": "","elenco": "","comentarios": [],"imagens": [""]});				



		rei_leao.findOneAndUpdate(function (err, filme) {});
		rei_artur.findOneAndUpdate(function (err, filme) {});

		vingadores.findOneAndUpdate(function (err, filme) {});		
		harry_potter.findOneAndUpdate(function (err, filme) {});
		
		esq.findOneAndUpdate(function (err, filme) {});			
		

};
