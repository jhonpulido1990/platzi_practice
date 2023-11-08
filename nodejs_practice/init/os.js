const os = require('os');
const { uptime } = require('process');

console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo());
