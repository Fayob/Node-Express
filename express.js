const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../HTML AND CSS/assignment.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("<h1> Oops Not Found </h1>");
});

app.listen(3000, () => {
  console.log("Alet!!! Visitor is Here");
});

//First Example with Express
/*
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
*/
