exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredient", tbl => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipe")
      //.onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredient")
      //.onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .float("quantity")
      .notNullable()
      .unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredient");
};
