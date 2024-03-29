const anotherfuntion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('resolve sucessfull');
    } else {
      reject('error reject');
    }
  })
}

anotherfuntion()
  .then(resolve => console.log(resolve))
  .catch(err => console.log(err));

/*
Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud.

Cómo utilizar las promesas
Solamente ten presente que la clase Promise y sus métodos then y catch fueron añadidos en ES6. Esto resuelve un problema del manejo del asincronismo con callbacks, llamado Callback Hell.

El argumento de la clase Promise es una función que recibe dos parámetros:

resolve: cuando la promesa es resuelta.
reject: cuando la promesa es rechazada.
Puedes utilizar cualquier nombre, siempre y cuando sepas su funcionamiento.

const promesa = () => {
  return new Promise((resolve, reject) => {
    if (something) {
      //true o false
      resolve("Se ha resuelto la promesa")
    } else {
      reject("Se ha rechazado la promesa")
    }
  })
}

promesa()
  .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
  .catch(error => console.log(error)) //En caso que se ejecute reject
Cursos para entender el asincronismo en JavaScript
Si aún no sabes en qué consiste el asincronismo, no te preocupes, existen cursos completos de este tema.

Curso de JavaScript Engine (V8) y el Navegador
Curso de Asincronismo con JavaScript
Contribución creada por Andrés Guano (Platzi Contributor).
*/
