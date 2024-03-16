const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./src/middlewares/Cors.middleware");
const PORT = process.env.PORT;
require("dotenv").config();

app.use(express.json());

app.use(cors(corsOptions));

const db = require("./src/models");

app.use("/api/users", require("./src/routes/users.route"));
app.use("/api/reservations", require("./src/routes/reservations.route"));
app.use("/api/meals", require("./src/routes/meals.route"));
app.use("/api/ratings", require("./src/routes/ratings.route"));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("Server host on port ", PORT));
});
