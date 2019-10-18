const fs = require("fs");
fs.mkdir('directorio/prueba',{recursive:true},err=> err ? console.log(err):'No hubo error');
