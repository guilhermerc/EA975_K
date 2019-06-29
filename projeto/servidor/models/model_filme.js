var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schemaFilme = new Schema({nickname: String});
var modelFilme = mongoose.model('filme', schemaFilme);

module.exports = modelFilme;
