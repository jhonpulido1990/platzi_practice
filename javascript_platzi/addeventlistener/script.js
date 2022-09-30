const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const presult = document.querySelector('#result');

btn.addEventListener('click', btnonclick)

function btnonclick(){
    console.log('escuchando eventos');
    console.log(Number(input1.value) + Number(input2.value));
    const suma = Number(input1.value) + Number(input2.value);
    presult.innerText = "Resultado: " + suma;
}
