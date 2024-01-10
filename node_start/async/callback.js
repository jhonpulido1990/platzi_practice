function soyAsincrona(nombre, minhaCallback) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        minhaCallback(nombre);
    }, 1500)
}

function adios(nombre, otrocallback) {
    setTimeout(function () {
        console.log('Adios '+nombre);
        otrocallback();
    }, 1000);
}

console.log('iniciandi proceso ....')
soyAsincrona('jhon', function (nombre) {
    adios(nombre, function() {
        console.log('terminando proceso ...')
    })
});