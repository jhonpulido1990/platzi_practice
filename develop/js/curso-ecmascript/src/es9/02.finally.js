const anotherfuntion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('resolve sucessfull');
    } else {
      reject('error reject');
    }
  })
}

anotherfuntion()
  .then(resolve => console.log(resolve))
  .catch(err => console.log(err))
  .finally(() => console.log('terminamos'));
