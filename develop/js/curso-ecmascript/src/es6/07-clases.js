/*
declarando
class User {};
instancia de una clase
const newuser = new User();

*/
class user {
  // metodos
  greeting() {
    return 'hello!';
  }
};

const gndx = new user();

console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

class User {
  // constructor
  constructor() {
    console.log('Nuevo usuario');
  }
  greeting() {
    return 'hello!';
  }
};

const Usuario = new User();

class NewUser {
  constructor(name) {
    this.name = name;
  }
  // metodos
  speak() {
    return 'hello'
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
};

const ana = new NewUser('Ana');
console.log(ana.greeting());

class OtherUser {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  speak() {
    return 'Hello!'
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
};

const bebeloper1 = new OtherUser('Camilo', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);

/*
La palabra reservada class es una forma para crear clases y manejar la herencia en JavaScript, permitiendo resolver problemas con el paradigma de programación orientada a objetos (POO).

Estructura de las clases en JavaScript
La estructura de clases en JavaScript consiste en:

Definir la clase con la palabra reservada class, seguido del nombre (por convención se empieza con mayúscula).
La función constructora sirve para crear las variables necesarias en la instancia del objeto, a partir de los argumentos en la instancia.
Para definir atributos necesitas el contexto this, que representa la instancia del objeto.
Métodos para definir las acciones de la clase.
Para crear una instancia, deberás declarar una variable e invocar la clase con la palabra reservada new.
class Calculator {
    // Constructor
    constructor() {
        // Atributos
        this.valueA = 0
        this.valueB = 0
    }
    
    // Método
    suma(num1, num2){
        this.valueA = num1
        this.valueB = num2
        return this.valueA + this.valueB
    }
}

// Instancia
const calculadora = new Calculator()

calculadora.suma(2,2) //4
Profundiza la programación orientada a objetos
El tema de Programación Orientada a Objetos es un tema amplio, toma las siguientes cursos para entender mejor y aplicarlo de manera eficiente.

Curso de Programación Orientada a Objetos: POO
Curso Básico de Programación Orientada a Objetos con JavaScript
Curso Intermedio de Programación Orientada a Objetos en JavaScript
Contribución creada por Andrés Guano (Platzi Contributor).
*/
