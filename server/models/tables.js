const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const Tables = sequelize.define("Tables", {
        table_number:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        table_capacity:{type:DataTypes.INTEGER,},
    });

    return Tables;
}