var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// app.get('/saludar', function(req, res) {
//     console.log("Recibí un pedido");
//     res.send('¡Hola a todos!');
// });

app.get('/saludar', function(req, res) {
    var name = req.query.name;
    res.send(`Hola ${name}`);
});

app.get('/saludar/:nombre', function(req, res) {
    var name = req.params.name;
    res.send('Hola ' + name);
});

var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});