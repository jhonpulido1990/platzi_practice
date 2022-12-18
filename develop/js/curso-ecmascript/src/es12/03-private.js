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
  // metodos privado
  #speak() {
    return 'Hello!'
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
};

const bebeloper1 = new OtherUser('Camilo', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);
