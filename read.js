const { readFile, writeFile } = require("fs");

const green = readFile("this.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

const ready = writeFile(
  "./Good Content",
  "I like this content part very well",
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  }
);
console.log("Hello People");
