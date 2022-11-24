const fnasync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 200)
      : reject(new Error('error'));
  })
}

const anotherfuntion = async () => {
  const something = fnasync();
  console.log(something);
  console.log('Hello');
}

console.log('Before');
anotherfuntion();
console.log('after');
