const server = require("./server.js");

const port = 4000;

server.listen(port, function() {
  console.log(`API Server running in port ${port}`);
});
