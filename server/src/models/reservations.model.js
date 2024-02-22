const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Reservations = sequelize.define("Reservations", {
    reservation_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    reservation_nPersons: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Reservations.associate = (models) => {
    Reservations.belongsTo(models.ReservationStatus, {
      foreignKey: "ReservationStatusId",
    });
    Reservations.belongsTo(models.Users, { foreignKey: "UserId" });
  };

  return Reservations;
};
