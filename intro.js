const path = require("path");

console.log(path.sep);
console.log(path.join);

const wet = path.resolve(__filename);
console.log(wet);

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("Hello.txt");
console.log(first);
const write = writeFileSync(
  "./thus.txt",
  "this is the another word i want inside my another text file"
);

const read = readFileSync("./this.txt");
console.log(`this is the file ${read} i'm expecting`);
