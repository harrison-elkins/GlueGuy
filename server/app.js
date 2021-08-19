require("./db/config");
const express = require("express"),
  morgan = require("morgan"),
  playersRoutes = require("./routes/players"),
  app = express();

// Parse incoming JSON into objects
app.use(express.json());
// Log all requests
app.use(morgan("dev"));

app.use("/api/players", playersRoutes);

module.exports = app;
