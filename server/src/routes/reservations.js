const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router
  .route("/")
  .get(reservationController.reservation.getAllReservations)
  .post()
  .put()
  .delete();

module.exports = router;
