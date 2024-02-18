const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./src/config/corsOptions");

app.use(express.json());

app.use(cors(corsOptions));

const db = require("./src/models");

app.use("/api/users", require("./src/routes/users.route"));
app.use("/api/reservations", require("./src/routes/reservations.route"));
app.use("/api/meals", require("./src/routes/meals.route"));
app.use("/api/ratings", require("./src/routes/ratings.route"));

db.sequelize.sync().then(() => {
  app.listen(3002, () => console.log("server started on port 3002"));
});
