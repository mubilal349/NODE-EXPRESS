console.log("hello");

const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hellow bilal");
  res.end();
});

port = 5555;
server.listen(port, (req, res) => {
  console.log(`seerver is listing on port ${port}`);
});


