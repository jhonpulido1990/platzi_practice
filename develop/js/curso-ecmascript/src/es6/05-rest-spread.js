// array destructuring

let fruits = ["apple", "banana"];

let [a, b] = fruits;
console.log(a, b);

// object destructuring

let user = { username: "Jhon", age: 32 };
let { username, age } = user;
console.log(username, age)

// spread operator

let person = { name: "jhon", age: 32 };
let country = "mx"
let data = { id: 1, ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 2, 3, 4, 5);
