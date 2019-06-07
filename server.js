const express = require("express");
const dishRouter = require("./data/routers/dishRouter.js");
//const studentRouter = require("./data/routers/studentRouter.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h3>You have reached the default page of API Server</h3>`);
});

server.use("/api/dishes", dishRouter);
//server.use("/api/students", studentRouter);
module.exports = server;
