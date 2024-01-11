const express = require('express');
const app = express();
const IndexRouter = require("./routes/index");
const { auth } = require('express-openid-connect');
require("dotenv").config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

app.use(express.json());
app.use(auth(config));


const db = require("./models");

app.use("/", IndexRouter);

const userRouter = require("./routes/users");
app.use("/users", userRouter)

db.sequelize.sync().then(() => {
    app.listen(5173, () => {
        console.log("Server running on port 5173");
    });
});