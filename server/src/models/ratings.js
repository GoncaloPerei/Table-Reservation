const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define("Ratings", {
    rating_comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating_score: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  });

  return Ratings;
};
