const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./src/config/corsOptions");

app.use(express.json());

app.use(cors(corsOptions));

const db = require("./src/models");

app.use("/users", require("./src/routes/users"));
app.use("/reservations", require("./src/routes/reservations"));

db.sequelize.sync().then(() => {
  app.listen(3002, () => console.log("server started on port 3002"));
});
