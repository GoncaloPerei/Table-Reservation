const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const BookingStatus = sequelize.define("BookingStatus", {
        status_type:{
            type:DataTypes.STRING,
            allowNull: false,
        },
    });

    return BookingStatus;
}