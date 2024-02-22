const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservation.controller");
const { validateToken } = require("../middlewares/Auth.middleware");

router
  .route("/")
  .get(reservationController.reservation.getAll)
  .post(validateToken, reservationController.reservation.create)
  .put()
  .delete();

router
  .route("/type")
  .get(reservationController.status.getAll)
  .post(reservationController.status.create);

module.exports = router;
