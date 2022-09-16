# Test de JavaScript

## Variables y operaciones

### Responde las siguientes preguntas

1. ¿Qué es una variable y para qué sirve?

    * representacion de un espacio de memoria y nos sirve para almacenar o guardar cualquier tipo de dato

2. ¿Cuál es la diferencia entre declarar e inicializar una variable?

    * **Declara** es darle un nombre al espacio de memoria a reservar

    * **inicializar** es darle un valor inicial al espacio de memoria

3. ¿Cuál es la diferencia entre sumar números y concatenar strings?

    * la suma de numeros me entrga un valor total, y la concatenacion une dos variables

4. ¿Cuál operador me permite sumar o concatenar?

    * con el operador +

### Determina el nombre y tipo de dato para almacenar en variables la siguiente información

| Nombre | Typo de dato |
|--------|--------------|
| Nombre | string |
| Apellido | string |
| Nombre de usuario en Platzi | string |
| Edad | integer |
| Correo electrónico | string |
| Mayor de edad | boolean |
| Dinero ahorrado | integer |
| Deudas | integer |

### Traduce a código JavaScript las variables del ejemplo anterior

* let Nombre = ""
* let Apellido = ""
* let Usuario_Platzi = ""
* let Edad = 0
* let Correo_electrónico = ""
* let Mayor_edad = 0
* let Dinero_ahorrado = 0
* let Deudas = 0

### Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior

* let Nombre = "jhon"
* let Apellido = "pulido"
* let All_name = Nombre + " " + Apellido
* let Dinero_ahorrado = 500000
* let Deudas = 250000
* let total = Dinero_ahorrado - Deudas
* console.log(\`${All_name}\`)
* console.log(\`${total}\`)

## Funciones

1. ¿Qué es una función?

    * Una función en JavaScript es similar a un procedimiento (un conjunto de instrucciones que realiza una tarea o calcula un valor), debe tomar alguna entrada y devolver una salida donde hay alguna relación entre la entrada y la salida.

2. ¿Cuándo me sirve usar una función en mi código?

    * cuando requier realizar varias operaciones u operaciones complejas

3. ¿Cuál es la diferencia entre parámetros y argumentos de una función?

    * **parametro**: representacion simbolica de un valor
    * **argumento**: el valor

### Convierte el siguiente código en una función

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

function presentacion(name, lastname, nickname) {
    console.log("Mi nombre es " + name + " " + lastname + ", pero prefiero que me digas " + nickname + ".");
};
presentacion(name, lastname, nickname);

## Condicionales

1. ¿Qué es un condicional?

    * es una condición para discernir entre una opción u otra

2. ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    * **if**: Una condición a probar, puesta dentro de los paréntesis (típicamente "¿es este valor mayor que este otro valor?", o "¿existe este valor?"), de este retorna un valor true o false (verdadero o falso).
    * **else**: Otro conjunto de llaves, dentro de las cuales tendremos otro código puede ser cualquier código que deseemos, y sólo se ejecutará si la condición no es true.
    * **switch**: seguida por un conjunto de paréntesis, una expresión o valor dentro de los paréntesis.
    * **case**: seguida de una elección con la expresión / valor que podría ser, seguido de dos puntos.
    * **break**: seguida de un punto y coma. Si la elección previa coincide con la expresión / valor, el explorador dejará de ejecutar el bloque de código aquí, y continuará a la siguiente línea de código.
    * **default**: seguido exactamente del mismo patrón de código que en los casos anteriores , excepto que el valor predeterminado no tiene opciónes después de él, y no es necesario que se use break porque no hay nada que ejecutar después de este bloque de todas formas.

3. ¿Puedo combinar funciones y condicionales?

    * si

4. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if

    ```const tipoDeSuscripcion = "Basic";

    switch (tipoDeSuscripcion) {
       case "Free":
           console.log("Solo puedes tomar los cursos gratis");
           break;
       case "Basic":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
           break;
       case "Expert":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
           break;
       case "ExpertPlus":
           console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
           break;
    }

    solucion:

    if (tipoDeSuscripcion === "Free") {
           console.log("Solo puedes tomar los cursos gratis");
        } else if (tipoDeSuscripcion === "Basic") {
           console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        } else if (tipoDeSuscripcion === "Expert") {
           console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        } else if (tipoDeSuscripcion === "ExpertPlus") {
           console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }```

5. comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

    ```if (tipoDeSuscripcion === "Free") {
           console.log("Solo puedes tomar los cursos gratis");
        }
    if (tipoDeSuscripcion === "Basic") {
           console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }
    if (tipoDeSuscripcion === "Expert") {
           console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }
    if (tipoDeSuscripcion === "ExpertPlus") {
           console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }```

## Ciclos

### Responder las siguientes preguntas

1. ¿Qué es un ciclo?:

    son una forma rápida y sencilla de hacer algo repetidamente.

2. ¿Qué tipos de ciclos existen en JavaScript?

    * 2.1. [Declaración for](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaracion_for).
    * 2.2. [Declaración do...while](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaracion_do...while).
    * 2.3. [Declaración while](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaracion_while).
    * 2.4. [Declaración labeled](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaracion_labeled).
    * 2.5. [Declaración break](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaracion_break).
    * 2.6. [Declaración continue](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaracion_continue).
    * 2.7. [Declaración for...in](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaracion_for...in).
    * 2.8. [Declaración for...of](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaracion_for...of).

3. ¿Qué es un ciclo infinito y por qué es un problema?

    * Un bucle infinito es una condición que hace que un programa de computadora continúe ejecutando un comando sin fin.

4. ¿Puedo mezclar ciclos y condicionales?

    * si

### Replica el comportamiento de los siguientes ciclos for utilizando ciclos while

* ```for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    }

    for (let i = 10; i >= 2; i--) {
        console.log("El valor de i es: " + i);
    ```

#### solucion

* ```let i = 0;

    while(i < 5){
        console.log("El valor de i es: " + i);
        i++;
    }

    let i = 10;

    while(i >= 2){
        console.log("El valor de i es: " + i);
        i--;
    }```

### Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar

* ```while(true){
        let question = prompt("cuánto es 2 + 2")
        if (question === 4){
            alert("felicitaciones!")
            break;
        }
        if (question !== 4){
            alert("sorry!")
        }
    }```

## Listas

### Respond las siguientes preguntas

1. ¿Qué es un array?

    Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables.

2. ¿Qué es un objeto?

    Es un tipo de dato en JavaScript en donde podemos declarar varios títulos y sus respectivos valores. Incluso hasta pueden ser considerados listas.

3. ¿Cuándo es mejor usar objetos o arrays?

    Depende de la situación. Ya que un array se usa cuando solo quieres tener una lista de productos, por ejemplo. Pero un objeto se usa cuando quieres saber el producto mas otros datos en relacion al producto. En lo particular, una buena practica es usar un array de objetos.

4. ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

    En los objetos no puede haber arrays, pero si puede haber arrays donde dentro haya objetos.

### función que pueda recibir cualquier array como parámetro e imprima su primer elemento

1. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

* ```var myArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

    function firstElement(ofThisArray){
        console.log(ofThisArray[0]);
    }

    firstElement(myArray);```

### una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno

* ```var myArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

    function allElements(ofThisArray){
        ofThisArray.forEach(item => {
        console.log(item)
        })
    }

    allElements(myArray)```

### Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo)

* ```var myObject = {product: "Buzz Lightyear", price: 43, category: "toys"}

    function allElements(ofThisObject){
        let objectValues = Object.values(myObject)
        objectValues.forEach(item => {
        console.log(item)
        })
    }

    allElements(myObject);```
