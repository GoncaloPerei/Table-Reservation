const express = require("express");
const router = express.Router();
const mealController = require("../controllers/meal.controller");

router
  .route("/")
  .get(mealController.Meal.getAll)
  .post(mealController.Meal.create);

router
  .route("/type")
  .get(mealController.MealTypes.getAll)
  .post(mealController.MealTypes.create);

module.exports = router;
