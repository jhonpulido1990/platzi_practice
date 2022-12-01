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
  .catch(err => console.log(err))
  .finally(() => console.log('terminamos'));

  /*
  1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

const generador = anotherGenerator()
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))
Cómo utilizar for await
De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async.

El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.

async function forAwait() {
  const nombres = ["Alexa", "Oscar", "David"]
  for await (let valor of nombres) {
    console.log(valor)
  }
}

forAwait()
Cursos para entender el asincronismo en JavaScript
Si aún no sabes en qué consiste el asincronismo, no te preocupes, existen cursos completos de este tema.

Curso de JavaScript Engine (V8) y el Navegador
Curso de Asincronismo con JavaScrip
  */