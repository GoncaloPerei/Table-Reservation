const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { validateToken } = require("../middlewares/Auth.middleware");

router
  .route("/")
  .get(userController.user.getAllUsers)
  .put((req, res) => {})
  .delete((req, res) => {});

router.route("/login").post(userController.user.loginUser);
router.route("/register").post(userController.user.createUser);
router.route("/auth").get(validateToken, (req, res) => {
  res.json(req.user);
});
module.exports = router;
