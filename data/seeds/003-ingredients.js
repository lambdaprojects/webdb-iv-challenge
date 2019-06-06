exports.seed = function(knex, Promise) {
  return knex("ingredient")
    .truncate()
    .then(function() {
      return knex("ingredient").insert([
        { name: "Tomato" },
        { name: "Cucumber" },
        { name: "Onion" },
        { name: "Mozzarella" },
        { name: "Ceasar dressing" },
        { name: "Broccoli" },
        { name: "Lettuce" },
        { name: "Salt" },
        { name: "Dry Basil" },
        { name: "Corn" },
        { name: "Carrots" },
        { name: "Peas" },
        { name: "Olive Oil" },
        { name: "Avocado" },
        { name: "Pepper" },
        { name: "Basil" },
        { name: "Jaggery" },
        { name: "Ginger powder" },
        { name: "Cardamom powder" },
        { name: "Lemon juice" },
        { name: "curd" },
        { name: "Asafotida" },
        { name: "Curry leaves" }
      ]);
    });
};
