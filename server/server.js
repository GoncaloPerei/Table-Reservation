const express = require('express');
const app = express();

app.use(express.json());

const db = require("./models");

const userRouter = require("./routes/users");
app.use("/users", userRouter)

db.sequelize.sync().then(() => {
    app.listen(5173, () => {
        console.log("Server running on port 5173");
    });
});