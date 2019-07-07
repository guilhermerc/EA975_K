var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schemaFilme = new Schema(
{
	id: 		String,
	titulo:		String,
	diretores:	[{
		nome: String
	}],
	ano:		Number,
	elenco: 	[{
		nome: String
	}],
	sinopse: 	String,
	nota:		Number,
	criticas: 	[{
		username: 	String,
		data:		String,
		comentario: String,
		nota: 		Number
	}]
});

module.exports = mongoose.model('filme', schemaFilme);
