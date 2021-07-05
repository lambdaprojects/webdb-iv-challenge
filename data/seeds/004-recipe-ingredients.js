exports.seed = function(knex, Promise) {
  return knex("recipe_ingredient")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredient").insert([
        { recipe_id: "1", ingredient_id: "1", quantity: "1" },
        { recipe_id: "1", ingredient_id: "2", quantity: "1" },
        { recipe_id: "1", ingredient_id: "3", quantity: "0.25" },
        { recipe_id: "1", ingredient_id: "7", quantity: "0.25" },
        { recipe_id: "1", ingredient_id: "8", quantity: ".10" },
        { recipe_id: "6", ingredient_id: "17", quantity: ".200" },
        { recipe_id: "6", ingredient_id: "18", quantity: ".10" },
        { recipe_id: "6", ingredient_id: "19", quantity: ".10" },
        { recipe_id: "6", ingredient_id: "20", quantity: ".20" }
      ]);
    });
};
