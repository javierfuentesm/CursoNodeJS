const fs = require("fs");

fs.copyFile('naranja.txt','limon.txt',err => err ? console.log(err):console.log('No hubo error'))