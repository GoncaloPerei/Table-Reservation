const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_phone_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Ratings, { onDelete: "cascade" });
    Users.hasMany(models.Bookings, { onDelete: "cascade" });
  };
  return Users;
};
