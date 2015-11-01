var express = require('express');

 // instanciar
 var app = express();

 // ruteo
 app.get('/', function(req, res){
 res.sendfile(__dirname + '/public/mipagina.html');
 });
 

 // escuchar
 app.listen(3000);

 console.log("Servidor Express escuchando en modo %s", app.settings.env);
