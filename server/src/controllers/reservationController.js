const { Bookings } = require("../models");

class Reservation {
  constructor() {}

  static async getAllReservations(req, res) {
    try {
      const listOfReservations = await Bookings.findAll();
      res.json(listOfReservations);
    } catch (e) {
      res.send(Error(e));
    }
  }
}

module.exports = {
  reservation: Reservation,
};
