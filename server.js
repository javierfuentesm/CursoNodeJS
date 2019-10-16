const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  res.stattusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world \n");
});
server.listen(8000);
console.log("Servidor en la url localhost:8000");
