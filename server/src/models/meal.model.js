const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Meals = sequelize.define("Meals", {
    meal_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meal_price_dose: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    meal_price_doseHalf: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
  });

  return Meals;
};
