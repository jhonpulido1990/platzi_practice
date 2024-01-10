function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

try {
    otraFuncion();
} catch (err) {
    console.error('hay un error')
    console.error(err.message)
}

