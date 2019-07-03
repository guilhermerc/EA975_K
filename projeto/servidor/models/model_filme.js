var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schemaFilme = new Schema(
{
	"id": String,
	"titulo": String,
	"ano": Number,
	"diretor": String,
	"elenco": String,
	"criticas": [{"username": String, "data": String, "comentario": String, "nota": Number}],
	"imagens": [String]
});

var modelFilme = mongoose.model('filme', schemaFilme);

module.exports = modelFilme;
