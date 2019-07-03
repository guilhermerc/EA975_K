var ModelFilme = require('../../models/model_filme');

exports.create = function() {

		console.log("estou no mock");
		ModelFilme.deleteMany();

		var rei_leao = 		new ModelFilme({"id": "leao1323", "titulo": "O Rei Leão",
														"ano": "2019", "diretor": "Anthony Russo, Joe Russo",
														"elenco": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
														"comentarios": [{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "marcelo", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "Gabriel", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "maiara", data: "12/12/2012", texto: "adorei, achei uma porcaria"}],
														"imagens": ["/assets/images/vingadores_0.jpg"]});
									
									
		var rei_artur = 		new ModelFilme({"id": "rei art 123w","titulo": "Rei Arthur",
														"ano": 2019, "diretor": "Anthony Russo, Joe Russo",
														"elenco": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
														"comentarios": [{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "marcelo", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "Gabriel", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "maiara", data: "12/12/2012", texto: "adorei, achei uma porcaria"}],
														"imagens": ["/assets/images/vingadores_0.jpg"]});
		
														
		var vingadores = 		new ModelFilme({"id": "vingativos123","titulo": "Vingadores",
														"ano": 2019, "diretor": "Anthony Russo, Joe Russo",
														"elenco": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
														"comentarios": [{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "marcelo", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "Gabriel", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "maiara", data: "12/12/2012", texto: "adorei, achei uma porcaria"}],
														"imagens": ["/assets/images/vingadores_0.jpg"]});
		
									
									
		var harry_potter = 	new ModelFilme({"id": "harry potter 8","titulo": "Harry Potter",
														"ano": 2019, "diretor": "Anthony Russo, Joe Russo",
														"elenco": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
														"comentarios": [{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "marcelo", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "Gabriel", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "maiara", data: "12/12/2012", texto: "adorei, achei uma porcaria"}],
														"imagens": ["/assets/images/vingadores_0.jpg"]});
		
		
		var esq = 				new ModelFilme({"id": "esqueceramde min132","titulo": "Esquceram de Mim",
														"ano": 2019, "diretor": "Anthony Russo, Joe Russo",
														"elenco": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
														"comentarios": [{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "marcelo", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "Gabriel", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "maiara", data: "12/12/2012", texto: "adorei, achei uma porcaria"}],
														"imagens": ["/assets/images/vingadores_0.jpg"]});		
		
		var piratas = 				new ModelFilme({"id": "Piratas do Caribe min132","titulo": "Piratas do Caribe",
														"ano": 2019, "diretor": "Anthony Russo, Joe Russo",
														"elenco": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
														"comentarios": [{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "marcelo", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "Gabriel", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
																				{username: "maiara", data: "12/12/2012", texto: "adorei, achei uma porcaria"}],
														"imagens": ["/assets/images/vingadores_0.jpg"]});


		piratas.save(function (err, filme) {});
		rei_leao.save(function (err, filme) {});
		rei_artur.save(function (err, filme) {});

		vingadores.save(function (err, filme) {});
		harry_potter.save(function (err, filme) {});

		esq.save(function (err, filme) {});


};

