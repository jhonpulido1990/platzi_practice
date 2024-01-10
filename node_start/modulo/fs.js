const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString())
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('no se ha podido escribir ', err);
        } else {
            console.log('Se ha escrito sactifactoriamente');
        }
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

/* escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log) */

/* leer(__dirname + '/archivo.txt', console.log); */

borrar(__dirname + '/archivo1.txt', console.log)
