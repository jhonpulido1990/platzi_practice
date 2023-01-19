iconsole.log(nombre) // undefined
var nombre = "Andres" 

// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"

if (true){
  var saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
console.log(despedida)

var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined

console.log(saludar())

function saludar() {
    return "Hola"
}


// Hoisting
function saludar() {
    return "Hola"
}

console.log(saludar()) // "Hola"


function scope() {
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined

    var nombre = "Andres"
    var edad = 20
    for (var i = 0; i < 6; i++) {
        //...
    }
}

function scope() {
    var nombre = undefined
    var edad = undefined
    var i = undefined

    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined

    nombre = "Andres"
    edad = 20
    for (i = 0; i < 6; i++) {

        //
    }
}


console.log(saludar())

var saludar = function saludar() {
    return "hola"
}

var saludar = undefined

console.log(saludar()) // TypeError: saludar is not a function

saludar = function saludar() {
    return "hola"
}


console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"

/*
Buenas prácticas para usar hoisting
No utilices var en las declaraciones de variables.
Escribe primero las funciones y luego su invocación.
Contribución creada por Andrés Guano.
*/
