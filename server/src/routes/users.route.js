const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { validateToken } = require("../middlewares/Auth.middleware");

router.route("/").get(userController.user.getAll);

router.route("/login").post(userController.user.login);

router.route("/register").post(userController.user.create);

router.route("/auth").get(validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
