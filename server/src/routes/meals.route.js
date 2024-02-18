const express = require("express");
const router = express.Router();
const mealController = require("../controllers/meal.controller");

const { Meals } = require("../models");

router
  .route("/")
  .get(mealController.Meal.getAll)
  .post(mealController.Meal.create)
  .put()
  .delete();

router
  .route("/type")
  .get(mealController.MealTypes.getAll)
  .post(mealController.MealTypes.create);

module.exports = router;
