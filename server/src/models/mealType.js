const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const MealType = sequelize.define("MealType", {
    meal_type: {
      type: DataTypes.STRING,
      allownull: false,
    },
  });

  MealType.associate = (models) => {
    MealType.hasMany(models.Meals, { onDelete: "cascade" });
  };

  return MealType;
};
