const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./src/config/corsOptions");

app.use(express.json());

app.use(cors(corsOptions));

const db = require("./src/models");

const userRouter = require("./src/routes/users");
app.use("/users", userRouter);

db.sequelize.sync().then(() => {
  app.listen(5173, () => {
    console.log("Server running on port 5173");
  });
});
