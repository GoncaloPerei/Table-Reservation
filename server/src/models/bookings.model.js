const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define("Bookings", {
    booking_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    booking_nPersons: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Bookings.associate = (models) => {
    Bookings.belongsTo(models.BookingStatus, { foreignKey: "BookingStatusId" });
    Bookings.belongsTo(models.Users, { foreignKey: "UserId" });
  };

  return Bookings;
};
