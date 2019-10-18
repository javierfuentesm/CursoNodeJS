const fs = require("fs");
fs.readdir(__dirname, (error, files) => {
  if (error) {
    console.log(error);
  }
  console.log(files);
});
