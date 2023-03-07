class Course {
  constructor({name, classes = []}){
    this._name = name;
    this.classes = classes;
  }
  get name() {
    return this._name
  }

  set name(nuevoNombre) {
    if (nuevoNombre === 'Curso Malito de Programacion Basica') {
      console.error('web... no')
    } else {
      this._name = nuevoNombre;
    }
  }
}

const cursoProgBasica = new Course({
  name: "curso gratis de programacion basica"
})

const CursoDefinitivoHTML = new Course({
  name: "Curso definitivo de html y css"
})

const CursoPracticoHTML = new Course({
  name: "curso practico definitivo de html y css"
})

class learningPaths {
  constructor({ name, coursse = [] }) {
    this.name = name;
    this.coursse = coursse;
  }
}

const escuelaWeb = new learningPaths({
  name: "Escuela de desarrollo web",
  coursse: [
    cursoProgBasica,
    CursoDefinitivoHTML,
    CursoPracticoHTML,
  ],
});
const escuelaData = new learningPaths({
  name: "Escuela de data science",
  coursse: [
    cursoProgBasica,
    "Curso databusisness",
    "curso practico dataviz"
  ],
});
const escuelaVgs = new learningPaths({
  name: "Escuela de videojuegos",
  coursse: [
    cursoProgBasica,
    "Curso de unity",
    "curso de unreal"
  ],
});

class Student10 {
  constructor({ name, email, username, twitter = undefined, instagram = undefined, facebook = undefined, approvedCourse = [], learningPaths = [] }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourse = approvedCourse;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student10({
  name: "juan DC",
  username: "juandc",
  email: "juandc@juandc.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ]
})
