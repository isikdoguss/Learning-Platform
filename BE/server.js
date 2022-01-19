require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");

//Database
const db = require("./config/sequelize.config");
// Test DB Connection
db.authenticate()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

const app = express();

//cors
app.use(cors());

//Middlewares
app.use(bodyParser.json());

// Route Middlewares
// app.use("/auth", routes.auth);
// app.use("/user", routes.user);
// app.use("/role", routes.role); //
// app.use("/user_role", routes.user_role);
// app.use("/category", routes.category);
// app.use("/course", routes.course);
// app.use("/course_category", routes.course_category);

app.use((req, res) => {
  res.status(404).send("404 Page not found.");
});
app.get("/", (req, res) => {
  res.send("hey from the homepage!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: http://localhost:${process.env.PORT}`);
});
