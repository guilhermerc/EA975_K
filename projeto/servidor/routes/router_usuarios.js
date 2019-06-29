var express = require('express');
var modelUsuario = require('../models/model_usuario');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send({titulo: "Avengers", ano: 2019});
});

module.exports = router;
