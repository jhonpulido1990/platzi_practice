// variables
var a; // declaracion
var b = 'b'; // declaracion / asignacion
b = 'bb' // re-asignar
var a = 'aa' // re-declaracion

// global scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'colombia'; //evitar no declarar la varible (var, let const)
    console.log(country)
}

countries()
console.log(country)
