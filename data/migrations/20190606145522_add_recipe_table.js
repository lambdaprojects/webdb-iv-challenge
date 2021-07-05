exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe", tbl => {
    tbl.increments();
    tbl
      .string("name", 255)
      .notNullable()
      .unique();
    tbl
      .integer("dish_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dish")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl.text("instructions").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe");
};
