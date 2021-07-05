const express = require("express");
const dishRouter = require("./data/routers/dishRouter.js");
const recipeRouter = require("./data/routers/recipeRouter.js");
const ingredientRouter = require("./data/routers/ingredientRouter.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h3>You have reached the default page of API Server</h3>`);
});

server.use("/api/dishes", dishRouter);
server.use("/api/recipes", recipeRouter);
server.use("/api/ingredients", ingredientRouter);
module.exports = server;
