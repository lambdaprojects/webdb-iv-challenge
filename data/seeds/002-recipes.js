exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe").insert([
        {
          name: "Garden Salad",
          dish_id: "1",
          instructions:
            "Add cut cucumber, tomato, onion and lettuce. Sprinkle some salt and serve fresh."
        },
        {
          name: "Ceasar Salad",
          dish_id: "1",
          instructions:
            "Add cut cucumber, tomato and onion. Add ceasar dressing and serve fresh."
        },
        {
          name: "Chef's Salada",
          dish_id: "1",
          instructions:
            "Add cut cucumber, tomato, onion, brocoli, corn, carrots and peas. Spray olive oil. Sprinkle dry basil. Add sal to taste. Serve fresh."
        },
        {
          name: "Avacado Salad",
          dish_id: "1",
          instructions:
            "Add cut avocado and onion. Add salt and pepper to taste. Serve fresh."
        },
        {
          name: "Caprese Salad",
          dish_id: "1",
          instructions:
            "Add cut tomato, mozzarella cheese and basil. Sprinkle salt. Serve fresh."
        },
        {
          name: "Grandma's Panagam Recipe",
          dish_id: "2",
          instructions:
            "Dissolve jaggery in water. Add ginger powder, cardamom powder and lemon juice. Stir well and serve chill."
        },
        {
          name: "Grandma's south indian buttermilk recipe",
          dish_id: "3",
          instructions:
            "Beat curd till it forms a smooth paste and add water. Add salt, asafotida and curry leaves. Serve chill. "
        }
      ]);
    });
};
