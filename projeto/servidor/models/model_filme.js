var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schemaFilme = new Schema(
{
	id: 		Number,
	titulo:		String,
	diretor:	String,
	ano:		Number,
	elenco: 	[{
		nome: String
	}],
	criticas: 	[{
		username: 	String,
		data:		String,
		comentario: String,
		nota: 		Number
	}]
});

module.exports = mongoose.model('filme', schemaFilme);
