const { another } = require("../data");

const getPerson = (req, res) => {
  res.status(200).json(another);
};

const postPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pls input valid name" });
  }
  res.status(201).send({ success: true, person: name });
};

const postPostmanPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pls input valid name" });
  }
  res.status(201).send({ success: true, info: [...another, name] });
};

const putPerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const person = another.find((para) => para.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = another.filter((para) => para.id !== Number(req.params.id));
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPerson,
  postPerson,
  postPostmanPerson,
  putPerson,
  deletePerson,
};
