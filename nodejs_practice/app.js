/* 1 seg = 1000 mlseg */

function mostrarTema(tema) {
  console.log(`estoy aprendiendo ${tema}`);
}

function suma(a, b) {
  console.log(a + b);
}
/* 
setTimeout(mostrarTema, 3000, 'nodejs');
setTimeout(suma, 10000, 4, 5);
 */
/* setimmediate */

console.log('antes de setImediate');
setImmediate(mostrarTema, 'nodejs');
console.log('despues de setimmediate');
