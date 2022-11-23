let hello = "hello";
let world = "world";

let saludo = hello + ' ' +  world +'!';

console.log(saludo);

// Template literals
let phrase = `${hello} ${world}!`;
console.log(phrase);

// Multi-line string
let loren = "esto es un string \n" + "esto es una linea";

let loren2 = `esto es un string\nesto es una linea`;

let loren3 = `esto es una linea
esto es otra linea`;

console.log(loren);
console.log(loren2);
console.log(loren3);

/*
Las plantillas literales (template literals) consisten en crear cadenas de caracteres que puedan contener variables sin utilizar la concatenación. Esto mejora la legibilidad y la mantenibilidad del código.

Concatenación de caracteres
Antes de ES6, si querías crear una cadena larga o un mensaje elaborado, debías utilizar la concatenación. La concatenación de caracteres consiste en unir uno o varios caracteres, como si fuera una suma.

var nombre = "Andres"
var edad = 23
var mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años."

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
Esto trae varios problemas en la legibilidad y mantenibilidad del código. Se convierte cada vez más complejo en mensajes más extensos o el estar pendiente de agregar espacios antes o después de cada variable concatenada.

Cómo utilizar las plantillas literales
Las plantillas literales añadidas en ES6, se emplea el caracter acento grave ( ` ), que no es una comilla simple ( ’ ), para envolver el mensaje. Para incluir las variables se utiliza la sintaxis ${variable}.

var nombre = "Andres"
var edad = 23

var mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
De esta manera el código es más legible y que pueda mantenerse.

Plantilla multilínea
La plantilla multilínea consiste en crear mensajes que contengan varias líneas separadas entre sí, utilizando las plantillas literales. Antes de ES6, la forma de crear una plantilla multilínea era agregar \n al string.

var mensaje = "Línea 1 \n" + "línea 2"

console.log(mensaje)
// 'Línea 1
// línea 2'
Con ES6 solamente necesitas utilizar las plantillas literales.

const mensaje = `Línea 1
línea 2`

console.log(mensaje)
// 'Línea 1
// línea 2'
Contribución creada por Andrés Guano (Platzi Contributor).
*/
