require("./db/config");
const express = require("express"),
  morgan = require("morgan"),
  app = express(),
  playersRoutes = require("./routes/players"),
  usersRoutes = require("./routes/users"),
  cookieParser = require("cookie-parser"),
  passport = require("./middleware/authentification"),
  secureRoutes = require("./routes/secure/secureRoutes"),
  path = require("path");

// Parse incoming JSON into objects

app.use(express.json());
app.use(morgan("dev"));

//unauthenticated routes
app.use("/api/users", usersRoutes);
app.use("/api/players", playersRoutes);

app.use(cookieParser());

// any routes/middleware after this line are only accessible after theyve been authenticated
app.use("/api/*", passport.authenticate("jwt", { session: false }));

//this is messy, need to seperate concerns ie move to secure routes files
app.use("/api", secureRoutes);

// if (process.env.NODE_ENV === "production") {
//   // Serve any static files
//   app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
// }

// if (process.env.NODE_ENV === "production") {
//   // Handle React routing, return all requests to React app
//   app.get("*", (request, response) => {
//     response.sendFile(
//       path.resolve(__dirname, "..", "client", "build", "index.html")
//     );
//   });
// }

module.exports = app;
