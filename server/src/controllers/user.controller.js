const { Users } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { sign } = require("jsonwebtoken");

class User {
  constructor() {}

  static async getAll(req, res) {
    try {
      await Users.findAll().then((response) => res.status(200).json(response));
    } catch (err) {
      res.status(404).json({
        message: "Users not found",
        err,
      });
    }
  }

  static async create(req, res) {
    const hashedPassword = await bcrypt.hash(req.body.user_password, 10);
    const user = {
      user_email: req.body.user_email,
      user_password: hashedPassword,
      user_first_name: req.body.user_first_name,
      user_last_name: req.body.user_last_name,
    };
    try {
      await Users.create(user).then((user) =>
        res.status(200).send({ message: "User successfully created", user })
      );
    } catch (err) {
      res.status(401).json({
        message: "User not successfully created",
        user,
      });
    }
  }

  static async login(req, res) {
    try {
      const { user_email, user_password } = req.body;

      const user = await Users.findOne({
        where: { user_email: user_email },
      });
      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(
        user_password,
        user.user_password
      );

      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      const accessToken = await sign(
        {
          user_first_name: user.user_first_name,
          user_last_name: user.user_last_name,
          user_email: user.user_email,
          user_phone_number: user.user_phone_number,
          id: user.id,
        },
        process.env.SECRET
      );

      return res.json(accessToken);
    } catch (error) {
      return res.status(400).json({
        message: "an internal error occured",
        error,
      });
    }
  }
}

module.exports = {
  user: User,
};
