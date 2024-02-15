const { Meals, MealType } = require("../models");

class Meal {
  static async getAll(req, res) {
    try {
      const meals = await Meals.findAll();
      res.status(200).json(meals);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch meals", error: err });
    }
  }

  static async create(req, res) {
    const meal = req.body;
    try {
      const newMeal = await Meals.create(meal);
      res
        .status(201)
        .json({ message: "Meal successfully created", meal: newMeal });
    } catch (err) {
      res.status(500).json({ message: "Failed to create meal", error: err });
    }
  }
}

class MealTypes {
  static async getAll(req, res) {
    try {
      const mealTypes = await MealType.findAll();
      res.status(200).json(mealTypes);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to fetch meal types", error: err });
    }
  }

  static async create(req, res) {
    const mealType = req.body;
    try {
      const newMealType = await MealType.create(mealType);
      res.status(201).json({
        message: "Meal type successfully created",
        mealType: newMealType,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to create meal type", error: err });
    }
  }
}

module.exports = {
  Meal,
  MealTypes,
};
