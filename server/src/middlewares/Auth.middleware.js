const { verify } = require("jsonwebtoken");
require("dotenv").config();

const validateToken = async (req, res, next) => {
  const bearerToken = req.header("Authorization");

  if (!bearerToken) {
    return res.status(401).json({ message: "Missing token" });
  }

  const token = bearerToken.split(" ")[1];

  try {
    const validToken = verify(token, process.env.SECRET);
    req.user = validToken;

    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { validateToken };
