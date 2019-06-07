const db = require("../dbconfig.js");

module.exports = {
  find
};

function find() {
  console.log(":: IN FIND OF RECIPES ::");
  return db("recipe");
}
