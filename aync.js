const { readFile, writeFile } = require("fs");

readFile("this.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
