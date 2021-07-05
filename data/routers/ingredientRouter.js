const express = require("express");

const router = express.Router();

const ingredientHelper = require("../helpers/ingredientHelper.js");

router.get("/", async (req, res) => {
  try {
    const ingredients = await ingredientHelper.find();
    res.status(201).json(ingredients);
  } catch (error) {
    console.log(":: ERROR ::" + error);
    res
      .status(500)
      .json({ Message: "There was an error displaying the ingredients." });
  }
});

module.exports = router;
