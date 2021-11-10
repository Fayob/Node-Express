const express = require("express");
const app = express();
//First Example with Express
app.get("/", (req, res) => {
  res.status(200).send("<h1> Welcome Back</h1>");
});
app.get("/about", (req, res) => {
  res.status(200).send("<h1> About Page </h1>");
});
app.all("*", (req, res) => {
  res.status(404).send("<h3>File Not Found</h3>");
});

app.listen(3000, () => {
  console.log("Visitor is here");
});
