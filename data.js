//const { readFileSync } = require("fs");

//const example = readFileSync("../JSON Files/sample4.json", "utf8");

const people = [
  {
    id: 1,
    firstName: "Joe",
    lastName: "Jackson",
    gender: "male",
    age: 28,
    number: "7349282382",
  },
  {
    id: 2,
    firstName: "James",
    lastName: "Smith",
    gender: "male",
    age: 32,
    number: "5678568567",
  },
  {
    id: 3,
    firstName: "Emily",
    lastName: "Jones",
    gender: "female",
    age: 24,
    number: "456754675",
  },
];
const another = [
  { id: 1, names: "john" },
  { id: 2, names: "Love" },
  { id: 3, names: "Lynn" },
  { id: 4, names: "Peter" },
  { id: 5, names: "Glory" },
  { id: 6, names: "Blessing" },
];
module.exports = { people, another };
