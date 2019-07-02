var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schemaFilme = new Schema(
{
	"id": String,
	"titulo": String,
	"ano": Number,
	"diretor": String,
	"elenco": String,
   "comentarios": [{"usurname": String, "data": String, "texto": String}],
	"imagens": [String]
});

var modelFilme = mongoose.model('filme', schemaFilme);

module.exports = modelFilme;
