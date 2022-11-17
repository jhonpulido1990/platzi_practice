var lastname = "david";
lastname = "oscar";
console.log(lastname);

let fruit = "apple";
fruit = "kiwi";
console.log(fruit);

const animal = "dog";
animal = "cat"; // no se puede realizar esta accion por que es una variable constante
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = "apple";
    let fruit2 = "kiwi";
    const fruit3 = "banana"
  }
  console.log(fruit1); // funtion scope
  console.log(fruit2); // block scope
  console.log(fruit3); // block scope
}

fruits();
