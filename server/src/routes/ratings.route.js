const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/rating.controller");
const { validateToken } = require("../middlewares/Auth.middleware");
router
  .route("/")
  .get(ratingController.Rating.getAll)
  .post(validateToken, ratingController.Rating.create);

router.route("/sum").get(ratingController.Rating.sumScore);

module.exports = router;
