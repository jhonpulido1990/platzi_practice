const entries = new Map([['name', 'oscar'], ['age', 32]]);
console.log(entries);
console.log(Object.fromEntries(entries));

/*
Las siguientes características de ES10 o ES2019 que aprenderás son: parámetro opcional de catch y un método para tranformar arrays a objetos

Parámetro opcional de catch
El parámetro opcional de catch permite omitir el error si es necesario.

try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}

try {
  // Manejar el código
} catch {
  // Manejar el error sin el parámetro.
}
Aunque siempre es recomendable manejar el error como parámetro, ya que tiene más información del problema.

Cómo transformar un array de arrays en un objeto
El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].

Se considera la operación inversa de Object.entries().

const arrayEntries = [
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
] 

const usuario = Object.fromEntries(arrayEntries) 

console.log(usuario)
 {
  name: 'Andres',
  email: 'andres@correo.com',
  age: 23
}

Contribución creada por Andrés Guano (Platzi Contributor).

*/