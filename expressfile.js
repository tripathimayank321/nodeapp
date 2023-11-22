const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/error", function (req, res) {
  throw new Error("Webpage not found");
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.use(function (req, res, next) {
  console.log("Middleware");
  next();
});

app.get("/", function (req, res) {
  res.render("homepage", { newvariable: "hey i am passed variable" });
});

app.get("/profile", function (req, res) {
  res.send("Welcome to profile page");
});

app.get("/aboutus", function (req, res) {
  res.render("aboutus");
});

app.get("/profile/:username", function (req, res) {
  res.send(`Welcome to ${req.params.username} dynamic page`);
});

app.listen(2000);
console.log("Server is listening on port 2000");
