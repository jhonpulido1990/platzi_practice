const fnasync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 200)
      : reject(new Error('error'));
  })
}

const anotherfuntion = async () => {
  const something = fnasync();
  console.log(something);
  console.log('Hello');
}

console.log('Before');
anotherfuntion();
console.log('after');

/*
ES8: funciones asíncronas
21/35

RECURSOS
MARCADORES
En ECMAScript 2017 o ES8 fue añadida una nueva forma de manejar el asincronismo en JavaScript mediante funciones asíncronas.

Cómo utilizar funciones asíncronas
La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.

async function asyncFunction () {...}

const asyncFunction = async () => { ... } 
La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.

async function asyncFunction () {
  try {
    const response = await promesa()
    return response
  } catch (error) {
    return error
  }
}
¿Cuál es la mejor forma de manejar promesas, then o async / await? Ambas son muy útiles, manejar ambas te hará un mejor desarrollador.

Curso de Asincronismo con JavaScript
Contribución creada por Andrés Guano (Platzi Contributor).
*/
