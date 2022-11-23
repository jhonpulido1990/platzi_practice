export function* getId() {
    let lastId = 1;
    while (true) {
        yield lastId++;
    }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
