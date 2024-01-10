function soyAsincrona(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500)
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout (function () {
            console.log('bla bla bla ...');
            resolve(nombre);
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios '+nombre);
            resolve();
        }, 1000);
    })
}
 // -- 
console.log('iniciando el proceso ...')
soyAsincrona('jhon')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('terminado el proceso')
    })

