const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    });
}

const anotherfn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!')
}

console.log('before')
anotherfn();
console.log('after')