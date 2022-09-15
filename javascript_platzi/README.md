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
