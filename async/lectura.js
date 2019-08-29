var fs = require('fs');

var archivo = "Aca va a escribirse el archivo";

fs.readFile('texto.txt', 'utf8', function(err, resultado) {
    archivo = resultado;
    console.log(archivo);
});
