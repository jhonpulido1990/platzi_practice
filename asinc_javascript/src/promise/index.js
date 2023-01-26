const promise = new Promise(function (resolve, reject){
    resolve('hey!')
})

const cow = 9;

const countCow = new Promise(function ( resolve, reject) {
    if (cow > 10) {
        resolve( `we have ${ cow } cows on the farm`)
    } else {
        reject('there is no cows on the farm')
    }
});

countCow.then((result) => {
    console.log(result);
}).catch((error) => console.log(error)).finally(() => console.log('Finally'))
