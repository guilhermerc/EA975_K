var mongoose = require("mongoose");

conn1 = mongoose.createConnection('mongodb://localhost:27017/UMDB', {useNewUrlParser: true});

var Schema = mongoose.Schema;

var schemaFilme = new Schema({
    "titulo": String,
    "ano": Number,
	"diretor": String,
	"elenco": String,
    "comentarios": [{"usurname": String, "data": String, "texto": String}],
	"imagens": [String]
	
});

module.exports = conn1.model('filme', schemaFilme);


var schemaUsuario = new Schema({
	"nome": String,
	"username": String,
	"dataNascimento": String,
	"sexo": String,
	"fotoPerfil": String
});

module.exports = conn1.model('usuario', schemaUsuario);
