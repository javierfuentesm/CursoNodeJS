const { Transform } = require("stream");

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(
      chunk
        .toString()
        .charAt(0)
        .toUpperCase()
        .concat(chunk.slice(1))
        .replace(/ +/g, "")
    );
    callback();
  }
});
process.stdin.pipe(transformStream).pipe(process.stdout);
