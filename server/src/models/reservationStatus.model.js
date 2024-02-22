const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const ReservationStatus = sequelize.define("ReservationStatus", {
    reservation_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  ReservationStatus.associate = (models) => {
    ReservationStatus.hasMany(models.Reservations, { onDelete: "cascade" });
  };

  return ReservationStatus;
};
