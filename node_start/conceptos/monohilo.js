console.log('hola mundo');

let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    if ( i === 5) {
        console.log('forzar error');
        var a = 3 + z;
    }
}, 1000);