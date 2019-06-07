const express = require("express");

const router = express.Router();

const recipeHelper = require("../helpers/recipeHelper.js");

router.get("/", async (req, res) => {
  try {
    const recipes = await recipeHelper.find();
    res.status(201).json(recipes);
  } catch (error) {
    console.log(":: ERROR ::");
    res
      .status(500)
      .json({ Message: "There was an error displaying the recipes." });
  }
});

module.exports = router;
