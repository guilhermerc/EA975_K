var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("conectamos ao database");
  //Dogao.find(function (err, kittens) {console.log(kittens);});
});

var kittySchema = new mongoose.Schema({
  name: String
});

var puppySchema = new mongoose.Schema({nickname: String});
var Dogao = mongoose.model('Cao', puppySchema);

module.exports = Dogao;
var pitoco = Dogao({nickname:"chorao"});
pitoco.save();

var Kitten = mongoose.model('Kytten', kittySchema);

var silence = new Kitten({ name: 'Abigail' });
console.log(silence.name); // 'Silence'

silence.save(function (err, fluffy) {
    if (err) return console.error(err);

  });
