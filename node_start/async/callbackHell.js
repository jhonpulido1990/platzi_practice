function soyAsincrona(nombre, minhaCallback) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        minhaCallback(nombre);
    }, 1500)
}

function hablar(callbackHablar) {
    setTimeout (function () {
        console.log('bla bla bla ...');
        callbackHablar();
    }, 1000)
}

function adios(nombre, otrocallback) {
    setTimeout(function () {
        console.log('Adios '+nombre);
        otrocallback();
    }, 1000);
}

function conversaCION(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
        conversaCION(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

// --

console.log('iniciandi proceso ....')
soyAsincrona('jhon', function (nombre) {
    conversaCION(nombre, 3 , function() {
        console.log('proceso terminado ...')
    } )
})
/* soyAsincrona('jhon', function (nombre) {
    adios(nombre, function() {
        console.log('terminando proceso ...')
    })
}); */
