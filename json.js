const express = require("express");
const app = express();
const { people } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1> Home </h1><a href = '/api/names'> Names </a> ");
});

app.get("/api/names", (req, res) => {
  const newName = people.map((name) => {
    const { firstName, lastName, age } = name;
    return { firstName, lastName, age };
  });
  res.json(newName);
});

app.get("/api/names/:peopleID", (req, res) => {
  const { peopleID } = req.params;
  const newPeople = people.find((peo) => peo.id === Number(peopleID));
  if (!newPeople) {
    return res.status(200).send("The page does not exist");
  }
  res.json(newPeople);
});

app.get("/api/products/:productID/reviews/reviewID", (req, res) => {
  console.log(req.params);
  res.send("Good");
});
app.get("/api/v1/query", (req, res) => {
  //  console.log(req.query);
  const { search, limit } = req.query;
  let peopleName = [...people];

  if (search) {
    peopleName = peopleName.filter((pepe) => {
      return pepe.firstName.startsWith(search);
    });
  }
  if (limit) {
    peopleName = peopleName.slice(0, Number(limit));
  }
  res.status(200).json(peopleName);
  if (peopleName.length < 1) {
    return res.status(200).send("No Match for your Search");
  }
  res.send(200).json(peopleName);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
