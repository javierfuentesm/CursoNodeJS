const os = require('os');

console.log('CPU info',os.cpus());
console.log('IP address',os.networkInterfaces().en0.map(i => i.address));
console.log('Free memory',os.freemem());
console.log("Type",os.type());
console.log('SP version',os.release());
console.log('Usr info',os.userInfo());