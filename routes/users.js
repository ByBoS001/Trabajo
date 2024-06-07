var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var nombre = req.query.nombre
  res.send('Hola '+nombre+' como estas?!');
});

router.post('/id', function(req, res, next) {
  console.log(req.body);
  var nombre = req.body.nombre
  res.send('Hola '+nombre+' como estas?!');
});

router.post('/suma', function(req, res, next) {
  console.log(req.body);
  var number1 = parseInt(req.body.number1);
  var number2 = parseInt(req.body.number2);

  var suma = number1+number2

  res.send('La suma de: ' +number1+ ' y '+number2+' es igual a: '+suma);
});

router.post('/conteo_consonantes', function(req, res, next){
  console.log(req.body);
  var palabra = req.body.palabra

  //contador
  var numvocales = 0
  var numconsonantes = 0
  //vocales y consonantes
  var vocales = 'aeiouAEIOU'
  var consonantes='bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
  
  //resueltado

  for (var i = 0; i < palabra.length; i++) {
    if (vocales.indexOf(palabra[i]) !== -1){
      numvocales++;
    }else if (consonantes.indexOf(palabra[i]) !== -1){
      numconsonantes++;
    }
  }

  res.send(`La palabra "${palabra}" tiene ${numvocales} vocales y ${numconsonantes} consonantes.`)

});

module.exports = router;
