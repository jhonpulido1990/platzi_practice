const { exec, spawn } = require('child_process');
const { stdout } = require('process');

/* exec('ls -la', (err, stdout, sterr) => {
    if(err) {
        console.error(err)
        return false
    }
    console.log(stdout)
}) */

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', function (dato) {
    console.log(dato.toString());
})

proceso.on('exit', function() {
    console.log('el proceso termino')
})
