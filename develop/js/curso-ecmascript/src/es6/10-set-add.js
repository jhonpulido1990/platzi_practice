const list = new Set();

list.add('item 1');
list.add('item 2');
list.add('item 3');

console.log(list);
/*
Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.

Cómo utilizar los Sets
Para iniciar un Set, se debe crear una instancia de su clase a partir de un iterable. Generalmente, un iterable es un array.

const set = new Set(iterable)
Cómo manipular los Sets
Para manipular estas estructuras de datos, existen los siguientes métodos:

add(value): añade un nuevo valor.
delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
has(value): retorna un booleano si existe o no el valor dentro del Set.
clear(value): elimina todos los valores del Set.
size: retorna la cantidad de elementos del Set.
Contribución creada por Andrés Guano (Platzi Contributor).
*/
