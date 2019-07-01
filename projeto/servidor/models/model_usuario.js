var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/UMDB', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("conectamos ao database");

});

var schemaUsuario = new mongoose.Schema(
{
	"nome": String,
	"username": String,
	"dataNascimento": String,
	"sexo": String,
	"fotoPerfil": String
});


module.exports = mongoose.model('usuario', schemaUsuario);
