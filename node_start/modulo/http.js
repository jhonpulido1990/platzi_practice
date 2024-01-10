const http = require('http');

http.createServer(router).listen(3000);

function router (req, res) {
    console.log('Nueva peticion ');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('hola que tal');
            res.end();
            break;
        default:
            res.write('error 404: no se lo que quieres');
            res.end()
    }

/*     res.writeHead(201, { 'content-type': 'text/plain' })

    res.write(' hola se utilizar http de nodejs')

    res.end(); */
}

console.log('Escuchando en el puerto 3000')
