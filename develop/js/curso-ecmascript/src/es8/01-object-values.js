const country = {MX: 'mexico', CO: 'colombia', CL: 'chile', PE: 'peru'};

console.log(Object.values(country));

/*
Los métodos de transformación de objetos a arrays sirven para obtener la información de las propiedades, sus valores o ambas.

Obtener los pares de valor de un objeto en un array
Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.entries(usuario) 
[
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
]  

Obtener las propiedades de un objeto en un array
Object.keys() devuelve un array con las propiedades (keys) del objeto enviado como argumento.

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.keys(usuario) 
// [ 'name', 'email', 'age' ]
Obtener los valores de un objeto en un array
Object.values() devuelve un array con los valores de cada propiedad del objeto enviado como argumento.

const usuario = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23
}

Object.values(usuario) 
// [ 'Andres', 'andres@correo.com', 23 ]
Contribución creada por Andrés Guano (Platzi Contributor).
*/
