const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/rating.controller");

router
  .route("/")
  .get(ratingController.Rating.getAll)
  .post(ratingController.Rating.create)
  .put()
  .delete();

module.exports = router;
