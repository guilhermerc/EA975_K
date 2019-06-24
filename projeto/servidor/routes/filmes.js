// Router Filmes
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send({titulo: "HP", ano: 2019});
});

router.get('/pokemon', function(req, res, next) {
  res.send({titulo: "O rei leao", ano: 2019});
});

module.exports = router;
