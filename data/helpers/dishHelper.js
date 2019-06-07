const db = require("../dbconfig.js");
const knex = require("knex")("../dbconfig.js");

module.exports = {
  getDishes,
  getDish,
  getRecipeForDish,
  addDish,
  getRecipeForDishById
};

function getDishes() {
  return db("dish");
}

function getDish(id) {
  return db
    .select(["dish.name"])
    .from("dish")
    .where({ id });
}

function getRecipeForDish(id) {
  return db
    .select(["recipe.name"])
    .from("recipe")
    .where("dish_id", id);
}

function addDish(dish) {
  return db("dish").insert(dish);
}

function getRecipeForDishById(id) {
  return db
    .select(["dish.name", knex.raw("GROUP_CONCAT(recipe.name) AS RECIPES")])
    .from("dish")
    .join("recipe", "dish.id", "recipe.dish_id")
    .where("dish.id", id);
}
