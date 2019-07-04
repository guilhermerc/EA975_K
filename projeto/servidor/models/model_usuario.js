var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schemaUsuario = new Schema({
	login: {
        username:   String,
        senha:      String
    },
    nome:           String,
    dataNascimento: String,
	sexo:           String,
    moderador:      Boolean
});

module.exports = mongoose.model('usuario', schemaUsuario);
