const express = require("express");

const router = express.Router();

const dishHelper = require("../helpers/dishHelper.js");

router.get("/", async (req, res) => {
  try {
    const dishes = await dishHelper.getDishes();
    res.status(201).json(dishes);
  } catch (error) {
    console.log(":: ERROR ::");
    res
      .status(500)
      .json({ Message: "There was an error displaying the dishes." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    // const dishName = await dishHelper.getDish(req.params.id);
    // const dishRecipes = await dishHelper.getRecipeForDish(req.params.id);
    // const dish = {
    //   dish: dishName[0].name,
    //   recipes: dishRecipes.map(dishRecipe => {
    //     return dishRecipe.name;
    //   })
    // };
    const dish = await dishHelper.getRecipeForDishById(req.params.id);
    res.status(201).json(dish);
  } catch (error) {
    console.log(":: ERROR ::" + error);
    res.status(500).json({
      Message: "There was an error displaying the dishes and recipes."
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const dish = await dishHelper.addDish(req.body);
    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json({ Message: "There was an error adding the dish." });
  }
});

module.exports = router;
