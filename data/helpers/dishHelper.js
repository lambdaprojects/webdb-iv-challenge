const db = require("../dbconfig.js");
const knex = require("knex")("../dbconfig.js");

module.exports = {
  getDishes,
  getDish,
  getRecipeForDish,
  addDish,
  getRecipeForDishById,
  getDishIngredientsForRecipeId,
  getShoppingList
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

function getDishIngredientsForRecipeId(id) {
  return db
    .select([
      "recipe.name as recipe",
      "dish.name as dish",
      knex.raw("Group_concat(ingredient.name) as ingredients"),
      knex.raw("Group_concat(recipe_ingredient.quantity) as quantity")
    ])
    .from("recipe")
    .join("recipe_ingredient", "recipe.id", "recipe_ingredient.recipe_id")
    .join("ingredient", "recipe_ingredient.ingredient_id", "ingredient.id")
    .join("dish", "recipe.dish_id", "dish.id")
    .where("recipe.id", id);
}

function getShoppingList(id) {
  return db
    .select([
      "recipe.name as recipe",
      knex.raw(
        "Group_concat(ingredient.name || '-' || recipe_ingredient.quantity) as shopping_list"
      )
    ])
    .from("recipe")
    .join("recipe_ingredient", "recipe.id", "recipe_ingredient.recipe_id")
    .join("ingredient", "recipe_ingredient.ingredient_id", "ingredient.id")
    .where("recipe.id", id);
}
