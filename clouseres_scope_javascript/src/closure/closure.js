function greeting() {
    let userName = 'oscar';

    function displayUserName() {
        return `Hola ${userName}`;
    }
    return displayUserName;
}

const saludo = greeting();
console.log(saludo)
console.log(saludo())


/*function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins
    console.log(`Moneybox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);*/


function moneyBox() {
    let saveCoins = 0;
    function countcoins(coins) {
        saveCoins += coins
        console.log(`Moneybox: $${saveCoins}`);
    }
    return countcoins;
}

const mymone = moneyBox();
mymone(5);
mymone(5);
mymone(15);

function createPetList() {
    // Tu código aquí 👈
    list = [];
    return function pet(name) {
        if (name !== undefined) {
            list.push(name)
        }
        else
            return list
    }
}

const myPetList = createPetList();

console.log(myPetList("michi"))

console.log(myPetList("firulais"))

console.log(myPetList())