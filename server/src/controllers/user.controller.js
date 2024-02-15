const { Users } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

class User {
  constructor(id, firstname, lastname, email, password, administrador) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.administrador = administrador;
  }

  static async getAllUsers(req, res) {
    try {
      await Users.findAll().then((response) => res.status(200).json(response));
    } catch (err) {
      res.status(404).json({
        message: "Users not found",
        err,
      });
    }
  }

  static async createUser(req, res) {
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

  static async loginUser(req, res) {
    try {
      const user = await Users.findOne({
        where: { user_email: req.body.user_email },
      });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(
        req.body.user_password,
        user.user_password
      );

      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      const accessToken = sign(
        { user_email: user.user_email, id: user.id },
        process.env.SECRET
      );
      res.json({ message: "user authenticated" });
    } catch (err) {
      res.status(400).json({
        message: "an internal error occured",
        err,
      });
    }
  }
}

module.exports = {
  user: User,
};
