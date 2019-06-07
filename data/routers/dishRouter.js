const express = require("express");

const router = express.Router();

const dishHelper = require("../helpers/dishHelper.js");

router.get("/", async (req, res) => {
  try {
    const dishes = await dishHelper.find();
    res.status(201).json(dishes);
  } catch (error) {
    console.log(":: ERROR ::");
    res
      .status(500)
      .json({ Message: "There was an error displaying the dishes." });
  }
});

module.exports = router;
