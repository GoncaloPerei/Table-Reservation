const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const BookingStatus = sequelize.define("BookingStatus", {
    status_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  BookingStatus.associate = (models) => {
    BookingStatus.hasMany(models.Bookings, { onDelete: "cascade" });
  };

  return BookingStatus;
};
