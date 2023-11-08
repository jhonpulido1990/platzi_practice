function saludar(nombre) {
  return `hola cabezon ${nombre}`;
}

function holamundo() {
  return "hola mundo cruel";
}

/* module.exports.saludar = saludar;
module.exports.holamundo = holamundo; */

module.exports = {
  saludar: saludar,
  holamundo: holamundo,
}
