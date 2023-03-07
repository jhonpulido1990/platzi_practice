// objeto natalia

const natalia = {
  // atributos
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "curso definitivo de HTML y CSS",
    "curso practico de HTML y CSS"
  ],
  // metodos
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};

// prototipos

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  /* this.aprobarCurso = function (nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
  } */
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
};

// instancia

const juanita = new Student("juanita", 15, [
  "curso de introduccion a la produccion de videojuegos",
  "curso de creacion de personajes"
])
// prototipos con la sintaxis de clase

class Student2 {
  constructor({ name, age, email, cursosAprobados }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = []
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito)
  }
}


const miguelito = new Student2({
  email: "miguel@platzi.com",
  name: "miguel",
  age: 28,
})