const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const TableStatus = sequelize.define("TableStatus", {
        table_status:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        table_capacity:{type:DataTypes.INTEGER,},
    });

    return Tables;
}