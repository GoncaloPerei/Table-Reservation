const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const TableStatus = sequelize.define("TableStatus", {
    table_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  TableStatus.associate = (models) => {
    TableStatus.hasMany(models.Tables, { onDelete: "cascade" });
  };

  return TableStatus;
};
