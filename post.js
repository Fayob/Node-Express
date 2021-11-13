const express = require("express");
const app = express();

const { another } = require("./data");

// static assets
app.use(express.static("./public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json(another);
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pls input valid name" });
  }
  res.status(201).send({ success: true, person: name });
});
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pls input valid name" });
  }
  res.status(201).send({ success: true, info: [...another, name] });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = another.find((per) => per.id === Number(id));

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = another.map((per) => {
    if (per.id === Number(id)) {
      per.names = name;
    }
    return per;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/postman/people/:id", (req, res) => {
  const person = another.find((para) => para.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = another.filter((para) => para.id !== Number(req.params.id));
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(3000, () => {
  console.log("Server listening on port 5000...");
});
