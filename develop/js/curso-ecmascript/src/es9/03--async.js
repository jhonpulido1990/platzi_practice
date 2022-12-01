async function* anotherGeneration() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGeneration();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));

console.log('hola');

async function arrayofName(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayofName(['hector', 'pablo', 'fabio']);
console.log('after');
