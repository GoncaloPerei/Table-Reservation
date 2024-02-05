const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .route("/")
  .get(userController.customer.getAllUsers)
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
