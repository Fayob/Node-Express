const express = require("express");
const app = express();

const { another } = require("./data");
const morgan = require("morgan");
const logger = require("./middleware-eg");
const authorize = require("./authorize");

//app.use("/api", [logger, authorize]);
//third party middleware
/*
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/names", (req, res) => {
  res.send("People's name");
});

app.get("/api/products", (req, res) => {
  res.send("Product");
}); */

app.use(express.static("public"));

app.get("/api/qwerty", (req, res) => {
  res.status(200).json({ success: true, data: another });
});

app.listen(5000, () => {
  console.log("Server is Listening on Port 5000");
});
