const { Reservations, ReservationStatus } = require("../models");

class Reservation {
  constructor() {}

  static async getAll(req, res) {
    try {
      const listOfReservations = await Reservations.findAll();
      res.json(listOfReservations);
    } catch (e) {
      res
        .status(500)
        .json({ message: "Failed to fetch reservations", Error: err.message });
    }
  }

  static async create(req, res) {
    const reservation = {
      reservation_date: req.body.reservation_date,
      reservation_nPersons: req.body.reservation_nPersons,
      reservation_message: req.body.reservation_message,
      ReservationStatusId: 1,
      UserId: req.user.id,
    };
    try {
      const response = await Reservations.create(reservation);
      res.status(201).json({
        message: "Reservation successfully created",
        reservation: response,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to create reservation", error: error });
    }
  }
}

class Status {
  static async getAll(req, res) {
    try {
      const Status = await ReservationStatus.findAll();
      res.status(200).json(Status);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to fetch reservation status", Error: error });
    }
  }

  static async create(req, res) {
    const Status = req.body;
    try {
      const newReservationStatus = await ReservationStatus.create(Status);
      res.status(201).json({
        message: "Reservation status successfully created",
        Status: newReservationStatus,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to create reservation status", Error: error });
    }
  }
}

module.exports = {
  reservation: Reservation,
  status: Status,
};
