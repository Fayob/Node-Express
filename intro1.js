const { create } = require("domain");
const http = require("http");
const server = http.createServer((req, res) => {
  res.write = "This is my first Server";
  res.end;
});

server.listen(3000);
