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
    rating_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  Ratings.associate = (models) => {
    Ratings.belongsTo(models.Users, { foreignKey: "UserId" });
  };

  return Ratings;
};
