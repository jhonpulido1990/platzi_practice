/*callback*/

function sum(numb1, numb2) {
    return numb1 + numb2;
}

function calc(numb1, numb2, callback) {
    return callback(numb1, numb2)
}

console.log(calc(2, 2, sum))

/* callback 2 */
setTimeout(function () {
    console.log('hola javascript');
}, 2000)

/* callback 3 */

function gretting(name) {
    console.log(`hola ${name}`);
}

setTimeout(gretting, 5000, 'jhon')
