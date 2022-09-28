const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(p)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = 'change text <br> add new line'; //convierte todo a codigo html
h1.innerText = 'other text <br> new text' //convierte todo a solo text
console.log(h1.getAttribute('class')); // imprime la lectura del atributo
h1.setAttribute('class', 'clasecita'); //modifica la class el primer campo es la clase a cambiar y la segunda por la que se va a cambiar
h1.classList.add('addclase'); // adiciona una clase
h1.classList.remove('clasecita'); // elimina una clase
