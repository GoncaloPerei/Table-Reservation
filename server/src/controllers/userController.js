const { Users } = require("../models");
const { Op } = require("sequelize");

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
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
  }
}

class Customer extends User {
  constructor(id) {
    super(id);
  }

  static async getAllUsers(req, res) {
    try {
      const listOfUsers = await Users.findAll({
        where: {
          administrador: {
            [Op.eq]: 1,
          },
        },
      });
      res.json(listOfUsers);
    } catch (e) {
      res.send(Error(e));
    }
  }

  static async createUser(req, res) {
    const user = req.body;
    await Users.create(user);
    res.json(user);
  }
}

class Administrator extends User {
  constructor(data) {
    super(data, data, data, data, data);
  }

  static async getAllUsers(req, res) {
    try {
      const listOfUsers = await Users.findAll({
        where: {
          administrador: {
            [Op.eq]: 1,
          },
        },
      });
      res.json(listOfUsers);
    } catch (e) {
      res.send(Error(e));
    }
  }
}

module.exports = {
  user: User,
  customer: Customer,
  administrador: Administrator,
};
