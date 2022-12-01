const user = { username: 'jhon', age: 32, country: 'Co'};
const { username, ...values } = user;

console.log(username);
console.log(values);
