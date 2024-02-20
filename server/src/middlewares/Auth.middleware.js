const { verify } = require("jsonwebtoken");
require("dotenv").config();

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) {
    return res.status(401).json({ message: "Missing token" });
  }

  try {
    const validToken = verify(accessToken, process.env.SECRET);
    req.user = validToken;

    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { validateToken };
