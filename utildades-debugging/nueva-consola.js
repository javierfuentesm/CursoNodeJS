const { Writable } = require("stream");

const writableStreamLog = new Writable({
  write(chunk, encoding, callback) {
      const now = newDate().toISOString().replace(/T/, ' ').replace(/\..+/, '');
      process.stdout.write('----------------------------------------\n');
      process.stdout.write('------- Escuela de Javascript ----------\n');
      process.stdout.write(`------- LOG ${now} --------\n`);
      process.stdout.write(`\x1b[32m${chunk.toString()}\x1b[0m`);
      process.stdout.write('----------------------------------------\n\n');
      callback();
  }
});

const writableStreamError = new Writable({
    write(chunk, encoding, callback) {
        const now = newDate().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        process.stdout.write('----------------------------------------\n');
        process.stdout.write('------- Escuela de Javascript ----------\n');
        process.stdout.write(`------ ERROR ${now} -------\n`);
        process.stdout.write(`\x1b[31m${chunk.toString()}\x1b[0m`);
        process.stdout.write('----------------------------------------\n\n');
        callback();
    }
});

const ej_console = new console.Console(writableStreamLog, writableStreamError);
ej_console.log('esto es un log');
ej_console.error('esto es un error');