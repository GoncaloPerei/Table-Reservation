const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservation.controller");

router
  .route("/")
  .get(reservationController.reservation.getAllReservations)
  .post()
  .put()
  .delete();

module.exports = router;
